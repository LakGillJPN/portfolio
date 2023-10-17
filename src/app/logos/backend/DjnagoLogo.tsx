import Image from "next/image";

import React from 'react'

export default function DjnagoLogo() {
  return (
  <Image 
    src="/images/django-logo.png" 
    width={40}
    height={30}
    alt="django logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
