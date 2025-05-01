import React from "react";

// Logos
import JavaScriptLogo from "../logos/languages/JavaScriptLogo";
import TypeScriptLogo from "../logos/languages/TypeScriptLogo";
import PythonLogo from "../logos/languages/PythonLogo";
import DartLogo from "../logos/languages/Dart";
import CSS3 from "../logos/frontend/CSS3";
import Tailwind from "../logos/frontend/Tailwind";
import ReactLogo from "../logos/frontend/ReactLogo";
import NextJSLogo from "../logos/frontend/NextJSLogo";
import ReactNativeLogo from "../logos/frontend/ReactNativeLogo";
import Flutter from "../logos/frontend/Flutter";
import DjnagoLogo from "../logos/backend/DjnagoLogo";
import ExpressLogo from "../logos/backend/ExpressLogo";
import NodeJSLogo from "../logos/backend/NodeJSLogo";
import FirebaseLogo from "../logos/misc/FirebaseLogo";
import PostgresLogo from "../logos/datebase/PostgresLogo";
import CypressLogo from "../logos/testing/CypressLogo";
import JestLogo from "../logos/testing/JestLogo";
import MochaLogo from "../logos/testing/Mocha";
import JasmineLogo from "../logos/testing/JasmineLogo";
import AxiosLogo from "../logos/misc/AxiosLogo";
import VueLogo from "../logos/frontend/Vue";

const allLogos = [
  { name: "JavaScript", logo: <JavaScriptLogo /> },
  { name: "TypeScript", logo: <TypeScriptLogo /> },
  { name: "Python", logo: <PythonLogo /> },
  { name: "Dart", logo: <DartLogo /> },
  { name: "CSS3", logo: <CSS3 /> },
  { name: "Tailwind", logo: <Tailwind /> },
  { name: "React", logo: <ReactLogo /> },
  { name: "Next.js", logo: <NextJSLogo /> },
  { name: "Vue", logo: <VueLogo /> },
  { name: "Flutter", logo: <Flutter /> },
  { name: "Django", logo: <DjnagoLogo /> },
  { name: "Express", logo: <ExpressLogo /> },
  { name: "Node.js", logo: <NodeJSLogo /> },
  { name: "PostgreSQL", logo: <PostgresLogo /> },
  { name: "Cypress", logo: <CypressLogo /> },
  { name: "Jest", logo: <JestLogo /> },
  { name: "Mocha", logo: <MochaLogo /> },
  { name: "Jasmine", logo: <JasmineLogo /> },
  // { name: "Firebase", logo: <FirebaseLogo /> },
  // { name: "Axios", logo: <AxiosLogo /> },
];

const TechStack: React.FC = () => {
  return (
    <div className="px-10 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {allLogos.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center border-2 border-neutral-700 p-3 rounded-2xl"
          >
            {item.logo}
            <span className="mt-2 text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
