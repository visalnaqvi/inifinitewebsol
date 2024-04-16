import styles from "./map.module.css"
const Map = ()=>{
    return(
        <div className={styles.wrapper}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.674809620948!2d77.33331357456943!3d28.549492587848484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f0372d5e9b%3A0x4f61143521723cd6!2sNN%20Interiors!5e0!3m2!1sen!2sin!4v1711729253977!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map;