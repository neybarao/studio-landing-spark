
import { ArrowLeft, Calendar, User, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Back */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-pink-400 font-semibold mb-4">Case Study</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                [Project Title]
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                [Brief project description and impact summary]
              </p>
              
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>[Timeline]</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>[Client Name]</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-white/50 text-lg">[Hero Image]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  [Detailed project description and context. Explain what the project was about, 
                  the client's business, and why this project was important.]
                </p>
                <p className="text-gray-600 leading-relaxed">
                  [Additional context about the project scope, timeline, and team involved.]
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    [Service 1]
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    [Service 2]
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    [Service 3]
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">[Tech 1]</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">[Tech 2]</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">[Tech 3]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed mb-6">
                  [Describe the main challenges and problems that needed to be solved. 
                  What obstacles did the client face?]
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">[Challenge point 1]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">[Challenge point 2]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">[Challenge point 3]</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">[Challenge Illustration]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              [Brief overview of the solution approach and methodology]
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">[Solution Step 1]</h3>
              <p className="text-gray-600">[Description of first solution step]</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">[Solution Step 2]</h3>
              <p className="text-gray-600">[Description of second solution step]</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">[Solution Step 3]</h3>
              <p className="text-gray-600">[Description of third solution step]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              [Overview of the measurable results and business impact achieved]
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text mb-2">
                [Metric 1]
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">[Metric Label]</div>
              <div className="text-sm text-gray-600">[Metric Description]</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text mb-2">
                [Metric 2]
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">[Metric Label]</div>
              <div className="text-sm text-gray-600">[Metric Description]</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text mb-2">
                [Metric 3]
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">[Metric Label]</div>
              <div className="text-sm text-gray-600">[Metric Description]</div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">[Achievement 1]</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">[Achievement 2]</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">[Achievement 3]</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">[Achievement 4]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Visual Gallery</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">[Project Image 1]</span>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">[Project Image 2]</span>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">[Project Image 3]</span>
            </div>
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">[Project Image 4]</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve similar results for your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
