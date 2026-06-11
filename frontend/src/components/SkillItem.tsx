import { LucideIcon } from "lucide-react";

interface SkillItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const SkillItem = ({ icon: Icon, title, description, index }: SkillItemProps) => {
  return (
    <div 
      className="group flex items-start gap-6 py-8 border-b border-border/50 last:border-b-0 hover:border-primary/30 transition-colors"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon with animated ring */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-500">
          <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        {/* Decorative dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
          {description}
        </p>
      </div>
      
      {/* Number indicator */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border/50 text-muted-foreground font-display text-lg group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
        0{index + 1}
      </div>
    </div>
  );
};

export default SkillItem;
