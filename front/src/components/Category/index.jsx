import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Category({ title, image, id }) {


  const colors = ['#575959', '#EBEDC0', '#737F49', '#F7BE5D', '#D1CF7D']

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  const randomColor = getRandomColor()

  return (

    <Link to={`/categories/${id}`} className={s.links}>
      <div className={s.category}>
        
          <div key={id} className={s.img} style={{ backgroundImage: `url(http://localhost:3333${image})`, backgroundSize: 'cover' }}>
            <div className={s.square} style={{borderColor: randomColor}}></div>
          </div>
        <p>{title}</p>
      </div>
    </Link>
  )
}



