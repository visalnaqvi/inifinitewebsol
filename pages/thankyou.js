import SingleImage from "../components/carousel/singleImage.js"
import Head from "next/head.js"
import background from "../public/sliders/homePageSlider/desktop/slider_1.png"
import background_mb from "../public/sliders/homePageSlider/mobile/slider_1_mb.png"

const ThankYou = ()=>{
    return(
        <div>
       <Head>
      <title>Thank You | Webiste and Web Apps Service in Noida</title>
    </Head>
    
        {/* <SingleImage url={[background , background_mb]} />  */}
      
        <div className="margin">
          <div className="body-wrapper justify-between">
            <h2 className="subHeading">Thank You for your submission</h2>
          </div>
          <p className="content">Thank you for reaching out to InfiniteWeb Solutions! We appreciate your interest in our services. Our team is eager to connect with you and discuss your project in detail. Expect a prompt response as we strive to exceed your expectations and bring your vision to life.</p>
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"16px"}} className="primary-btn blue" onClick={()=>{router.push("/")}}>Go Back to Home Page</button>
          <br></br>
          <br></br>
        </div>
        <br></br>
        </div>
    )
}

export default ThankYou;