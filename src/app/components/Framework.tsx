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
    <div className={`text-5xl border-solid border-2 ${borderColor} text-center rounded-xl p-4 flex flex-col items-center`}>
      <p className="h-20">
        <span className={font}>{title}</span>
      </p>
      <p className="text-sm p-5 flex items-center justify-center">{text}</p>
      <p className="text-lg p-5 flex items-center justify-center">
        <a className="text-blue-500 underline" href={url} target="_blank">
          {url}
        </a>
      </p>
      <div className="flex items-center justify-center">
        <Image src={imageSrc} width={600} height={600} alt={`${title} screenshot`} />
      </div>
      <div className="flex flex-wrap pt-5">{logos}</div>
      <a href={githubUrl} target="_blank">
        <div className="border-2 border-solid flex justify-center items-center rounded-xl mx-auto m-10 p-3 hover:bg-slate-700 bg-slate-600">
          <GitHubLogo />
        </div>
      </a>
    </div>
  );
};

export default ProjectFramework