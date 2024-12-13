import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation.js"
import styles from "./carousel.module.css"

const SingleImage = ({url})=>{
    const size = useWindowSize();
    const router = useRouter()

    return(
       <>{size.width && <div className="backgroundImgWrapper">
         <div className={styles.hiddenDiv}> 
          <h1>Empowering Your Digital Presence with Innovative Solutions</h1>
          <br></br>
          <p>We provide comprehensive solutions in digital marketing, web development, web app development, SEO, and SMO. Our mission is to help businesses grow by creating user-friendly websites, innovative applications, and result-driven marketing strategies. Together, let&apos;s build a stronger, smarter digital presence for your brand.</p>
        </div>
            {size.width>615 ? <Image onClick={()=>{router.push("/contact-form")}} className="backgroundImg" fill={false} height={660} style={{objectFit: "cover" , objectPosition:"left"}} src={url[0]} alt="iraq ziyarat packages" />
            :<Image onClick={()=>{router.push("/contact-form")}} className="backgroundImg" height={400} style={{objectFit: "cover" , objectPosition:"left"}} src={url[1]} alt="iraq ziyarat packages" />}
            </div>   }  </>     
    )
}

export default SingleImage