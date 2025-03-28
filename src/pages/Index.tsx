
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ClientsSection from '@/components/ClientsSection';
import { useInView } from '@/hooks/use-in-view';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Mail, Send } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
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
    <div className="min-h-screen">
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
      
      <HeroSection onContactClick={() => scrollToSection(contactRef)} />
      
      <ClientsSection />
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 subtle-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="section-title mx-auto inline-block">About Me</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg">
                I'm a Software Engineer with a passion for creating exceptional web experiences.
                My journey in tech spans from frontend development to programming instruction.
              </p>
              
              <p>
                I'm a Bachelor of Technology graduate in Information Technology with a strong foundation 
                in web development and software engineering. I'm currently interning at Intervue.io, where 
                I'm expanding my skills in building modern web applications.
              </p>
              
              <p>
                My diverse experiences include working at the Defence Research and Development Laboratory 
                and teaching programming at BrightChamps. I'm passionate about creating clean, efficient code 
                and sharing my knowledge with others.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <Card className="p-6 minimal-card">
                  <h3 className="text-lg font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="font-medium">Bachelor of Technology in Information Technology</p>
                      <p className="text-sm text-muted-foreground">
                        Rajiv Gandhi Prodyogiki Vishwavidyalaya
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Diploma in Computer Science</p>
                      <p className="text-sm text-muted-foreground">
                        Govt. Polytechnic College
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 minimal-card">
                  <h3 className="text-lg font-medium mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="font-medium">Portfolio Web Project</p>
                      <p className="text-sm text-muted-foreground">DevTown</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Fundamentals of Digital Marketing</p>
                      <p className="text-sm text-muted-foreground">Google</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Note Taking App Project</p>
                      <p className="text-sm text-muted-foreground">Microsoft Learn</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="section-title mx-auto inline-block">Experience</h2>
            </div>
            
            <ExperienceTimeline />
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 subtle-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="section-title mx-auto inline-block">Skills</h2>
            </div>
            
            <SkillsSection />
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="section-title mx-auto inline-block">Projects</h2>
            </div>
            
            <ProjectsSection />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 subtle-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="section-title mx-auto inline-block">Let's Work Together</h2>
              <p className="text-muted-foreground mt-4">
                Tell me about your next project
              </p>
            </div>
            
            <Card className="minimal-card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="your@email.com"
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
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <Button className="w-full gap-2">
                  Send Message <Send size={16} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
