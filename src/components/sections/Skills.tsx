import React from "react";
import { SKILLS } from "../../utils/constants";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { CodeIcon, LayoutIcon, DatabaseIcon, ServerIcon, GithubIcon } from "lucide-react";

const iconComponents = {
  CodeIcon,
  LayoutIcon,
  DatabaseIcon,
  ServerIcon,
  GithubIcon,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and tools I work with"
          center
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((skill) => {
            const IconComponent = iconComponents[skill.icon as keyof typeof iconComponents];
            
            return (
              <Card key={skill.name} className="flex items-center p-6">
                <div className="mr-4 text-blue-600 dark:text-blue-400">
                  <IconComponent size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <ProgressBar value={skill.level} label="" showPercentage={false} />
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center py-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Frontend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creating responsive and interactive user interfaces with modern
              frameworks and libraries.
            </p>
          </Card>
          
          <Card className="text-center py-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Backend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building robust server-side applications and APIs with Node.js
              and databases.
            </p>
          </Card>
          
          <Card className="text-center py-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Project Management
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Planning, organizing, and executing projects with efficient
              methodologies and tools.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;