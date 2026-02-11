import { TrendingDown, Zap, Shield, DollarSign } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: TrendingDown,
      metric: '30-60%',
      label: 'reduction in cloud waste',
      description: 'Average cost savings from automated optimization',
      color: 'green'
    },
    {
      icon: Zap,
      metric: 'Improved',
      label: 'workload performance',
      description: 'Faster workloads through intelligent resource allocation',
      color: 'blue'
    },
    {
      icon: Zap,
      metric: 'Higher',
      label: 'Kubernetes utilization',
      description: 'Optimized container density and resource usage',
      color: 'teal'
    },
    {
      icon: DollarSign,
      metric: 'Reduced',
      label: 'Databricks compute costs',
      description: 'Efficient cluster sizing and query optimization',
      color: 'orange'
    },
    {
      icon: Shield,
      metric: 'Stronger',
      label: 'governance posture',
      description: 'Automated compliance and policy enforcement',
      color: 'blue' // Using blue as a safe fallback
    },
    {
      icon: DollarSign,
      metric: 'Increased',
      label: 'cost transparency',
      description: 'Clear visibility into cloud spend and allocation',
      color: 'green'
    }
  ];

  const colorClasses = {
    green: {
      bg: 'from-green-500 to-emerald-500',
      text: 'text-green-600',
      lightBg: 'bg-green-50'
    },
    blue: {
      bg: 'from-blue-500 to-cyan-500',
      text: 'text-blue-600',
      lightBg: 'bg-blue-50'
    },
    orange: {
      bg: 'from-orange-500 to-red-500',
      text: 'text-orange-600',
      lightBg: 'bg-orange-50'
    },
    teal: {
      bg: 'from-teal-500 to-blue-500',
      text: 'text-teal-600',
      lightBg: 'bg-teal-50'
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Measurable Business Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome) => {
            const colors = colorClasses[outcome.color as keyof typeof colorClasses];
            return (
              <div
                key={outcome.label}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${colors.bg} p-6 text-white`}>
                  <outcome.icon className="w-12 h-12 mb-4 opacity-90" />
                  <div className="text-3xl font-bold mb-2">{outcome.metric}</div>
                  <div className="text-white/90 font-semibold text-lg">{outcome.label}</div>
                </div>
                <div className={`${colors.lightBg} p-6`}>
                  <p className="text-gray-700 leading-relaxed">{outcome.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
