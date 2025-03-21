
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onAboutClick: () => void;
  onExperienceClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({
  onAboutClick,
  onExperienceClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'About', action: onAboutClick, id: 'about' },
    { name: 'Experience', action: onExperienceClick, id: 'experience' },
    { name: 'Skills', action: onSkillsClick, id: 'skills' },
    { name: 'Projects', action: onProjectsClick, id: 'projects' },
    { name: 'Contact', action: onContactClick, id: 'contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-background/80 backdrop-blur-md shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-xl font-bold text-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Anish Sarkar
            </motion.div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={link.action}
                  className={`nav-link ${activeSection === link.id ? 'active text-primary' : 'text-foreground'}`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background z-50 flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <motion.div 
                className="text-xl font-bold text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Anish Sarkar
              </motion.div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </Button>
            </div>
            
            <motion.nav 
              className="flex flex-col items-center justify-center flex-1 space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.button 
                  key={link.id}
                  onClick={() => {
                    link.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-medium ${activeSection === link.id ? 'text-primary' : 'text-foreground'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
