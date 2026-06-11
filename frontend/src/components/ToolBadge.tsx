interface ToolBadgeProps {
  name: string;
}

const ToolBadge = ({ name }: ToolBadgeProps) => {
  return (
    <span className="px-5 py-2.5 rounded-full border border-border bg-secondary/50 text-foreground text-sm font-medium hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default">
      {name}
    </span>
  );
};

export default ToolBadge;
