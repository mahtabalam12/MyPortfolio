interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  return (
    <div className="group mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-display text-foreground font-medium group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-muted-foreground text-sm">{percentage}%</span>
      </div>
      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{ 
            width: `${percentage}%`,
            animationDelay: `${delay}ms`
          }}
        />
        {/* Animated shine effect */}
        <div 
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
        />
      </div>
    </div>
  );
};

export default SkillBar;
