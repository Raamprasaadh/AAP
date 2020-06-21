/*
Purpose of the file : To display List of products
and its details such as width height and gsm.
todo  : remove table.
*/
import React from 'react';

import Plates from '../images/Products_Plates.jpeg';
import Cups from '../images/Products_Cups.jpg';
import TeaCups from '../images/Products_Tea_Cups.jpg';

export default function Products() {
    return (
        <div className='products'>
            <h1>
                Products.
            </h1>
            <div class="productCard">
                <img src={Plates} alt="Product" Style={"width:100%"}></img>
                <div class="container">
                    <h4><b>Plates</b></h4>
                    <p>Size : 10 inches</p>
                </div>
            </div>
            <div class="productCard">
                <img src={Cups} alt="Product" Style={"width:100%"}></img>
                <div class="container">
                    <h4><b>Cups</b></h4>
                    <p>Size : 5 inches</p>
                </div>
            </div>
            <div class="productCard">
                <img src={TeaCups} alt="Product" Style={"width:100%"}></img>
                <div class="container">
                    <h4><b>Tea Cups</b></h4>
                    <p>Size : 100 ml</p>
                </div>
            </div>
        </div>
    )
}