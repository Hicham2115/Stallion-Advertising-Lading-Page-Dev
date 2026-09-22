import { Quote } from "lucide-react";

const testimonials = [
  { quote: "The team gave us a clear path from a visitor arriving on the site to a qualified quote request.", role: "Home services platform", project: "SOSHouse" },
  { quote: "We stopped treating our product like a collection of pages and started operating it like a real platform.", role: "Education platform", project: "Talk French Canada" },
  { quote: "The system finally gives our team one place to see the pipeline, the numbers, and what needs attention next.", role: "Internal sales platform", project: "Stallion CRM" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28">
      <div className="text-center"><p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]"><span className="size-1.5 rounded-full bg-[#bafc0c]" />Client perspective</p><h2 className="mx-auto mt-5 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">Built with trust. <em className="text-[#bafc0c]">Proven in use.</em></h2><p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">The best measure of a product is what it makes possible for the team using it.</p></div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.map((testimonial) => <figure key={testimonial.project} className="relative rounded-2xl border border-white/10 bg-white/[.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,.2)]"><Quote className="mb-8 text-[#bafc0c]" size={28} aria-hidden="true" /><blockquote className="text-[18px] font-semibold leading-relaxed tracking-[-.02em]">“{testimonial.quote}”</blockquote><figcaption className="mt-8 border-t border-white/10 pt-4"><p className="text-[14px] font-bold text-[#bafc0c]">{testimonial.project}</p><p className="mt-1 font-mono text-[11px] uppercase tracking-[.12em] text-[#818789]">{testimonial.role}</p></figcaption></figure>)}</div>
    </section>
  );
}
