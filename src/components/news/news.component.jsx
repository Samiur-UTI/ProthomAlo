import React from 'react';
import NewsRow from '../news-general-row/newsGeneralRow.component';
import NewsHeader from '../news-header/newsHeader.component';
import './news.component.scss';
import NewsPicturesRow from '../news-pictures-row/newsPicturesRow.component';
export default function News({ data }) {
    return (
        <div className='main'>
            <NewsHeader news={data} />
            <NewsRow data={data.slice(0,3)}/>
            <NewsPicturesRow data={data.slice(7,10)}/>
        </div>
    )
}
