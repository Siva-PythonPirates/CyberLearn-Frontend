import React from 'react';
import { Shield, Terminal, Award, BookOpen, Target, Users } from 'lucide-react';

const features = [
  {
    name: 'Interactive Learning',
    description: 'Engage with hands-on simulations and real-world scenarios to build practical cybersecurity skills.',
    icon: Terminal,
  },
  {
    name: 'Gamified Experience',
    description: 'Earn badges, climb leaderboards, and track your progress as you master new security concepts.',
    icon: Award,
  },
  {
    name: 'Structured Courses',
    description: 'Follow a carefully designed curriculum that takes you from basics to advanced cybersecurity topics.',
    icon: BookOpen,
  },
  {
    name: 'Security Challenges',
    description: 'Test your skills with CTF-style challenges and compete with other learners globally.',
    icon: Target,
  },
  {
    name: 'Expert Community',
    description: 'Learn from industry professionals and connect with fellow cybersecurity enthusiasts.',
    icon: Users,
  },
  {
    name: 'Certification Prep',
    description: 'Prepare for industry-recognized certifications with targeted learning paths.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose CyberLearn?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our platform combines cutting-edge technology with proven learning methodologies to deliver an unmatched cybersecurity education experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-colors">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-white">
                  <feature.icon className="h-6 w-6 text-cyan-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;