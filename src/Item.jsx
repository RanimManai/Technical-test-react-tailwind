import { useState } from "react";
function Item(props){
   return( <div className="border border-gray-400 rounded w-88 shadow-lg bg-white ">
    <div className="flex flex-col justify-center border-gray-100 border-b w-full h-3/4 max">
    <img className=" h-full" src={props.imsrc} alt="" />
    </div>
    <br />
    <div className="flex justify-between mx-4 my-2">
    <span><h2 className="font-bold mt-2">$99.50</h2>
    <p className="text-gray-600">Go Pro HERO 4K action Camera - Black</p></span>
    <img src="../src/assets/Vectorheart.png" className="border border-gray-400 rounded hover:cursor-pointer p-4"></img></div>
    <span className="flex justify-center">
    <button className="bg-blue-600 w-1/3 text-center h-10 rounded hover:cursor-pointer text-white mb-5">Command</button>
    </span>
    </div>)
}
export default Item