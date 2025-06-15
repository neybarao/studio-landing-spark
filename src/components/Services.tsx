
import { Palette, Code, Search, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand packages that make you stand out in the market with memorable logos, color schemes, and typography.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "High-converting websites that look stunning and perform flawlessly across all devices and browsers.",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive traffic, engagement, and conversions for your business goals.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      icon: Zap,
      title: "UX/UI Design",
      description: "User-centered design that creates intuitive experiences and maximizes user engagement and satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive design and development services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
