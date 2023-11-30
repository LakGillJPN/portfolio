"use client";

import React, { useState } from 'react'
import Header from '../components/Header'

export default function AboutMe() {
  const [lang, setLang] = useState<string>("English");

  const changeLang = () => {
    return lang === "English" ? setLang("Japanese") : setLang("English");
  };

  return (
    <div>
      <Header text="" changeFunc={changeLang} lang={lang}/>
      <h1>About Me</h1>
      
    </div>
  )
}
