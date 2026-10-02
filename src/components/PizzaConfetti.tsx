"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PizzaConfettiProps {
  onClose: () => void;
}

interface PizzaSlice {
  id: number;
  x: number;
  delay: number;
  duration: number;
  scale: number;
  rotation: number;
}

export default function PizzaConfetti({ onClose }: PizzaConfettiProps) {
  const [slices, setSlices] = useState<PizzaSlice[]>([]);

  useEffect(() => {
    const generated: PizzaSlice[] = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 95,
      delay: Math.random() * 1.5,
      duration: 3 + Math.random() * 2,
      scale: 0.8 + Math.random() * 0.8,
      rotation: Math.random() * 360,
    }));
    setSlices(generated);

    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 pointer-events-auto bg-black/40 backdrop-blur-xs flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <AnimatePresence>
        {slices.map((slice) => (
          <motion.div
            key={slice.id}
            initial={{ y: -60, x: `${slice.x}vw`, rotate: 0, opacity: 1 }}
            animate={{
              y: "105vh",
              rotate: slice.rotation + 720,
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              duration: slice.duration,
              delay: slice.delay,
              ease: "linear",
            }}
            className="fixed text-4xl select-none"
            style={{ fontSize: `${2.2 * slice.scale}rem` }}
          >
            🍕
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative z-10 p-6 rounded-3xl bg-black/90 border border-white/20 text-white text-center shadow-2xl max-w-sm mx-4 space-y-3"
      >
        <div className="text-4xl">🍕✨🏃‍♂️</div>
        <h3 className="text-xl font-bold font-mono tracking-tight">
          Buon Appetito!
        </h3>
        <p className="text-sm text-neutral-300">
          "A happy developer is a running developer (and one who loves pizza!)."
        </p>
        <p className="text-xs font-mono text-neutral-500 pt-2">
          Click anywhere to dismiss
        </p>
      </motion.div>
    </div>
  );
}
