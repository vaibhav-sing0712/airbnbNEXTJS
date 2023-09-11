import Footer from "components/Footer"
import Header from "components/Header"
import { useRouter } from "next/router"
import {format} from 'date-fns';
import InfoCard from "components/InfoCard";
import Map from "components/Map";
function search({searchResults}) {


    const router=useRouter()
    const {location,startDate,endDate,noOfGuests}=router.query;
const formattedStartDate=format(new Date(startDate),"dd MMMM yy")
const formattedEndDate=format(new Date(endDate),"dd MMMM yy")
const range=`${formattedStartDate}-${formattedEndDate}`
return (
        <div className="">
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

              <main className="flex mx-4 my-4">
                <section className="flex-grow">
                    <p className="text-xs ">300+ stays - {range} - for {noOfGuests} number of guests</p>
<h1 className="text-3xl font-semibold mt-2 mb-6 "> Stays in {location}</h1>
                <div className="hidden whitespace-nowrap md:inline-flex mb-3  space-x-3 text-gray-800">
                    <p className="ease-out duration-100 px-4 py-2 border active:bg-gray-100 rounded-full cursor-pointer hover:shadow-lg active:scale-95 ">Cancellation Flexibility</p>
                    <p className="ease-out duration-100 px-4 py-2 border active:bg-gray-100 rounded-full cursor-pointer hover:shadow-lg active:scale-95 ">Type of Place</p>
                    <p className="ease-out duration-100 px-4 py-2 border active:bg-gray-100 rounded-full cursor-pointer hover:shadow-lg active:scale-95 ">Price</p>  
                    <p className="ease-out duration-100 px-4 py-2 border active:bg-gray-100 rounded-full cursor-pointer hover:shadow-lg active:scale-95 ">Rooms and Beds</p>
                    <p className="ease-out duration-100 px-4 py-2 border active:bg-gray-100 rounded-full cursor-pointer hover:shadow-lg active:scale-95 ">More Filters</p>
                
                </div>
                
<div className="flex flex-col">
{searchResults.map((item,index)=>(
                       <InfoCard key={index} img={item.img} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total}  />

                ))}
</div>
                
                </section>
             <section className="hidden xl:inline-flex ">
 <Map/>


             </section>


              </main>

            <Footer/>
        </div>
    )
}

export default search


export async function getServerSideProps()
{
const searchResults=await fetch("https://www.jsonkeeper.com/b/5NPS").then(res=>res.json());
return {props:{searchResults}}

}