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
//Backend
import DjnagoLogo from "../logos/backend/DjnagoLogo";
import ExpressLogo from "../logos/backend/ExpressLogo";

const TechStack = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 ">
        <div className="border-2 p-3 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-2xl ">Languages</div>

          <div className="flex flex-row">
            <div className="mx-5 items-center flex flex-col justify-center content-center"><JavaScriptLogo/>JavaScript</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <TypeScriptLogo />TypeScript</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <PythonLogo />Python</div>
            <div className="mx-5 items-center flex flex-col justify-center content-center" > <DartLogo/>Dart</div>
          </div>
        </div>

        <div className="border-2 p-3 rounded-3xl">
          <h1>Styling</h1>
          <Tailwind />
          <CSS3/>
        </div>

        <div className="border-2 p-3 rounded-3xl">
          <h1>Frontend</h1>
          <ReactLogo />
          <NextJSLogo />
        </div>

        <div className="border-2 p-3 rounded-3xl">
          <h1>Backend</h1>
          <DjnagoLogo />
          <ExpressLogo />
        </div>
      </div>
    </>
  );
};

export default TechStack;
