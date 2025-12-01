import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jfif";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

const projects = [
  { 
    title: "Real-Time Chat App",
    description: "A real-time chat app using React and Firebase with secure login and live Firestore messages.",
    image: project1,
    live: "https://react-chat-app-orpin.vercel.app",
    github: "https://github.com/zunairahmehmood/react-chat-app.git"
  },
  { 
    title: "Interactive Quiz App",
    description: "A React quiz app with login, quiz flow, result screen, and localStorage data saving.",
    image: project2,
    live: "https://quiz-app-lovat-beta-14.vercel.app/",
    github: "https://github.com/zunairahmehmood/quiz-app.git"
  },
  { 
    title: "Simple Notes App",
    description: "A minimal notes app built with React using state management to create, edit, and delete notes instantly.",
    image: project3,
    live: "https://react-notes-app-chi-one.vercel.app/",
    github: "https://github.com/zunairahmehmood/react-notes-app.git"
  },
  { 
    title: "API-Based Product Cards",
    description: "API-driven product cards website built with vanilla HTML, CSS, and JS, featuring a clean and responsive design.",
    image: project4,
    live: "https://products-cards-api-based.vercel.app/",
    github: "https://github.com/zunairahmehmood/Products-Cards-API-Based.git"
  },
  { 
    title: "Student Information Card App",
    description: "JavaScript app with Firebase Auth for secure student info registration and login.",
    image: project5,
    live: "https://firebase-ass-01.vercel.app/",
    github: "https://github.com/zunairahmehmood/firebase-ass-01.git"
  },
  { 
    title: "Interactive JavaScript Game ",
    description: "A small interactive game using HTML, CSS, and JS with event listeners for user interaction.",
    image: project6,
    live: "https://game-psi-pearl.vercel.app/",
    github: "https://github.com/zunairahmehmood/game.git"
  },
  { 
    title: "JavaScript Calculator",
    description: "A simple JS calculator with basic operations and a responsive design.",
    image: project7,
    live: "https://calculator-zeta-orcin-27.vercel.app/",
    github: "https://github.com/zunairahmehmood/calculator.git"
  },
  { 
    title: "Simple AI Chatbot",
    description: "A JavaScript-based chatbot with real-time responses and interactive UI.",
    image: project8,
    live: "https://chatbot-dun-five-42.vercel.app/",
    github: "https://github.com/zunairahmehmood/chatbot.git"
  },
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProjects = projects.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <section className="min-h-screen px-6 pt-32 pb-16 bg-navy text-grayLight animate-fade-in">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan">Projects</h2>
        <p className="text-grayLight/80 text-lg md:text-xl">
          Some of my recent projects. Click for live demo or GitHub.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
        {currentProjects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-cyan text-navy' : 'border-cyan text-cyan'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
export default Projects;