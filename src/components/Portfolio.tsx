
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TechFlow SaaS Platform",
      category: "Web Development",
      description: "Complete redesign and development of a B2B SaaS platform that increased user engagement by 150%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "UI/UX"]
    },
    {
      title: "GreenLife Brand Identity",
      category: "Branding",
      description: "Comprehensive brand identity for an eco-friendly startup that helped them secure Series A funding.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      tags: ["Logo Design", "Brand Guidelines", "Packaging"]
    },
    {
      title: "FitTracker Mobile App",
      category: "Mobile Design",
      description: "User-friendly fitness app design that achieved 4.8 stars in app stores with 100k+ downloads.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Mobile UI", "UX Research", "Prototyping"]
    },
    {
      title: "Luxury Hotel Website",
      category: "Web Design",
      description: "Premium hotel website that increased direct bookings by 200% and won a design award.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      tags: ["Responsive Design", "CMS", "SEO"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Latest Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects that have helped businesses achieve their goals and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-purple-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg mx-auto">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
