import React from "react";
import Carousel from "./Carousel";
import './App.css';


export default function Gallery(){
    return(
        <div className="wrapper">
         <Carousel>
             <div className="item item_1"></div>
             <div className="item item_2"></div>
             <div className="item item_3"></div>
         </Carousel>
        </div>
           
       
    )

    
}