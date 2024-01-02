import React from 'react'
import Image from 'next/image'
import { IoChevronDown, IoChevronForward } from "react-icons/io5"
import style from '../page.module.css'

const Nav = () => {
  return (
    <div>
        <nav className={style.navbar}>
            <div className={style.menu}>
                <Image
                 src="/logo.png"
                 alt='logo'
                 height='38'
                 width='97'
                 objectFit='cover'
                />
                <ul className={`h5_regular ${style.list}`}>
                    <li>Nos Catégories</li>
                    <li>About us</li>
                    <li style={
                        {
                            display: 'flex',
                            alignItems: 'center'
                        }
                    }>
                        <span>AI</span>
                        <IoChevronDown />
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-x-[10px]'>
                <form
                 action=""
                 className='flex items-center gap-x-5'
                 >
                    <input
                     type="text"
                     className={style.navinput}
                     placeholder="Appuyer sur ESPACE pour activer L'IA..."
                      />
                      <div className='flex items-center'>
                        <span>⌘R︎</span>
                        <IoChevronForward />
                      </div>
                </form>
                <button>Se connecter</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav