'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const Navbar = () => {

    const route = useRouter()
  return (
    <div className='flex py-3 flex-wrap justify-around'>
        <h1 className='text-lg font-semibold '>ToDo App</h1>
        <ul className='flex gap-[40px] text-m'>
            <li><Link href="/Home" >Home</Link></li>
            <li><Link href="/Products">Products</Link></li>
            <li><button onClick={()=>{
                route.push('/About')
            }} > About</button></li>
            <li><button onClick={()=>{
                route.push('/Contact')
            }} >Contact</button></li>
        </ul>
    </div>
  )
}

export default Navbar