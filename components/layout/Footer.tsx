import Link from 'next/link';
import { BookOpen, Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">CollegeHub</span>
            </Link>
            <p className="mt-4 text-gray-300 max-w-md">
              Your one-stop platform for college resources. Access previous year question papers, 
              class notes, study guides, and reference materials to excel in your academics.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Browse Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admin/upload" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Upload Resource
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources?type=pyq" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Previous Year Papers
                </Link>
              </li>
              <li>
                <Link href="/resources?type=notes" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Class Notes
                </Link>
              </li>
              <li>
                <Link href="/resources?type=guide" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Study Guides
                </Link>
              </li>
              <li>
                <Link href="/resources?type=reference" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Reference Links
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 CollegeHub. All rights reserved. Built for students, by students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;