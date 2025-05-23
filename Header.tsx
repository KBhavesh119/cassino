import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wallet as WalletIcon, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const handleWalletClick = (type: string) => {
    // Here you would implement the actual wallet connection logic
    console.log(`Connecting to ${type} wallet...`);
    setWalletOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 text-transparent bg-clip-text">
            CryptoCasino
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/games" className="text-white hover:text-amber-400 transition-colors">
            Games
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-amber-400 transition-colors">
                Dashboard
              </Link>
              <Link to="/referral" className="text-white hover:text-amber-400 transition-colors">
                Referral
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setWalletOpen(!walletOpen)}
                  className="flex items-center text-white px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
                >
                  <WalletIcon size={18} className="mr-2" />
                  <span>Connect Wallet</span>
                  <ChevronDown size={16} className={`ml-1 transition-transform ${walletOpen ? 'rotate-180' : ''}`} />
                </button>
                {walletOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-700 backdrop-blur-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-700">
                      <p className="text-amber-400 font-medium">Connect Your Wallet</p>
                      <p className="text-sm text-gray-400 mt-1">Choose your preferred crypto wallet</p>
                    </div>
                    <div className="p-2">
                      <button 
                        onClick={() => handleWalletClick('bitcoin')}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center group"
                      >
                        <span className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mr-3">
                          <span className="text-xl text-white">₿</span>
                        </span>
                        <div>
                          <p className="font-medium text-white">Bitcoin Wallet</p>
                          <p className="text-xs text-gray-400">Connect your BTC wallet</p>
                        </div>
                      </button>
                      
                      <button 
                        onClick={() => handleWalletClick('ethereum')}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center group"
                      >
                        <span className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-3">
                          <span className="text-xl text-white">Ξ</span>
                        </span>
                        <div>
                          <p className="font-medium text-white">Ethereum Wallet</p>
                          <p className="text-xs text-gray-400">Connect your ETH wallet</p>
                        </div>
                      </button>
                      
                      <button 
                        onClick={() => handleWalletClick('tether')}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center group"
                      >
                        <span className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-full mr-3">
                          <span className="text-xl text-white">₮</span>
                        </span>
                        <div>
                          <p className="font-medium text-white">Tether Wallet</p>
                          <p className="text-xs text-gray-400">Connect your USDT wallet</p>
                        </div>
                      </button>
                    </div>
                    <div className="p-3 bg-gray-750 text-xs text-gray-400 text-center">
                      Need help? Check our wallet connection guide
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={logout}
                className="text-white hover:text-amber-400 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/register" 
                className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-medium transition-colors transform hover:scale-105"
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 rounded-full border border-amber-500 text-amber-400 hover:bg-amber-500/10 transition-colors"
              >
                Login
              </Link>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              to="/games" 
              className="text-white hover:text-amber-400 py-2 transition-colors"
            >
              Games
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-white hover:text-amber-400 py-2 transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/referral" 
                  className="text-white hover:text-amber-400 py-2 transition-colors"
                >
                  Referral
                </Link>
                <button 
                  className="flex items-center justify-between text-white py-2 transition-colors"
                  onClick={() => setWalletOpen(!walletOpen)}
                >
                  <span className="flex items-center">
                    <WalletIcon size={18} className="mr-2" />
                    Connect Wallet
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${walletOpen ? 'rotate-180' : ''}`} />
                </button>
                {walletOpen && (
                  <div className="pl-6 space-y-3 py-2 border-l border-gray-700">
                    <button 
                      onClick={() => handleWalletClick('bitcoin')}
                      className="w-full text-left py-2 text-white hover:text-amber-400 transition-colors flex items-center"
                    >
                      <span className="mr-2 text-lg">₿</span> Bitcoin Wallet
                    </button>
                    <button 
                      onClick={() => handleWalletClick('ethereum')}
                      className="w-full text-left py-2 text-white hover:text-amber-400 transition-colors flex items-center"
                    >
                      <span className="mr-2 text-lg">Ξ</span> Ethereum Wallet
                    </button>
                    <button 
                      onClick={() => handleWalletClick('tether')}
                      className="w-full text-left py-2 text-white hover:text-amber-400 transition-colors flex items-center"
                    >
                      <span className="mr-2 text-lg">₮</span> Tether Wallet
                    </button>
                  </div>
                )}
                <button
                  onClick={logout}
                  className="text-white hover:text-amber-400 py-2 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/register" 
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-medium transition-colors inline-block text-center"
                >
                  Register
                </Link>
                <Link 
                  to="/login" 
                  className="px-4 py-2 rounded-full border border-amber-500 text-amber-400 hover:bg-amber-500/10 transition-colors inline-block text-center"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;