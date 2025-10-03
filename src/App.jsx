import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./SolanaWallet";
import { EthWallet } from "./EthWallet";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <div>
        <button
          onClick={async function () {
            const mn = await generateMnemonic();
            setMnemonic(mn);
          }}
        >
          Create Seed Phrase
        </button>
      </div>
      <input type="text" value={mnemonic}></input>

      <SolanaWallet mnemonic={mnemonic} />

      <EthWallet mnemonic={mnemonic} />
    </>
  );
}

export default App;
