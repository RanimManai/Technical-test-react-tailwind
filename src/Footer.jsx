import { useState } from "react";
function Footer(){
    return(<>
<div className="bg-white h-58 border-y border-gray-300 flex px-24 py-12 flex-row justify-between">
    <div className="w-1/5">
    <span className='flex'>
         <img src="../src/assets/logo-symbol.png"/> 
        <h2 className='text-blue-500 font-bold hover:cursor-pointer text-2xl mt-1 ml-2'>Brand</h2>
     </span>
    <p className="mt-4">Best information about the company gies here but now lorem ipsum is</p>
    <span className="flex mt-4">
        <img  className="pr-1 hover:cursor-pointer" src="../src/assets/Fill 183.png"></img>
        <img  className="px-1 hover:cursor-pointer" src="../src/assets/Fill 184.png"></img>
        <img  className="px-1 hover:cursor-pointer" src="../src/assets/Fill 209.png"></img>
        <img  className="px-1 hover:cursor-pointer" src="../src/assets/Combined Shape.png"></img>
        <img  className="px-1 hover:cursor-pointer" src="../src/assets/Combined Shape2.png"></img>
    </span>
    </div>
    <div>
        <h2 className="font-bold">About</h2>
        <br />
        <ul className="text-gray-600">
            <li className="hover:cursor-pointer">About us</li>
            <li className="hover:cursor-pointer">Find store</li>
            <li className="hover:cursor-pointer">Categories</li>
            <li className="hover:cursor-pointer">Blogs</li>
        </ul>
    </div>
    <div>
        <h2 className="font-bold">Partership</h2>
        <br />
        <ul className="text-gray-600">
            <li className="hover:cursor-pointer">About us</li>
            <li className="hover:cursor-pointer">Find store</li>
            <li className="hover:cursor-pointer">Categories</li>
            <li className="hover:cursor-pointer">Blogs</li>
        </ul>
    </div>
    <div>
        <h2 className="font-bold">Information</h2>
        <br />
        <ul className="text-gray-600">
            <li className="hover:cursor-pointer">Help Center</li>
            <li className="hover:cursor-pointer">Money Refund
            </li>
            <li className="hover:cursor-pointer">Shipping</li>
            <li className="hover:cursor-pointer">Contact us</li>
        </ul>
    </div>
    <div>
        <h2 className="font-bold">For users</h2>
        <br />
        <ul className="text-gray-600">
            <li className="hover:cursor-pointer">Login</li>
            <li className="hover:cursor-pointer">Register</li>
            <li className="hover:cursor-pointer">Settings</li>
            <li className="hover:cursor-pointer">My orders</li>
        </ul>
    </div>
    <div>
    <h2 className="font-bold">Get app</h2>
    <img src="../src/assets/Logo.png" alt="." className="bg-black p-1 rounded-md my-3 mt-6 hover:cursor-pointer"/> 
    <img src="../src/assets/Subtract.png"  alt="." className="bg-black p-1 rounded-md hover: cursor-pointer"/> 
    </div>

</div>
<p className="mx-20 my-2 text-gray-700">&copy; 2023 Ecommerce.</p></>
    )
}
export default Footer;