
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import { useInView } from '@/hooks/use-in-view';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const aboutInView = useInView(aboutRef);
  const experienceInView = useInView(experienceRef);
  const skillsInView = useInView(skillsRef);
  const projectsInView = useInView(projectsRef);
  const contactInView = useInView(contactRef);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onAboutClick={() => scrollToSection(aboutRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
        activeSection={
          contactInView ? 'contact' :
          projectsInView ? 'projects' :
          skillsInView ? 'skills' :
          experienceInView ? 'experience' :
          aboutInView ? 'about' : ''
        }
      />
      
      {/* Hero Section */}
      <section ref={heroRef} className="flex items-center justify-center min-h-screen bg-background pt-16">
        <div className="container max-w-screen-xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full md:w-1/2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-2">
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Hello, I'm
                </motion.p>
                <motion.h1 
                  className="text-gradient font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Anish Sarkar
                </motion.h1>
                <motion.h2 
                  className="text-2xl md:text-3xl text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Software Engineer & Web Developer
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-base md:text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Building innovative digital experiences with a focus on clean, efficient code.
                Currently working at Intervue.io as a Software Engineer Intern.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <Button className="gap-2" onClick={() => scrollToSection(contactRef)}>
                  Contact Me <Mail size={16} />
                </Button>
                <Button variant="outline" className="gap-2">
                  Resume <Download size={16} />
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/anishsarkar" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/in/anishsarkar" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <motion.div 
                  className="relative"
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"
                  }}
                >
                  <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white/10 shadow-xl">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQEIMH7w08xgMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722688073206?e=1747872000&v=beta&t=0iLC78lpBCNgNH0C_pD0oLxWrZ3JDWc1K8D2I4HIdBw" 
                      alt="Anish Sarkar" 
                      className="object-cover"
                    />
                  </Avatar>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col gap-2 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <p className="text-sm">Scroll down</p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-secondary/50">
        <div className="container max-w-screen-xl px-4 md:px-8">
          <motion.div 
            className={`space-y-12 ${aboutInView ? 'reveal active' : 'reveal'}`}
          >
            <div className="text-center space-y-4">
              <h2 className="section-title mx-auto inline-block">About Me</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                I'm a Software Engineer with a passion for creating exceptional web experiences.
                My journey in tech spans from frontend development to programming instruction.
              </p>
            </div>
            
            <Card className="glass-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-medium">Who I Am</h3>
                  <p className="text-muted-foreground">
                    I'm a Bachelor of Technology graduate in Information Technology with a strong foundation 
                    in web development and software engineering. I'm currently interning at Intervue.io, where 
                    I'm expanding my skills in building modern web applications.
                  </p>
                  <p className="text-muted-foreground">
                    My diverse experiences include working at the Defence Research and Development Laboratory 
                    and teaching programming at BrightChamps. I'm passionate about creating clean, efficient code 
                    and sharing my knowledge with others.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>California, United States</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail size={16} className="text-primary" />
                      <span>anish.sarkar@example.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-medium">Education & Certifications</h3>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="font-medium">Bachelor of Technology in Information Technology</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <img 
                          src="https://media.licdn.com/dms/image/v2/C4E0BAQEAVRB3i7rHHg/company-logo_400_400/company-logo_400_400/0/1631319417069?e=1747872000&v=beta&t=7rSeZLdnW91i14m-l-RAUCNiZEPuPCOOf5sqLh3Robg" 
                          alt="RGPV" 
                          className="w-4 h-4 rounded-full"
                        />
                        Rajiv Gandhi Prodyogiki Vishwavidyalaya
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Diploma in Computer Science</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <img 
                          src="https://media.licdn.com/dms/image/v2/D4D0BAQG0djzOOKs0Zg/company-logo_400_400/company-logo_400_400/0/1691335702892/govt_polytechnic_college_logo?e=1747872000&v=beta&t=6QVwdMo_pgBsqL3Y5ZuYrDwLkU-TyJQ1TmgLmmyl4gE" 
                          alt="Govt. Polytechnic" 
                          className="w-4 h-4 rounded-full"
                        />
                        Govt. Polytechnic College
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium pt-4">Certifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQEBQ0ItUQd9GA/company-logo_400_400/company-logo_400_400/0/1662036891199/devtown_in_logo?e=1747872000&v=beta&t=6LTXEhP9y8ux2Yxrz4gdh4u5hrtOvACILDNZR1GvVa4" 
                        alt="DevTown" 
                        className="w-5 h-5 rounded-full"
                      />
                      <span className="text-sm">Portfolio Web Project (DevTown)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_400_400/company-logo_400_400/0/1631311446380?e=1747872000&v=beta&t=qelxSJjkqyd1AnStkz-DbHxJCJRESawbtLLAP3yh38g" 
                        alt="Google" 
                        className="w-5 h-5 rounded-full"
                      />
                      <span className="text-sm">Fundamentals of Digital Marketing (Google)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" 
                        alt="Microsoft" 
                        className="w-5 h-5 rounded-full"
                      />
                      <span className="text-sm">Note Taking App Project (Microsoft Learn)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-20">
        <div className="container max-w-screen-xl px-4 md:px-8">
          <motion.div 
            className={`space-y-12 ${experienceInView ? 'reveal active' : 'reveal'}`}
          >
            <div className="text-center space-y-4">
              <h2 className="section-title mx-auto inline-block">Experience</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My professional journey across various roles and organizations.
              </p>
            </div>
            
            <ExperienceTimeline />
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 bg-secondary/50">
        <div className="container max-w-screen-xl px-4 md:px-8">
          <motion.div 
            className={`space-y-12 ${skillsInView ? 'reveal active' : 'reveal'}`}
          >
            <div className="text-center space-y-4">
              <h2 className="section-title mx-auto inline-block">Skills</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Technologies and tools I've worked with and mastered over time.
              </p>
            </div>
            
            <SkillsSection />
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20">
        <div className="container max-w-screen-xl px-4 md:px-8">
          <motion.div 
            className={`space-y-12 ${projectsInView ? 'reveal active' : 'reveal'}`}
          >
            <div className="text-center space-y-4">
              <h2 className="section-title mx-auto inline-block">Projects</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Some of my recent work and personal projects.
              </p>
            </div>
            
            <ProjectsSection />
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-secondary/50">
        <div className="container max-w-screen-xl px-4 md:px-8">
          <motion.div 
            className={`space-y-12 ${contactInView ? 'reveal active' : 'reveal'}`}
          >
            <div className="text-center space-y-4">
              <h2 className="section-title mx-auto inline-block">Contact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Interested in working together? Let's connect!
              </p>
            </div>
            
            <Card className="glass-card p-8 max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Mail className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">anish.sarkar@example.com</p>
                  </div>
                  <div>
                    <Linkedin className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/anishsarkar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      linkedin.com/in/anishsarkar
                    </a>
                  </div>
                  <div>
                    <Github className="mx-auto mb-2 text-primary" size={24} />
                    <p className="text-sm font-medium">GitHub</p>
                    <a 
                      href="https://github.com/anishsarkar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      github.com/anishsarkar
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
