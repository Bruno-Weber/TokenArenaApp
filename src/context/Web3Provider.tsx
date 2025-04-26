"use client";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "viem/chains";
import { http } from "viem";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const projectId = "cdb2aee27e61c2092cb4e51a5b15183a"; // Get this from WalletConnect Cloud

getDefaultWallets({
  appName: "Token Arena",
  projectId,
});

const config = createConfig({
  ssr: true,
  chains: [mainnet, polygon],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
