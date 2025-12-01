function SkillBadge({ skill }) {

  return (
    <span className="px-4 py-2 border border-cyan rounded-lg text-cyan font-medium 
      hover:bg-cyan hover:text-navy transition-shadow shadow-[0_0_10px_#00f5ff50] cursor-default">
      {skill}
    </span>
  );

}
export default SkillBadge;