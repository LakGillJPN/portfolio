import Image from "next/image"

export default function JavaScriptLogo() {
  return (
    <Image    
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
        width={50}
        height={50}
        alt="JavaScript logo"
        style={{ margin: '0 10px',marginBottom: '10px' }} 
        />
  )
}
