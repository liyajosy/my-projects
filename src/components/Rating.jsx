
import { FaStar } from 'react-icons/fa'
import './main.css';
import { useState } from 'react';

export default function StarRating({noOfStars =5}){
  const[rating, setRating ]= useState(-1)
  //const[hover, setHover ]= useState(-1)

    function handleClick(currentIndex){
       
        setRating(currentIndex)
    }

   /* function handleMouseEnter(currentIndex){
        // alert(currentIndex)
        setHover(currentIndex)
    }

    function handleMouseLeave(){
        //alert("here")
        setRating(rating)
        console.log("leave----")
    }*/
     
    return(
        <div>
            {[...Array(noOfStars)].map((x,index)=>{
                return <FaStar key={index} onClick={()=> handleClick(index)} className={index <= rating ? 'active':'inactive'}
               ></FaStar>
            } )

            }
        </div>
     );
}