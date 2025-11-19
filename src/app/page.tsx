"use client";

import { useState } from "react";
import { poppins } from "./layout";
import Image from "next/image";
import Footer from "./components/Footer";
import JLeague from "./components/projects/JLeague";
import GamerTalk from "./components/projects/GamerTalk";
import languages from "./components/langData";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import TechStack from "./components/TechStack";
import MusicVue from "./components/projects/MusicVue";
import CertificateCard from "./components/CertificateCard";

export default function Home() {
  const [lang, setLang] = useState<string>("English");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLang = () => {
    return lang === "English" ? setLang("Japanese") : setLang("English");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="text-white" id="top">
      <Header changeFunc={changeLang} lang={lang} toggleMenu={toggleMenu} />
      {isMenuOpen && <HamburgerMenu lang={lang} closeMenu={closeMenu} />}
      <div className="flex flex-1 min-h-screen w-full justify-center items-center">
        <h1 className="text-5xl text-center font-bold mb-60 pb-5">
          {lang === "Japanese" ? (
            <span>
              ラク ギル <br /> ポートフォリオ
            </span>
          ) : (
            "Lak Gill Portfolio"
          )}

          <div className="p-5 flex justify-center gap-2">
            <a href="https://www.linkedin.com/in/lak-gill/" target="_blank">
              <Image
                src="/images/li-logo-white.png"
                width={80}
                height={80}
                alt="link to LinkedIn"
                className="border-2 p-3 rounded-3xl hover:bg-zinc-600"
              />
            </a>
            <a
              className="pl-4"
              href="https://www.twitter.com/LakGill88"
              target="_blank"
            >
              <Image
                src="/images/x-logo-white.png"
                width={80}
                height={80}
                alt="link to X"
                className="border-2 p-3 rounded-3xl hover:bg-zinc-600"
              />
            </a>
            <a
              className="pl-4"
              href="https://github.com/LakGillJPN"
              target="_blank"
            >
              <Image
                src="/images/github-mark-white.png"
                width={80}
                height={80}
                alt="link to github.png"
                className="border-2 p-3 rounded-3xl hover:bg-zinc-600"
              />
            </a>
          </div>
        </h1>
      </div>

      <div className="min-h-screen w-full pb-60" id="tech-stack">
        <h1 className="text-5xl font-bold p-10 flex flex-col items-center justify-center">
          {languages[lang].techStack}
        </h1>
        <TechStack 
        professionalExperience={languages[lang].professionalExperience}
        personalProjects={languages[lang].personalProjects}
        />
      </div>

      <div className="min-h-screen mb-20 w-full" id="projects">
        <h1 className="text-5xl md:text-5xl font-bold p-10 text-center">
          {languages[lang].projects}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto">
          <JLeague text={languages[lang].JLeague} />
          <GamerTalk text={languages[lang].GamerTalk} />
          <MusicVue text={languages[lang].MusicVue} />
        </div>
      </div>

      <div className="min-h-screen w-full" id="certificates">
        <h1 className="text-5xl font-bold p-10 flex flex-col items-center justify-center">
          {languages[lang].certificates}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto">
            {/* JLPT Certificate */}
            <CertificateCard
            imageSrc="/images/JLPT-logo.png"
            altText="JLPT Certificate"
            title={languages[lang].JLPT}
            dateIssued={languages[lang].JLPTDate}
            imageClassName="mb-5 mx-auto border-4 border-black bg-white rounded-3xl p-3"
          />
          {/* AWS Certificate */}
          <CertificateCard
            imageSrc="/images/cloud-practitioner.png"
            altText="AWS Cloud Certificate"
            title={languages[lang].AWS}
            dateIssued={languages[lang].AWSDate}
            imageClassName="mb-5 mx-auto"
          />
        </div>
      </div>

      <div
        className="py-40 flex flex-col items-center justify-center min-h-screen w-full rounded-xl"
        id="aboutme"
      >
        <h1 className="text-5xl font-bold mb-5 flex flex-col items-center justify-center">
          {languages[lang].aboutMeTitle}
        </h1>
        <div className="p-5" style={{ gridTemplateColumns: "30% 70%" }}>
          <Image
            src="/images/Kaito_and_Me.JPG"
            width={250}
            height={350}
            alt="Profile Pic"
            className="mb-5 mx-auto "
          />
          <div className="px-5">
            <p className="mb-5">{languages[lang].aboutMe.intro}</p>
            <p className="mb-5">{languages[lang].aboutMe.expertise}</p>
            <p className="mb-5">{languages[lang].aboutMe.experience}</p>
            <p className="mb-5">{languages[lang].aboutMe.contact}</p>
          </div>
        </div>
      </div>
      <Footer text={languages[lang].footer} />
    </div>
  );
}
