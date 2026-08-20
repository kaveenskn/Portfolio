export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  desc: string;
  technologies: string[];
  image: string;
  images?: string[];
  color: string;
  github: string;
  liveLink: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
};

export const projectsData: ProjectItem[] = [
  {
    id: '01',
    title: 'FutureHive Platform',
    category: 'Web Application',
    desc: 'Full Stack Web Platform for university students to explore projects, research ideas, and collaborate with AI-powered assistance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI Integration'],
    image: '/projectimages/FutureHive.png',
    imageFit: 'contain',
    imagePosition: 'center',
    color: 'from-blue-500/20 to-cyan-600/20',
    github: 'https://github.com/kaveenskn/FutureHive-CapstoneProject.git',
    liveLink: ''
  },
  {
    id: '02',
    title: 'Ice Cream Shop UI',
    category: 'Design',
    desc: 'A modern and delightful user interface for an ice cream shop, focusing on visual appeal and smooth user experience.',
    technologies: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'],
    image: '/projectimages/icecreamshop.png',
    color: 'from-blue-500/20 to-cyan-600/20',
    github: 'https://github.com/kaveenskn/IceCream_shop.git',
    liveLink: 'https://ice-cream-shop-qu8d.vercel.app/'
  },
  {
    id: '03',
    title: 'Saree Shop Landing Page',
    category: 'Web',
    desc: 'A modern and responsive saree shop landing page designed to showcase elegant collections with smooth animations and an engaging user experience.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/projectimages/Sareeshop.png',
    imageFit: 'contain',
    imagePosition: 'center',
    color: 'from-cyan-500/20 to-blue-600/20',
    github: 'https://github.com/kaveenskn/Saree_shop_landingpage.git',
    liveLink: 'https://saree-shop-landingpage.vercel.app'
  },
  {
    id: '04',
    title: 'Saree Bazar',
    category: 'E-commerce Web Application',
    desc: 'Interactive saree shopping platform with virtual try-on (IDM-VTON) and smooth scroll-based animations to enhance user experience and satisfaction.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'IDM-VTON'],
    image: '/projectimages/Sareebazar.png',
    imageFit: 'contain',
    imagePosition: 'center',
    color: 'from-pink-500/20 to-rose-600/20',
    github: 'https://github.com/yourusername/sareebazar',
    liveLink: ''
  },
  {
    id: '05',
    title: 'Memora',
    category: 'Mobile Application',
    desc: 'Memory mapping mobile app that allows users to save trips on a map, store media in the cloud, share memories, follow users, chat, and manage private memories.',
    technologies: ['React Native', 'Expo Go', 'Tailwind CSS', 'Firebase', 'OpenStreetMap'],
    image: '/projectimages/memora1.jpeg',
    imagePosition: 'center top',
    images: ['/projectimages/memora1.jpeg', '/projectimages/memora2.jpeg'],
    color: 'from-green-500/20 to-emerald-600/20',
    github: 'https://github.com/Kavisheak/Memora.git',
    liveLink: ''
  },
  {
    id: '06',
    title: 'InternQuest',
    category: 'Web Application',
    desc: 'Web-based platform that helps students find internships based on their skills and interests with an interactive UI and smooth animations.',
    technologies: ['React', 'Node.js', 'Express.js', 'GSAP'],
    image: '/projectimages/InternQuest.png',
    color: 'from-purple-500/20 to-indigo-600/20',
    github: 'https://github.com/kaveenskn/InternQuest-web-Group2.git',
    liveLink: ''
  },
  {
    id: '07',
    title: 'MyAssistant',
    category: 'AI Web Application',
    desc: 'RAG-based personal assistant that answers queries about the user using a local LLM (LLaMA 3 via Ollama) with intelligent and context-aware responses.',
    technologies: ['React', 'FastAPI', 'LangChain', 'Ollama', 'LLaMA 3'],
    image: '/projectimages/Myassistant.png',
    color: 'from-orange-500/20 to-amber-600/20',
    github: 'https://github.com/kaveenskn/Personal_Assistant.git',
    liveLink: ''
  }
];
