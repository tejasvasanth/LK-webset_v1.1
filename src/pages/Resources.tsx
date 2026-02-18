import { blogs } from '../data/blogs';
import { Link } from 'react-router-dom';


export default function Resources() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Blogs and Case Studies</h1>

                {/* Blogs Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </span>
                        Latest Insights
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full">
                                <div className="h-48 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
                                    Blog Image
                                </div>
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {blog.subheading}
                                </p>
                                <div className="mt-auto">
                                    {blog.externalLink ? (
                                        <a href={blog.externalLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-700">
                                            {blog.linkText || 'Read Article \u2192'}
                                        </a>
                                    ) : (
                                        <Link to={`/resources/blog/${blog.id}`} className="text-blue-600 font-medium hover:text-blue-700">Read Article &rarr;</Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
