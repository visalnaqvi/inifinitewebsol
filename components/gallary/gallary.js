import Image from "next/image";
import styles from "./gallary.module.css"
import { useWindowSize } from "@uidotdev/usehooks";

const Gallary = ({images})=>{
    const size = useWindowSize();

    return(
        <div className={`body-wrapper justify-between ${styles.wrapper}`}>
             
            {
                images.map((e,i)=>(
                   <div className={styles.backgroundWrapper} key={i}  onClick={()=>{
                    window.open(e.link, '_blank');
                }}>
                                        <p className="subHeading center">{e.name}</p>

                     <div className={styles.backgroundImgWrapper}>
                    {size.width && size.width > 500 ? <Image className={styles.backgroundImg} 
                    fill={false} height={400} style={{objectFit: "contain"}} 
                    
                    src={e.src} alt="iraq ziyarat packages" />:
                    <Image className={styles.backgroundImg} 
                    fill={false} height={200} style={{objectFit: "contain"}} 
                    
                    src={e.src} alt="iraq ziyarat packages" />}
                   
                    </div>
                    <div className="body-wrapper"><button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/interiorProjects")}}>View Website</button></div>
                    </div>
                ))
            }
         
        </div>
    )
}

export default Gallary;