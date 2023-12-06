import React from 'react'
import { quicksand } from '@/app/layout';
import ReactLogo from '../../logos/frontend/ReactLogo';
import TypeScriptLogo from '../../logos/languages/TypeScriptLogo';
import NodeJSLogo from '../../logos/backend/NodeJSLogo';
import ExpressLogo from '../../logos/backend/ExpressLogo';
import PostgresLogo from '../../logos/datebase/PostgresLogo';
import ProjectFramework from '../Framework'

interface SakuraSignalProps {
  text: string;
}


export default function SakuraSignal() {
  const logos = [ 
    <ReactLogo key="react"/>,
    <TypeScriptLogo key="typescript"/>,
    <NodeJSLogo key="nodejs"/>,
    <ExpressLogo key="express"/>,
    <PostgresLogo key="postgres"/>
  ]

  return (
    <ProjectFramework 
    title="SakuraSignal"
    font={quicksand.className}
    text={text}
    url="https://gamertalk.onrender.com/"
    imageSrc="/images/Gamertalk-fullscreen.png"
    logos={logos}
    githubUrl="https://github.com/GamerTalk"
    borderColor="border-pink-600" 
  />
  )
}
