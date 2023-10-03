"use client";

import { useState } from "react";
import { offside, jleague } from "./layout";
import Image from "next/image";



export default function Home() {
  const [lang, setLang] = useState<string>("English");
  const jpHeading =  `ラク ギル ポートフォリオ`

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
          ? "ラク ギル ポートフォリオ"
          : "Lak Gill Portfolio"} 
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
            {lang === "English" ? "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." 
            : "Jリーグの試合結果を予想するゲーム。予想し、その的中率に応じてポイントを獲得するゲームです。"}
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
          <div className="flex flex-wrap pt-5">
            <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
              width={50}
              height={50}
              alt="React logo"
              style={{ margin: '0 10px', marginBottom: '10px'}} 
              />
            <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              width={50}
              height={50}
              alt="TypeScript logo"
              style={{ margin: '0 10px',marginBottom: '10px' }} 
              />
              <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
              width={50}
              height={50}
              alt="nodejs logo"
              style={{ margin: '0 10px',  marginBottom: '10px' }} 
              />
              <Image 
              src="/images/express-white-icon.png" 
              width={50}
              height={40}
              alt="nodejs logo"
              style={{ margin: '0 10px',  marginBottom: '10px' }} 
              />
              <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" 
              width={50}
              height={50}
              alt="firebase logo"
              style={{ margin: '0 10px', marginBottom: '10px'  }} 
              />
              <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
              width={50}
              height={50}
              alt="jest logo"
              style={{ margin: '0 10px',  marginBottom: '10px' }} 
              />
              <Image 
              src="/images/cypress-icon.png" 
              width={50}
              height={50}
              alt="cypress logo"
              style={{ margin: '0 10px',  marginBottom: '10px' }} 
              />
              
              <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
              width={50}
              height={50}
              alt="Postgres logo"
              style={{ margin: '0 10px', marginBottom: '10px'  }} 
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
              {lang === 'English' ? "An application that allows gamers to connect with each other withthe goal of building connections."
              : "ゲーマー同士がつながりを持つことを目的としたアプリケーション。"}
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

            <div className="flex pt-5  ">
            <Image 
              src="/images/nextjs_white_icon.png" 
              width={50}
              height={50}
              alt="Next JS logo"
              />
            <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              width={50}
              height={50}
              alt="TypeScript logo"
              />
              <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
              width={50}
              height={50}
              alt="Python logo" 
              />
               <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
              width={50}
              height={50}
              alt="jest logo"
              />
               <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" 
              width={50}
              height={50}
              alt="firebase logo"
              />
              <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
              width={50}
              height={50}
              alt="Postgres logo"
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
