type Language = {
  button: string;
  top: string;
  JLeague: string;
  GamerTalk: string;
  techStack: string;
  projects: string;
  SakuraSignal: string;
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
    techStack: "Tech Stack",
    JLeague: "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." ,
    GamerTalk: "An application that allows gamers to connect with each other with the goal of building connections.",
    SakuraSignal: "SakuraSignal",
    freelance: "Contributions",
    mamoruDate: "Oct 2023 - Present",
    mamoru: "mamoru is a sustainable living app that helps you discover and save on sustainable products, shops, cafes, restaurants, and more.",
    mamoruDate: "Oct 2023 - Present",
    aboutMeTitle: "About Me",
    aboutMe: {
      intro: "Hi! I’m Lak. I work as a Frontend Engineer in Sapporo, Hokkaido, Japan. I’m originally from London, UK.",
      codingSchool: "My expertise is React/Next.JS and TypeScript/JavaScript. I honed my skills through an intensive 8-month Full Stack coding program, delving into various facets of web development such as Node, PostgreSQL, Firebase, and more.",
      since: "Since graduating from the program, I have actively sought opportunities to enhance my skills through challenging work assignments, personal projects, or contributions to open-source initiatives.",
      final: "Feel free to contact me on any of my social links if you want to collaborate!"

    },
    footer:  "Powered by Tailwind CSS & Next.JS" 
  },
  Japanese: {
    button: 'English',
    projects: "プロジェクト",
    top: "トップへ戻る",
    projects: "プロジェクト",
    techStack: "知識",
    JLeague: "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。",
    GamerTalk: "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。",
    projects: "プロジェクト",
    freelance: "フリーランスの仕事",
    mamoruDate: "2023年10月～現在",
    mamoru: "mamoru（まもる）は、サステナブルな商品、ショップ、カフェ、レストランなどを発見し、お得に利用することができる サステナブルライフアプリです。",
    mamoruDate: "2023年10月～現在",
    aboutMeTitle: "プロフィール",
    aboutMe: {
      intro: "こんにちは！ラクです。現在、北海道の札幌でフロントエンドエンジニアとして働いています。出身はイギリスのロンドンです。",
      codingSchool: "8ヶ月間のフルスタックコーディングプログラムを卒業し、Node、PostGreSQL、Firebaseなど、ウェブ開発の様々なことを学びました。",
      since: "卒業後は、やりがいのある仕事、個人的なプロジェクト、オープンソースプロジェクトへの貢献などを通じて、自分のスキルを向上させることに努めてきました。",
      final: "コラボレーションを希望される方は、上記の私のソーシャルリンクのいずれかにお気軽にご連絡ください。"
    },
    footer: "Tailwind CSSとNext JSによって動作します"
  },
};

export default languages;