import React from 'react'
import Moment from 'react-moment';
import './time.component.scss'
export default function Time({time}) {
    return (
        <div className='time'>
            <Moment fromNow>{time}</Moment>
        </div>
    )
}
