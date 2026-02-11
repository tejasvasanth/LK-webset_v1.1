import { Cloud, DollarSign, Box, Database, Sparkles } from 'lucide-react';

export default function Solutions() {
    const solutions = [
        { title: 'Cloud Cost Optimization', desc: 'Continuous infrastructure and workload efficiency.', icon: Cloud },
        { title: 'FinOps Automation', desc: 'Operationalize financial accountability across engineering teams.', icon: DollarSign },
        { title: 'Kubernetes Cost Optimization', desc: 'Improve resource density and autoscaling efficiency.', icon: Box },
        { title: 'Databricks Cost Management', desc: 'Reduce cluster waste and optimize query performance.', icon: Database },
        { title: 'AI Ops Automation', desc: 'Enable intelligent, autonomous cloud operations.', icon: Sparkles },
    ];

    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">Solutions</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => (
                            <div key={solution.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <solution.icon className="w-12 h-12 text-blue-600 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{solution.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
