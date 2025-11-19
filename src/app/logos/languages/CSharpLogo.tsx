import Image from "next/image"

export default function CSharpLogo() {
  return (
    <Image    
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" 
        width={50}
        height={50}
        alt="CSharp logo"
        style={{ margin: '0 10px',marginBottom: '10px' }} 
        />
  )
}
