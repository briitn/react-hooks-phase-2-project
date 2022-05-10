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





    

    return <div>


   <form >
       <input
       onChange={changeCountry}
       type='text'
       placeholder="country"
       value={country}
       />
       
   </form>
   
       
    </div>
}




export default Pictures