import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import languages from './langData';

interface HamburgerMenu {
  closeMenu: MouseEventHandler;
  lang: string;
}

const HamburgerMenu: React.FC<HamburgerMenu> = ({ closeMenu, lang }) => {
  return (
    <div className="flex flex-col fixed top-0 left-0 w-{30%} text-2xl h-full p-5 box-border bg-slate-600 gap-7 font-bold">
      <p onClick={closeMenu} className="items-center align-center justify-center flex p-5"> 
        <Image 
            src="/images/x-mark-32.png"
            width={40}
            height={40}
            alt="x logo"
            className="p-2 border-2 bg-zinc-800 cursor-pointer"
            />
      </p>
      <a href="#tech-stack" onClick={closeMenu}>{languages[lang].techStack}</a>
      <a href="#projects" onClick={closeMenu}>{languages[lang].projects}</a>
      <a href="#contributions" onClick={closeMenu}>{languages[lang].freelance}</a>
      <a href="#aboutme" onClick={closeMenu}>{languages[lang].aboutMeTitle}</a>
      <a href="#top" onClick={closeMenu}><p className="text-sm absolute bottom-0 mb-10">{languages[lang].top}</p></a>
    </div>
  );
};

export default HamburgerMenu;
