import { useState } from "react";
import styles from "./login.module.css";
import { addUser, checkStorageForAdminToken, checkUser } from "@/services/auth";
import { useRouter } from "next/router";

const LoginComponent = () => {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [serviceRequired, setServiceRequired] = useState("");
    const [hasWebsite, setHasWebsite] = useState(null);
    const [websiteLink, setWebsiteLink] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [password, setPassword] = useState("");
    const [isSuccess, setSuccess] = useState(false);
    const [isRegister, setIsRegister] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = "Full Name is required.";
        }
        if (!userId.trim()) {
            newErrors.userId = "Phone Number is required.";
        } else if (!/^\d{10}$/.test(userId)) {
            newErrors.userId = "Phone Number must be exactly 10 digits.";
        }
        if (isRegister && !serviceRequired) {
            newErrors.serviceRequired = "Please select a service.";
        }
        if (hasWebsite === "yes" && !websiteLink.trim()) {
            newErrors.websiteLink = "Website link is required.";
        } else if (hasWebsite === "yes" && !/^https?:\/\/\S+$/.test(websiteLink)) {
            newErrors.websiteLink = "Please enter a valid website link.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onLogin = async () => {
        if (!validateForm()) return;

        await checkUser(userId, password);
        if (!checkStorageForAdminToken()) {
            router.push("/");
        } else {
            router.push("/admin-panel");
        }
    };

    const onRegister = async () => {
        if (!validateForm()) return;

        try {
            setIsLoading(true);
            await addUser({ 
                name, 
                userId, 
                password, 
                serviceRequired,
                hasWebsite,
                websiteLink,
                role: "customer", 
                time: new Date().toLocaleString() 
            });
            setIsLoading(false);
            setSuccess(true);
            router.push("/thankyou");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={`margin ${styles.margin}`}>
            <div className={`body-wrapper column`}>
                <div className={`${styles.wrapper}`}>
                    <div className="body-wrapper justify-between" style={{ marginBottom: "10px" }}>
                        <p className={styles.heading}>{isRegister ? "Request Call Back" : "Login"}</p>
                    </div>
                    <p className={styles.content}>
                        Leave your details and let&apos;s connect. Our team will reach out promptly to discuss your project requirements and goals.
                    </p>
                    <form>
                        {isRegister && (
                            <>
                                <div className={styles.formItem}>
                                    <label className={styles.label} htmlFor="name">Full Name</label><br />
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        className={styles.input}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your Full Name"
                                    />
                                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                                </div>
                                <div className={styles.formItem}>
                                    <label className={styles.label} htmlFor="serviceRequired">Service Required</label><br />
                                    <select
                                        onChange={(e) => setServiceRequired(e.target.value)}
                                        className={styles.input}
                                        id="serviceRequired"
                                        name="serviceRequired"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Website Development">Website Development</option>
                                        <option value="Software Development">Software Development</option>
                                    </select>
                                    {errors.serviceRequired && <p className={styles.error}>{errors.serviceRequired}</p>}
                                </div>
                                <div className={styles.formItem}>
                                    <label className={styles.label}>Do you have a website?</label><br />
                                    <br />
                                    <label className={styles.radio}>
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="yes"
                                            onChange={(e) => setHasWebsite(e.target.value)}
                                        /> Yes
                                    </label>
                                    <label className={styles.radio}>
                                        <input
                                            type="radio"
                                            name="hasWebsite"
                                            value="no"
                                            onChange={(e) => {
                                                setHasWebsite(e.target.value);
                                                setWebsiteLink("");
                                            }}
                                        /> No
                                    </label>
                                    {errors.hasWebsite && <p className={styles.error}>{errors.hasWebsite}</p>}
                                </div>
                                {hasWebsite === "yes" && (
                                    <div className={styles.formItem}>
                                        <label className={styles.label} htmlFor="websiteLink">Website Link</label><br />
                                        <input
                                            onChange={(e) => setWebsiteLink(e.target.value)}
                                            className={styles.input}
                                            type="text"
                                            id="websiteLink"
                                            name="websiteLink"
                                            placeholder="Enter your website link"
                                        />
                                        {errors.websiteLink && <p className={styles.error}>{errors.websiteLink}</p>}
                                    </div>
                                )}
                            </>
                        )}
                        <div className={styles.formItem}>
                            <label className={styles.label} htmlFor="userId">Phone Number</label><br />
                            <input
                                onChange={(e) => setUserId(e.target.value)}
                                className={styles.input}
                                type="text"
                                id="userId"
                                name="userId"
                                placeholder="Enter your phone number"
                            />
                            {errors.userId && <p className={styles.error}>{errors.userId}</p>}
                        </div>
                        {!isLoading ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    isRegister ? onRegister() : onLogin();
                                }}
                                className="primary-btn blue"
                            >
                                {isSuccess
                                    ? "We have received your request. We will be in touch shortly."
                                    : isRegister
                                    ? "Submit"
                                    : "Login"}
                            </button>
                        ) : (
                            <p>Loading...</p>
                        )}
                        {isSuccess && (
                            <p
                                style={{
                                    textDecoration: "underline",
                                    marginTop: "10px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    router.push("/");
                                }}
                            >
                                Go Back
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;