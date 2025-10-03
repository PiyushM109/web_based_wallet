import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./wallets/SolanaWallet";
import { EthWallet } from "./wallets/EthWallet";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState();
  const [showWallets, setShowWallets] = useState(false);

  const createMnemonic = async () => {
    const mn = await generateMnemonic();

    setMnemonic(mn.split(" "));
    setShowWallets(true);
  };

  return (
    <div className="app-container">
      <h1 className="title">Web3 Wallet</h1>

      {!showWallets ? (
        <div>
          <button
            className="bg-gray-950 px-4 py-2 border rounded-xl border-slate-800 hover:border-slate-700"
            onClick={createMnemonic}
          >
            Create a Seed
          </button>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-6">
            {mnemonic.map((mne, index) => (
              <p
                key={index}
                className="bg-[#242424] m-2 p-4 rounded-lg shadow-lg hover:shadow-sm cursor-pointer"
              >
                {mne}
              </p>
            ))}
          </div>

          <div className="card-container">
            <SolanaWallet mnemonic={mnemonic.join(" ")} />
            <EthWallet mnemonic={mnemonic.join(" ")} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
