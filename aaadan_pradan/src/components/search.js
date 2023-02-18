import React,{ useEffect, useState } from "react";
import { Navbar } from "./com";

import axios from 'axios';
// import './sear.css'
const getData= async ()=>{
    const data=await axios.get('http://localhost:8001/api/clgs')
    const colleges=data.data.data
    
}

export function Search(){
    return(
        <div className="Search">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Navbar/>
            <h1 className="heading">Search</h1>
            <input className="bar" placeholder="Search">
            </input>
            <button id="sub" onClick={getData} className="fa fa-search"></button>
            {/* <div className="row">
            </div> */}
        </div>
    )
}
