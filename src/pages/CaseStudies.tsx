

export default function CaseStudies() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
                <p className="text-xl text-gray-600">
                    See how leading companies are using KloudOps to transform their cloud operations.
                </p>
                {/* Case Studies content placeholder */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {[1, 2].map((item) => (
                        <div key={item} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="h-64 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
                                Case Study Image Placeholder
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">Success Story {item}</h3>
                            <p className="text-gray-600 mb-4">
                                Detailed description of how a customer achieved significant results using our platform. key metrics and outcomes.
                            </p>
                            <a href="#" className="text-blue-600 font-medium hover:text-blue-700">View case study &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
