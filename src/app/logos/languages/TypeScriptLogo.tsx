import Image from "next/image"

export default function TypeScriptLogo() {
  return (
    <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        width={50}
        height={50}
        alt="TypeScript logo"
        style={{ margin: '0 10px',marginBottom: '10px' }} 
        />
  )
}
