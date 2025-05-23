import React from 'react';
import { useAuth } from '../context/AuthContext';

const ReferralsList: React.FC = () => {
  const { user } = useAuth();

  if (!user?.referrals || user.referrals.length === 0) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
        <p className="text-gray-400">You haven't referred anyone yet. Share your referral code to start earning!</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white">Your Referrals</h3>
      </div>
      <div className="divide-y divide-gray-700">
        {user.referrals.map((name, index) => (
          <div key={index} className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
                {name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="text-white font-medium">{name}</p>
                <p className="text-gray-400 text-sm">Joined {Math.floor(Math.random() * 30) + 1} days ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">${(Math.random() * 50).toFixed(2)}</p>
              <p className="text-green-500 text-sm">Earned</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralsList;