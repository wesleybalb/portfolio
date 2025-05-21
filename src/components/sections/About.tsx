import React from "react";
import { ABOUT_TEXT } from "../../utils/constants";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { CodeIcon, BookOpenIcon, UsersIcon, GraduationCapIcon } from "lucide-react";

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {ABOUT_TEXT}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <GraduationCapIcon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Information Systems Student</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <CodeIcon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Web Developer</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <UsersIcon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Team Collaborator</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <BookOpenIcon size={20} className="text-blue-600 dark:text-blue-400" />
                <span>Continuous Learner</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center py-8">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <p className="text-gray-700 dark:text-gray-300">Years of Experience</p>
            </Card>
            <Card className="text-center py-8">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
              <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
            </Card>
            <Card className="text-center py-8">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
              <p className="text-gray-700 dark:text-gray-300">Technologies</p>
            </Card>
            <Card className="text-center py-8">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">100%</div>
              <p className="text-gray-700 dark:text-gray-300">Client Satisfaction</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;