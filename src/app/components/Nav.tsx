import React from 'react'
import Image from 'next/image'
import { IoChevronDown, IoChevronForward } from "react-icons/io5"
import style from '../page.module.css'

const Nav = () => {
  return (
    <div className='mx-auto w-full px-[86px] py-[12px]'>
        <nav className={style.navbar}>
            <div className={style.menu}>
                <div className=' object-cover'>
                    <Image
                    src="/logo.png"
                    alt='logo'
                    height='38'
                    width='97'
                    />
                </div>
                <ul className={`h5_regular ${style.list}`}>
                    <li>Nos Catégories</li>
                    <li>About us</li>
                    <li className='flex items-center'>
                        <span>AI</span>
                        <IoChevronDown />
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-x-[10px]'>
                <form
                 action=""
                 className='flex items-center gap-x-5 border-button'
                 >
                    <input
                     type="text"
                     className={style.navinput}
                     placeholder="Appuyer sur ESPACE pour activer L'IA..."
                      />
                      <div className={`flex items-center ${style.navinputdetail}`}>
                        <span className='mr-1'>⌘R︎</span>
                        <IoChevronForward />
                      </div>
                </form>
                <button className={style.navbutton}>Se connecter</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav