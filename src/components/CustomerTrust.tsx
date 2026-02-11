import { Building2, Quote } from 'lucide-react';

export default function CustomerTrust() {
  const logos = [
    'TechCorp', 'DataFlow', 'CloudScale', 'InnovateLabs',
    'NextGen', 'StreamLine', 'DataSync', 'CloudFirst'
  ];

  const testimonials = [
    {
      quote: "KloudOps reduced our cloud spend by 43% in the first quarter while improving application performance. The agentic AI approach means we're continuously optimizing without dedicating engineering resources.",
      author: "Sarah Chen",
      title: "VP of Engineering",
      company: "TechCorp"
    },
    {
      quote: "The Kloudlens assessment gave us clarity we never had before. Within minutes, we understood exactly where our biggest optimization opportunities were and had a clear roadmap to act on them.",
      author: "Michael Rodriguez",
      title: "Head of Cloud Operations",
      company: "DataFlow"
    },
    {
      quote: "What sets KloudOps apart is the autonomous execution. We're not drowning in recommendations—the platform just makes our infrastructure more efficient automatically, with complete transparency.",
      author: "Jennifer Park",
      title: "CTO",
      company: "CloudScale"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Companies of all sizes rely on our platform to optimize their cloud operations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {logos.map((logo) => (
            <div
              key={logo}
              className="bg-white rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <Building2 className="w-6 h-6" />
                <span className="font-bold text-lg">{logo}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-blue-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors">
            View Customer Stories →
          </button>
        </div>
      </div>
    </section>
  );
}
