import React from 'react'

const Button = ({children,...rest}) => {
  return (
   <button {...rest} className={`btn ${rest.className || ''}`}>{children}</button>

  )
}

export default Button
