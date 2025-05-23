import React from 'react';
import { DollarSign } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
        <DollarSign size={24} className="text-yellow-400" />
      </div>
    </div>
  );
};

export default Logo;