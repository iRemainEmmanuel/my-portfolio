# Emmanuel Mwamba

Personal website and portfolio of **Emmanuel Mwamba**, a Software Developer and Startup Founder based in Ndola, Zambia, focused on building practical digital products and technology solutions that solve real problems.

**Live Website:** [mwambae.vercel.app](https://mwambae.vercel.app/)

---

## About

This website presents who I am, the digital products I am building, my areas of expertise, my professional journey, and my participation in Zambia's technology and entrepreneurship ecosystem.

I am the founder of **EICTA Technologies**, a Software Development, IT and Business Solutions Company based in Ndola, Zambia, and I am building **ShopLink** (including ShopLink Lite and ShopLink Market).

---

## Site Sections

* **Home (`/`):** Positioning overview, selected work, areas of expertise, latest professional highlights, brief introduction, and contact invitation.
* **About (`/about`):** Background, problem-solving approach, entrepreneurship mindset, active tech stack, and EICTA Technologies overview.
* **Work (`/work`):** Dedicated pages for featured products and projects, including ShopLink Lite, ShopLink Market, and Apostle Kim Remuel Ministry Website.
* **Expertise (`/services/[slug]`):** Dedicated pages for Software Development, Web Development, IT Solutions, Business Automation, and Business Registration & Compliance.
* **Experience (`/experience`) & Credentials (`/credentials`):** Professional roles, recognition, academic background, and certifications.
* **Events (`/events` & `/events/[slug]`):** Professional experiences and innovation milestones, including the NDCCI Capacity Building Conference, BongoHive IGNITE RoadShow, and ZICTA ICT Innovation Programme, featuring editorial asymmetric photo galleries and a full-screen lightbox.
* **Contact (`/contact`):** Project enquiries, collaborations, and social profiles.
* **Custom 404 (`/not-found`):** Editorial recovery page with direct links across the site.

---

## Tech Stack

* **Next.js 14 (App Router):** Static generation, dynamic routes, and metadata management
* **React 18 & TypeScript:** Strongly typed component architecture
* **Tailwind CSS:** Dark editorial design system and responsive layout
* **Framer Motion:** Page transitions, scroll-triggered reveals, scroll progress bar, scroll-reactive header, and lightbox animations
* **Lucide React:** Minimal interface icons

---

## Features

* Dark editorial layout designed for desktop, tablet, and mobile
* Scroll-reactive navigation bar that transitions smoothly from full name (`Emmanuel Mwamba`) to initials (`EM`) on scroll
* Site-wide Framer Motion animations with automatic `reducedMotion="user"` accessibility support
* Editorial asymmetric event galleries with a keyboard, click, and touch-swipe enabled full-screen lightbox
* Dedicated statically generated routes for work items, expertise areas, and events
* SEO metadata, Open Graph and Twitter/X cards, custom SVG favicon, `robots.txt`, and `sitemap.xml`
* Separated development (`.next-dev`) and production (`.next`) build directories to prevent cache collisions

---

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── credentials/
│   ├── events/
│   │   └── [slug]/
│   ├── experience/
│   ├── services/
│   │   └── [slug]/
│   ├── work/
│   │   ├── apostle-kim-remuel/
│   │   ├── shoplink-lite/
│   │   └── shoplink-market/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── template.tsx
├── components/
│   ├── events/
│   ├── motion/
│   ├── navigation/
│   ├── projects/
│   ├── sections/
│   ├── ui/
│   └── footer.tsx
├── data/
│   ├── events.ts
│   └── projects.ts
├── lib/
└── types/

public/
├── images/
│   ├── events/
│   └── projects/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## Getting Started

### Prerequisites

* Node.js 24.x (recommended)
* npm

### Installation

```bash
git clone https://github.com/iRemainEmmanuel/my-portfolio.git
cd my-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Checking & Production Build

```bash
npx tsc --noEmit
npm run build
npm run start
```

---

## Deployment

Configured for **Vercel** via `vercel.json` (`framework: "nextjs"`) and `.vercelignore`.

```bash
vercel --prod
```

---

## Contact

* **Website:** [mwambae](https://mwambae.vercel.app/)
* **Email:** [mwambaemmanuel005@gmail.com](mailto:mwambaemmanuel005@gmail.com)
* **LinkedIn:** [Emmanuel Mwamba](https://www.linkedin.com/in/emmanuel-mwamba-677186301/)
* **GitHub:** [@iRemainEmmanuel](https://github.com/iRemainEmmanuel)
* **X:** [@iRemainEmmanuel](https://x.com/iRemainEmmanuel)
* **Facebook:** [@iRemainEmmanuel](https://web.facebook.com/iRemainEmmanuel/)

---

Built by **Emmanuel Mwamba**. Software Developer, Startup Founder, building practical technology solutions.
