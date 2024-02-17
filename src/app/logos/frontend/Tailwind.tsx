import Image from "next/image";

import React from 'react'

export default function Tailwind() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
    width={50}
    height={50}
    alt="Tailwind CSS logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
  />
  )
}
