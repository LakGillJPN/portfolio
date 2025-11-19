import Image from "next/image"

export default function VisualBasicLogo() {
  return (
    <Image    
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg"  
        width={50}
        height={50}
        alt="VisualBasic logo"
        style={{ margin: '0 10px',marginBottom: '10px' }} 
        />
  )
}
