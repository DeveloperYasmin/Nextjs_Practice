import Image from "next/image"

const Singlepostpage = () => {
  return (
    <div className="flex gap-24">
        <div className="flex-1 relative">
            <Image src="/post1.jpg" alt="" height={300} width={500} className="object-cover"/>
        </div>
        <div className="flex-[2] flex-col gap-12 flex">
            <h1 className="text-6xl text-yellow-600">Tips for Poster Design</h1>
            <div className="flex  gap-4">
                <Image src="/post1.jpg" alt="" className="object-cover rounded-full" width={80} height={50}/>
                <div className="flex flex-col gap-3">
                    <span className="text-gray-500 font-bold">Lecture</span>
                    <span className="font-medium"> Terry Thomas</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-gray-500 font-bold">Conducted on</span>
                    <span className="font-medium font-sans">25/09/2024</span>
                </div>
                </div>
                <div className="md:text-lg flex-1 text-md">
                   Web development is the process of creating websites that allow users to view and interact with content over the Internet. Web development includes many different aspects, including the creation of a website’s design and code to create a functioning website. In this blog post, we look at the importance of web development.
                </div>
           
        </div>


    </div>
  )
}

export default Singlepostpage