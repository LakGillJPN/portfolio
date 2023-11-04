import Image from "next/image";

export default function NextJSLogo({ }) {
  return (
    <Image 
      src="/images/nextjs_white_icon.png" 
      width={50}
      height={50}
      alt="Next JS logo"
      style={{ margin: '0 10px', marginBottom: '10px'  }} 
    />
  )
}
