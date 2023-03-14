import React from 'react'
import { AiFillStar,AiOutlineMinus,AiOutlineStar,AiOutlinePlus } from 'react-icons/ai'

const ProductDetails = () => {
  return (
<div className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="h-25 lg:w-1/2  object-cover object-center  rounded border border-gray-200" src="/assets/sample.jpg"/>
     
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-3xl title-font font-bold tracking-widest">A Fashion Pose</h2>
        <h1 className="text-gray-900 text-sm title-font font-medium mb-1">The Catcher in the Rye</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
          <AiFillStar className='w-4 h-4'/>
          <AiFillStar className='w-4 h-4'/>
          <AiFillStar className='w-4 h-4'/>
          <AiFillStar className='w-4 h-4'/>
          <AiFillStar className='w-4 h-4'/>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">
        This is the second piece in a series of digital artworks 
       that reflect the perspectives of the artist and society. 
        The pieces use fashion to explore identities, and memories</p>    
        <div className="flex mt-2">
          <span className="title-font font-bold text-3xl text-gray-900">$125.00</span>
          <button className=" ml-2 bg-red-300 border-0 py-1 px-2 focus:outline-none hover:bg-black hover:text-white rounded">50%</button>
          </div>
          <div className='flex mt-5 border-bottom'>
          <div className="flex justify-start w-30 border-0 bg-slate-300 px-3">
            <svg className="fill-current  w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <input className="mx-5 bg-slate-300 text-center w-8" type="text" value="1"/>
            <svg className="fill-current  w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
             <button className="flex ml-10 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 pr-1" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>Add To Cart</button>
           
          </div>
    <div className="flex mt-15 absolute bottom-0">
    <div className="max-w-3xl">
      <div
        className="m-4 block rounded-lg bg-white p-6 shadow-lg ">
        <div className="md:flex md:flex-row">
          <div
            className="mx-auto mb-6 flex w-30 items-center justify-center md:mx-0 md:w-50 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
              className="rounded-full shadow-md dark:shadow-black/30"
              alt="woman avatar" />
          </div>
          <div className="md:ml-6">
          <p
              className="mb-1 text-sm font-semibold text-neutral-800 ">
              Anna Smith
            </p>
            <p
              className="mb-0 font-semibold  ">
              Product manager
            </p>
            <span className="flex items-center">
          <AiFillStar className='w-4 h-4 text-amber-400'/>
          <AiFillStar className='w-4 h-4 text-amber-400'/>
          <AiFillStar className='w-4 h-4 text-amber-400'/>
          <AiFillStar className='w-4 h-4 text-amber-400'/>
          <AiOutlineStar className='w-4 h-4'/>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
            <p
              className="mb-6 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              quam sapiente molestiae numquam quas
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
         
      </div>
     
    </div>
  </div>
</div>
  )
}

export default ProductDetails