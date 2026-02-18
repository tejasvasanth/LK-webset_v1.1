import { Cpu, Database, BarChart3, Box, Zap, HardDrive, DollarSign, ArrowRight } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Compute Optimization',
      description: 'Continuously optimize virtual machines and compute services through intelligent rightsizing, idle resource elimination, and workload-aware scaling — reducing cost while maintaining application performance.'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Optimize managed database services such as RDS, Azure SQL, and other vCore/DTU-based deployments by identifying overprovisioned or underutilized instances while preserving performance requirements.'
    },
    {
      icon: BarChart3,
      title: 'Databricks Optimization',
      description: 'Reduce inefficient clusters and expensive queries while ensuring analytics workloads continue to meet performance expectations.'
    },
    {
      icon: Box,
      title: 'Kubernetes Optimization',
      description: 'Optimize nodes, pods, and cluster utilization safely to reduce waste while maintaining workload reliability and scalability.'
    },
    {
      icon: Zap,
      title: 'Agentic Spot Orchestration',
      description: 'Leverage spot capacity intelligently to maximize compute savings while protecting workloads from interruptions.'
    },
    {
      icon: HardDrive,
      title: 'Intelligent Storage & Disk Optimization',
      description: 'Reduce storage costs by compressing infrequently accessed data while also identifying idle disks, unattached volumes, oversized disks, and managing snapshots to meet business recovery and retention requirements — all without impacting application access.'
    },
    {
      icon: DollarSign,
      title: 'Application Cost & TCO Visibility',
      description: 'Map infrastructure spend to applications and business services to understand true cost drivers and enable smarter optimization decisions.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Capability Highlights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <capability.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-lg transform hover:scale-105">
            <span>View All Capabilities</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
