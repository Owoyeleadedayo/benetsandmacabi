import Image from 'next/image'

const OurClients = () => {
  return (
   <>
        <div className='flex flex-col items-center justify-center my-15 gap-2'>
            <h2 className="text-[#0071B3] text-[30px] font-semi-bold font-(family-name:--font-oleo)">Some of our client</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-2 md:gap-16'>
                <div className='relative h-32.5 w-32.5'>
                  <Image src={'/img/client2.png'} alt="Client" fill className="object-contain" />
                </div>

                <div className='relative h-50 w-50'>
                  <Image src={'/img/client3.png'} alt="Client" fill className="object-contain" />
                </div>

                <div className='relative h-50 w-50'>
                  <Image src={'/img/client.png'} alt="Client" fill className="object-contain" />
                </div>

                <div className='relative h-50 w-50'>
                  <Image src={'/img/client4.png'} alt="Client" fill className="object-contain" />
                </div>
            </div>
        </div>
   </>
  )
}

export default OurClients
