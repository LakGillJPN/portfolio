import React from 'react'
import Image from 'next/image'
import { offside } from "../../layout";
import NextJSLogo from '../../logos/frontend/NextJSLogo';
import TypeScriptLogo from '../../logos/languages/TypeScriptLogo';
import PythonLogo from '../../logos/languages/PythonLogo';
import CypressLogo from '../../logos/testing/CypressLogo';
import FirebaseLogo from '../../logos/misc/FirebaseLogo';
import PostgresLogo from '../../logos/datebase/PostgresLogo';
import DjnagoLogo from '../../logos/backend/DjnagoLogo';
import GitHubLogo from '../../logos/misc/GitHubLogo';
import ProjectFramework from '../ProjectFramework';

interface GamerTalkProps {
  text: string;
}


const GamerTalk: React.FC<GamerTalkProps> = ({ text }) =>  {
  const logos = [  <NextJSLogo/>,
  <TypeScriptLogo/>,
  <PythonLogo/>,
  <DjnagoLogo/>,
  <CypressLogo/>,
  <FirebaseLogo/>,
  <PostgresLogo/>]
  return (
    <ProjectFramework 
    title="GamerTalk"
    font={offside.className}
    text={text}
    url="https://gamertalk.onrender.com/"
    imageSrc="/images/Gamertalk-fullscreen.png"
    logos={logos}
    githubUrl="https://github.com/GamerTalk"
    borderColor="purple"  
    />
      


  //   <div className="text-5xl border-solid border-2 border-purple-600 text-center rounded-xl p-4 flex flex-col items-center">
  //   <p className=" h-20"><span className={offside.className}>GamerTalk</span> </p>
  //     <p className="text-sm p-5 flex-grow flex items-center justify-center">
  //       {text}
  //     </p>
  //     <p className="text-lg p-5 flex-grow flex items-center justify-center ">
  //       <a className="text-blue-500 underline" href="https://gamertalk.onrender.com/">
  //       https://gamertalk.onrender.com/</a></p>

  //     <div className="flex items-center justify-center">
  //       <Image
  //         src="/images/Gamertalk-fullscreen.png"
  //         width={600}
  //         height={600}
  //         alt="GamerTalk screenshot"
  //       />
  //     </div>

  //     <div className="flex flex-wrap pt-5">
  //       <NextJSLogo/>
  //       <TypeScriptLogo/>
  //       <PythonLogo/>
  //       <DjnagoLogo/>
  //       <CypressLogo/>
  //       <FirebaseLogo/>
  //       <PostgresLogo/>
  //     </div>

  //     <a href="https://github.com/GamerTalk">
  //     <div className="border-2 border-solid flex justify-center items-center rounded-xl mx-auto  m-10 p-3 hover:bg-slate-700 bg-slate-600">
  //       <GitHubLogo/>
  //     </div>
  //   </a>
  // </div>
  )
}


export default GamerTalk