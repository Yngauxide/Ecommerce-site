
import React, { useState,} from "react"; 
// import { motion } from "framer-motion";
// import styled, { keyframes } from "react";




function ImageGallery() {

  
    const [images, setImages] = useState({
      img1: "https://i.postimg.cc/SKCmLZCc/image-product-1.jpg",
      img2: "https://i.postimg.cc/YSbbP767/image-product-2.jpg",
      img3: "https://i.postimg.cc/sD46W5M1/image-product-3.jpg",
      img4: "https://i.postimg.cc/QCbQFkf3/image-product-4.jpg",
      
    });
  
    const [activeImg, setActiveImage] = useState(images.img1);

  
  return (
    
   <>


<div className=""> 
 
  <div className="">
    <img className="lg:w-[20rem] lg:h-[100%] lg:ml-[7rem] mt-1 rounded-lg w-[100%] h-[300px]"src={activeImg} alt="" />
  </div>


<div className="flex flex-wrap justify-center lg:flex flex-row mt- gap-5 lg:ml-[7rem] md:flex-row  ">
  <div>
  <img onClick={()=>setActiveImage(images.img1)} className="w-[4rem] mt-2 rounded-xl " src={images.img1} alt="" />
  </div>
  <div>
  <img onClick={()=>setActiveImage(images.img2)} className="w-[4rem] mt-2  rounded-xl " src={images.img2} alt="" />
  </div>
  <div>
  <img onClick={()=>setActiveImage(images.img3)} className="w-[4rem] mt-2 rounded-xl " src={images.img3} alt="" />
  </div>
  <div>    
  <img onClick={()=>setActiveImage(images.img4)} className="w-[4rem] mt-2 rounded-xl " src={images.img4} alt="" />
  </div>
</div>
</div>
   
   </>
         
          
    ); 







};

export default ImageGallery;