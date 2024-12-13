import Image from "next/image";
import { useRouter } from "next/navigation.js"
import styles from "./carousel.module.css"

const SingleImage = ({url})=>{
    const router = useRouter()

    return(
       
       <div onClick={()=>{router.push("/contact-form")}} className="backgroundImgWrapper">
         <div className={styles.hiddenDiv}> 
          <div  className={styles.shade}></div>
          <div className={styles.content}>
          <h1 className={styles.heading}>Empowering Your Digital Presence with Innovative Solutions</h1>
          <p className={styles.p}>Call Us Now: +918920152023</p>
          <button className={styles.btn}>Request A Callback</button>
          </div>
          <br></br>
        </div>
            </div>   
            
          
    )
}

export default SingleImage