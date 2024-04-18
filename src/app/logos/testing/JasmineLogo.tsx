import Image from "next/image";

import React from 'react'

export default function JasmineLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg" 
    width={50}
    height={50}
    alt="Jasmine logo"
    style={{ margin: '0 10px',  marginBottom: '10px' }} 
    />
  )
}
