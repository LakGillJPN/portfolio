import React from 'react'
import Image from 'next/image';
import languages from './langData';

interface HeaderProps {
  text: string;
  changeFunc: React.MouseEventHandler<HTMLButtonElement>;
  lang: string;
}

const Header: React.FC<HeaderProps> = ({text, changeFunc, lang} ) => {
  return (
    <>
       <button
        onClick={changeFunc}
        className="text-white text-2xl font-bold p-3 border-2 rounded-xl absolute top-0 right-0 m-4 hover:bg-slate-700 bg-slate-600">
        {languages[lang].button}
      </button>

      <div className="text-2xl font-bold p-5 bg-grey-800 flex" > 
        <a href="https://www.linkedin.com/in/lak-gill/" target="_blank">
           <Image 
            src="/images/li-logo-white.png"
            width={50}
            height={50}
            alt="link to LinkedIn"
            />
        </a>
        <a className="pl-4" href="https://www.twitter.com/LakGill88" target="_blank">
          <Image 
           src="/images/x-logo-white.png"
           width={50}
           height={50}
           alt="link to X"
          />
        </a>
        <a className="pl-4" href="https://github.com/LakGillJPN" target="_blank">
          <Image 
           src="/images/github-mark-white.png"
           width={50}
           height={50}
           alt="link to github.png"
          />
        </a>
    </div>
     <div className="pl-10">  {text} </div>
  </> 
 )
}

export default Header
