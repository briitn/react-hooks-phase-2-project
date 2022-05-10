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



const rng=Math.random()*1000
const [bought,setBought]=useState()
const [price,setPrice]=useState(Math.floor(rng))
console.log(rng)
const [isSubmit,setIsSubmit]=useState(false)
function changeSubmit(e){
    
    e.preventDefault()
    {fetch("http://localhost:3000/prices", 
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
   
     

    </div>
}




export default Pictures