import { cloneElement, useEffect, useState,Children } from 'react';
import './carousel.css';
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'


const PAGE_WIDTH = 850;
export default function Carousel({children}){
 const [pages,setPages] = useState([]);
 const [offset,setOffset] = useState(0);
  
 const handleLeftArrowClick = ()=>{
   console.log('hendleLeftArrowClick')
   setOffset((currentOffset)=>{
  
    const newOffset = currentOffset + PAGE_WIDTH;
    console.log(newOffset)
    return  Math.min(newOffset,0)

   })
 }

 const handleRigthArrowClick = ()=>{
  console.log('hendleRigthArrowClick')  
   setOffset((currentOffset)=>{
    
    const newOffset = currentOffset - PAGE_WIDTH;
    const maxOffset = - (PAGE_WIDTH * (pages.length - 1))
    console.log(newOffset,maxOffset)
    return  Math.max(newOffset,maxOffset)

   })
}

 useEffect(()=>{
  setPages(
   Children.map(children,child =>{
     return cloneElement(child,{
       style:{
         heigth: '100%',
         minWidth: `${PAGE_WIDTH}px`,
         maxWidth: `${PAGE_WIDTH}px`,
       },
     })
   })
  )
 },[])

    return(
     <div className="main-container">
       <FaArrowLeft className="arrow" onClick={handleLeftArrowClick} />
       <div className="window">
         <div className="all-pages-container"
          style = {{

            transform : `translateX(${offset}px)`
          }}
         
         >
           
          {pages}
         </div>
        
       </div>
       <FaArrowRight className="arrow" onClick={handleRigthArrowClick}/> 
     </div>
    )
}