'use client';

import Link from 'next/link';
import { Download, User, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Resource } from '@/types';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
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
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Badge className={`${getTypeColor(resource.type)} text-xs font-medium`}>
            {getTypeLabel(resource.type)}
          </Badge>
          <span className="text-xs text-gray-500 font-medium">
            Semester {resource.semester}
          </span>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
          <Link href={`/resources/${resource.id}`}>
            {resource.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {resource.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="py-3">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Tag className="h-4 w-4 mr-2 text-gray-400" />
            <span className="font-medium text-gray-700">{resource.subject}</span>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              <span>{resource.uploadedBy}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{new Date(resource.uploadedAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {resource.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {resource.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{resource.tags.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-3">
        <div className="flex items-center justify-between w-full">
          <span className="text-xs text-gray-500">
            {resource.downloadCount} downloads
          </span>
          <div className="flex gap-2">
            <Link href={`/resources/${resource.id}`}>
              <Button variant="outline" size="sm" className="text-xs">
                View Details
              </Button>
            </Link>
            <Button size="sm" className="text-xs">
              <Download className="h-3 w-3 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;