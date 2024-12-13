import ContactCard from "../cards/contactcard/ContactCard.js";
import Gallary from "../gallary/gallary.js";
import Map from "../map/map.js";
import styles from "./recentProjects.module.css"
import agecourses from "../../public/gallary/agecourses.webp"
import alazeem from "../../public/gallary/alazeem.webp"
import dhyeyaias from "../../public/gallary/dhyeyaias.webp"
import jshah from "../../public/gallary/jshah.webp"
import electropack from "../../public/gallary/electropack.webp"
import marvelsuperhero from "../../public/gallary/marvelsuperhero.webp"
import nninteriors from "../../public/gallary/nninteriors.webp"
import portfolio from "../../public/gallary/portfolio.webp"
import stargate from "../../public/gallary/stargate_sq.webp"
const InteriorProjects = () => {
    const gallaryData = [{
        src:agecourses,
        link:"https://e-commerce-50904.web.app/",
        name:"Age Courses"
    } ,{
        src:alazeem,
        link:"https://alazeemtravels.com/",
        name:"Al Azeem Tours and Travels"
    } , {
        src:dhyeyaias,
        link:"https://dhyeyaiaslaxminagar.com/",
        name:"Dhyeya IAS"
    } , {
        src:jshah,
        link:"https://jkshahclasses.com/",
        name:"JK Shah Classes"
    } , {
        src:stargate,
        link:"https://stargateeducation.com/",
        name:"Stargate Education"
    } , {
        src:electropack,
        link:"https://nninterior.com/",
        name:"Electropack Engineers"
    },{
        src:nninteriors,
        link:"https://nninteriors.vercel.app/",
        name:"NN Interiors"
    } , {
        src:portfolio,
        link:"https://nurul-portfolio.vercel.app/",
        name:"Portfolio Website"
    } , {
        src:marvelsuperhero,
        link:"https://marvel-super-hero-hunter-app.vercel.app/",
        name:"Marvel SuperHero Site"
    } ]
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>Our Recent Projects</p>
                <p className={styles.text}>Explore Our Recent Projects: Where Innovation Meets Excellence, Bringing Ideas to Life with Flair and Precision.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <div className="margin">
       
       <Gallary images={gallaryData} />
       <br></br>
       
        <h2 className="subHeading">Contact Electropack Engineers</h2>
        <p className="content">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>
       
       <br></br>
        <div className="body-wrapper">
        <button className="primary-btn blue">Request a callback</button>
        </div>
       <br></br>
       <br></br>
        <div className={`${styles.cardholder} flex-class wrap`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="1/53, Ist Floor,Lalita Park," line2="Laxmi Nagar, Delhi-92"></ContactCard>
            <ContactCard heading="Contact" line1="+919811042458" line2="+919811136987"></ContactCard>
        </div>
       
        {/* <Map></Map> */}
        <br></br>
        <br></br>
    
        </div>
    </> );
}
 
export default InteriorProjects;