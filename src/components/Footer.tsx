export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Copyright */}
        <p className="text-gray-500 text-sm">© {currentYear} Mohammed Ibrahim Aejaz. Built for the last mile.</p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="text-gray-500 hover:text-orange-500 transition">
            Work
          </a>
          <a href="#skills" className="text-gray-500 hover:text-orange-500 transition">
            Skills
          </a>
          <a href="#about" className="text-gray-500 hover:text-orange-500 transition">
            About
          </a>
          <a href="#contact" className="text-gray-500 hover:text-orange-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
