import React from 'react';

interface BentoCardProps {
  title?: string;
  tag?: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  pulse?: boolean;
  statusText?: string;
  footerRight?: React.ReactNode;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  tag,
  children,
  className = '',
  href,
  onClick,
  pulse = false,
  statusText,
  footerRight,
}) => {
  const content = (
    <div
      onClick={onClick}
      className={`relative group p-6 md:p-8 bg-osmo-surface/80 backdrop-blur-md rounded-2xl border border-osmo-border hover:border-osmo-border-bright transition-all duration-500 overflow-hidden flex flex-col justify-between ${onClick || href ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Decorative Technical Crosshairs */}
      <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-white/30 select-none pointer-events-none group-hover:text-osmo-lime group-hover:opacity-100 transition-colors">
        +
      </span>
      <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-white/20 select-none pointer-events-none group-hover:text-white/40 transition-colors">
        +
      </span>
      <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-white/20 select-none pointer-events-none group-hover:text-white/40 transition-colors">
        +
      </span>
      <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-white/20 select-none pointer-events-none group-hover:text-white/40 transition-colors">
        +
      </span>

      {/* Header Info */}
      {(tag || statusText || pulse) && (
        <div className="flex items-center justify-between mb-4">
          {tag && (
            <span className="font-mono text-[10px] tracking-widest uppercase text-osmo-text-muted group-hover:text-osmo-text-secondary transition-colors">
              {tag}
            </span>
          )}
          <div className="flex items-center gap-2">
            {statusText && (
              <span className="font-mono text-[9px] tracking-wider text-osmo-text-muted uppercase">
                {statusText}
              </span>
            )}
            {pulse && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-osmo-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-osmo-lime"></span>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="flex-1 my-2">
        {children}
      </div>

      {/* Card Footer */}
      {(title || footerRight) && (
        <div className="pt-4 border-t border-osmo-border/60 flex items-center justify-between mt-4">
          {title && (
            <h3 className="text-base md:text-lg font-medium text-osmo-text-primary tracking-tight group-hover:text-white transition-colors">
              {title}
            </h3>
          )}
          {footerRight ? (
            footerRight
          ) : (
            <span className="text-xs font-mono text-osmo-text-muted group-hover:text-osmo-lime transition-colors">
              &rarr;
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

export default BentoCard;
