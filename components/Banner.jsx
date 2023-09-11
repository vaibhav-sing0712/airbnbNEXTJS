import Header from '../components/Header'

import Image from "next/image"
function Banner() {

  return (
    <div className='relative h-[300px] sm:h-[480px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]' >
      <Image src='https://links.papareact.com/0fm'
        layout='fill'
        objectfit='cover' />

      <div className='absolute top-1/2 text-center w-full '>
        <p className='text-sm sm:text-lg'> Not sure where to go ? Perfect.</p>


        <button className='text-purple-500 bg-white px-10 shadow-md rounded-full py-4 font-bold my-3 hover:shadow-xl active:scale-90 '>
          I'm flexible
        </button>
       
      </div>
    </div>
  )
}

export default Banner