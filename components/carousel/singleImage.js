import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation.js"
import styles from "./carousel.module.css"

const SingleImage = ({url})=>{
    const size = useWindowSize();
    const router = useRouter()

    return(
       <>{size.width && 
       <div onClick={()=>{router.push("/contact-form")}} className="backgroundImgWrapper">
         
            {size.width>615 ? <Image className="backgroundImg" fill={false} height={660} style={{objectFit: "cover" , objectPosition:"left"}} src={url[0]} alt="a man doing digital marketing" />
            :<div className={styles.hiddenDiv}> 
          <div  className={styles.shade}></div>
          <div className={styles.content}>
          <h1 className={styles.heading}>Empowering Your Digital Presence with Innovative Solutions</h1>
          <p className={styles.p}>Call Us Now: +918920152023</p>
          <button className={styles.btn}>Request A Callback</button>
          </div>
          <br></br>
        </div>}
            </div>   
          }  
        </>     
    )
}

export default SingleImage