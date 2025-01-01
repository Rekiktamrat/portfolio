import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button'; // Changed from @/components/ui/button

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold hero-gradient bg-clip-text text-transparent mb-2">
              Rekik Tamrat
            </h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/rekiktamrat" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/rekiktamrat" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:rekik.tamrat@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Rekik Tamrat. Made with{' '}
            <Heart className="w-4 h-4 text-red-500" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>   
  );
};
