import React, {useState, useEffect} from "react";




function Pictures({world,country,setCountry}){
    const [cpArray, setCpArray]=useState([])
    useEffect(() => {
        fetch("http://localhost:3000/prices")
        .then((r)=>r.json())
        .then((items)=>setCpArray(items))
    },[])

console.log(country)
function changeCountry(event){
    setCountry(event.target.value)
    console.log(country)
}

const findCountry=world.find(item=>
    item===country)

const rng=Math.random()*1000
const [bought,setBought]=useState()
const [price,setPrice]=useState(Math.floor(rng))
console.log(rng)
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

    setIsSubmit(true)}
    setBought(false)
    const test= cpArray.find(item=> (item.country==country))
if(test===undefined){
    setPrice(Math.floor(rng))
}else if(test.country==country){
    setPrice(test.price)
}
    }

 
  

console.log(price)


const formData={
    "country":country,
    "price":price
}


function postThis(){
    
setBought(true)
}



    

    return <div>


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
       </div> :isSubmit? 
       <div><h3>Ticket to {country} for ${price}</h3>
       <button onClick={postThis}

       >Buy</button></div>
       :<div><h3>Enter an African country</h3></div>}

    </div>
}




export default Pictures