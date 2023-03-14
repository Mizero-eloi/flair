import React from 'react'
import Link from 'next/link'
import { AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineDribbble } from 'react-icons/ai'
const Footer = () => {
  return (
<div className='bg-slate-50  text-center text-500 w-full white:bg-500 dark:text-100 lg:text-left'>
  <div className='mx-2 py-8 px-20 text-center  md:text-left'>
    <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
      <div className=''>
        <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
          FLAIR
        </h6>
        <div>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum obcaecati provident nam mollitia harum pariatur maxime,
          <div className='flex mt-2 text-2xl'>
          <AiOutlineFacebook/>
          <AiOutlineTwitter/>
          <AiOutlineLinkedin/>
          <AiOutlineDribbble/>
          </div>
        </div>
      </div>
      <div className=''>
        <h6 className='mb-4 flex justify-center font-semibold  md:justify-start'>
          Catalog
        </h6>
        <div className='mb-4'>
          <Link href='#!' className='text-500 dark:text-100'>Necklaces</Link>
        </div>
        <div className='mb-4'>
          <Link href='#!' className='text-500 dark:text-100'>Hoodies</Link>
        </div>
        <div className='mb-4'>
          <Link href='#!' className='text-500 dark:text-100' >Jewelry Box</Link >
        </div>
        <div>
          <Link href='#!' className='text-500 dark:text-100' >Tshirt</Link>
        </div>
      </div>
      <div className=''>
        <h6
          className='mb-4 flex justify-center font-semibold  md:justify-start'>
          About Us
        </h6>
        <div className='mb-4'>
          <Link href='#!' className='text-500 dark:text-100'
            >Our producers</Link>
        </div>
        <div className='mb-4'>
          <Link href='#!' className='text-500 dark:text-100'
            >Sitemap</Link>
        </div>
        <div className='mb-4'>
          <Link href='#!' className='text-500 dark:text-100'
            >FAQ</Link>
        </div>
        <div>
          <Link href='#!' className='text-500 dark:text-100'
            >About us</Link>
        </div>
      </div>
      <div>
        <h6 className='mb-4 flex justify-center font-semibold  md:justify-start'>
          Customer Service
        </h6>
        <div className='mb-4 flex items-center justify-center md:justify-start'>
         
          Contact Us
        </div>
        <div className='mb-4 flex items-center justify-center md:justify-start'>
        
          Track Your Order
        </div>
        <div className='mb-4 flex items-center justify-center md:justify-start'>
         
          Product care
        </div>
        <div className='flex items-center justify-center md:justify-start'>
         
          Returns
        </div>
      </div>
    </div>
  </div>

<div className='s-footer text-white  px-20 py-4 flex'>
  <div className='flex items-center justify-center md:justify-start'>
    © 2023 Flair
  </div>
    </div>
</div>
 )
 }

export default Footer