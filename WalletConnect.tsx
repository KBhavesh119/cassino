import React, { useState } from 'react';
import { Wallet, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { walletOptions } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

interface WalletConnectProps {
  onBalanceChange: React.Dispatch<React.SetStateAction<number | null>>;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onBalanceChange }) => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [copied, setCopied] = useState(false);

  const fakeAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  // Simulate fetching wallet balance on connect
  const fakeWalletBalance = 0; // example balance

  const handleConnect = (wallet: string) => {
    setSelectedWallet(wallet);
    setConnecting(true);

    // Simulate async wallet connection and balance fetch
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);

      // Send fake balance to parent
      onBalanceChange(fakeWalletBalance);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fakeAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <Wallet className="mr-2 text-amber-400" size={20} />
        Connect Your Crypto Wallet
      </h2>

      <AnimatePresence mode="wait">
        {!connected ? (
          <motion.div
            key="walletSelection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-gray-400 mb-4">Select a wallet to connect:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet.name)}
                  disabled={connecting}
                  className="flex items-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors border border-gray-600"
                >
                  <span className="text-lg mr-2">{wallet.icon}</span>
                  <span>{wallet.name}</span>
                  {selectedWallet === wallet.name && connecting && (
                    <div className="ml-auto">
                      <div className="h-5 w-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By connecting a wallet, you agree to CryptoCasino&apos;s Terms of Service and Privacy Policy.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="walletConnected"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <div className="mb-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Wallet Connected!</h3>
              <p className="text-gray-400 text-sm">You&apos;ve successfully connected your {selectedWallet} wallet</p>
            </div>

            <div className="bg-gray-900 p-3 rounded-lg mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm truncate max-w-[200px]">{fakeAddress}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopy}
                    className="text-amber-400 hover:text-amber-300 transition-colors p-1"
                    title="Copy address"
                  >
                    {copied ? (
                      <CheckCircle size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                  <a
                    href="#"
                    className="text-amber-400 hover:text-amber-300 transition-colors p-1"
                    title="View on blockchain explorer"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              <button
                onClick={() => {
                  setConnected(false);
                  onBalanceChange(null); // reset balance on disconnect/change
                  setSelectedWallet(null);
                }}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors text-sm"
              >
                Change Wallet
              </button>
              <button
                className="px-3 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors text-sm"
              >
                Add Funds
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WalletConnect;
