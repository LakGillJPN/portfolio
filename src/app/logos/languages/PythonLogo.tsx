import Image from "next/image";
import React from 'react'

export default function PythonLogo() {
  return (
   <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
    width={50}
    height={50}
    alt="Python logo" 
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
