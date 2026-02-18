import { ArrowRight, Search, Settings, Shield, Layers, Brain, CheckCircle, TrendingUp, Zap, MessageSquare, Target } from 'lucide-react';

export default function Platform() {
    return (
        <div>
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-800">AI Ops Meets FinOps Automation</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
                        LeanKloud Platform
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        LeanKloud continuously optimizes cost, performance, security compliance and governance across cloud environments — including Kubernetes and data platforms like Databricks — while ensuring application performance and business outcomes are never compromised.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25">
                            <span>Request Demo</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all border border-blue-200 shadow-sm">
                            Start Free Assessment
                        </button>
                    </div>
                </div>
            </section>

            {/* Platform Overview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        A Unified Platform for AI driven Autonomous Cloud Operations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                        LeanKloud transforms traditional cloud operations into an intelligent, self-optimizing system. Instead of relying on manual cost reviews and reactive operational fixes, the LeanKloud platform continuously analyzes, optimizes, and governs cloud environments automatically.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {[
                            { icon: Brain, title: 'Agentic AI optimization', bg: 'bg-blue-100', text: 'text-blue-600' },
                            { icon: TrendingUp, title: 'FinOps automation', bg: 'bg-green-100', text: 'text-green-600' },
                            { icon: Shield, title: 'Governance & security', bg: 'bg-purple-100', text: 'text-purple-600' },
                            { icon: Layers, title: 'App-aware operations', bg: 'bg-orange-100', text: 'text-orange-600' },
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                                <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                                    <item.icon className={`w-6 h-6 ${item.text}`} />
                                </div>
                                <h3 className="font-bold text-gray-900">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-500 italic">
                        Optimization actions are executed safely so cost reduction never compromises workload performance, reliability, or business outcomes.
                    </p>
                </div>
            </section>

            {/* How it Works - Workflow */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Assess → Optimize → Govern → Operate — Continuously
                        </h2>
                        <p className="text-lg text-gray-600">This cycle runs continuously, ensuring environments improve over time without manual effort.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>

                        {[
                            { step: 'Assess', tool: 'Kloudlens', desc: 'Identify optimization potential and maturity gaps', bg: 'bg-blue-600', text: 'text-blue-600' },
                            { step: 'Optimize', tool: 'KloudControl', desc: 'Eliminate inefficiencies across infrastructure', bg: 'bg-green-600', text: 'text-green-600' },
                            { step: 'Govern', tool: 'KloudGuard', desc: 'Enforce policies and compliance automatically', bg: 'bg-purple-600', text: 'text-purple-600' },
                            { step: 'Operate', tool: 'KloudOps', desc: 'Align infrastructure efficiency with business outcomes', bg: 'bg-orange-600', text: 'text-orange-600' },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative text-center group hover:-translate-y-1 transition-transform">
                                <div className={`w-8 h-8 rounded-full ${item.bg} text-white font-bold flex items-center justify-center mx-auto mb-4 relative z-10 ring-4 ring-white`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.step}</h3>
                                <p className={`text-sm font-semibold ${item.text} mb-3`}>({item.tool})</p>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Components */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Kloudlens */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                <Search className="w-4 h-4" />
                                <span>Assess Cloud Maturity</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kloudlens</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Kloudlens provides rapid assessment of cloud environments to identify inefficiencies and maturity gaps across cost, governance, Kubernetes utilization, and data platforms.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Cloud cost efficiency assessment', 'Governance and security posture evaluation', 'Infrastructure maturity analysis', 'Architecture and design aspects review', 'AI readiness evaluation'].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-8">
                                <span className="font-semibold text-blue-900">Outcome:</span>
                                <span className="text-blue-800 ml-1">Immediate visibility into optimization opportunities with a prioritized improvement roadmap.</span>
                            </div>
                            <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                                <span>Start Assessment</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="order-1 lg:order-2 bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            {/* Placeholder for Kloudlens UI */}
                            <Search className="w-24 h-24 text-gray-300" />
                        </div>
                    </div>

                    {/* KloudControl */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-1 bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            {/* Placeholder for KloudControl UI */}
                            <Settings className="w-24 h-24 text-gray-300" />
                        </div>
                        <div className="order-2">
                            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                <Zap className="w-4 h-4" />
                                <span>Optimize Cost & Performance</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">KloudControl</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                KloudControl continuously analyzes cloud infrastructure and platform usage to eliminate inefficiencies and waste.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                                {['Infrastructure rightsizing', 'Databricks optimization', 'Kubernetes optimization', 'Agentic Spot orchestration', 'Storage lifecycle', 'Anomaly detection', 'Performance-cost correlation', 'TCO analytics'].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-8">
                                <span className="font-semibold text-green-900">Outcome:</span>
                                <span className="text-green-800 ml-1">Continuous cost reduction and improved resource utilization without affecting workload performance.</span>
                            </div>
                            <button className="text-green-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                                <span>Explore Optimization</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* KloudGuard */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                <Shield className="w-4 h-4" />
                                <span>Govern & Secure Environments</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">KloudGuard</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                KloudGuard ensures cloud environments remain secure, compliant, and governed through automated policy enforcement and monitoring.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Continuous compliance monitoring', 'Security posture visibility', 'Policy and governance enforcement', 'Risk identification and prioritization', 'Guardrail enforcement'].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 mb-8">
                                <span className="font-semibold text-purple-900">Outcome:</span>
                                <span className="text-purple-800 ml-1">Secure and compliant environments without slowing innovation or operations.</span>
                            </div>
                            <button className="text-purple-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                                <span>See Governance in Action</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="order-1 lg:order-2 bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            {/* Placeholder for KloudGuard UI */}
                            <Shield className="w-24 h-24 text-gray-300" />
                        </div>
                    </div>

                    {/* KloudOps */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-1 bg-gray-100 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            {/* Placeholder for KloudOps UI */}
                            <Layers className="w-24 h-24 text-gray-300" />
                        </div>
                        <div className="order-2">
                            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                <Layers className="w-4 h-4" />
                                <span>Operate with Business Context</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">KloudOps</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                KloudOps connects infrastructure efficiency with application performance and business outcomes.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Agentic AI driven automation of recommendations', 'Real time ROI improvement and maturity progress', 'Generative AI operational insights'].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-8">
                                <span className="font-semibold text-orange-900">Outcome:</span>
                                <span className="text-orange-800 ml-1">Engineering, operations, and finance teams understand how infrastructure decisions affect business services.</span>
                            </div>
                            <button className="text-orange-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                                <span>Explore KloudOps</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Differentiation & GenAI */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <Target className="w-6 h-6 text-green-400 mr-2" />
                                    Optimization That Protects Business Outcomes
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Traditional cost optimization tools focus on savings alone. LeanKloud ensures optimization never compromises application performance or business operations.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Validates optimization actions against workload behavior',
                                        'Applies safe & secure optimization boundaries',
                                        'Preserves application performance and availability',
                                        'Aligns cost reduction with business priorities'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <MessageSquare className="w-6 h-6 text-blue-400 mr-2" />
                                    Generative AI & Agentic Automation Layer
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    LeanKloud leverages agentic AI and generative intelligence to simplify operations.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'Ask natural language questions about spend and performance',
                                        'Understand cost drivers instantly',
                                        'Receive prioritized optimization insights',
                                        'Automate remediation actions safely'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Business Impact Delivered</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { metric: '30–60%', desc: 'Reduction in cloud waste', bg: 'bg-green-100', text: 'text-green-700' },
                            { metric: 'Improved', desc: 'Workload performance and reliability', bg: 'bg-blue-100', text: 'text-blue-700' },
                            { metric: 'Stronger', desc: 'Governance and compliance posture', bg: 'bg-purple-100', text: 'text-purple-700' },
                            { metric: 'Higher', desc: 'Engineering productivity', bg: 'bg-orange-100', text: 'text-orange-700' },
                            { metric: 'Better', desc: 'Alignment between infrastructure spend and business value', bg: 'bg-teal-100', text: 'text-teal-700' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className={`inline-block px-4 py-2 rounded-full font-bold text-lg mb-4 ${stat.bg} ${stat.text}`}>
                                    {stat.metric}
                                </div>
                                <p className="text-gray-700 font-medium">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                        Ready to Make Cloud Operations Autonomous?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                            Request Demo
                        </button>
                        <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all border-2 border-blue-600">
                            Start Your Assessment
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
