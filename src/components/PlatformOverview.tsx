import { Search, Settings, Shield, Layers, ArrowRight } from 'lucide-react';

export default function PlatformOverview() {
  const products = [
    {
      name: 'Kloudlens',
      description: 'Assess',
      detail: 'Assess maturity and optimization potential across your cloud environment.',
      icon: Search,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'KloudControl',
      description: 'Optimize',
      detail: 'Optimize cost and performance continuously across infrastructure and data platforms.',
      icon: Settings,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'KloudGuard',
      description: 'Govern',
      detail: 'Govern, secure, and enforce compliance automatically with AI-driven guardrails.',
      icon: Shield,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'KloudOps',
      description: 'Operate',
      detail: 'Agentic automation that integrates KloudControl & KloudGuard for autonomous operations.',
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
            A Unified AI Ops & FinOps Optimization Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LeanKloud helps enterprises assess, optimize, govern, and operate cloud environments intelligently through four integrated capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-lg transform hover:scale-105">
            <span>Explore Platform</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
