import React from 'react'
import Link from 'next/link' 
import Image from 'next/image'
const ProductList = () => {
  return (
    <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'> 
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>  
          <div className='relative w-full h-80'>
             <Image src="https://images.pexels.com/photos/27912713/pexels-photo-27912713/free-photo-of-a-coffee-cup-sits-on-top-of-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/> 
             <Image src="https://images.pexels.com/photos/27463158/pexels-photo-27463158/free-photo-of-kahvemm.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
          </div> 
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span> 
            <span className='font-semibold'>$49</span>
          </div>
          <div className='text-sm text-gray-500'>My description</div> 
          <button className='rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
          <div>

          </div>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>  
          <div className='relative w-full h-80'>
             <Image src="https://images.pexels.com/photos/27912713/pexels-photo-27912713/free-photo-of-a-coffee-cup-sits-on-top-of-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/> 
             <Image src="https://images.pexels.com/photos/27463158/pexels-photo-27463158/free-photo-of-kahvemm.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
          </div> 
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span> 
            <span className='font-semibold'>$49</span>
          </div>
          <div className='text-sm text-gray-500'>My description</div> 
          <button className='rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
          <div>

          </div>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>  
          <div className='relative w-full h-80'>
             <Image src="https://images.pexels.com/photos/27912713/pexels-photo-27912713/free-photo-of-a-coffee-cup-sits-on-top-of-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/> 
             <Image src="https://images.pexels.com/photos/27463158/pexels-photo-27463158/free-photo-of-kahvemm.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
          </div> 
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span> 
            <span className='font-semibold'>$49</span>
          </div>
          <div className='text-sm text-gray-500'>My description</div> 
          <button className='rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
          <div>

          </div>
        </Link>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>  
          <div className='relative w-full h-80'>
             <Image src="https://images.pexels.com/photos/27912713/pexels-photo-27912713/free-photo-of-a-coffee-cup-sits-on-top-of-a-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/> 
             <Image src="https://images.pexels.com/photos/27463158/pexels-photo-27463158/free-photo-of-kahvemm.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
          </div> 
          <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span> 
            <span className='font-semibold'>$49</span>
          </div>
          <div className='text-sm text-gray-500'>My description</div> 
          <button className='rounded-2xl ring-1 ring-red-500 text-red-500 w-max py-2 px-4 text-xs hover:bg-red-500 hover:text-white'>Add to Cart</button>
          <div>

          </div>
        </Link>
    </div>  
  )
}

export default ProductList
