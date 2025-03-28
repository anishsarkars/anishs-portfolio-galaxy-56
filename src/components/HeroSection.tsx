
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section className="pt-32 pb-20 md:min-h-screen md:flex md:items-center">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl">
                Hi, I'm Anish Sarkar
              </h1>
              <p className="text-xl text-muted-foreground">
                I build digital products, brands, and experiences.
              </p>
              <p className="text-muted-foreground max-w-md">
                Software Engineer currently working at Intervue.io. Passionate about creating clean, efficient code and solving complex problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button className="px-6" onClick={onContactClick}>
                Contact me
              </Button>
              <Button variant="outline" className="gap-2">
                Resume <Download size={16} />
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://github.com/anishsarkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/anishsarkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:anish.sarkar@example.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Avatar className="w-72 h-72 border-4 border-white shadow-md">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEIMH7w08xgMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722688073206?e=1747872000&v=beta&t=0iLC78lpBCNgNH0C_pD0oLxWrZ3JDWc1K8D2I4HIdBw" 
                alt="Anish Sarkar" 
                className="object-cover"
              />
            </Avatar>
          </motion.div>
        </div>
        
        <motion.div 
          className="hidden md:flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-muted-foreground flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
