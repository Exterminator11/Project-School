import { Navbar } from "./com";
// import './cus.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
  
const images=[
    {
        id:1,
        src:'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
        alt:'photo1'
    },
    {
        id:2,
        src:'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
        alt:'photo2'
    },
    {
        id:3,
        src:'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',        
        alt:'photo3'
    }

]

export function ImageSlider({images}){
    const settings={
        infinite:true,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        lazyload:true,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000
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
            <p id='add'>Address : Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            <ImageSlider images={images}/>
        </div>
    )
}