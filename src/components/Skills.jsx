import React from 'react';
import { Award, Code, Server, Database, Wrench } from 'lucide-react';
import { IconName } from 'lucide-react';
import { AnimatedCard } from './ui/AnimatedCard';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Laravel', icon: '🔴' },
      { name: 'Flask', icon: '🌶️' },
    ]
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
    ]
  },
  {
    title: 'Tools & Others',
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: 'Git', icon: '📚' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'API Design', icon: '🔗' },
    ]
  }
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    badge: '☁️'
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    badge: '⚛️'
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2022',
    badge: '🏆'
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: '2022',
    badge: '🐍'
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in modern web technologies and frameworks to build robust, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-gradient p-6 rounded-xl border border-border/50 shadow-card"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skills in Category */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-smooth group"
                    style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.05}s` }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-bounce">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="card-gradient p-6 rounded-xl border border-border/50 text-center group hover:border-primary/50 transition-smooth shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-bounce">
                {cert.badge}
              </div>
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-primary font-medium">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};