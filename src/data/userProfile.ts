export const userProfile = {
  wallet: "0x1234...abcd",
  ens: "torcedor.eth",
  avatarNftId: 2, // id da NFT escolhida como avatar
  stake: [
    { club: "Grêmio", amount: 1200 },
    { club: "Flamengo", amount: 300 },
  ],
  nfts: [
    {
      id: 2,
      name: "Camisa 2025 - Neon",
      image: "/images/nfts/camisa2025.png",
      rarity: "raro",
    },
    {
      id: 3,
      name: "Mascote Guerreiro",
      image: "/images/nfts/mascote.png",
      rarity: "comum",
    },
    {
      id: 4,
      name: "Bola Final Libertadores",
      image: "/images/nfts/bola.png",
      rarity: "muito raro",
    },
  ],
  votes: [
    { title: "Novo mascote oficial", date: "2025-04-20", result: "Leão Guerreiro" },
    { title: "Escolha do novo uniforme 2025", date: "2025-04-10", result: "Uniforme Azul Neon" },
  ],
  feedbacks: [
    { date: "2025-04-05", summary: "Sugestão de nova música para torcida", status: "lido" },
    { date: "2025-03-22", summary: "Relato de bug na área de stake", status: "resolvido" },
  ],
  preferences: {
    notifications: true,
    favoriteClub: "Grêmio",
  },
};
