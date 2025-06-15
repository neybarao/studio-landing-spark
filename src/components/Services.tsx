
import { Palette, Code, Search, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design Digital",
      description: "Criamos identidades visuais marcantes que conectam sua marca com o público-alvo de forma autêntica.",
      features: ["Identidade Visual", "UI/UX Design", "Branding", "Design Gráfico"]
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Desenvolvemos sites e aplicações web modernas, responsivas e otimizadas para conversão.",
      features: ["Sites Responsivos", "E-commerce", "Aplicações Web", "Otimização SEO"]
    },
    {
      icon: Search,
      title: "Marketing Digital",
      description: "Estratégias digitais integradas que amplificam o alcance da sua marca e geram resultados.",
      features: ["Estratégia Digital", "Redes Sociais", "Content Marketing", "Analytics"]
    },
    {
      icon: Zap,
      title: "Consultoria",
      description: "Consultoria especializada para transformar desafios digitais em oportunidades de crescimento.",
      features: ["Análise de Mercado", "Estratégia Digital", "Transformação Digital", "Growth Hacking"]
    }
  ];

  const stats = [
    { number: "5", label: "anos", description: "de experiência no mercado digital" },
    { number: "150+", label: "casos", description: "de sucesso entregues para clientes" },
    { number: "3", label: "países", description: "onde nossos projetos fazem a diferença" },
    { number: "∞", label: "infinitas", description: "possibilidades para sua marca" }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Services */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Acreditamos em um design
            <span className="block text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text">
              com visão de futuro.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Combinamos criatividade, estratégia e tecnologia para criar experiências digitais 
            que não apenas impressionam, mas geram resultados reais para o seu negócio.
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
