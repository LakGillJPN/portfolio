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
       <Header text=""/>
      <button
        onClick={changeLang}
        className="text-2xl font-bold p-3 border-2 rounded-xl absolute top-0 right-0 m-4 hover:bg-slate-700 bg-slate-600">
        {languages[lang].button}
      </button>

      <h1 className="text-5xl text-center font-bold mb-8 my-16 pb-5">
        {lang === "Japanese" ? (
          <span>
            ラク ギル <br /> ポートフォリオ
          </span>
          ) : (
            "Lak Gill Portfolio"
          )}
      </h1>

     
      {/* <h1 className="text-4xl p-10 flex flex-col items-left underline j">PROJECTS</h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-5 text-4xl">
        <JLeague text={languages[lang].JLeague} />
        <GamerTalk text={languages[lang].GamerTalk} />
      </div>

      <h1 className="text-4xl pt-10 flex flex-col items-center justify-center underline"  >{languages[lang].freelance}</h1>

      <div className="my-5 flex flex-col items-center justify-center rounded-xl"> 
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

