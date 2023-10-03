"use client";

import { useState } from "react";
import { offside, jleague } from "./layout";
import Image from "next/image";

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

      <h1 className="text-6xl text-center font-bold mb-8 my-20 pt-10">
        {" "}
        {lang === "Japanese"
          ? "ラク ギル  \n ポートフォリオ"
          : "Lak Gill Portfolio"}{" "}
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
        <div className="text-5xl border-solid border-2 border-red-600 text-center rounded-xl p-4 flex flex-col items-center">
          <p className="border-solid border-2 border-blue-600 h-20"><span className={jleague.className}>J-League Predictor</span></p>
          <p className="border-solid border-2 border-yellow-600 text-sm p-5 flex-grow flex items-center justify-center">
            A game where users predict the results of upcoming J-League fixtures
            and earn points based on their accuracy.
          </p>
          <p className="border-solid border-2 border-yellow-600 text-sm p-5 flex-grow flex items-center justify-center">
          <a className="text-blue-500 underline" href="https://j-league-predictor.vercel.app/"> 
             https://j-league-predictor.vercel.app/</a></p>
          <div className="flex items-center justify-center">
            <Image
              src="/images/J-League-Fullscreen.png"
              width={600}
              height={600}
              alt="GamerTalk screenshot"
            />
          </div>

          <a href="https://github.com/LakGillJPN/j-league-predictor">
            <div className="border-solid flex justify-center items-center rounded-xl mx-auto w-17 m-10 p-3 hover:bg-slate-700 bg-slate-600">
              <Image
                src="/images/github-logo-white.png"
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
          </a>
        </div>

        <div className="text-5xl border-solid border-2 border-purple-600 text-center rounded-xl p-4 flex flex-col items-center">
          <p className="border-solid border-2 border-blue-600 h-20"><span className={offside.className}>GamerTalk</span> </p>
            <p className="border-solid border-2 border-yellow-600 text-sm p-5 flex-grow flex items-center justify-center">
              An application that allows gamers to connect with each other with
              the goal of building connections.
            </p>
            <p className="border-solid border-2 border-yellow-600 text-sm p-5 flex-grow flex items-center justify-center ">
              <a className="text-blue-500 underline" href="https://gamertalk.onrender.com/">
              https://gamertalk.onrender.com/</a></p>

            <div className="flex items-center justify-center">
              <Image
                src="/images/Gamertalk-fullscreen.png"
                width={600}
                height={600}
                alt="GamerTalk screenshot"
              />
            </div>

            <a href="https://github.com/GamerTalk">
            <div className="border-solid flex justify-center items-center rounded-xl mx-auto  m-10 p-3 hover:bg-slate-700 bg-slate-600">
              <Image
                src="/images/github-logo-white.png"
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
