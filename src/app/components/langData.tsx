type Language = {
  button: string;
  JLeague: string;
  GamerTalk: string;
  projects: string;
  freelance: string;
  mamoru: string;
  footer: string;
};


const languages: Record<string, Language> = {
  English: {
    button: '日本語',
    JLeague: "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." ,
    GamerTalk: "An application that allows gamers to connect with each other with the goal of building connections.",
    projects: "projects",
    freelance: "Contributions",
    mamoru: "mamoru is a sustainable living app that helps you discover and save on sustainable products, shops, cafes, restaurants, and more.",
    footer:  "Powered by Tailwind CSS & Next.JS" 
  },
  Japanese: {
    button: 'English',
    JLeague: "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。",
    GamerTalk: "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。",
    projects: "プロジェクト",
    freelance: "フリーランスの仕事",
    mamoru: "mamoru（まもる）は、サステナブルな商品、ショップ、カフェ、レストランなどを発見し、お得に利用することができる サステナブルライフアプリです。",
    footer: "Tailwind CSSとNext JSによって動作します"
  },
};

export default languages;