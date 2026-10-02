"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import CommandPalette from "./CommandPalette";
import ProjectDrawer from "./ProjectDrawer";
import MatrixRain from "./MatrixRain";
import PizzaConfetti from "./PizzaConfetti";
import type { ExperienceItem } from "../types";
import LocationIcon from "./icons/LocationIcon";
import WorkIcon from "./icons/WorkIcon";
import UpRightArrowIcon from "./icons/UpRightArrowIcon";
import GithubIcon from "./icons/GithubIcon";

interface OsmoPortfolioProps {
  featuredProjects: ExperienceItem[];
  allProjects: ExperienceItem[];
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-[#38bdf8]",
  JavaScript: "bg-yellow-400",
  Python: "bg-[#cbfb45]",
  Ruby: "bg-rose-500",
  HTML: "bg-orange-500",
  Go: "bg-cyan-400",
  Rust: "bg-amber-500",
  PHP: "bg-indigo-400",
};

interface LogoPosition {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

export default function OsmoPortfolio({
  featuredProjects,
  allProjects,
}: OsmoPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<"featured" | "all">("featured");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedDrawerProject, setSelectedDrawerProject] = useState<ExperienceItem | null>(null);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showPizza, setShowPizza] = useState(false);

  // Secret footer animation state
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const logoPositionsRef = useRef<LogoPosition[]>([
    { x: 0.1, y: 0.1, dx: 1, dy: 1.5, size: 140 },
    { x: 0.3, y: 0.2, dx: -1.5, dy: 1.2, size: 140 },
    { x: 0.5, y: 0.3, dx: 1.2, dy: -1.8, size: 140 },
    { x: 0.2, y: 0.1, dx: 1.2, dy: -1.8, size: 140 },
    { x: 0.4, y: 0.3, dx: -1.8, dy: 1.2, size: 140 },
  ]);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const clickCountRef = useRef<number>(0);

  const handleLogoClick = () => {
    clickCountRef.current++;
    if (clickCountRef.current === 2) {
      setShowLogoAnimation(true);
      setTimeout(() => {
        setShowLogoAnimation(false);
        clickCountRef.current = 0;
      }, 5000);
    }
  };

  useEffect(() => {
    if (!showLogoAnimation) return;
    const animateLogos = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      logoPositionsRef.current.forEach((pos, i) => {
        const el = logoRefs.current[i];
        if (!el) return;
        pos.x += pos.dx * 0.005;
        pos.y += pos.dy * 0.005;
        if (pos.x < 0 || pos.x > 1 - pos.size / windowWidth) pos.dx = -pos.dx;
        if (pos.y < 0 || pos.y > 1 - pos.size / windowHeight) pos.dy = -pos.dy;
        el.style.transform = `translate3d(${pos.x * windowWidth}px, ${pos.y * windowHeight}px, 0)`;
      });
      animationFrameRef.current = requestAnimationFrame(animateLogos);
    };
    animationFrameRef.current = requestAnimationFrame(animateLogos);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [showLogoAnimation]);

  // Global shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const displayedProjects = activeFilter === "featured" ? featuredProjects : allProjects;
  const mid = Math.ceil(displayedProjects.length / 2);
  const col1 = displayedProjects.slice(0, mid);
  const col2 = displayedProjects.slice(mid);

  // Top flagship projects for radial fan and showcase
  const topProjects = featuredProjects.slice(0, 5);

