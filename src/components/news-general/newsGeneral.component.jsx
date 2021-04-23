import React from 'react';
import './newsGeneral.component.scss';
export default function NewsGeneral({title,description}) {
    const showNews = description.substr(0,100).concat('...');
    return (
        <div className='general'>
            <h4>{title}</h4>
            <p className='demo'>{showNews}</p>
        </div>
    )
}
