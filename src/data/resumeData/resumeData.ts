import { Github, Linkedin } from 'lucide-react';

export const ResumeData = {
  name: 'Darren Gebler',
  initials: 'DG',
  location: {
    location: 'London, United Kingdom',
    locationLink: 'https://www.google.com/maps/place/London',
  },
  about: 'Full-Stack Software Engineer focusing on building outstanding test driven applications.',
  summary:
    "As a software engineer, I've worked for large and small companies building and delivering test driven and accessible applications. I enjoy mentoring my peers and thrive in a positive and supportive work culture.",
  personalWebsiteUrl: 'https://darrengebler.me',
  avatarUrl: 'https://avatars.githubusercontent.com/u/11024017?v=4',
  contact: {
    email: {
      url: 'darreng968@gmail.com',
    },
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/DarrenGebler',
        icon: Github,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/darren-gebler-418493157/',
        icon: Linkedin,
      },
    ],
  },
  education: [
    {
      school: 'Queensland University of Technology',
      degree: "Bachelor's Degree in Computer and Software Systems Engineering",
      start: '2017',
      end: '2022',
    },
    {
      school: 'Queensland University of Technology',
      degree: "Bachelor's Degree in Computer Science",
      start: '2017',
      end: '2022',
    },
  ],
  work: [
    {
      company: 'Valent Projects',
      link: 'https://valent-projects.com/ariadne/',
      title: 'Full-Stack Software Engineer',
      badges: ['Hybrid'],
      start: '10/2023',
      end: 'Present',
      description:
        'Created a SaaS platform that monitors disinformation campaigns again companies. Deployed production LLMs used for narrative and sentiment extraction.',
      technologies: 'Django, React, AWS, Kubernetes, Postgres, MongoDB, Typescript, GraphQL',
    },
    {
      company: 'Arkose Labs',
      link: 'https://www.arkoselabs.com/',
      title: 'Full-Stack Software Engineer',
      badges: ['Hybrid'],
      start: '01/2022',
      end: '02/2023',
      description:
        'Aided in the development of the new MatchKey challenge. Contributed to the Arkose Labs backend Golang rewrite. Mentored peer engineers in front-end and back-end development.',
      technologies: 'React, Typescript, AWS, Golang, GraphQL, PHP, DynamoDB, SQL',
    },
    {
      company: 'Boeing Defence',
      link: 'https://www.boeing.com/defense/',
      title: 'Intern Full-Stack Software Engineer',
      badges: ['On-Site'],
      start: '11/2020',
      end: '01/2022',
      description:
        'Converted outdated proprietary locally hosted software to a web application. The rewrite included a React frontend with a Java Spring backend that would allow users to interact and create interactive graphics.',
      technologies: 'React, Javascript, Java, Spring, Redux',
    },
  ],
  skills: [
    'Typescript',
    'React',
    'Python',
    'Django',
    'AWS',
    'GraphQL',
    'gRPC',
    'Golang',
    'PHP',
    'Kubernetes',
    'SQL',
    'Java',
  ],
} as const;
