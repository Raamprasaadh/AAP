//Purpose of the file : To display the home page carousal.
import React, {Component} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Plates from "../images/Plates.jpg";
import VariousSizes from "../images/Different_Sizes.jpg";
import VariousSizes2 from "../images/Different_Sizes2.jpeg";

class HomePage extends Component{
    render(){
    return(
        <Carousel>
        <div>
            <img src = {Plates} alt ="404"/>
            <p className="legend">Plates</p>
        </div>
        <div>
            <img src = {VariousSizes} alt ="404"/>
            <p className="legend">Various Sizes</p>
        </div>
        <div>
            <img src = {VariousSizes2} alt ="404"/>
            <p className="legend">Various Sizes</p>
        </div>
        </Carousel>
    )
    }
}

export default HomePage;