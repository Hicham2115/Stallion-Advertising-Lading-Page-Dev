"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

const projectTypes = [
  "Static website",
  "Online store",
  "CRM",
  "Platform",
  "Mobile app",
  "SaaS product",
];
const timelines = [
  "Within 1 month",
  "Within 2–3 months",
  "Within 6 months",
  "Within a year",
  "I am not sure yet",
];

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <span className="mb-2 block text-[13px] font-semibold text-[#d9dcda]">
        {label}
      </span>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-13 w-full items-center justify-between rounded-xl border border-white/12 bg-[#0d1011] px-4 text-left text-[15px] text-white transition hover:border-[#65891c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bafc0c]"
      >
        <span className={value ? "text-white" : "text-[#777d7e]"}>
          {value || `Choose ${label.toLowerCase()}`}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={open ? "rotate-180 transition" : "transition"}
        />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/12 bg-[#171b1c] p-1 shadow-2xl">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[15px] text-[#e7e9e7] transition hover:bg-[#65891c]/25 hover:text-white"
            >
              {option}
              {value === option && (
                <Check
                  size={16}
                  aria-hidden="true"
                  className="text-[#bafc0c]"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Closing() {
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="project-form"
      className="relative z-1 mx-auto mt-12 w-[min(100%-2.5rem,980px)] scroll-mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#65891c]/20 to-white/[.025] px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-2xl">
        <p className="text-center font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
          START A PROJECT
        </p>
        <h2 className="mt-4 text-center text-[42px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
          Contact us for a free MVP.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[16px] text-[#b6b9bb]">
          Tell us a little about your idea. We&apos;ll get back to you with the
          right next step.
        </p>
        {submitted ? (
          <div className="mt-10 rounded-2xl border border-[#bafc0c]/30 bg-[#bafc0c]/10 p-8 text-center">
            <Check
              className="mx-auto text-[#bafc0c]"
              size={28}
              aria-hidden="true"
            />
            <h3 className="mt-4 text-[24px] font-bold">Thanks, we got it.</h3>
            <p className="mt-2 text-[15px] text-[#b6b9bb]">
              Our development team will review your project and contact you
              soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Type of product"
                value={projectType}
                options={projectTypes}
                onChange={setProjectType}
              />
              <SelectField
                label="When do you want to launch?"
                value={timeline}
                options={timelines}
                onChange={setTimeline}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                First and last name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e] focus:border-[#bafc0c]"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                Role{" "}
                <span className="font-normal text-[#777d7e]">(optional)</span>
                <input
                  name="role"
                  autoComplete="organization-title"
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e]"
                  placeholder="CEO, owner, manager..."
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e] focus:border-[#bafc0c]"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block text-[13px] font-semibold text-[#d9dcda]">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="mt-2 min-h-13 w-full rounded-xl border border-white/12 bg-[#0d1011] px-4 text-[15px] text-white outline-none transition placeholder:text-[#777d7e] focus:border-[#bafc0c]"
                  placeholder="+212 ..."
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={!projectType || !timeline}
              className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-[#bafc0c] px-5 py-3.5 text-[15px] font-extrabold text-[#0a0c0d] shadow-[0_0_30px_rgba(186,252,12,.3)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c]"
            >
              Send project details <ArrowRight size={19} aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
