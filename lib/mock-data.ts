import { Resource, Subject, Semester } from '@/types';

export const subjects: Subject[] = [
  { id: '1', name: 'Computer Science', code: 'CS' },
  { id: '2', name: 'Mathematics', code: 'MATH' },
  { id: '3', name: 'Physics', code: 'PHY' },
  { id: '4', name: 'Chemistry', code: 'CHEM' },
  { id: '5', name: 'Electronics', code: 'ECE' },
  { id: '6', name: 'Mechanical Engineering', code: 'ME' },
  { id: '7', name: 'Civil Engineering', code: 'CE' },
  { id: '8', name: 'English Literature', code: 'ENG' },
];

export const semesters: Semester[] = [
  { id: '1', name: '1st Semester', value: '1' },
  { id: '2', name: '2nd Semester', value: '2' },
  { id: '3', name: '3rd Semester', value: '3' },
  { id: '4', name: '4th Semester', value: '4' },
  { id: '5', name: '5th Semester', value: '5' },
  { id: '6', name: '6th Semester', value: '6' },
  { id: '7', name: '7th Semester', value: '7' },
  { id: '8', name: '8th Semester', value: '8' },
];

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Data Structures and Algorithms - Final Exam 2023',
    description: 'Comprehensive final exam covering all topics from DSA including trees, graphs, sorting, and dynamic programming.',
    subject: 'Computer Science',
    semester: '3',
    type: 'pyq',
    fileUrl: '/files/dsa-final-2023.pdf',
    previewUrl: '/previews/dsa-final-2023.jpg',
    uploadedBy: 'John Doe',
    uploadedAt: '2024-01-15',
    tags: ['algorithms', 'data-structures', 'final-exam'],
    downloadCount: 245
  },
  {
    id: '2',
    title: 'Linear Algebra Complete Notes',
    description: 'Detailed lecture notes covering vector spaces, eigenvalues, matrix operations, and transformations.',
    subject: 'Mathematics',
    semester: '2',
    type: 'notes',
    fileUrl: '/files/linear-algebra-notes.pdf',
    previewUrl: '/previews/linear-algebra-notes.jpg',
    uploadedBy: 'Sarah Smith',
    uploadedAt: '2024-01-12',
    tags: ['linear-algebra', 'vectors', 'matrices'],
    downloadCount: 189
  },
  {
    id: '3',
    title: 'Quantum Mechanics Study Guide',
    description: 'Comprehensive study guide for quantum mechanics with solved problems and key concepts.',
    subject: 'Physics',
    semester: '5',
    type: 'guide',
    fileUrl: '/files/quantum-mechanics-guide.pdf',
    previewUrl: '/previews/quantum-mechanics-guide.jpg',
    uploadedBy: 'Mike Johnson',
    uploadedAt: '2024-01-10',
    tags: ['quantum-mechanics', 'physics', 'study-guide'],
    downloadCount: 167
  },
  {
    id: '4',
    title: 'Organic Chemistry Reference Links',
    description: 'Curated collection of online resources, video lectures, and interactive simulations for organic chemistry.',
    subject: 'Chemistry',
    semester: '4',
    type: 'reference',
    fileUrl: '/files/organic-chemistry-links.pdf',
    previewUrl: '/previews/organic-chemistry-links.jpg',
    uploadedBy: 'Emily Davis',
    uploadedAt: '2024-01-08',
    tags: ['organic-chemistry', 'references', 'online-resources'],
    downloadCount: 134
  },
  {
    id: '5',
    title: 'Digital Signal Processing - Midterm 2023',
    description: 'Midterm examination covering FFT, filters, and signal analysis techniques.',
    subject: 'Electronics',
    semester: '6',
    type: 'pyq',
    fileUrl: '/files/dsp-midterm-2023.pdf',
    previewUrl: '/previews/dsp-midterm-2023.jpg',
    uploadedBy: 'David Wilson',
    uploadedAt: '2024-01-05',
    tags: ['dsp', 'signal-processing', 'midterm'],
    downloadCount: 98
  },
  {
    id: '6',
    title: 'Thermodynamics Lecture Notes',
    description: 'Complete set of lecture notes covering laws of thermodynamics, heat engines, and entropy.',
    subject: 'Mechanical Engineering',
    semester: '3',
    type: 'notes',
    fileUrl: '/files/thermodynamics-notes.pdf',
    previewUrl: '/previews/thermodynamics-notes.jpg',
    uploadedBy: 'Lisa Brown',
    uploadedAt: '2024-01-03',
    tags: ['thermodynamics', 'heat-engines', 'entropy'],
    downloadCount: 156
  }
];

// Mock function to simulate search
export const searchResources = (query: string, filters: {
  subject?: string;
  semester?: string;
  type?: string;
}): Resource[] => {
  return resources.filter(resource => {
    const matchesQuery = query === '' || 
      resource.title.toLowerCase().includes(query.toLowerCase()) ||
      resource.description.toLowerCase().includes(query.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    
    const matchesSubject = !filters.subject || resource.subject === filters.subject;
    const matchesSemester = !filters.semester || resource.semester === filters.semester;
    const matchesType = !filters.type || resource.type === filters.type;
    
    return matchesQuery && matchesSubject && matchesSemester && matchesType;
  });
};