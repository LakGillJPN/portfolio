"use client";

import { useState } from "react";
import {poppins } from "./layout";
import Image from "next/image";
import Footer from "./components/Footer";
import JLeague from "./components/projects/JLeague";
import GamerTalk from "./components/projects/GamerTalk";
import languages from "./components/langData";
import Header from "./components/Header";

export default function Home() {
  const [lang, setLang] = useState<string>("English");

  const changeLang = () => {
    return lang === "English" ? setLang("Japanese") : setLang("English");
  };

  return (
    <div className="text-white">
      <Header text="" changeFunc={changeLang} lang={lang}/>
      <div className="flex flex-1 min-h-screen w-full justify-center items-center "> 
        <h1 className="text-5xl text-center font-bold  mb-60  pb-5">
          {lang === "Japanese" ? (
            <span>
              ラク ギル <br /> ポートフォリオ
            </span>
          ) : (
            "Lak Gill Portfolio"
          )}
       <a href="#projects"><p className="justify-center items-center border-2 text-2xl m-4">{languages[lang].project}</p></a> 
       <a href="#contributions"><p className="justify-center items-center border-2 text-2xl m-4">{languages[lang].freelance}</p></a> 

       contributions"
        </h1>
      </div>

      <h1 className="text-4xl p-10 flex flex-col items-center justify-center underline" id="projects">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-5 text-4xl ">
        <JLeague text={languages[lang].JLeague} />
        <GamerTalk text={languages[lang].GamerTalk} />
      </div>
     
      
      <div className="my-5 flex flex-col items-center justify-center min-h-screen w-full rounded-xl"> 
      <h1 className="text-4xl mb-20 border-2 flex flex-col items-center justify-center underline" id="contributions">{languages[lang].freelance}</h1>
        <Image 
           src="/images/mamoru.png"
           width={70}
           height={70}
           alt="Mamoru Icon"
        />
        <p className={poppins.className}>mamoru</p>
        <a className="text-blue-500 underline" href="http://app.mamoru.earth" target="_blank">
        http://app.mamoru.earth</a>
        <p className="p-10"> {languages[lang].mamoru}</p>

     
      </div>

      <Footer text={languages[lang].footer} />
    </div> 
  );
}

