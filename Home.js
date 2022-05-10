import React, { Fragment } from "react"
import { Link } from "react-router-dom"

function Home(){
    return <Fragment> <div className="Home">
       
        <img src="https://image.shutterstock.com/image-vector/africa-continent-map-ornate-ethnic-260nw-1315315565.jpg"

        alt="Cultral African Map"
        width='250px'
        height={200} />
    </div>
    <div>
        <h3>
            visit <Link to='/tour'> Tour</Link> to see our favorit African Countries
        </h3>

        <h3>We have affordable tickets to Africa!  Click <Link to='/pictures'>here</Link> to buy tickets</h3>
    </div>
    </Fragment>
}





export default Home