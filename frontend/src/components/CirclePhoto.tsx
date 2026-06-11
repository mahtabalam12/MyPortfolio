interface CirclePhotoProps {
  imageSrc: string;
  alt?: string;
}

const CirclePhoto = ({ imageSrc, alt = "Profile photo" }: CirclePhotoProps) => {
  return (
    <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] flex items-center justify-center filter drop-shadow-[0_0_35px_rgba(6,182,212,0.7)] group">
      
      {/* Background neon-glowing circle frame */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-cyan-500 to-blue-500 p-[6px] transition-transform duration-500 group-hover:scale-105 rounded-full">
        {/* Inner photo container */}
        <div className="w-full h-full bg-[#1e232d] overflow-hidden relative rounded-full">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-115 filter brightness-[0.95] group-hover:brightness-105"
          />
          
          {/* Subtle cyan overlay that fades in on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Decorative underlay reflection */}
      <div className="absolute inset-4 bg-cyan-400/20 blur-3xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
    </div>
  );
};

export default CirclePhoto;
