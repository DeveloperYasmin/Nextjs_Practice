import { getUser } from "@/app/lib/data"
//FETCH WITH AN API
// const getdata=async (userId)=>{
//     const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"})
     
//     if(!res.ok)
//     throw new Error("Something went wrong")
  
//    return res.json()
//   }
const PostUser = async({userId}) => {
    //FETCH WITH AN API
    //const user=await getdata(userId)
    //FETCH WITHOUT AN API
    const user=await getUser(userId)
  return (
    <div className="flex flex-col gap-3">
                    <span className="text-gray-500 font-bold">Author</span>
                    <span className="font-medium">{user?.username}</span>
    </div>
  )
}

export default PostUser