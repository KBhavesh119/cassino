export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  balance: number;
  tier: 'bronze' | 'silver' | 'gold';
  joinDate: string;
  referrals: string[];
  referralCode: string;
}

export interface Game {
  id: string;
  name: string;
  category: 'slots' | 'cards' | 'table' | 'dice' | 'other';
  image: string;
  description: string;
  minBet: number;
  maxBet: number;
  featured: boolean;
  new: boolean;
  popular: boolean;
}

export interface Wallet {
  address: string;
  balance: number;
  currency: string;
}

export type TierThreshold = {
  bronze: number;
  silver: number;
  gold: number;
};

export type TierInfo = {
  name: string;
  threshold: number;
  color: string;
  benefits: string[];
};


export interface Game {
  id: string;
  name: string;
  description: string;
  minBet: number;
  maxBet: number;
  // image?: string;
}
