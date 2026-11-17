"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/portfolio";
import styles from "./PomodoroDemo.module.css";

export default function PomodoroDemo({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const [playing, setPlaying] = useState(false);
  return (
    <section className={styles.demo} aria-labelledby="pomodoro-demo-title">
      <div className={styles.copy}>
        <p className="eyebrow">{it ? "In funzione" : "In action"}</p>
        <h2 id="pomodoro-demo-title">{it ? "Lavoro. Pausa. Si ricomincia." : "Focus. Break. Repeat."}</h2>
        <p>{it
          ? "Il conto alla rovescia resta nella barra dei menu: un computer durante il lavoro, una tazza durante la pausa. Il passaggio tra le due fasi è automatico."
          : "The countdown stays in the menu bar: a computer during work, a cup during the break. It switches between the two phases automatically."}</p>
        <p className={styles.note}>{it
          ? "Registrazione dell’app su macOS. Per questa demo: un minuto di lavoro e uno di pausa, riprodotti a velocità accelerata."
          : "Recorded from the app on macOS. This demo uses one-minute work and break sessions, played at an accelerated speed."}</p>
      </div>
      <div>
        <figure className={styles.player}>
          <span className={styles.label}>Pomodoro Go / macOS</span>
          <Image src={playing ? "/work/pomodoro-demo.gif" : "/work/pomodoro-work.webp"}
            alt={it ? "Timer reale di Pomodoro Go: conto alla rovescia e passaggio dal lavoro alla pausa" : "Pomodoro Go's actual timer: countdown and transition from work to break"}
            width={170} height={60} unoptimized={playing} className={styles.timer} />
          <button type="button" className="text-link" aria-pressed={playing} onClick={() => setPlaying(!playing)}>
            {playing ? (it ? "Ferma la demo" : "Stop demo") : (it ? "Riproduci la demo" : "Play demo")}
            <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
          </button>
        </figure>
        <div className={styles.stills}>
          <figure>
            <Image src="/work/pomodoro-work.webp" alt={it ? "Fase di lavoro nella barra dei menu" : "Work phase in the menu bar"} width={170} height={60} />
            <figcaption>{it ? "01 / Lavoro" : "01 / Work"}</figcaption>
          </figure>
          <figure>
            <Image src="/work/pomodoro-break.webp" alt={it ? "Fase di pausa nella barra dei menu" : "Break phase in the menu bar"} width={170} height={60} />
            <figcaption>{it ? "02 / Pausa" : "02 / Break"}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
