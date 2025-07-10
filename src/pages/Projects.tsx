
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and mobile-first design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      github: "#",
      live: "#",
      date: "2024-01",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack todo application with user authentication, drag-and-drop functionality, and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      date: "2023-12",
      status: "Completed"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather app with location-based forecasts, beautiful UI, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      github: "#",
      live: "#",
      date: "2023-11",
      status: "Completed"
    },
    {
      id: 4,
      title: "E-commerce Landing Page",
      description: "Modern e-commerce landing page with product showcase, responsive design, and smooth user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      github: "#",
      live: "#",
      date: "2023-10",
      status: "Completed"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat app with multiple rooms, user authentication, and message history.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      github: "#",
      live: "#",
      date: "2024-02",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support, comments system, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c54b9c?w=500&h=300&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      github: "#",
      live: "#",
      date: "2024-03",
      status: "Planning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Planning":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of projects I've built while learning and growing as a developer. 
            Each project represents a new challenge overcome and skills gained.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-2">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      <Tag size={10} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Want to collaborate?
            </h2>
            <p className="text-slate-600 mb-6">
              I'm always excited to work on new projects and learn from other developers.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
