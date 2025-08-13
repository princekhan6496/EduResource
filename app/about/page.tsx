import { BookOpen, Users, Download, Star, Target, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const stats = [
    { label: 'Resources Available', value: '500+', icon: BookOpen },
    { label: 'Active Students', value: '1200+', icon: Users },
    { label: 'Total Downloads', value: '5000+', icon: Download },
    { label: 'Average Rating', value: '4.8', icon: Star },
  ];

  const values = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'We believe in empowering students to achieve their academic goals through easy access to quality resources.'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Built by students, for students. Our platform thrives on community contributions and collaborative learning.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best user experience and most effective learning tools.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Lead Developer',
      description: 'Computer Science student passionate about building tools that help fellow students succeed.'
    },
    {
      name: 'Sarah Chen',
      role: 'Content Curator',
      description: 'Mathematics major focused on ensuring quality and accuracy of all uploaded resources.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Community Manager',
      description: 'Psychology student dedicated to building and maintaining our vibrant student community.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">CollegeHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            We're on a mission to democratize access to quality educational resources, 
            helping students excel in their academic journey through community-driven sharing.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              CollegeHub was born from a simple observation: students often struggle to find 
              quality study materials, previous year papers, and comprehensive notes. We believe 
              that education should be accessible, collaborative, and community-driven.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our platform connects students across institutions, allowing them to share resources, 
              learn from each other, and build a stronger academic community. Together, we're 
              making quality education accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that showcase our growing community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The students behind CollegeHub, working to make education better for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-4"></div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get started with CollegeHub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browse Resources</h3>
              <p className="text-gray-600">
                Search through our extensive collection of previous year papers, notes, 
                and study guides organized by subject and semester.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download & Study</h3>
              <p className="text-gray-600">
                Access high-quality resources instantly. Download PDF files, 
                view previews, and study materials that match your curriculum.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contribute Back</h3>
              <p className="text-gray-600">
                Share your own notes and resources with the community. 
                Help fellow students by uploading quality study materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Have questions, suggestions, or want to contribute? We'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">hello@collegehub.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Join Our Community</h3>
              <p className="text-blue-100">Discord Server Coming Soon</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Updates</h3>
              <p className="text-blue-100">@CollegeHubOfficial</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}