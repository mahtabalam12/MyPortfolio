import { useState } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, ArrowDown, Send, Phone, Cpu, Radio, Wifi, Zap, CircuitBoard, Smartphone, Download, Building2, Calendar, Award, GraduationCap, School, Code, Database, Globe, Server, Monitor, Layers, Microchip } from "lucide-react";
import Navbar from "@/components/Navbar";
import CirclePhoto from "@/components/CirclePhoto";
import SkillBar from "@/components/SkillBar";
import ToolBadge from "@/components/ToolBadge";
import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/mahtab-photo.jpg";
import project1 from "@/assets/apnamedicare.png";
import project2 from "@/assets/project-2.jpg";
import project5 from "@/assets/project-5.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      toast.error("Could not connect to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const softwareSkills = [
    { icon: Code, name: "Java Programming", level: 90, color: "from-orange-500 to-red-500" },
    { icon: Layers, name: "DSA", level: 85, color: "from-blue-500 to-cyan-500" },
    { icon: Globe, name: "HTML, CSS, JS", level: 95, color: "from-yellow-500 to-orange-500" },
    { icon: Monitor, name: "Bootstrap & React", level: 88, color: "from-cyan-500 to-blue-500" },
    { icon: Server, name: "Node.js & Express.js", level: 82, color: "from-green-500 to-emerald-500" },
    { icon: Database, name: "SQL & MongoDB", level: 80, color: "from-purple-500 to-pink-500" },
  ];

  const hardwareSkills = [
    { icon: Cpu, name: "Verilog", level: 88, color: "from-rose-500 to-pink-500" },
    { icon: Microchip, name: "FPGA", level: 85, color: "from-blue-500 to-indigo-500" },
    { icon: Zap, name: "MATLAB", level: 85, color: "from-amber-500 to-orange-500" },
    { icon: CircuitBoard, name: "Proteus", level: 90, color: "from-emerald-500 to-teal-500" },
    { icon: Radio, name: "Digital Electronics", level: 92, color: "from-violet-500 to-purple-500" },
    { icon: CircuitBoard, name: "PCB Design", level: 60, color: "from-green-500 to-emerald-500" },
  ];

  const projects = [
    {
      title: "ApnaMedicare",
      description: "A premium full-stack healthcare platform bridging the gap between patients, doctors, and pharmacies. Features patient dashboards, appointment scheduling, digital vault prescriptions, and a pharmacy e-commerce store.",
      image: project1,
      tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://apnamedicare-frontend-8qio.onrender.com/",
      githubUrl: "https://github.com/mahtabalam12/apnamedicare",
    },
    {
      title: "Zerodha Clone",
      description: "A Zerodha clone built using only frontend technologies, focusing on replicating the clean trading interface, landing page, and dashboard.",
      image: project2,
      tags: ["React", "HTML", "CSS", "Frontend"],
      liveUrl: "https://zerodha-clone-frontend-cwex.onrender.com",
      githubUrl: "https://github.com/mahtabalam12/Zerodha-Clone/tree/main/frontend",
    },
    {
      title: "Elevator Controller System",
      description: "Designed an Elevator Controller using Verilog HDL. Implemented floor control, direction logic, and basic safety features. Verified the design using a testbench simulation.",
      image: project5,
      tags: ["Verilog", "FPGA", "ModelSim", "Digital Design"],
      liveUrl: "https://drive.google.com/drive/folders/16Ue_titAA9kwrEfaf8rMBeZOtakpGRuG",
      githubUrl: "https://github.com/mahtabalam12/Elevator-controller-Project",
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mahtabalam12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/md-mahtab-alam-563a2a27a/", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Enhanced Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-wave-expand" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-wave-expand" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/3 via-transparent to-accent/3 blur-3xl animate-pulse-glow" />

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full animate-float-gem" />
          <div className="absolute top-40 right-32 w-6 h-6 bg-accent/20 rounded-lg rotate-45 animate-float-gem" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-primary/30 rounded-full animate-float-gem" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-accent/25 rounded-lg animate-float-gem" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float-gem" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Enhanced Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 animate-fade-up text-white">Hello, It's Me</h3>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-4 animate-fade-up-delay-1 text-white tracking-wide">
                Md Mahtab Alam
              </h1>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-up-delay-2 text-white">
                And I'm a <span className="text-primary animate-pulse-glow">Full Stack Developer</span>
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed animate-fade-up-delay-2">
                Full Stack Web Developer building scalable web applications with React & Java.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex gap-4 mb-8 justify-center lg:justify-start animate-fade-up-delay-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="animate-fade-up-delay-3 flex justify-center lg:justify-start">
                <a
                  href="/src/assets/mahtabresume.pdf"
                  download="Md_Mahtab_Alam_Resume.pdf"
                  className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300 inline-flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] group"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Enhanced Circle Photo */}
            <div className="flex-shrink-0 animate-fade-in hover:scale-105 transition-transform duration-500">
              <CirclePhoto imageSrc={profilePhoto} alt="Md Mahtab Alam - Web Developer" />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hover:scale-110 transition-transform duration-300">
          <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
            <span className="text-xs font-medium group-hover:animate-pulse-glow">Scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/5 to-red-500/5 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-primary font-medium text-sm">Technical Expertise</p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of software development expertise and hardware engineering knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Software Skills - Vertical Cards with Progress Bars */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-background animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Software Skills
                  </h3>
                  <p className="text-muted-foreground text-xs">Programming & Web Development</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {softwareSkills.map((skill, index) => {
                  const circumference = 2 * Math.PI * 35;
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                  
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border border-primary/30 hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                        <div className="relative w-16 h-16 mb-1.5">
                          {/* Circular Progress Background */}
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className="text-secondary/40"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke="url(#gradientSoftware)"
                              strokeWidth="2.5"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              className="transition-all duration-1000 ease-out group-hover:stroke-primary"
                            />
                            <defs>
                              <linearGradient id="gradientSoftware" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                                <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* Center percentage */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-foreground">{skill.level}%</span>
                          </div>
                        </div>
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md mb-1.5`}>
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-foreground text-center text-sm group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hardware Skills - Grid Cards with Circular Progress */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-background animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Hardware Skills
                  </h3>
                  <p className="text-muted-foreground text-xs">Electronics & Communication</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {hardwareSkills.map((skill, index) => {
                  const circumference = 2 * Math.PI * 35;
                  const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                  
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-br from-secondary/40 to-secondary/20 border border-accent/30 hover:border-accent/60 hover:bg-gradient-to-br hover:from-accent/10 hover:to-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105">
                        <div className="relative w-16 h-16 mb-1.5">
                          {/* Circular Progress Background */}
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              className="text-secondary/40"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="35"
                              fill="none"
                              stroke="url(#gradient)"
                              strokeWidth="2.5"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              className="transition-all duration-1000 ease-out group-hover:stroke-accent"
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgb(249, 115, 22)" />
                                <stop offset="100%" stopColor="rgb(239, 68, 68)" />
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* Center percentage */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-foreground">{skill.level}%</span>
                          </div>
                        </div>
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-md mb-1.5`}>
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-foreground text-center text-sm group-hover:text-accent transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">My Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>




      {/* Internships Section */}
      <section id="internships" className="py-32 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-gradient-to-l from-purple-500/20 to-pink-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Premium Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 mb-6 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <p className="text-blue-300 font-semibold text-sm">Professional Journey</p>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up-delay-1">
              My <span className="text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Internships</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-up-delay-2">
              Building practical experience across diverse technologies and industries
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              {/* Total Internships */}
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-500/30 hover:border-blue-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 animate-fade-up-delay-1">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">6</p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Internships</p>
                </div>
              </div>
              
              {/* Experience Duration */}
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-purple-500/15 to-purple-600/5 border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 animate-fade-up-delay-2">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">10+</p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Months</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="group relative p-6 rounded-xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/30 hover:border-cyan-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 animate-fade-up-delay-3">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5+</p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Tech Stacks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Internship 1 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 group animate-fade-up-delay-1">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-primary/10 via-secondary/80 to-accent/10 rounded-2xl p-4 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-primary/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/30 to-red-600/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <span className="text-xs text-red-400 font-semibold bg-red-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Industrial Training</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        East Central Railway Hajipur (ECR)
                      </h3>
                      <p className="text-base text-primary font-medium mb-2">Railway Signaling and Control Systems</p>
                      <p className="text-muted-foreground text-sm">Completed industrial training on Railway Signaling and Control Systems at East Central Railway, gaining practical exposure to track circuits, axle counters, point machines, automatic block working, and OFC-based railway communication used for safe train operations</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-red-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">01-Jun - 30-Jun 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             {/* Internship 2 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 group animate-fade-up-delay-2">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-accent/10 via-secondary/80 to-primary/10 rounded-2xl p-4 md:p-6 border border-accent/30 hover:border-accent/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-accent/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <span className="text-xs text-orange-400 font-semibold bg-orange-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Web Development</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        Tamizan Skills
                      </h3>
                      <p className="text-base text-accent font-medium mb-2">Web Development Intern</p>
                      <p className="text-muted-foreground text-sm">Worked on building responsive and interactive websites using HTML, CSS, JavaScript, and React. Focused on UI design, page optimization, and improving user experience.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-orange-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">10-Jun - 10-Jul 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Internship 3 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 group animate-fade-up-delay-3">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-green-500/10 via-secondary/80 to-blue-500/10 rounded-2xl p-4 md:p-6 border border-green-500/30 hover:border-green-500/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-green-500/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <span className="text-xs text-green-400 font-semibold bg-green-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">VLSI Design</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        Maven Silicon
                      </h3>
                      <p className="text-base text-primary font-medium mb-2">VLSI SoC Design using Verilog HDL</p>
                      <p className="text-muted-foreground text-sm">Learned VLSI SoC design fundamentals using Verilog HDL, including digital logic design and simulation basics.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-green-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">01-Sept - 30-Sept 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Internship 4 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 group animate-fade-up-delay-4">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-blue-500/10 via-secondary/80 to-cyan-500/10 rounded-2xl p-4 md:p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-blue-500/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Java Development</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        Happieloop Technology Pvt. Ltd.
                      </h3>
                      <p className="text-base text-primary font-medium mb-2">Java Intern</p>
                      <p className="text-muted-foreground text-sm">Worked with Java focusing on OOP concepts like Encapsulation, Inheritance, and Polymorphism. Developed and tested core program modules.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-blue-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">31-Oct - 30-Dec 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           


            {/* Internship 5 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 group animate-fade-up-delay-5">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-purple-500/10 via-secondary/80 to-pink-500/10 rounded-2xl p-4 md:p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs text-purple-400 font-semibold bg-purple-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Robotics & Drones</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        Techprolabz: School of Robotics
                      </h3>
                      <p className="text-base text-accent font-medium mb-2">Drones and Robotics Intern</p>
                      <p className="text-muted-foreground text-sm">Completed an internship in Drones and Robotics, gaining hands-on experience with drone systems, sensors, and basic robotics technologies, which strengthened my practical knowledge of electronics, automation, and real-world problem-solving skills.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-purple-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">10-Dec 2025 - 10-Jan 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship 6 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 group animate-fade-up-delay-1">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-teal-500/10 via-secondary/80 to-cyan-500/10 rounded-2xl p-4 md:p-6 border border-teal-500/30 hover:border-teal-500/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-teal-500/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <span className="text-xs text-teal-400 font-semibold bg-teal-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Web Development</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        3Skills
                      </h3>
                      <p className="text-base text-primary font-medium mb-2">Web Development Intern</p>
                      <p className="text-muted-foreground text-sm">Developed responsive web applications using modern technologies including React, HTML, CSS, and JavaScript. Focused on creating user-friendly interfaces, optimizing performance, and implementing best practices in web development.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-teal-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">05-Jan - 05-Mar 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>



      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 text-lg">Achievements</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              My <span className="text-gradient">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Certificate 1 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">Apna College</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-blue-400 transition-colors">
                Full Stack Web Development
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Skilled in building complete web applications using modern frontend and backend technologies, with hands-on experience in databases, APIs, and responsive design.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: September-2025</span>
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-blue-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>
 {/* Certificate 2*/}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-green-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full">Apna College</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-green-400 transition-colors">
                Java Pragramming
              </h3>
              <p className="text-muted-foreground text-sm mb-3"> Learned Java Programming from Apna College, covering fundamentals of Java, object-oriented programming, and coding practices.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: April 2025</span>
                <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-green-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>
{/* Certificate 3 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-orange-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1 rounded-full">NPTEL</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-orange-400 transition-colors">
                Database Management System
              </h3>
              <p className="text-muted-foreground text-sm mb-3">NPTEL certified in Database Management Systems with strong understanding of SQL, relational models, normalization, transactions, and database design concepts.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: November 2025</span>
                <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-orange-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-purple-400 font-medium bg-purple-500/10 px-3 py-1 rounded-full">Oracle</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-purple-400 transition-colors">
                Oracle Cloud Infrastructures Certified AI Foundations Associate
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Earned Oracle Cloud Infrastructure AI Foundations certification, demonstrating strong fundamentals in artificial intelligence, machine learning, and cloud-based AI solutions.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: 31-Oct 2025</span>
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-purple-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>

            
           
            {/* Certificate 5 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-pink-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-pink-400 font-medium bg-pink-500/10 px-3 py-1 rounded-full">Cisco</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-pink-400 transition-colors">
                CCNA:Introduction to Networks
              </h3>
              <p className="text-muted-foreground text-sm mb-3"> Earned Cisco CCNA: Introduction to Networks certification, demonstrating knowledge of network fundamentals, protocols, IP addressing, and troubleshooting basics.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: May 2025</span>
                <div className="w-6 h-6 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-pink-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>

            {/* Certificate 6 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full">Accenture</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-cyan-400 transition-colors">
                Software Engineering Job Simulation
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Completed Accenture Software Engineering Job Simulation, gaining practical experience in software development workflows, problem-solving, debugging, and real-world engineering tasks.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: June 2025</span>
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-cyan-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>

{/* Certificate 7*/}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-pink-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-pink-400 font-medium bg-pink-500/10 px-3 py-1 rounded-full">NIELIT</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-pink-400 transition-colors">
                VLSI
              </h3>
              <p className="text-muted-foreground text-sm mb-3"> Learned VLSI fundamentals through NIELIT certification, covering IC design basics, CMOS technology, and digital circuit concepts.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: August 2025</span>
                <div className="w-6 h-6 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-pink-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>
{/* Certificate 8 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-orange-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1 rounded-full">Techprolabz:School of Robotics</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-orange-400 transition-colors">
                Drones and Robotics
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Successfully completed Drones and Robotics program at Techprolabz, developing practical skills in drone systems, robotics design, and real-world technical problem solving.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: Jan 2026</span>
                <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-orange-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>
{/* Certificate 9 */}
            <div className="group relative p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-400" />
              </div>
              <div className="mb-3">
                <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">GEC Vaishali</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-blue-400 transition-colors">
                Basic MATLAB
              </h3>
              <p className="text-muted-foreground text-sm mb-3">Learned Basic MATLAB concepts including matrix operations, basic programming, and data visualization.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: -2024</span>
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-blue-400 text-xs font-bold">Γ£ô</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4 text-lg">Academic Journey</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              My <span className="text-gradient">Education</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* BTech */}
            <div className="group relative animate-fade-up-delay-1">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/50 rounded-full" />
              <div className="bg-gradient-to-br from-primary/10 via-secondary/80 to-accent/10 rounded-2xl p-4 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-primary/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Bachelor's Degree</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        B.Tech in Electronics & Communication
                      </h3>
                      <p className="text-base text-accent font-medium mb-2">Government Engineering College Vaishali</p>
                      <p className="text-muted-foreground text-sm">Electronics Engineering student with strong fundamentals in Digital Electronics, Microelectronics, Verilog HDL, Java programming, and growing interest in software development.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="text-sm font-bold text-foreground">2022 - 2026</p>
                    </div>
                    <div className="text-right bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                      <p className="text-xs text-muted-foreground">CGPA</p>
                      <p className="text-lg font-bold text-primary">8.42</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 12th */}
            <div className="group relative animate-fade-up-delay-2">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent/50 rounded-full" />
              <div className="bg-gradient-to-br from-accent/10 via-secondary/80 to-primary/10 rounded-2xl p-4 md:p-6 border border-accent/30 hover:border-accent/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-accent/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <School className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Senior Secondary</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        Class 12th - Science (PCM)
                      </h3>
                      <p className="text-base text-primary font-medium mb-1">S R K Goenka College Sitamarhi</p>
                      <p className="text-xs text-accent font-medium mb-2">Board: BSEB</p>
                      <p className="text-muted-foreground text-sm">Physics, Chemistry, Mathematics with optional Biology.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-accent/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Year</p>
                      <p className="text-sm font-bold text-foreground">2019 - 2021</p>
                    </div>
                    <div className="text-right bg-gradient-to-r from-accent/20 to-primary/20 px-3 py-1.5 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                      <p className="text-xs text-muted-foreground">Percentage</p>
                      <p className="text-lg font-bold text-accent">80%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="group relative animate-fade-up-delay-3">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full" />
              <div className="bg-gradient-to-br from-green-500/10 via-secondary/80 to-blue-500/10 rounded-2xl p-4 md:p-6 border border-green-500/30 hover:border-green-500/60 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 ml-4 md:ml-8 group-hover:shadow-green-500/20">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <School className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <span className="text-xs text-green-400 font-semibold bg-green-500/10 px-3 py-1 rounded-full mb-2 inline-block animate-pulse-glow">Secondary</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                        Class 10th - All Subjects
                      </h3>
                      <p className="text-base text-green-400 font-medium mb-1">Hellens School Sitamarhi</p>
                      <p className="text-xs text-blue-400 font-medium mb-2">Board: CBSE</p>
                      <p className="text-muted-foreground text-sm">Excelled in Science and Mathematics. Active participant in science exhibitions and olympiads.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-3 py-1.5 rounded-xl border border-border hover:border-green-500/50 transition-colors duration-300">
                      <p className="text-xs text-muted-foreground">Year</p>
                      <p className="text-sm font-bold text-foreground">2018 - 2019</p>
                    </div>
                    <div className="text-right bg-gradient-to-r from-green-500/20 to-blue-500/20 px-3 py-1.5 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                      <p className="text-xs text-muted-foreground">Percentage</p>
                      <p className="text-lg font-bold text-green-400">86.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-4">Get In Touch</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's work <span className="text-gradient">together</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="+91 0123456789"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; 2026 Md Mahtab Alam. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
