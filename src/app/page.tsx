"use client";

import { useState } from "react";
import {poppins } from "./layout";
import Image from "next/image";
import Footer from "./components/Footer";
import JLeague from "./components/projects/JLeague";
import GamerTalk from "./components/projects/GamerTalk";
import SakuraSignal from "./components/projects/SakuraSignal";
import languages from "./components/langData";
import Header from "./components/Header";
import HamburgerMenu from './components/HamburgerMenu'

export default function Home() {
  const [lang, setLang] = useState<string>("English");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLang = () => {
    return lang === "English" ? setLang("Japanese") : setLang("English");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="text-white">
      <Header text="" changeFunc={changeLang} lang={lang} toggleMenu={toggleMenu}/>
      {isMenuOpen && <HamburgerMenu closeMenu={closeMenu} />}
      <div className="flex flex-1 min-h-screen w-full justify-center items-center "> 
        <h1 className="text-5xl text-center font-bold  mb-60 pb-5">
          {lang === "Japanese" ? (
            <span>
              ラク ギル <br /> ポートフォリオ
            </span>
          ) : (
            "Lak Gill Portfolio"
          )}
       {/* <a href="#projects"><p className="justify-center items-center border-2 text-2xl m-4 rounded-xl hover:bg-slate-700 bg-slate-600">{languages[lang].projects}</p></a> 
       <a href="#contributions"><p className="justify-center items-center border-2 text-2xl m-4 rounded-xl hover:bg-slate-700 bg-slate-600">{languages[lang].freelance}</p></a> */}
       <div className="p-5 flex justify-center gap-2"> 
        <a href="https://www.linkedin.com/in/lak-gill/" target="_blank">
           <Image 
            src="/images/li-logo-white.png"
            width={80}
            height={80}
            alt="link to LinkedIn"
            className="border-2 p-3 rounded-3xl hover:bg-zinc-700"
            />
        </a>
        <a className="pl-4" href="https://www.twitter.com/LakGill88" target="_blank">
          <Image 
           src="/images/x-logo-white.png"
           width={80}
           height={80}
           alt="link to X"
           className="border-2 p-3 rounded-3xl hover:bg-zinc-700"
          />
        </a>
        <a className="pl-4" href="https://github.com/LakGillJPN" target="_blank">
          <Image 
           src="/images/github-mark-white.png"
           width={80}
           height={80}
           alt="link to github.png"
           className="border-2 p-3 rounded-3xl hover:bg-zinc-700"
          />
        </a>
    </div>
        </h1>
      </div>

      <h1 className="text-5xl font-bold p-10 flex flex-col items-center justify-center" id="projects">{languages[lang].projects}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 px-2 gap-5 text-4xl ">
        <JLeague text={languages[lang].JLeague} />
        <GamerTalk text={languages[lang].GamerTalk} />
        <SakuraSignal text={languages[lang].SakuraSignal} />
      </div>
      
      <div className="my-5 flex flex-col items-center justify-center min-h-screen w-full rounded-xl"> 
      <h1 className="text-5xl font-bold mb-20 flex flex-col items-center justify-center" id="contributions">{languages[lang].freelance}</h1>
        <Image 
           src="/images/mamoru.png"
           width={70}
           height={70}
           alt="Mamoru Icon"
        />
        <p className={poppins.className}>mamoru</p>
        <p>{languages[lang].mamoruDate}</p>
        <a className="text-blue-500 underline" href="http://app.mamoru.earth" target="_blank">
        http://app.mamoru.earth</a>
        <p className="p-10"> {languages[lang].mamoru}</p>

     
      </div>

      <Footer text={languages[lang].footer} />
    </div> 
  );
}

