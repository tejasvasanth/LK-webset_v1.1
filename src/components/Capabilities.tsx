import { Database, Box, Zap, HardDrive, DollarSign, ArrowRight } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Database,
      title: 'Databricks Cost & Query Optimization',
      description: 'Identify idle clusters, inefficient Spark jobs, and costly queries. Reduce compute waste while maintaining performance.'
    },
    {
      icon: Box,
      title: 'Kubernetes Optimization',
      description: 'Improve container density, autoscaling efficiency, and node utilization with automated recommendations and execution.'
    },
    {
      icon: Zap,
      title: 'Agentic Spot Instance Orchestration',
      description: 'Predict interruption risk, rebalance workloads dynamically, and maximize compute savings without compromising reliability.'
    },
    {
      icon: HardDrive,
      title: 'Intelligent S3 Storage Compression',
      description: 'Automatically compress infrequently accessed data. Seamlessly decompress on demand without disrupting applications.'
    },
    {
      icon: DollarSign,
      title: 'Application-Level Cost Attribution',
      description: 'Map infrastructure spend to services, teams, and business units to understand true total cost of ownership.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Cloud Optimization Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end visibility and optimization across every layer of your cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <capability.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-lg transform hover:scale-105">
            <span>View All Capabilities</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
