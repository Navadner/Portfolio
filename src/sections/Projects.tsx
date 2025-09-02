import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Calendar, Users, Star } from 'lucide-react';

interface Project {
  title: string;
  duration: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'ongoing' | 'planned';
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'AgroAid (Crop & Pest Detection)',
      duration: 'Jan 2025 – May 2025',
      description: 'An AI-powered system for crop disease detection and multilingual pest identification.',
      fullDescription: 'AgroAid is a comprehensive agricultural assistance tool. It uses Convolutional Neural Networks (CNN) for accurate image-based crop disease detection. Additionally, it features a text-based pest identification system using Naïve Bayes and BERT models, with multilingual support powered by LLaMA to assist a diverse range of farmers.',
      technologies: ['CNN', 'BERT', 'LLaMA', 'FastAPI', 'Python'],
      highlights: [
        'Advanced crop disease detection using CNNs.',
        'Text-based pest identification with Naïve Bayes & BERT.',
        'Multilingual support for broader accessibility using LLaMA.',
        'High-performance backend served via FastAPI.',
      ],
      github: 'https://github.com/your-github/AgroAid', // Replace with your actual link
      status: 'planned',
    },
    {
      title: 'Story Generator',
      duration: 'Completed',
      description: 'A full-stack application that generates creative stories from user-provided keywords and genres.',
      fullDescription: 'This application leverages the power of the GPT-2 model to generate unique stories based on user inputs like keywords and genre. Built with a React frontend and a Django backend, it allows users to save their generated stories to a PostgreSQL database and retrieve them later for editing and refinement.',
      technologies: ['React', 'Django', 'PostgreSQL', 'GPT-2', 'Python'],
      highlights: [
        'Generates creative stories from keywords and genre.',
        'Full-stack architecture with a decoupled frontend and backend.',
        'Persistent storage allowing users to save and edit stories.',
        'Integration with the powerful GPT-2 language model.',
      ],
      github: 'https://github.com/your-github/Story-Generator', // Replace with your actual link
      status: 'completed',
    },
    {
      title: 'Season Spot (Real-time via Gemini API)',
      duration: 'Completed',
      description: 'A real-time seasonal insights application powered by the Gemini API for dynamic data.',
      fullDescription: 'Season Spot is an innovative web application that provides real-time seasonal insights. It utilizes the Google Gemini API to fetch and display dynamic data, offering users up-to-date information. The application is built with a modern stack featuring a React frontend and a Flask backend.',
      technologies: ['React', 'Flask', 'Gemini API', 'Python'],
      highlights: [
        'Powered by the Gemini API for real-time data.',
        'Delivers dynamic seasonal insights to users.',
        'Built with a responsive React frontend and a robust Flask backend.',
      ],
      github: 'https://github.com/your-github/Season-Spot', // Replace with your actual link
      demo: 'https://your-demo-link.com', // Replace with your actual link
      status: 'completed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'ongoing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'planned': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <Star size={16} />;
      case 'ongoing': return <Users size={16} />;
      case 'planned': return <Calendar size={16} />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of projects showcasing my skills in AI, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3"><Calendar size={16} />{project.duration}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>{getStatusIcon(project.status)}{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">{tech}</span>
                  ))}
                </div>
              </div>

              {expandedProject === index && (
                <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{project.fullDescription}</p>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Highlights:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>{highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-6 bg-gray-100 dark:bg-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"><Github size={16} />GitHub</a>)}
                  {project.demo && (<a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"><ExternalLink size={16} />Demo</a>)}
                </div>
                <button onClick={() => setExpandedProject(expandedProject === index ? null : index)} className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm">
                  {expandedProject === index ? (<>Less <ChevronUp size={16} /></>) : (<>More <ChevronDown size={16} /></>)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;