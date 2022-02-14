import React from "react";
import Carousel from "./Carousel";
import './App.css';
import Header from "./header";


export default function Gallery(){
    return(
        <div>
            <Header />
        <div className="wrapper">
         <Carousel>
             <div className="item item_1"></div>
             <div className="item item_2"></div>
             <div className="item item_3"></div>
             <div className="item item_4"></div>
             <div className="item item_5"></div>
             <div className="item item_6"></div>
             <div className="item item_7"></div>
         </Carousel>
        </div>
        </div>   
       
    )

    
}