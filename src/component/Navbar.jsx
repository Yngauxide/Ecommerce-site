import React, { useEffect } from 'react';
import { useState } from 'react';
// import { motion } from "framer-motion";
import cart from "../component/images/icon-cart.svg";
import avatar from "../component/images/image-avatar.png";
import Card from './card';


const Navbar = () => {

  const [isvisible, setisvisible]= useState(false) //
  const handleCard = () =>{
    setisvisible(!isvisible)

  }

  const [isNavVisible, setIsNavVisible]= useState(false)
  useEffect(()=>{
    const handleResize =()=>{
      if (window.innerWidth <= 760) {
        setIsNavVisible(false);
      }
      else{
        setIsNavVisible(true);
      }
    };
handleResize();
window.addEventListener("resize", handleResize);

return () => {
  window.removeEventListener("resize", handleResize);
};
  }, [] );

  const changeNavBarState = () => {
    setIsNavVisible((prevIsNavVisible) => !prevIsNavVisible)
  }
  return (
    <>
    <nav className="flex justify-between gap-10 items-center
    lg:h-16 lg:w-full  lg:flex lg:items-center lg:gap-96 border-b p-4">
      <div  className="flex flex-col lg:flex justify-between items-center lg:px-16">
        
      <div className=" flex lg:flex items-center sm:flex gap-3">
                        <img
                            onClick={changeNavBarState}
                            id="bugger"
                            className="md:hidden w-[15px] h-[15px]"
                            src="src/assets/bugger.jpeg"
                            alt=""
                           
                        />
                        
                    </div>
                   
        {isNavVisible ? (
          
           <ul className=" lg:flex items-center cursor-pointer"> 
             <h1 className=" font-bold text-2xl">Sneakers</h1>
            
            <li className="py-[20px] ml-10 text-sm uppercase hover:border-b-[2px] transition:ease-out duration-75 border-red-500 ">Collection</li>

            <li className="py-[20px] ml-10 text-sm uppercase hover:border-b-[2px] transition:ease-out duration-75 border-red-500">Men</li>

            <li className="py-[20px] ml-10 text-sm uppercase hover:border-b-[2px] transition:ease-out duration-75 border-red-500">Women</li>

            <li className="py-[20px] ml-10 text-sm uppercase hover:border-b-[2px] transition:ease-out duration-75 border-red-500 ">About</li>
            <li className="py-[20px] ml-10 text-sm uppercase hover:border-b-[2px] transition:ease-out duration-75 border-red-500">Contact</li>
          </ul>



        )
      : ('')
      }
       
        
      </div>
      <div  className='w-10 h-10    flex items-center gap-2 lg:gap-5 justify-between lg:mr-60'>
        <img onClick={handleCard} src={cart} alt="shopping trollie" />
        <img className='object-contain lg:w-32 gap-6 mr-5' src={avatar} alt="profile icon" />
      </div>

    
    </nav>

    <div className={isvisible ? '' : 'hidden'}>
        <Card/>
      </div>
    </>

    
  )
}

export default Navbar



