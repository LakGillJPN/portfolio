import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import languages from './langData';

interface HamburgerMenu {
  closeMenu: MouseEventHandler;
  lang: string;
}

const HamburgerMenu: React.FC<HamburgerMenu> = ({ closeMenu, lang }) => {
  return (
    <div className="flex flex-col fixed top-0 left-0 w-{30%} text-2xl h-full p-5 box-border bg-slate-600 gap-7 font-bold transition-all">
      <p onClick={closeMenu} className="items-center align-center justify-center flex p-5"> 
        <Image 
            src="/images/x-mark-32.png"
            width={50}
            height={50}
            alt="x logo"
            className="p-2"
            />
      </p>
      <a href="#projects" onClick={closeMenu}>{languages[lang].projects}</a>
      <a href="#contributions" onClick={closeMenu}>{languages[lang].freelance}</a>
    </div>
  );
};

export default HamburgerMenu;
