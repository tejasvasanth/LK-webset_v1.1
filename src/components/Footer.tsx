import { Cloud, Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: ['Kloudlens', 'KloudControl', 'KloudGuard', 'KloudOps', 'Pricing']
    },
    {
      title: 'Solutions',
      links: ['FinOps', 'Kubernetes', 'Data Platforms', 'AI Operations', 'Enterprise']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Blog', 'Case Studies', 'Webinars', 'ROI Calculator']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Partners', 'Contact', 'Press Kit']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">KloudOps</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Autonomous cloud operations powered by agentic AI. Optimize costs,
              improve performance, and automate governance across your entire cloud infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 KloudOps. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
