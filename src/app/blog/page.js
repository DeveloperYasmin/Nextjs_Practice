import Postcard from "@/app/components/postcard/postcard"

const blogpage = () => {
  return (
    <div className="flex flex-wrap gap-7">
      <div className="md:w-[40%] lg:max-w-[1280px] md:max-w-[768px] lg:w-[30%] w-full">
      <Postcard/>
      </div>
      <div className="md:w-[40%] lg:max-w-[1280px] md:max-w-[768px] lg:w-[30%] w-full">
      <Postcard />
      </div><div className="md:w-[40%] lg:max-w-[1280px] md:max-w-[768px] lg:w-[30%] w-full">
      <Postcard/>
      
      </div>
    </div>
  )
}

export default blogpage