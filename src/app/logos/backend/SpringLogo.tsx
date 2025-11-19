import Image from "next/image";

import React from 'react'

export default function SpringLogo() {
  return (
   <Image 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" 
      width={50}
      height={50}
      alt="springb logo"
      style={{ margin: '0 10px',  marginBottom: '10px' }} 
    />
  )
}
