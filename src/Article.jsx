import { useState, useEffect } from 'react';
import banner1 from "../src/assets/Banner-board-800x420 2.png";
import banner2 from "../src/assets/banner2.jpg";
import banner3 from "../src/assets/aze.png"

function Article() {
    let [j, setJ] = useState(0);

    useEffect(() => {
        console.log("mounted");
        const intervalId = setInterval(() => {
            setJ(prevJ => prevJ + 1);
        }, 4000);

        return () => {
            console.log("unmounted");
            clearInterval(intervalId);
        };
    }, []);

    console.log("j", j);

    return (
        <div className='truncate relative'>
            <img src={(j % 3) == 0 ? banner1 : (((j%3)==2)? banner2:banner3)} className='w-full' alt='Banner' />
            <div className={(j%3==0)?'absolute top-64 left-16 p-5':'bg-white rounded-md absolute top-64 left-16 p-5'}>
                <p className='text-4xl'>latest trending</p><br />
                <h1 className='text-6xl font-bold'>Electronic items</h1><br />
                <button className='text-2xl bg-white rounded-md p-2 shadow-md hover:cursor-pointer'>learn more</button>
            </div>
        </div>
    );
}

export default Article;