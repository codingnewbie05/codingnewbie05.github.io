
import { Calendar, Clock, User, ArrowRight, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My Journey from Zero to Full-Stack Developer",
      excerpt: "How I went from knowing nothing about programming to building full-stack applications in 12 months. The challenges, victories, and lessons learned along the way.",
      content: "Starting my coding journey felt overwhelming at first. With no background in computer science, I had to learn everything from scratch...",
      date: "2024-01-15",
      readTime: "8 min read",
      author: "CodingNewbie",
      tags: ["Journey", "Learning", "Motivation"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      title: "Understanding React Hooks: A Beginner's Guide",
      excerpt: "Diving deep into React Hooks and how they revolutionized the way we write React components. With practical examples and real-world use cases.",
      content: "React Hooks were a game-changer when they were introduced. As someone who learned class components first...",
      date: "2024-01-08",
      readTime: "12 min read",
      author: "CodingNewbie",
      tags: ["React", "JavaScript", "Tutorial"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      likes: 18,
      comments: 5
    },
    {
      id: 3,
      title: "Building My First API: Lessons from the Backend",
      excerpt: "The story of creating my first RESTful API with Node.js and Express. From planning endpoints to handling errors and everything in between.",
      content: "Building my first API was both exciting and terrifying. I had been comfortable with frontend development...",
      date: "2024-01-01",
      readTime: "10 min read",
      author: "CodingNewbie",
      tags: ["Node.js", "API", "Backend"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      likes: 32,
      comments: 12
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A practical comparison of CSS Grid and Flexbox with real examples. Learn when to use each layout method for maximum effectiveness.",
      content: "One of the most common questions I get asked is about the difference between CSS Grid and Flexbox...",
      date: "2023-12-20",
      readTime: "6 min read",
      author: "CodingNewbie",
      tags: ["CSS", "Layout", "Frontend"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      likes: 15,
      comments: 7
    },
    {
      id: 5,
      title: "The Importance of Git in Your Development Workflow",
      excerpt: "Why every developer needs to master Git and GitHub. Tips for better commit messages, branching strategies, and collaborative development.",
      content: "When I started coding, I thought Git was just a backup tool. How wrong I was...",
      date: "2023-12-12",
      readTime: "7 min read",
      author: "CodingNewbie",
      tags: ["Git", "Workflow", "Tools"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop",
      likes: 21,
      comments: 9
    },
    {
      id: 6,
      title: "Debugging Like a Pro: Tools and Techniques",
      excerpt: "Essential debugging strategies that every developer should know. From console logs to advanced debugging tools and methodologies.",
      content: "Debugging is an art form that every developer must master. In this post, I'll share the techniques...",
      date: "2023-12-05",
      readTime: "9 min read",
      author: "CodingNewbie",
      tags: ["Debugging", "Tools", "Tips"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=500&h=300&fit=crop",
      likes: 28,
      comments: 11
    }
  ];

  const categories = ["All", "Journey", "Tutorial", "Tips", "Tools"];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing my coding journey, tutorials, and insights. 
            Join me as I document the ups and downs of learning to code.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white text-slate-600 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition-all duration-200 first:bg-blue-600 first:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 text-white">
                <div className="flex items-center text-blue-100 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {blogPosts[0].date}
                  <Clock size={14} className="ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      {blogPosts[0].likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={16} className="mr-1" />
                      {blogPosts[0].comments}
                    </div>
                  </div>
                  
                  <button className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-slate-700">{post.readTime}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <User size={14} className="mr-1" />
                  {post.author}
                  <Calendar size={14} className="ml-4 mr-1" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-slate-500">
                    <div className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={16} className="mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new blog posts and updates on my coding journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
