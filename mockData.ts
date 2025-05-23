import { Game, User, TierInfo } from '../types';

// Mock user data
export const mockUser: User = {
  id: 'usr_123456789',
  name: 'Crypto Player',
  email: 'player@example.com',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  balance: 250,
  tier: 'silver',
  joinDate: '2023-10-15',
  referrals: ['John Doe', 'Jane Smith', 'Alex Johnson'],
  referralCode: 'PLAYER123'
};

// Mock games data
export const gamesData: Game[] = [
  {
    id: 'game_001',
    name: 'Crypto Slots',
    category: 'slots',
    image: 'https://images.pexels.com/photos/5990247/pexels-photo-5990247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Spin the reels and match crypto symbols to win big!',
    minBet: 0.001,
    maxBet: 1,
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'game_002',
    name: 'Blockchain Blackjack',
    category: 'cards',
    image: 'https://images.pexels.com/photos/6664240/pexels-photo-6664240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Classic blackjack with a crypto twist. Beat the dealer to 21!',
    minBet: 0.005,
    maxBet: 2,
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'game_003',
    name: 'Ethereum Roulette',
    category: 'table',
    image: 'https://images.pexels.com/photos/5717277/pexels-photo-5717277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Place your bets on the spinning wheel of fortune!',
    minBet: 0.01,
    maxBet: 5,
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'game_004',
    name: 'Dice Roll',
    category: 'dice',
    image: 'https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Predict the outcome of the dice and multiply your crypto!',
    minBet: 0.001,
    maxBet: 1,
    featured: false,
    new: true,
    popular: false
  },
  {
    id: 'game_005',
    name: 'Crypto Poker',
    category: 'cards',
    image: 'https://images.pexels.com/photos/6663469/pexels-photo-6663469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Test your poker skills against other crypto players!',
    minBet: 0.05,
    maxBet: 10,
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'game_006',
    name: 'Lucky Wheel',
    category: 'other',
    image: 'https://images.pexels.com/photos/6636499/pexels-photo-6636499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Spin the wheel for instant crypto prizes!',
    minBet: 0.001,
    maxBet: 0.5,
    featured: false,
    new: false,
    popular: true
  },
  {
    id: 'game_007',
    name: 'Baccarat Royale',
    category: 'cards',
    image: 'https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Elegant card game with simple rules and big payouts!',
    minBet: 0.01,
    maxBet: 5,
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'game_008',
    name: 'Crypto Crash',
    category: 'other',
    image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Cash out before the graph crashes! How long will you hold?',
    minBet: 0.001,
    maxBet: 2,
    featured: false,
    new: true,
    popular: true
  },
  {
    id: 'game_009',
    name: 'Video Poker',
    category: 'cards',
    image: 'https://images.pexels.com/photos/4577818/pexels-photo-4577818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Draw and hold cards to create winning poker hands!',
    minBet: 0.005,
    maxBet: 1,
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'game_010',
    name: 'Keno',
    category: 'other',
    image: 'https://images.pexels.com/photos/3279691/pexels-photo-3279691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Pick your lucky numbers and wait for the draw!',
    minBet: 0.001,
    maxBet: 0.5,
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'game_011',
    name: 'Plinko',
    category: 'other',
    image: 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Watch the ball bounce through pins to your prize!',
    minBet: 0.001,
    maxBet: 1,
    featured: false,
    new: true,
    popular: true
  },
  {
    id: 'game_012',
    name: 'Hi-Lo',
    category: 'cards',
    image: 'https://images.pexels.com/photos/399610/pexels-photo-399610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Predict if the next card will be higher or lower!',
    minBet: 0.001,
    maxBet: 0.5,
    featured: false,
    new: false,
    popular: false
  }
];

// Tier information
export const tierInfo: Record<string, TierInfo> = {
  bronze: {
    name: 'Bronze',
    threshold: 10,
    color: 'text-amber-600',
    benefits: [
      'Access to all games',
      '1% cashback on losses',
      'Daily free spin'
    ]
  },
  silver: {
    name: 'Silver',
    threshold: 100,
    color: 'text-slate-400',
    benefits: [
      'All Bronze benefits',
      '3% cashback on losses',
      'Weekly bonus',
      'Lower transaction fees'
    ]
  },
  gold: {
    name: 'Gold',
    threshold: 500,
    color: 'text-yellow-500',
    benefits: [
      'All Silver benefits',
      '5% cashback on losses',
      'VIP support',
      'Exclusive games access',
      'Higher withdrawal limits'
    ]
  }
};

// Wallet options
export const walletOptions = [
  { name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
  { name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
  { name: 'Tether', symbol: 'USDT', icon: '₮' },
  { name: 'Binance Coin', symbol: 'BNB', icon: 'BNB' },
  { name: 'Solana', symbol: 'SOL', icon: 'SOL' }
];