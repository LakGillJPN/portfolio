import React from 'react'
import ReactLogo from '../logos/frontend/ReactLogo';
import NextJSLogo from '../logos/frontend/NextJSLogo';

import DjnagoLogo from '../logos/backend/DjnagoLogo';
import ExpressLogo from '../logos/backend/ExpressLogo';


const TechStack = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="border-2 p-3 rounded-3xl">
      
      
      <h1>Frontend</h1>
        <ReactLogo/>
        <NextJSLogo/>
      </div>
    <div>Backend</div>  
<DjnagoLogo/>
<ExpressLogo/>
    </div>
  )
}

export default TechStack;