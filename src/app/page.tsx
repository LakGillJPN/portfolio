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
    <div className="text-white">
      <button onClick={changeLang} className='text-2xl font-bold  p-4 border-2  rounded-xl absolute top-0 right-0 m-4 hover:bg-slate-700 bg-slate-600'>
        {lang === 'English' ? '日本語' : 'English'}</button>

      <h1 className="text-6xl text-center font-bold mb-8 my-20"> {lang === 'Japanese' ? "ラク ギル  \n ポートフォリオ" : 'Lak Gill Portfolio'} </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <div className="text-5xl border-solid border-2 border-red-600 text-center rounded-xl p-4">
          <span className={jleague.className}>J-League Predictor</span>
          <p className="text-sm p-5"> A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy. </p>
          <div className=" flex flex-col items-center">  
            <Image 
              src='/images/j-league-screenshot.png'
              width={650}
              height={650} 
              alt="GamerTalk screenshot"
              />
          </div>
          
          <a href="https://github.com/LakGillJPN/j-league-predictor">
            <div className="border-solid flex flex-col-3 justify-center items-center rounded-xl mx-auto w-17 m-10"> 
              <Image 
                src='/images/github-logo-white.png'
                width={100}
                height={100}
                alt="GitHub logo"
              />
            </div>
          </a>

          
        </div>

        <div className="text-5xl border-solid border-2 border-purple-600 text-center p-4 rounded-xl">
          <span className={offside.className}>GamerTalk</span>
          <a href="https://github.com/GamerTalk">
          <p className="text-sm p-5 ">An application that allows gamers to connect with each other with the goal of building connections.</p>
          <div className=" flex flex-col items-center">  
            <Image 
              src='/images/gamertalk-screenshot.png'
              width={600}
              height={600} 
              alt="GamerTalk screenshot"
              />
          </div>
            <div className="border-solid flex flex-col-3 justify-center items-center rounded-xl mx-auto w-17 m-10"> 
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


