import { Layers, Activity, DollarSign, Network } from 'lucide-react';

export default function KloudOps() {
    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        KloudOps — Application-Aware AI Operations
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        KloudOps connects infrastructure optimization with business outcomes.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Capabilities</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-500">
                            <DollarSign className="w-10 h-10 text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Application-level cost attribution</h3>
                            <p className="text-gray-600">Trace costs back to specific applications and services.</p>
                        </div>
                        <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-500">
                            <Network className="w-10 h-10 text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Service dependency mapping</h3>
                            <p className="text-gray-600">Visualize complex dependencies across your architecture.</p>
                        </div>
                        <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-500">
                            <Activity className="w-10 h-10 text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Performance-cost correlation</h3>
                            <p className="text-gray-600">Balance cost reductions with performance requirements.</p>
                        </div>
                        <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-500">
                            <Layers className="w-10 h-10 text-teal-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Total cost of ownership modeling</h3>
                            <p className="text-gray-600">Calculate complete TCO including licenses and operations.</p>
                        </div>
                        <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-500 col-span-2 md:col-span-1">
                            <div className="h-full flex items-center justify-center">
                                <p className="text-xl font-bold text-teal-800 text-center">Cross-team cost visibility</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-3xl font-bold text-gray-900">
                            Understand not just what you spend — but <span className="text-teal-600 italic">why</span>.
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
