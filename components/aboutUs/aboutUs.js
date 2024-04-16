import ContactCard from "../cards/contactcard/ContactCard.js";
import Map from "../map/map.js";
import styles from "./aboutUs.module.css"
const AboutUs = () => {
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>About Us</p>
                <p className={styles.text}>Infinite Solutions, Infinite Possibilities: Crafting Your Digital Future. Explore Our Vision and Let&apos;s Shape Your Online Success Story Together.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <div className="margin">
        <h2 className="subHeading">Infinite Web Solutions</h2>
        <p className="content">At InfiniteWeb Solutions, we are passionate about transforming ideas into innovative digital solutions. With a dedicated team of creative minds and technical experts, we strive to exceed client expectations with every project we undertake. Our journey began with a simple goal: to provide cutting-edge web development services that empower businesses to thrive in the digital age. Today, we continue to uphold that commitment, delivering bespoke websites, e-commerce platforms, and digital marketing solutions tailored to the unique needs of each client. Guided by a client-centric approach, we prioritize collaboration, transparency, and excellence in everything we do. Whether you&apos;re a startup looking to make your mark online or an established business aiming to enhance your digital presence, we&apos;re here to help you achieve your goals. Partner with us and let&apos;s embark on a journey of digital transformation together.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">What we do</h2>
        <p className="content">At InfiniteWeb Solutions, we specialize in providing comprehensive web development and digital marketing services tailored to meet the diverse needs of our clients. From crafting visually stunning websites to implementing robust e-commerce solutions, we cover the entire spectrum of digital services. Our expertise also extends to SEO optimization, responsive design, custom web applications, and ongoing maintenance and support. With a focus on innovation and quality craftsmanship, we are dedicated to delivering results that exceed expectations and drive tangible business growth for our clients</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Why us</h2>
        <p className="content">Choose InfiniteWeb Solutions for our unwavering commitment to excellence, personalized approach, and proven track record of success. With a team of skilled professionals, innovative solutions, and a dedication to client satisfaction, we stand ready to elevate your online presence and help you achieve your business goals. Partner with us and experience the difference of working with a trusted and reliable digital partner.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Contact Infinite Web Solutions</h2>
        <p className="content">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>
        </div>
       <br></br>
        <div className="body-wrapper">
        <button className="primary-btn blue">Request a callback</button>
        </div>
       <br></br>
       <br></br>
        <div className={`${styles.cardholder} flex-class wrap`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="1/53, Ist Floor,Lalita Park," line2="Laxmi Nagar, Delhi-92"></ContactCard>
            <ContactCard heading="Contact" line1="+918920152023"></ContactCard>
        </div>
       
        {/* <Map></Map> */}
        <br></br>
        <br></br>
    </> );
}
 
export default AboutUs;