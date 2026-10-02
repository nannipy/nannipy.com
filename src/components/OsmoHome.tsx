"use client";

import React, { useState, useEffect } from "react";
import OsmoLandingView from "./OsmoLandingView";
import BentoGrid from "./BentoGrid";
import OsmoNav from "./OsmoNav";
import ThemeSwitcher from "./ThemeSwitcher";
import Footer from "./Footer";
import type { ExperienceItem } from "../types";

interface OsmoHomeProps {
  featuredProjects: ExperienceItem[];
  allProjects: ExperienceItem[];
}

export default function OsmoHome({
  featuredProjects,
  allProjects,
}: OsmoHomeProps) {
  const [viewMode, setViewMode] = useState<"osmo" | "portfolio">("osmo");

  // Allow switching via keyboard or url hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "#portfolio" || window.location.hash === "#vault") {
        setViewMode("portfolio");
      }
    }
  }, []);

  const handleExploreVault = () => {
    setViewMode("portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {/* View Mode Toggle Pill Floating at Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center p-1 rounded-full bg-[#121215]/90 backdrop-blur-md border border-white/15 text-white shadow-2xl">
        <button
          onClick={() => {
            setViewMode("osmo");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          type="button"
          className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
            viewMode === "osmo"
              ? "bg-[#cbfb45] text-[#09090b] font-bold shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          OSMO REPLICA
        </button>
        <button
          onClick={() => {
            setViewMode("portfolio");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          type="button"
          className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
            viewMode === "portfolio"
              ? "bg-[#cbfb45] text-[#09090b] font-bold shadow-sm"
              : "text-white/70 hover:text-white"
          }`}
        >
          DEV VAULT ⌘K
        </button>
      </div>

      {/* RENDER SELECTED VIEW */}
      {viewMode === "osmo" ? (
        <OsmoLandingView onExploreVault={handleExploreVault} />
      ) : (
        <div className="min-h-screen bg-osmo-canvas text-osmo-text-primary">
          <OsmoNav />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <BentoGrid
              featuredProjects={featuredProjects}
              allProjects={allProjects}
            />
          </main>
          <Footer />
          <div className="fixed bottom-6 right-6 z-40">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
