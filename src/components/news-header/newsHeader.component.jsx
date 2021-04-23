import React from 'react'
import './newsHeader.component.scss';
import NewsGeneral from '../news-general/newsGeneral.component';
import {Link,BrowserRouter as Router} from 'react-router-dom';
export default function NewsHeader({ news }) {
    if (news.length > 1) {
        const { title, description, photo } = news[6];
        return (
            <Router>
                <div className='header'>
                        <Link to='#' style={{ textDecoration: 'none'}}>
                            <NewsGeneral title={title} description={description} />
                         </Link>
                         <img className='image' src={`${photo}`} alt='' />
                         <Link to='#' style={{ textDecoration: 'none'}}>
                            <NewsGeneral title={news[7].title} description={news[7].description} />
                         </Link>
                </div>
            </Router>
        )
    }
    return (
        <div className='header'>
            <h4>Title</h4>
        </div>
    )
}
