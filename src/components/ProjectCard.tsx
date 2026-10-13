interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  links: ProjectLink[];
  technologies: string[];
}

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.8 4.2L19.8 10.2M19.8 10.2H9M19.8 10.2v10" />
  </svg>
);

export default function ProjectCard({
  title,
  subtitle,
  category,
  description,
  highlights,
  links,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="project-card group/card border border-gray-700 p-6">
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-orange-500 uppercase">{category}</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif font-bold text-white mb-2 transition-colors duration-300 group-hover/card:text-orange-500">
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

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-press inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
              label === "Live"
                ? "bg-orange-500 border-orange-500 text-black hover:bg-orange-400 hover:border-orange-400"
                : "border-gray-600 text-gray-200 hover:border-orange-500 hover:text-orange-400"
            }`}
          >
            {label === "GitHub" ? <GithubIcon /> : null}
            {label}
            {label === "Live" ? <ExternalIcon /> : null}
          </a>
        ))}
      </div>
    </div>
  );
}
