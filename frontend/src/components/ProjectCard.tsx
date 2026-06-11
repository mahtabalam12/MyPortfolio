import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) => {
  const isDrive = liveUrl?.includes("drive.google.com");

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover-lift group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={isDrive ? "Google Drive Folder" : "Live Demo"}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
            >
              {isDrive ? <Folder className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
