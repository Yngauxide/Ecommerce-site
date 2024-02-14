import React, {useState} from "react";
import cart from "../component/images/icon-cart.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';




const ProductDetails = () => {
      
        //SocialMedia
    // const SocialMediaLinks = () => {

    //     <div className="flex items-center space-x-4">
    //     <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
    //       <FontAwesomeIcon icon={faTwitter} className="text-blue-500 hover:text-blue-700" />
    //     </a>
    //     <a href="https://facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
    //       <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800" />
    //     </a>
    //     <a href="https://instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
    //       <FontAwesomeIcon icon={faInstagram} className="text-pink-500 hover:text-pink-700" />
    //     </a>
    //   </div>
  
    // }

   ///////////////// 
// for - and + button

const [num, updateNum] = useState(0);   //This shows the initial state of the number of items on the cart.



const [price, setPrice] = useState(125.00);  // Initiall state of the price which updates when the function updateNum is called



function incrementnum(){


    // Check if number is 10 then donot increament(false) do also for second check if num is zero then donot carry out the function
    if (num ==10) {
        console.log("maximum value reached")
        return false 
    };

    setPrice(price + price )
    updateNum(num+1);

}

function decreasenum(){
    // the if below: the code in the block will only excuite if the number is greater than 0, else, nothing happen.
  
    if (num ==0) {
        console.log("Minimum value reached")
        return true
    };

    //store half of the current price in a variable then get half the price
    const halfPrice = price/2;
    setPrice(price - halfPrice)
    updateNum(num-1);

}


///////////////////////////


    return(

    
        <div className="ml-2 flex justify-center items-center lg:p-20 lg:flex flex-col lg:ml-28 
         ">
        
        <div className="text-orange-400  font-semibold ">
        <h className="mb-5 mr-40" >SNEAKER COMPANY</h>
        </div>
       
       <div className="font-bold mt- text-4xl " >
       <p>Fall Limited Edition <br /> Sneakers</p>
       </div>
    
    <div className="mt-10  font-semibold text-sm text-gray-500 ">
        <p>These Low-profile sneakers are your perfect casual wear <br />
        companion. Featuring a durable outer layer sole.They'II <br />
        withstand everything the wheather can offer.
        </p>
    </div>
    
    <div className=" flex float-right gap-4 mt-5">
    <div className="font-bold">
        <p>${price}.00</p>
    </div>
    
    <div className="text-sm">
    <p className="mr-52 text-orange-600 bg-orange-100 rounded-sm">50%</p>
    </div>
    
    </div>
    
    <p className="mr-[15.9rem]  p-1 text-sm line-through text-gray-700">$250.00</p>
    
    <div class=" mt-6 flex items-center ">
      <button  className= "p-1  text-orange-500 rounded-sm mr-2 bg-gray-200 font-bold"
      onClick={decreasenum}>-
      </button>
    
      <p class=" bg-gray-200 text-sm font-medium">{num}</p>
    
      <button  className=" p-1  text-orange-500 rounded-sm ml-2 bg-gray-200 font-bold" 
      onClick={incrementnum} >+
      </button>
    
    <div>  
      <button  onClick={incrementnum } className="ml-2 cartbutton text-sm text-white rounded-lg w-56 p-[7px] flex items-center
       justify-center gap-4 hover:shadow-lg ">
        <img className="color-white" src={cart} alt="shopping trollie" />Add to cart
        </button>
        </div>
    </div>




     
        </div>
    
        )

    


}  

export default ProductDetails