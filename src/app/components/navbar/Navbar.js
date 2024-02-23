import Link from "next/link"
import Links from "./links/Links"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
    <div className="font-bold text-3xl">
      <Link href="/"><Image src="/logo.png" width={130} height={160}/></Link>
    </div>
    <div><Links/></div>
    </div>
  )
}

export default Navbar