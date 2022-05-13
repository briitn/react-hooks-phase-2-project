import React, { Fragment } from "react"
import { Link } from "react-router-dom"

function Home(){
    return <Fragment>
        <div className="Home">
       
        <img id="image" src="https://image.shutterstock.com/z/stock-vector-symbols-of-nature-culture-and-architecture-of-africa-in-the-form-of-a-stylized-map-700057477.jpg"

        alt="Cultral African Map"
        width='600px'
        height={600} />
              </div>
             <div>
          <h3>
            visit <Link to='/tour'> Tour</Link> to see our favorit African Countries
        </h3>

        <h3>We have affordable tickets to Africa!  Click <Link to='/pictures'>here</Link> to buy tickets</h3>
    </div>

    <div>
        <h3>
            info:

           
           
        </h3>
        <p>
        email:babynamek@gmail.com

        </p>
        <p>
        <a href="https://www.linkedin.com/in/prince-gobah-0a7554223">linkedin</a> 
        </p>
    </div>
  
    </Fragment>
}





export default Home