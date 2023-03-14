import React from 'react'
import Link from 'next/link'
// import logo from "../public/flairlogo.svg"
import { AiOutlineShopping, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
const Header= () => {
  return (

    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 border-b" aria-label="Global">
        <div className="flex lg:flex-1">
          <AiOutlineSearch />
        </div>
        {/* <img src={logo} alt="logo" />; */}
        <Link href="" className="font-bold text-lg leading-6 text-gray-900">
          FLAIR
        </Link>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className='flex mx-3 ustify-items-center'>
            <AiOutlineShopping className='text-xl' />
            <Link href='#!' className="text-sm pl-1.5 leading-6 text-gray-900">Shopping</Link>
          </div>
          <div className='flex mx-3 justify-items-center'>
            <AiOutlineUser className='text-xl' />
            <Link href='#!' className="text-sm pl-1.5 leading-6 text-gray-900">
              Login
            </Link>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header