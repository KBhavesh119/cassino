import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Shield, Award, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 text-transparent bg-clip-text">
                CryptoCasino
              </span>
            </div>
            <p className="mb-4 text-sm">
              The premier crypto gambling platform offering secure and exciting casino games 
              with cryptocurrencies. Play, win, and withdraw with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Games</h3>
            <ul className="space-y-2">
              <li><Link to="/games" className="hover:text-amber-400 transition-colors">All Games</Link></li>
              <li><Link to="/games?category=slots" className="hover:text-amber-400 transition-colors">Slots</Link></li>
              <li><Link to="/games?category=cards" className="hover:text-amber-400 transition-colors">Card Games</Link></li>
              <li><Link to="/games?category=table" className="hover:text-amber-400 transition-colors">Table Games</Link></li>
              <li><Link to="/games?category=other" className="hover:text-amber-400 transition-colors">Specialty Games</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/register" className="hover:text-amber-400 transition-colors">Register</Link></li>
              <li><Link to="/login" className="hover:text-amber-400 transition-colors">Login</Link></li>
              <li><Link to="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/referral" className="hover:text-amber-400 transition-colors">Referral Program</Link></li>
              <li><Link to="/support" className="hover:text-amber-400 transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Our Guarantees</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Shield size={18} className="text-green-500 mr-2 mt-0.5" />
                <span>Provably fair gambling system</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-blue-500 mr-2 mt-0.5" />
                <span>Fast deposits & withdrawals</span>
              </li>
              <li className="flex items-start">
                <Award size={18} className="text-amber-500 mr-2 mt-0.5" />
                <span>VIP rewards for loyal players</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} CryptoCasino. All rights reserved.
          </p>
          <p>
            <Link to="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            {' • '}
            <Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            {' • '}
            <Link to="/responsible-gambling" className="hover:text-amber-400 transition-colors">Responsible Gambling</Link>
            {' • '}
            <Link to="/Piyush_Sharma" className="hover:text-amber-400 transition-colors">Piyush Sharma</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;