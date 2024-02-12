import { useState } from 'react';

import  data from './data.js';
import './data.css';

export default function Accordian(){
    const [selected, setSelected]= useState(localStorage.getItem("selected"))
    const [multiEnabled, setMultiEnabled] = useState(false)
    const [selectedList, setSelectedList]= useState([])
    console.log("localstorage")
   console.log(localStorage.getItem("selected"))
   
    
    function enableMulti(){
        setSelectedList([ ]);
        setMultiEnabled(!multiEnabled)
    }
    function disableMulti(){    
        setSelectedList([ ]);  
        setMultiEnabled(!multiEnabled)
     }

    function handleClickSingle (itemId){
        
        if(multiEnabled !== true){
            if(selected !== itemId){
               // const selItem = data.filter((da)=>  da.id === itemId)       
                 setSelected(itemId);
            }
            else{         
           
                setSelected(null);
            }
            localStorage.setItem("selected",selected)
        }
        else{            
            const ind= selectedList.indexOf(itemId);
            //const selItem = data.filter((da)=>  da.id === itemId)  
           // alert(ind)
          // alert( ind);
            if( ind === -1){
                const newList = [...selectedList, itemId]
                setSelectedList(newList);
               // alert(selectedList)
            }
            else{                 
               const newList =[... selectedList]
               newList.splice(ind,1)
                setSelectedList(newList);
            }  
            localStorage.setItem("selectedList",selectedList)
             
        }
        console.log("localstorage 2")
   console.log(localStorage.getItem("selected"))
       
        
    }

    return (
        <div>
            {multiEnabled ?  <button className ="btn" onClick={enableMulti}>Disable MultiSelect</button>:
            <button  className ="btn" onClick={disableMulti}>Enable MultiSelect</button>}
             <div>
                {
                    data && data.length > 0 ? 
                        ( data.map((item)=>(
                            <div className="accordian"> 
                                <div className ="panel" onClick={()=>{
                                  handleClickSingle (item.id)
                                 }}>
                                  <h4>{item.question}</h4>
                                  <span>+</span>
                                </div>
                                {
                                    
                                        selected === item.id || selectedList.indexOf(item.id) !==  -1 ?     <div className="details">{item.answer}</div>
                                        :null

                                }
                               
                            </div>
                           
                    )))
                        
                    
                         :  ( <div> no data</div>    )   
                }
            </div>
        </div>
    )
}