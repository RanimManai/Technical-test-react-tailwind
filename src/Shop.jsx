import { useState } from "react";
import Item from "./Item.jsx";
import iphoneb from "../src/assets/image 222.png"
import iphoner from "../src/assets/image 332.png"
import watch from "../src/assets/image 35.png"
import mac from "../src/assets/image 34.png"
import phone from"../src/assets/image 32.png";
import cam from"../src/assets/image 28.png";
import phone2 from"../src/assets/3.png";
function style(i,x){
    return i==x?"p-2 px-3 border border-gray-400 bg-gray-300 text-gray-500 hover:cursor-default":"p-2 px-3 border border-gray-400 hover:cursor-pointer"
}
function Shop(){
    let [i,seti]=useState(1)
    return(<div>
    <br />
    <br />
    <br />
        <h1 className="ml-20 font-bold text-7xl">Our Products</h1>
        <h3 className="ml-20 mt-5 text-4xl">Latest trending</h3>
        <br />
        <br />
    <div className="grid grid-cols-3 gap-16 ml-12 mr-12">
    <Item imsrc={(i==1)?iphoner:mac}></Item>
    <Item imsrc={(i>2)?iphoneb:cam}></Item>
    <Item imsrc={(i==3)?phone:phone2}></Item>
    <Item imsrc={(i==2)?iphoner:phone2}></Item>
    <Item imsrc={(i==1)?cam:watch}></Item>
    <Item imsrc={(i==3)?phone:iphoneb}></Item>
    <Item imsrc={(i==2)?iphoneb:mac}></Item>
    <Item imsrc={(i==1)?watch:cam}></Item>
    <Item imsrc={(i==2)?mac:iphoner}></Item>
    </div>
    <br />
    <br />
    <div className="flex justify-end mr-12 font-semibold">
        <p className="p-2 border border-gray-400 rounded-l hover:cursor-pointer" onClick={()=>{if (i!=1){seti(--i);}}}>&lt;</p>
        <p className={style(i,1)} onClick={()=>{seti(1);}}>1</p>
        <p className={style(i,2)} onClick={()=> {seti(2);}}>2</p>
        <p className={style(i,3)} onClick={()=> {seti(3);}}>3</p>
        <p className="p-2 border border-gray-400 rounded-r hover:cursor-pointer" onClick={()=>{if (i!=3){seti(++i);}}}>&gt;</p>
    </div>
    <br /><br />
    </div>)
}
export default Shop