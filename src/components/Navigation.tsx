import { Cloud } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cloud className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">KloudOps</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/platform" className={`${isActive('/platform')} transition-colors font-medium`}>Platform</Link>
            <Link to="/solutions" className={`${isActive('/solutions')} transition-colors font-medium`}>Solutions</Link>
            <Link to="/capabilities" className={`${isActive('/capabilities')} transition-colors font-medium`}>Capabilities</Link>
            <Link to="/customers" className={`${isActive('/customers')} transition-colors font-medium`}>Customers</Link>
            <div className="relative group h-full flex items-center">
              <button className={`${isActive('/company') || isActive('/resources') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors font-medium flex items-center h-full`}>
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Invisible bridge to prevent hover loss */}
              <div className="absolute top-full left-0 w-48 pt-2 hidden group-hover:block">
                <div className="bg-white rounded-md shadow-lg py-1 border border-gray-100">
                  <Link to="/company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">About</Link>
                  <Link to="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600">Blogs and Case Studies</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/kloudlens" className="text-gray-700 hover:text-blue-600 font-medium">Assess</Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
