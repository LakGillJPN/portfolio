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
        
    </div>
     <div className="pl-10">  {text} </div>
  </> 
 )
}

export default Header
