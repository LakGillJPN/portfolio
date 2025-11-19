import React from "react";

// Professional Experience Logos

import TypeScriptLogo from "../logos/languages/TypeScriptLogo";
import CSS3 from "../logos/frontend/CSS3";
import Tailwind from "../logos/frontend/Tailwind";
import NextJSLogo from "../logos/frontend/NextJSLogo";
import MySQLLogo from "../logos/datebase/MySQL";
import CSharpLogo from "../logos/languages/CSharpLogo";
import VisualBasicLogo from "../logos/languages/VisualBasicLogo";
import DockerLogo from "../logos/misc/DockerLogo";
import AWSLogo from "../logos/misc/AWSLogo";

// Personal Projects Logos
import VueLogo from "../logos/frontend/Vue";
import ReactNativeLogo from "../logos/frontend/ReactNativeLogo";
import Flutter from "../logos/frontend/Flutter";
import Dart from "../logos/languages/Dart";
import ExpressLogo from "../logos/backend/ExpressLogo";
import NodeJSLogo from "../logos/backend/NodeJSLogo";
import PostgresLogo from "../logos/datebase/PostgresLogo";
import CypressLogo from "../logos/testing/CypressLogo";
import JestLogo from "../logos/testing/JestLogo";
import MochaLogo from "../logos/testing/Mocha";
import JasmineLogo from "../logos/testing/JasmineLogo";
import AxiosLogo from "../logos/misc/AxiosLogo";
import JavaLogo from "../logos/languages/JavaLogo";
import SpringLogo from "../logos/backend/SpringLogo";

// Unused (may edit in later)

//import JavaScriptLogo from "../logos/languages/JavaScriptLogo";
//import FirebaseLogo from "../logos/misc/FirebaseLogo";
//import PythonLogo from "../logos/languages/PythonLogo";
//import DjnagoLogo from "../logos/backend/DjnagoLogo";
//import ReactLogo from "../logos/frontend/ReactLogo";

const professionalExperienceLogos = [
  { name: "TypeScript", logo: <TypeScriptLogo /> },
  { name: "Next.js", logo: <NextJSLogo /> },
  //{ name: "CSS3", logo: <CSS3 /> },
  { name: "Tailwind", logo: <Tailwind /> },
  { name: "MySQL", logo: <MySQLLogo /> },
  { name: "C#", logo: <CSharpLogo /> },
  { name: "Visual Basic", logo: <VisualBasicLogo /> },
  { name: "Docker", logo: <DockerLogo /> },
  { name: "aws", logo: <AWSLogo /> },

];

const personalProjectsLogos = [
  { name: "Java", logo: <JavaLogo /> },
  { name: "Spring", logo: <SpringLogo /> },
  { name: "Flutter", logo: <Flutter /> },
  { name: "Dart", logo: <Dart /> },
  { name: "Vue", logo: <VueLogo /> },
  { name: "React Native", logo: <ReactNativeLogo /> },
  //{ name: "Express", logo: <ExpressLogo /> },
  //{ name: "Node.js", logo: <NodeJSLogo /> },
  { name: "PostgreSQL", logo: <PostgresLogo /> },
  { name: "Cypress", logo: <CypressLogo /> },
  { name: "Jest", logo: <JestLogo /> },
  { name: "Mocha", logo: <MochaLogo /> },
  { name: "Jasmine", logo: <JasmineLogo /> },
  { name: "Axios", logo: <AxiosLogo /> },
 
];

const TechStack: React.FC = () => {
  const renderLogos = (logos: typeof professionalExperienceLogos) => (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4">
      {logos.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-center border-2 border-neutral-700 p-3 rounded-2xl"
        >
          {item.logo}
          <span className="mt-2 text-sm font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-10 py-6">
      <h2 className="text-2xl text-center font-semibold">Professional Experience</h2>
      {renderLogos(professionalExperienceLogos)}

      <h2 className="text-2xl text-center font-semibold mt-8">Personal Projects & Learning</h2>
      {renderLogos(personalProjectsLogos)}
    </div>
  );
};

export default TechStack;
