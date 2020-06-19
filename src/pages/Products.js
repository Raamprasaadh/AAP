/*
Purpose of the file : To display List of products
and its details such as width height and gsm.
*/
import React from 'react';

import Plates from '../images/Plates.jpg';
export default function Products()
{
    return(
        <div className='Container'>
            <h1>
                Products.
            </h1>
            <th>
            <td>{"S.no"}</td>
            <td>{"Image"}</td>
            <td>{"Specifications"}</td>
            </th>
            <tr key={1}>
               <td>{1}</td>
               <td>{<img src = {Plates} alt = "404"/>}</td>
               <td>{"Specifications"}</td>
            </tr>
        </div>
    )
}