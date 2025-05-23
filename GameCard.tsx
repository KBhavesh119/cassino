// // src/components/GameCard.tsx

// import React, { useState } from 'react';
// import { Game } from '../types';
// import { motion } from 'framer-motion';
// import { ethers } from 'ethers';

// interface GameCardProps {
//   game: Game;
//   provider: ethers.BrowserProvider | null;
//   refreshBalance: () => void;
// }

// const GameCard: React.FC<GameCardProps> = ({ game, provider, refreshBalance }) => {
//   const [bet, setBet] = useState('');
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const playGame = async () => {
//     if (!provider || !bet) return alert('Connect wallet and enter a bet.');

//     try {
//       setLoading(true);
//       const signer = await provider.getSigner();
//       const value = ethers.parseEther(bet);

//       // Game logic simulation
//       let win = false;
//       let message = '';

//       if (game.id === 'guess-number') {
//         const guess = prompt('Enter a number (1–10):');
//         const random = Math.floor(Math.random() * 10) + 1;
//         let win = guess && parseInt(guess) === random;
//         message = `Your guess: ${guess}, Actual: ${random}. ${win ? 'You win!' : 'Try again.'}`;
//       } else if (game.id === 'heads-or-tails') {
//         const guess = prompt('Heads or Tails?')?.toLowerCase();
//         const flip = Math.random() < 0.5 ? 'heads' : 'tails';
//         win = guess === flip;
//         message = `You guessed ${guess}, It was ${flip}. ${win ? 'You win!' : 'You lose.'}`;
//       } else if (game.id === 'dice-roll') {
//         const roll = Math.floor(Math.random() * 6) + 1;
//         win = roll === 6;
//         message = `You rolled a ${roll}. ${win ? 'You win!' : 'You lose.'}`;
//       }

//       // Simulate ETH transfer (mock only)
//       await signer.sendTransaction({
//         to: signer.address, // normally a smart contract address
//         value,
//       });

//       if (win) {
//         alert(`You win! Simulate adding winnings on-chain here.`);
//         // smartContract.payWinnings() - placeholder
//       }

//       setResult(message);
//       setBet('');
//       refreshBalance();
//     } catch (error) {
//       console.error(error);
//       setResult('Transaction failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const placeholderImage = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(game.name);

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all"
//     >
//       <img
//         src={game.image || placeholderImage}
//         alt={game.name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-white mb-1">{game.name}</h3>
//         <p className="text-gray-400 text-sm mb-3">{game.description}</p>

//         <input
//           type="number"
//           placeholder="Bet in ETH"
//           value={bet}
//           min={game.minBet}
//           max={game.maxBet}
//           onChange={(e) => setBet(e.target.value)}
//           className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
//         />

//         <button
//           onClick={playGame}
//           disabled={loading || !bet}
//           className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded font-bold"
//         >
//           {loading ? 'Playing...' : 'Place Bet'}
//         </button>

//         {result && <p className="text-sm text-gray-300 mt-2">{result}</p>}
//       </div>
//     </motion.div>
//   );
// };

// export default GameCard;




// src/components/GameCard.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';

interface Game {
  id: string;
  name: string;
  description: string;
  minBet: number;
  maxBet: number;
  image?: string;
}

interface GameCardProps {
  game: Game;
  provider: ethers.BrowserProvider | null;
  refreshBalance: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, provider, refreshBalance }) => {
  const [bet, setBet] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const playGame = async () => {
    if (!provider || !bet || !input) return alert('Please connect your wallet and enter both input and bet amount.');

    try {
      setLoading(true);
      const signer = await provider.getSigner();
      const value = ethers.parseEther(bet);
      const address = await signer.getAddress();

      let win = false;
      let message = '';

      if (game.id === 'choose-number') {
        const random = Math.floor(Math.random() * 10) + 1;
        win = parseInt(input) === random;
        message = `You guessed ${input}, Actual: ${random}. ${win ? 'You win!' : 'You lose.'}`;
      } else if (game.id === 'heads-or-tails') {
        const flip = Math.random() < 0.5 ? 'heads' : 'tails';
        win = input.toLowerCase() === flip;
        message = `You chose ${input}, Coin: ${flip}. ${win ? 'You win!' : 'You lose.'}`;
      }

      // Simulate ETH transfer logic (mock)
      await signer.sendTransaction({
        to: address,
        value,
      });

      if (!win) {
        // Simulate loss: send ETH to dummy address
        await signer.sendTransaction({
          to: '0x000000000000000000000000000000000000dead',
          value,
        });
      }

      alert(message);
      setResult(message);
      setBet('');
      setInput('');
      refreshBalance();
    } catch (error) {
      console.error(error);
      setResult('Transaction failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all"
    >
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{game.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{game.description}</p>

        <input
          type="text"
          placeholder={game.id === 'heads-or-tails' ? 'Enter heads or tails' : 'Enter number (1-10)'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full mb-2 px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
        />

        <input
          type="number"
          placeholder="Bet in ETH"
          value={bet}
          min={game.minBet}
          max={game.maxBet}
          onChange={(e) => setBet(e.target.value)}
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
        />

        <button
          onClick={playGame}
          disabled={loading || !bet || !input}
          className="mt-3 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded font-bold"
        >
          {loading ? 'Playing...' : 'Place Bet'}
        </button>

        {result && <p className="text-sm text-gray-300 mt-2">{result}</p>}
      </div>
    </motion.div>
  );
};

export default GameCard;
