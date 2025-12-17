import Image from 'next/image'

const OurClients = () => {
  return (
   <>
        <div className='flex flex-col items-center justify-center my-15 gap-2'>
            <h2 className="text-[#0071B3] text-[30px] font-semi-bold font-(family-name:--font-oleo)">Some of our client</h2>
            <div className='flex justify-center items-center gap-16'>
                <div className='relative h-[130px] w-[130px]'>
                  <Image src={'/img/client2.png'} alt="Client" fill />
                </div>

                <div className='relative h-[200px] w-[200px]'>
                  <Image src={'/img/client3.png'} alt="Client" fill className="object-contain" />
                </div>

                <div className='relative h-[200px] w-[200px]'>
                  <Image src={'/img/client.png'} alt="Client" fill className="object-contain" />
                </div>

                <div className='relative h-[200px] w-[200px]'>
                  <Image src={'/img/client4.png'} alt="Client" fill className="object-contain" />
                </div>
            </div>
        </div>
   </>
  )
}

export default OurClients
