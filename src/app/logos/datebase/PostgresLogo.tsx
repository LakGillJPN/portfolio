import Image from "next/image";

import React from 'react'

export default function PostgresLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
    width={50}
    height={50}
    alt="Postgres logo"
    style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
