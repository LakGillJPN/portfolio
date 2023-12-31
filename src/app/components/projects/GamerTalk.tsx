import React from 'react'
import { offside } from "../../layout";
import NextJSLogo from '../../logos/frontend/NextJSLogo';
import TypeScriptLogo from '../../logos/languages/TypeScriptLogo';
import Tailwind from '@/app/logos/frontend/Tailwind';
import PythonLogo from '../../logos/languages/PythonLogo';
import CypressLogo from '../../logos/testing/CypressLogo';
import FirebaseLogo from '../../logos/misc/FirebaseLogo';
import PostgresLogo from '../../logos/datebase/PostgresLogo';
import DjnagoLogo from '../../logos/backend/DjnagoLogo';
import ProjectFramework from '../Framework';


interface GamerTalkProps {
  text: string;
}

const GamerTalk: React.FC<GamerTalkProps> = ({ text }) =>  {
  const logos = [  
    <NextJSLogo key="nextjs"/>,
    <TypeScriptLogo key="typescript"/>,
    <Tailwind key="tailwind"/>,
    <PythonLogo key="python"/>,
    <DjnagoLogo key="django"/>,
    <CypressLogo key="cypress"/>,
    <FirebaseLogo key="firebase"/>,
    <PostgresLogo key="postgres"/>
  ]

  return (
    <ProjectFramework 
      title="GamerTalk"
      font={offside.className}
      text={text}
      url="https://frontend-gamertalk.vercel.app/"
      imageSrc="/images/Gamertalk-fullscreen.png"
      logos={logos}
      githubUrl="https://github.com/GamerTalk"
      borderColor="border-purple-600" 
    />
  )
}

export default GamerTalk