import React from 'react'
import { oswald } from "../../layout";

import TypeScriptLogo from '../../logos/languages/TypeScriptLogo';
import Tailwind from '@/app/logos/frontend/Tailwind';
import PythonLogo from '../../logos/languages/PythonLogo';
import CypressLogo from '../../logos/testing/CypressLogo';
import ProjectFramework from '../Framework';
import VueLogo from '@/app/logos/frontend/Vue';
import ViteLogo from '@/app/logos/frontend/Viite';
import EmptyLogo from '@/app/logos/misc/empty';


interface MusicVueProps {
  text: string;
}

const MusicVue: React.FC<MusicVueProps> = ({ text }) =>  {
  const logos = [  
    <EmptyLogo key="empty1"/>,
    <VueLogo key="vue"/>,
    <TypeScriptLogo key="typescript"/>,
    <EmptyLogo key="empty2"/>,
    <EmptyLogo key="empty3"/>,
    <Tailwind key="tailwind"/>,
    <CypressLogo key="cypress"/>,
    <EmptyLogo key="empty4"/>,

  ]

  const url = "https://main.d3czapi2n2hdbn.amplifyapp.com/";

  // Split the URL where you want to add the break
  const parts = url.split("d3czapi2n2hdbn.");

  return (
    <ProjectFramework 
      title="MusicVue"
      font={oswald.className}
      text={text}
      url={url}
      imageSrc="/images/MusicVue-fullscreen.png"
      logos={logos}
      githubUrl="https://github.com/LakGillJPN/MusicVue"
      borderColor="border-green-400" 
    />
  )
}

export default MusicVue;