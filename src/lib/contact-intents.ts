export const WHATSAPP_NUMBER = '260966271989';
export const CONTACT_EMAIL = 'mwambaemmanuel005@gmail.com';

export interface ContactPreset {
  key: string;
  label: string;
  subject: string;
  message: string;
}

export const SERVICE_PRESETS: Record<string, ContactPreset> = {
  'software-development': {
    key: 'software-development',
    label: 'Software Development',
    subject: 'Software Development Enquiry',
    message:
      'Hi Emmanuel, I am interested in your Software Development services. I would like to discuss building a custom software solution for my project.',
  },
  'web-development': {
    key: 'web-development',
    label: 'Web Development',
    subject: 'Web Development Enquiry',
    message:
      'Hi Emmanuel, I am interested in your Web Development services. I would like to discuss building or improving a website or web application.',
  },
  'it-solutions': {
    key: 'it-solutions',
    label: 'IT Solutions',
    subject: 'IT Solutions Enquiry',
    message:
      'Hi Emmanuel, I am interested in your IT Solutions services. I would like to discuss software setup, system integration or technical support.',
  },
  'business-automation': {
    key: 'business-automation',
    label: 'Business Automation',
    subject: 'Business Automation Enquiry',
    message:
      'Hi Emmanuel, I am interested in your Business Automation services. I would like to discuss streamlining workflows and automating repetitive processes.',
  },
  'business-registration-compliance': {
    key: 'business-registration-compliance',
    label: 'Business Registration & Compliance',
    subject: 'Business Registration & Compliance Enquiry',
    message:
      'Hi Emmanuel, I am interested in your Business Registration & Compliance assistance. I would like guidance on business registration and statutory compliance.',
  },
};

export const EVENT_PRESETS: Record<string, ContactPreset> = {
  'ndcci-capacity-building-conference': {
    key: 'ndcci-capacity-building-conference',
    label: 'NDCCI Capacity Building Conference',
    subject: 'Connecting from NDCCI Capacity Building Conference',
    message:
      'Hi Emmanuel, I came across your notes from the NDCCI Capacity Building Conference and would like to connect.',
  },
  'bongohive-roadshow': {
    key: 'bongohive-roadshow',
    label: 'BongoHive RoadShow',
    subject: 'Connecting from BongoHive IGNITE RoadShow',
    message:
      'Hi Emmanuel, I read about your participation in the BongoHive IGNITE RoadShow and would like to connect.',
  },
  'zicta-ict-innovation': {
    key: 'zicta-ict-innovation',
    label: 'ZICTA ICT Innovation Programme',
    subject: 'Connecting regarding ZICTA ICT Innovation Programme',
    message:
      'Hi Emmanuel, I saw your ZICTA ICT Innovation Programme milestone and would like to connect.',
  },
};

export const PROJECT_PRESETS: Record<string, ContactPreset> = {
  'shoplink-lite': {
    key: 'shoplink-lite',
    label: 'ShopLink Lite',
    subject: 'ShopLink Lite Enquiry',
    message:
      'Hi Emmanuel, I saw ShopLink Lite on your website and would like to learn more or discuss a collaboration.',
  },
  'shoplink-market': {
    key: 'shoplink-market',
    label: 'ShopLink Market',
    subject: 'ShopLink Market Enquiry',
    message:
      'Hi Emmanuel, I saw ShopLink Market on your website and would like to connect regarding the platform.',
  },
  'apostle-kim-remuel': {
    key: 'apostle-kim-remuel',
    label: 'Apostle Kim Remuel Ministries Platform',
    subject: 'Similar Web Platform Enquiry',
    message:
      'Hi Emmanuel, I saw the Apostle Kim Remuel Ministries platform on your website and would like to discuss a similar digital platform.',
  },
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi Emmanuel, I visited your website and would like to discuss a project or opportunity.';

export function buildWhatsAppUrl(message?: string): string {
  const cleanMessage = message?.trim();
  if (!cleanMessage) {
    return `https://wa.me/${WHATSAPP_NUMBER}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cleanMessage)}`;
}

export function getServiceWhatsAppUrl(slug: string): string {
  const preset = SERVICE_PRESETS[slug];
  return buildWhatsAppUrl(preset?.message);
}
