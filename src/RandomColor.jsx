import { useState } from "react";
import './random.css';

export default  function RandomColor(){
    const [color, setColor] = useState("#000000");

    function randomGen(len){
        return Math.floor(Math.random()* len)
    }
    function handleHexColor (){
        const hex =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","f"]
        let hexColor ="#";
       // const len = hex.length
        for (let i=0;i<6;i++){
            let number= randomGen(hex.length)
           
            hexColor += hex[number]
        }
        setColor(hexColor)

    }
    function handleRGBColor (){
        let r = randomGen(256);
        let g = randomGen(256);
        let b = randomGen(256);
        //console.log(number)
        setColor(`rgb(${r},${g},${b})`)
    }

    return(
        <>
        <button className="btn" onClick={handleHexColor}> <b>HEX</b>  color generator</button>
        <button className="btn" onClick={handleRGBColor}><b> RGB</b>  color generator</button>
        <div style= {{width :"100vw",height :"100vh",background :color}}>
        </div>
        </>
    );
}