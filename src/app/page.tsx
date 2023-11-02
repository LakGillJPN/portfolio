"use client";

import { useState } from "react";
import {poppins } from "./layout";
import Image from "next/image";
import Footer from "./components/Footer";
import JLeague from "./components/JLeague";
import GamerTalk from "./components/GamerTalk";
import languages from "./components/langData";

export default function Home() {
  const [lang, setLang] = useState<string>("English");

  const changeLang = () => {
    return lang === "English" ? setLang("Japanese") : setLang("English");
  };

  return (
    <div className="text-white">
      <button
        onClick={changeLang}
        className="text-2xl font-bold  p-4 border-2  rounded-xl absolute top-0 right-0 m-4 hover:bg-slate-700 bg-slate-600"
      >
        {languages[lang].button}
      </button>

      <h1 className="text-5xl text-center font-bold mb-8 my-20 pt-10">
        {lang === "Japanese" ? (
          <span>
            ラク ギル <br /> ポートフォリオ
          </span>
          ) : (
            "Lak Gill Portfolio"
          )}
      </h1>
      
      <div className="flex flex-row justify-center items-center pb-10">
      

        <a href="https://www.linkedin.com/in/lak-gill/">
          <Image 
           src="/images/ln-logo.png"
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



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <JLeague text={languages[lang].JLeague} />
        <GamerTalk text={languages[lang].GamerTalk} />
      </div>

      <div className="border-solid border-2 border-white-600 my-10 flex flex-col items-center justify-center rounded-xl">
        <h1 className="text-4xl p-10">{lang === 'English' ? 'Contributions' : "フリーランスの仕事"}</h1>
        
        <Image 
           src="/images/mamoru.png"
           width={70}
           height={70}
           alt="Mamoru Icon"
        />
        <p className={poppins.className}>mamoru</p>
        <a className="text-blue-500 underline" href="http://app.mamoru.earth">
        http://app.mamoru.earth</a>
        <p className="p-10"> {lang === 'English' ? "mamoru is a sustainable living app that helps you discover and save on sustainable products, shops, cafes, restaurants, and more." 
        : "mamoru（まもる）は、サステナブルな商品、ショップ、カフェ、レストランなどを発見し、お得に利用することができる サステナブルライフアプリです。"}</p>
      </div>

      <Footer text={lang === 'English' ? "Powered by Tailwind CSS & Next.JS" : "Tailwind CSSとNext JSによって動作します"} />
    </div> 
  );
}

