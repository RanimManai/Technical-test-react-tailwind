import { useState } from 'react'

function Navbar() {

  return (
  <div className='pt-8 w-full h-20vh flex flex-column items-center justify-around bg-white pb-8'>
    <span className='flex'>
         <img src="../src/assets/logo-symbol.png"/> 
        <h2 className='text-blue-500 font-bold hover:cursor-pointer text-2xl mt-1 ml-2'>Brand</h2>
    </span>
    <form className='h-10vh flex justify-evenly w-1/2 m-0  pr-3 bg-blue-600 rounded-md border-2 p-0.5 border-blue-700'>
    <input className="p-1 w-4/5 m-0 rounded-l border-blue-600" type="text" placeholder="Search" />
    <select className="bg-white w-1/5 border-blue-600 border border-l-2 h-10" name="category" id="category">
        <option value="all">All categories</option>
        <option value="phone">Smart phones</option>
        <option value="pc">Pcs</option></select>
      <button className="pl-3 text-center text-white" type="button">Search</button>
    </form>
    
    <div className='justify-evenly w-1/5 text-gray-500 md:flex hidden'>
        <div className='hover:cursor-pointer mt-1'>
          <img src="../src/assets/vector.png" className='pl-3 mt-1' />
          <h4 className='my-1'>Profile</h4>
          </div>
        <div className='hover:cursor-pointer mt-1' >
          <img src="../src/assets/vector1.png" className='pl-3 mt-1'/>
          <h4 className='my-1'>Message</h4>
        </div>
        <div className='hover:cursor-pointer mt-1'>
          <img src="../src/assets/vector2.png" className='pl-3 mt-1' />
          <h4 className='my-1'>Orders</h4>
        </div>
        <div className='hover:cursor-pointer mt-1'>
          <img src="../src/assets/vector3.png" className='pl-3 mt-1'/>
          <h4 className='my-1'>My cart</h4>
          </div>
    </div>
  </div>)
}
export default Navbar