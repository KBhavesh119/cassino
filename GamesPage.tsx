// // src/pages/GamesPage.tsx

// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import { Game } from '../types';
// import { gamesData } from '../data/mockData';
// import GameCard from '../components/GameCard';

// const GamesPage: React.FC = () => {
//   const [walletAddress, setWalletAddress] = useState('');
//   const [balance, setBalance] = useState('0');
//   const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       const ethProvider = new ethers.BrowserProvider(window.ethereum);
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const signer = await ethProvider.getSigner();
//       const address = await signer.getAddress();
//       const balance = await ethProvider.getBalance(address);
//       setWalletAddress(address);
//       setBalance(ethers.formatEther(balance));
//       setProvider(ethProvider);
//     } else {
//       alert('Please install MetaMask to play.');
//     }
//   };

//   useEffect(() => {
//     connectWallet();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 pt-20 pb-12">
//       <div className="container mx-auto px-4">
//         <div className="mb-6 flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-white">CryptoCasino Games</h1>
//             <p className="text-gray-400">Try your luck and win real ETH!</p>
//           </div>
//           <div className="text-right">
//             <button
//               onClick={connectWallet}
//               className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-bold"
//             >
//               {walletAddress ? 'Wallet Connected' : 'Connect Wallet'}
//             </button>
//             {walletAddress && (
//               <div className="text-sm text-gray-300 mt-2">
//                 <div>Address: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</div>
//                 <div>Balance: {parseFloat(balance).toFixed(4)} ETH</div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Game Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {gamesData.map((game) => (
//             <GameCard
//               key={game.id}
//               game={game}
//               provider={provider}
//               refreshBalance={connectWallet}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GamesPage;


// src/pages/GamesPage.tsx

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import GameCard from '../components/GameCard';

const games = [
  {
    id: 'choose-number',
    name: 'Choose a Number',
    description: 'Pick a number between 1 and 10. Guess correctly to win!',
    minBet: 0.001,
    maxBet: 1,
    image: 'https://tse3.mm.bing.net/th?id=OIP.drF7YUOUi0HE1MMZWrjDfgHaE8&pid=Api&P=0&h=180',
  },
  {
    id: 'heads-or-tails',
    name: 'Heads or Tails',
    description: 'Pick heads or tails. Win if your guess matches the coin flip!',
    minBet: 0.001,
    maxBet: 1,
    image: 'https://tse2.mm.bing.net/th?id=OIP.Ow9H9CLPLnOX-yGZ1kUMjQHaFj&pid=Api&P=0&h=180',
  },
];


const GamesPage: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('0');
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = await ethProvider.getSigner();
      const address = await signer.getAddress();
      const balance = await ethProvider.getBalance(address);
      setWalletAddress(address);
      setBalance(ethers.formatEther(balance));
      setProvider(ethProvider);
    } else {
      alert('Please install MetaMask to play.');
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">CryptoCasino Games</h1>
            <p className="text-gray-400">Bet ETH and try your luck!</p>
          </div>
          <div className="text-right">
            <button
              onClick={connectWallet}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-bold"
            >
              {walletAddress ? 'Wallet Connected' : 'Connect Wallet'}
            </button>
            {walletAddress && (
              <div className="text-sm text-gray-300 mt-2">
                <div>Address: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</div>
                <div>Balance: {parseFloat(balance).toFixed(4)} ETH</div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              provider={provider}
              refreshBalance={connectWallet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
