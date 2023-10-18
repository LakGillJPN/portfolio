import Image from "next/image";

import React from 'react'

export default function CypressLogo() {
  return (
    <Image 
    src="/images/cypress-icon.png" 
    width={50}
    height={50}
    alt="cypress logo"
    style={{ margin: '0 10px',  marginBottom: '10px' }} 
    />
  )
}
