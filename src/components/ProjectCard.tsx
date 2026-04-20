import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  url: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  subtitle,
  category,
  description,
  highlights,
  url,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="group border border-gray-700 hover:border-orange-500 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-orange-500/10">
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-orange-500 uppercase">{category}</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-orange-500 transition">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm mb-4">{subtitle}</p>

      {/* Description */}
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      {/* Highlights */}
      <ul className="space-y-2 mb-6">
        {highlights.slice(0, 3).map((highlight, idx) => (
          <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-400 transition font-medium text-sm flex items-center gap-2 group"
      >
        View Project
        <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.8 4.2L19.8 10.2M19.8 10.2H9M19.8 10.2v10" />
        </svg>
      </Link>
    </div>
  );
}
