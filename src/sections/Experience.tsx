import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional development path.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>
          
          <div className="space-y-16">
            {/* Education */}
            <div className="relative flex items-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 mt-1.5 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 ring-8 ring-gray-50 dark:ring-gray-800">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="w-full bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">2022 – 2026</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Tech in Artificial Intelligence & Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Malla Reddy University, Hyderabad (CGPA: 8.96)</p>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['DSA', 'Computer Networks', 'Cloud Computing', 'Web Development', 'DBMS', 'OS'].map(course => (
                    <span key={course} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">{course}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="relative flex items-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 mt-1.5 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 ring-8 ring-gray-50 dark:ring-gray-800">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="w-full bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Mar 2023 – Jul 2023</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Machine Learning Intern</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Barola Technologies (Remote)</p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    Applied ML models on structured datasets, improving prediction accuracy by 18%.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    Built optimized data pipelines, which reduced data preprocessing time by 35%.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    Conducted model training and evaluation, reducing overall reporting time by 50%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;