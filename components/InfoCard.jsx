import { HeartIcon, StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function InfoCard({img,location,title,description,star,price,total})
{

return <div className="ease-out duration-200 pr-4 hover:opacity-80 hover:shadow-lg flex py-7 px-2 border-b cursor-pointer">

<div className="first:border-t relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
    <Image  className="rounded-xl" src={img} layout='fill' objectFit='cover' />
</div>
<div className="flex flex-col flex-grow pl-5">
 <div className="flex justify-between ">
    <p className="text-sm">{location}</p>
    <HeartIcon className="h-7 cursor-pointer"/>
 </div>  
   <h4 className="text-2xl md:text-4xl">{title}</h4>     
   <div className="border-b w-10 pt-2" />
    <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
    

    <div className="flex justify-between pt-5 items-end">
       <p>
<StarIcon className="h-5 text-red-400 "/>
{star}
       </p>

       <div>
        <p className="text-lg font-semibod pb-2 lg:text-2xl">{price}</p>
        <p className="text-right font-extralight">{total}</p>
       </div>


    </div>

</div>



</div>



}

export default InfoCard