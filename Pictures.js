import React, {useState, useEffect, Fragment} from "react";



function Pictures({world,country,setCountry}){
    const [isSubmit,setIsSubmit]=useState(false)
function changeSubmit(e){
    
    e.preventDefault()
    if (findCountry!==country){
  
    setIsSubmit(false)}
    else{fetch("http://localhost:3000/prices", 
    {method:"POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        formData 
      )}
      
    ).then((r)=>r.json())
    .then((items)=>cpArray.push(items))
setCountryLength(country.length)
    setIsSubmit(true)}
    setBought(false)
    const test= cpArray.find(item=> (item.country==country))
if(test===undefined){
    setPrice(Math.floor(rng))
}else if(test.country==country){
    setPrice(test.price)
}
    }

    const [cpArray, setCpArray]=useState([])
    useEffect(() => {
        fetch("http://localhost:3000/prices")
        .then((r)=>r.json())
        .then((items)=>setCpArray(items))
    },[])

    const [countryLength, setCountryLength]=useState()
    const [cLength, setClength]=useState(true)

function changeCountry(event){
    setCountry(event.target.value)
    if(country.length+1<countryLength){
        setClength(false)
    }
    else if(country.length+1===countryLength){
        setClength(true)
    }
    console.log(country.length+1)
    console.log(countryLength)
    if (cLength===false){
        setIsSubmit(false)
    }

}


const findCountry=world.find(item=>
    item===country)

const rng=Math.random()*1000
const [bought,setBought]=useState()
const [price,setPrice]=useState(Math.floor(rng))


 
  




const formData={
    "country":country,
    "price":Math.floor(rng)
}


function postThis(){
    
setBought(true)
}



    

    return (
<Fragment>
<main className="main">
<div id="ticket">
    <h1>
        TICKET BUYER
    </h1>
    <p id='p'
>Input country to get ticket price
   </p>
   <form >
       <input
       onChange={changeCountry}
       type='text'
       placeholder="country"
       value={country}
       />
       <button onClick={changeSubmit} >submit</button>
   </form>
   
       {bought?<div>
          <h3>Thanks for your purchase</h3>
       </div> : cLength?isSubmit? 
       
       <div><h3>Ticket to {country} for ${price}</h3>
       <button onClick={postThis}

       >Buy</button></div>
       :<div><h3>Enter an African country</h3></div>:null}

    </div>
    </main>
    </Fragment>)
}




export default Pictures