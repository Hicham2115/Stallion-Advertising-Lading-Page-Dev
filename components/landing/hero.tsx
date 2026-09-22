import { ArrowRight, Rocket } from "lucide-react";

const buttonClass =
  "inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-[15px] font-extrabold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c]";

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-1 grid min-h-[680px] place-items-center overflow-hidden sm:min-h-[min(880px,100dvh)]"
    >
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0c0d]/70 to-[#0a0c0d]/55" />
      <div className="w-full max-w-[1050px] px-5 pt-28 pb-18 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
          <span className="size-1.5 rounded-full bg-[#bafc0c] shadow-[0_0_10px_#bafc0c]" />
          Stallion Development Department
        </p>
        <h1 className="mt-6 text-balance text-[42px] font-black leading-[.96] tracking-[-.045em] sm:text-[56px] lg:text-[75px]">
          WE BUILD DIGITAL
          <br />
          PRODUCTS THAT
          <br />
          <em className="text-[#bafc0c]">MOVE BUSINESS FORWARD</em>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-gray-300 sm:text-[18px]">
          From high-converting websites to scalable software, our development
          team turns ambitious ideas into fast, reliable digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <a
            className={`${buttonClass} bg-[#bafc0c] text-[#0a0c0d] shadow-[0_0_30px_rgba(186,252,12,.3)] hover:shadow-[0_0_42px_rgba(186,252,12,.48)]`}
            href="#project-form"
          >
            <Rocket size={19} aria-hidden="true" />
            Start a Development Project
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div
          aria-hidden="true"
          className="mx-auto mt-8 flex w-37 items-center justify-center gap-2"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#65891c]" />
          <i className="size-2 animate-pulse rounded-full bg-[#bafc0c] shadow-[0_0_10px_#bafc0c]" />
          <i className="size-2 animate-pulse rounded-full bg-[#65891c] [animation-delay:250ms]" />
          <i className="size-2 animate-pulse rounded-full bg-[#bafc0c] [animation-delay:500ms]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#65891c]" />
        </div>
      </div>
    </section>
  );
}
