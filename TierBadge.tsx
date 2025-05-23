import React from 'react';
import { tierInfo } from '../data/mockData';

interface TierBadgeProps {
  tier: 'bronze' | 'silver' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const TierBadge: React.FC<TierBadgeProps> = ({ 
  tier, 
  size = 'md',
  showLabel = true
}) => {
  const tierData = tierInfo[tier];
  const colorClasses = {
    bronze: 'from-amber-700 to-amber-500',
    silver: 'from-gray-400 to-gray-300',
    gold: 'from-yellow-500 to-amber-400'
  };
  
  const borderClasses = {
    bronze: 'border-amber-600',
    silver: 'border-gray-400',
    gold: 'border-yellow-400'
  };
  
  const sizeClasses = {
    sm: 'h-4 w-4 text-xs',
    md: 'h-6 w-6 text-sm',
    lg: 'h-10 w-10 text-base'
  };
  
  return (
    <div className="flex items-center">
      <div 
        className={`relative ${sizeClasses[size]} rounded-full border-2 ${borderClasses[tier]} bg-gradient-to-r ${colorClasses[tier]} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-gray-900 font-bold uppercase">
          {tier.charAt(0)}
        </span>
      </div>
      {showLabel && (
        <span className={`ml-1.5 font-semibold capitalize ${tierData.color}`}>
          {tierData.name}
        </span>
      )}
    </div>
  );
};

export default TierBadge;