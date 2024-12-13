import styles from "./videoHero.module.css"
import { FaPhoneAlt } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { useWindowSize } from "@uidotdev/usehooks";

import stargate from "../../public/gallary/stargate.webp"
import Image from "next/image"
const VideoHero = ()=>{
    const router = useRouter()
    const size = useWindowSize();
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
    return (
        <div className={`${styles.wrapper} body-wrapper`}>
        <div className={styles.column}>
        <h2 className="subHeading" style={
            {marginTop:0}
        }>Inspiring Creations: Our Recent Web Marvels</h2>
        <p className="content">Explore our showcase of recent web marvels, where innovation meets excellence. Be inspired by our diverse portfolio and envision the potential for your digital journey. Contact us to craft your masterpiece today</p>
        <div onClick={()=>{gtag_report_conversion('tel:8920152023');}} className={`body-wrapper justify-start ${styles.phoneWrapper}`}>
            <div className={`${styles.icon}`}>
                <FaPhoneAlt />
            </div>
            <p className={styles.phone}>Connect with us Now</p>
        </div>
        <div className="body-wrapper justify-start">
            <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/recentProjects")}}>Explore Recent Projects</button>
            </div>
        </div>
        <div onClick={()=>{
            window.open("https://stargateeducation.com", '_blank');
        }} className={styles.column}>
            {/* {size.width && size.width >500 ?<Image src={stargate} style={{objectFit:"contain" , borderRadius:"10px" , boxShadow:"0px 10px 20px #00000040"}} width={"500"} alt="something" />:
            <Image src={stargate} style={{objectFit:"contain" , borderRadius:"10px" , boxShadow:"0px 10px 20px #00000040"}} width={"300"} alt="something" />} */}
            <div style={{position:"relative", width:"100%" , height:"500px"  , boxShadow:"10px 10px 15px #00000070"}}>
            <Image src={stargate} fill={true} style={{objectFit:"contain"}} alt="something" />
            </div>
            <p className="subHeading center">Stargate Education</p>
      </div>
      </div>
    )
}

export default VideoHero;