import React from 'react'
import NewsGeneral from '../news-general/newsGeneral.component';
import './newsGeneralRow.component.scss'
export default function NewsRow({data}) {
    let row='row';
    return (
        <div className='normal'>
            {data.map(({title,description,id}) => (
                <NewsGeneral key={id} row={row} title={title} description={description}/>
            ))}
        </div>
    )
}
