export const votings = [
  {
    id: 1,
    title: "Escolha do novo uniforme 2025",
    description: "Vote no design que representará o clube na próxima temporada!",
    options: [
      { id: "a", label: "Uniforme Azul Neon" },
      { id: "b", label: "Uniforme Retrô Preto" },
      { id: "c", label: "Uniforme Branco Minimalista" },
    ],
    deadline: "2025-05-01T23:59:59-03:00",
    userVoted: false,
    status: "open",
    results: null,
    comments: [],
  },
  {
    id: 2,
    title: "Novo mascote oficial",
    description: "Ajude a escolher o novo mascote do clube para eventos e ações sociais.",
    options: [
      { id: "a", label: "Leão Guerreiro" },
      { id: "b", label: "Águia Azul" },
    ],
    deadline: "2025-04-20T23:59:59-03:00",
    userVoted: true,
    status: "closed",
    results: [
      { id: "a", label: "Leão Guerreiro", percent: 62 },
      { id: "b", label: "Águia Azul", percent: 38 },
    ],
    comments: [
      { user: "Lucas", text: "O Leão tem mais a ver com a nossa história!" },
      { user: "Ana", text: "A Águia seria inovadora, mas o Leão é tradição." },
    ],
  },
];
