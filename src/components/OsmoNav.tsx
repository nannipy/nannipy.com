'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

export default function OsmoNav() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Rome',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' CET'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent('toggle-command-palette'));
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }));
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-osmo-border bg-osmo-canvas/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity & Telemetry */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 group text-sm font-mono font-medium tracking-tight text-osmo-text-primary"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-osmo-lime group-hover:rotate-45 transition-transform duration-300" />
            <span className="tracking-tighter font-semibold">NANNI.PY</span>
            <span className="hidden sm:inline text-osmo-text-muted text-[11px] font-mono">
              // DEV_TOOLKIT
            </span>
          </Link>

          {/* System status indicator */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full border border-osmo-border bg-osmo-surface text-[10px] font-mono">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-osmo-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-osmo-lime"></span>
            </span>
            <span className="text-osmo-text-secondary tracking-widest">SYS_OK</span>
            <span className="text-osmo-text-muted">|</span>
            <span className="text-osmo-text-muted font-mono">{time || 'ROME, IT'}</span>
          </div>
        </div>

        {/* Center / Right: Technical Links & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search / Command Palette trigger */}
          <button
            onClick={handleOpenSearch}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-osmo-border hover:border-osmo-border-bright bg-osmo-surface hover:bg-osmo-elevated transition-colors text-xs font-mono text-osmo-text-muted hover:text-osmo-text-primary"
            title="Press ⌘K to open command palette"
          >
            <svg
              className="w-3.5 h-3.5 text-osmo-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="hidden sm:inline text-[11px]">VAULT SEARCH</span>
            <kbd className="px-1.5 py-0.5 rounded bg-osmo-subtle text-[10px] text-osmo-text-secondary border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* CTA Magnetic Button */}
          <MagneticButton
            as="a"
            href="https://cal.com/giovannipernazza/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border-osmo-lime/40 bg-osmo-lime/10 text-osmo-lime hover:bg-osmo-lime hover:text-osmo-canvas text-[11px] font-mono font-semibold"
          >
            <span>BOOK CALL</span>
            <span className="text-xs">&rarr;</span>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
