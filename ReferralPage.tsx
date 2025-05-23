import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ReferralCard from '../components/ReferralCard';
import ReferralsList from '../components/ReferralsList';

const ReferralPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title
    document.title = 'Referrals - CryptoCasino';
    
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Referral Program</h1>
          <p className="text-gray-400">Invite friends and earn crypto rewards</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ReferralCard />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ReferralsList />
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="mr-2 text-amber-400" size={20} />
                How It Works
              </h3>
              
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold mr-3">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Share your referral link</p>
                    <p className="text-gray-400 text-sm">Send your unique referral link to friends and family</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold mr-3">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Friends sign up and deposit</p>
                    <p className="text-gray-400 text-sm">When they register and make their first deposit</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold mr-3">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">You earn rewards</p>
                    <p className="text-gray-400 text-sm">Receive 10% of their first deposit instantly</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center text-white font-bold mr-3">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">Ongoing commission</p>
                    <p className="text-gray-400 text-sm">Get 5% of their future deposits for life</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl p-6 border border-purple-800 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-3">Referral Leaderboard</h3>
              <p className="text-indigo-200 text-sm mb-4">
                Top referrers this month will win additional prizes!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-black/20 p-2 rounded">
                  <div className="flex items-center">
                    <div className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 font-bold mr-2">
                      1
                    </div>
                    <span className="text-white">CryptoKing</span>
                  </div>
                  <span className="text-amber-300 font-bold">42 referrals</span>
                </div>
                
                <div className="flex items-center justify-between bg-black/20 p-2 rounded">
                  <div className="flex items-center">
                    <div className="w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-gray-900 font-bold mr-2">
                      2
                    </div>
                    <span className="text-white">BlockchainExpert</span>
                  </div>
                  <span className="text-amber-300 font-bold">35 referrals</span>
                </div>
                
                <div className="flex items-center justify-between bg-black/20 p-2 rounded">
                  <div className="flex items-center">
                    <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center text-gray-900 font-bold mr-2">
                      3
                    </div>
                    <span className="text-white">BitcoinMaster</span>
                  </div>
                  <span className="text-amber-300 font-bold">28 referrals</span>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors">
                View Full Leaderboard
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;