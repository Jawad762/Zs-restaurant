'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingCart } from "react-icons/gi";
import { usePathname } from 'next/navigation'
import { BiMenu } from "react-icons/bi";
import { AppContext } from './Context';

const Header = () => {

    const {cartItems} = useContext(AppContext)
    const pathname = usePathname()
    const [isScrolling, setIsScrolling] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false)

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        });
    } 
              
    return (
        <header className={`fixed z-50 flex items-center justify-between w-full md:px-12 py-3 h-fit transition-all ${isScrolling || pathname !=='/' || showNavbar ? 'bg-white text-black shadow-md' : 'bg-none text-white delay-100'}`}>
            
            {/*Logo*/}
            <Image
                height={70}
                width={70}
                className={(pathname === '/' && isScrolling) || (pathname !=='/') || (showNavbar) ? 'invert ml-6 md:ml-0' : 'ml-6 md:ml-0'}
                src='/logo.png'
            /> 
            
            {/* large screens navbar */}
            <div className="hidden h-full gap-10 font-bold md:flex">
                    <Link href='/'>
                        <p className={`flex items-center py-1 text-sm transition-all border-b-2 border-transparent cursor-pointer hover:border-[#CFA670] ${pathname === '/' && 'text-[#CFA670]'}`}>HOME</p>
                    </Link>
                    <Link href='/menu'>
                        <p className={`flex items-center py-1 text-sm transition-all border-b-2 border-transparent cursor-pointer hover:border-[#CFA670] ${pathname.includes('/menu') && 'text-[#CFA670]'}`}>MENU</p>
                    </Link>
                    <Link href='/checkout'>
                        <p className="flex items-center relative h-full py-1 transition-all border-b-2 border-transparent cursor-pointer hover:border-[#CFA670]">
                            <GiShoppingCart className={`scale-[1.5] ${pathname === '/checkout' && 'text-[#CFA670]'}`}/>
                            {cartItems && cartItems.length > 0 && <span className='absolute flex items-center justify-center px-2 text-sm text-white bg-black rounded-full -right-5 -top-3'>{cartItems.length}</span>}
                        </p>
                    </Link>
            </div>
            
            {/* small screens navbar */}
            <div className='flex items-center gap-10 md:hidden'>
                    <Link href='/checkout'>
                        <p className="flex items-center relative h-full py-1 transition-all border-b-2 border-transparent cursor-pointer hover:border-[#CFA670]">
                            <GiShoppingCart className={`scale-[2.5] ${pathname === '/checkout' && 'text-[#CFA670]'}`}/>
                            {cartItems && cartItems.length > 0 && <span className='absolute flex items-center justify-center px-2 text-sm text-white bg-black rounded-full -right-5 -top-3'>{cartItems.length}</span>}
                        </p>
                    </Link>
                    <BiMenu className='mr-6 block scale-[3] cursor-pointer md:hidden' onClick={() => setShowNavbar(prev => !prev)}/>
            </div>

            {/*Dropdown menu*/}
            <div className={`absolute flex flex-col justify-center w-full gap-6 tracking-wider font-bold text-black transition-all bg-white items-left top-full overflow-hidden ${showNavbar ? 'h-32 px-4 delay-75' : 'px-0 py-0 h-0'} md:hidden`}>
                <Link href='/'><p onClick={() => setShowNavbar(false)} className={`${pathname === '/' && 'text-[#CFA670] font-bold'}`}>HOME</p></Link>
                <Link href='/menu'><p onClick={() => setShowNavbar(false)} className={`${pathname.includes('/menu') && 'text-[#CFA670] font-bold'}`}>MENU</p></Link>
            </div>
            
        </header>
  )
}

export default Header