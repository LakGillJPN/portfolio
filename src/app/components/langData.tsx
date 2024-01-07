type Language = {
  button: string;
  top: string;
  JLeague: string;
  GamerTalk: string;
  projects: string;
  freelance: string;
  mamoru: string;
  mamoruDate: string;
  aboutMeTitle: string;
  aboutMe: {
    intro: string;
    codingSchool: string;
    since: string;
    final: string;
  };
  footer: string;
};


const languages: Record<string, Language> = {
  English: {
    button: '日本語',
    top: "Back To Top",
    projects: "Projects",
    JLeague: "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." ,
    GamerTalk: "An application that allows gamers to connect with each other with the goal of building connections.",
    freelance: "Contributions",
    mamoruDate: "Oct 2023 - Present",
    mamoru: "mamoru is a sustainable living app that helps you discover and save on sustainable products, shops, cafes, restaurants, and more.",
    aboutMeTitle: "About Me",
    aboutMe: {
      intro: "Hi! I’m Lak. I’m currently working as a frontend engineer in Sapporo, Hokkaido, Japan. I’m originally from London, UK.",
      codingSchool: "I expertise in React/Next.JS and TypeScript/JavaScript. I honed my skills through an intensive 8-month Full Stack coding program, delving into various facets of web development such as Node, PostGreSQL, Firebase, and more.",
      since: "Since graduating, I actively seek opportunities to enhance my skills, be it through challenging work assignments, personal projects, or contributions to open-source initiatives.",
      final: "Feel free to contact me on any of my social links above or email me here if you want to collaborate."

    },
    footer:  "Powered by Tailwind CSS & Next.JS" 
  },
  Japanese: {
    button: 'English',
    top: "トップへ戻る",
    projects: "プロジェクト",
    JLeague: "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。",
    GamerTalk: "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。",
    freelance: "フリーランス",
    mamoruDate: "2023年10月～現在",
    mamoru: "mamoru（まもる）は、サステナブルな商品、ショップ、カフェ、レストランなどを発見し、お得に利用することができる サステナブルライフアプリです。",
    aboutMeTitle: "私について",
    aboutMe: {
      intro: "",
      codingSchool: "",
      since: "",
      final: ""
    },
    footer: "Tailwind CSSとNext JSによって動作します"
  },
};

export default languages;