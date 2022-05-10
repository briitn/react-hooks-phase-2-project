import React from "react";
import {Link} from 'react-router-dom'

function Tour({africa, setCountry}){

  const mapMapstuff=africa.map(item=>{
    return (
        <div key={item.country}>
           <div>{item.country}</div>


        
          <div><img src={item.flag}

        alt="flag"
        width='50px'
         />
        <Link to="./pictures"
        onClick={()=>setCountry(item.country)}
            
        >click here to buy tickets for {item.country}
        </Link>
         </div>
       
<div>
        <img className="image1"
        src={item.image[0]}
        alt={item.alt[0]}
        width={300}/>
        <span className="tooltiptext">{item.alt[0]}</span>

        <img className="image2"
        src={item.image[1]}
        alt={item.alt[1]}
        width={300}/>
         <span className="tooltiptext">{item.alt[1]}</span>
        </div>
        </div>
    )
  })
    return (
        <main>
              
            <h1>
               <span className="see"> See </span><img src="https://image.shutterstock.com/image-vector/africa-continent-map-ornate-ethnic-260nw-1315315565.jpg"
                alt="Africa map"
                width={20}/><span className="frica">frica</span>
            </h1>
           
             {mapMapstuff}   
              

        </main>
    )
}


export default Tour