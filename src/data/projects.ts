export type ProjectStatus = 'Live' | 'In development' | 'Completed';

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  status: ProjectStatus;
  statusDetail?: string;
  contribution: string;
  role?: string;
  problem?: string;
  solution?: string;
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'shoplink-lite',
    name: 'ShopLink Lite',
    category: 'Digital storefront',
    description:
      'A WhatsApp-powered storefront that helps small businesses showcase products and receive orders without needing a website.',
    status: 'Live',
    statusDetail: 'Live and receiving orders.',
    contribution: 'Concept, product design, development and deployment.',
    role: 'Founder & lead developer',
    problem:
      'Small businesses struggle to showcase their products online and receive orders without the cost and complexity of running a website.',
    solution:
      'A lightweight storefront that runs through WhatsApp. Businesses can list products, share a catalogue link and take orders directly through chat.',
    link: 'https://shoplink-lite.store',
    github: undefined,
    image: '/images/projects/shoplink-lite.png',
  },
  {
    id: 'apostle-kim-remuel',
    name: 'Apostle Kim Remuel Ministry Website',
    category: 'Ministry Website & Appointment System',
    description:
      'A digital platform designed to give a ministry an official online presence and manage appointment requests and ministry-related services.',
    status: 'In development',
    statusDetail: 'Independently developed for Apostle Kim Remuel Ministries as a ministry-focused digital solution.',
    contribution: 'Full-stack application architecture, product design, development and deployment planning.',
    role: 'Full-stack developer',
    problem:
      'Ministries need a professional online presence to share their message and manage appointment requests from their congregation.',
    solution:
      'A connected ministry website and appointment management platform with public content, member services and protected administrative workflows.',
    link: 'https://apostlekimremuel.vercel.app/',
    github: undefined,
    image: '/images/projects/apostle-kim-remuel.png',
  },
  {
    id: 'shoplink-market',
    name: 'ShopLink Market',
    category: 'SaaS marketplace',
    description:
      'A SaaS internet marketplace connecting vendors and customers through product and service listings. In development | not yet launched.',
    status: 'In development',
    statusDetail: 'In development. Not yet launched.',
    contribution: 'Product design and development.',
    role: 'Founder & product lead',
    problem:
      'Vendors need a centralised marketplace to reach customers beyond their immediate network, without relying solely on social media.',
    solution:
      'An internet marketplace where vendors list products and services and customers can discover, compare and purchase them.',
    link: undefined,
    github: undefined,
    image: '/images/projects/shoplink-market.png',
  },
];
