function ProjectCard({ title, description, image, live, github }) {

  return (
    <div className="bg-navy border border-cyan/40 rounded-lg p-4 hover:shadow-[0_0_20px_#00f5ff50] transition">
      <img src={image} alt={title} className="rounded-md mb-4 w-full object-cover"/>
      <h3 className="text-cyan text-xl font-semibold mb-2">{title}</h3>
      <p className="text-grayLight/80 mb-4">{description}</p>
      <div className="flex gap-4">
        <a href={live} target="_blank" className="text-cyan hover:underline">Live</a>
        <a href={github} target="_blank" className="text-cyan hover:underline">GitHub</a>
      </div>
    </div>
  );
  
}
export default ProjectCard;