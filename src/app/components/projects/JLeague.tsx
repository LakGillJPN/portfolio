import React from 'react'
import { jleague } from "../../layout";
import ReactLogo from '../../logos/frontend/ReactLogo';
import TypeScriptLogo from '../../logos/languages/TypeScriptLogo';
import NodeJSLogo from '../../logos/backend/NodeJSLogo';
import ExpressLogo from '../../logos/backend/ExpressLogo';
import JestLogo from '../../logos/testing/JestLogo';
import CypressLogo from '../../logos/testing/CypressLogo';
import FirebaseLogo from '../../logos/misc/FirebaseLogo';
import PostgresLogo from '../../logos/datebase/PostgresLogo';
import ProjectFramework from '../Framework'

interface JLeagueProps {
  text: string;
}

const JLeague: React.FC<JLeagueProps> = ({ text }) =>  {
  const logos = [ 
    <ReactLogo key="react"/>,
    <TypeScriptLogo key="typescript"/>,
    <NodeJSLogo key="nodejs"/>,
    <ExpressLogo key="express"/>,
    <JestLogo key="jest"/>,
    <CypressLogo key="cypress"/>,
    <FirebaseLogo key="firebase"/>,
    <PostgresLogo key="postgres"/>
  ]

  return (
    <ProjectFramework
      title="J-League Predictor"
      font={jleague.className}
      text={text}
      url="https://j-league-predictor.vercel.app/"
      imageSrc="/images/J-League-Fullscreen.png"
      logos={logos}
      githubUrl="https://github.com/LakGillJPN/j-league-predictor"
      borderColor="border-red-600" 
    />
  )
}

export default JLeague