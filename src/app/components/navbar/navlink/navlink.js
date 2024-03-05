"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({item}) => {

    const pathName=usePathname()
  return (
    <div className="min-w-24 p-3  font-medium text-center">
           <Link href={item.link ?? "/"} className={`${pathName===item.path && " bg-yellow-600 text-black rounded-full m-2 p-4" }`} >{item.title}</Link>

    </div>
  )
}

export default Navlink