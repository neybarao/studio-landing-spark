
import { Users, Award, Clock, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Award, label: "Awards Won", value: "15" },
    { icon: Clock, label: "Years Experience", value: "8" },
    { icon: Target, label: "Success Rate", value: "98%" }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We Create Digital Magic That Works
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2016, StudioX has been at the forefront of digital design innovation. 
              We combine creativity with strategy to deliver solutions that not only look amazing 
              but drive real business results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of designers, developers, and strategists work collaboratively to understand 
              your unique challenges and create custom solutions that exceed expectations. We believe 
              great design is not just about aesthetics – it's about solving problems and creating value.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop" 
                alt="Our team at work"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
