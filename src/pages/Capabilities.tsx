import { Check } from 'lucide-react';

export default function CapabilitiesPage() {
    const capabilities = [
        'Agentic AI Optimization',
        'Spot Instance Orchestration',
        'S3 Storage Compression',
        'Kubernetes Resource Optimization',
        'Databricks Query Optimization',
        'Application Cost Attribution',
        'Cost Anomaly Detection',
        'Budget & Governance Automation'
    ];

    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Deep Dive into Capabilities</h1>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        {capabilities.map((cap) => (
                            <div key={cap} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="bg-blue-100 rounded-full p-1">
                                    <Check className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-lg font-medium text-gray-900">{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
