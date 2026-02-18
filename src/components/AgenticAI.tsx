import { Brain, Eye, Lightbulb, Zap, ArrowRight, Shield, HardDrive, Lock } from 'lucide-react';

export default function AgenticAI() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Optimization That Executes — Without Compromising Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LeanKloud's agentic AI continuously improves cloud efficiency while preserving application performance and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Agents:</h3>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rightsize infrastructure safely</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Orchestrate Spot capacity without workload risk</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize Databricks workloads and queries</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compress unused storage & snapshots transparently</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                  <Brain className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manage idle resources</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enforce governance guardrails</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-xl flex-shrink-0">
                  <Lock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Implement context-driven security compliance</h3>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-900 font-semibold mb-2">
                Result
              </p>
              <p className="text-blue-700">
                Lower spend, more secure with stable or better performance. Autonomous execution means real savings — without human intervention, 24/7.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">AI Agent: Cost Optimizer</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4" />
                    <span>Rightsizing 47 underutilized instances</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">AI Agent: Spot Orchestrator</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4" />
                    <span>Migrating workloads to spot instances</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">AI Agent: Storage Compressor</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4" />
                    <span>Compressing unused S3 snapshots</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">AI Agent: Governance Guard</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Active</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <ArrowRight className="w-4 h-4" />
                    <span>Enforcing compliance guardrails</span>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur rounded-xl p-4 border border-white/30 mt-6">
                  <div className="text-white text-center">
                    <p className="text-3xl font-bold mb-1">$142,000</p>
                    <p className="text-sm text-white/80">Saved this month automatically</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-teal-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
