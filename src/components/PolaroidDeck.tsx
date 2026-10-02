"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PolaroidItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  location: string;
  date: string;
}

const polaroids: PolaroidItem[] = [
  {
    id: "running",
    title: "Rome morning miles & telemetry",
    tag: "ATHLETICS // DATA",
    image: "/foxrun/activities.png",
    location: "Rome, Italy",
    date: "06:30 AM",
  },
  {
    id: "sailing",
    title: "Sapienza Foiling Team telemetry",
    tag: "AERO // TELEMETRY",
    image: "/SFT/SFT_team.png",
    location: "Sardinia / Rome",
    date: "Regatta Season",
  },
  {
    id: "farm",
    title: "Agricola Pernazza — Heritage Grains & Oil",
    tag: "HERITAGE // ROOTS",
    image: "/ap/logo.jpg",
    location: "Umbrian Hills",
    date: "Harvest Season",
  },
];

export default function PolaroidDeck() {
  const [deck, setDeck] = useState(polaroids);

  const cycleCard = () => {
    setDeck((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-osmo-surface/60">
      {/* Decorative Technical Crosshairs */}
      <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-white/30 select-none pointer-events-none">
        +
      </span>
      <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-white/20 select-none pointer-events-none">
        +
      </span>
      <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-white/20 select-none pointer-events-none">
        +
      </span>
      <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-white/20 select-none pointer-events-none">
        +
      </span>

      {/* Top Header */}
      <div className="flex items-center justify-between z-10 mb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-osmo-lime/80 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-osmo-text-muted">
            FIELD LOG // LORE
          </span>
        </div>
        <button
          onClick={cycleCard}
          className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-osmo-border hover:border-osmo-lime/50 bg-osmo-elevated text-osmo-text-secondary hover:text-osmo-lime transition-colors"
        >
          CYCLE ↻
        </button>
      </div>

      {/* Polaroid Deck Stack */}
      <div className="relative w-full h-64 sm:h-72 my-2 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {deck.map((item, index) => {
            const isTop = index === 0;
            const rotation = index === 0 ? -2 : index === 1 ? 3 : -4;
            const translateY = index * 6;
            const scale = 1 - index * 0.05;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{
                  scale,
                  y: translateY,
                  rotate: rotation,
                  opacity: 1,
                  zIndex: deck.length - index,
                }}
                exit={{ scale: 0.8, x: 200, opacity: 0, rotate: 15 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={cycleCard}
                className="absolute w-60 sm:w-68 bg-[#18181c] text-osmo-text-primary p-3 pb-4 rounded-xl shadow-2xl border border-white/10 hover:border-osmo-lime/50 cursor-pointer select-none transition-colors"
                style={{
                  transformOrigin: "center center",
                }}
              >
                {/* Photo frame */}
                <div className="relative w-full h-40 sm:h-44 bg-osmo-canvas rounded-lg overflow-hidden border border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="280px"
                    className="object-cover"
                    priority={isTop}
                  />
                  <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm text-osmo-lime text-[9px] font-mono px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* Polaroid Caption bottom */}
                <div className="mt-3 text-left">
                  <p className="font-mono text-xs font-semibold tracking-tight text-osmo-text-primary line-clamp-1">
                    {item.title}
                  </p>
                  <div className="flex justify-between items-center text-[10px] text-osmo-text-muted font-mono mt-1">
                    <span>{item.location}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Hint */}
      <div className="text-center z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-osmo-text-muted">
          CLICK CARD TO CYCLE &bull; [INTERACTIVE]
        </span>
      </div>
    </div>
  );
}
