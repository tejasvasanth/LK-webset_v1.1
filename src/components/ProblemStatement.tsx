import { TrendingUp, AlertCircle, Eye, Clock } from 'lucide-react';

export default function ProblemStatement() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cloud Complexity Is Growing Faster Than Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern cloud environments span multi-account architectures, Kubernetes clusters, Databricks workspaces, and distributed applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Unpredictable Cloud Cost Growth</h3>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Idle & Overprovisioned K8s Resources</h3>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expensive Databricks Clusters</h3>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Reactive Spot Management</h3>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Application-Level TCO Awareness</h3>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-100 hover:shadow-lg transition-shadow">
            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Disconnected Finance & Engineering</h3>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 font-semibold">
            Manual optimization cannot scale. <span className="text-blue-600">LeanKloud introduces autonomous optimization powered by agentic AI.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
