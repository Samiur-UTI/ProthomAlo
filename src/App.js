import React from 'react'
//import axios from 'axios';
export default function App() {
    async function data (){
        const response = await fetch('./data.json');
        const data = await response.json();
    }
    data();
    return (
        <div className="main">
            <div className="logo"></div>
            <div className="content"></div>
            <div className="footer"></div>            
        </div>
    )
}