  return (
    <div className="w-full bg-[#f3f3f1] text-[#09090b] font-sans selection:bg-[#cbfb45] selection:text-[#09090b] overflow-x-hidden min-h-screen flex flex-col justify-between">
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

      <div>
        {/* 1. TOP TICKER MARQUEE */}
        <div className="w-full bg-[#09090b] text-[#cbfb45] text-[11px] font-mono tracking-widest uppercase py-2 overflow-hidden whitespace-nowrap border-b border-white/10 flex items-center">
          <div className="inline-flex animate-[marquee_28s_linear_infinite] gap-8 shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="font-bold text-[#cbfb45]">GIOVANNI BATTISTA PERNAZZA</span>
                <span className="text-white/80">SOFTWARE ENGINEER // ROME, IT</span>
                <span className="text-[#38bdf8]">✦</span>
                <span className="text-white/80">PYTHON &bull; TYPESCRIPT &bull; NEXT.JS</span>
                <span className="text-[#cbfb45]">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* 2. FLOATING TOP NAVIGATION */}
        <nav className="sticky top-4 z-40 max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between px-5 py-2.5 rounded-full bg-[#121215]/90 backdrop-blur-md border border-white/10 text-white shadow-2xl">
            {/* Left Brand Identity */}
            <div className="flex items-center gap-3">
              <Link href="/" className="font-bold tracking-tighter text-base flex items-center gap-2 group">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#cbfb45] group-hover:rotate-45 transition-transform duration-300" />
                <span>NANNI.PY</span>
              </Link>
              <span className="hidden sm:inline text-[10px] font-mono text-white/50 border-l border-white/10 pl-3">
                SWE &bull; ROME
              </span>
            </div>

            {/* Quick Links & Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCommandPaletteOpen(true)}
                type="button"
                className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[11px] font-mono text-white/70 hover:text-white transition-colors"
                title="Search projects (⌘K)"
              >
                <span>SEARCH</span>
                <kbd className="px-1.5 py-0.2 rounded bg-black/40 text-[9px] text-[#cbfb45] font-mono">⌘K</kbd>
              </button>

              <a
                href="https://github.com/nannipy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/70 hover:text-white uppercase transition-colors hidden md:inline"
              >
                GitHub
              </a>

              <MagneticButton
                as="a"
                href="https://cal.com/giovannipernazza/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs bg-[#cbfb45] text-[#09090b] border-transparent font-semibold hover:bg-white hover:text-black"
              >
                Book Call &rarr;
              </MagneticButton>
            </div>
          </div>
        </nav>

        {/* 3. HERO SECTION */}
        <section className="pt-14 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
          {/* Main Fluid Headline with Gradient Star */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[1.02] text-[#09090b] max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>Dev Toolkit</span>
            <span className="inline-flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-tr from-[#8b5cf6] via-[#38bdf8] to-[#cbfb45] select-none text-4xl sm:text-7xl">
              ✱
            </span>
            <span>Built to Flex</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-[#52525b] max-w-2xl mx-auto font-light leading-relaxed">
            Software engineer based in Rome. Crafting resilient distributed backends, real-time telemetry systems, and tactile web experiences.
          </p>

          {/* 3D Radial Cards Arc Featuring Giovanni's Real Projects */}
          <div className="relative w-full max-w-6xl mx-auto mt-12 mb-14 h-72 sm:h-96 flex items-center justify-center perspective-[1000px] overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Card 1: Sapienza Foiling Team */}
              <div
                onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "sapienza-foiling-team") || topProjects[0])}
                className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer -translate-x-56 sm:-translate-x-80 -rotate-12 translate-y-8 bg-[#09090b] group"
              >
                <Image
                  src="/SFT/SFT_homepage.png"
                  alt="Sapienza Foiling Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[9px] font-mono text-[#38bdf8] uppercase tracking-wider">SAILING // TELEMETRY</span>
                  <span className="text-xs font-bold truncate">Sapienza Foiling Team</span>
                </div>
              </div>

              {/* Card 2: Hiresight AI */}
              <div
                onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "hiresight") || topProjects[1])}
                className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer -translate-x-28 sm:-translate-x-40 -rotate-6 translate-y-2 bg-[#09090b] group"
              >
                <Image
                  src="/hiresight/home.png"
                  alt="Hiresight AI"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[9px] font-mono text-[#cbfb45] uppercase tracking-wider">AI SCREENING</span>
                  <span className="text-xs font-bold truncate">Hiresight</span>
                </div>
              </div>

              {/* Center Card 3: Live Engineering Stats & Telemetry */}
              <div
                onClick={() => setIsCommandPaletteOpen(true)}
                className="absolute w-48 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-black/15 transition-all duration-500 hover:scale-110 hover:z-40 cursor-pointer z-20 bg-[#121215] text-white group"
              >
                <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#18181c] to-[#0c0c0e]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/50">
                    <span>SYS_CORE</span>
                    <span className="text-[#cbfb45] font-mono">● LIVE</span>
                  </div>
                  <div className="my-auto space-y-1 text-left">
                    <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest">
                      GITHUB REPOSITORIES
                    </div>
                    <div className="text-3xl sm:text-5xl font-mono text-[#cbfb45] font-bold tracking-tight">
                      {allProjects.length > 0 ? allProjects.length : 18}+
                    </div>
                    <p className="text-xs text-white/60 font-mono pt-1">
                      Shipped &amp; Synchronized
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
                    <span>EXPLORE ⌘K</span>
                    <span className="text-[#cbfb45]">&rarr;</span>
                  </div>
                </div>
              </div>

              {/* Card 4: EC Construction Showcase */}
              <div
                onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "ec-website") || topProjects[2])}
                className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer translate-x-28 sm:translate-x-40 rotate-6 translate-y-2 bg-[#09090b] group"
              >
                <Image
                  src="/ec/hero1.png"
                  alt="EC Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[9px] font-mono text-[#38bdf8] uppercase tracking-wider">SHOWCASE // ARCH</span>
                  <span className="text-xs font-bold truncate">EC Website</span>
                </div>
              </div>

              {/* Card 5: OllaPy Local AI */}
              <div
                onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "ollapy") || topProjects[3])}
                className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer translate-x-56 sm:translate-x-80 rotate-12 translate-y-8 bg-[#09090b] group"
              >
                <Image
                  src="/ollapy/Home.png"
                  alt="OllaPy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[9px] font-mono text-[#cbfb45] uppercase tracking-wider">LOCAL LLM // UI</span>
                  <span className="text-xs font-bold truncate">OllaPy Desktop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Manifesto */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#18181b] max-w-3xl mx-auto leading-snug">
            I build software with high technical standards and craftsmanship. Balancing distributed backend architectures with kinetic, Swiss-inspired interface physics.
          </p>

          {/* Interactive Action Badges */}
          <div className="mt-10 flex flex-col items-center justify-center relative">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                onClick={() => setIsCommandPaletteOpen(true)}
                className="border-black/15 bg-[#09090b] text-white hover:bg-[#cbfb45] hover:text-[#09090b] font-mono text-xs px-6 py-3 shadow-xl"
              >
                <span>OPEN PROJECT VAULT</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-[#cbfb45] font-mono">⌘K</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href="https://cal.com/giovannipernazza/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-black/10 bg-white text-[#09090b] hover:border-black/30 font-mono text-xs px-6 py-3 shadow-sm"
              >
                <span>BOOK 30MIN INTRO &rarr;</span>
              </MagneticButton>
            </div>

            {/* Handwritten Annotation */}
            <div className="text-sm font-handwritten text-[#f97316] mt-3 flex items-center gap-1 -rotate-2">
              <span>&rarr; Click any card in the fan to inspect specs &amp; code!</span>
            </div>
          </div>
        </section>

        {/* 4. CREATOR & ATHLETIC DISCIPLINE DUAL PODS */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Pod: Giovanni Bio Blue Card (5 cols) */}
            <div className="md:col-span-5 bg-[#3b49df] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl">
              <div>
                <span className="font-handwritten text-2xl text-white/90 block -rotate-3">
                  About the engineer
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
                  Giovanni Battista
                </h2>
                <p className="text-xs font-mono text-white/70 uppercase tracking-widest mt-0.5">
                  Pernazza &bull; Rome, Italy
                </p>
              </div>

              {/* Identity & Bio */}
              <div className="my-6 space-y-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/20 bg-white/10 shadow-lg">
                  <Image
                    src="/logo-en2.png"
                    alt="Giovanni Battista Pernazza"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                  Specialized in writing scalable <strong>Python</strong> and <strong>TypeScript</strong> systems.
                  Passionate about autonomous data ingestion, microservices, and crafting interfaces that feel responsive down to the millisecond.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="https://github.com/nannipy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-white text-[#3b49df] font-mono text-xs font-medium hover:bg-[#cbfb45] hover:text-black transition-colors"
                >
                  GitHub @nannipy
                </a>
                <a
                  href="https://www.linkedin.com/in/giovannibpernazza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-white/15 text-white font-mono text-xs hover:bg-white/25 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Pod: Athletics, Rome Running, & Roots (7 cols) */}
            <div className="md:col-span-7 bg-[#0d0d10] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-white/5 relative overflow-hidden min-h-[460px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#cbfb45] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                    Athletics &amp; Heritage
                  </span>
                </div>
                <span className="text-xs font-mono text-white/40">41.9028° N, 12.4964° E</span>
              </div>

              {/* Nested Card: Agricola Pernazza / Running */}
              <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#98e244] text-[#09090b] shadow-xl flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider font-semibold">
                    <span className="px-2 py-0.5 rounded bg-black/10">FAMILY HERITAGE</span>
                    <span className="px-2 py-0.5 rounded bg-black text-[#cbfb45]">AGRICOLA PERNAZZA</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPizza(true)}
                    className="hover:scale-125 transition-transform"
                    title="Click for pizza easter egg!"
                  >
                    🍕
                  </button>
                </div>

                <div className="my-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Ancient Grains &amp; Extra Virgin Olive Oil
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-black/70 mt-1">
                    Umbrian Hills Heritage
                  </p>
                </div>

                <p className="text-xs text-black/80 leading-relaxed font-sans">
                  Patience, respect for soil, and craft: lessons from our family farm that directly inform how I build software that lasts.
                </p>
              </div>

              {/* Running Quote & Handwritten scribble */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs font-mono text-white/70 italic text-left">
                  &ldquo;A happy developer is a running developer.&rdquo;
                </p>
                <div className="font-handwritten text-lg text-[#cbfb45] -rotate-2">
                  Endurance powers good engineering!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "THE PLATFORM" / SELECTED WORKS SHOWCASE */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-[#09090b]">
              Selected Works
            </h2>
            <span className="font-handwritten text-xl text-[#ef4444] absolute -top-4 -right-16 rotate-12">
              ( The Vault )
            </span>
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#52525b] max-w-2xl mx-auto leading-relaxed font-light">
            A curated showcase of applications, sailing telemetry platforms, and developer tooling I have designed and built.
          </p>

          {/* 3 Featured Project Bento Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Card 1: Sapienza Foiling Team (Blue) */}
            <div
              onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "sapienza-foiling-team") || topProjects[0])}
              className="bg-[#3b49df] text-white rounded-3xl p-8 transform hover:scale-102 transition-transform duration-300 shadow-2xl flex flex-col justify-between min-h-[440px] cursor-pointer text-left"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                  SAILING &bull; FOILING
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">
                  Sapienza Foiling Team
                </h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Official platform and telemetry suite for university hydrofoil sailing team, including admin dashboard and mobile app.
                </p>
              </div>
              <div className="relative w-full h-40 rounded-xl overflow-hidden my-4 border border-white/20">
                <Image
                  src="/SFT/SFT_homepage.png"
                  alt="Sapienza Foiling Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/15">
                <span>TypeScript &bull; Next.js</span>
                <span className="text-[#cbfb45]">INSPECT &rarr;</span>
              </div>
            </div>

            {/* Card 2: Hiresight (Dark Matte with Star) */}
            <div
              onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "hiresight") || topProjects[1])}
              className="bg-[#09090b] text-white rounded-3xl p-8 transform hover:scale-102 transition-transform duration-300 shadow-2xl flex flex-col justify-between min-h-[440px] border border-white/10 cursor-pointer text-left z-10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                    AI INTELLIGENCE
                  </span>
                  <div className="text-xl text-[#cbfb45]">✱</div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">
                  Hiresight
                </h3>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Automated CV screening and candidate ranking engine using LLMs for deep semantic evaluation.
                </p>
              </div>
              <div className="relative w-full h-40 rounded-xl overflow-hidden my-4 bg-white/5 border border-white/10">
                <Image
                  src="/hiresight/home.png"
                  alt="Hiresight"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/10">
                <span>TypeScript &bull; LLM APIs</span>
                <span className="text-[#cbfb45]">INSPECT &rarr;</span>
              </div>
            </div>

            {/* Card 3: EC Architecture Showcase (Lime) */}
            <div
              onClick={() => setSelectedDrawerProject(featuredProjects.find((p) => p.id === "ec-website") || topProjects[2])}
              className="bg-[#a3e635] text-[#09090b] rounded-3xl p-8 transform hover:scale-102 transition-transform duration-300 shadow-2xl flex flex-col justify-between min-h-[440px] cursor-pointer text-left"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-black/60">
                  DESIGN // ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">
                  EC Website
                </h3>
                <p className="text-xs text-black/80 mt-2 leading-relaxed">
                  A high-performance construction and renovation showcase platform with dynamic layout transitions.
                </p>
              </div>
              <div className="relative w-full h-40 rounded-xl overflow-hidden my-4 border border-black/10">
                <Image
                  src="/ec/hero1.png"
                  alt="EC Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-black/10">
                <span>TypeScript &bull; Tailwind</span>
                <span className="text-black font-bold">INSPECT &rarr;</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ENGINEERING PRINCIPLES (EDITORIAL HAIRLINE TABLE) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Brand Emblem & Note */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg font-mono">
                  GP✱
                </div>
                <span className="font-handwritten text-xl text-[#f97316] rotate-3">
                  Why Collaborate?
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Manifesto & Hairline List */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#09090b] leading-tight">
                Software engineering with obsessive attention to latency, clean abstractions, and user delight.
              </h2>

              <div className="divide-y divide-black/10 border-t border-b border-black/10">
                <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5 font-semibold text-base text-[#09090b]">
                    Distributed Python Systems
                  </div>
                  <div className="sm:col-span-7 text-sm text-[#52525b] leading-relaxed">
                    Proven experience designing background workers, queue architectures, REST APIs, and database migrations with PostgreSQL and Redis.
                  </div>
                </div>

                <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5 font-semibold text-base text-[#09090b]">
                    Kinetic TypeScript Frontends
                  </div>
                  <div className="sm:col-span-7 text-sm text-[#52525b] leading-relaxed">
                    Fluid, tactile web interfaces with Next.js, React, Tailwind, and GSAP that never sacrifice performance for visual polish.
                  </div>
                </div>

                <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5 font-semibold text-base text-[#09090b]">
                    Athletic Discipline &amp; Rigor
                  </div>
                  <div className="sm:col-span-7 text-sm text-[#52525b] leading-relaxed">
                    Marathon endurance, methodical debugging, and clear documentation. I ship reliable solutions that teams love to maintain.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ALL REPOSITORIES STREAM WITH FILTER TABS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="inline-flex p-1 rounded-full bg-black/5 border border-black/10 w-fit">
              <button
                type="button"
                onClick={() => setActiveFilter("featured")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeFilter === "featured"
                    ? "bg-[#09090b] text-white font-bold shadow-sm"
                    : "text-[#52525b] hover:text-[#09090b]"
                }`}
              >
                CURATED ({featuredProjects.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeFilter === "all"
                    ? "bg-[#09090b] text-white font-bold shadow-sm"
                    : "text-[#52525b] hover:text-[#09090b]"
                }`}
              >
                ALL REPOSITORIES ({allProjects.length})
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#71717a]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84cc16] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#84cc16]"></span>
              </span>
              <span>LIVE GITHUB VAULT</span>
            </div>
          </div>

          {/* Two-column stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[col1, col2].map((column, colIdx) => (
              <div key={colIdx} className="space-y-6">
                {column.map((item) => {
                  const hasLiveLink = item.link && item.link !== item.github;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedDrawerProject(item)}
                      className="p-6 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between min-h-[160px] group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-semibold text-base text-[#09090b] group-hover:text-[#3b49df] transition-colors">
                            {item.name}
                          </div>
                          {item.language && (
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 text-[#52525b] shrink-0">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  languageColors[item.language] || "bg-neutral-400"
                                }`}
                              />
                              {item.language}
                            </span>
                          )}
                        </div>

                        <p className="mt-2.5 text-[#52525b] text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/5 text-xs font-mono text-[#71717a]">
                        <div>
                          {typeof item.stars === "number" && item.stars > 0 && (
                            <span className="text-[#f59e0b]">★ {item.stars}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          {hasLiveLink && (
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline flex items-center gap-1 text-[#09090b]"
                            >
                              live <UpRightArrowIcon />
                            </Link>
                          )}
                          {item.github && (
                            <Link
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:underline flex items-center gap-1 text-[#09090b]"
                            >
                              <GithubIcon /> git
                            </Link>
                          )}
                          <span className="text-[#09090b] group-hover:translate-x-1 transition-transform">
                            &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 8. GIANT NANNI FOOTER WORDMARK & EASTER EGG */}
      <footer className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Telemetry & Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-3 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-[#cbfb45]" />
                <span className="font-mono text-sm font-bold tracking-tight text-white">
                  NANNI.PY // SOFTWARE ENGINEER
                </span>
              </div>
              <p className="text-xs font-mono text-white/70 max-w-md leading-relaxed">
                Giovanni Battista Pernazza &mdash; Building scalable distributed backends and tactile web apps. Rome, Italy.
              </p>
              <div className="text-[10px] font-mono text-white/40">
                GEO: 41.9028° N, 12.4964° E &bull; STATUS: AVAILABLE FOR OPPORTUNITIES
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 md:text-right">
                ARTIFACT EMBLEM // [DBL-CLICK FOR LORE]
              </div>
              <button
                onClick={handleLogoClick}
                type="button"
                aria-label="Toggle secret animation"
                className="p-3 rounded-2xl border border-white/10 hover:border-[#cbfb45]/60 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 group w-fit"
              >
                <Image
                  src="/madeLogos.png"
                  alt="logo"
                  width={64}
                  height={64}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </div>
          </div>

          {/* Giant NANNI Wordmark */}
          <div className="pt-8 border-t border-white/10 select-none">
            <div className="text-center font-bold tracking-tighter leading-none text-white text-[20vw] sm:text-[22vw] overflow-hidden">
              NANNI
            </div>
          </div>

          {/* Bottom Copyright & Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/50 gap-4 border-t border-white/10">
            <div>&copy; {new Date().getFullYear()} GIOVANNI BATTISTA PERNAZZA &bull; ALL RIGHTS RESERVED</div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/nannipy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbfb45] transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/giovannibpernazza"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbfb45] transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:gb.pernazza@gmail.com"
                className="hover:text-[#cbfb45] transition-colors"
              >
                EMAIL
              </a>
              <a
                href="https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cbfb45] transition-colors"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        {/* Secret Floating Animation Overlay */}
        {showLogoAnimation && (
          <div
            ref={containerRef}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 overflow-hidden"
          >
            <div className="absolute top-8 left-8 font-mono text-xs text-[#cbfb45] tracking-widest uppercase">
              [SYS_EMBLEM_SEQUENCE_ACTIVE]
            </div>
            {logoPositionsRef.current.map((pos, i) => (
              <div
                key={i}
                ref={(el) => {
                  logoRefs.current[i] = el;
                }}
                className="absolute top-0 left-0 pointer-events-none"
                style={{
                  width: `${pos.size}px`,
                  height: `${pos.size}px`,
                  transform: `translate3d(${pos.x * 100}vw, ${pos.y * 100}vh, 0)`,
                }}
              >
                <Image src="/madeLogos.png" alt="logo" width={pos.size} height={pos.size} />
              </div>
            ))}
          </div>
        )}
      </footer>
    </div>
  );
}
