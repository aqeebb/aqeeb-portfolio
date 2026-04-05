import { drowsinessImg, pixelReviveImg, petParadiseImg } from '../assets'

export const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export const ROLES = ['AI/ML Engineer', 'Full Stack Developer', 'Data Analyst']

export const SKILLS = [
  { icon: '💻', label: 'Programming', color: 'rgba(0,229,255,0.08)', border: 'rgba(0,229,255,0.15)', tags: ['Python', 'JavaScript'] },
  { icon: '🧠', label: 'AI / ML', color: 'rgba(108,59,255,0.08)', border: 'rgba(108,59,255,0.18)', tags: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'Gradio'] },
  { icon: '🌐', label: 'Web Technologies', color: 'rgba(0,224,150,0.08)', border: 'rgba(0,224,150,0.15)', tags: ['React.js', 'Node.js', 'Express.js', 'HTML', 'Tailwind CSS', 'RESTful APIs'] },
  { icon: '🗄️', label: 'Databases', color: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.18)', tags: ['MongoDB', 'MySQL'] },
  { icon: '📊', label: 'Data Analytics', color: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)', tags: ['Power BI', 'Data Visualization', 'Analytical Reporting'] },
  { icon: '🛠️', label: 'Tools & DevOps', color: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.18)', tags: ['Git', 'GitHub', 'Agile / Scrum', 'JWT Auth'] },
]

export const EXPERIENCE = [
  {
    date: 'Feb 2025 – Sep 2025',
    role: 'Full Stack Developer Intern',
    company: 'CodeLab Systems · India',
    points: [
      'Developed and deployed Pet Paradise — a full-stack MERN pet care & e-commerce web application.',
      'Designed RESTful APIs supporting CRUD operations, authentication, and data validation.',
      'Built responsive, reusable React.js UI components to enhance user experience and performance.',
      'Collaborated in a 2-member Agile team using Git/GitHub for version control and sprints.',
      'Tested, debugged, and optimized features to improve performance and maintainability.',
    ],
  },
  {
    date: 'Sep 2023 – Oct 2023',
    role: 'Full Stack Development Intern',
    company: 'Samagra Technologies · India',
    points: [
      'Gained hands-on experience across frontend and backend components of web applications.',
      'Implemented secure user authentication and authorization using JWT with role-based access.',
      'Developed 10+ RESTful APIs with seamless MongoDB integration, optimizing data retrieval.',
      'Implemented CRUD operations, input validation, and structured error handling.',
    ],
  },
]

export const PROJECTS = [
  {
    img: drowsinessImg,
    title: 'Truck Driver Drowsiness Detection',
    date: 'July 2024',
    desc: 'A real-time system that detects driver drowsiness using eye movement tracking and automated alerts to enhance road safety.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'Pygame'],
  },
  {
    img: pixelReviveImg,
    title: 'Pixel Revive: Enhancing the Past',
    date: 'December 2024',
    desc: 'An AI-powered image restoration system for restoring and enhancing old or damaged images using transformer-based models with a Gradio interface.',
    tech: ['PyTorch', 'Transformers', 'Gradio', 'OpenCV', 'NumPy', 'Pillow'],
  },
  {
    img: petParadiseImg,
    title: 'Pet Paradise',
    date: 'May 2025',
    desc: 'A full-stack MERN web application for pet daycare management and e-commerce with secure authentication, role-based access, and advanced filtering.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
  },
]

export const CERTS = [
  { ico: '📊', name: 'Power BI Data Analyst', by: 'Microsoft · Badge', when: 'Data Analytics' },
  { ico: '🚀', name: 'DevOps Fundamentals', by: 'IBM CE · Certificate', when: 'Sep 2024' },
  { ico: '🤖', name: 'Machine Learning', by: 'Intel® Unnati · Certificate', when: 'Aug 2023' },
]

export const SOCIAL = {
  github: 'https://github.com/aqeebb',
  linkedin: 'https://www.linkedin.com/in/mohamed-aqeeb-989a6b383',
  email: 'mohamedaqeeb14@gmail.com',
  phone: '+971-503887358',
}

