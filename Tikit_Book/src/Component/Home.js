import React from 'react'

import { useStateValue } from './Contextapi/StateProvider'
import ImageSlider from './ImageSlider'
import RecommendedMovie from './RecommendedMovie'



export default function Home() {

  const [{ film_data, RecommendedMovi }] = useStateValue()



  return (
    <div>
      <div className='shadow-lg  mb-5  m-5 rounded' >
        <ImageSlider slides={film_data} />
      </div>
      <div className='d-flex'>
        {
          RecommendedMovi.map((item) => {
            return (<RecommendedMovie
              id={item.id}
              title={item.title}
              release_date={item.release_date}
              image={item.image}
              Director={item.Director}
              rating={item.rating}
              subtitle={item.subtitle}
              actor={item.actor}
              key={item.id} />)
          })
        }
      </div>






    </div>
  )
}
