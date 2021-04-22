import React from 'react';
import NewsHeader from '../news-header/newsHeader.component';
import './news.component.scss';
export default function News({ data }) {
    return (
        <div className='main'>
            <NewsHeader news={data[0]}/>
            <div>General news</div>
            <div>News with pictures</div>
        </div>
    )
}
