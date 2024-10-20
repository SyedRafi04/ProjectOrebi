import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({href, src, alt, className}) => {
  return (
    <Link className={`${className}`} to={href}>
        <picture>
            <img className='block' src={src} alt={alt} />
        </picture>
    </Link>
  )
}

export default Image
