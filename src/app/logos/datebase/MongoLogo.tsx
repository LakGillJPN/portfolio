import Image from "next/image";

import React from 'react'

export default function MongoLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" 
    width={50}
    height={50}
    alt="MySQL logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
