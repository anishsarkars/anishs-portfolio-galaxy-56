
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const frontendSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'WordPress', level: 75 },
];

const backendSkills = [
  { name: 'ASP.NET', level: 75 },
  { name: 'C#', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'SQL', level: 80 },
  { name: 'Microsoft SQL Server', level: 70 },
];

const otherSkills = [
  { name: 'Web Development', level: 85 },
  { name: 'Software Engineering', level: 80 },
  { name: 'Teaching', level: 90 },
  { name: 'Problem Solving', level: 85 },
  { name: 'Project Management', level: 70 },
];

const languages = [
  { name: 'English', level: 'Professional Working' },
  { name: 'Hindi', level: 'Native/Bilingual' },
];

const SkillBar = ({ name, level }: { name: string, level: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <Card className="minimal-card p-6">
      <Tabs defaultValue="frontend" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-md">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="frontend" className="space-y-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="backend" className="space-y-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="other" className="space-y-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillBar name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="languages" className="space-y-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <motion.div 
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border border-border rounded-lg"
              >
                <h3 className="font-medium">{language.name}</h3>
                <p className="text-sm text-muted-foreground">{language.level}</p>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default SkillsSection;
