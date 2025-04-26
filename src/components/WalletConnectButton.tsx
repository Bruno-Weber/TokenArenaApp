"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletConnectButton = () => {
  return (
    <div className="ml-4">
      <ConnectButton
        showBalance={false}
        accountStatus={{ smallScreen: "avatar", largeScreen: "full" }}
        chainStatus={{ smallScreen: "icon", largeScreen: "full" }}
      />
    </div>
  );
};

export default WalletConnectButton;
