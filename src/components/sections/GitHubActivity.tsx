import React, { useState, useEffect } from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { GithubIcon, CodeIcon, StarIcon, GitForkIcon } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GitHubActivity: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("https://api.github.com/users/wesleybalb/repos");
        
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const data = await response.json();
        setRepositories(data.slice(0, 4)); // Display only the first 4 repositories
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setError("Failed to load GitHub repositories. Please try again later.");
        setLoading(false);
        
        // Set mock data for demonstration purposes
        setRepositories([
          {
            id: 1,
            name: "university-platform",
            description: "A collaborative platform for university students",
            html_url: "https://github.com/wesleybalb/university-platform",
            stargazers_count: 12,
            forks_count: 5,
            language: "JavaScript",
          },
          {
            id: 2,
            name: "portfolio",
            description: "My personal portfolio website",
            html_url: "https://github.com/wesleybalb/portfolio",
            stargazers_count: 8,
            forks_count: 3,
            language: "TypeScript",
          },
          {
            id: 3,
            name: "study-scheduler",
            description: "An app to help students organize their study schedule",
            html_url: "https://github.com/wesleybalb/study-scheduler",
            stargazers_count: 15,
            forks_count: 7,
            language: "React",
          },
          {
            id: 4,
            name: "task-manager",
            description: "A simple task manager application",
            html_url: "https://github.com/wesleybalb/task-manager",
            stargazers_count: 6,
            forks_count: 2,
            language: "HTML",
          },
        ]);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="GitHub Activity"
          subtitle="Check out my latest projects and contributions on GitHub"
          center
        />
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <Card className="text-center py-12">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <Button
              as="a"
              href="https://github.com/wesleybalb"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={<GithubIcon size={18} />}
            >
              Visit GitHub Profile
            </Button>
          </Card>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              {repositories.map((repo) => (
                <Card key={repo.id} className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <GithubIcon size={24} className="text-gray-700 dark:text-gray-300 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {repo.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {repo.description || "No description available"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-auto">
                    {repo.language && (
                      <div className="flex items-center mr-4">
                        <CodeIcon size={16} className="text-blue-600 dark:text-blue-400 mr-1" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {repo.language}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mr-4">
                      <StarIcon size={16} className="text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {repo.stargazers_count}
                      </span>
                    </div>
                    
                    <div className="flex items-center mr-4">
                      <GitForkIcon size={16} className="text-purple-500 mr-1" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {repo.forks_count}
                      </span>
                    </div>
                    
                    <Button
                      as="a"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className="ml-auto"
                    >
                      View Repo
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button
                as="a"
                href="https://github.com/wesleybalb"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<GithubIcon size={18} />}
              >
                See More on GitHub
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity;