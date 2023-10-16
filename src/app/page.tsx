"use client";

import { useState } from "react";
import { offside, jleague } from "./layout";
import Image from "next/image";
import Footer from "./components/Footer";
import JLeague from "./components/JLeague";
import GamerTalk from "./components/GamerTalk";


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
        {lang === "English" ? "日本語" : "English"}
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
      <div className="flex flex-col items-center pb-10">
        <a href="https://github.com/LakGillJPN/j-league-predictor">
          <Image 
           src="/images/LI-Logo.png"
           width={100}
           height={200}
           alt="link to LinkedIn"
          />
        </a>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <JLeague text={lang === "English" ? "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." 
            : "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。"} />

        <GamerTalk text={lang === 'English' ? "An application that allows gamers to connect with each other with the goal of building connections."
              : "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。"} />
      </div>
      <Footer text={lang === 'English' ? "Powered by Tailwind CSS & Next.JS" : "Tailwind CSSとNext JSによって動作します"} />
    </div> 
  );
}

