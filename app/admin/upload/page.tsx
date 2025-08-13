'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Upload, FileText, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { subjects, semesters } from '@/lib/mock-data';

export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    semester: '',
    type: '',
    tags: [] as string[],
    file: null as File | null
  });
  const [currentTag, setCurrentTag] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const resourceTypes = [
    { value: 'pyq', label: 'Previous Year Paper' },
    { value: 'notes', label: 'Class Notes' },
    { value: 'guide', label: 'Study Guide' },
    { value: 'reference', label: 'Reference Links' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle upload logic here
    console.log('Upload attempt:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.dataTransfer.files[0]
      }));
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
              Upload Resource
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Share your study materials with the community
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Resource File
                </Label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive 
                      ? 'border-blue-500 bg-blue-50' 
                      : formData.file 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  {formData.file ? (
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <FileText className="h-8 w-8" />
                      <div>
                        <div className="font-medium">{formData.file.name}</div>
                        <div className="text-sm text-gray-500">
                          {Math.round(formData.file.size / 1024)} KB
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-10 w-10 mx-auto text-gray-400" />
                      <div className="text-lg font-medium text-gray-900">
                        Drop your file here, or <span className="text-blue-600">browse</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        PDF, DOC, DOCX, PPT, PPTX up to 10MB
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Resource Type */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Resource Type
                  </Label>
                  <Select value={formData.type} onValueChange={(value) => handleSelectChange('type', value)}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select resource type" />
                    </SelectTrigger>
                    <SelectContent>
                      {resourceTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Semester */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Semester
                  </Label>
                  <Select value={formData.semester} onValueChange={(value) => handleSelectChange('semester', value)}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {semesters.map((semester) => (
                        <SelectItem key={semester.id} value={semester.value}>
                          {semester.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Subject
                </Label>
                <Select value={formData.subject} onValueChange={(value) => handleSelectChange('subject', value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.name}>
                        {subject.name} ({subject.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                  Resource Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Data Structures Final Exam 2023"
                  required
                  className="h-11"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed description of the resource content..."
                  required
                  rows={4}
                  className="resize-none"
                />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Tags
                </Label>
                <div className="flex space-x-2">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={handleTagKeyPress}
                    placeholder="Add tags..."
                    className="h-11"
                  />
                  <Button type="button" onClick={addTag} size="icon" className="h-11 w-11">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm pr-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Link href="/">
                    <Button type="button" variant="outline" className="w-full sm:w-auto">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Resource
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}