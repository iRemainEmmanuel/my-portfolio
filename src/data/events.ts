export interface EventArea {
  number: string;
  title: string;
  description: string;
}

export interface EventDetail {
  label: string;
  value: string;
}

export interface EventReference {
  name: string;
  description: string;
  href: string;
}

export interface EventGalleryItem {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export interface EventRecognition {
  label: string;
  headline: string;
  subline: string;
  stats: { value: string; label: string; detail: string }[];
  statusTitle: string;
  description: string;
}

export interface Event {
  id: string;
  number: string;
  phase: string;
  name: string;
  date: string;
  sortDate: string;
  dateLabel: string;
  location: string;
  shortLocation: string;
  description: string;
  involvement: string;
  badge: string;
  programme: string;
  headline: string;
  heroIntro: string;
  image: string;
  imageCaption: string;
  aboutTitle: string;
  aboutContent: string[];
  areasLabel: string;
  areasTitle: string;
  areasIntro: string;
  areas: EventArea[];
  participationTitle: string;
  participationContent: string[];
  recognition?: EventRecognition;
  takeawaysLabel: string;
  takeawaysTitle: string;
  takeaways: string[];
  detailsTitle: string;
  details: EventDetail[];
  galleryTitle: string;
  gallerySubtitle: string;
  gallery: EventGalleryItem[];
  references: EventReference[];
  closingReflection: string;
  relatedEventId: string;
}

export const events: Event[] = [
  {
    id: 'ndcci-capacity-building-conference',
    number: '01',
    phase: 'CAPACITY BUILDING',
    name: 'NDCCI Capacity Building Conference',
    date: '29 May 2026',
    sortDate: '2026-05-29',
    dateLabel: '29 May 2026',
    location: 'Ndola, Zambia',
    shortLocation: 'Ndola, Zambia',
    description:
      'A business capacity-building conference focused on strengthening SMEs through innovation, growth and sustainability.',
    involvement: 'Attendee',
    badge: 'Conference Attendee',
    programme: 'NDCCI Capacity Building Conference',
    headline: 'Strengthening SMEs through innovation, growth and sustainability.',
    heroIntro:
      'I attended the Ndola Chamber of Commerce & Industry Capacity Building Conference, an event focused on equipping businesses with practical knowledge and insights to strengthen their operations, improve resilience and achieve sustainable growth.',
    image: '/images/events/ndcci-capacity-building-conference-cover.jpg',
    imageCaption: 'NDCCI Capacity Building Conference · Ndola, Zambia',
    aboutTitle: 'About the Conference',
    aboutContent: [
      'The conference brought together entrepreneurs, business professionals, industry experts and representatives from key institutions to discuss the challenges and opportunities facing small and medium-sized enterprises.',
      'Through presentations and discussions, participants gained insights into business development, financial management, regulatory compliance, innovation and sustainability.',
      "The event featured contributions from the Chamber's President, Ms. Diana Kabaila, Sheppa Kalunga, Dr. Rozious Siatwambo, representatives from the KAIZEN Institute of Zambia, the National Pension Scheme Authority (NAPSA), the Zambia Revenue Authority (ZRA) and other industry professionals.",
    ],
    areasLabel: 'Conference themes',
    areasTitle: 'What the conference explored',
    areasIntro:
      'The sessions connected practical business knowledge with the decisions SMEs make every day as they work towards resilience and sustainable growth.',
    areas: [
      { number: '01', title: 'Financial Awareness', description: 'Understanding the numbers behind a business to support sound decisions and responsible growth.' },
      { number: '02', title: 'Business Resilience', description: 'Building the ability to adapt to changing economic conditions and continue operating with clarity.' },
      { number: '03', title: 'Business Systems & Structured Growth', description: 'Building reliable business systems alongside planning, organisation and performance tracking so a business can grow sustainably.' },
      { number: '04', title: 'Compliance', description: 'Recognising regulatory and statutory responsibilities as part of building a credible business.' },
      { number: '05', title: 'Collaboration', description: 'Strengthening the business ecosystem through shared knowledge and meaningful connections.' },
    ],
    participationTitle: 'My experience',
    participationContent: [
      'The conference was an opportunity to learn from people actively involved in business development and the wider Zambian business ecosystem.',
      "One of the most important lessons I took away, particularly from Dr. Rozious Siatwambo's presentation, was the importance of understanding the numbers behind a business and building reliable business systems. Business growth should not be based on guesswork. It requires financial clarity, strong business systems, proper structure and informed decision-making.",
      'I also valued the opportunity to connect with entrepreneurs, professionals and other business builders working towards strengthening the local business community.',
    ],
    takeawaysLabel: 'Reflections',
    takeawaysTitle: 'Key takeaways',
    takeaways: [
      'Financial awareness: Understanding the numbers behind a business is essential for making sound decisions.',
      'Business systems: Putting reliable business systems in place enables consistent operations and growth beyond guesswork.',
      'Business resilience: Businesses need the ability to adapt to changing economic conditions.',
      'Structured growth: Sustainable growth requires planning, organisation and a clear understanding of performance.',
      'Compliance: Regulatory and statutory responsibilities are part of building a credible business.',
      'Collaboration: Stronger ecosystems develop when entrepreneurs, institutions and professionals share knowledge.',
    ],
    detailsTitle: 'Event details',
    details: [
      { label: 'Event', value: 'NDCCI Capacity Building Conference' },
      { label: 'Organiser', value: 'Ndola Chamber of Commerce & Industry (NDCCI)' },
      { label: 'Location', value: 'Ndola, Zambia' },
      { label: 'Focus', value: 'SME capacity building, innovation, growth and sustainability' },
      { label: 'Participation', value: 'Attendee' },
      { label: 'Date', value: '29 May 2026' },
    ],
    galleryTitle: 'Conference gallery',
    gallerySubtitle: 'A capacity-building conversation for Ndola businesses and entrepreneurs.',
    gallery: [
      {
        src: '/images/events/ndcci-capacity-building-conference/ndcci-business-leaders-facilitators-attendees.jpg',
        alt: 'Emmanuel Mwamba with business leaders, facilitators and attendees at the NDCCI Capacity Building Conference in Ndola',
        caption: 'Business leaders, facilitators and attendees · NDCCI Capacity Building Conference, Ndola',
        objectPosition: 'object-center',
      },
      {
        src: '/images/events/ndcci-capacity-building-conference/dr-rozious-siatwambo-keynote.jpg',
        alt: 'Dr. Rozious Siatwambo presenting on business, financial numbers and business systems at the NDCCI Capacity Building Conference',
        caption: 'Dr. Rozious Siatwambo presenting on business, financial numbers and business systems · Ndola',
        objectPosition: 'object-top',
      },
      {
        src: '/images/events/ndcci-capacity-building-conference/ndcci-chamber-leadership-and-speakers.jpg',
        alt: 'Conference speakers and Chamber leadership at the NDCCI Capacity Building Conference in Ndola',
        caption: 'Conference speakers and Chamber leadership · NDCCI, Ndola',
        objectPosition: 'object-center',
      },
    ],
    references: [],
    closingReflection:
      'A strong business is built through more than ambition. It takes knowledge, discipline, sound decisions and the willingness to keep learning. I am grateful for the insights shared and the connections made, and I look forward to putting that knowledge into practice.',
    relatedEventId: 'bongohive-roadshow',
  },
  {
    id: 'bongohive-roadshow',
    number: '02',
    phase: 'PROGRAMME PARTICIPANT',
    name: 'BongoHive RoadShow',
    date: '20–21 April 2026',
    sortDate: '2026-04-20',
    dateLabel: '20–21 April 2026',
    location: 'Ndola, Copperbelt Province, Zambia',
    shortLocation: 'Ndola, Zambia',
    description:
      'Two-day IGNITE Digital Economy Incubator preparation experience focused on business development, value proposition refinement and preparing entrepreneurs for incubation.',
    involvement: 'Participant',
    badge: 'Programme Participant',
    programme: 'IGNITE Digital Economy Incubator & Accelerator',
    headline:
      'Two-day entrepreneurship and incubation preparation experience with BongoHive Innovations in Ndola.',
    heroIntro:
      'Participated in the BongoHive IGNITE Digital Economy Incubator and Accelerator RoadShow, a two-day entrepreneurship and innovation engagement designed to prepare digital entrepreneurs for the incubator programme.',
    image: '/images/events/bongohive-ignite-roadshow-cover.jpg',
    imageCaption: 'BongoHive IGNITE RoadShow · Ndola, Copperbelt Province, Zambia',
    aboutTitle: 'About the programme',
    aboutContent: [
      'The IGNITE Digital Economy Incubator and Accelerator is a 12-month initiative designed to support entrepreneurs developing digital solutions with the potential to contribute to a greener and more sustainable economy.',
      'Funded by the European Union and implemented by BongoHive Innovations in partnership with Self Help Africa, the programme seeks to support promising digital businesses through entrepreneurship development, mentorship, technical support and business growth opportunities.',
      'As part of its outreach, BongoHive organised RoadShows across Zambia to engage entrepreneurs and prepare them for the programme application process.',
    ],
    areasLabel: 'Hands-on preparation',
    areasTitle: 'The RoadShow experience',
    areasIntro:
      'The Ndola RoadShow was structured as a two-day, hands-on learning and preparation experience bringing together entrepreneurs to explore business ideas, strengthen propositions and understand what it takes to build a viable digital business.',
    areas: [
      {
        number: '01',
        title: 'Business Model Development',
        description:
          'Exploring and pressure-testing business models to understand how a business creates, delivers and captures value.',
      },
      {
        number: '02',
        title: 'Value Proposition Development',
        description:
          'Learning how to communicate the value of a digital solution, the problem it addresses and why it matters to its intended users.',
      },
      {
        number: '03',
        title: 'Presentations & Practical Sessions',
        description:
          'Participating in guided sessions designed to strengthen business ideas and prepare entrepreneurs for the incubator application process.',
      },
      {
        number: '04',
        title: 'Facilitator Feedback & Networking',
        description:
          'Engaging with BongoHive facilitators and fellow entrepreneurs, exchanging perspectives and receiving feedback on business propositions.',
      },
      {
        number: '05',
        title: 'Incubator Application Preparation',
        description:
          'Understanding the programme expectations and how to present a digital business proposition when applying for incubation support.',
      },
    ],
    participationTitle: 'My participation',
    participationContent: [
      'I attended the Ndola edition of the BongoHive RoadShow as an entrepreneur interested in developing technology-driven solutions and building sustainable digital products.',
      'The two-day engagement gave me an opportunity to participate in business development sessions, learn from presentations, interact with facilitators and other entrepreneurs, and understand how to better position a digital business for an incubation opportunity.',
      'It was particularly valuable to look beyond the technical side of building software and consider the business model, value proposition and market relevance behind a digital product.',
    ],
    takeawaysLabel: 'Reflections',
    takeawaysTitle: 'Key takeaways',
    takeaways: [
      'Understanding the importance of a viable business model.',
      "Communicating a product's value proposition more effectively.",
      'Looking beyond product development to business sustainability.',
      'Understanding the expectations of an incubator programme.',
      "Connecting with Zambia's entrepreneurship and innovation ecosystem.",
    ],
    detailsTitle: 'Event information',
    details: [
      { label: 'Event', value: 'BongoHive RoadShow' },
      { label: 'Programme', value: 'IGNITE Digital Economy Incubator & Accelerator' },
      { label: 'Organiser', value: 'BongoHive Innovations' },
      { label: 'Location', value: 'Ndola, Zambia' },
      { label: 'Dates', value: '20–21 April 2026' },
      { label: 'Duration', value: 'Two days' },
      { label: 'Participation', value: 'Attendee / Participant' },
      { label: 'Category', value: 'Entrepreneurship & Digital Innovation' },
    ],
    galleryTitle: 'Event gallery',
    gallerySubtitle: 'Documentation from the two-day IGNITE RoadShow in Ndola.',
    gallery: [
      {
        src: '/images/events/bongohive-ignite-roadshow/emmanuel-mwamba-ignite-frame.jpg',
        alt: 'Emmanuel Mwamba holding the IGNITE Digital Economy frame at the BongoHive RoadShow in Ndola',
        caption: 'IGNITE Digital Economy Incubator & Accelerator RoadShow · Ndola',
        objectPosition: 'object-top',
      },
      {
        src: '/images/events/bongohive-ignite-roadshow/workshop-participation-question.jpg',
        alt: 'Emmanuel Mwamba raising his hand to participate during a BongoHive RoadShow workshop session',
        caption: 'Interactive workshop session · Business model & value proposition work',
        objectPosition: 'object-top',
      },
      {
        src: '/images/events/bongohive-ignite-roadshow/peer-discussion-networking.jpg',
        alt: 'Emmanuel Mwamba discussing business ideas and notes with a fellow participant at the BongoHive RoadShow',
        caption: 'Peer discussion and feedback during practical sessions · Ndola',
        objectPosition: 'object-top',
      },
      {
        src: '/images/events/bongohive-ignite-roadshow/ndola-roadshow-cohort-group.jpg',
        alt: 'Full group photograph of Ndola IGNITE RoadShow participants and BongoHive facilitators',
        caption: 'Ndola RoadShow cohort and BongoHive facilitators · 20–21 April 2026',
        objectPosition: 'object-center',
      },
    ],
    references: [
      {
        name: 'BongoHive IGNITE RoadShow',
        description: 'Official Ndola & Kitwe RoadShow event details on Luma.',
        href: 'https://luma.com/ij0k3497',
      },
      {
        name: 'BongoHive Entrepreneurship',
        description: 'BongoHive Innovations entrepreneurship and incubation programmes.',
        href: 'https://bongohive.co.zm/entrepreneurship/',
      },
    ],
    closingReflection:
      'The experience was a reminder that building a successful technology product involves more than writing code. Understanding the market, developing a viable business model and communicating the value of a solution are equally important.',
    relatedEventId: 'zicta-ict-innovation',
  },
  {
    id: 'zicta-ict-innovation',
    number: '03',
    phase: 'TOP 100 SHORTLIST',
    name: 'ZICTA ICT Innovation Programme',
    date: '2025',
    sortDate: '2025-12-31',
    dateLabel: '2025 Programme Cycle',
    location: 'Zambia',
    shortLocation: 'Zambia',
    description:
      "Shortlisted among the top 100 innovators from more than 500 applicants in Zambia's national ICT innovation programme.",
    involvement: 'Top 100 Shortlist',
    badge: 'Top 100 Shortlist',
    programme: 'ZICTA ICT Innovation Programme',
    headline:
      'Shortlisted among the top 100 innovators from a pool of more than 500 applicants across Zambia.',
    heroIntro:
      'Shortlisted among the top 100 innovators from more than 500 applicants in the ZICTA ICT Innovation Programme, a national initiative supporting the development of innovative ICT-driven solutions in Zambia.',
    image: '/images/events/zicta-ict-innovation-programme-cover.png',
    imageCaption: 'ZICTA ICT Innovation Programme · 2025 Programme Cycle, Zambia',
    aboutTitle: 'About the programme',
    aboutContent: [
      'The ZICTA ICT Innovation Programme is an initiative designed to identify, nurture and support promising technology-driven innovations addressing challenges across different sectors of the economy.',
      'The programme provides innovators with opportunities for business and technical development, mentorship, training and potential commercialisation support.',
      'Its focus includes encouraging locally developed ICT solutions that can become viable products and services with meaningful socioeconomic impact.',
    ],
    recognition: {
      label: 'National Recognition',
      headline: 'Top 100 Innovators',
      subline: 'ZICTA ICT Innovation Programme · 2025',
      stats: [
        {
          value: '500+',
          label: 'Applicants',
          detail: 'Competition applicant pool across Zambia',
        },
        {
          value: '100',
          label: 'Innovators',
          detail: 'Selected for the programme shortlist',
        },
      ],
      statusTitle: 'Shortlisted participant',
      description:
        "Recognised among the innovators selected through the programme's competitive selection process.",
    },
    areasLabel: 'Programme pillars',
    areasTitle: 'Programme development areas',
    areasIntro:
      'The programme is designed to help innovators develop beyond the initial idea and work towards viable technology ventures through technical refinement, business development and capacity building.',
    areas: [
      {
        number: '01',
        title: 'Technical Development',
        description:
          'Strengthening the technical foundations and capabilities required to develop practical ICT solutions.',
      },
      {
        number: '02',
        title: 'Business Development',
        description:
          'Understanding business models, commercial viability and how technology innovations can become sustainable ventures.',
      },
      {
        number: '03',
        title: 'Mentorship & Capacity Building',
        description:
          'Access to development support and industry knowledge to strengthen innovation and entrepreneurship capabilities.',
      },
      {
        number: '04',
        title: 'Marketing & Commercialisation',
        description:
          'Developing an understanding of marketing, business growth and the journey from innovation to market adoption.',
      },
      {
        number: '05',
        title: 'Industry Engagement',
        description:
          "Opportunities to connect with partners, institutions and stakeholders supporting Zambia's innovation ecosystem.",
      },
    ],
    participationTitle: 'My participation',
    participationContent: [
      'I submitted an innovation for consideration in the ZICTA ICT Innovation Programme and was shortlisted among the top 100 from a pool of more than 500 applicants.',
      'Being selected for this stage was an important milestone in my journey as a software developer and startup founder. It provided recognition for my interest in developing technology-driven solutions and placed my submission among a competitive group of innovators from across Zambia.',
    ],
    takeawaysLabel: 'Experience & significance',
    takeawaysTitle: 'What this milestone reinforced',
    takeaways: [
      'Developing solutions that go beyond technical functionality to address real challenges and create practical value.',
      'Building products with the potential to grow into sustainable businesses.',
      "Having innovation ambitions recognised within Zambia's national ICT innovation initiative.",
      "Participating actively in Zambia's growing digital innovation ecosystem.",
    ],
    detailsTitle: 'Programme information',
    details: [
      { label: 'Programme', value: 'ZICTA ICT Innovation Programme' },
      { label: 'Organiser', value: 'ZICTA' },
      { label: 'Country', value: 'Zambia' },
      { label: 'Cycle', value: '2025' },
      { label: 'Participation', value: 'Shortlisted innovator' },
      { label: 'Recognition', value: 'Top 100' },
      { label: 'Applicant pool', value: '500+' },
      { label: 'Category', value: 'ICT Innovation & Entrepreneurship' },
    ],
    galleryTitle: 'Gallery & supporting evidence',
    gallerySubtitle: 'Programme visual documentation and shortlisting record.',
    gallery: [
      {
        src: '/images/events/zicta-ict-innovation-programme/emmanuel-mwamba-zicta-innovation-programme.jpg',
        alt: 'Emmanuel Mwamba at the ZICTA ICT Innovation Programme',
        caption: '',
        objectPosition: 'object-top',
      },
    ],
    references: [
      {
        name: 'ZICTA ICT Innovation Programme',
        description: 'Official overview of the ZICTA ICT Innovation initiative.',
        href: 'https://www.zicta.zm/ict-innovation/about',
      },
      {
        name: 'Ministry of Technology & Science',
        description: 'Official account of the 2025 ZICTA ICT Innovation Programme.',
        href: 'https://www.mots.gov.zm/?p=6405',
      },
    ],
    closingReflection:
      'Innovation is not just about having an idea. It is about developing that idea into something useful, viable and capable of making a difference. Being recognised among the top 100 applicants was an important step in that journey.',
    relatedEventId: 'ndcci-capacity-building-conference',
  },
];

events.sort((first, second) => second.sortDate.localeCompare(first.sortDate));
