import { Building2 } from 'lucide-react';

export default function Customers() {
    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Trusted by Cloud-First Enterprises</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                        LeanKloud helps organizations modernize cloud operations and operationalize FinOps at scale.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold mb-2">Case Studies</h3>
                            <p className="text-gray-600">See how enterprises save 30%+</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold mb-2">Quantified Savings</h3>
                            <p className="text-gray-600">Real dollar impact delivered</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold mb-2">Industry Coverage</h3>
                            <p className="text-gray-600">From Fintech to SaaS</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold mb-2">Enterprise Scale</h3>
                            <p className="text-gray-600">Managing millions in spend</p>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        {/* Placeholders for logos */}
                        <Building2 className="w-16 h-16" />
                        <Building2 className="w-16 h-16" />
                        <Building2 className="w-16 h-16" />
                        <Building2 className="w-16 h-16" />
                        <Building2 className="w-16 h-16" />
                    </div>
                </div>
            </section>
        </div>
    );
}
