import Image from "next/image";

import React from 'react'

export default function AWSLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
    width={50}
    height={50}
    alt="AWS logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
