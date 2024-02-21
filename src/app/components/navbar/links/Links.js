import Link from 'next/link'
import Navlink from '../navlink/navlink'

const Links = () => {

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
            path:"/blog/"
        },
        
    ]

    const session= true
    const isadmin=true
  return (
    <div className='flex items-center gap-3'>
        {links.map((link=>(
            <Navlink item={link} key={link.title}/>
        )))}{session?(
            <>      
            { isadmin && (<Navlink item={{title:"Admin",path:"/admin"}}/>)}
             <button className='bg-white p-3 m-2 text-black font-bold'>Logout</button>
             </>

        ):(
        <Navlink item={{title:"Login",path:"/login"}}/>
        )}
    </div>
  )
}

export default Links