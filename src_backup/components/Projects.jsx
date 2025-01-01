import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
const projects = [
  {
    title: 'EduNest',
    description: 'A comprehensive full-stack eLearning platform built with the MERN stack. Features include course management, video streaming, progress tracking, and interactive assignments.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/rekiktamrat/edunest',
    demo: 'https://edunest-demo.vercel.app',
    featured: true
  },
  {
    title: 'HakimHub',
    description: 'AI-powered doctor search platform with intelligent chatbot assistance and advanced filtering capabilities. Built with Next.js frontend and Flask backend for AI processing.',
    technologies: ['Next.js', 'Flask', 'Python', 'AI/ML'],
    github: 'https://github.com/rekiktamrat/hakimhub',
    demo: 'https://hakimhub.vercel.app',
    featured: true
  },
  {
    title: 'Prime Property Sales & Rental System',
    description: 'Complete admin dashboard for property management with sales and rental tracking, client management, and analytics. Built with React frontend and Laravel backend.',
    technologies: ['React', 'Laravel', 'PHP', 'MySQL'],
    github: 'https://github.com/rekiktamrat/prime-property',
    demo: 'https://prime-property-demo.com',
    featured: false
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`card-gradient border-border/50 hover:border-primary/50 transition-smooth shadow-card group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="group-hover:text-primary transition-smooth">{project.title}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;