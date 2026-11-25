import Link from 'next/link';
import { FadeIn, ScaleReveal, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'ShopLink Lite',
  description:
    'A WhatsApp-powered storefront that helps small businesses showcase products and receive orders. Live at shoplink-lite.store.',
};

export default function ShopLinkLitePage() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <FadeIn immediate y={12}>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 mb-16 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to work
          </Link>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <FadeIn immediate delay={0.05}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded">
                  Live
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl font-bold text-text mb-6 leading-[1.05]">
                ShopLink Lite
              </h1>
              <p className="text-sm sm:text-base text-muted uppercase tracking-wider mb-6">
                Digital storefront
              </p>
              <p className="text-lg sm:text-xl text-text/90 leading-relaxed mb-10 max-w-2xl">
                A WhatsApp-powered storefront that helps small businesses showcase products and
                receive orders without needing a website.
              </p>
            </FadeIn>

            <StaggerGroup className="space-y-6 mb-10">
              <StaggerItem>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  The problem
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Small businesses struggle to showcase their products online and receive orders
                  without the cost and complexity of running a website.
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  The solution
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  A lightweight storefront that runs through WhatsApp. Businesses can list
                  products, share a catalogue link and take orders directly through chat.
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  My role
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Founder and lead developer: concept, product design, development and deployment.
                </p>
              </StaggerItem>
            </StaggerGroup>

            <FadeIn className="space-y-6 mb-10">
              <div>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  Status
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Live and receiving orders.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="border-t border-border/50 pt-8 mb-10">
              <h2 className="font-display text-xl font-bold text-text mb-6">
                Visit the product
              </h2>
              <a
                href="https://shoplink-lite.store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-[#090909] font-semibold rounded-md hover:bg-accent-hover transition-colors"
              >
                <span className="text-sm font-bold uppercase tracking-wider">
                  Open ShopLink Lite store
                </span>
              </a>
            </FadeIn>
          </div>

          <ScaleReveal immediate delay={0.12} className="relative aspect-[4/3] bg-[#131313] overflow-hidden rounded-xl border border-border self-start">
            <img
              src="/images/projects/shoplink-lite.png"
              alt="ShopLink Lite"
              className="h-full w-full object-contain bg-[#131313]"
              loading="lazy"
            />
          </ScaleReveal>
        </div>
      </div>
    </div>
  );
}
