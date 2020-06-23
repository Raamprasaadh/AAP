//Purpose of the file : To display Contact details and location if possible a map.
import React from 'react';

export default function Contact() {
    return (
        <div className='contactUs'>

            <div class="card">
                {/* <img src="img_avatar.png" alt="Avatar" Style= {"width:100%"}></img>*/}
                <div class="container">
                    <h4><b>Anand</b></h4>
                    <p>CEO</p>
                    <p>9876543210</p>
                    <p>mail@gmail.com</p>
                </div>
            </div>
            <div class="card">
               {/* <img src="img_avatar.png" alt="Avatar" Style= {"width:100%"}></img>*/}
                <div class="container">
                    <h4><b>Gowri Shankar</b></h4>
                    <p>CEO</p>
                    <p>8610901900</p>
                    <p>mail@gmail.com</p>
                </div>
            </div>
            <footer>&copy; 2020 Hello World Applications.</footer>
        </div>
    )
}