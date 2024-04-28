import Image from 'next/image'

export default function ReactNativeLogo() {
  return (
    <Image 
    src="/images/react-native.png" 
    width={60}
    height={60}
    alt="React Native logo"
    style={{ margin: '0 10px', marginBottom: '10px'}} 
    />
  )
}
