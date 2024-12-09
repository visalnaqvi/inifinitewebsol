import dm from "../../public/services/DM.png"
import seo from "../../public/services/SEO.png"
import smo from "../../public/services/SMO.png"
import ss from "../../public/services/SS.png"
import web from "../../public/services/WEB.png"
import Image from "next/image.js"

const Badges = () => {
    return (
        <div style={{backgroundColor:"var(--background-blue)" , padding:"20px 10px" , marginTop:"20px" , borderRadius:"10px"}} className="body-wrapper justify-center">
          <div style={{margin:"10px"}}>
            <Image src={dm} width={150}></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={web} width={150}></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={ss} width={150}></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={seo} width={150}></Image>
          </div>
          <div style={{margin:"10px"}}>
            <Image src={smo} width={150}></Image>
          </div>
        </div>
    )
}

export default Badges;