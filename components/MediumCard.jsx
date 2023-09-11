import Image from "next/image"
export default function MediumCard({img,title})
{
return  <div className="cursor-pointer  hover:scale-105 ease-out duration-300">
    <div className=" relative h-80 w-80">
    <Image src={img} layout='fill' className="rounded-lg" />
    
    </div>
   <h3 className="font-semibold">{title}</h3>
</div>



} 