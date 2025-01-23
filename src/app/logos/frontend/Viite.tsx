import Image from 'next/image'

export default function ViteLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"  
    width={50}
    height={50}
    alt="Vite logo"
    style={{ margin: '0 10px', marginBottom: '10px'}} 
    />
  )
}
