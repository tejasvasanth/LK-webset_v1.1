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
            <Link to="/company" className={`${isActive('/company')} transition-colors font-medium`}>Company</Link>
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
