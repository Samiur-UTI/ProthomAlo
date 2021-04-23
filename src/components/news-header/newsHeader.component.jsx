import React from 'react'
import './newsHeader.component.scss';
import NewsGeneral from '../news-general/newsGeneral.component';
export default function NewsHeader({ news }) {
    if (news.length > 1) {
        const { title, description, photo } = news[6];
        return (
                <div className='header'>
                    <NewsGeneral title={title} description={description} />
                    <img className='image' src={`${photo}`} alt='' />
                    <div className='news'>
                        <NewsGeneral title={news[7].title} description={news[7].description} />
                    </div>
                </div>
        )
    }
    return (
        <div className='header'>
            <h4>Title</h4>
        </div>
    )
}
