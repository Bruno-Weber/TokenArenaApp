"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClubGrid from "@/components/ClubGrid";
import ParticipateNow from "@/components/ParticipateNow";
import MetricsDashboard from "@/components/MetricsDashboard";
import OnChainFeed from "@/components/OnChainFeed";
import Footer from "@/components/Footer";
import { clubs } from "@/data/clubs";
import { metrics } from "@/data/metrics";
import { feed } from "@/data/feed";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

export default function HomePage() {
  const { theme } = useTheme();
  const { lang } = useLang();

  const handleViewToken = (club: { name: string; logo: string }) => {
    alert(`Visualizar token do clube: ${club.name}`);
  };

  return (
    <main className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Hero />
      <ClubGrid clubs={clubs} onViewToken={handleViewToken} />
      <ParticipateNow />
      <MetricsDashboard metrics={metrics} />
      <OnChainFeed feed={feed} />
      <Footer />
    </main>
  );
}
