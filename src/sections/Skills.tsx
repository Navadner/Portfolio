import React from 'react';
import { Code, Database, Brain, Cloud, BarChart2, GitMerge } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C++'],
      color: 'blue',
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: ['TensorFlow', 'Keras', 'Neural Networks', 'Computer Vision', 'NLP', 'Model Deployment'],
      color: 'purple',
    },
    {
      title: 'Full Stack & Frameworks',
      icon: Database,
      skills: ['Flask', 'React.js', 'Node.js', 'Express.js', 'HTML/CSS/JS', 'Bootstrap'],
      color: 'teal',
    },
    {
      title: 'Databases & Data',
      icon: BarChart2,
      skills: ['SQL', 'MySQL', 'MongoDB', 'Pandas', 'NumPy', 'Power BI'],
      color: 'orange',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS (S3, EC2, Lambda, RDS)', 'Git', 'GitHub', 'Linux'],
      color: 'sky',
    },
    {
      title: 'Core CS Concepts',
      icon: GitMerge,
      skills: ['Data Structures & Algorithms', 'Computer Networks', 'DBMS', 'Operating Systems'],
      color: 'rose',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', icon: 'text-blue-600 dark:text-blue-400', skill: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200' },
      purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', icon: 'text-purple-600 dark:text-purple-400', skill: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200' },
      teal: { bg: 'bg-teal-50 dark:bg-teal-900/20', border: 'border-teal-200 dark:border-teal-800', icon: 'text-teal-600 dark:text-teal-400', skill: 'bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200' },
      orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', icon: 'text-orange-600 dark:text-orange-400', skill: 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200' },
      sky: { bg: 'bg-sky-50 dark:bg-sky-900/20', border: 'border-sky-200 dark:border-sky-800', icon: 'text-sky-600 dark:text-sky-400', skill: 'bg-sky-100 dark:bg-sky-800 text-sky-800 dark:text-sky-200' },
      rose: { bg: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-800', icon: 'text-rose-600 dark:text-rose-400', skill: 'bg-rose-100 dark:bg-rose-800 text-rose-800 dark:text-rose-200' },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My versatile toolkit for developing robust and intelligent applications from end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.title}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg ${colorClasses.skill}`}>
                    <IconComponent size={24} className={colorClasses.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${colorClasses.skill} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;