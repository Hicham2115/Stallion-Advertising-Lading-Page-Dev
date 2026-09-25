import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const members = [
  [
    "Bader",
    "Co-Founder",
    "/team/badr.png",
    "Setting the vision, the offer, and the client relationship behind everything we build.",
  ],
  [
    "Abderrahmane",
    "Co-Founder",
    "/team/abderrahmane.png",
    "Keeping delivery sharp and the team aligned, project after project.",
  ],
  [
    "Said",
    "CTO, Senior Software Engineer & AI Specialist",
    "/team/said.png",
    "Architecting the systems and AI behind our most technically demanding builds.",
  ],
  [
    "Hicham",
    "Senior Full Stack Developer, Automation Specialist",
    "/team/hicham-new.png",
    "Full-stack engineering and automation that keep complex products running without friction.",
  ],
  [
    "Mohammed",
    "Senior Full Stack Developer , Seo Expert",
    "/team/mohamed.jpg",
    "Building reliable, production-ready features across the full stack, from database to interface.",
  ],
  [
    "Anas",
    "Junior Full Stack Developer",
    "/team/anass.png",
    "Full-stack support across every active project, learning fast and shipping faster.",
  ],
  [
    "Salma",
    "Head of Sales",
    "/team/salma.jpeg",
    "Leading the sales team and turning first conversations into signed, delivered projects.",
  ],
  [
    "Meryem",
    "Project Manager",
    "/team/meryem.jpg",
    "Organized project manager ensuring smooth execution, clear communication, and on-time delivery across all projects.",
  ],
  // [
  //   "Amine",
  //   "Sales",
  //   "/team/amine.jpg",
  //   "The team behind every call and every follow-up, from your first message to a booked meeting.",
  // ],
  [
    "Marwan",
    "Senior Video Editor",
    "/team/marwan.png",
    "Senior video editor creating engaging visual stories through cinematic editing, motion design, and strong storytelling.",
  ],
  [
    "Zakaria",
    "Graphic Designer",
    "/team/zakaria.jpg",
    "Creative graphic designer crafting visually compelling brands through strong identity, typography, and modern design systems.",
  ],
  [
    "Ayoub",
    "Media Buyer",
    "/team/unknown.png",
    "Strategic media buyer focused on scaling campaigns through data-driven ad optimization, audience targeting, and performance analysis across digital platforms.",
  ],
  [
    "Achraf",
    "Sales",
    "/team/unknown.png",
    "Results-driven sales professional skilled in client acquisition, relationship management, and converting leads into long-term partnerships.",
  ],
  [
    "Nada Ez Zorzar",
    "Sales",
    "/team/nada.png",
    "The team behind every call and every follow-up, from your first message to a booked meeting.",
  ],
  [
    "Yassmine Dhibi",
    "Sales",
    "/team/yassmine.png",
    "The team behind every call and every follow-up, from your first message to a booked meeting.",
  ],
];

export function Team() {
  return (
    <section
      id="team"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
          <span className="size-1.5 rounded-full bg-[#bafc0c]" />
          The people behind the products
        </p>
        <h2 className="mx-auto mt-5 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
          Meet the <em className="text-[#bafc0c]">team.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">
          Strategists, designers, engineers, and operators working together to
          bring your product to life.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          dragFree: false,
        }}
        className="relative mx-auto mt-12 w-full max-w-6xl"
      >
        <CarouselContent className="select-none">
          {members.map(([name, role, image, bio]) => (
            <CarouselItem
              key={name}
              className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,.2)]">
                <div className="relative h-80 overflow-hidden bg-[#14171a] sm:h-96 md:h-[420px]">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0d] via-transparent to-transparent" />
                  <p className="absolute inset-x-4 bottom-4 translate-y-3 text-[13px] leading-relaxed text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {bio}
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="text-[20px] font-black tracking-[-.04em] group-hover:text-[#bafc0c]">
                    {name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[.16em] text-[#bafc0c]">
                    {role}
                  </p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 border-0 bg-[#65891c] text-white shadow-lg hover:bg-[#bafc0c] hover:text-[#65891c] sm:-left-5" />
        <CarouselNext className="-right-4 border-0 bg-[#65891c] text-white shadow-lg hover:bg-[#bafc0c] hover:text-[#65891c] sm:-right-5" />
      </Carousel>
    </section>
  );
}
