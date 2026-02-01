interface CirclePhotoProps {
  imageSrc: string;
  alt?: string;
}

const CirclePhoto = ({ imageSrc, alt = "Profile photo" }: CirclePhotoProps) => {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
      {/* Subtle glowing background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-xl animate-pulse opacity-60" />

      {/* Decorative outer ring */}
      <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-spin-slow" />

      {/* Main photo container with hover effects */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Floating accent dots */}
      <div className="absolute -top-2 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-80" />
      <div className="absolute -right-2 top-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-2 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />

      {/* Status indicator */}
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
    </div>
  );
};

export default CirclePhoto;
