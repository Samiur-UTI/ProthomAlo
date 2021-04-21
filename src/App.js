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
            <div className="content">
                <div className='content-item-news'>
                    <div className='news-item-important'>
                        <div className='breaking-news'>

                        </div>
                        <div className='notso-breaking-news'>

                        </div>

                    </div>
                    <div className='news-item'>
                        <div className='news-general'>

                        </div>
                        <div className='news-general'>

                        </div>
                        <div className='news-general'>

                        </div>
                    </div>
                    <div className='news-item'>

                    </div>
                    <div className='news-item'>

                    </div>
                </div>
                <div className='content-item-add'>

                </div>
            </div>
            <div className="footer"></div>            
        </div>
    )
}
