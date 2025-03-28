
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    title: 'Intern',
    company: 'Intervue.io',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGOndysiojHog/company-logo_400_400/company-logo_400_400/0/1651668752177/intervue_io_logo?e=1747872000&v=beta&t=66NXZqHnkV5FQEYNUOfUu-IAqJnr2wdWzVRLoqg5XoM',
    period: 'Present',
    location: 'California, United States',
    description: 'Working as a Software Engineer Intern, focusing on developing and enhancing web applications.',
    link: 'https://intervue.io'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Defence Research and Development Laboratory (DRDL) - DRDO',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQHr0-w-4HF1ow/company-logo_400_400/company-logo_400_400/0/1630576665362?e=1747872000&v=beta&t=s8hqwF95Mm2N_xdb-4HzGJ2a_k0Rji-wk9O0MWOU0t8',
    period: 'Past',
    location: 'Hyderabad, Telangana, India',
    description: 'Contributed to software engineering projects within the defence research sector.',
    link: 'https://www.drdo.gov.in/labs-and-establishments/defence-research-development-laboratory-drdl'
  },
  {
    title: 'Programming Instructor',
    company: 'BrightChamps',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGtOa_HhRydCQ/company-logo_400_400-alternative/company-logo_400_400-alternative/0/1630521477745/brightchamps_logo?e=1747872000&v=beta&t=yG_tvy2vQU77C6CuxsCPmWfthFzKQvBwioQQ6t-kabg',
    period: 'Past',
    location: 'East Region, Singapore',
    description: 'Taught programming concepts and skills to students, fostering technical education and creativity.',
    link: 'https://brightchamps.com'
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Code Karo Yaaro',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEos3Cf7OW1ew/company-logo_400_400/company-logo_400_400/0/1630490732591/codekaroyaaro_logo?e=1747872000&v=beta&t=iC2Az46Tqdqz7rgrf8FN2Ya1t8sWmk5toXd8Ua9yn28',
    period: 'Past',
    location: 'India',
    description: 'Developed frontend components and interfaces for web applications as part of the intern team.',
    link: '#'
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="minimal-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-52 bg-secondary/50 flex items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center p-1 shadow-sm">
                  <img 
                    src={experience.logo} 
                    alt={experience.company} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="p-6 md:flex-1">
                <div className="md:flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium">{experience.title}</h3>
                    <p className="text-base">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar size={14} />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {experience.location}
                </p>
                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>
                {experience.link !== '#' && (
                  <a 
                    href={experience.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                  >
                    Visit Website <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
