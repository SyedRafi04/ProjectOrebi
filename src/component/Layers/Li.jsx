import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({href, LiContent, className}) => {
  return (
    <li>
        <Link className={`font-DM font-bold text-sm text-[#767676] hover:text-[#262626] transition-all duration-300 ${className}`} to={href}>
            {LiContent}
        </Link>
    </li>
  )
}

export default Li
