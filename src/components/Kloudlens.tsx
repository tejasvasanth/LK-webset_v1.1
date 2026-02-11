import { Search, CheckCircle, ArrowRight, BarChart } from 'lucide-react';

export default function Kloudlens() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              <span>Free Assessment Tool</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Kloudlens — Cloud, FinOps & AI Maturity Assessment
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Kloudlens delivers a rapid, structured evaluation of your cloud environment across:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white text-lg">FinOps maturity and cost governance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white text-lg">Kubernetes resource efficiency</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white text-lg">Databricks cluster and workload optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white text-lg">Security and compliance posture</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white text-lg">Automation and AI readiness</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-white/90 font-semibold mb-2">Within minutes, receive:</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-white font-bold block">Maturity Score</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-white font-bold block">Optimization Potential</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-white font-bold block">Gap Analysis</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-white font-bold block">Actionable Roadmap</span>
                </div>
              </div>
            </div>

            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-lg transform hover:scale-105">
              <span>Start Your Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Cloud Maturity Score</h3>
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>

              <div className="mb-8">
                <div className="flex items-end justify-center mb-2">
                  <span className="text-6xl font-bold text-blue-600">73</span>
                  <span className="text-3xl text-gray-400 mb-2">/100</span>
                </div>
                <p className="text-center text-gray-600 font-medium">Moderate Maturity</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>Cost Efficiency</span>
                    <span className="text-green-600">85%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-5/6"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>Governance</span>
                    <span className="text-blue-600">68%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>Kubernetes Optimization</span>
                    <span className="text-orange-600">52%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-1/2"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>Data Platforms</span>
                    <span className="text-teal-600">79%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 w-4/5"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
                    <span>AI Readiness</span>
                    <span className="text-red-600">41%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-2/5"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2 font-semibold">Top Priority:</p>
                <p className="text-gray-900">
                  Kubernetes resource optimization could save $38K/month
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
