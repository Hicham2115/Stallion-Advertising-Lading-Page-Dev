import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const members = [
  ["Abderrahmane", "Co-Founder", "/team/abderrahmane.png", "Driving strategy, innovation, and long-term growth for impactful digital products."],
  ["Bader", "Co-Founder", "/team/badr.png", "Building the vision and systems that turn ambitious ideas into scalable products."],
  ["Hicham", "Senior Full Stack Developer", "/team/hicham.jpeg", "Building high-performance, scalable web applications with clean architecture."],
  ["Mohamed", "Senior Full Stack Developer", "/team/mohamed.jpg", "Turning complex business needs into reliable, scalable, and secure solutions."],
  ["Said", "Senior Software Engineer", "/team/said.png", "Engineering robust systems with a strong focus on code quality and best practices."],
  ["Meryem", "Project Manager", "/team/meryem.jpg", "Keeping communication clear, execution smooth, and delivery on time."],
  ["Zakaria", "Graphic Designer", "/team/zakaria.jpg", "Crafting strong visual identities and modern design systems."],
  ["Amine", "Sales", "/team/amine.jpg", "Building client relationships and connecting businesses with the right solutions."],
  ["Marwan", "Senior Video Editor", "/team/marwan.png", "Creating engaging visual stories through cinematic editing, motion design, and strong storytelling."],
  ["Ayoub", "Media Buyer", "/team/unknown.png", "Scaling campaigns through data-driven ad optimization, audience targeting, and performance analysis."],
  ["Achraf", "Sales", "/team/unknown.png", "Building client relationships and turning new opportunities into long-term partnerships."],
  ["Salma El Ouarzazi", "Sales", "/team/salma.jpeg", "Finding new business opportunities, nurturing relationships, and delivering measurable growth."],
  ["Nada Ez Zorzar", "Sales", "/team/nada.png", "Connecting businesses with the right solutions through thoughtful client relationships."],
  ["Yassmine Dhibi", "Sales", "/team/yassmine.png", "Focused on lead conversion, negotiation, and building partnerships that fuel growth."],
];

export function Team() {
  return (
    <section id="team" className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28">
      <div className="text-center"><p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]"><span className="size-1.5 rounded-full bg-[#bafc0c]" />The people behind the products</p><h2 className="mx-auto mt-5 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">Meet the <em className="text-[#bafc0c]">team.</em></h2><p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">Strategists, designers, engineers, and operators working together to bring your product to life.</p></div>
      <Carousel opts={{ align: "start", loop: true }} className="relative mx-auto mt-12 w-full max-w-6xl">
        <CarouselContent className="-ml-4">
          {members.map(([name, role, image, bio]) => <CarouselItem key={name} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"><article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,.2)]"><div className="relative h-80 overflow-hidden bg-[#14171a] sm:h-96 md:h-[420px]"><Image src={image} alt={name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0d] via-transparent to-transparent" /><p className="absolute inset-x-4 bottom-4 translate-y-3 text-[13px] leading-relaxed text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{bio}</p></div><div className="p-5"><h3 className="text-[20px] font-black tracking-[-.04em] group-hover:text-[#bafc0c]">{name}</h3><p className="mt-1 font-mono text-[11px] uppercase tracking-[.16em] text-[#bafc0c]">{role}</p></div></article></CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="hidden border-0 bg-[#65891c] text-white shadow-lg hover:bg-[#bafc0c] hover:text-[#65891c] md:flex" />
        <CarouselNext className="hidden border-0 bg-[#65891c] text-white shadow-lg hover:bg-[#bafc0c] hover:text-[#65891c] md:flex" />
      </Carousel>
    </section>
  );
}
