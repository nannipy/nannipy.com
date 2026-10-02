'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const MaskedHeading: React.FC<{
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}> = ({
  children,
  className = '',
  as = 'h2',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.word-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: '115%', opacity: 0, rotate: 2 },
        {
          y: '0%',
          opacity: 1,
          rotate: 0,
          duration: 1.1,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          stagger: 0.035,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  const wordList = children.split(' ');
  const Tag = as;

  return (
    <Tag
      ref={containerRef}
      className={`font-medium tracking-tighter text-osmo-text-primary leading-[1.05] ${className}`}
    >
      {wordList.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] pb-[0.1em]">
          <span className="word-inner inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default MaskedHeading;
