import Link from "next/link";
import styles from "./contactBox.module.css"
import { useRouter } from "next/navigation";
const ContactBox = ()=>{
    const router = useRouter()
    function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11324889747/WLMkCITlkaoZEJO1kJgq',
            'event_callback': callback
        });
        return false;
      }
    return(
        <div className={`body-wrapper ${styles.wrapper}`}>
            <div className={styles.contactBoxSection}>
                <h3 style={{marginTop:0}} className="subHeading">Contact Us for more information</h3>
                <p style={{color:"white"}} className="content">Have questions or ready to start your project? Contact us today for personalized assistance and expert guidance. We&apos;re here to help you turn your vision into reality.</p>
                {/* <p style={{color:"white"}} className="content"><strong>Email: aatravels1170@gmail.com</strong></p> */}
                <button onClick={()=>{router.push("/login")}}>Request a Callback</button>

            </div>
            <div className={styles.contactBoxSection}>
                {/* <p><strong>OR CLASS US NOW ON</strong></p><br></br> */}
                <div>
                <Link onclick={()=>{return gtag_report_conversion('tel:8920152023');}} href="tel:8920152023"><button>+91 8920152023</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ContactBox;