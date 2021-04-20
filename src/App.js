import React from 'react';
import './App.scss';
export default function App() {
    async function data (){
        const response = await fetch('./data.json');
        const data = await response.json();
    }
    data();
    return (
        <div className='root'>
            <div className="logo"></div>
            <div className="content"></div>
            <div className="footer"></div>            
        </div>
    )
}
