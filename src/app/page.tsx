"use client";

import { useState } from "react";
import {poppins } from "./layout";
import Image from "next/image";
import Footer from "./components/Footer";
import JLeague from "./components/projects/JLeague";
import GamerTalk from "./components/projects/GamerTalk";
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
      <Header changeFunc={changeLang} lang={lang} toggleMenu={toggleMenu}/>
      {isMenuOpen && <HamburgerMenu lang={lang} closeMenu={closeMenu} />}
      <div className="flex flex-1 min-h-screen w-full justify-center items-center" id="top"> 
        <h1 className="text-5xl text-center font-bold mb-60 pb-5">
          {lang === "Japanese" ? (
            <span>
              ラク ギル <br /> ポートフォリオ
            </span>
          ) : (
            "Lak Gill Portfolio"
          )}

        <div className="p-5 flex justify-center gap-2"> 
          <a href="https://www.linkedin.com/in/lak-gill/" target="_blank">
            <Image 
              src="/images/li-logo-white.png"
              width={80}
              height={80}
              alt="link to LinkedIn"
              className="border-2 p-3 rounded-3xl hover:bg-zinc-600"
            />
          </a>
          <a className="pl-4" href="https://www.twitter.com/LakGill88" target="_blank">
            <Image 
              src="/images/x-logo-white.png"
              width={80}
              height={80}
              alt="link to X"
              className="border-2 p-3 rounded-3xl hover:bg-zinc-600"
            />
          </a>
          <a className="pl-4" href="https://github.com/LakGillJPN" target="_blank">
            <Image 
              src="/images/github-mark-white.png"
              width={80}
              height={80}
              alt="link to github.png"
              className="border-2 p-3 rounded-3xl hover:bg-zinc-600"
            />
          </a>
        </div>
      </h1>
      </div>

      <div className="min-h-screen w-full" id="projects">
        <h1 className="text-5xl font-bold p-10 flex flex-col items-center justify-center">{languages[lang].projects}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-5 text-4xl ">
          <JLeague text={languages[lang].JLeague} />
          <GamerTalk text={languages[lang].GamerTalk} />
        </div>
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

      <div className="my-5 flex flex-col items-center justify-center min-h-screen rounded-xl"> 
        <h1 className="text-5xl font-bold mb-10 flex flex-col items-center justify-center" id="aboutme">{languages[lang].aboutMeTitle}</h1>
        <div className="border-1 w-3/4">
          <p className="mb-5">{languages[lang].aboutMe.intro}</p>
          <p className="mb-5">{languages[lang].aboutMe.codingSchool}</p>
          <p className="mb-5">{languages[lang].aboutMe.since}</p>

        </div>
      </div>

      <Footer text={languages[lang].footer} />
    </div> 
  );
}

