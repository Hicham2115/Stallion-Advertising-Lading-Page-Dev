"use client";

import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const videos = ["img_4681", "img_4688", "img_4704", "img_4789", "img_4824"];

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [playing, setPlaying] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);
  const togglePlay = (index: number) => { const video = videoRefs.current[index]; if (!video) return; if (video.paused) { video.play().then(() => setPlaying(index)).catch(() => undefined); } else { video.pause(); setPlaying(null); } };
  const move = (direction: number) => track.current?.scrollBy({ left: direction * (track.current.clientWidth * 0.82), behavior: "smooth" });
  return <section id="testimonials" className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28">
    <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">Client perspective</p><h2 className="mt-4 text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">Hear it from the <em className="text-[#bafc0c]">people.</em></h2></div><div className="flex gap-2"><button type="button" onClick={() => move(-1)} className="grid size-11 place-items-center rounded-full border border-white/15 text-[22px] text-white hover:border-[#bafc0c]" aria-label="Previous testimonial">←</button><button type="button" onClick={() => move(1)} className="grid size-11 place-items-center rounded-full bg-[#bafc0c] text-[22px] text-[#0a0c0d]" aria-label="Next testimonial">→</button></div></div>
    <div ref={track} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{videos.map((name, index) => <article key={name} className="relative min-w-[86%] snap-start overflow-hidden rounded-3xl border border-white/10 bg-[#111514] sm:min-w-[48%] lg:min-w-[31.5%]"><video ref={(element) => { videoRefs.current[index] = element; }} onClick={() => togglePlay(index)} onEnded={() => setPlaying(null)} className="aspect-[9/14] w-full cursor-pointer object-cover" playsInline muted={muted} preload="metadata" src={`/testimonials/${name}.mp4`} /><div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 via-black/55 to-transparent px-4 pb-4 pt-12"><button type="button" onClick={() => togglePlay(index)} className="grid size-10 place-items-center rounded-full bg-[#bafc0c] text-[#0a0c0d]" aria-label={playing === index ? "Pause video" : "Play video"}>{playing === index ? <Pause size={17} /> : <Play size={17} />}</button><div className="flex gap-2"><button type="button" onClick={() => setMuted((value) => !value)} className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/40 text-white" aria-label={muted ? "Unmute video" : "Mute video"}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button><button type="button" onClick={() => videoRefs.current[index]?.requestFullscreen()} className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/40 text-white" aria-label="Fullscreen video"><Maximize2 size={16} /></button></div></div></article>)}</div>
  </section>;
}
