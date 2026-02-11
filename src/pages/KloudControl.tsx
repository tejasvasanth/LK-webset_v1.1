import { Settings, Zap, HardDrive, Database, Activity } from 'lucide-react';

export default function KloudControl() {
    const features = [
        { title: 'Databricks Optimization', desc: 'Optimize cluster sizing, detect idle compute, and reduce expensive query patterns.', icon: Database },
        { title: 'Kubernetes Optimization', desc: 'Improve autoscaling configuration, container right-sizing, and node utilization.', icon: Settings },
        { title: 'Agentic Spot Orchestration', desc: 'Automatically shift workloads across spot and on-demand capacity with risk-aware decisioning.', icon: Zap },
        { title: 'Intelligent Storage Optimization', desc: 'Compress infrequently accessed S3 data and transparently decompress when requested.', icon: HardDrive },
        { title: 'Cost Anomaly Detection', desc: 'Detect unexpected spending spikes and performance inefficiencies in real time.', icon: Activity },
    ];

    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        KloudControl — Continuous Cost & Performance Optimization
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        KloudControl reduces cloud waste while improving workload efficiency across infrastructure, containers, and data platforms.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <feature.icon className="w-10 h-10 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Outcome: <span className="text-green-600">Reduced cost. Higher efficiency. Continuous optimization.</span>
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
