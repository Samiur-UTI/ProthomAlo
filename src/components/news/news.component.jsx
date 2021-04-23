import React from 'react';
import NewsGeneral from '../news-general/newsGeneral.component';
import NewsRow from '../news-general/newsGeneralRow.component';
import NewsHeader from '../news-header/newsHeader.component';
import './news.component.scss';
export default function News({ data }) {
    return (
        <div className='main'>
            <NewsHeader news={data} />
            <NewsRow data={data.slice(0,3)}/>
            <div>News with pictures</div>
        </div>
    )
}
