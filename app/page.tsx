import { Background } from "@/components/landing/background";
import { CaseStudies } from "@/components/landing/case-studies";
import { Closing } from "@/components/landing/closing";
import { DevelopmentService } from "@/components/landing/development-service";
import { Footer } from "@/components/landing/footer";
import { Faq } from "@/components/landing/faq";
import { FormCta } from "@/components/landing/form-cta";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Testimonials } from "@/components/landing/testimonials";
import { Team } from "@/components/landing/team";
import { Ticker } from "@/components/landing/ticker";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0c0d] text-[#f9faf9] selection:bg-[#bafc0c] selection:text-[#0a0c0d]">
      <Background />
      <Header />
      <Hero />
      <Ticker />
      <FormCta />
      <DevelopmentService />
      <FormCta />
      <Team />
      <FormCta />
      <CaseStudies />
      <FormCta />
      <Faq />
      <FormCta />
      <Testimonials />
      <FormCta />
      <Closing />
      <Footer />
    </main>
  );
}
