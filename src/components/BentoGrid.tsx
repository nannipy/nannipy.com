"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BentoCard from "./BentoCard";
import PolaroidDeck from "./PolaroidDeck";
import CommandPalette from "./CommandPalette";
import ProjectDrawer from "./ProjectDrawer";
import MatrixRain from "./MatrixRain";
import PizzaConfetti from "./PizzaConfetti";
import MaskedHeading from "./MaskedHeading";
import MagneticButton from "./MagneticButton";
import type { ExperienceItem } from "../types";
import LocationIcon from "./icons/LocationIcon";
import WorkIcon from "./icons/WorkIcon";
import UpRightArrowIcon from "./icons/UpRightArrowIcon";
import GithubIcon from "./icons/GithubIcon";

interface BentoGridProps {
  featuredProjects: ExperienceItem[];
  allProjects: ExperienceItem[];
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-osmo-cyan",
  JavaScript: "bg-yellow-400",
  Python: "bg-osmo-lime",
  Ruby: "bg-rose-500",
  HTML: "bg-orange-500",
  Go: "bg-cyan-400",
  Rust: "bg-amber-500",
  PHP: "bg-indigo-400",
};

export default function BentoGrid({
  featuredProjects,
  allProjects,
}: BentoGridProps) {
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedDrawerProject, setSelectedDrawerProject] = useState<ExperienceItem | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showPizza, setShowPizza] = useState(false);

  // Global shortcut: Cmd+K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    const handleCustomToggle = () => {
      setIsCommandPaletteOpen((prev) => !prev);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleCustomToggle);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleCustomToggle);
    };
  }, []);

  const currentList = activeTab === "featured" ? featuredProjects : allProjects;
  const mid = Math.ceil(currentList.length / 2);
  const col1 = currentList.slice(0, mid);
  const col2 = currentList.slice(mid);

  // Top flagship projects for the bento spotlight
  const flagshipProjects = featuredProjects.slice(0, 4);

  return (
    <>
      {/* Easter Egg Overlays */}
      {showMatrix && <MatrixRain onClose={() => setShowMatrix(false)} />}
      {showPizza && <PizzaConfetti onClose={() => setShowPizza(false)} />}

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        projects={allProjects}
        onSelectProject={(proj) => setSelectedDrawerProject(proj)}
        onTriggerMatrix={() => setShowMatrix(true)}
        onTriggerPizza={() => setShowPizza(true)}
      />

      {/* Project Side Drawer */}
      <ProjectDrawer
        project={selectedDrawerProject}
        onClose={() => setSelectedDrawerProject(null)}
      />

      <div className="space-y-16 py-8">
        {/* HERO SECTION: OSMO FLUID HEADING & TELEMETRY */}
        <section className="relative space-y-6 pt-4 pb-8 border-b border-osmo-border">
          {/* Micro Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-osmo-text-muted">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-osmo-lime animate-pulse" />
              <span className="text-osmo-text-secondary tracking-widest uppercase">
                PORTFOLIO // v1.5.0
              </span>
              <span>&bull;</span>
              <span>DEV TOOLKIT &amp; REPO VAULT</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span>LAT 41.9028° N, LON 12.4964° E</span>
              <span>&bull;</span>
              <span className="text-osmo-lime">AVAILABLE FOR HIRE</span>
            </div>
          </div>

          {/* Masked Typographic Display Scrub */}
          <div className="py-4">
            <MaskedHeading as="h1" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter">
              ENGINEERING SOFTWARE BUILT TO SCALE
            </MaskedHeading>
          </div>

          {/* Hero Lead Paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <p className="md:col-span-8 text-base sm:text-lg text-osmo-text-secondary leading-relaxed font-sans">
              I am <strong className="text-osmo-text-primary font-semibold">Giovanni Battista Pernazza</strong> &mdash;
              a software engineer crafting resilient distributed systems, data pipelines, and high-fidelity web experiences.
              Bridging robust Python backends with kinetic, Swiss-inspired design systems.
            </p>

            {/* Quick Action Magnetic Buttons */}
            <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end items-center">
              <MagneticButton
                onClick={() => setIsCommandPaletteOpen(true)}
                className="border-osmo-lime/50 text-osmo-lime bg-osmo-lime/10 hover:bg-osmo-lime hover:text-osmo-canvas font-mono text-xs"
              >
                <span>OPEN VAULT</span>
                <span className="text-[10px] px-1 py-0.2 rounded bg-osmo-lime/20 text-osmo-lime group-hover:text-osmo-canvas font-mono">⌘K</span>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://cal.com/giovannipernazza/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono"
              >
                <span>BOOK CALL &rarr;</span>
              </MagneticButton>
            </div>
          </div>

          {/* Tech Stack Marquee / Ticker Chips */}
          <div className="pt-4 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase text-osmo-text-muted">
            <span className="text-osmo-text-secondary mr-1">STACK CORE:</span>
            {["Python", "TypeScript", "Next.js 16", "PostgreSQL", "Docker", "GSAP", "Tailwind", "Redis"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full border border-osmo-border bg-osmo-surface text-osmo-text-secondary hover:border-osmo-lime/40 hover:text-osmo-lime transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ROW 1: BENTO HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1: Identity, Bio, & Social Bar (7 cols) */}
          <div className="md:col-span-7">
            <BentoCard
              tag="IDENTITY // BIO"
              statusText="ACTIVE"
              pulse
              className="h-full"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-osmo-elevated">
                    <Image
                      src="/logo-en2.png"
                      alt="Giovanni Battista Pernazza"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-osmo-text-primary">
                      Giovanni Battista Pernazza
                    </h2>
                    <div className="flex items-center gap-3 text-xs font-mono text-osmo-text-muted mt-1.5">
                      <span className="flex items-center gap-1">
                        <LocationIcon /> Rome, Italy
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1 text-osmo-cyan">
                        <WorkIcon /> Software Engineer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio copy */}
                <p className="text-sm text-osmo-text-secondary leading-relaxed">
                  Passionate about engineering elegant, high-throughput applications with{" "}
                  <span className="text-osmo-lime font-mono">Python</span> and{" "}
                  <span className="text-osmo-cyan font-mono">TypeScript</span>.
                  Experienced in distributed backends, REST/GraphQL APIs, and polished interactive frontends.
                  When I&apos;m not shipping software, you&apos;ll find me running through Rome or celebrating good food.
                </p>

                {/* Social & Contact Pill Bar */}
                <div className="pt-4 border-t border-osmo-border/40">
                  <div className="flex flex-wrap gap-2">
                    {[
                      {
                        href: "https://cal.com/giovannipernazza/30min",
                        label: "Book a Call",
                        icon: "📅",
                        highlight: true,
                      },
                      {
                        href: "mailto:gb.pernazza@gmail.com",
                        label: "Email",
                        icon: "✉️",
                      },
                      {
                        href: "https://github.com/nannipy",
                        label: "GitHub",
                        icon: "🐙",
                      },
                      {
                        href: "https://www.linkedin.com/in/giovannibpernazza",
                        label: "LinkedIn",
                        icon: "💼",
                      },
                      {
                        href: "https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit?tab=t.0",
                        label: "CV",
                        icon: "📄",
                      },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                          item.highlight
                            ? "bg-osmo-lime text-osmo-canvas font-semibold hover:bg-white hover:scale-105"
                            : "bg-osmo-elevated border border-osmo-border hover:border-osmo-border-bright text-osmo-text-secondary hover:text-osmo-text-primary"
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                        <UpRightArrowIcon />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Bento Card 2: Interactive Polaroid Deck (5 cols) */}
          <div className="md:col-span-5">
            <div className="h-full rounded-2xl border border-osmo-border overflow-hidden bg-osmo-surface/60">
              <PolaroidDeck />
            </div>
          </div>
        </div>

        {/* ROW 2: COMMAND PALETTE, ATHLETIC QUOTE, AND ROOTS BADGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 3: Command Palette & GitHub Status */}
          <BentoCard
            tag="SYSTEM COMMAND"
            statusText="CMD + K"
            pulse
            onClick={() => setIsCommandPaletteOpen(true)}
            className="cursor-pointer"
            footerRight={<span className="text-xs font-mono text-osmo-lime">LAUNCH &rarr;</span>}
          >
            <div className="space-y-3">
              <div className="text-base font-semibold text-osmo-text-primary group-hover:text-osmo-lime transition-colors">
                Interactive Command Palette
              </div>
              <p className="text-xs text-osmo-text-secondary leading-relaxed">
                Filter project vault, navigate repository branches, or execute secret system easter eggs.
              </p>
              <div className="text-[10px] font-mono text-osmo-text-muted">
                Press ⌘K or click anywhere on this card
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Running & Athletic Discipline */}
          <BentoCard
            tag="DISCIPLINE // MILES"
            statusText="TELEMETRY"
            footerRight={<span className="text-xs font-mono text-osmo-text-muted">GARMIN &bull; ROME</span>}
          >
            <div className="space-y-3">
              <p className="text-sm font-medium text-osmo-text-primary italic leading-relaxed">
                &ldquo;A happy developer is a running developer.&rdquo;
              </p>
              <p className="text-xs text-osmo-text-secondary leading-relaxed">
                Endurance, patience, and clear thinking: the same principles that power good engineering.
              </p>
              <div className="text-[10px] font-mono text-osmo-text-muted">
                Early morning road miles &amp; Foxrun tracking
              </div>
            </div>
          </BentoCard>

          {/* Card 5: Italian Roots & Pizza Secret */}
          <BentoCard
            tag="HERITAGE // UMBRIA"
            statusText="ROOTS"
            className="sm:col-span-2 lg:col-span-1"
            footerRight={
              <button
                onClick={() => setShowPizza(true)}
                className="text-xs font-mono text-osmo-amber hover:underline flex items-center gap-1"
              >
                <span>TRIGGER PIZZA</span>
                <span>🍕</span>
              </button>
            }
          >
            <div className="space-y-3">
              <div className="text-sm font-semibold text-osmo-text-primary">
                Agricola Pernazza
              </div>
              <p className="text-xs text-osmo-text-secondary leading-relaxed">
                Roots from the Umbrian hills: ancient wheat varieties, artisan olive oil, and family agricultural legacy.
              </p>
              <div className="text-[10px] font-mono text-osmo-text-muted">
                Umbria &mdash; Rome, Italy
              </div>
            </div>
          </BentoCard>
        </div>

        {/* ROW 3: BENTO FLAGSHIP SPOTLIGHT (Top 4 projects) */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-osmo-border">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-osmo-lime" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-osmo-text-primary">
                Flagship Highlights
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-osmo-border bg-osmo-surface text-osmo-text-muted">
                CURATED // 04
              </span>
            </div>
            <div className="text-[11px] font-mono text-osmo-text-muted">
              CLICK CARD FOR QUICK SPEC DRAWER
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flagshipProjects.map((project, idx) => {
              const hasLive = project.link && project.link !== project.github;
              const hasScreenshots = project.screenshots && project.screenshots.length > 0;

              return (
                <BentoCard
                  key={project.id}
                  tag={`VAULT // 0${idx + 1}`}
                  statusText={project.language || "CODE"}
                  pulse={idx === 0}
                  onClick={() => setSelectedDrawerProject(project)}
                  className="cursor-pointer"
                  footerRight={
                    <div className="flex items-center gap-3 text-xs font-mono">
                      {hasLive && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-osmo-lime flex items-center gap-1 text-osmo-text-secondary transition-colors"
                        >
                          LIVE <UpRightArrowIcon />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-osmo-lime flex items-center gap-1 text-osmo-text-secondary transition-colors"
                        >
                          <GithubIcon /> GIT
                        </Link>
                      )}
                      <span className="text-osmo-text-muted group-hover:text-osmo-lime transition-colors">
                        &rarr;
                      </span>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    {/* Header line inside card */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-osmo-text-primary group-hover:text-osmo-lime transition-colors">
                          {project.name}
                        </h3>
                        {project.language && (
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                languageColors[project.language] || "bg-osmo-text-muted"
                              }`}
                            />
                            <span className="text-[11px] font-mono text-osmo-text-muted">
                              {project.language}
                            </span>
                          </div>
                        )}
                      </div>

                      {project.logo && (
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-osmo-elevated">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-osmo-text-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Thumbnail snippet with Osmo Subtle Media Scale (transform: scale(1.04) on hover) */}
                    {hasScreenshots && (
                      <div className="relative w-full h-44 rounded-xl overflow-hidden my-2 bg-osmo-canvas border border-osmo-border">
                        <Image
                          src={project.screenshots![0]}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        />
                      </div>
                    )}
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </div>

        {/* ROW 4: ALL PROJECTS STREAM WITH FILTER TABS */}
        <div className="space-y-6 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-osmo-border">
            {/* Filter Pill Tabs */}
            <div className="inline-flex p-1 rounded-full border border-osmo-border bg-osmo-surface w-fit">
              <button
                type="button"
                onClick={() => setActiveTab("featured")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "featured"
                    ? "bg-osmo-lime text-osmo-canvas font-bold shadow-sm"
                    : "text-osmo-text-secondary hover:text-osmo-text-primary"
                }`}
              >
                CURATED ({featuredProjects.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-osmo-lime text-osmo-canvas font-bold shadow-sm"
                    : "text-osmo-text-secondary hover:text-osmo-text-primary"
                }`}
              >
                ALL REPOSITORIES ({allProjects.length})
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-osmo-text-muted">
              {activeTab === "all" ? (
                <span className="flex items-center gap-2 text-osmo-lime">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-osmo-lime opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-osmo-lime"></span>
                  </span>
                  GITHUB LIVE SYNC
                </span>
              ) : (
                <span>SORT: HAND-CURATED SELECTION</span>
              )}
            </div>
          </div>

          {/* Two-column stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[col1, col2].map((column, colIdx) => (
              <div key={colIdx} className="space-y-6">
                {column.map((item) => {
                  const hasLiveLink = item.link && item.link !== item.github;

                  return (
                    <BentoCard
                      key={item.id}
                      tag={item.language || "CODE"}
                      onClick={() => setSelectedDrawerProject(item)}
                      className="cursor-pointer min-h-[160px]"
                      footerRight={
                        <div className="flex items-center gap-3 text-xs font-mono text-osmo-text-muted">
                          {typeof item.stars === "number" && item.stars > 0 && (
                            <span className="text-osmo-amber">★ {item.stars}</span>
                          )}
                          {hasLiveLink && (
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-osmo-lime flex items-center gap-1 text-osmo-text-secondary transition-colors"
                            >
                              LIVE <UpRightArrowIcon />
                            </Link>
                          )}
                          {item.github && (
                            <Link
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-osmo-lime flex items-center gap-1 text-osmo-text-secondary transition-colors"
                            >
                              <GithubIcon /> GIT
                            </Link>
                          )}
                          <span className="text-osmo-text-muted group-hover:text-osmo-lime transition-colors">
                            &rarr;
                          </span>
                        </div>
                      }
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-semibold text-base text-osmo-text-primary group-hover:text-osmo-lime transition-colors">
                            {item.name}
                          </div>
                          {item.language && (
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full border border-osmo-border bg-osmo-elevated text-osmo-text-secondary shrink-0">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  languageColors[item.language] || "bg-osmo-text-muted"
                                }`}
                              />
                              {item.language}
                            </span>
                          )}
                        </div>

                        <p className="mt-2.5 text-osmo-text-secondary text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </BentoCard>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
