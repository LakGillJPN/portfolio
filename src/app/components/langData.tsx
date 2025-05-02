type Language = {
  button: string;
  top: string;
  JLeague: string;
  GamerTalk: string;
  MusicVue: string;
  techStack: string;
  languages: string;
  styling: string;
  frontend: string;
  backend: string;
  testing: string;
  misc: string;
  projects: string;
  freelance: string;
  mamoru: string;
  mamoruDate: string;
  aboutMeTitle: string;
  certificates: string;
  JLPT:string;
  JLPTDate:string;
  AWS:string;
  AWSDate:string;
  aboutMe: {
    intro: string;
    expertise: string;
    experience: string;
    contact: string;
  };
  footer: string;
};


const languages: Record<string, Language> = {
  English: {
    button: '日本語',
    top: "Back To Top",
    techStack: "Tech Stack",
    languages: "Languages",
    styling: "Styling",
    projects: "Projects",
    frontend: "Frontend",
    backend: "Backend",
    testing: "Testing",
    misc: "Misc",
    JLeague: "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." ,
    GamerTalk: "An application that allows gamers to connect with each other with the goal of building connections.",
    MusicVue: "A simple search engine for albums using the Discogs API.",
    freelance: "Contributions",
    mamoruDate: "Oct 2023 - Jan 2024",
    mamoru: "mamoru is a sustainable living app that helps you discover and save on sustainable products, shops, cafes, restaurants, and more.",
    certificates: "Certificates",
    JLPT: "Japanese Language Proficiency Test (N2)",
    JLPTDate: "Date Issued: January 2022",
    AWS: "AWS Certified Cloud Practitioner",
    AWSDate: "Date Issued: January 2025",
    aboutMeTitle: "About Me",
    aboutMe: {
      intro: "Hi! I’m Lak. I work as a Software Engineer in Sapporo, Hokkaido, Japan. I’m originally from London, UK.",
      expertise: "I specialize in building modern web and mobile applications using React, Next.js, and TypeScript. In my current role, I’ve worked on cross-platform apps with React Native and Flutter, and developed internal tools with VB and C# to automate workflows and handle large datasets.",
      experience: "I’ve led frontend development for admin dashboards and client-facing sites, integrating with Java, Laravel, and MySQL backends. I focus on delivering responsive, high-performance applications that offer smooth user experiences.",
      contact: "I’m always open to new opportunities and collaborations—feel free to contact me through any of my social links!"
    },
    footer:  "Powered by Tailwind CSS & Next.JS" 
  },
  Japanese: {
    button: 'English',
    top: "トップへ戻る",
    projects: "プロジェクト",
    techStack: "知識",
    languages: "言語",
    styling: "スタイル",
    frontend: "フロントエンド",
    backend: "バックエンド",
    testing: "テスト",
    misc: "その他",
    JLeague: "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。",
    GamerTalk: "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。",
    MusicVue: "Discogs APIを使用したアルバム検索エンジン。",
    freelance: "フリーランス",
    mamoruDate: "2023年10月～2024年1月",
    mamoru: "mamoru（まもる）は、サステナブルな商品、ショップ、カフェ、レストランなどを発見し、お得に利用することができる サステナブルライフアプリです。",
    certificates: "資格",
    JLPT: "日本語能力試験2級",
    JLPTDate: "発行日:2022年1月",
    AWS: "AWS認定クラウドプラクティショナー",
    AWSDate: "発行日:2025年1月",
    aboutMeTitle: "プロフィール",
    aboutMe: {
      intro: "こんにちは！ラクギルです。北海道札幌市でソフトウェアエンジニアとして働いています。出身はイギリス・ロンドンです。",
      expertise: "React、Next.js、TypeScript を用いたモダンな Web・モバイルアプリの開発を得意としています。現在の職場では、React Native や Flutter を使ったクロスプラットフォームアプリの開発や、VB や C# を使った業務効率化ツールの作成などに携わっています。",
      experience: "Java、Laravel、MySQL を使用したバックエンドと連携した管理画面やクライアント向けサイトのフロントエンド開発をリードしてきました。レスポンシブかつ高パフォーマンスなアプリケーションの提供を重視しています。",
      contact: "新しい機会やコラボレーションは常に歓迎しています。お気軽にソーシャルリンクからご連絡ください！"
    },  
    footer: "Tailwind CSSとNext JSによって動作します"
  },
};

export default languages;