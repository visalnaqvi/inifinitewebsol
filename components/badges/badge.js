import dm from "../../public/services/DM.webp?v=1"
import seo from "../../public/services/SEO.webp?v=1"
import smo from "../../public/services/SMO.webp?v=1"
import ss from "../../public/services/SS.webp?v=1"
import web from "../../public/services/WEB.webp?v=1"
import Image from "next/image.js"

const Badges = () => {
    return (
        <div style={{backgroundColor:"var(--background-blue)" , padding:"20px 10px" , marginTop:"20px" , borderRadius:"10px"}} className="body-wrapper justify-center">
          <div style={{margin:"10px"}}>
            <Image src={dm} width={150} alt="digital marketing"></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={web} width={150} alt="websites"></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={ss} width={150} alt="software solutions"></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={seo} width={150} alt="S.E.O"></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={smo} width={150} alt="S.M.O"></Image>
          </div>
        </div>
    )
}

export default Badges;