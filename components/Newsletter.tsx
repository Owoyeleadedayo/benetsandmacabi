import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Newsletter = () => {
  return (
   <>
    <div className='flex flex-col lg:flex-row bg-[#0071B3] items-start lg:items-center justify-start lg:justify-between p-6 md:p-14 gap-4 md:gap-2'>
        <div className='flex flex-col '>
            <p className='text-md leading-4 text-white font-normal capitalize'>newsletter</p>
            <p className='text-xl md:text-3xl text-white font-semibold capitalize'>Get Newsletter</p>
        </div>

        <div>
            <Input className='py-3 bg-white border-0 rounded-none w-44 md:w-62.5 text-sm md:text-base' placeholder='Enter your email' />
            <Button className='bg-black py-3 border-3 border-black rounded-none text-white text-sm md:text-base  cursor-pointer'>Subscribe Now</Button>
        </div> 
    </div>
   </>
  )
}

export default Newsletter
