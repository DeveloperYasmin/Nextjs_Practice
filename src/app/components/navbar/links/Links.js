"use client"
import { useState } from 'react'
import Navlink from '../navlink/navlink'
import Image from 'next/image'
import { handleLogout } from '@/app/lib/action'


    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
        
    ]

    const Links =({session})=>{
        const [open,setopen]=useState(false)
    
    //TEMPORARY
    const isAdmin=true
  return (
    <div>
    <div className='lg:flex items-center gap-3 hidden'>
        {links.map((link=>(
            <Navlink item={link} key={link.title}/>
        )))}{session?.user?(
            <>      
            {session.user?.isAdmin && <Navlink item={{title:"Admin",path:"/admin"}}/>}
            <form action={handleLogout}>
             <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold'>Logout</button>
             </form>
             </>

        ):(
        <Navlink item={{title:"Login",path:"/login"}}/>
        )}
    </div>
    <Image className='lg:hidden cursor-pointer' src="/menu.png" alt=" " width={30} height={30} onClick={()=>setopen((prev)=>!prev)}></Image>
    {
        open && (<div className='absolute z-20 h-[85%] rounded-xl top-24 lg:hidden right-0 w-[50%] flex flex-col items-center justify-center gap-3  bg-stone-900'>
    {links.map((link)=>(<Navlink item={link} key={link.title}/>))}
    <Navlink item={{title:"Admin",path:"/admin"}}/>
             <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold'>Logout</button>
    </div>
    )}
    </div>
  )
}

export default Links 