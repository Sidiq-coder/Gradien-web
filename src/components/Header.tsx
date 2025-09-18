import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import gradienLogo from 'figma:asset/ae495aabe004ee9e291840853315a29e5347ac5a.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    if (!isHome) {
      // Navigate to home with hash so browser scrolls to the section
      window.location.href = `/${elementId}`; // elementId already includes leading '#'
      return;
    }
    const element = document.querySelector(elementId);
    if (element) {
      const headerHeight = 80; // Approximate header height
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
    smoothScrollTo(href);
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
            onClick={(e) => handleNavClick(e as any, '#hero')}
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
            {navItems.map((item, index) => (
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button size="sm" className="bg-[#0d7377] hover:bg-[#0a5d61] text-white text-sm xl:text-base px-4 xl:px-6">
                Bergabung
              </Button>
            </motion.div>
          </nav>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-3">
            <select 
              className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:border-[#0d7377]"
              onChange={(e) => {
                if (e.target.value) {
                  smoothScrollTo(e.target.value);
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
            <Button size="sm" className="bg-[#0d7377] hover:bg-[#0a5d61] text-white text-sm">
              Bergabung
            </Button>
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
              {navItems.map((item, index) => (
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
              <Button className="w-full bg-[#0d7377] hover:bg-[#0a5d61] text-white">
                Bergabung
              </Button>
            </motion.div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}