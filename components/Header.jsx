import Image from "next/image"
import { useState} from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'


import { GlobeAltIcon, SearchIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
export default function Header({placeholder}) {
  const [SearchInput,setSearchInput]=useState('')
  const [startDate,setstartDate]=useState(new Date())
  const [endDate,setendDate]=useState(new Date())
  const [guest,setGuest]=useState(1)
  const router =useRouter()
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,

    key: 'selection',
  }
  const Search=()=>{router.push({
    pathname:'/search',
    query:{location:SearchInput,
      startDate:startDate.toISOString(),
       endDate:endDate.toISOString(),
noOfGuests:guest,
    }
  })}
  const handleSelect=(ranges)=>
  {
    console.log(ranges)
   setstartDate(ranges.selection.startDate)
   setendDate(ranges.selection.endDate)

  }

  const resetInput=()=>{
    setSearchInput('')
  }

  return (

    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10" >
      <div onClick={()=>router.push('/')} className='relative flex  items-center h-10 cursor-pointer my-auto'>
        <Image src="https://links.papareact.com/qd3" layout='fill' objectFit="contain" objectPosition="left" />


      </div>
      <div className='flex justify-between items-center border-2  rounded-full md:shadow-sm'>
        <input value={SearchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" className="pl-5 w-11/12 h-11/12 text-sm text-gray-600 
          placeholder-gray-600 outline-none bg-transparent" placeholder={placeholder || "Start your search"} />
        <SearchIcon className='mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex' />
      </div>

      <div className='flex items-center justify-end space-x-4'>
        <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />

        <div className='flex items-center rounded-full space-x-2 border-2 p-2'>
          <MenuIcon className='cursor-pointer h-6' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>

      {SearchInput&&
      (<>
<div className="flex flex-col  mx-auto col-span-3 ">
<DateRangePicker
ranges={[selectionRange]}
minDate={new Date()}
rangeColors={["#FD5B61"]}
onChange={handleSelect}
/>


<div className="flex items-center justify-between  border-b mb-4">
 <h2 className="text-xl  font-semibold"> Number of Guests</h2>
<div className="flex items-center flex-end">
<UsersIcon className="h-5"/>
<input type='number' min={1} value={guest} onChange={e=> setGuest(e.target.value)} className="text-red-400 w-12 pl-2 outline-none text-lg"/>
</div>
</div>
<div className="grid grid-cols-2">
  <button className="text-gray-500 " onClick={resetInput}>Cancel</button>
    <button className="text-red-500 " onClick={Search}>Search</button>
</div>
</div>
  </>    )}
    </header>

  )
      }
