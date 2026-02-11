import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-700">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Start Optimizing Today</span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Ready to Turn Cloud Operations Autonomous?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
            <span>Request a Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-blue-800/50 hover:bg-blue-800/70 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/30">
            Start Your Assessment
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">No Credit Card</div>
            <div className="text-white/80">Start free assessment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5 Minutes</div>
            <div className="text-white/80">To complete setup</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">Instant Results</div>
            <div className="text-white/80">See savings immediately</div>
          </div>
        </div>
      </div>
    </section>
  );
}
