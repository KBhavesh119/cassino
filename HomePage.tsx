import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Trophy, Shield, Shuffle, Users } from 'lucide-react';
import { gamesData } from '../data/mockData';
import GameCard from '../components/GameCard';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'CryptoCasino - Play & Win Crypto';
  }, []);

  // Get featured games
  const featuredGames = gamesData.filter(game => game.featured).slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              filter: "brightness(0.3)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
              The Ultimate <span className="bg-gradient-to-r from-amber-400 to-yellow-600 text-transparent bg-clip-text">Crypto Casino</span> Experience
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Play, win, and withdraw with your favorite cryptocurrencies. 
              Join thousands of players enjoying our secure and exciting games.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-full transition-colors transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/games"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full border border-gray-600 transition-colors"
              >
                Browse Games
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating crypto icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 24 + 16}px`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0.2, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['₿', 'Ξ', '₮', '◎', '₳', 'Ð'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Featured Games */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Games</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Try our most popular casino games and experience the thrill of crypto gambling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/games"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full border border-gray-600 transition-colors inline-flex items-center"
            >
              <Shuffle size={18} className="mr-2" />
              View All Games
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose CryptoCasino?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide the best crypto gambling experience with numerous benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-700 p-6 rounded-xl text-center"
            >
              <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-400">
                Cutting-edge encryption and blockchain technology ensure your funds and personal data stay safe.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-700 p-6 rounded-xl text-center"
            >
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Payouts</h3>
              <p className="text-gray-400">
                Withdraw your winnings instantly to your crypto wallet with no delays or paperwork.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-700 p-6 rounded-xl text-center"
            >
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VIP Rewards</h3>
              <p className="text-gray-400">
                Our tiered membership system rewards loyal players with exclusive perks and bonuses.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-gray-700 p-6 rounded-xl text-center"
            >
              <div className="h-16 w-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Referral Program</h3>
              <p className="text-gray-400">
                Invite friends and earn 10% of their first deposit as a bonus directly to your account.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Playing?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join CryptoCasino today and experience the future of online gambling. 
            Sign up in seconds and get instant access to all our games.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold rounded-full text-lg transition-colors transform hover:scale-105 inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;