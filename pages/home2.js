import ImageCard from "@/components/cards/imageCard/imageCard"
import CarouselComp from "@/components/carousel/carousel"
import services from "../data/services.js"
import features from "../data/features.js"
// import heroVideo from "../public/gallary/hero.mp4"
// import heroVideo2 from "../public/gallary/hero2.mp4"
import testi from "../data/testimonials.js"
import Map from "../components/map/map.js"
import longBanner from "../public/backgroundImages/long_banner.webp"
import SingleImage from "../components/carousel/singleImage.js"
import background from "../public/sliders/homePageSlider/desktop/slider_1.webp"
import background_mb from "../public/sliders/homePageSlider/mobile/slider_1_mb.webp"
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
      'send_to': 'AW-11324889747/LontCNe3i_UZEJO1kJgq',
      'event_callback': callback
  });
  return false;
}

  return (
   
    <div>
       <Head>
        <title>Best Digital Marketing and Website Company About Us</title>
        <meta name="description" content="We specialize in delivering cutting-edge digital marketing, web development, web app development, SEO, and SMO services to help businesses thrive in the digital landscape. Our expert team is dedicated to crafting custom strategies that boost visibility, drive engagement, and achieve measurable results. Let us transform your online vision into reality."></meta>
      </Head>
       
        <SingleImage url={[background , background_mb]} /> 
        <LoginComponent />
        <div className="margin">
          <div className="body-wrapper justify-between">
            <h2 className="subHeading">Our foundation</h2>
            <button onClick={()=>{gtag_report_conversion('tel:8920152023');}} className="primary-btn blue" style={{marginBottom:"20px"}}>Contact Us On: +918920152023</button>
          </div>
          
            <p className="content">At InfiniteWeb Solutions, We specialize in delivering cutting-edge <strong>digital marketing, web development, web app development, SEO, and SMO services </strong>to help businesses thrive in the digital landscape. Our expert team is dedicated to crafting custom strategies that <strong>boost visibility, drive engagement, and achieve measurable results</strong>. Let us transform your online vision into reality.</p>
           <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/recentProjects")}} style={{marginRight:"10px"}}>Explore Recent Projects</button>
            <button className="primary-btn blue" onClick={()=>{router.push("/contact-form")}} style={{marginRight:"10px"}}>Request a Callback</button>
            </div>
            <div style={{position:"relative", width:"100%", height:`${size.width<800?"200px":"600px"}`}}>
            <Image onClick={()=>{router.push("/contact-form")}} src={longBanner} fill={true} style={{objectFit:"contain"}} alt="team of professionals doing S.E.O"/>
          </div>
          <Badges />

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
