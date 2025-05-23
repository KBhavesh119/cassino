import React, { useState } from 'react';
import { Copy, Users, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ReferralCard: React.FC = () => {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralLink = `https://cryptocasino.example/ref/${user?.referralCode || ''}`;

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
      <div className="p-6 pb-5">
        <h2 className="text-xl font-bold text-white mb-2">Invite Your Friends</h2>
        <p className="text-gray-400 mb-4">
          For every friend that joins using your referral code, you'll earn 10% of their first deposit!
        </p>
        
        <div className="bg-gray-900 p-3 rounded-lg mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-amber-400 text-sm font-mono truncate">
              {referralLink}
            </span>
            <CopyToClipboard text={referralLink} onCopy={handleCopy}>
              <button
                className="flex items-center justify-center px-3 py-1.5 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors text-white text-sm whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <CheckCircle size={16} className="mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-1" />
                    Copy Link
                  </>
                )}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        
        <div className="bg-gray-900 p-3 rounded-lg">
          <p className="text-sm font-semibold text-white mb-1">Your Referral Code</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 text-transparent bg-clip-text">
              {user?.referralCode || 'PLAYER123'}
            </span>
            <CopyToClipboard text={user?.referralCode || 'PLAYER123'} onCopy={handleCopy}>
              <button
                className="text-amber-400 hover:text-amber-300 transition-colors"
                title="Copy referral code"
              >
                {copied ? (
                  <CheckCircle size={18} className="text-green-500" />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 bg-gray-850 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users size={20} className="text-amber-400 mr-2" />
            <span className="text-white font-medium">Active Referrals</span>
          </div>
          <span className="text-xl font-bold text-amber-400">
            {user?.referrals?.length || 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReferralCard;