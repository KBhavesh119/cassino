import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {  Gift, BadgePercent, Clock } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

import { useAuth } from '../context/AuthContext';
import TierBadge from '../components/TierBadge';
import WalletConnect from '../components/WalletConnect';
import ReferralCard from '../components/ReferralCard';
import { tierInfo } from '../data/mockData';

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [walletBalance, setWalletBalance] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Dashboard - CryptoCasino';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-amber-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  const currentTierInfo = tierInfo[user.tier] || null;
  const nextTier = user.tier === 'bronze' ? 'silver' : user.tier === 'silver' ? 'gold' : null;
  const nextTierInfo = nextTier ? tierInfo[nextTier] : null;

  // Use walletBalance if available; else fallback to user.balance
  const displayedBalance = walletBalance !== null ? walletBalance : user.balance;

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user.name}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile & Balance Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
            >
              <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-6">
                <div className="flex items-center">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="h-16 w-16 rounded-full border-2 border-amber-400"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold text-white">{user.name}</h2>
                    <p className="text-indigo-200 flex items-center space-x-1">
                      <span>User ID:</span>
                      <span className="text-white font-mono">{user.id}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Current Balance</p>
                    <p className="text-3xl font-bold text-white">${displayedBalance.toFixed(2)}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">Membership Tier</p>
                    <div className="flex items-center">
                      <TierBadge tier={user.tier} size="lg" />
                    </div>
                  </div>
                </div>

                {nextTier && nextTierInfo && (
                  <div className="mt-6">
                    <p className="text-gray-400 text-sm mb-2">Tier Progress</p>
                    <div className="relative pt-1">
                      <div className="flex items-center justify-between">
                        <TierBadge tier={user.tier} size="sm" />
                        <TierBadge tier={nextTier} size="sm" />
                      </div>
                      <div className="overflow-hidden h-2 mt-2 text-xs flex rounded bg-gray-700">
                        <div 
                          style={{ 
                            width: `${Math.min(100, (displayedBalance / nextTierInfo.threshold) * 100)}%` 
                          }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-amber-500 to-yellow-600"
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                        <span>${displayedBalance.toFixed(2)}</span>
                        <span>${nextTierInfo.threshold}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Deposit ${(nextTierInfo.threshold - displayedBalance).toFixed(2)} more to reach {nextTierInfo.name} tier
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
            >
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Clock className="mr-2 text-amber-400" size={20} />
                  Recent Activity
                </h3>
              </div>

              <div className="divide-y divide-gray-700">
                {/* Static demo entries */}
                <div className="p-4 hover:bg-gray-750 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Won on Ethereum Roulette</p>
                      <p className="text-gray-400 text-sm">Yesterday at 8:45 PM</p>
                    </div>
                    <span className="text-green-500 font-medium">+$25.00</span>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-750 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Deposit</p>
                      <p className="text-gray-400 text-sm">2 days ago</p>
                    </div>
                    <span className="text-green-500 font-medium">+$100.00</span>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-750 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Lost on Crypto Slots</p>
                      <p className="text-gray-400 text-sm">3 days ago</p>
                    </div>
                    <span className="text-red-500 font-medium">-$15.00</span>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-750 transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Referral Bonus</p>
                      <p className="text-gray-400 text-sm">5 days ago</p>
                    </div>
                    <span className="text-green-500 font-medium">+$10.00</span>
                  </div>
                </div>
              </div>

              <div className="p-4 text-center">
                <button className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                  View All Activity
                </button>
              </div>
            </motion.div>

            {/* Tier Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
            >
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <BadgePercent className="mr-2 text-amber-400" size={20} />
                  Your {currentTierInfo?.name || 'Unknown'} Benefits
                </h3>
              </div>

              <div className="p-6">
                {currentTierInfo ? (
                  <>
                    <ul className="space-y-3">
                      {currentTierInfo.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle size={14} className="text-white" />
                          </div>
                          <span className="ml-2 text-gray-200">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {nextTierInfo && (
                      <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                        <p className="text-white font-medium mb-2">Upgrade to {nextTierInfo.name} for more benefits:</p>
                        <ul className="space-y-2">
                          {nextTierInfo.benefits
                            .filter(benefit => !currentTierInfo.benefits.includes(benefit))
                            .map((benefit, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <span className="text-amber-400 mr-2">•</span>
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-red-400">Tier data not found for "{user.tier}".</p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Wallet & Referral Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <WalletConnect onBalanceChange={setWalletBalance} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ReferralCard />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6"
            >
              <div className="flex items-center mb-4">
                <Gift className="mr-2 text-amber-400" size={24} />
                <h4 className="text-lg font-bold text-white">Rewards & Bonuses</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Complete daily challenges and earn free spins, cashback, and exclusive bonuses.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
