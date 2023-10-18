import Image from "next/image";

import React from 'react'

export default function FirebaseLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" 
    width={50}
    height={50}
    alt="firebase logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
