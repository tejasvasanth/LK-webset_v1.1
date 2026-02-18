import React from 'react';
import {
    Bot,
    Cpu,
    Database,
    Box,
    BarChart3,
    Percent,
    HardDrive,
    Tag,
    Activity,
    ShieldCheck,
    MessageSquare,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CapabilitiesPage() {
    const capabilities = [
        {
            title: "Agentic AI Optimization Engine",
            description: "LeanKloud’s agentic AI continuously analyzes usage patterns and executes optimization actions safely across cloud environments.",
            features: [
                "Automatic identification of inefficiencies",
                "Execution of safe optimization actions",
                "Continuous environment improvement",
                "Policy-driven optimization enforcement"
            ],
            outcome: "Environments become more efficient without manual effort.",
            icon: Bot,
            color: "blue"
        },
        {
            title: "Compute Optimization",
            description: "LeanKloud continuously optimizes compute resources across cloud environments by identifying idle, oversized, or underutilized virtual machines and compute services.",
            features: [
                "Rightsizing compute resources",
                "Eliminating idle or unused instances",
                "Workload-aware scaling recommendations",
                //"Continuous utilization monitoring"
            ],
            outcome: "Reduced infrastructure waste while maintaining application performance.",
            icon: Cpu,
            color: "indigo"
        },
        {
            title: "Database Optimization",
            description: "LeanKloud optimizes managed database deployments such as Amazon RDS, Azure SQL, and other vCore/DTU-based services to eliminate overprovisioning without impacting performance.",
            features: [
                "Identification of underutilized database instances",
                "Database sizing optimization",
                "Cost-performance balancing recommendations",
                //"Continuous utilization tracking"
            ],
            outcome: "Lower database spend while meeting application performance requirements.",
            icon: Database,
            color: "cyan"
        },
        {
            title: "Kubernetes Optimization",
            description: "LeanKloud analyzes container, pod, and node utilization to improve Kubernetes efficiency without disrupting workloads.",
            features: [
                "Pod and container rightsizing recommendations",
                "Node utilization optimization",
                "Autoscaling configuration improvements",
                "Idle resource elimination"
            ],
            outcome: "Efficient Kubernetes clusters without affecting workload reliability.",
            icon: Box,
            color: "violet"
        },
        {
            title: "Databricks Optimization",
            description: "LeanKloud optimizes Databricks environments by identifying inefficient clusters and workloads while preserving analytics performance.",
            features: [
                "Idle cluster detection",
                "Cluster sizing recommendations",
                "Inefficient job identification",
                "Query and workload cost optimization"
            ],
            outcome: "Reduced analytics platform spend without slowing data workloads.",
            icon: BarChart3,
            color: "teal"
        },
        {
            title: "Spot Capacity Orchestration",
            description: "LeanKloud uses agentic intelligence to safely leverage spot capacity for compute workloads.",
            features: [
                "Dynamic workload placement",
                "Automatic fallback to on-demand capacity",
                "Interruption risk management",
                "Continuous savings optimization"
            ],
            outcome: "Compute savings achieved without service disruption.",
            icon: Percent,
            color: "emerald"
        },
        {
            title: "Storage & Disk Optimization",
            description: "LeanKloud reduces storage waste across cloud environments through intelligent storage lifecycle management and automation.",
            features: [
                "Compression of infrequently accessed storage data",
                "Seamless decompression during access",
                "Remediation of idle and unattached disks",
                "Disk IOPS optimization",
                "Disk resizing recommendations",
                "Snapshot lifecycle management aligned to business recovery needs"


            ],
            outcome: "Lower storage costs without affecting application or data access.",
            icon: HardDrive,
            color: "amber"
        },
        {
            title: "Application Cost Attribution & TCO Visibility",
            description: "LeanKloud connects infrastructure spending to applications and business services, enabling better cost ownership and optimization decisions.",
            features: [
                "Mapping spend to applications and services",
                "Business unit cost visibility",
                "Service dependency insights",
                "Total cost of ownership analytics"
            ],
            outcome: "Infrastructure optimization aligned with business value.",
            icon: Tag,
            color: "pink"
        },
        {
            title: "Cost Anomaly Detection",
            description: "LeanKloud continuously monitors spending patterns to identify abnormal or unexpected cost behavior.",
            features: [
                "Real-time anomaly detection",
                "Contextual cost alerts",
                "Root cause insights",
                "Corrective action recommendations"
            ],
            outcome: "Prevent cost surprises before they escalate.",
            icon: Activity,
            color: "red"
        },
        {
            title: "Budget & Governance Enforcement",
            description: "LeanKloud automatically enforces cost and governance policies to prevent inefficiencies and compliance risks.",
            features: [
                "Budget enforcement automation",
                "Governance policy enforcement",
                "Resource policy guardrails",
                "Continuous compliance monitoring"
            ],
            outcome: "Environments remain efficient and compliant without manual oversight.",
            icon: ShieldCheck,
            color: "slate"
        },
        {
            title: "Generative AI Insights UI",
            description: "LeanKloud simplifies operations by allowing users to ask natural language questions about their environment.",
            features: [
                "Why did cloud spend increase?",
                "Which workloads are inefficient?",
                "Where can savings be achieved?"
            ],
            outcome: "Faster insights and simpler operations.",
            icon: MessageSquare,
            color: "purple"
        }
    ];

    const outcomes = [
        "30–60% reduction in cloud waste",
        "Improved workload performance",
        "Stronger governance and compliance posture",
        "Improved engineering productivity",
        "Optimization without operational risk"
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
                        Capabilities Powering <br />
                        <span className="text-blue-600">Autonomous Cloud Optimization</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        LeanKloud continuously optimizes cloud environments across infrastructure, Kubernetes, and data platforms while preserving application performance and business outcomes.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/platform" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                            Explore Platform
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Optimize Every Layer of Your Cloud Environment</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Cloud inefficiencies occur across compute, storage, databases, containers, and data platforms. LeanKloud provides continuous optimization capabilities across all cloud assets and services.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Every capability is designed to improve efficiency without compromising application performance, reliability, or business impact.
                    </p>
                    <div className="inline-block bg-blue-50 border border-blue-100 rounded-lg px-6 py-3">
                        <span className="text-blue-800 font-semibold">Result: lower cloud spend, better performance, and safer operations.</span>
                    </div>
                </div>
            </section>

            {/* Capabilities Sections */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {capabilities.map((cap, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8 border border-gray-100">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className={`p-3 rounded-lg bg-${cap.color}-100 shrink-0`}>
                                        <cap.icon className={`w-8 h-8 text-${cap.color}-600`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{cap.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{cap.description}</p>
                                    </div>
                                </div>

                                <div className="mb-6 pl-4 border-l-2 border-gray-100">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Capabilities include:</h4>
                                    <ul className="space-y-2">
                                        {cap.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 shrink-0" />
                                    <p className="text-sm font-medium text-gray-900">
                                        <span className="font-bold">Outcome:</span> {cap.outcome}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Impact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">Business Outcomes Delivered</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                                {outcomes.map((outcome, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="bg-white/20 rounded-full p-1 mt-1 shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-lg font-medium text-blue-50">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Optimize Your Cloud Environment Safely?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                            Request Demo
                        </Link>
                        <Link to="/assessment" className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            Start Your Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
