import Link from 'next/link';
import { BookOpen, FileText, BookMarked, ExternalLink, ArrowRight, Users, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ResourceCard from '@/components/resources/ResourceCard';
import { resources } from '@/lib/mock-data';

export default function Home() {
  const featuredResources = resources.slice(0, 3);
  const stats = [
    { label: 'Resources Available', value: '500+', icon: BookOpen },
    { label: 'Active Students', value: '1200+', icon: Users },
    { label: 'Total Downloads', value: '5000+', icon: Download },
    { label: 'Average Rating', value: '4.8', icon: Star },
  ];

  const resourceTypes = [
    {
      type: 'pyq',
      title: 'Previous Year Papers',
      description: 'Access question papers from previous years to understand exam patterns',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      count: '150+'
    },
    {
      type: 'notes',
      title: 'Class Notes',
      description: 'Comprehensive notes from lectures and classes',
      icon: BookOpen,
      color: 'bg-green-50 text-green-600 border-green-200',
      count: '200+'
    },
    {
      type: 'guide',
      title: 'Study Guides',
      description: 'Curated study materials and revision guides',
      icon: BookMarked,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      count: '100+'
    },
    {
      type: 'reference',
      title: 'Reference Links',
      description: 'External resources and helpful links',
      icon: ExternalLink,
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      count: '50+'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your College Resource{' '}
              <span className="text-blue-600">Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access previous year question papers, class notes, study guides, and reference materials 
              to excel in your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Browse Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Find
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a comprehensive collection of academic resources tailored for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceTypes.map((item) => (
              <Link key={item.type} href={`/resources?type=${item.type}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {item.count} resources
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Uploads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recently added resources from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/resources">
              <Button size="lg" variant="outline">
                View All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already using CollegeHub to improve their academic performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                Create Account
              </Button>
            </Link>
            <Link href="/admin/upload">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-blue-600">
                Upload Resource
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}