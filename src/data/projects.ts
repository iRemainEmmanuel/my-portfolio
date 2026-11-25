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
    category: 'Personal Ministry Website & Booking System',
    description:
      'A personal ministry website and booking/appointment system designed to establish an official online presence and manage appointment requests and ministry-related services.',
    status: 'In development',
    statusDetail: 'Independently developed for Apostle Kim Remuel Ministries as a ministry-focused digital solution.',
    contribution: 'Full-stack application architecture, product design, development and deployment planning.',
    role: 'Full-stack developer',
    problem:
      'Personal ministries need a clear online presence to share their message, publish resources and manage booking and appointment requests without manual coordination.',
    solution:
      'A connected personal ministry website and booking/appointment platform with public content, member services and protected administrative workflows.',
    link: 'https://apostlekimremuel.vercel.app/',
    github: undefined,
    image: '/images/projects/apostle-kim-remuel.png',
  },
  {
    id: 'shoplink-market',
    name: 'ShopLink Market',
    category: 'SaaS Internet Marketplace',
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
