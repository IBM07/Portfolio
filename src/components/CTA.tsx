import { resumeData } from "@/data/resume";

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">04</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Let's Build</h2>
          </div>
          <div className="w-12 h-1 bg-orange-500"></div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Have a project? I want to hear it.
          </h3>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you're building a SaaS, need AI integration, or have a unique challenge — let's collaborate and ship
            something exceptional.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:ibrahimaejaz@gmail.com"
            className="inline-block px-10 py-4 bg-orange-500 text-black hover:bg-orange-600 transition font-bold text-lg"
          >
            START A COLLABORATION
          </a>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div>
              <p className="text-gray-400 text-sm font-mono uppercase mb-2">Email</p>
              <a href="mailto:ibrahimaejaz@gmail.com" className="text-white hover:text-orange-500 transition text-lg">
                {resumeData.personal.email}
              </a>
            </div>

            {/* Phone */}
            <div>
              <p className="text-gray-400 text-sm font-mono uppercase mb-2">Phone</p>
              <a href={`tel:${resumeData.personal.phone}`} className="text-white hover:text-orange-500 transition text-lg">
                {resumeData.personal.phone}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex gap-6 justify-center md:justify-start">
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition font-mono text-sm"
            >
              LinkedIn Profile
            </a>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition font-mono text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
