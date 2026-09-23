import { ArrowRight, Plus } from "lucide-react";

const questions = [
  [
    "Can I customize my payment plan?",
    "Absolutely, we tailor payment schedules to suit your needs, offering flexible monthly installment options.",
  ],
  [
    "What are the cost of building an app/software?",
    "Pricing starts at 20k and varies based on project complexity, features, and customization requirements.",
  ],
  [
    "What's the typical timeframe for project completion?",
    "On average, expect a development timeline of 3-8 months, though this may vary based on project scope and specifications.",
  ],
  [
    "Do you offer ongoing support after launch?",
    "Yes, we provide comprehensive post-launch support to ensure your application continues to perform optimally and evolve with your needs.",
  ],
  [
    "Can I integrate third-party tools or services into my app or software?",
    "Absolutely, we specialize in seamless integration of third-party APIs and services to enhance functionality and user experience.",
  ],
  [
    "Are the solutions scalable for future growth?",
    "Yes, our development solutions are designed with scalability in mind, allowing for easy expansion and adaptation as your business evolves.",
  ],
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
            Questions, answered
          </p>
          <h2 className="mt-4 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
            The useful stuff, <em className="text-[#bafc0c]">up front.</em>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#b6b9bb]">
            A good development partner should make the path clearer. Here are
            the answers to the questions we hear most often.
          </p>
          <a
            href="#project-form"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[#bafc0c] hover:text-white"
          >
            Still have a question? Talk to us{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-3">
          {questions.map(([question, answer], index) => (
            <details
              key={question}
              className="group rounded-2xl border border-white/10 bg-white/[.03] transition-colors open:border-[#65891c] open:bg-white/[.05]"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-[16px] font-bold focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#bafc0c] [&::-webkit-details-marker]:hidden sm:px-6">
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[11px] text-[#65891c]">
                    0{index + 1}
                  </span>
                  {question}
                </span>
                <Plus
                  size={20}
                  className="shrink-0 text-[#bafc0c] transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl px-5 pb-5 pl-14 text-[15px] leading-relaxed text-[#b6b9bb] sm:px-6 sm:pl-16">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
