import { Search, Settings, Shield, Layers, ArrowRight } from 'lucide-react';

export default function PlatformOverview() {
  const products = [
    {
      name: 'Kloudlens',
      description: 'Assess',
      detail: 'Rapid cloud maturity and optimization readiness assessment.',
      icon: Search,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'KloudControl',
      description: 'Optimize',
      detail: 'Continuous cost and performance optimization across infrastructure and data platforms.',
      icon: Settings,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'KloudGuard',
      description: 'Govern',
      detail: 'AI-driven compliance, posture management, and cost guardrails.',
      icon: Shield,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'KloudOps',
      description: 'Operate',
      detail: 'Application-aware operations and total cost of ownership analytics.',
      icon: Layers,
      color: 'teal',
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Unified AI Ops + FinOps Automation Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LeanKloud integrates assessment, optimization, governance, and application intelligence into a single operational layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${product.gradient} p-6 text-white`}>
                <product.icon className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-white/90 font-medium">{product.description}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{product.detail}</p>
                <button className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Explore Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
