"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

interface OsmoLandingViewProps {
  onExploreVault?: () => void;
}

export default function OsmoLandingView({ onExploreVault }: OsmoLandingViewProps) {
  const [billingCycle, setBillingCycle] = useState<"quarterly" | "annually">("annually");
  const [activeCategory, setActiveCategory] = useState<string>("The Vault");

  const categories = [
    "The Vault",
    "Page Transition Course",
    "Buttons",
    "Easings",
    "Icons",
    "Community",
  ];

  return (
    <div className="w-full bg-[#f3f3f1] text-[#09090b] font-sans selection:bg-[#cbfb45] selection:text-[#09090b] overflow-x-hidden">
      {/* 1. TOP TICKER MARQUEE */}
      <div className="w-full bg-[#09090b] text-[#cbfb45] text-[11px] font-mono tracking-widest uppercase py-2 overflow-hidden whitespace-nowrap border-b border-white/10 flex items-center">
        <div className="inline-flex animate-[marquee_24s_linear_infinite] gap-8 shrink-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="font-bold text-[#cbfb45]">NEW</span>
              <span className="text-white/80">TRY 20 RESOURCES FOR FREE</span>
              <span className="text-[#cbfb45]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. FLOATING TOP NAVIGATION */}
      <nav className="sticky top-4 z-40 max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between px-5 py-2.5 rounded-full bg-[#121215]/90 backdrop-blur-md border border-white/10 text-white shadow-2xl">
          {/* Menu Hamburger */}
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white transition-colors"
          >
            <span className="space-y-1">
              <span className="block w-4 h-0.5 bg-white" />
              <span className="block w-4 h-0.5 bg-white" />
            </span>
            <span className="hidden sm:inline text-[11px]">Menu</span>
          </button>

          {/* Center Logo */}
          <Link href="/" className="font-bold tracking-tighter text-lg flex items-center gap-1">
            <span>OSMO</span>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onExploreVault}
              type="button"
              className="text-xs font-mono text-white/80 hover:text-white uppercase transition-colors"
            >
              Vault
            </button>
            <MagneticButton
              onClick={onExploreVault}
              className="px-4 py-1.5 text-xs bg-[#cbfb45] text-[#09090b] border-transparent font-semibold hover:bg-white hover:text-black"
            >
              Join
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        {/* Main Headline with Gradient Star */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[1.02] text-[#09090b] max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span>Dev Toolkit</span>
          <span className="inline-flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-tr from-[#8b5cf6] via-[#38bdf8] to-[#cbfb45] select-none text-4xl sm:text-7xl">
            ✱
          </span>
          <span>Built to Flex</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-[#52525b] max-w-2xl mx-auto font-light leading-relaxed">
          Platform packed with Webflow &amp; HTML resources, icons, easings and a page transition course.
        </p>

        {/* 3D Radial Cards Arc */}
        <div className="relative w-full max-w-5xl mx-auto mt-14 mb-16 h-72 sm:h-96 flex items-center justify-center perspective-[1000px] overflow-hidden">
          {/* Arc cards container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Card 1 */}
            <div
              className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-transform duration-500 hover:scale-105 hover:z-20 cursor-pointer -translate-x-56 sm:-translate-x-80 -rotate-12 translate-y-8 bg-[#121215]"
            >
              <Image
                src="/osmo/animated-grid-overlay-columns-1440x900_o_Rn.avif"
                alt="Animated Grid"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white text-xs font-mono">
                The Grid
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-transform duration-500 hover:scale-105 hover:z-20 cursor-pointer -translate-x-28 sm:-translate-x-40 -rotate-6 translate-y-2 bg-[#121215]"
            >
              <Image
                src="/osmo/3d-cards-tornado-1440x900-v4_o_Rn.avif"
                alt="Product Hotspot"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white text-xs font-mono">
                Product Hotspot Modal
              </div>
            </div>

            {/* Center Card 3 */}
            <div
              className="absolute w-48 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-transform duration-500 hover:scale-105 hover:z-30 cursor-pointer z-10 bg-white"
            >
              <div className="w-full h-full p-6 flex flex-col justify-between bg-[#121215] text-white">
                <div className="text-[10px] font-mono text-white/50">1.00</div>
                <div className="text-3xl sm:text-4xl font-mono text-[#cbfb45] font-bold tracking-tight">
                  €05,215
                </div>
                <div className="text-xs font-mono text-white/70">Number Odometer</div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-transform duration-500 hover:scale-105 hover:z-20 cursor-pointer translate-x-28 sm:translate-x-40 rotate-6 translate-y-2 bg-[#121215]"
            >
              <Image
                src="/osmo/collage-focus-card-on-hover-1440x900_o_Rn.avif"
                alt="Step Timeline"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white text-xs font-mono">
                Step-by-step Timeline
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="absolute w-44 sm:w-56 h-60 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transition-transform duration-500 hover:scale-105 hover:z-20 cursor-pointer translate-x-56 sm:translate-x-80 rotate-12 translate-y-8 bg-[#121215]"
            >
              <Image
                src="/osmo/animated-grid-overlay-columns-1440x900_o_Rn.avif"
                alt="Grid Columns"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white text-xs font-mono">
                The Grid Overlay
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Narrative */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#18181b] max-w-3xl mx-auto leading-snug">
          Osmo is an ever-growing platform with Webflow &amp; HTML resources. Get exclusive access to the techniques, components, code and tools behind award-winning work.
        </p>

        {/* Play Reel Badge & Scribble */}
        <div className="mt-12 flex flex-col items-center justify-center relative">
          <div className="flex items-center gap-6">
            <span className="text-3xl sm:text-4xl font-light tracking-tight text-[#71717a]">Play</span>
            <div className="relative group cursor-pointer w-32 h-20 rounded-xl overflow-hidden shadow-xl border border-black/10 bg-[#121215] flex items-center justify-center">
              <span className="text-xs font-mono text-[#cbfb45]">00:48</span>
              <span className="absolute inset-0 bg-[#cbfb45]/10 group-hover:bg-[#cbfb45]/20 transition-colors" />
            </div>
            <span className="text-3xl sm:text-4xl font-light tracking-tight text-[#71717a]">Reel</span>
          </div>
          {/* Handwritten Annotation */}
          <div className="text-sm font-handwritten text-[#f97316] mt-2 flex items-center gap-1 -rotate-2">
            <span>&rarr; (See what it can do!)</span>
          </div>
        </div>

        {/* Social proof avatars */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <Image
              src="/osmo/benjamin-nespoulous-128x128_o_Rn.avif"
              alt="Member"
              width={28}
              height={28}
              className="rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/osmo/cassie-evans-270x270_o_Rn.avif"
              alt="Member"
              width={28}
              height={28}
              className="rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/osmo/dang-nguyen-270x270_o_Rn.avif"
              alt="Member"
              width={28}
              height={28}
              className="rounded-full border-2 border-white object-cover"
            />
          </div>
          <span className="text-xs font-mono text-[#71717a]">Join 3K+ others</span>
        </div>
      </section>

      {/* 4. CREATOR & LATEST UPDATES PODS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Pod: Dennis Snellenberg Blue Card (5 cols) */}
          <div className="md:col-span-5 bg-[#3b49df] text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl">
            <div>
              <span className="font-handwritten text-xl text-white/80 block -rotate-3">
                Created by
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-1">
                Dennis
              </h2>
              <p className="text-xs font-mono text-white/70 uppercase tracking-widest mt-0.5">
                Snellenberg
              </p>
            </div>

            {/* Dennis Cutout Photo */}
            <div className="relative w-full h-64 sm:h-72 my-2">
              <Image
                src="/osmo/dennis-cutout-new_o_Rn.avif"
                alt="Dennis Snellenberg"
                fill
                className="object-contain object-bottom"
              />
            </div>

            <div>
              <button
                type="button"
                className="px-5 py-2 rounded-full bg-white text-[#3b49df] font-medium text-xs hover:bg-[#cbfb45] hover:text-black transition-colors"
              >
                About us
              </button>
            </div>
          </div>

          {/* Right Pod: Latest Updates Egg / Pod (7 cols) */}
          <div className="md:col-span-7 bg-[#0d0d10] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-white/5 relative overflow-hidden min-h-[460px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#cbfb45] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                  Latest updates from Osmo
                </span>
              </div>
            </div>

            {/* Neon Green Nested Card */}
            <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#98e244] text-[#09090b] shadow-xl flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider font-semibold">
                  <span className="px-2 py-0.5 rounded bg-black/10">2 DAYS AGO</span>
                  <span className="px-2 py-0.5 rounded bg-black text-[#cbfb45]">NEW RESOURCE</span>
                </div>
                <span className="text-xs font-mono">1.00</span>
              </div>

              <div className="my-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Rive Setup
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-black/70 mt-1">
                  UTILITIES &amp; SCRIPTS
                </p>
              </div>

              <div className="relative w-full h-28 rounded-lg overflow-hidden bg-black/10">
                <Image
                  src="/osmo/collage-focus-card-on-hover-1440x900_o_Rn.avif"
                  alt="Rive preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Handwritten scribble */}
            <div className="font-handwritten text-lg text-[#cbfb45] text-center -rotate-2">
              New stuff is added every week!
            </div>
          </div>
        </div>
      </section>

      {/* 5. "THE PLATFORM" SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="relative inline-block">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tighter text-[#09090b]">
            The platform
          </h2>
          <span className="font-handwritten text-xl text-[#ef4444] absolute -top-4 -right-16 rotate-12">
            ( The Vault )
          </span>
        </div>

        <p className="mt-6 text-base sm:text-lg text-[#52525b] max-w-2xl mx-auto leading-relaxed font-light">
          Built by two award-winning creative developers, our vault gives you access to the techniques, components, code and tools behind our projects. Build, tweak, and make them your own.
        </p>

        {/* Big Vault Dashboard Screenshot */}
        <div className="mt-14 relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#0c0c0f]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/osmo/dashboard-overview-2880x1800_o_Rn.jpg"
              alt="Osmo Vault Platform Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-10 max-w-md mx-auto space-y-4">
          <p className="text-sm text-[#71717a]">
            We built Osmo to help creative developers work smarter, faster, and better.
          </p>
          <MagneticButton
            onClick={onExploreVault}
            className="bg-[#6366f1] text-white hover:bg-[#4f46e5] border-transparent font-medium"
          >
            About the Vault
          </MagneticButton>
        </div>
      </section>

      {/* 6. "A GROWING TOOLKIT FOR CREATIVE DEVELOPERS" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-[#09090b]">
          A growing toolkit for creative developers
        </h2>
        <p className="mt-4 text-sm font-mono text-[#71717a] uppercase tracking-wider">
          Access everything with a single membership:
        </p>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-[#09090b] text-white font-semibold"
                  : "bg-black/5 text-[#52525b] hover:bg-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3 Perspective Tilted Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Tilted Card: Blue Community */}
          <div className="bg-[#3b49df] text-white rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl flex flex-col justify-between min-h-[440px]">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                MEMBERSHIP
              </span>
              <h3 className="text-3xl font-bold tracking-tight mt-2">
                Community
              </h3>
              <p className="text-xs text-white/80 mt-2 leading-relaxed">
                Connect with people who love great websites as much as you do.
              </p>
            </div>
            <div className="flex justify-center -space-x-2 my-6">
              <Image
                src="/osmo/by-huy-270x270_o_Rn.avif"
                alt="Member"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/osmo/cassie-evans-270x270_o_Rn.avif"
                alt="Member"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/osmo/jesper-landberg-270x270_o_Rn.avif"
                alt="Member"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
            </div>
            <button className="px-5 py-2 rounded-full bg-white text-[#3b49df] text-xs font-medium hover:bg-[#cbfb45] hover:text-black transition-colors w-fit mx-auto">
              Discover
            </button>
          </div>

          {/* Center Card: Dark The Vault */}
          <div className="bg-[#09090b] text-white rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500 shadow-2xl flex flex-col justify-between min-h-[440px] border border-white/10 z-10">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                PART OF THE MEMBERSHIP
              </span>
              <div className="text-3xl text-[#cbfb45]">✱</div>
              <h3 className="text-3xl font-bold tracking-tight">
                The Vault
              </h3>
              <p className="text-xs text-white/70 leading-relaxed max-w-xs mx-auto">
                Our ever-growing dashboard packed with ready-to-go components.
              </p>
            </div>
            <div className="relative w-full h-36 rounded-xl overflow-hidden my-4 bg-white/5 border border-white/10">
              <Image
                src="/osmo/3d-cards-tornado-1440x900-v4_o_Rn.avif"
                alt="Vault preview"
                fill
                className="object-cover"
              />
            </div>
            <button
              onClick={onExploreVault}
              className="px-5 py-2 rounded-full bg-white text-[#09090b] text-xs font-medium hover:bg-[#cbfb45] transition-colors w-fit mx-auto"
            >
              Discover
            </button>
          </div>

          {/* Right Tilted Card: Neon Lime Page Transition Course */}
          <div className="bg-[#a3e635] text-[#09090b] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl flex flex-col justify-between min-h-[440px]">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/60">
                PART OF THE MEMBERSHIP
              </span>
              <h3 className="text-3xl font-bold tracking-tight mt-2">
                Page Transition Course
              </h3>
              <p className="text-xs text-black/80 mt-2 leading-relaxed">
                Learn how to create page transitions that take your websites to the next level.
              </p>
            </div>
            <div className="relative w-full h-32 rounded-xl overflow-hidden my-4 bg-black/10">
              <Image
                src="/osmo/collage-focus-card-on-hover-1440x900_o_Rn.avif"
                alt="Course preview"
                fill
                className="object-cover"
              />
            </div>
            <button className="px-5 py-2 rounded-full bg-[#09090b] text-white text-xs font-medium hover:bg-white hover:text-black transition-colors w-fit mx-auto">
              Discover
            </button>
          </div>
        </div>
      </section>

      {/* 7. "LEVEL UP YOUR GAME" EDITORIAL & LOGO ROW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Brand Emblem & Note */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg font-mono">
                OS✱
              </div>
              <span className="font-handwritten text-xl text-[#f97316] rotate-3">
                Why Osmo?
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto & Hairline List */}
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#09090b] leading-tight">
              Level up your game and join a community of creatives who love building great websites as much as you do.
            </h2>

            <div className="divide-y divide-black/10 border-t border-b border-black/10">
              <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 font-semibold text-base text-[#09090b]">
                  Build faster and better
                </div>
                <div className="sm:col-span-7 text-sm text-[#52525b] leading-relaxed">
                  Our resources save you hours of rebuilding from scratch. Each one is made for real-world projects, so you can focus on shipping work that stands out.
                </div>
              </div>
              <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 font-semibold text-base text-[#09090b]">
                  Speed up your process
                </div>
                <div className="sm:col-span-7 text-sm text-[#52525b] leading-relaxed">
                  These aren&apos;t stripped-down templates. Every resource is built to be fast, flexible, and production-ready, so you can ship beautiful work without trading quality for time.
                </div>
              </div>
              <div className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 font-semibold text-base text-[#09090b]">
                  A living and growing system
                </div>
                <div className="sm:col-span-7 text-sm text-[#52525b] leading-relaxed">
                  We keep adding new resources, ideas, and techniques every week. The Vault evolves with you and your needs, so your toolkit never stops expanding.
                </div>
              </div>
            </div>

            {/* Trusted by Industry Giants Logo Row */}
            <div className="pt-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] mb-6">
                TRUSTED BY INDUSTRY GIANTS
              </div>
              <div className="flex flex-wrap items-center justify-between gap-8 text-[#71717a] font-bold text-lg">
                <span>superpower</span>
                <span>tonik</span>
                <span>Webflow</span>
                <span>HELLO MONDAY / DEPT.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WORLDWIDE NETWORK & TESTIMONIAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Circular Map Pod (4 cols) */}
          <div className="md:col-span-4 bg-[#09090b] text-white rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-2xl relative min-h-[380px]">
            <div className="text-xs font-mono uppercase tracking-widest text-white/50">
              Connect Worldwide
            </div>
            <div className="relative w-48 h-48 my-4">
              <Image
                src="/osmo/about-map_o_Rn.svg"
                alt="Osmo Global Map"
                fill
                className="object-contain"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#cbfb45] animate-ping" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#cbfb45]" />
            </div>
            <div className="font-handwritten text-lg text-[#cbfb45]">
              Osmo&apos;s Global Community
            </div>
          </div>

          {/* Testimonial Purple Card (8 cols) */}
          <div className="md:col-span-8 bg-[#6366f1] text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-snug">
              &ldquo;Osmo empowered me to take on any creative challenge.&rdquo;
            </h3>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/40 shrink-0">
                <Image
                  src="/osmo/dang-nguyen-270x270_o_Rn.avif"
                  alt="Dang Nguyen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Dang Nguyen</div>
                <div className="text-white/70 font-mono text-[11px]">HEAD OF CREATIVE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. EVERYTHING YOU NEED IN ONE MEMBERSHIP (PRICING) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-white">
            Everything you need in one membership
          </h2>

          {/* Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono relative">
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-4 py-1.5 rounded-full transition-all ${
                billingCycle === "quarterly" ? "bg-white text-black font-semibold" : "text-white/70"
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                billingCycle === "annually" ? "bg-white text-black font-semibold" : "text-white/70"
              }`}
            >
              <span>Annually</span>
              <span className="font-handwritten text-[#cbfb45] text-sm font-bold">
                Save 20%
              </span>
            </button>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-6">
            {/* Solo Card (Purple) */}
            <div className="bg-[#4338ca] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-white/10">
              <div className="space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                  1 USER
                </div>
                <h3 className="text-3xl font-bold">Solo</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold font-mono">€20</span>
                  <span className="text-xs font-mono text-white/70">EUR / month, billed annually</span>
                </div>
                <button className="w-full py-3 rounded-full bg-[#09090b] text-white hover:bg-[#cbfb45] hover:text-black font-semibold text-xs transition-colors mt-4">
                  Become a member
                </button>
              </div>
              <div className="pt-8 mt-8 border-t border-white/10 text-xs font-mono text-white/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#cbfb45]">215</span>
                  <span>Vault Resources, added weekly</span>
                </div>
                <div className="underline text-white/60 hover:text-white cursor-pointer">
                  View all benefits
                </div>
              </div>
            </div>

            {/* Team Card (Light White) */}
            <div className="bg-[#f4f4f5] text-[#09090b] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#71717a]">
                  <span>MIN 2 USERS</span>
                  <span className="font-handwritten text-[#f97316] text-sm">Save an extra 20%!</span>
                </div>
                <h3 className="text-3xl font-bold">Team</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold font-mono">€16</span>
                  <span className="text-xs font-mono text-[#71717a]">EUR / person/month, billed annually</span>
                </div>
                <button className="w-full py-3 rounded-full bg-[#6366f1] text-white hover:bg-[#4f46e5] font-semibold text-xs transition-colors mt-4">
                  Sign up your team
                </button>
              </div>
              <div className="pt-8 mt-8 border-t border-black/10 text-xs font-mono text-[#52525b] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-black">215</span>
                  <span>Vault Resources, added weekly</span>
                </div>
                <div className="underline text-[#71717a] hover:text-black cursor-pointer">
                  View all benefits
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. "MADE WITH OSMO" SHOWCASE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-white text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight">Made</h2>
            <span className="text-3xl sm:text-4xl font-light text-white/50">with</span>
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight">Osmo</h2>
          </div>
          <div className="font-handwritten text-xl text-[#cbfb45] -rotate-2">
            These folks are talented
          </div>

          {/* Interactive Showcase Card Preview */}
          <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden bg-white text-black p-8 sm:p-12 shadow-2xl border-4 border-[#cbfb45] mt-12 text-left">
            <div className="text-2xl sm:text-4xl font-bold tracking-tight">
              Paul Kalkbrenner
            </div>
            <p className="text-xs text-neutral-500 font-mono mt-2">
              bespoke identity &amp; experience
            </p>
            <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-neutral-600">
              <span>24 RESOURCES USED</span>
              <span className="text-[#65a30d] font-bold">LIVE PRODUCTION ↗</span>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={onExploreVault}
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Explore showcase
            </button>
          </div>
        </div>
      </section>

      {/* 11. TRY THE OSMO DEMO VAULT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#09090b] text-white">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#141418] border border-white/10 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#cbfb45]">
              TRY FOR FREE
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Try the Osmo Demo Vault
            </h3>
            <p className="text-xs font-mono text-white/60">
              Want a taste before you buy?
            </p>
            <button
              onClick={onExploreVault}
              className="px-6 py-2.5 rounded-full bg-[#6366f1] text-white hover:bg-[#4f46e5] text-xs font-semibold transition-colors"
            >
              Unlock the demo
            </button>
            <div className="font-handwritten text-lg text-[#cbfb45]">
              Try 20 Resources for Free
            </div>
          </div>

          <div className="md:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <Image
              src="/osmo/demo-vault-dark-jul-2026-2400x1754_o_Rn.avif"
              alt="Demo Vault Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 12. GIANT OSMO FOOTER BRANDING */}
      <footer className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-[#f3f3f1] text-[#09090b] border-t border-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top Newsletter & Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16">
            <div className="md:col-span-5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#71717a]">
                Subscribe to the Osmo Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  className="px-4 py-2 rounded-xl bg-white border border-black/10 text-xs text-[#09090b] focus:outline-none w-full"
                />
                <button className="px-4 py-2 rounded-xl bg-[#09090b] text-white text-xs font-mono hover:bg-[#cbfb45] hover:text-black transition-colors shrink-0">
                  Get updates
                </button>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-3 gap-6 text-xs font-mono">
              <div className="space-y-2">
                <div className="text-[#71717a] uppercase">Product</div>
                <ul className="space-y-1 text-[#09090b]">
                  <li className="hover:underline cursor-pointer">The Vault</li>
                  <li className="hover:underline cursor-pointer">Page Transitions</li>
                  <li className="hover:underline cursor-pointer">Button Pack</li>
                  <li className="hover:underline cursor-pointer">Icon Library</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="text-[#71717a] uppercase">Community</div>
                <ul className="space-y-1 text-[#09090b]">
                  <li className="hover:underline cursor-pointer">Showcase</li>
                  <li className="hover:underline cursor-pointer">About Osmo</li>
                  <li className="hover:underline cursor-pointer">Updates</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="text-[#71717a] uppercase">Membership</div>
                <ul className="space-y-1 text-[#09090b]">
                  <li className="hover:underline cursor-pointer">Pricing</li>
                  <li className="hover:underline cursor-pointer">FAQs</li>
                  <li className="hover:underline cursor-pointer">Support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Giant OSMO Wordmark */}
          <div className="pt-6 border-t border-black/10 select-none">
            <div className="text-center font-bold tracking-tighter leading-none text-[#09090b] text-[18vw] sm:text-[20vw] overflow-hidden">
              OSMO
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#71717a] gap-2">
            <div>&copy; {new Date().getFullYear()} OSMO SUPPLY &bull; ALL RIGHTS RESERVED</div>
            <div className="flex gap-4">
              <span>LICENSING</span>
              <span>TERMS</span>
              <span>PRIVACY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
