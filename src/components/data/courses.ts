export interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
    level: string;
    duration: string;
    modules: number;
    enrolled: number;
    rating: number;
    image: string;
    modulesList: Module[];
  }
  
  export interface Module {
    id: number;
    title: string;
    duration: string;
    completed: boolean;
    locked?: boolean;
  }
  
  export const courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Cybersecurity',
      description: 'Learn the fundamentals of cybersecurity and basic security concepts through hands-on exercises and real-world examples.',
      instructor: 'Dr. Sarah Chen',
      level: 'Beginner',
      duration: '4 weeks',
      modules: 5,
      enrolled: 1234,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=400',
      modulesList: [
        {
          id: 1,
          title: 'Understanding Cybersecurity Basics',
          duration: '45 minutes',
          completed: true,
        },
        {
          id: 2,
          title: 'Common Security Threats',
          duration: '1 hour',
          completed: true,
        },
        {
          id: 3,
          title: 'Security Best Practices',
          duration: '1.5 hours',
          completed: false,
        },
        {
          id: 4,
          title: 'Introduction to Cryptography',
          duration: '2 hours',
          completed: false,
          locked: true,
        },
      ],
    },
    {
      id: 2,
      title: 'Network Security Fundamentals',
      description: 'Master the basics of network security and common attack vectors through practical examples and hands-on labs.',
      instructor: 'Prof. Michael Rodriguez',
      level: 'Intermediate',
      duration: '6 weeks',
      modules: 8,
      enrolled: 892,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=400',
      modulesList: [
        {
          id: 1,
          title: 'Network Security Basics',
          duration: '1 hour',
          completed: true,
        },
        {
          id: 2,
          title: 'Common Attack Vectors',
          duration: '1.5 hours',
          completed: false,
        },
        {
          id: 3,
          title: 'Defense Strategies',
          duration: '2 hours',
          completed: false,
          locked: true,
        },
      ],
    },
    {
      id: 3,
      title: 'Advanced Penetration Testing',
      description: 'Learn advanced techniques for identifying and exploiting vulnerabilities in systems and networks.',
      instructor: 'Emma Thompson',
      level: 'Advanced',
      duration: '8 weeks',
      modules: 10,
      enrolled: 567,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=400',
      modulesList: [
        {
          id: 1,
          title: 'Advanced Scanning Techniques',
          duration: '2 hours',
          completed: false,
        },
        {
          id: 2,
          title: 'Exploitation Methods',
          duration: '2.5 hours',
          completed: false,
          locked: true,
        },
        {
          id: 3,
          title: 'Post-Exploitation',
          duration: '3 hours',
          completed: false,
          locked: true,
        },
      ],
    },
  ];