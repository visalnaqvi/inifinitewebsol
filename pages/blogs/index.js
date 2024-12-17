import { useRouter } from "next/navigation.js"
import blogs from "../../data/blogs"
import ImageCard from "@/components/cards/imageCard/imageCard"
const Blogs = ()=>{
    const router = useRouter()
    return (
        <div className="margin">
{blogs.length>0 && <div className="body-wrapper">
              {
                blogs.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>}
                  </div>
    )
}

export default Blogs;