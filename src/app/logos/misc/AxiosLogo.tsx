import Image from "next/image";

import React from 'react'

export default function AxiosLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" 
    width={50}
    height={50}
    alt="axios logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
