export interface Challenge {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    points: number;
    timeLimit: string;
    participants: number;
    image: string;
    requiredSkills: string[];
  }
  
  export const challenges: Challenge[] = [
    {
      id: 1,
      title: 'Web Application Security',
      description: 'Find and exploit vulnerabilities in a mock web application. You\'ll need to identify common security flaws such as SQL injection, XSS, and CSRF.',
      difficulty: 'Medium',
      points: 500,
      timeLimit: '2 hours',
      participants: 234,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800&h=400',
      requiredSkills: ['SQL Fundamentals', 'Web Security Basics', 'Network Protocols'],
    },
    {
      id: 2,
      title: 'Network Intrusion Detection',
      description: 'Analyze network traffic to identify potential security threats. Practice using industry-standard tools to detect and prevent network intrusions.',
      difficulty: 'Hard',
      points: 1000,
      timeLimit: '3 hours',
      participants: 156,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=400',
      requiredSkills: ['Network Analysis', 'Packet Inspection', 'IDS/IPS Systems'],
    },
    {
      id: 3,
      title: 'Cryptography Challenge',
      description: 'Break various encryption schemes and decode hidden messages. Test your understanding of cryptographic principles and attack methods.',
      difficulty: 'Expert',
      points: 1500,
      timeLimit: '4 hours',
      participants: 89,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=400',
      requiredSkills: ['Cryptography Basics', 'Mathematics', 'Code Breaking'],
    },
  ];