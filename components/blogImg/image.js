import Image from "next/image"
import styles from "./style.module.css"
const BlogImage = ({src , alt})=>{
    return (
      <div className="body-wrapper">
                    <div className={styles.wrapper}>
                    <Image
                      src={src}
                      alt={alt}
                      layout="responsive"
                      width={400}  // The original aspect ratio width
                      height={400} // The original aspect ratio height
                    />
                  </div>
                  </div>
    )
}

export default BlogImage