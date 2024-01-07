import React from 'react'
import Image from 'next/image'
import { IoChevronDown, IoChevronForward, IoSearch } from "react-icons/io5"
import { RiMenu3Fill } from "react-icons/ri";
import style from '../page.module.css'

const Nav = () => {
  return (
    <div className='mx-auto w-full lg:max-w-[calc(100%-164px)]  py-[12px] px-8'>
        <nav className={style.navbar}>
            <div className='md:hidden block'>
                <RiMenu3Fill size={25} />
            </div>
            <div className={style.menu}>
                <div>
                    <Image
                    src="/logo.png"
                    alt='logo'
                    height='38'
                    width='97'
                    />
                </div>
                <ul className={`h5_regular ${style.list} hidden md:flex`}>
                    <li>Nos Catégories</li>
                    <li>About us</li>
                    <li className='flex items-center'>
                        <span>AI</span>
                        <IoChevronDown />
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-x-[10px]'>
            <div className='block md:hidden'>
                        <IoSearch size={20} color="#475569" />
                    </div>
                <form
                 action=""
                 className='items-center gap-x-5 border-button hidden md:flex'
                 >
                    <div className='flex items-center gap-x-3'>
                        <IoSearch size={20} color="#475569" />
                        <input
                        type="text"
                        className={` hidden lg:block lg:w-[240px] ${style.navinput}`}
                        placeholder="Appuyer sur ESPACE pour activer L'IA..."
                        />
                    </div>
                      <div className={`flex items-center ${style.navinputdetail}`}>
                        <span className='mr-1'>⌘R︎</span>
                        <IoChevronForward />
                      </div>
                </form>
                <button className={` hidden sm:block ${style.navbutton}`}>Se connecter</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav