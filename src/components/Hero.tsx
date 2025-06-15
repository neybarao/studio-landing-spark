
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="text-2xl font-bold text-white">
          Resonate
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-purple-400 transition-colors">Services</a>
          <a href="#portfolio" className="text-white hover:text-purple-400 transition-colors">Portfolio</a>
          <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
          <a href="#contact" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors">
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Projects that inspire,
              <span className="block text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                digital experiences
              </span>
              that transform.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              We create unique digital experiences that connect brands with their audiences in authentic and memorable ways.
            </p>
            
            <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl">
              Let's talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
