import React, {useState, useEffect} from "react";




function Pictures({world,country,setCountry}){
    const [cpArray, setCpArray]=useState([])
    useEffect(() => {
        fetch("http://localhost:3000/prices")
        .then((r)=>r.json())
        .then((items)=>setCpArray(items))
    },[])



}


export default Pictures