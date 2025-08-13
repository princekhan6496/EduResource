export interface Resource {
  id: string;
  title: string;
  description: string;
  subject: string;
  semester: string;
  type: 'pyq' | 'notes' | 'guide' | 'reference';
  fileUrl?: string;
  previewUrl?: string;
  uploadedBy: string;
  uploadedAt: string;
  tags: string[];
  downloadCount: number;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
}

export interface Semester {
  id: string;
  name: string;
  value: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
}