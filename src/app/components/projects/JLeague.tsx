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
import ProjectFramework from '../ProjectFramework'

interface JLeagueProps {
  text: string;
}

const JLeague: React.FC<JLeagueProps> = ({ text }) =>  {
  const logos = [ 
    <ReactLogo/>,
    <TypeScriptLogo/>,
    <NodeJSLogo/>,
    <ExpressLogo/>,
    <JestLogo/>,
    <CypressLogo/>,
    <FirebaseLogo/>,
    <PostgresLogo/>
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
      borderColor="red"
    />
  )
}

export default JLeague