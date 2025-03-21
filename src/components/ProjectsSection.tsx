
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Note Taking App',
    description: 'A modern note-taking application built with React and JavaScript, featuring cloud sync and rich text formatting.',
    image: 'https://images.unsplash.com/photo-1610447847416-0e8e6ab339ba?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website created as part of the DevTown certification, showcasing design and development skills.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: '#',
    codeUrl: '#',
    featured: true,
  },
  {
    title: 'E-commerce Template',
    description: 'A customizable e-commerce website template with product listings, shopping cart, and checkout functionality.',
    image: 'https://images.unsplash.com/photo-1593014117986-d5eb21e945e0?q=80&w=2070&auto=format&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
  },
  {
    title: 'Task Manager',
    description: 'A task management application with features for creating, editing, and organizing tasks by priority and due date.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    tags: ['React', 'Redux', 'CSS Modules'],
    liveUrl: '#',
    codeUrl: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const loadMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="relative"
          >
            <Card className="overflow-hidden glass-card h-full flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary border-none">Featured</Badge>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>
                
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Live
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-8">
          <Button onClick={loadMoreProjects} variant="outline">
            Load More Projects
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
