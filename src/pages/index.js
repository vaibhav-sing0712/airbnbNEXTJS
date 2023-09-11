import Head from 'next/head'
import Image from 'next/image'


import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
import SmallCard from 'components/SmallCard.jsx'
import MediumCard from 'components/MediumCard.jsx'
import LargeCard from 'components/LargeCard.jsx'
import Footer from 'components/Footer.jsx'

export default function Home({exploreData,cardsData}) {
  return (
    <>
      <Head>
        AirBnb
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

<main className='max-w-7xl mx-auto px-8 sm:px-16'>
  <section className='pt-5 '>
    <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
     {/*pull some data from a server-api endpoint*/}
     <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  '>

     
     {exploreData?.map((item,index)=>(
      <SmallCard key={index} img={item.img} location={item.location} distance={item.distance}/>
     ))}
</div>
  
  </section>

  <section>
    <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
  <div className='flex space-x-3 p-3 overflow-scroll -ml-3 scrollbar-hide'>
    {cardsData.map((item,index)=>(<MediumCard key={index} img={item.img} title={item.title}/>))}
  
  </div>
  </section>

<LargeCard img={"https://links.papareact.com/4cj"} title={'The Greatest Outdoors'} description={'Wishlists curated by Airbnb'} buttonText={'Get Inspired'}/>
</main>

<Footer/>

    </>
  )
}
// pull some data from the server 
export async function getStaticProps(){

  const exploreData= await fetch('https://www.jsonkeeper.com/b/4G1G').then((res)=>res.json());
  const cardsData=await fetch('https://www.jsonkeeper.com/b/VHHT').then((res)=>res.json());
   return {
    props:{exploreData,cardsData}
   }

}
