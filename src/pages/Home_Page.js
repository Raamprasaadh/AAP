//Purpose of the file : To display the home page carousal.
import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomePage extends Component{
    render(){
    return(
        <Carousel>
        <div>
            <img src = "/images/Plates.jpg" alt ="404"/>
            <p className="legend">Plates</p>
        </div>
        <div>
            <img src = "/images/Different_Sizes.jpg" alt ="404"/>
            <p className="legend">Various Sizes</p>
        </div>
        <div>
            <img src = "/images/Different_Sizes2.jpeg" alt ="404"/>
            <p className="legend">Various Sizes</p>
        </div>
        </Carousel>
    )
    }
}

export default HomePage;