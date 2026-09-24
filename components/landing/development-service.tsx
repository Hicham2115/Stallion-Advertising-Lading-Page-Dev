import { Blocks, Gauge, Layers3, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Blocks,
    title: "Websites & web apps",
    text: "High-performing digital experiences designed around your users, goals, and growth.",
  },
  {
    icon: Layers3,
    title: "SaaS & platforms",
    text: "Scalable products with the architecture, workflows, and integrations needed to grow with demand.",
  },
  {
    icon: Gauge,
    title: "Performance by default",
    text: "Fast load times, responsive layouts, and clean systems that stay reliable after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    text: "Secure, maintainable code with thoughtful handoff and support for the next stage of your product.",
  },
];

export function DevelopmentService() {
  return (
    <section
      id="development-service"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
            What our developers do
          </p>
          <h2 className="mt-4 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
            Ideas into <em className="text-[#bafc0c]">working products.</em>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">
            Our development department partners with you from first idea to
            launch. We combine product thinking, strong engineering, and a clear
            process to build software that makes a real difference.
          </p>
          <a
            href="#project-form"
            className="mt-8 inline-flex min-h-13 items-center rounded-xl bg-[#bafc0c] px-5 py-3.5 text-[15px] font-extrabold text-[#0a0c0d] shadow-[0_0_30px_rgba(186,252,12,.25)] transition hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c]"
          >
            Get a Free MVP
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[.03] p-5 transition hover:-translate-y-1 hover:border-[#65891c]"
            >
              <div className="mb-5 grid size-11 place-items-center rounded-xl bg-[#65891c]">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-[19px] font-black tracking-[-.03em]">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#b6b9bb]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
