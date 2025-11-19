import Image from "next/image";

import React from 'react'

export default function MySQLLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" 
    width={50}
    height={50}
    alt="MySQL logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
