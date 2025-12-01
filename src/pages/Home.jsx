import image from "../../public/profile.png";
import projects from "./Projects.jsx";
function Home() {

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-navy px-6 pt-24 md:pt-20 pb-12 animate-fade-in">

      <img
        className="w-40 h-40
        md:w-56 md:h-56 
        rounded-full
        mb-7
        mx-auto 
        shadow-[0_0_20px_#00f5ff50] 
        hover:shadow-[0_0_30px_#00f5ff80] 
        transition-shadow duration-500 
        object-cover"
        src={image}
        alt=""
      />

      <h1 className="text-5xl md:text-7xl font-bold text-grayLight mb-4">
        Hi, I’m <span className="text-cyan">Zunaira!</span>
      </h1>

      <p className="text-grayLight/80 max-w-2xl text-lg md:text-xl leading-relaxed">
        A passionate Frontend Developer crafting modern, interactive, and user-friendly web applications
        using <span className="text-cyan">React</span> & <span className="text-cyan">Tailwind CSS</span>.
      </p>

      <a
        href={projects}
        className="mt-8 px-8 py-3 text-lg border border-cyan rounded-lg text-cyan 
        hover:bg-cyan hover:text-navy transition shadow-[0_0_20px_#00f5ff80]"
      >
        View My Work
      </a>
    </section>
  );
}
export default Home;