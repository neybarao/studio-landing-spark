
import { ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "Modern SaaS Platform",
      category: "UI/UX + Development",
      description: "Complete design system and B2B platform development that increased conversion by 240%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Design System", "React", "TypeScript"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Premium E-commerce",
      category: "Branding + E-commerce",
      description: "Visual identity and online store for luxury brand with focus on premium experience.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      tags: ["Branding", "E-commerce", "UX Design"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Fitness App",
      category: "Mobile + UX Research",
      description: "Fitness app with gamification that achieved 4.9 stars and 500k+ downloads.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Mobile Design", "Gamification", "Research"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Fintech Startup",
      category: "Product Design",
      description: "Complete interface for fintech that facilitated Series A investment of $50M.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Fintech", "Dashboard", "Data Viz"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const handleProjectClick = () => {
    navigate('/case-study');
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We transform ideas into
            <span className="block text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">
              impactful products.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Every project is an opportunity to create something extraordinary. 
            See how we help brands connect with their audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={handleProjectClick}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}>
                  <div className="absolute bottom-4 right-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-pink-600 font-semibold mb-2 text-sm">{project.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg mx-auto">
            View all projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
