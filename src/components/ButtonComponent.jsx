import React, { useState } from "react";

export const ButtonComponent = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const handleConnect = async () => {
    if (window.ethereum) {
      console.log("Metamask detected...");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error fetching account");
      }
    } else {
      alert("Metamask not detected...");
    }
  };
  return (
    <>
      <button onClick={handleConnect}>Connect to Wallet</button>
      <h1>Your Meta Mask wallet address</h1>
      <h1> {walletAddress}</h1>
    </>
  );
};
