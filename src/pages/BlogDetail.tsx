import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';

export default function BlogDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(blogs.find(b => b.id === id));

    useEffect(() => {
        const foundBlog = blogs.find(b => b.id === id);
        if (!foundBlog) {
            // Handle not found
            navigate('/resources');
        } else if (foundBlog.externalLink) {
            // Redirect to external link if this blog is external-only
            window.location.href = foundBlog.externalLink;
        } else {
            setBlog(foundBlog);
        }
    }, [id, navigate]);

    if (!blog) {
        return <div>Loading...</div>; // Or a custom 404 component
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation is included in the MainLayout in App.tsx, but if this page is standalone or needs specific layout, handle accordingly. 
          Assuming it runs inside MainLayout, we don't need to re-add Navigation here if App.tsx handles it. 
          However, usually detail pages share the main layout. 
          Let's assume MainLayout wraps this route.
      */}

            <div className="pt-24 pb-16">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">{blog.date}</span>
                        <h1 className="mt-2 text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl sm:leading-none">
                            {blog.title}
                        </h1>
                        <div className="mt-4 flex items-center">
                            <div className="flex-shrink-0">
                                <span className="sr-only">{blog.author}</span>
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                                    {blog.author.charAt(0)}
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    {blog.author}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-blue mx-auto text-gray-500">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </article>
            </div>
        </div>
    );
}
