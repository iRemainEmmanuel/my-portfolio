import { Hero } from '@/components/sections/hero';
import { WorkPreview } from '@/components/sections/work-preview';
import { Capabilities } from '@/components/sections/capabilities';
import { Highlights } from '@/components/sections/highlights';
import { AboutPreview } from '@/components/sections/about-preview';
import { ContactInvite } from '@/components/sections/contact-invite';

export const metadata = {
  title: 'Home',
  description:
    'Emmanuel Mwamba | Software Developer | Founder based in Ndola, Zambia. Building software products and digital solutions that solve real problems.',
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <WorkPreview />
      <Capabilities />
      <Highlights />
      <AboutPreview />
      <ContactInvite />
    </div>
  );
}
