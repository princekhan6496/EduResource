import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, User, Calendar, Tag, Eye, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { resources } from '@/lib/mock-data';

interface ResourceDetailPageProps {
  params: {
    id: string;
  };
}

export default function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const resource = resources.find(r => r.id === params.id);

  if (!resource) {
    notFound();
  }

  const getTypeColor = (type: string) => {
    const colors = {
      pyq: 'bg-blue-100 text-blue-800 border-blue-200',
      notes: 'bg-green-100 text-green-800 border-green-200',
      guide: 'bg-purple-100 text-purple-800 border-purple-200',
      reference: 'bg-orange-100 text-orange-800 border-orange-200',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      pyq: 'Previous Year Paper',
      notes: 'Class Notes',
      guide: 'Study Guide',
      reference: 'Reference Links',
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/resources">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`${getTypeColor(resource.type)} text-sm font-medium`}>
                        {getTypeLabel(resource.type)}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Semester {resource.semester}
                      </Badge>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {resource.title}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center text-gray-600">
                    <Tag className="h-5 w-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Subject</div>
                      <div className="font-medium text-gray-900">{resource.subject}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <User className="h-5 w-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Uploaded by</div>
                      <div className="font-medium text-gray-900">{resource.uploadedBy}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Upload date</div>
                      <div className="font-medium text-gray-900">
                        {new Date(resource.uploadedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Preview Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <Eye className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">PDF preview would be displayed here</p>
                    <p className="text-sm text-gray-500 mt-2">Preview functionality coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Download Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Download Resource</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {resource.downloadCount}
                    </div>
                    <div className="text-sm text-gray-500">Total downloads</div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Download className="h-5 w-5 mr-2" />
                    Download Now
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Resource
                  </Button>
                  
                  <div className="text-xs text-gray-500 text-center">
                    Free download • No registration required
                  </div>
                </CardContent>
              </Card>

              {/* Resource Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resource Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700">File Type</div>
                      <div className="text-sm text-gray-600">PDF Document</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">File Size</div>
                      <div className="text-sm text-gray-600">2.4 MB</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">Pages</div>
                      <div className="text-sm text-gray-600">12 pages</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-700">Language</div>
                      <div className="text-sm text-gray-600">English</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resources
                      .filter(r => r.id !== resource.id && r.subject === resource.subject)
                      .slice(0, 3)
                      .map((relatedResource) => (
                      <div key={relatedResource.id} className="border-l-2 border-blue-500 pl-3">
                        <Link 
                          href={`/resources/${relatedResource.id}`}
                          className="block hover:text-blue-600 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                            {relatedResource.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {getTypeLabel(relatedResource.type)}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}