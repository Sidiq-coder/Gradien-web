import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import gradienLogo from 'figma:asset/ae495aabe004ee9e291840853315a29e5347ac5a.png';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: 'home' | 'login' | 'register' | 'dashboard' | 'articles' | 'shop') => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#about' },
    { label: 'Program', href: '#programs' },
    { label: 'Artikel', href: '#articles' },
    { label: 'E-commerce', href: '#ecommerce' },
    { label: 'Tim', href: '#team' },
    { label: 'Kontak', href: '#contact' },
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      // Delay scroll to allow page transition
      setTimeout(() => smoothScrollTo(href), 100);
    } else {
      smoothScrollTo(href);
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleLogin = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };

  const handleRegister = () => {
    if (onNavigate) {
      onNavigate('register');
    }
  };

  const handleDashboard = () => {
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const handleLogout = () => {
    logout();
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group min-w-0"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={gradienLogo} 
                alt="Gradien Unila Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 truncate">
                Gradien Unila
              </span>
              <span className="text-xs sm:text-xs lg:text-sm text-[#0d7377] tracking-wide hidden sm:block group-hover:text-[#14a085] transition-colors truncate">
                Gerakan Digital Ekosistem Nusantara
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {currentPage === 'home' && navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-700 hover:text-[#0d7377] transition-all duration-300 relative group cursor-pointer text-sm xl:text-base py-2"
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#0d7377]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </motion.a>
            ))}
            
            {/* Authentication Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-3"
            >
              {user ? (
                <>
                  {/* Dashboard Button */}
                  <Button 
                    variant="outline"
                    size="sm" 
                    onClick={handleDashboard}
                    className="border-[#0d7377] text-[#0d7377] hover:bg-[#e6f7f7] text-sm xl:text-base px-4 xl:px-6"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  
                  {/* User Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span className="hidden xl:inline">{user.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={handleDashboard}>
                        <Settings className="w-4 h-4 mr-2" />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline"
                    size="sm" 
                    onClick={handleLogin}
                    className="border-[#0d7377] text-[#0d7377] hover:bg-[#e6f7f7] text-sm xl:text-base px-4 xl:px-6"
                  >
                    Masuk
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={handleRegister}
                    className="bg-[#0d7377] hover:bg-[#0a5d61] text-white text-sm xl:text-base px-4 xl:px-6"
                  >
                    Daftar
                  </Button>
                </div>
              )}
            </motion.div>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-3">
            {currentPage === 'home' && (
              <select 
                className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:border-[#0d7377]"
                onChange={(e) => {
                  if (e.target.value) {
                    const event = { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>;
                    handleNavClick(event, e.target.value);
                    e.target.value = '';
                  }
                }}
              >
                <option value="">Menu</option>
                {navItems.map((item) => (
                  <option key={item.label} value={item.href}>
                    {item.label}
                  </option>
                ))}
              </select>
            )}
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleDashboard}>
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleLogin}>
                  Masuk
                </Button>
                <Button size="sm" onClick={handleRegister} className="bg-[#0d7377] hover:bg-[#0a5d61] text-white">
                  Daftar
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-3 border-t"
          >
            <div className="space-y-1">
              {currentPage === 'home' && navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-3 px-4 text-gray-700 hover:text-[#0d7377] hover:bg-[#e6f7f7] rounded-lg transition-all duration-300 cursor-pointer text-base"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-3 mt-3 border-t"
            >
              {user ? (
                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm text-gray-600">
                    Selamat datang, {user.name}
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full justify-start" 
                    onClick={handleDashboard}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50" 
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Button 
                    variant="outline"
                    className="w-full" 
                    onClick={handleLogin}
                  >
                    Masuk
                  </Button>
                  <Button 
                    className="w-full bg-[#0d7377] hover:bg-[#0a5d61] text-white" 
                    onClick={handleRegister}
                  >
                    Daftar
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}