import Image from 'next/image'

export default function ReactLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    width={50}
    height={50}
    alt="React logo"
    style={{ margin: '0 10px', marginBottom: '10px'}} 
    />
  )
}
