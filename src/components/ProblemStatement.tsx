import { HelpCircle, ArrowRight } from 'lucide-react';

export default function ProblemStatement() {
  const problems = [
    'Are cloud costs rising without clarity on drivers?',
    'Are Databricks or Kubernetes workloads becoming expensive?',
    'Are optimization efforts manual and reactive?',
    'Do teams lack application-level cost visibility?',
    'Are governance and security compliance becoming harder to enforce?',
    'Is FinOps disconnected from engineering operations?',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Is Your Cloud Environment Becoming Harder to Control?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{problem}</h3>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-lg text-gray-700 font-semibold">
            <span className="text-blue-600">LeanKloud transforms cloud operations into an intelligent, self-optimizing system.</span>
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center space-x-2 shadow-lg transform hover:scale-105">
            <span>See How LeanKloud Helps</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
