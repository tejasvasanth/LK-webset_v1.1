
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Blogs() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Blogs</h1>
                <p className="text-xl text-gray-600 mb-12">
                    Latest news, insights, and updates from the KloudOps team.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => {
                        const isExternal = !!blog.externalLink;
                        const linkDestination = blog.externalLink || `/resources/blog/${blog.id}`;

                        // Helper to render the appropriate link wrapper
                        const BlogLink = ({ children, className }: { children: React.ReactNode, className?: string }) => {
                            if (isExternal) {
                                return (
                                    <a
                                        href={linkDestination}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={className}
                                    >
                                        {children}
                                    </a>
                                );
                            }
                            return (
                                <Link to={linkDestination} className={className}>
                                    {children}
                                </Link>
                            );
                        };

                        return (
                            <div key={blog.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col">
                                <BlogLink className="block mb-4">
                                    <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 overflow-hidden">
                                        {blog.image ? (
                                            <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform hover:scale-105" />
                                        ) : (
                                            <span>Blog Image Placeholder</span>
                                        )}
                                    </div>
                                </BlogLink>
                                <div className="flex-1">
                                    <p className="text-sm text-blue-600 mb-2">{blog.date}</p>
                                    <BlogLink className="hover:text-blue-600">
                                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                                    </BlogLink>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {blog.subheading}
                                    </p>
                                </div>
                                <BlogLink className="text-blue-600 font-medium hover:text-blue-700 mt-auto inline-block">
                                    {blog.linkText || 'Read more \u2192'}
                                </BlogLink>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
