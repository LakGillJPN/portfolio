import React from 'react';
import Image from 'next/image';
import GitHubLogo from '../logos/misc/GitHubLogo';

interface CommonProps {
  title: string;
  font: string;
  text: string;
  url: string;
  imageSrc: string;
  logos: React.ReactNode[];
  githubUrl: string;
  borderColor: string;
}

const ProjectFramework: React.FC<CommonProps> = ({
  title,
  font,
  text,
  url,
  imageSrc,
  logos,
  githubUrl,
  borderColor,
}) => {
  return (
    <div
    className={`text-5xl border-solid border-2 ${borderColor} text-center rounded-xl p-4 flex flex-col items-center`}
    style={{  }} // Set the overall height to 100% of the viewport or a specific height
  >
    {/* Title Section */}
    <p className="h-[10%]  flex items-center justify-center">
      <span className={font}>{title}</span>
    </p>
  
    {/* Text Section */}
    <p className="text-sm p-5 flex-grow flex items-center justify-center" style={{ flex: "0 0 10%" }}>
      {text}
    </p>
  
    {/* URL Section */}
    <p className="text-lg p-5 flex-grow flex items-center justify-center " style={{ flex: "0 0 5%" }}>
      <a className="text-blue-500 underline" href={url} target="_blank">
        {url}
      </a>
    </p>
  
    {/* Image Section */}
    <div
      className="flex items-center justify-center ounded-xl"
      style={{ flex: "0 0 40%" }}
    >
      <Image src={imageSrc} width={640} height={360} alt={`${title} screenshot`} />
    </div>
  
    {/* Logos Section */}
    <div
      className=" flex flex-wrap gap-3 grid grid-cols-4 sm:grid-cols-4 4 md:grid-cols-4 4 lg:grid-cols-4 justify-center items-center pt-5 "
      style={{ flex: "0 0 20%" }}
    >
      {logos}
    </div>
  
    {/* GitHub Link Section */}
    <a href={githubUrl} target="_blank" style={{ flex: "0 0 20%" }}>
      <div className=" flex justify-center items-center rounded-xl mx-auto m-10 p-3 hover:bg-slate-700 bg-slate-600 border-2">
        <GitHubLogo />
      </div>
    </a>
  </div>
  
  );
};

export default ProjectFramework