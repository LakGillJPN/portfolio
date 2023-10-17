import React from 'react'
import Image from 'next/image'

export default function ExpressLogo() {
  return (
    <Image 
    src="/images/express-white-icon.png" 
    width={50}
    height={40}
    alt="nodejs logo"
    style={{ margin: '0 10px',  marginBottom: '10px' }} 
    />
  )
}
