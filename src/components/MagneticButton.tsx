'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

interface Props {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<Props> = ({
  children,
  strength = 0.35,
  className = '',
  onClick,
  as = 'button',
  href,
  target,
  rel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = buttonRef.current;
    const text = textRef.current;
    if (!el || !text) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(el, {
      x: x * strength,
      y: y * strength,
      duration: 0.7,
      ease: 'power3.out',
    });

    gsap.to(text, {
      x: x * (strength * 0.5),
      y: y * (strength * 0.5),
      duration: 0.7,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current || !textRef.current) return;

    gsap.to([buttonRef.current, textRef.current], {
      x: 0,
      y: 0,
      duration: 1,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  const defaultClasses = `relative inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/10 bg-osmo-surface text-osmo-text-primary text-xs font-mono tracking-wider uppercase transition-colors duration-300 hover:border-osmo-lime/60 hover:bg-osmo-elevated hover:text-osmo-lime active:scale-95 group ${className}`;

  if (as === 'a' && href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={defaultClasses}
      >
        <span ref={textRef} className="relative z-10 flex items-center gap-2 pointer-events-none">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      type="button"
      className={defaultClasses}
    >
      <span ref={textRef} className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;
