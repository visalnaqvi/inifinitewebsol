import Image from "next/image"
import logo from "../../public/logo.png"
import styles from "./navBar.module.css"
import { GiHamburgerMenu , GiCancel } from "react-icons/gi"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useWindowSize } from "@uidotdev/usehooks";
const NavBar = () => {

    const router = useRouter()
    const [isVisible , setIsVisible] = useState(true);
    const size = useWindowSize();

    useEffect(()=>{
        setIsVisible(size.width>=1040)
    },[size])

    return (
        <div>
            <div className={`${styles.navBar} body-wrapper justify-between`} style={{ flexWrap: "nowrap" }}>
            <div onClick={()=>{
                setIsVisible(!isVisible)
            }} className={styles.hamMenu}>
            {isVisible ? <GiCancel style={{pointerEvents:"none"}} /> :<GiHamburgerMenu style={{pointerEvents:"none"}} />}
            </div>
                {size.width> 500 ?<Image src={logo} width={200} style={{objectFit:"contain"}} alt="al azeem logo" />:
                <Image src={logo} width={120} style={{objectFit:"contain"}} alt="al azeem logo" />}
               <div className={`${styles.mainMenu} ${!isVisible && styles.notVisible}`}>
                    <ul className="body-wrapper">
                    <li onClick={()=>{
                        router.push("/")}}>Home</li>
                    <li className={styles.pointer} onClick={()=>{
                    router.push("/recentProjects")}}>Recent Projects</li>
                    <li onClick={()=>{
                        router.push("/contactus")}}>Contact Us</li>
                    <li onClick={()=>{
                        router.push("/aboutUs")}}>About Us</li>
                    <li className={styles.pointer} onClick={()=>{
                    router.push("/blogs")}}>Blogs</li>
                    </ul>
                </div>
                <div className={`${styles.w20} body-wrapper`}>
                    
                   
                <button onClick={()=>{router.push("/contact-form")}} className="primary-btn blue" style={{ marginTop: "0" , fontSize:"12px" }}>Get Callback</button>

                   
                </div>
            </div>
    
        </div>
    )
}

export default NavBar