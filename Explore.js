import React from "react";
import {Link} from 'react-router-dom'

function Explore({africa, setCountry}){

  const mapMapstuff=africa.map(item=>{
    return (
        <div key={item.country}>
           <div>{item.country}</div>


        
          <div><img src={item.flag}

        alt="flag"
        width='55px'
         />
        <Link to="./pictures"
        onClick={()=>setCountry(item.country)}
            
        >click here to buy tickets for {item.country}
        </Link>
         </div>
       
<div>
        <img className="image2"
        src={item.image[0]}
        alt={item.alt[0]}
        width={250}
        />
        <span className="tooltiptext">{item.alt[0]}</span>

        <img className="image2"
        src={item.image[1]}
        alt={item.alt[1]}
        width={300}/>
         <span className="tooltiptext">{item.alt[1]}</span>
         <img className="image2"
        src={item.image[2]}
        alt={item.alt[2]}
        width={300}/>
         <span className="tooltiptext">{item.alt[2]}</span>
        </div>
        </div>
    )
  })
    return (
        <main className="main">
              
            <h1>
               <span className="see"> See </span><img src="https://image.shutterstock.com/image-vector/africa-continent-map-ornate-ethnic-260nw-1315315565.jpg"
                alt="Africa map"
                width={20}/><span className="frica">frica</span>
            </h1>
           
             {mapMapstuff}   
              

        </main>
    )
}


export default Explore