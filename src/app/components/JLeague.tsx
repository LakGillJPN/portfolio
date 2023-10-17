import React from 'react'
import Image from 'next/image'
import { jleague } from ".././layout";
import ReactLogo from '../logos/frontend/ReactLogo';
import TypeScriptLogo from '../logos/frontend/TypeScriptLogo';

interface JLeagueProps {
  text: string;
}

const JLeague: React.FC<JLeagueProps> = ({ text }) =>  {
  return (
    <div className="text-5xl border-solid border-2 border-red-600 text-center rounded-xl p-4 flex flex-col items-center">
    <p className="h-20"><span className={jleague.className}>J-League Predictor</span></p>
    <p className="text-sm p-5 flex-grow flex items-center justify-center">
      {text}
    </p>
    <p className="text-lg p-5 flex-grow flex items-center justify-center">
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
      <ReactLogo/>
      <TypeScriptLogo/>
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" 
        width={50}
        height={50}
        alt="firebase logo"
        style={{ margin: '0 10px', marginBottom: '10px'  }} 
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
      <div className=" border-2 border-solid flex justify-center items-center rounded-xl mx-auto w-17 m-10 p-3 hover:bg-slate-700 bg-slate-600">
        <Image
          src="/images/github-logo-white.png"
          width={100}
          height={100}
          alt="GitHub logo"
        />
      </div>
    </a>
  </div>
  )
}

export default JLeague