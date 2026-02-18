import { TrendingDown, Zap, Shield, DollarSign, Activity, Target } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      icon: TrendingDown,
      metric: '30–60%',
      label: 'Reduction in Cloud Waste',
      description: 'Average cost savings from automated, continuous optimization across all cloud assets.',
      color: 'green'
    },
    {
      icon: Zap,
      metric: 'Improved',
      label: 'Workload Performance',
      description: 'Faster workloads through intelligent resource allocation without performance trade-offs.',
      color: 'blue'
    },
    {
      icon: Shield,
      metric: 'Stronger',
      label: 'Governance & Compliance Posture',
      description: 'Automated compliance enforcement, security guardrails, and policy management.',
      color: 'teal'
    },
    {
      icon: Activity,
      metric: 'Higher',
      label: 'Engineering Productivity',
      description: 'Free teams from manual optimization tasks to focus on building and innovation.',
      color: 'orange'
    },
    {
      icon: DollarSign,
      metric: 'Zero',
      label: 'Operational Risk',
      description: 'Optimization without compromising application performance or business outcomes.',
      color: 'green'
    },
    {
      icon: Target,
      metric: 'Better',
      label: 'Spend-to-Value Alignment',
      description: 'Better alignment between infrastructure spend and business value through application-level TCO visibility.',
      color: 'blue'
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
            Business Outcomes Delivered
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
