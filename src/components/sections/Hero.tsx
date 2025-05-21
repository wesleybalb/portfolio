import React, { useEffect, useState } from "react";
import { GithubIcon } from "lucide-react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Information Systems Student";
  const typingSpeed = 100;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <p className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Wesley Balbino
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 h-8">
              {typedText}
              <span className="inline-block w-1 h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-blink"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Passionate about creating innovative solutions with modern web technologies.
              Currently building a collaborative university platform to enhance the academic experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button
                href="#projects"
                as="a"
                variant="primary"
                size="lg"
              >
                View My Work
              </Button>
              <Button
                href="https://github.com/wesleybalb"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                icon={<GithubIcon size={18} />}
              >
                GitHub Profile
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">WB</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700 dark:text-gray-300"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;