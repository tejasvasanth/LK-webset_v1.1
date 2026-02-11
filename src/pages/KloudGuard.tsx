import { Shield } from 'lucide-react';

export default function KloudGuard() {
    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-red-600 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        KloudGuard — Proactive Governance & Cloud Posture Management
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        KloudGuard ensures compliance, risk mitigation, and cost discipline across cloud environments.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Capabilities</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'Policy enforcement and guardrails',
                            'Configuration drift detection',
                            'Identity and access oversight',
                            'Risk scoring and prioritization',
                            'FinOps governance alignment'
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                                <Shield className="w-6 h-6 text-orange-600 flex-shrink-0" />
                                <span className="text-lg font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl border border-gray-200">
                        <p className="text-2xl font-bold text-gray-800">Governance becomes continuous and intelligent.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
