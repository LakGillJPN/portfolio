type Language = {
  button: string;
  JLeague: string;
  GamerTalk: string;
  projects: string;
  SakuraSignal: string;
  freelance: string;
  mamoru: string;
  mamoruDate: string;
  footer: string;
};


const languages: Record<string, Language> = {
  English: {
    button: '日本語',
    JLeague: "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." ,
    GamerTalk: "An application that allows gamers to connect with each other with the goal of building connections.",
    SakuraSignal: "SakuraSignal",
    projects: "Projects",
    freelance: "Contributions",
    mamoru: "mamoru is a sustainable living app that helps you discover and save on sustainable products, shops, cafes, restaurants, and more.",
    mamoruDate: "Oct 2023 - Present",
    footer:  "Powered by Tailwind CSS & Next.JS" 
  },
  Japanese: {
    button: 'English',
    projects: "プロジェクト",
    JLeague: "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。",
    GamerTalk: "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。",
    SakuraSignal: "SakuraSignal",
    freelance: "フリーランスの仕事",
    mamoru: "mamoru（まもる）は、サステナブルな商品、ショップ、カフェ、レストランなどを発見し、お得に利用することができる サステナブルライフアプリです。",
    mamoruDate: "2023年10月～現在",
    footer: "Tailwind CSSとNext JSによって動作します"
  },
};

export default languages;