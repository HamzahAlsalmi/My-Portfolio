import React from "react";
import Project from "./Project"; // Import the reusable Project component

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Project 1"
          imageUrl="project1.jpg"
          liveUrl="git@github.com:aawllms/Whats-in-my-fridge-v1-dev.git"
          repoUrl="https://github.com/aawllms/Whats-in-my-fridge-v1-dev"
        />
        <Project
          title="Project 2"
          imageUrl="project2.jpg"
          liveUrl="git@github.com:HamzahAlsalmi/employee-tracker.git"
          repoUrl="https://github.com/HamzahAlsalmi/employee-tracker"
        />
        {/* Add more projects */}
      </div>
    </section>
  );
};

export default Portfolio;
