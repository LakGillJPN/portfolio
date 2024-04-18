import Image from "next/image";
import React from 'react'

export default function DartLogo() {
  return (
   <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg"      
    width={50}
    height={50}
    alt="Dart logo" 
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
