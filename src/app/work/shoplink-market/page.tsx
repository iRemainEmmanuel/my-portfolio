import Link from 'next/link';
import { FadeIn, ScaleReveal, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'ShopLink Market',
  description:
    'A SaaS internet marketplace connecting vendors and customers through product and service listings. In development | not yet launched.',
};

export default function ShopLinkMarketPage() {
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted border border-[#333333]/40 px-3 py-1 rounded">
                  In development
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl font-bold text-text mb-6 leading-[1.05]">
                ShopLink Market
              </h1>
              <p className="text-sm sm:text-base text-muted uppercase tracking-wider mb-6">
                SaaS marketplace
              </p>
              <p className="text-lg sm:text-xl text-text/90 leading-relaxed mb-10 max-w-2xl">
                A SaaS internet marketplace connecting vendors and customers through product and
                service listings. In development — not yet launched.
              </p>
            </FadeIn>

            <StaggerGroup className="space-y-6 mb-10">
              <StaggerItem>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  The problem
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Vendors need a centralised marketplace to reach customers beyond their immediate
                  network, without relying solely on social media.
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  The solution
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  An internet marketplace where vendors list products and services and customers
                  can discover, compare and purchase them.
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  My role
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Founder and product lead — product design and development.
                </p>
              </StaggerItem>
            </StaggerGroup>

            <FadeIn className="space-y-6 mb-10">
              <div>
                <h2 className="font-display text-xl font-bold text-text mb-3">
                  Status
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  In development. Not yet launched.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="border-t border-border/50 pt-8">
              <h2 className="font-display text-xl font-bold text-text mb-6">
                Status note
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
                ShopLink Market is actively being developed and is not presented as launched. A
                live product link will be added when it is ready.
              </p>
            </FadeIn>
          </div>

          <ScaleReveal immediate delay={0.12} className="relative aspect-[4/3] bg-[#131313] overflow-hidden rounded-xl border border-border self-start">
            <img
              src="/images/projects/shoplink-market.png"
              alt="ShopLink Market"
              className="h-full w-full object-contain bg-[#131313]"
              loading="lazy"
            />
          </ScaleReveal>
        </div>
      </div>
    </div>
  );
}
