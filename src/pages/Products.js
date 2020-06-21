/*
Purpose of the file : To display List of products
and its details such as width height and gsm.
todo  : remove table.
*/
import React from 'react';


export default function Products() {
    return (
        <div className='products'>
            <h1>
                Products.
            </h1>
            <div class="plates">
                    <h4 className="productTitle"><b>Plates</b></h4>
                    <p className="productSpecs">Size : 10 inches</p>
            </div>
            <div class="cups">
                
                    <h4 className="productTitle"><b>Cups</b></h4>
                    <p className="productSpecs">Size : 5 inches</p>
                
            </div>
            <div class="teaCups">
                    <h4 className="productTitle"><b>Tea Cups</b></h4>
                    <p className="productSpecs">Size : 100 ml</p>
            </div>
        </div>
    )
}