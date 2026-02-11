import { Search, Settings, Shield, Layers, Activity, Brain } from 'lucide-react';

export default function Platform() {
    const components = [
        {
            name: 'Assessment Layer — Kloudlens',
            description: 'Rapid maturity and optimization readiness evaluation.',
            icon: Search,
            color: 'blue'
        },
        {
            name: 'Optimization Layer — KloudControl',
            description: 'Continuous infrastructure, Kubernetes, and Databricks optimization.',
            icon: Settings,
            color: 'green'
        },
        {
            name: 'Governance Layer — KloudGuard',
            description: 'Security posture, compliance monitoring, and cost guardrails.',
            icon: Shield,
            color: 'orange'
        },
        {
            name: 'Operations Layer — KloudOps',
            description: 'Application-aware analytics and total cost of ownership insights.',
            icon: Layers,
            color: 'teal'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        The LeanKloud AI-Driven Cloud Operations Platform
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        LeanKloud is purpose-built for enterprises seeking autonomous cloud optimization across infrastructure, Kubernetes, and data platforms.
                    </p>
                </div>
            </section>

            {/* Core Components Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Components</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {components.map((component) => (
                            <div key={component.name} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow bg-white flex items-start space-x-4">
                                <div className={`p-3 rounded-lg bg-${component.color}-100`}>
                                    <component.icon className={`w-8 h-8 text-${component.color}-600`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{component.name}</h3>
                                    <p className="text-gray-600">{component.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Agentic AI Engine Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agentic AI Engine</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The LeanKloud Agentic AI Engine continuously:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Monitors telemetry',
                                    'Identifies inefficiencies',
                                    'Simulates optimization impact',
                                    'Executes safe remediation'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <Brain className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-blue-600 shadow-sm">
                                <p className="text-blue-800 font-semibold">
                                    Unlike traditional dashboards, LeanKloud drives action — not just visibility.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-2xl text-white">
                                <Activity className="w-16 h-16 mb-6 opacity-80" />
                                <div className="text-2xl font-bold mb-2">Autonomous Action</div>
                                <p className="text-white/80">Self-optimizing infrastructure that adapts to your needs in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
