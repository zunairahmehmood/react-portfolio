import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/90 backdrop-blur-md z-50">
      <div className="flex justify-between items-center py-4 px-8">

        <h1 className="text-cyan text-2xl font-bold tracking-wide">Zunaira Mehmood</h1>

        <ul className="hidden md:flex gap-8 text-grayLight text-lg">
          <li><Link to="/" className="hover:text-cyan transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan transition">About</Link></li>
          <li><Link to="/projects" className="hover:text-cyan transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-cyan transition">Contact</Link></li>
        </ul>

        <button
          className="md:hidden text-cyan text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col bg-navy border-t border-cyan/40 text-grayLight px-8 py-4 gap-4">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </ul>
      )}
    </nav>
  );
}
export default Navbar;