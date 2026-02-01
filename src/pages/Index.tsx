import { Github, Linkedin, Twitter, Mail, ArrowDown, Send, Phone, Cpu, Radio, Wifi, Zap, CircuitBoard, Smartphone, Download, Building2, Calendar, Award, GraduationCap, School, Code, Database, Globe, Server, Monitor, Layers, Microchip } from "lucide-react";
import Navbar from "@/components/Navbar";
import CirclePhoto from "@/components/CirclePhoto";
import SkillBar from "@/components/SkillBar";
import ToolBadge from "@/components/ToolBadge";
import ProjectCard from "@/components/ProjectCard";
import profilePhoto from "@/assets/mahtab-photo.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
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
    { icon: Zap, name: "MATLAB", level: 85, color: "from-amber-500 to-orange-500" },
    { icon: CircuitBoard, name: "Proteus", level: 90, color: "from-emerald-500 to-teal-500" },
    { icon: Radio, name: "Digital Electronics", level: 92, color: "from-violet-500 to-purple-500" },
  ];

  const eceSkills = [
    { icon:  Microchip, name: "Digital Electronics", desc: "" },
    { icon: Radio, name: "Communication Systems", desc: "" },
    { icon: Wifi, name: "Analog Electronics", desc: "" },
    { icon: Cpu, name: "Microcontrollers", desc: "" },
    { icon: CircuitBoard, name: "Circut Design", desc: "" },
    { icon: Smartphone, name: "Verilog", desc: "" },
  ];

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time updates.",
      image: project1,
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "IoT Home Automation",
      description: "Smart home system with ESP32, real-time monitoring, and mobile app control for lights, AC, and security.",
      image: project2,
      tags: ["ESP32", "React Native", "MQTT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Monitoring System",
      description: "Real-time weather station using Arduino sensors with data visualization dashboard and alerts.",
      image: project3,
      tags: ["Arduino", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Ellevator Controller System",
      description: "Designed an Elevator Controller using Verilog HDL. Implemented floor control, direction logic, and basic safety features. Verified the design using a testbench simulation.",
      image: project1,
      tags: ["Verilog", "FPGA", "Modelsim"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Student Management System",
      description: "Full-stack web application for managing student records, attendance, and grade tracking.",
      image: project2,
      tags: ["React", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Traffic Light Controller",
      description: "Intelligent traffic management system using microcontrollers with adaptive timing based on traffic density.",
      image: project3,
      tags: ["Arduino", "Proteus", "C++"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mahtabalam12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/md-mahtab-alam-563a2a27a/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-primary font-medium mb-4 animate-fade-up">Hello, I'm</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1">
                <span className="text-foreground inline-block">
                  {"Md Mahtab Alam".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-letter-bounce hover:text-primary transition-all duration-300 cursor-pointer"
                      style={{
                        animationDelay: `${0.1 + index * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
                <span className="text-gradient inline-block ml-2">
                  {"ALAM".split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-letter-bounce hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{
                        animationDelay: `${0.8 + index * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up-delay-2">
                Passionate about Web Development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  View My Work
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download="Md_Mahtab_Alam_Resume.pdf"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30"
                >
                  Download Resume
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-up-delay-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Circle Photo */}
            <div className="flex-shrink-0 animate-fade-in">
              <CirclePhoto imageSrc={profilePhoto} alt="Md Mahtab Alam - Web Developer" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 text-lg">About Me</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 text-foreground">
              Passionate about creating <span className="text-gradient">impactful</span> Web Development
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              I'm a  web developer and Electronics & Communication Engineering student with a passion for building modern web applications. I specialize in HTML, CSS, JS, React, TypeScript and Java Programming.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Combining my ECE background with web development skills, I create smart, connected solutions 
              that bridge hardware and software seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* ECE Section */}
      <section id="ece" className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4 text-lg">My Academic Background</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Electronics and <span className="text-gradient">Communication</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              B.Tech in Electronics and Communication Engineering - Bridging the gap between hardware innovation and software excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eceSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ECE Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">ECE</div>
              <div className="text-muted-foreground text-sm">Branch</div>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground text-sm">Projects Built</div>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">IoT</div>
              <div className="text-muted-foreground text-sm">Specialization</div>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-primary font-medium mb-4 text-lg tracking-wider uppercase">What I Know</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              My <span className="text-gradient">Skills</span> Arsenal
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A blend of software development expertise and hardware engineering knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Software Skills */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Software Skills
                  </h3>
                  <p className="text-muted-foreground text-sm">Programming & Web Development</p>
                </div>
              </div>
              
              <div className="space-y-5">
                {softwareSkills.map((skill, index) => (
                  <div key={skill.name} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-secondary/80">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hardware Skills */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Hardware Skills
                  </h3>
                  <p className="text-muted-foreground text-sm">Electronics & Circuit Design</p>
                </div>
              </div>
              
              <div className="space-y-5">
                {hardwareSkills.map((skill, index) => (
                  <div key={skill.name} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border hover:border-accent/30 transition-all duration-300 hover:bg-secondary/80">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Expertise Badge */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold">Expert Level</span>
                </div>
                <p className="text-foreground font-display text-lg">
                  Digital Electronics & Circuit Design
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Strong foundation in digital logic, microprocessors, and VLSI fundamentals
                </p>
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
        {/* Background decoration */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4 text-lg">Experience</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
              My <span className="text-gradient">Internships</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Internship 1 */}
            <div className="relative pl-8 pb-0 border-l-2 border-primary/30 group">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">East Central Railway Hajipur (ECR)</h3>
                      <p className="text-primary font-medium">Railway Signaling and Control Systems</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/80 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">01-Jun 2025 - 30-Jun 2025</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Completed industrial training on Railway Signaling and Control Systems at East Central Railway, gaining practical exposure to track circuits, axle counters, point machines, automatic block working, and OFC-based railway communication used for safe train operations</p>
              </div>
            </div>
             {/* Internship 2 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 group">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Tamizan Skills </h3>
                      <p className="text-accent font-medium">Web Development Intern</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/80 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">10-Jun 2025 - 10-July 2025</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Worked on building responsive and interactive websites using HTML, CSS, JavaScript, and React. Focused on UI design, page optimization, and improving user experience.</p>
              </div>
            </div>
            
            {/* Internship 3 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 group">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Maven silicon</h3>
                      <p className="text-primary font-medium">VLSI Soc Design using Verilog HDL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/80 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">01-Sept 2025 - 30-Sept 2025</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Learned VLSI SoC design fundamentals using Verilog HDL, including digital logic design and simulation basics.</p>
              </div>
            </div>
            {/* Internship 4 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 group">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Happieloop Technology Pvt. Ltd.</h3>
                      <p className="text-primary font-medium">Java Intern</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/80 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">31-Oct 2025 - 30-Decem 2025</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Worked with Java focusing on OOP concepts like Encapsulation, Inheritance, and Polymorphism. Developed and tested core program modules.</p>
              </div>
            </div>

           


            {/* Internship 5 */}
            <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 group">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent border-4 border-background group-hover:scale-125 transition-transform" />
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl p-6 md:p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Techprolabz: School of Robotics</h3>
                      <p className="text-accent font-medium">Drones and Robotics Intern</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/80 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">10-Dece 2025 - 10-Jan 2026</span>
                  </div>
                </div>
                <p className="text-muted-foreground">Completed an internship in Drones and Robotics, gaining hands-on experience with drone systems, sensors, and basic robotics technologies, which strengthened my practical knowledge of electronics, automation, and real-world problem-solving skills.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Certificate 1 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">Apna College</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                Full Stack Web Development
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Skilled in building complete web applications using modern frontend and backend technologies, with hands-on experience in databases, APIs, and responsive design.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: September-2025</span>
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-blue-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>
 {/* Certificate 2*/}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full">Apna College</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-green-400 transition-colors">
                Java Pragramming
              </h3>
              <p className="text-muted-foreground text-sm mb-4"> Learned Java Programming from Apna College, covering fundamentals of Java, object-oriented programming, and coding practices.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: April 2025</span>
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-green-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>
{/* Certificate 3 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1 rounded-full">NPTEL</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-orange-400 transition-colors">
                Database Management System
              </h3>
              <p className="text-muted-foreground text-sm mb-4">NPTEL certified in Database Management Systems with strong understanding of SQL, relational models, normalization, transactions, and database design concepts.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: November 2025</span>
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-orange-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-purple-400 font-medium bg-purple-500/10 px-3 py-1 rounded-full">Oracle</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-purple-400 transition-colors">
                Oracle Cloud Infrastructures Certified AI Foundations Associate
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Earned Oracle Cloud Infrastructure AI Foundations certification, demonstrating strong fundamentals in artificial intelligence, machine learning, and cloud-based AI solutions.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: 31-Oct 2025</span>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-purple-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>

            
           
            {/* Certificate 5 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-pink-400 font-medium bg-pink-500/10 px-3 py-1 rounded-full">Cisco</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-pink-400 transition-colors">
                CCNA:Introduction to Networks
              </h3>
              <p className="text-muted-foreground text-sm mb-4"> Earned Cisco CCNA: Introduction to Networks certification, demonstrating knowledge of network fundamentals, protocols, IP addressing, and troubleshooting basics.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: May 2025</span>
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-pink-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>

            {/* Certificate 6 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-cyan-400 font-medium bg-cyan-500/10 px-3 py-1 rounded-full">Accenture</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                Software Engineering Job Simulation
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Completed Accenture Software Engineering Job Simulation, gaining practical experience in software development workflows, problem-solving, debugging, and real-world engineering tasks.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: June 2025</span>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-cyan-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>

{/* Certificate 7*/}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-pink-400 font-medium bg-pink-500/10 px-3 py-1 rounded-full">NIELIT</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-pink-400 transition-colors">
                VLSI
              </h3>
              <p className="text-muted-foreground text-sm mb-4"> Learned VLSI fundamentals through NIELIT certification, covering IC design basics, CMOS technology, and digital circuit concepts.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: August 2025</span>
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-pink-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>
{/* Certificate 8 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-orange-400 font-medium bg-orange-500/10 px-3 py-1 rounded-full">Techprolabz:School of Robotics</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-orange-400 transition-colors">
                Drones and Robotics
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Successfully completed Drones and Robotics program at Techprolabz, developing practical skills in drone systems, robotics design, and real-world technical problem solving.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: Jan 2026</span>
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-orange-400 text-xs font-bold">✓</span>
                </div>
              </div>
            </div>
{/* Certificate 9 */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <div className="mb-4">
                <span className="text-xs text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full">GEC Vaishali</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                Basic MATLAB
              </h3>
              <p className="text-muted-foreground text-sm mb-4">Learned Basic MATLAB concepts including matrix operations, basic programming, and data visualization.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Issued: -2024</span>
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-blue-400 text-xs font-bold">✓</span>
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
            <div className="group relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/50 rounded-full" />
              <div className="bg-gradient-to-br from-primary/10 via-secondary/80 to-accent/10 rounded-3xl p-8 md:p-10 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 ml-4 md:ml-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">Bachelor's Degree</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                        B.Tech in Electronics & Communication
                      </h3>
                      <p className="text-lg text-accent font-medium mb-2">Government Engineering College Vaishali</p>
                      <p className="text-muted-foreground">Electronics Engineering student with strong fundamentals in Digital Electronics, Microelectronics, Verilog HDL, Java programming, and growing interest in software development.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-4 py-2 rounded-xl border border-border">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="text-lg font-bold text-foreground">2022 - 2026</p>
                    </div>
                    <div className="text-right bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-xl">
                      <p className="text-sm text-muted-foreground">CGPA</p>
                      <p className="text-2xl font-bold text-primary">8.42</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 12th */}
            <div className="group relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent/50 rounded-full" />
              <div className="bg-gradient-to-br from-accent/10 via-secondary/80 to-primary/10 rounded-3xl p-8 md:p-10 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 ml-4 md:ml-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <School className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full mb-3 inline-block">Senior Secondary</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Class 12th - Science (PCM)
                      </h3>
                      <p className="text-lg text-primary font-medium mb-1">S R K Goenka College Sitamarhi</p>
                      <p className="text-sm text-accent font-medium mb-2">Board: BSEB</p>
                      <p className="text-muted-foreground">Physics, Chemistry, Mathematics with optional Biology.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-4 py-2 rounded-xl border border-border">
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="text-lg font-bold text-foreground">2019 - 2021</p>
                    </div>
                    <div className="text-right bg-gradient-to-r from-accent/20 to-primary/20 px-4 py-2 rounded-xl">
                      <p className="text-sm text-muted-foreground">Percentage</p>
                      <p className="text-2xl font-bold text-accent">80%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="group relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full" />
              <div className="bg-gradient-to-br from-green-500/10 via-secondary/80 to-blue-500/10 rounded-3xl p-8 md:p-10 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 ml-4 md:ml-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <School className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <span className="text-xs text-green-400 font-semibold bg-green-500/10 px-3 py-1 rounded-full mb-3 inline-block">Secondary</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Class 10th - All Subjects
                      </h3>
                      <p className="text-lg text-green-400 font-medium mb-1">Hellens School Sitamarhi</p>
                      <p className="text-sm text-blue-400 font-medium mb-2">Board: CBSE</p>
                      <p className="text-muted-foreground">Excelled in Science and Mathematics. Active participant in science exhibitions and olympiads.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-right bg-secondary/80 px-4 py-2 rounded-xl border border-border">
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="text-lg font-bold text-foreground">2018 - 2019</p>
                    </div>
                    <div className="text-right bg-gradient-to-r from-green-500/20 to-blue-500/20 px-4 py-2 rounded-xl">
                      <p className="text-sm text-muted-foreground">Percentage</p>
                      <p className="text-2xl font-bold text-green-400">86.2%</p>
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

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                    placeholder="your@email.com"
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
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
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
              © 2026 Md Mahtab Alam. All rights reserved.
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
