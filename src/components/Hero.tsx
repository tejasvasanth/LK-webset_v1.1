import { ArrowRight, Sparkles, TrendingDown, Gauge, Shield, Activity, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Powered by Agentic AI</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Autonomous Cloud Optimization Without Compromising Business Outcomes
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Powered by agentic AI, LeanKloud continuously optimizes all cloud assets and services — including Kubernetes and Databricks — to reduce cost, improve performance, and automate governance and security compliance without compromising application performance or business outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AI Ops & FinOps Automation</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Databricks & Kubernetes Optimization</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                  <Gauge className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Agentic Spot & Storage Efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors">
                  <Eye className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Application Cost Visibility & TCO Insights</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Continuous Governance, Compliance & Security</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-cyan-100 p-2 rounded-lg group-hover:bg-cyan-200 transition-colors">
                  <Activity className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Optimization Without Performance Trade-offs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-sm font-medium">Cloud Cost Savings</span>
                  <span className="text-green-300 text-2xl font-bold">-47%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 w-3/4 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-sm font-medium">Performance Improvement</span>
                  <span className="text-blue-300 text-2xl font-bold">+62%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-4/5 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-sm font-medium">Automation Rate</span>
                  <span className="text-orange-300 text-2xl font-bold">94%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 w-11/12 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
