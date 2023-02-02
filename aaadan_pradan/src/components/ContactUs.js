import { Navbar } from "./com";
import './cus.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

export function ImageSlider({images}){
    const settings={
        infinite:true,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        lazyload:true,
        autoplay:true,
        autoplaySpeed:2000,
    };
    return(
        <>
        <div className="img-slider">
            <Slider {...settings}>
                {
                    images.map((image)=>(
                        <div key={image.id}>
                            <img src={image.src} alt={image.alt}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
        </>
    )
}

export function ContactUs(){
    return(
        <div id='enclo'>
            <Navbar/>
            <h1 id="Heading">Get in touch</h1>
            <p id="ph">Phone: +91 9885067315</p>
            <p id='Email'>Email: aadan_pradan@gmail.com</p>
            <p id='add'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
    )
}