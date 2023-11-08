import React from 'react'
import Image from 'next/image';

interface FooterProps {
  text: string;
}

const Header: React.FC<FooterProps> = ({text} ) => {
  return (
    <div className="text-2xl font-bold p-5 bg-grey-800  flex" >  {text}
      <a href="https://www.linkedin.com/in/lak-gill/">
          <Image 
           src="/images/li-logo-white.png"
           width={50}
           height={50}
           alt="link to LinkedIn"
          />
        </a>
        <a className="pl-4" href="https://www.twitter.com/LakGill88">
          <Image 
           src="/images/x-logo-white.png"
           width={50}
           height={50}
           alt="link to LinkedIn"
          />
        </a>
    </div>
    
  )
}

export default Header