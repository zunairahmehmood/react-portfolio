import SkillBadge from "../components/SkillBadge";
import { FiGithub } from "react-icons/fi";
import { RxLinkedinLogo } from "react-icons/rx";

function About() {
  const skills = [
    "React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git", "Firebase", "Figma"
  ];
  const onlinePresence = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zunaira-mehmood-b01492353/",
      icon: <RxLinkedinLogo />
    },
    {
      name: "GitHub",
      url: "https://github.com/zunairahmehmood",
      icon: <FiGithub />
    },
  ]

  return (
    <section className="min-h-screen px-6 pt-32 pb-16 bg-navy text-grayLight animate-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan">About Me</h2>
        <p className="text-grayLight/80 text-lg md:text-xl mb-12">
          I’m a frontend developer passionate about building interactive, user-friendly, 
          and visually stunning web applications. I love turning designs into working code 
          and learning new technologies every day.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-cyan">My Skills</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-cyan mt-16">My Online Presence</h3>

        <div className="flex flex-wrap justify-center gap-6">
          {onlinePresence.map((platform, index) => (
            <a 
              key={index}
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-cyan px-4 py-2 rounded-lg 
                        hover:bg-cyan hover:text-navy transition-all shadow-[0_0_15px_#00f5ff40]"
            >
              <span>{platform.icon}</span>
              <span className="font-medium">{platform.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
export default About;