"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import type { ExperienceItem } from "../types";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ExperienceItem[];
  onSelectProject: (project: ExperienceItem) => void;
  onTriggerMatrix: () => void;
  onTriggerPizza: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: "Projects" | "Actions" | "Terminal" | "Links";
  subtitle?: string;
  shortcut?: string;
  onSelect: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  projects,
  onSelectProject,
  onTriggerMatrix,
  onTriggerPizza,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sudoMessage, setSudoMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setSudoMessage(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const commands = useMemo<CommandItem[]>(() => {
    const list: CommandItem[] = [
      {
        id: "theme-toggle",
        title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        category: "Actions",
        subtitle: "Toggle color theme",
        shortcut: "T",
        onSelect: () => {
          setTheme(theme === "dark" ? "light" : "dark");
          onClose();
        },
      },
      {
        id: "book-call",
        title: "Book a Strategy / Technical Call",
        category: "Actions",
        subtitle: "30-minute intro via cal.com",
        shortcut: "CAL",
        onSelect: () => {
          window.open("https://cal.com/giovannipernazza/30min", "_blank");
          onClose();
        },
      },
      {
        id: "send-email",
        title: "Send Email (gb.pernazza@gmail.com)",
        category: "Actions",
        subtitle: "Open default mail client",
        shortcut: "MAIL",
        onSelect: () => {
          window.location.href = "mailto:gb.pernazza@gmail.com";
          onClose();
        },
      },
      {
        id: "cv-view",
        title: "View Curriculum Vitae",
        category: "Links",
        subtitle: "Google Docs live document",
        shortcut: "CV",
        onSelect: () => {
          window.open(
            "https://docs.google.com/document/d/1vAQ1L3jJVlAHoDqd7wD-Hajjb4rq8G9MCdZC5TdDHrA/edit?tab=t.0",
            "_blank"
          );
          onClose();
        },
      },
      {
        id: "github-profile",
        title: "GitHub Profile (@nannipy)",
        category: "Links",
        subtitle: "Open GitHub profile in new tab",
        onSelect: () => {
          window.open("https://github.com/nannipy", "_blank");
          onClose();
        },
      },
      {
        id: "linkedin-profile",
        title: "LinkedIn Profile",
        category: "Links",
        subtitle: "Connect on LinkedIn",
        onSelect: () => {
          window.open("https://www.linkedin.com/in/giovannibpernazza", "_blank");
          onClose();
        },
      },
      {
        id: "cmd-matrix",
        title: "matrix",
        category: "Terminal",
        subtitle: "Enter the digital rain canvas",
        shortcut: "RAIN",
        onSelect: () => {
          onTriggerMatrix();
          onClose();
        },
      },
      {
        id: "cmd-pizza",
        title: "pizza",
        category: "Terminal",
        subtitle: "Celebrate with pizza confetti",
        shortcut: "🍕",
        onSelect: () => {
          onTriggerPizza();
          onClose();
        },
      },
      {
        id: "cmd-sudo",
        title: "sudo",
        category: "Terminal",
        subtitle: "Execute root command",
        onSelect: () => {
          setSudoMessage("user 'visitor' is not in the sudoers file. Incident reported to nannipy.");
        },
      },
    ];

    projects.forEach((p) => {
      list.push({
        id: `project-${p.id}`,
        title: p.name,
        category: "Projects",
        subtitle: `${p.language || "Code"} — ${p.description.slice(0, 60)}...`,
        onSelect: () => {
          onSelectProject(p);
          onClose();
        },
      });
    });

    return list;
  }, [projects, theme, setTheme, onClose, onSelectProject, onTriggerMatrix, onTriggerPizza]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase().trim();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.subtitle && c.subtitle.toLowerCase().includes(q)) ||
        c.category.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredCommands[selectedIndex];
      if (selected) {
        selected.onSelect();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -10 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-osmo-surface border border-osmo-border-bright rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
        >
          {/* Corner crosshairs */}
          <span className="absolute top-2 left-2 text-[9px] font-mono text-white/30 pointer-events-none select-none">
            +
          </span>
          <span className="absolute top-2 right-2 text-[9px] font-mono text-white/30 pointer-events-none select-none">
            +
          </span>

          {/* Header / Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-osmo-border gap-3">
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-osmo-elevated border border-osmo-border text-osmo-lime uppercase tracking-wider">
              CMD
            </span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search vault, actions, or 'matrix', 'pizza', 'sudo'..."
              className="w-full bg-transparent text-sm text-osmo-text-primary focus:outline-none placeholder-osmo-text-muted font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-[10px] font-mono uppercase text-osmo-text-muted hover:text-osmo-lime"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sudo error message notice if triggered */}
          {sudoMessage && (
            <div className="p-3 bg-red-500/10 border-b border-red-500/20 text-xs font-mono text-red-400 flex items-center justify-between">
              <span>{sudoMessage}</span>
              <button
                onClick={() => setSudoMessage(null)}
                className="hover:underline ml-2 text-red-300 font-mono text-[10px]"
              >
                DISMISS
              </button>
            </div>
          )}

          {/* List items */}
          <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.04]">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-xs font-mono text-osmo-text-muted uppercase tracking-wider">
                NO MATCHES FOUND IN VAULT.
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    type="button"
                    onClick={() => cmd.onSelect()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between text-sm ${
                      isSelected
                        ? "bg-osmo-elevated border border-osmo-lime/40 text-osmo-text-primary font-medium"
                        : "text-osmo-text-secondary hover:bg-osmo-elevated/50"
                    }`}
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span className={`truncate ${isSelected ? "text-osmo-lime" : ""}`}>{cmd.title}</span>
                        <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-osmo-subtle text-osmo-text-muted">
                          {cmd.category}
                        </span>
                      </div>
                      {cmd.subtitle && (
                        <span className="text-xs text-osmo-text-muted truncate mt-0.5 font-mono">
                          {cmd.subtitle}
                        </span>
                      )}
                    </div>
                    {cmd.shortcut && (
                      <span className="text-[10px] font-mono text-osmo-text-muted px-1.5 py-0.5 rounded border border-white/10 bg-osmo-subtle shrink-0">
                        {cmd.shortcut}
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="px-4 py-2.5 bg-osmo-canvas border-t border-osmo-border text-[10px] font-mono text-osmo-text-muted flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span>&uarr;&darr; NAVIGATE</span>
              <span>&crarr; SELECT</span>
              <span>ESC DISMISS</span>
            </div>
            <div className="text-[10px] text-osmo-text-muted">
              OSMO VAULT // v1.5
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
