import Image from "next/image";

import React from 'react'

export default function JestLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
    width={50}
    height={50}
    alt="jest logo"
    style={{ margin: '0 10px',  marginBottom: '10px' }} 
    />
  )
}
