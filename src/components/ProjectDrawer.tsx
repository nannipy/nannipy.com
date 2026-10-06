"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import DOMPurify from "dompurify";
import { Octokit } from "octokit";
import { useSwipeable } from "react-swipeable";
import type { ExperienceItem } from "../types";
import GithubIcon from "./icons/GithubIcon";
import UpRightArrowIcon from "./icons/UpRightArrowIcon";
import "../styles/shiki.css";

interface ProjectDrawerProps {
  project: ExperienceItem | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const [readme, setReadme] = useState("");
  const [readmeLoading, setReadmeLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;

    setSelectedImageIndex(0);

    if (!project.github) {
      setReadme("");
      setReadmeLoading(false);
      return;
    }

    let isMounted = true;
    setReadmeLoading(true);

    const octokit = new Octokit();
    const parts = project.github.replace(/\.git$/, "").split("/");
    const owner = parts[parts.length - 2] || "nannipy";
    const repo = parts[parts.length - 1];

    octokit
      .request("GET /repos/{owner}/{repo}/readme", {
        owner,
        repo,
      })
      .then((response) => {
        if (!isMounted) return;
        const decodedContent = new TextDecoder().decode(
          Uint8Array.from(atob(response.data.content), (c) => c.charCodeAt(0))
        );
        const withImages = decodedContent
          .replace(
            /<img([^>]+)src=["'](?!https?:\/\/)([^"']+)["']/g,
            `<img$1src="https://raw.githubusercontent.com/${owner}/${repo}/HEAD/$2"`
          )
          .replace(
            /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
            `![$1](https://raw.githubusercontent.com/${owner}/${repo}/HEAD/$2)`
          );

        setReadme(DOMPurify.sanitize(withImages));
        setReadmeLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setReadme("");
        setReadmeLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [project]);

  const screenshots = project?.screenshots || [];

  const handlePrevImage = useCallback(() => {
    if (screenshots.length === 0) return;
    setSelectedImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, [screenshots.length]);

  const handleNextImage = useCallback(() => {
    if (screenshots.length === 0) return;
    setSelectedImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }, [screenshots.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, handlePrevImage, handleNextImage]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: false,
  });

  if (!project) return null;

  const hasLiveLink = project.link && project.link !== project.github;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Sliding Panel */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="w-screen max-w-2xl bg-osmo-surface border-l border-osmo-border shadow-2xl flex flex-col h-full overflow-hidden text-osmo-text-primary"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-osmo-border flex items-start justify-between gap-4 bg-osmo-canvas/50">
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight truncate text-osmo-text-primary">
                    {project.name}
                  </h2>
                  {project.language && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-osmo-border bg-osmo-elevated text-osmo-lime shrink-0">
                      {project.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-osmo-text-muted font-mono">
                  {typeof project.stars === "number" && project.stars > 0 && (
                    <span>★ {project.stars} stars</span>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="hover:text-osmo-lime flex items-center gap-1 text-osmo-text-secondary transition-colors"
                  >
                    FULL SPEC ↗︎
                  </Link>
                </div>
              </div>

              {/* Close Button & Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {hasLiveLink && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-osmo-border hover:border-osmo-lime/50 bg-osmo-elevated text-osmo-text-primary hover:text-osmo-lime transition-colors"
                    title="Live Demo"
                  >
                    <UpRightArrowIcon />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-osmo-border hover:border-osmo-lime/50 bg-osmo-elevated text-osmo-text-primary hover:text-osmo-lime transition-colors"
                    title="GitHub Repository"
                  >
                    <GithubIcon />
                  </Link>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close drawer"
                  className="p-2 rounded-xl border border-osmo-border hover:border-osmo-border-bright bg-osmo-elevated text-osmo-text-muted hover:text-osmo-text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Description */}
              <div className="p-4 rounded-2xl bg-osmo-elevated border border-osmo-border text-sm leading-relaxed text-osmo-text-secondary">
                {project.description}
              </div>

              {/* Screenshots Carousel */}
              {screenshots.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-osmo-text-muted">
                    <span>SCREENSHOTS // {selectedImageIndex + 1} OF {screenshots.length}</span>
                    {screenshots.length > 1 && (
                      <span className="hidden sm:inline">&larr; &rarr; TO CYCLE</span>
                    )}
                  </div>
                  <div
                    {...swipeHandlers}
                    className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-black border border-osmo-border"
                  >
                    <Image
                      src={screenshots[selectedImageIndex]}
                      alt={`${project.name} screenshot ${selectedImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-contain"
                      priority
                    />
                    {screenshots.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          aria-label="Previous screenshot"
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center font-bold text-lg border border-white/20"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          aria-label="Next screenshot"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center font-bold text-lg border border-white/20"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* README View */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono tracking-widest uppercase text-osmo-text-muted">
                  DOCUMENTATION // README.MD
                </div>
                <div className="p-5 rounded-2xl bg-osmo-elevated border border-osmo-border prose prose-invert prose-sm max-w-none markdown-body overflow-x-auto text-osmo-text-secondary">
                  {readmeLoading ? (
                    <div className="flex items-center gap-2 py-4 text-xs font-mono text-osmo-text-muted">
                      <span className="w-3 h-3 border-2 border-osmo-lime border-t-transparent rounded-full animate-spin" />
                      FETCHING README FROM REPO...
                    </div>
                  ) : (
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {readme}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-osmo-border bg-osmo-canvas/50 flex items-center justify-between text-[10px] font-mono text-osmo-text-muted">
              <span>ESC TO CLOSE</span>
              {project.pushedAt && (
                <span>
                  LAST COMMITTED: {new Date(project.pushedAt).toLocaleDateString()}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
