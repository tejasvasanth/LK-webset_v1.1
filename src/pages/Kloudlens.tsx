import { CheckCircle, BarChart } from 'lucide-react';

export default function KloudlensKey() {
    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-cyan-700 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Kloudlens — Cloud, FinOps & AI Maturity Assessment
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Kloudlens delivers a rapid, structured evaluation of your cloud environment.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Kloudlens Evaluates</h2>
                        <div className="space-y-4">
                            {[
                                'FinOps maturity and cost governance',
                                'Kubernetes resource efficiency',
                                'Databricks cluster and workload optimization',
                                'Security and compliance posture',
                                'Automation and AI readiness'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What You Receive</h2>
                        <div className="space-y-4">
                            {[
                                'Maturity score',
                                'Optimization potential estimate',
                                'Gap analysis',
                                'Actionable roadmap'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                                    <BarChart className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-gray-900 rounded-xl text-white">
                            <p className="italic">Designed for CIOs, CTOs, FinOps leaders, and platform teams.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
