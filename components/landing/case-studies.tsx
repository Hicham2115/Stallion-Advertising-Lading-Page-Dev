import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";

const studies = [
  { title: "Maison Oria", image: "/case-studies/maison oria.png", type: "Online Store", tags: ["E-commerce", "Luxury Brand", "Product Discovery"], description: "A premium leather-bag storefront with editorial storytelling, curated collections, product discovery, wishlist and cart flows, customer reviews, and a seasonal offer.", link: "https://e-com-bags.vercel.app/" },
  { title: "Maison Furniture", image: "/case-studies/Fourniture.png", type: "Online Store", tags: ["E-commerce", "Luxury Furniture", "Product Catalog"], description: "A luxury furniture commerce experience with curated product drops, living-room and bedroom categories, product stories, testimonials, wishlist, and cart flows.", link: "https://e-commerce-furniture-gilt.vercel.app/" },
  { title: "SOSHouse", image: "/case-studies/sos-house.jpeg", type: "Static Website", tags: ["Website", "Lead Generation", "SEO"], description: "A Luxembourg home-services platform built around a three-step quote funnel, service pages, emergency contact, testimonials, and an SEO-ready blog.", link: "https://www.sos-house.com/fr" },
  { title: "Arte Piedra", image: "/case-studies/arte-piedra.png", type: "Online Store", tags: ["Next.js", "E-commerce", "Brand Site"], description: "A French-localized editorial storefront for a marble and Moroccan zellige studio, built around large imagery, refined typography, and a slow artisanal position.", link: "https://arte-piedra.vercel.app/" },
  { title: "Anissa Cosmetics", image: "/case-studies/anissa-cosmetics.png", type: "Online Store", tags: ["E-commerce", "DTC", "Video Hero"], description: "A quiet-luxury skincare storefront with a video hero, product routines, trust badges, cart, wishlist, and customer proof throughout the buying journey.", link: "https://www.anissacosmetics.com/" },
  { title: "Stallion CRM", image: "/case-studies/stallion.png", type: "CRM", tags: ["Next.js", "Laravel", "Dashboards"], description: "The custom sales and delivery platform behind Stallion Advertising, with ad attribution, progressive lead intake, pipeline tracking, margins, and close-rate dashboards.", link: "https://stallion-crm-swart.vercel.app/login" },
  { title: "Talk French Canada", image: "/case-studies/talk-french-canada.svg", type: "SaaS Platform", tags: ["SaaS", "Ed-tech", "Next.js"], description: "A conversion-focused course platform for TEF and TCF Canada preparation with mock tests, oral simulations, progress tracking, pricing tiers, and checkout.", link: "https://talkfrenchcanada.co/" },
  { title: "SOS House Marketplace", image: "/case-studies/sos-house.jpeg", type: "Mobile App / Platform", tags: ["Next.js", "Laravel", "PostGIS"], description: "A Casablanca home-services marketplace with provider eligibility rules, prepaid lead access, WhatsApp notifications, identity verification, and an AI-assisted completion layer.", link: "https://so-s-house-platform-phi.vercel.app/" },
  { title: "Stallion OS", image: "/case-studies/stallion.png", type: "Internal SaaS", tags: ["SaaS", "AI", "Internal Tool"], description: "The internal operating system for Stallion Advertising: dashboards, projects, Kanban tasks, finance, role-based access, and a context-aware AI Copilot.", link: "https://stallion-os-app.vercel.app/signin#chat" },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 text-center sm:py-28">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]"><span className="size-1.5 rounded-full bg-[#bafc0c]" />Selected development work</p>
      <h2 className="mx-auto mt-5 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">Built For <em className="text-[#bafc0c]">Real Growth</em></h2>
      <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">A selection of websites, platforms, and internal systems built by Stallion&apos;s development team.</p>
      <div className="mt-12 grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <article key={study.title} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,0.2)]">
            <div className="mb-6 flex items-start justify-between gap-4"><div className="relative grid size-16 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/10 p-2"><Image src={study.image} alt={`${study.title} logo`} fill sizes="64px" className="object-contain p-2" /></div><span className="rounded-full border border-[#65891c]/50 bg-[#65891c]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[.12em] text-[#bafc0c]">{study.type}</span></div>
            <h3 className="text-[22px] font-black tracking-[-.045em]">{study.title}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#b6b9bb]">{study.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">{study.tags.map((tag) => <li key={tag} className="flex items-center gap-1.5 text-[12px] text-gray-300"><Check size={12} className="rounded-full bg-[#65891c] p-0.5" aria-hidden="true" />{tag}</li>)}</ul>
            <a className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#bafc0c] hover:text-white" href={study.link} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
    </section>
  );
}
