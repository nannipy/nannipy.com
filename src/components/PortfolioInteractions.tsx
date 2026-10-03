"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ComponentProps, type CSSProperties } from "react";
import type { Locale } from "@/lib/portfolio";
import type { GalleryMedia } from "@/lib/portfolio";

export function PageMotion({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  useEffect(() => {
    document.documentElement.classList.remove("route-leaving");
  }, [path]);
  return (
    <div className="page-motion" key={path}>
      {children}
    </div>
  );
}
export function TransitionLink(props: ComponentProps<typeof Link>) {
  const router = useRouter();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  return (
    <Link
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        if (
          event.defaultPrevented ||
          (props.target && props.target !== "_self") ||
          props.download ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        )
          return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        event.preventDefault();
        if (timer.current) clearTimeout(timer.current);
        document.documentElement.classList.add("route-leaving");
        timer.current = setTimeout(() => {
          router.push(String(props.href));
          setTimeout(
            () => document.documentElement.classList.remove("route-leaving"),
            1400,
          );
        }, 140);
      }}
    />
  );
}
export function PhotoJournal({ locale, items }: { locale: Locale; items: (GalleryMedia & { tag: string; color: string; ink: string })[] }) {
  const personalPhotos = items.filter((item) => !item.poster);
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = personalPhotos[selected];
  const move = (direction: number) =>
    setSelected(
      (value) =>
        (value + direction + personalPhotos.length) % personalPhotos.length,
    );
  return (
    <>
      <div
        className="photo-journal"
        tabIndex={0}
        aria-label={
          locale === "it"
            ? "Galleria foto: scorri o usa le frecce"
            : "Photo gallery: swipe or use arrow keys"
        }
      >
        {personalPhotos.map((item, index) => (
          <button
            key={item.src}
            className="journal-photo"
            style={{ "--journal-color": item.color, "--journal-ink": item.ink } as CSSProperties}
            onClick={() => {
              setSelected(index);
              dialog.current?.showModal();
            }}
            aria-label={
              locale === "it"
                ? `Apri foto: ${item.caption.it}`
                : `Open photo: ${item.caption.en}`
            }
          >
            <Image
              src={item.src}
              alt={item.caption[locale]}
              width={520}
              height={650}
              sizes="(max-width: 600px) 70vw, 28vw"
            />
            <span className="photo-caption">
              <span>{item.tag}</span>
              <span>↗</span>
            </span>
          </button>
        ))}
        {items
          .filter((item) => item.poster)
          .map((item) => (
            <figure
              className="journal-photo journal-video"
              key={item.src}
              style={{ "--video-ratio": item.width / item.height, "--journal-color": item.color, "--journal-ink": item.ink } as CSSProperties}
            >
              <video
                controls
                playsInline
                preload="none"
                poster={item.poster}
                width={item.width}
                height={item.height}
                aria-label={item.caption[locale]}
              >
                <source src={item.src} type="video/mp4" />
              </video>
              <figcaption className="photo-caption">
                {item.caption[locale]}
              </figcaption>
            </figure>
          ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
      >
        <button
          className="dialog-close"
          aria-label={locale === "it" ? "Chiudi foto" : "Close photo"}
          onClick={() => dialog.current?.close()}
        >
          ×
        </button>
        <Image
          src={photo.src}
          alt={photo.caption[locale]}
          width={1200}
          height={1500}
          sizes="90vw"
        />
        <div className="dialog-controls">
          <button
            aria-label={locale === "it" ? "Foto precedente" : "Previous photo"}
            onClick={() => move(-1)}
          >
            ←
          </button>
          <p>
            {photo.caption[locale]}
            {photo.credit ? (
              <small className="photo-credit">© {photo.credit}</small>
            ) : null}
          </p>
          <button
            aria-label={locale === "it" ? "Foto successiva" : "Next photo"}
            onClick={() => move(1)}
          >
            →
          </button>
        </div>
      </dialog>
    </>
  );
}

export function DocumentLanguage({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
