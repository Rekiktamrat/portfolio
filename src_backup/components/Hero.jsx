import React from 'react';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
              <img 
                src="/photo.jpg"// Replace with your image
                alt="Rekik Tamrat" 
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-gray-300 hover:bg-gray-50"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};