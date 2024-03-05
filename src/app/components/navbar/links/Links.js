"use client"
import { useRef, useState } from 'react';
import Image from 'next/image';
import { handleLogout } from '@/app/lib/action';
import Navlink from '../navlink/navlink';

const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" }
];

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const handleLogoutClick = (e) => {
        e.preventDefault();
        handleLogout();
    };

    return (
        <div>
            <div className='lg:flex items-center gap-3 hidden'>
                {links.map((link) => (
                    <Navlink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
                        <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold' onClick={handleLogoutClick}>Logout</button>
                    </>
                ) : (
                    <Navlink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <Image
                className='lg:hidden cursor-pointer'
                src="/menu.png"
                alt="Menu"
                width={30}
                height={30}
                onClick={toggleMenu}
            />
            {open && (
                <div ref={menuRef} className='fixed z-20 h-36 w-24 top-0 left-0 bg-stone-900'>
                    <div className='flex flex-col items-center justify-center gap-3 pt-24'>
                        {links.map((link) => (
                            <Navlink item={link} key={link.title} onClick={closeMenu} />
                        ))}
                        {session?.user ? (
                            <>
                                {session.user.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
                                <button className='bg-yellow-600 rounded-md p-3 m-2 text-black font-bold' onClick={handleLogoutClick}>Logout</button>
                            </>
                        ) : (
                            <Navlink item={{ title: "Login", path: "/login" }} onClick={closeMenu} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Links;
