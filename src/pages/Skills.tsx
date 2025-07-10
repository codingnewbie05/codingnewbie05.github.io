
import { Code, Database, Globe, Palette, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "RESTful APIs", "Authentication"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "SQLite", "Database Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Others",
      icon: Code,
      skills: ["Git", "GitHub", "VS Code", "Linux", "Docker Basics"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["UI/UX Principles", "Figma", "Responsive Design", "Color Theory"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Mobile (Learning)",
      icon: Smartphone,
      skills: ["React Native", "Flutter Basics", "Mobile UI/UX"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const learningGoals = [
    "Advanced React Patterns",
    "GraphQL & Apollo",
    "Cloud Deployment (AWS/Vercel)",
    "Testing (Jest, Cypress)",
    "Performance Optimization",
    "AI/ML Integration"
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A growing collection of technologies and tools I've learned on my coding journey. 
            Always expanding, always improving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Goals Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            🎯 Currently Learning & Goals
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningGoals.map((goal, index) => (
              <div
                key={goal}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">{goal}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-600 italic">
              "The journey of learning never ends - every day brings new possibilities to grow."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
