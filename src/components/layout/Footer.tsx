import React from "react";
import { SOCIAL_LINKS } from "../../utils/constants";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react";

const iconComponents = {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Wesley Balbino</h3>
            <p className="text-gray-400 max-w-md">
              Information Systems student passionate about creating innovative
              solutions with modern web technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map((link) => {
                const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Wesley Balbino. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;