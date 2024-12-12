import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectToWhatsApp = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/+918920152023";
    }, 1500); // 2-second delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Redirecting to WhatsApp...</h1>
      <p>Please wait a moment.</p>
    </div>
  );
};

export default RedirectToWhatsApp;
