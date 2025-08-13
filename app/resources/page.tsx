'use client';

import { useState, useEffect } from 'react';
import { Filter, GridIcon, ListIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SearchBar from '@/components/resources/SearchBar';
import FilterDropdown from '@/components/resources/FilterDropdown';
import ResourceCard from '@/components/resources/ResourceCard';
import { searchResources, subjects, semesters } from '@/lib/mock-data';
import { Resource } from '@/types';

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    subject: 'all',
    semester: 'all',
    type: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timer = setTimeout(() => {
      const filteredResources = searchResources(searchQuery, {
        subject: filters.subject === 'all' ? undefined : filters.subject,
        semester: filters.semester === 'all' ? undefined : filters.semester,
        type: filters.type === 'all' ? undefined : filters.type,
      });
      setResources(filteredResources);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      subject: 'all',
      semester: 'all',
      type: 'all'
    });
    setSearchQuery('');
  };

  const typeOptions = [
    { value: 'pyq', label: 'Previous Year Papers' },
    { value: 'notes', label: 'Class Notes' },
    { value: 'guide', label: 'Study Guides' },
    { value: 'reference', label: 'Reference Links' }
  ];

  const subjectOptions = subjects.map(subject => ({
    value: subject.name,
    label: subject.name
  }));

  const semesterOptions = semesters.map(semester => ({
    value: semester.value,
    label: semester.name
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find the perfect study materials for your subjects
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64">
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full justify-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>

            <Card className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <FilterDropdown
                    label="Resource Type"
                    value={filters.type}
                    onChange={(value) => handleFilterChange('type', value)}
                    options={typeOptions}
                    placeholder="Select type"
                  />
                  
                  <FilterDropdown
                    label="Subject"
                    value={filters.subject}
                    onChange={(value) => handleFilterChange('subject', value)}
                    options={subjectOptions}
                    placeholder="Select subject"
                  />
                  
                  <FilterDropdown
                    label="Semester"
                    value={filters.semester}
                    onChange={(value) => handleFilterChange('semester', value)}
                    options={semesterOptions}
                    placeholder="Select semester"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {loading ? 'Loading...' : `${resources.length} resources found`}
                </h2>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <GridIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <ListIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Grid/List */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <Card>
                      <CardContent className="p-6">
                        <div className="h-4 bg-gray-200 rounded mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded mb-4"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ) : resources.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Filter className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No resources found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button onClick={clearFilters}>
                    Clear all filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}