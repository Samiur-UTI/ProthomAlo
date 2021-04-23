import React from 'react'
import NewsPictures from '../news-pictures/newsPictures.component';
import './newsPicturesRow.component.scss';
export default function NewsPictureRow({ data }) {
  return(
      <div className='pictures'>
        {data.map(({title,photo,id}) => (
          <NewsPictures key={id} title={title} photo={photo}/>
        ))}
      </div>
  )
}
