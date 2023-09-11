import Image from "next/image"
export default function LargeCard({img,title,description,buttonText}) {
    return <div className="relative py-16 ">
        <div className="relative h-96 min-w-[300px]">
<Image src={img} className='rounded-2xl' layout='fill' objectFit="cover"/>

</div>
<div className="absolute top-32 left-12">
<h3 className="text-4xl font-semibold mb-3 w-64">{title}</h3>
<p className="font-semibold">{description} </p>

<button className="text-sm  text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
</div>
</div>
}