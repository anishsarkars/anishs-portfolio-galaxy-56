
import React, { useState, useEffect } from 'react';
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
            ? 'py-3 bg-background/90 backdrop-blur-sm border-b border-border/40' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <div className="text-lg font-medium">
            Anish Sarkar
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={link.action}
                className={`nav-link ${activeSection === link.id ? 'text-foreground' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </Button>
        </div>
      </header>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
          <div className="container-custom py-5 flex justify-between items-center">
            <div className="text-lg font-medium">
              Anish Sarkar
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => {
                  link.action();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl ${activeSection === link.id ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
