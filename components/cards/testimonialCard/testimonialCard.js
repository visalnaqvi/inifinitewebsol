import styles from "./testimonialCard.module.css"
import Image from "next/image";
const TestimonialCard = ({data})=>{
    return (
        <div className={styles.cardBody}>
            <div className="body-wrapper justify-start">
                <div className={styles.cardImg}><Image objectFit="cover" fill={true} src={data.img} alt="some"></Image></div>
                <div className={styles.headerContent}>
                    <p className={styles.headerHeading}>{data.name}</p>
                    <p className={styles.headerTag}>⭐⭐⭐⭐⭐</p>
                    <p className={styles.headerTag}>{data.tag}</p>
                    <p className={styles.headerTag}>{data.date}</p>
                </div>
                <div>
                    <p className={styles.testi}>
                        {data.testi}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TestimonialCard;