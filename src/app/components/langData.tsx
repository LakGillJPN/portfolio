type Language = {
  header: string;
  button: string;
  JLeague: string;
  GamerTalk: string;
};


const languages: Record<string, Language> = {
  English: {
    header: 'Lak Gill Portfolio',
    button: '日本語',
    JLeague: "A game where users predict the results of upcoming J-League fixtures and earn points based on their accuracy." ,
    GamerTalk: "An application that allows gamers to connect with each other with the goal of building connections."
  },
  Japanese: {
    header: 'ラク ギル ポートフォリオ',
    button: 'English',
    JLeague: "Jリーグの勝敗を予想し、ポイントを獲得するゲーム。",
    GamerTalk: "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。"
  },
};

export default languages;