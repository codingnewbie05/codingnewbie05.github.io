
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                CN
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Hi, I'm <span className="text-blue-600">CodingNewbie</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate developer on a journey to master the art of coding. 
              Building projects, learning daily, and sharing the adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Projects
                <ArrowRight className="ml-2" size={18} />
              </Link>
              
              <Link
                to="/skills"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Explore Skills
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Github className="text-slate-600 hover:text-slate-800" size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Linkedin className="text-slate-600 hover:text-blue-600" size={24} />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Mail className="text-slate-600 hover:text-green-600" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a dedicated learner in the world of software development, constantly exploring 
                new technologies and building projects that challenge my skills. My journey is about 
                growth, persistence, and sharing knowledge with the community.
              </p>
              
              <div className="flex items-center text-slate-500 mb-4">
                <MapPin size={18} className="mr-2" />
                <span>Learning from anywhere</span>
              </div>
              
              <Link
                to="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read my coding journey
                <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Projects Completed</span>
                  <span className="font-semibold text-blue-600">12+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Technologies Learned</span>
                  <span className="font-semibold text-blue-600">8+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Coffee Consumed</span>
                  <span className="font-semibold text-blue-600">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
