
import { Palette, Code, Search, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Digital Design",
      description: "We create striking visual identities that connect your brand with the target audience authentically.",
      features: ["Visual Identity", "UI/UX Design", "Branding", "Graphic Design"]
    },
    {
      icon: Code,
      title: "Development",
      description: "We develop modern, responsive websites and web applications optimized for conversion.",
      features: ["Responsive Sites", "E-commerce", "Web Applications", "SEO Optimization"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Integrated digital strategies that amplify your brand reach and generate real results.",
      features: ["Digital Strategy", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: Zap,
      title: "Consulting",
      description: "Specialized consulting to transform digital challenges into growth opportunities.",
      features: ["Market Analysis", "Digital Strategy", "Digital Transformation", "Growth Hacking"]
    }
  ];

  const stats = [
    { number: "5", label: "years", description: "of experience in the digital market" },
    { number: "150+", label: "success", description: "cases delivered to clients" },
    { number: "3", label: "countries", description: "where our projects make a difference" },
    { number: "∞", label: "infinite", description: "possibilities for your brand" }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Services */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We believe in design
            <span className="block text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">
              with future vision.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We combine creativity, strategy and technology to create digital experiences 
            that not only impress, but generate real results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600 leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
