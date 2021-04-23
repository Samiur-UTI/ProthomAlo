import React from 'react';
import './newsGeneral.component.scss';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import Time from '../time/time.component';
export default function NewsGeneral({title,description,row,time}) {
    if(row){
        const showNews = description.substr(0,70).concat('...');
        return (
            <Router>
                <div className='general'>
                    <Link to='#' style={{ textDecoration: 'none'}}>
                        <h4>{title}</h4>
                        <p className='demo'>{showNews}</p>
                        <Time time={time}/>
                    </Link>
                </div>
            </Router>
        )
    }
    const showNews = description.substr(0,100).concat('...');
    return (
        <Router>
            <div className='general'>
                <Link to='#' style={{ textDecoration: 'none'}}>
                    <h4>{title}</h4>
                    <p className='demo'>{showNews}</p>
                    <Time time={time}/>
                </Link>
            </div>
        </Router>
    )
}
