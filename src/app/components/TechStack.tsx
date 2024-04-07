import React from "react";

//Languages
import JavaScriptLogo from "../logos/languages/JavaScriptLogo";
import TypeScriptLogo from "../logos/languages/TypeScriptLogo";
import PythonLogo from "../logos/languages/PythonLogo";

//Styling
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
          <div className="text-2xl">Languages</div>

          <div className="flex flex-row">
            <JavaScriptLogo />
            <TypeScriptLogo />
            <PythonLogo />
          </div>
        </div>

        <div className="border-2 p-3 rounded-3xl">
          <h1>Styling</h1>
          <Tailwind />
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
