import React from "react";

//Languages
import JavaScriptLogo from "../logos/languages/JavaScriptLogo";
import TypeScriptLogo from "../logos/languages/TypeScriptLogo";
import PythonLogo from "../logos/languages/PythonLogo";
import DartLogo from "../logos/languages/Dart";

//Styling
import CSS3 from "../logos/frontend/CSS3";
import Tailwind from "../logos/frontend/Tailwind";

//Frontend
import ReactLogo from "../logos/frontend/ReactLogo";
import NextJSLogo from "../logos/frontend/NextJSLogo";
import Flutter from "../logos/frontend/Flutter";
//Backend
import DjnagoLogo from "../logos/backend/DjnagoLogo";
import ExpressLogo from "../logos/backend/ExpressLogo";
import NodeJSLogo from "../logos/backend/NodeJSLogo";
import FirebaseLogo from "../logos/misc/FirebaseLogo";
import PostgresLogo from "../logos/datebase/PostgresLogo";

const TechStack = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="border-2 p-3 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-2xl p-4 ">Languages</div>
          <div className="flex flex-row">
            <div className="mx-5 items-center flex flex-col justify-center content-center"> <JavaScriptLogo/>JavaScript</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <TypeScriptLogo />TypeScript</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <PythonLogo />Python</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <DartLogo/>Dart</div>
          </div>
        </div>

        <div className="border-2 p-3 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-2xl p-4 ">Styling</div>
          <div className="flex flex-row">
            <div className="mx-5 items-center flex flex-col justify-center content-center"> <CSS3/>CSS3</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <Tailwind />Tailwind</div>
          </div>
        </div>


        <div className="border-2 p-3 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-2xl p-4 ">Frontend</div>
          <div className="flex flex-row">
            <div className="mx-5 items-center flex flex-col justify-center content-center"> <ReactLogo/>React</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <NextJSLogo/>Next JS</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <Flutter/>Flutter</div>
          </div>
        </div>

        <div className="border-2 p-3 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-2xl p-4 ">Backend</div>
          <div className="flex flex-row">
            <div className="mx-5 items-center flex flex-col justify-center content-center"> <DjnagoLogo/>Django</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <ExpressLogo/>Express</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <NodeJSLogo/>Node.js</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <FirebaseLogo/>Firebase</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <PostgresLogo/>PostGreSQL</div>
          </div>
        </div>

        <div className="border-2 p-3 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-2xl p-4 ">Testing</div>
          <div className="flex flex-row">
            <div className="mx-5 items-center flex flex-col justify-center content-center"> <DjnagoLogo/>Django</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <ExpressLogo/>Express</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <NodeJSLogo/>Node.js</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <FirebaseLogo/>Firebase</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <PostgresLogo/>PostGreSQL</div>
          </div>
        </div>

      </div>
    </>
  );
};

export default TechStack;
