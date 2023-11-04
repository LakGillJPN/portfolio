import React from 'react'
import Image from 'next/image'
import { jleague } from ".././layout";
import ReactLogo from '../logos/frontend/ReactLogo';
import TypeScriptLogo from '../logos/languages/TypeScriptLogo';
import NodeJSLogo from '../logos/backend/NodeJSLogo';
import ExpressLogo from '../logos/backend/ExpressLogo';
import JestLogo from '../logos/testing/JestLogo';
import CypressLogo from '../logos/testing/CypressLogo';
import FirebaseLogo from '../logos/misc/FirebaseLogo';
import PostgresLogo from '../logos/datebase/PostgresLogo';
import GitHubLogo from '../logos/misc/GitHubLogo';
import ProjectFramework from './projectFramework';

interface JLeagueProps {
  text: string;
}

const JLeague: React.FC = (text) =>  {
  const logos = [ <ReactLogo/>,
  <TypeScriptLogo/>,
  <NodeJSLogo/>,
  <ExpressLogo/>,
  <JestLogo/>,
  <CypressLogo/>,
  <FirebaseLogo/>,
  <PostgresLogo/>]

  return (
      <ProjectFramework
        title="J-League Predictor"
        font={jleague.className}
        text=''
        url="https://j-league-predictor.vercel.app/"
        imageSrc="/images/J-League-Fullscreen.png"
        logos={logos}
        githubUrl="https://github.com/LakGillJPN/j-league-predictor"
        borderColor="red"
      />
  //   <div className="text-5xl border-solid border-2 border-red-600 text-center rounded-xl p-4 flex flex-col items-center">
  //   <p className="h-20"><span className={jleague.className}>J-League Predictor</span></p>
  //   <p className="text-sm p-5 flex-grow flex items-center justify-center">
  //     {text}
  //   </p>
  //   <p className="text-lg p-5 flex-grow flex items-center justify-center">
  //   <a className="text-blue-500 underline" href="https://j-league-predictor.vercel.app/"> 
  //      https://j-league-predictor.vercel.app/</a></p>
  //   <div className="flex items-center justify-center">
  //     <Image
  //       src="/images/J-League-Fullscreen.png"
  //       width={600}
  //       height={600}
  //       alt="J-League screenshot"
  //     />
  //   </div>
  //   <div className="flex flex-wrap pt-5">
  //     <ReactLogo/>
  //     <TypeScriptLogo/>
  //     <NodeJSLogo/>
  //     <ExpressLogo/>
  //     <JestLogo/>
  //     <CypressLogo/>
  //     <FirebaseLogo/>
  //     <PostgresLogo/>
  //   </div>

  //   <a href="https://github.com/LakGillJPN/j-league-predictor">
  //     <div className=" border-2 border-solid flex justify-center items-center rounded-xl mx-auto w-17 m-10 p-3 hover:bg-slate-700 bg-slate-600">
  //       <GitHubLogo/>
  //     </div>
  //   </a>
  // </div>
  )
}

export default JLeague