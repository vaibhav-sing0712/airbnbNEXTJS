import Image from "next/image"

export default function SmallCard({img,location,distance})
{
return (
<div className='flex mt-5 rounded-xl ease-out  hover:scale-105 duration-200 cursor-pointer hover:bg-gray-100 space-x-4 items-center'>
      {/*left*/}
<div className ='relative h-16 w-16' >
    <Image src={img} layout='fill' className='rounded-lg'/>
</div>

{/*right*/}
<div>
<h2 className="font-semibold">{location}</h2>
<h3 className="text-gray-500">{distance}</h3>

</div>


</div>
)}