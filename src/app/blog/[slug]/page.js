import Image from "next/image"
import PostUser from "@/app/components/postuser/postuser"
import { Suspense } from "react"
import { getPost} from "@/app/lib/data"
//FETCH WITH AN API
// const getdata=async (slug)=>{
//     const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
     
//     if(!res.ok)
//     throw new Error("Something went wrong")
  
//    return res.json()
//   }

const Singlepostpage = async ({params}) => {
const {slug}=params
//FETCH WITH AN API
    //const post =await getdata(slug)

    //FETCH WITHOUT AN API
    const post= await getPost(slug)
  return (
    <div className="flex gap-24">
        <div className="flex-1 relative">
            <Image src="/post1.jpg" alt="" height={300} width={500} className="object-cover"/>
        </div>
        <div className="flex-[2] flex-col gap-12 flex">
            <h1 className="text-6xl text-yellow-600">{post?.title}</h1>
            <div className="flex  gap-4">
                <Image src="/post1.jpg" alt="" className="object-cover rounded-full" width={80} height={50}/>
                <Suspense fallback={<div>Loading..</div>}>
                <PostUser userId={post?.userId}/>
                </Suspense>
                <div className="flex flex-col gap-3">
                    <span className="text-gray-500 font-bold">Organised by</span>
                    <span className="font-medium"> Terry Thomas</span>
                </div>
                </div>
                <div className="md:text-lg flex-1 text-md">
                    {post?.body}
                </div>
           
        </div>


    </div>
  )
}

export default Singlepostpage