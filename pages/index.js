import ImageCard from "@/components/cards/imageCard/imageCard"
import CarouselComp from "@/components/carousel/carousel"
import services from "../data/services.js"
import features from "../data/features.js"
// import heroVideo from "../public/gallary/hero.mp4"
// import heroVideo2 from "../public/gallary/hero2.mp4"
import testi from "../data/testimonials.js"
import Map from "../components/map/map.js"
import longBanner from "../public/backgroundImages/long_banner.jpg"
import SingleImage from "../components/carousel/singleImage.js"
import background from "../public/sliders/homePageSlider/desktop/slider_1.png"
import background_mb from "../public/sliders/homePageSlider/mobile/slider_1_mb.png"
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head.js"
import Image from "next/image.js"


import TestimonialCard from "@/components/cards/testimonialCard/testimonialCard.js"
import { useRouter } from "next/navigation.js"
import VideoHero from "@/components/videoHero/videoHero.js"
import Gallary from "@/components/gallary/gallary.js"
import Badges from "@/components/badges/badge.js"
import LoginComponent from "@/components/forms/login/login.js"


export default function Home() {

const size = useWindowSize();
const router = useRouter();
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

  return (
   
    <div>
       <Head>
      <title>Webiste and Web Apps Service in Noida</title>
    </Head>
    
        <SingleImage url={[background , background_mb]} /> 
        <Badges />
        <LoginComponent />
        <div className="margin">
          <div className="body-wrapper justify-between">
            <h2 className="subHeading">Our foundation</h2>
            <a onClick={()=>{
            gtag_report_conversion()
           }} className="contact-button" href="tel:+918920152023"><button className="primary-btn blue">Contact Us On: +918920152023</button></a>
          </div>
          
            <p className="content">At InfiniteWeb Solutions, we believe in the power of limitless creativity and innovation to shape the digital landscape. Our foundation is built on a commitment to excellence, integrity, and client satisfaction. We are dedicated to crafting immersive web experiences that transcend expectations, empowering businesses to thrive in the digital realm. With a team of passionate experts, we harness the latest technologies and design trends to unlock infinite possibilities for our clients. From concept to execution, we are your partners in success, providing tailored solutions that elevate your online presence and drive measurable results. Welcome to a world of endless opportunities with InfiniteWeb Solutions.</p>
           <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/recentProjects")}} style={{marginRight:"10px"}}>Explore Recent Projects</button>
            <button className="primary-btn blue" onClick={()=>{router.push("/login")}} style={{marginRight:"10px"}}>Request a Callback</button>
            </div>
            <div style={{position:"relative", width:"100%", height:`${size.width<800?"200px":"600px"}`}}>
            <Image onClick={()=>{router.push("/login")}} src={longBanner} fill={true} style={{objectFit:"contain"}} alt="some"/>
          </div>
         <VideoHero />
          <h2 className="boldHeading center">Our Services</h2>
          <div className="body-wrapper">
              {
                services.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>
          
          {/* <h2 className="subHeading center">Recent Interior Projects</h2>
          <Gallary images={images_1}></Gallary>
          <div className="body-wrapper">
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/interiorProjects")}}>Explore More Interior Projects</button>
              </div>
          <h2 className="subHeading center">Recent Exterior Projects</h2>
          <Gallary images={images_2}></Gallary> */}
          {/* <div className="body-wrapper">
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/exteriorProjects")}}>Explore More Exterior Projects</button>
              </div> */}
          <h2 className="subHeading center">What our customers say?</h2>
          <div className="body-wrapper">
              {
                testi.map((d,i)=>(
                  <TestimonialCard key={i} data={d} />
                ))
              }
          </div>
         
          <h2 className="subHeading center">Why to choose Us?</h2>
          <p className="content center">Choose us for our unwavering commitment to excellence in every aspect of your project. With a proven track record of delivering exceptional results, we prioritize client satisfaction above all else. Our team of seasoned professionals combines creativity with technical expertise to bring your vision to life, ensuring every detail is meticulously executed to perfection. From personalized service and transparent communication to efficient project management and top-notch craftsmanship, we go above and beyond to exceed your expectations. When you choose us, you&apos;re choosing a partner dedicated to making your website and web apps journey seamless, enjoyable, and ultimately, unforgettable.</p>
        </div>
        <div className="body-wrapper">
              {
                features.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>
        
        {/* <h2 className="subHeading center">Visit Us</h2> */}
        {/* <p className="content center"><strong style={{color:"#000"}}>Laxmi Nagar Branch:</strong> 1/53, Ist Floor, Lalita Park, Laxmi Nagar, Delhi-92</p>
        <p className="content center"><strong style={{color:"#000"}}>Okhla Branch:</strong> 334E, 3rd Floor, Batla House Chowk, Jamia Nagar, Okhla, Upper Rajdhani Medical Store, New Delhi, Delhi-110025</p> */}
        {/* <Map /> */}
        <br></br>
    </div>
  )
}
