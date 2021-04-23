import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom';
import './newsPictures.component.scss'
export default function NewsPictures({title,photo}) {
    return (
        <Router>
            <div className='with-pictures'>
                <Link to='#' style={{ textDecoration: 'none'}} >
                    <h4 className='picture-title'>{title}</h4>
                </Link>
                <img className='image' src={`${photo}`} alt='' />
            </div>
        </Router>
        
    )
}
