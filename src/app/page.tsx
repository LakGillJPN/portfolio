"use client"

import { useState } from 'react'
import { offside, jleague } from './layout'
import Image from 'next/image'

export default function Home() {
  const [lang, setLang] = useState<string>('English')

  const changeLang = () => {
   return lang === 'English' ? setLang('Japanese') : setLang('English')
  }


  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen">
      <button onClick={changeLang} className='text-2xl font-bold  p-5 border-2  rounded-xl absolute top-0 right-0 m-4 bg-slate-600'>
        {lang === 'English' ? '日本語' : 'English'}</button>

      <h1 className="text-6xl text-center font-bold mb-8"> {lang === 'English' ? "ラク ギル  \n ポートフォリオ" : 'Lak Gill Portfolio'} </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <div className="text-5xl border-solid border-2 border-red-600 text-center p-4">
          <span className={jleague.className}>J-League Predictor</span>
          <p className="text-sm"> A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy. </p>
          <a href="https://github.com/LakGillJPN/j-league-predictor">
            <div className="border-solid border-2 border-gray-600 flex flex-col items-center"> 
              <Image 
                src='/images/github-logo-white.png'
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
          </a>

          
        </div>

        <div className="text-5xl border-solid border-2 border-purple-600 text-center p-4">
          <span className={offside.className}>GamerTalk</span>
          <a href="https://github.com/GamerTalk">
          <p className="text-sm">An application that allows gamers to connect with each other with the goal of building connections and offering language exchange opportunities.</p>
            <div className="border-solid border-2 border-gray-600 flex flex-col items-center"> 
              <Image 
                src='/images/github-logo-white.png'
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
         </a>
       </div>

      </div>

    </div>
  )
}


