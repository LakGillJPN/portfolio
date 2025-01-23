import Image from 'next/image'

export default function VueLogo() {
  return (
    <Image 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" 
    width={50}
    height={50}
    alt="Vue logo"
    style={{ margin: '0 10px', marginBottom: '10px'}} 
    />
  )
}
