import styles from "./quickContact.module.css"
import {BsWhatsapp} from "react-icons/bs"
import {AiTwotonePhone} from "react-icons/ai"
import Link from "next/link"
const QuickContacts = ()=>{
    function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11324889747/LontCNe3i_UZEJO1kJgq',
            'event_callback': callback
        });
        return false;
      }
    return(
        <div className={`body-wrapper justify-end ${styles.wrapper}`}>
           <div onClick={()=>{gtag_report_conversion('https://wa.me/+918920152023');}} className={`${styles.icon} ${styles.wa} body-wrapper`}>
                <BsWhatsapp />
            </div>
            <div onClick={()=>{gtag_report_conversion('tel:8920152023');}} className={`${styles.icon} ${styles.call} body-wrapper`}>
                <AiTwotonePhone />
            </div>
            {/* <Link href="tel:9205184001"><div className={`${styles.icon} ${styles.call} body-wrapper`}>
                <BsFacebook />
            </div></Link> */}
        </div>
    )
}

export default QuickContacts;