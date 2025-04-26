import { Comment, Voting } from '@/components/VotingCard';

export const votings: Voting[] = [
  {
    id: "1",
    title: "Escolha do novo uniforme 2025",
    description: "Vote no design que representará o clube na próxima temporada!",
    options: [
      { id: "a", label: "Uniforme Azul Neon", votes: 0 },
      { id: "b", label: "Uniforme Retrô Preto", votes: 0 },
      { id: "c", label: "Uniforme Branco Minimalista", votes: 0 },
    ],
    deadline: "2025-05-01T23:59:59-03:00",
    userVoted: false,
    status: "open" as const,
    results: undefined,
    comments: [] as Comment[],
  },
  {
    id: "2",
    title: "Novo mascote oficial",
    description: "Ajude a escolher o novo mascote do clube para eventos e ações sociais.",
    options: [
      { id: "a", label: "Leão Guerreiro", votes: 620 },
      { id: "b", label: "Águia Azul", votes: 380 },
    ],
    deadline: "2025-04-20T23:59:59-03:00",
    userVoted: true,
    status: "closed" as const,
    results: [
      { optionId: "a", label: "Leão Guerreiro", votes: 620, percentage: 62 },
      { optionId: "b", label: "Águia Azul", votes: 380, percentage: 38 },
    ],
    comments: [
      { id: "1", author: "Lucas", text: "O Leão tem mais a ver com a nossa história!", timestamp: "2025-04-20T20:30:00-03:00" },
      { id: "2", author: "Ana", text: "A Águia seria inovadora, mas o Leão é tradição.", timestamp: "2025-04-20T20:45:00-03:00" },
    ],
  },
];
