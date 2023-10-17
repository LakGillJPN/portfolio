import React from 'react'
import Image from 'next/image'

export default function NodeJSLogo() {
  return (
    <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        width={50}
        height={50}
        alt="nodejs logo"
        style={{ margin: '0 10px',  marginBottom: '10px' }} 
        />
  )
}
