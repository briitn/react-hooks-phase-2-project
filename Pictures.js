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

}




export default Pictures