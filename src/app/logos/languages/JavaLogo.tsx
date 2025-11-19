import Image from "next/image"

export default function JavaLogo() {
  return (
    <Image    
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" 
        width={50}
        height={50}
        alt="Java logo"
        style={{ margin: '0 10px',marginBottom: '10px' }} 
        />
  )
}
