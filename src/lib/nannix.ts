import type { Copy } from "./portfolio";

const c = (it: string, en: string): Copy => ({ it, en });
export type NannixSection = { id: string; title: Copy; paragraphs: Copy[] };
export type NannixArticle = {
  slug: string;
  title: Copy;
  description: Copy;
  category: "lab" | "ideas";
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  sections: NannixSection[];
  sources: { title: string; href: string }[];
};

export const nannixArticles: NannixArticle[] = [
  {
    slug: "setup",
    title: {
      it: "Riutilizzare un vecchio computer come server",
      en: "Reusing an old computer as a server",
    },
    category: "lab",
    description: {
      it: "Perché ho avviato il laboratorio e quali hardware e software ho scelto.",
      en: "Why I started the lab and the hardware and software I chose.",
    },
    image: "/work/homelab-0726.webp",
    imageWidth: 1600,
    imageHeight: 1200,
    sections: [
      {
        id: "perche",
        title: {
          it: "Tenere le applicazioni accese",
          en: "Keeping applications running",
        },
        paragraphs: [
          {
            "en": "I started the lab so my applications could keep running after I closed my main computer. That led me to explore where my data goes and how DNS, tracking and ad filtering work.",
            "it": "Ho avviato il laboratorio per far girare le applicazioni anche a computer principale chiuso. Da lì ho iniziato a esplorare dove finiscono i miei dati e come funzionano DNS, tracking e filtri pubblicitari."
          },
          {
            "en": "Nannix records what I use, why I chose it and what I still need to understand. Some choices have already changed as I’ve used the server.",
            "it": "In Nannix raccolgo cosa uso, perché l’ho scelto e cosa devo ancora capire. Alcune scelte sono già cambiate con l’uso del server."
          }
        ],
      },
      {
        id: "abbonamenti",
        title: {
          it: "Abbonamenti e costi del fai da te",
          en: "Subscriptions and the cost of doing it myself",
        },
        paragraphs: [
          {
            "en": "I dislike adding a monthly fee for every part of my digital life. I also want to understand what information a service collects about me, and decide whether that exchange makes sense.",
            "it": "Mi pesa aggiungere una quota mensile per ogni parte della mia vita digitale. Voglio anche capire quali informazioni un servizio raccolga su di me e decidere se lo scambio mi conviene."
          },
          {
            "en": "Managed services save work. Self-hosting shifts the cost to hardware, electricity, maintenance and my time. I’m willing to take on some of that work because I enjoy learning how the system runs.",
            "it": "I servizi gestiti fanno risparmiare lavoro. Il self-hosting sposta il costo su hardware, corrente, manutenzione e tempo. Sono disposto a occuparmene in parte perché mi piace imparare come funziona il sistema."
          }
        ],
      },
      {
        id: "imparare",
        title: {
          it: "Imparare dalle guide e dalle prove",
          en: "Learning from guides and use",
        },
        paragraphs: [
          {
            "en": "Morrolinux helped me get started with self-hosting, and Riccardo Palombo with Linux distributions. I often start with someone showing a tool they use, then read the documentation and try it myself.",
            "it": "Morrolinux mi ha aiutato a iniziare con il self-hosting e Riccardo Palombo con le distribuzioni Linux. Spesso parto da qualcuno che mostra uno strumento che usa, poi leggo la documentazione e lo provo."
          },
          {
            "en": "Following a guide gets a service running. Understanding the configuration takes more time. I keep references in the library so I can revisit the parts I rushed through.",
            "it": "Seguire una guida mi permette di avviare un servizio. Capirne la configurazione richiede più tempo. Conservo i riferimenti nella biblioteca per tornare sui passaggi affrontati troppo in fretta."
          }
        ],
      },
      {
        id: "hardware",
        title: {
          it: "L’hardware che avevo",
          en: "The hardware I had",
        },
        paragraphs: [
          {
            "en": "I reused an old computer that was sitting unused at home, so I could start without buying a server. It’s a 2016 MacBook Air with 256 GB of storage, which limits what I can host.",
            "it": "Ho riutilizzato un vecchio computer fermo a casa, così ho potuto iniziare senza comprare un server. È un MacBook Air del 2016 con 256 GB di spazio, che limita ciò che posso ospitare."
          },
          {
            "en": "It has no battery, so a power cut switches it off immediately. Backup power and shutdown handling are improvements I still need to plan.",
            "it": "Non ha batteria, quindi un blackout lo spegne subito. Un’alimentazione di riserva e la gestione dello spegnimento sono miglioramenti ancora da pianificare."
          }
        ],
      },
      {
        id: "linux",
        title: {
          it: "Linux Mint e Docker",
          en: "Linux Mint and Docker",
        },
        paragraphs: [
          {
            "en": "I chose Linux Mint because a graphical interface helped me get familiar with the machine. I now work mostly in the terminal. Docker is how I run and organise the services.",
            "it": "Ho scelto Linux Mint perché l’interfaccia grafica mi aiutava a conoscere la macchina. Ora lavoro quasi sempre dal terminale. Uso Docker per avviare e organizzare i servizi."
          },
          {
            "en": "I’d consider Ubuntu Server for a leaner setup, but haven’t migrated. A NAS or mini PC may make sense later. For now, I’m working within the limits of the machine I have.",
            "it": "Valuterei Ubuntu Server per una configurazione più essenziale, ma non ho ancora migrato. In futuro potrebbero servire un NAS o un mini PC. Per ora lavoro entro i limiti della macchina che ho."
          }
        ],
      },
    ],
    sources: [
      {
        title: "Linux Mint",
        href: "https://linuxmint.com/",
      },
      {
        title: "Ubuntu Server",
        href: "https://ubuntu.com/server",
      },
      {
        title: "Docker",
        href: "https://docs.docker.com/",
      },
    ],
  },
  {
    slug: "immich",
    title: {
      it: "La mia raccolta fotografica con Immich",
      en: "My photo library with Immich",
    },
    category: "lab",
    description: {
      it: "Uso Immich ogni giorno sull’iPhone. Qui raccolgo cosa funziona per me e cosa devo ancora sistemare.",
      en: "I use Immich daily on my iPhone. Here’s what works for me and what still needs attention.",
    },
    sections: [
      {
        id: "motivo",
        title: {
          it: "Perché sono partito dalle foto",
          en: "Why I started with photos",
        },
        paragraphs: [
          {
            "en": "Immich was the first service I installed. I wanted to depend less on Google Photos and choose where to store my library, while keeping an app I’d want to use.",
            "it": "Immich è stato il primo servizio che ho installato. Volevo dipendere meno da Google Foto e scegliere dove conservare la raccolta, mantenendo un’app che avessi voglia di usare."
          },
          {
            "en": "A folder of files wasn’t enough. I also wanted to browse, search and organise the photos without rebuilding the interface myself.",
            "it": "Una cartella di file non bastava. Volevo anche sfogliare, cercare e organizzare le foto senza costruire io l’interfaccia."
          }
        ],
      },
      {
        id: "iphone",
        title: {
          it: "L’uso quotidiano sull’iPhone",
          en: "Daily use on the iPhone",
        },
        paragraphs: [
          {
            "en": "I use Immich every day on my iPhone. Uploads work well in my setup, both at home and away. I can choose which albums to upload.",
            "it": "Uso Immich ogni giorno sull’iPhone. Nel mio setup i caricamenti funzionano bene, a casa e fuori. Posso scegliere gli album da caricare."
          },
          {
            "en": "Background uploads on iOS depend on the operating system, so I don’t expect each photo to reach the server immediately.",
            "it": "Su iOS il caricamento in background dipende dal sistema operativo, quindi non mi aspetto che ogni foto arrivi subito sul server."
          }
        ],
      },
      {
        id: "funzioni",
        title: {
          it: "Sfogliare e ritrovare le foto",
          en: "Browsing and finding photos",
        },
        paragraphs: [
          {
            "en": "The timeline, albums and search are what I use to find photos. Immich also provides features such as memories, face recognition, sharing and Live Photos on a machine I manage.",
            "it": "Uso timeline, album e ricerca per ritrovare le foto. Immich offre anche ricordi, riconoscimento dei volti, condivisione e Live Photos su una macchina che gestisco io."
          },
          {
            "en": "Everyday browsing is fast in my setup. Large videos can take longer, especially away from home, depending on the connection and the load on the server.",
            "it": "Nel mio setup la consultazione quotidiana è veloce. I video pesanti possono richiedere più tempo, soprattutto fuori casa, in base alla connessione e al carico del server."
          }
        ],
      },
      {
        id: "alternative",
        title: {
          it: "Perché questa scelta mi va bene",
          en: "Why this choice suits me",
        },
        paragraphs: [
          {
            "en": "Google Photos and iCloud save configuration and maintenance work. I prefer Immich because control over the library and learning to run it are worth that time to me. PhotoPrism is an alternative I’d like to explore; I haven’t compared it myself.",
            "it": "Google Foto e iCloud risparmiano lavoro di configurazione e manutenzione. Preferisco Immich perché il controllo sulla raccolta e imparare a gestirla valgono quel tempo per me. PhotoPrism è un’alternativa che vorrei esplorare; non l’ho confrontata personalmente."
          }
        ],
      },
      {
        id: "cura",
        title: {
          it: "Aggiornamenti e backup",
          en: "Updates and backups",
        },
        paragraphs: [
          {
            "en": "I update Immich manually after reading the documentation and release notes. I want to understand changes before applying them to the service holding my photos.",
            "it": "Aggiorno Immich manualmente dopo aver letto documentazione e note di rilascio. Voglio capire i cambiamenti prima di applicarli al servizio che conserva le mie foto."
          },
          {
            "en": "Phone uploads aren’t a server backup. I still need fuller protection for both the files and database, and a recovery plan if the machine fails. More storage and more complete backups are next steps.",
            "it": "Il caricamento dal telefono non è un backup del server. Devo ancora proteggere meglio file e database e pianificare il recupero in caso di guasto. Più spazio e backup più completi sono i prossimi passi."
          }
        ],
      },
    ],
    sources: [
      {
        title: "Immich · funzionalità / features",
        href: "https://immich.app/features",
      },
      {
        title: "Immich · backup mobile",
        href: "https://docs.immich.app/features/mobile-backup/",
      },
      {
        title: "Immich · aggiornamenti / upgrading",
        href: "https://docs.immich.app/install/upgrading/",
      },
      {
        title: "Immich · backup e ripristino / restore",
        href: "https://docs.immich.app/administration/backup-and-restore/",
      },
      {
        title: "PhotoPrism",
        href: "https://www.photoprism.app/",
      },
    ],
  },
  {
    slug: "tailscale-pihole",
    title: {
      it: "Accesso remoto e filtro DNS",
      en: "Remote access and DNS filtering",
    },
    category: "lab",
    description: {
      it: "Come uso Tailscale per raggiungere il server e Pi-hole per filtrare le richieste DNS.",
      en: "How I use Tailscale to reach the server and Pi-hole to filter DNS requests.",
    },
    image: "/work/homelab-pihole.webp",
    imageWidth: 1500,
    imageHeight: 910,
    sections: [
      {
        id: "accesso",
        title: {
          it: "Raggiungere il server fuori casa",
          en: "Reaching the server away from home",
        },
        paragraphs: [
          {
            "en": "I use Tailscale to connect my devices to a private network and reach the server away from home. That makes the services useful when I’m away from home.",
            "it": "Uso Tailscale per collegare i miei dispositivi a una rete privata e raggiungere il server fuori casa. I servizi sono così utilizzabili anche lontano da casa."
          },
          {
            "en": "I sign in with Google and keep Tailscale active on my devices. Managing WireGuard directly is another option I could explore, but this setup meets my current needs.",
            "it": "Accedo con Google e tengo Tailscale attivo sui dispositivi. Gestire direttamente WireGuard è un’opzione che potrei approfondire, ma questa configurazione risponde alle mie esigenze attuali."
          }
        ],
      },
      {
        id: "dns",
        title: {
          it: "Osservare le richieste DNS",
          en: "Observing DNS requests",
        },
        paragraphs: [
          {
            "en": "DNS translates domain names into addresses used to reach services. It gave me a way to start investigating which domains my devices contact.",
            "it": "Il DNS traduce i nomi di dominio negli indirizzi usati per raggiungere i servizi. Mi ha dato un punto di partenza per indagare quali domini contattino i miei dispositivi."
          },
          {
            "en": "Pi-hole logs DNS requests and filters domains, including some associated with ads and tracking. Those logs show domain requests, rather than the contents of connections or what a service does with my data.",
            "it": "Pi-hole registra le richieste DNS e filtra domini, inclusi alcuni associati a pubblicità e tracking. I log mostrano richieste a domini, senza rivelare il contenuto delle connessioni o cosa un servizio faccia con i miei dati."
          }
        ],
      },
      {
        id: "tracking",
        title: {
          it: "Cosa può fare il filtro",
          en: "What the filter can do",
        },
        paragraphs: [
          {
            "en": "I installed the filter because I wanted more control over requests associated with advertising and tracking. Looking at the logs helps me connect an app’s behaviour to its network activity.",
            "it": "Ho installato il filtro per avere più controllo sulle richieste associate a pubblicità e tracking. Consultare i log mi aiuta a collegare il comportamento di un’app alla sua attività di rete."
          },
          {
            "en": "Pi-hole can’t block every ad or make browsing invisible. DNS filtering has limits when ads and content share a domain. Browser extensions work at another level, so I’m learning where each tool helps.",
            "it": "Pi-hole non blocca ogni pubblicità e non rende invisibile la navigazione. Il filtro DNS ha dei limiti quando annunci e contenuti condividono un dominio. Le estensioni del browser lavorano a un altro livello: sto imparando dove sia utile ciascuno strumento."
          }
        ],
      },
      {
        id: "scelta",
        title: {
          it: "Filtrare sui dispositivi collegati",
          en: "Filtering on connected devices",
        },
        paragraphs: [
          {
            "en": "I also use Pi-hole’s DNS through Tailscale away from home. Using that DNS server is separate from routing all traffic through the home server.",
            "it": "Uso il DNS di Pi-hole attraverso Tailscale anche fuori casa. Usare quel server DNS è distinto dall’instradare tutto il traffico attraverso il server domestico."
          },
          {
            "en": "This still leaves dependencies such as Tailscale’s coordination service and Google sign-in. I chose them for convenience. AdGuard Home is another DNS filter I’d like to explore.",
            "it": "Restano dipendenze come il servizio di coordinamento di Tailscale e l’accesso con Google. Le ho scelte per comodità. AdGuard Home è un altro filtro DNS che vorrei esplorare."
          }
        ],
      },
    ],
    sources: [
      {
        title: "Tailscale + Pi-hole",
        href: "https://tailscale.com/kb/1114/pi-hole",
      },
      {
        title: "Pi-hole",
        href: "https://docs.pi-hole.net/",
      },
      {
        title: "WireGuard",
        href: "https://www.wireguard.com/",
      },
      {
        title: "AdGuard Home",
        href: "https://github.com/AdguardTeam/AdGuardHome",
      },
    ],
  },
  {
    slug: "file-browser",
    title: {
      it: "Accesso ai miei file dal browser",
      en: "Web access to my files",
    },
    category: "lab",
    description: {
      it: "File Browser mi dà accesso alle cartelle del server. Lo stato di manutenzione è un motivo per rivedere la scelta.",
      en: "File Browser gives me access to server folders. Its maintenance status is a reason to revisit the choice.",
    },
    image: "/work/homelab-filebrowser.webp",
    imageWidth: 1500,
    imageHeight: 910,
    sections: [
      {
        id: "motivo",
        title: {
          it: "I file oltre alla raccolta fotografica",
          en: "Files beyond the photo library",
        },
        paragraphs: [
          {
            "en": "I use File Browser to open the server’s folders through a web page. Tailscale lets me reach it away from home. That covers the files I don’t keep in Immich.",
            "it": "Uso File Browser per aprire le cartelle del server da una pagina web. Tailscale mi permette di raggiungerlo fuori casa. Lo uso per i file che non conservo in Immich."
          }
        ],
      },
      {
        id: "scelta",
        title: {
          it: "Scegliere in base al compito",
          en: "Choosing for the task",
        },
        paragraphs: [
          {
            "en": "Direct folder access is enough for me at the moment. I’m interested in Nextcloud for broader collaboration features and Syncthing for device synchronisation, but I don’t need to run every option on this machine.",
            "it": "Per ora mi basta l’accesso diretto alle cartelle. Mi interessano Nextcloud per funzioni di collaborazione più ampie e Syncthing per sincronizzare i dispositivi, ma non ho bisogno di avviare ogni alternativa su questa macchina."
          }
        ],
      },
      {
        id: "manutenzione",
        title: {
          it: "Un progetto archiviato",
          en: "An archived project",
        },
        paragraphs: [
          {
            "en": "The original File Browser repository is archived and will receive no further fixes. I still use it, but need to evaluate a maintained alternative. A familiar interface isn’t enough reason to ignore the project’s maintenance status.",
            "it": "Il repository originale di File Browser è archiviato e non riceverà ulteriori correzioni. Lo uso ancora, ma devo valutare un’alternativa mantenuta. Un’interfaccia familiare non basta per ignorare lo stato di manutenzione del progetto."
          }
        ],
      },
      {
        id: "alternative",
        title: {
          it: "Spazio e recupero dei dati",
          en: "Storage and recovery",
        },
        paragraphs: [
          {
            "en": "The server still has only 256 GB of storage. Web access doesn’t protect files from disk failure or deletion. More complete backups remain work to do.",
            "it": "Il server ha ancora solo 256 GB di spazio. L’accesso web non protegge i file da guasti o cancellazioni. Backup più completi restano un lavoro da fare."
          }
        ],
      },
    ],
    sources: [
      {
        title: "File Browser",
        href: "https://filebrowser.org/",
      },
      {
        title: "Nextcloud",
        href: "https://nextcloud.com/",
      },
      {
        title: "Syncthing",
        href: "https://syncthing.net/",
      },
    ],
  },
  {
    slug: "monitoraggio",
    title: {
      it: "Monitorare il server domestico",
      en: "Monitoring the home server",
    },
    category: "lab",
    description: {
      it: "Utilizzo della CPU, stato dei dischi, disponibilità dei servizi e avvisi su Telegram.",
      en: "CPU usage, disk health, service availability and alerts through Telegram.",
    },
    image: "/work/homelab-beszel.webp",
    imageWidth: 1500,
    imageHeight: 910,
    sections: [
      {
        id: "bisogno",
        title: {
          it: "Osservare l’uso delle risorse",
          en: "Watching resource use",
        },
        paragraphs: [
          {
            "en": "Once the applications were running, I wanted to see their CPU, memory and storage use. On this older machine, monitoring helps me understand what each service costs to run.",
            "it": "Una volta avviate le applicazioni, volevo osservare l’uso di CPU, memoria e spazio. Su questa macchina datata il monitoraggio mi aiuta a capire quanto ogni servizio richieda per funzionare."
          }
        ],
      },
      {
        id: "beszel",
        title: {
          it: "Passare da Netdata a Beszel",
          en: "Moving from Netdata to Beszel",
        },
        paragraphs: [
          {
            "en": "I initially used Netdata, but it consumed more CPU than I wanted on this machine. I switched to Beszel to leave more resources for the applications I was hosting.",
            "it": "Inizialmente usavo Netdata, ma su questa macchina consumava più CPU di quanto volessi dedicarci. Sono passato a Beszel per lasciare più risorse alle applicazioni ospitate."
          },
          {
            "en": "I still like Netdata’s detail and alerts. Beszel was a better fit for what I needed to observe on this hardware.",
            "it": "Mi piacciono ancora il dettaglio e gli avvisi di Netdata. Beszel era più adatto a ciò che volevo osservare con questo hardware."
          }
        ],
      },
      {
        id: "dischi",
        title: {
          it: "Stato dei dischi e disponibilità dei servizi",
          en: "Disk health and service availability",
        },
        paragraphs: [
          {
            "en": "I use Scrutiny to inspect disk health information and temperature, and Uptime Kuma to check whether sites and services are reachable.",
            "it": "Uso Scrutiny per consultare stato e temperatura dei dischi, e Uptime Kuma per verificare che siti e servizi siano raggiungibili."
          },
          {
            "en": "Those checks have limits. A disk can fail despite reassuring readings, and a reachable service can still have problems. Monitoring helps me investigate; backups address a different need.",
            "it": "Questi controlli hanno dei limiti. Un disco può guastarsi anche con valori rassicuranti e un servizio raggiungibile può comunque avere problemi. Il monitoraggio mi aiuta a indagare; i backup rispondono a un’altra esigenza."
          }
        ],
      },
      {
        id: "telegram",
        title: {
          it: "Avvisi su Telegram",
          en: "Telegram alerts",
        },
        paragraphs: [
          {
            "en": "A Telegram bot alerts me when CPU stays at maximum for about ten minutes and sends temperature warnings. It reports connection interruptions and recovery with the elapsed time. I can also ask it for the server’s status.",
            "it": "Un bot Telegram mi avvisa quando la CPU resta al massimo per circa dieci minuti e invia avvisi sulle temperature. Segnala interruzioni e ripristini della connessione con il tempo trascorso. Posso anche chiedergli lo stato del server."
          },
          {
            "en": "I use Telegram here because it’s a convenient way to get an alert without keeping a dashboard open. It is an external service I’ve chosen to depend on.",
            "it": "Uso Telegram perché è un modo comodo per ricevere un avviso senza tenere aperta una dashboard. È un servizio esterno da cui ho scelto di dipendere."
          }
        ],
      },
      {
        id: "scelta",
        title: {
          it: "Mantenere utili gli avvisi",
          en: "Keeping alerts useful",
        },
        paragraphs: [
          {
            "en": "I want alerts that tell me when to intervene, with enough information to investigate. Adding graphs is easy; deciding which ones deserve attention takes more thought.",
            "it": "Voglio avvisi che mi dicano quando intervenire, con informazioni sufficienti per indagare. Aggiungere grafici è facile; decidere quali meritino attenzione richiede più ragionamento."
          }
        ],
      },
    ],
    sources: [
      {
        title: "Beszel",
        href: "https://beszel.dev/",
      },
      {
        title: "Netdata",
        href: "https://www.netdata.cloud/",
      },
      {
        title: "Scrutiny",
        href: "https://github.com/AnalogJ/scrutiny",
      },
      {
        title: "Uptime Kuma",
        href: "https://github.com/louislam/uptime-kuma",
      },
    ],
  },
  {
    slug: "manutenzione",
    title: {
      it: "Aggiornamenti, backup e piani",
      en: "Updates, backups and plans",
    },
    category: "lab",
    description: {
      it: "Cosa automatizzo, cosa aggiorno manualmente e cosa devo ancora migliorare.",
      en: "What I automate, what I update manually and what I still need to improve.",
    },
    sections: [
      {
        id: "watchtower",
        title: {
          it: "Automatizzare gli aggiornamenti dei container",
          en: "Automating container updates",
        },
        paragraphs: [
          {
            "en": "Watchtower checks for new images daily and updates some of my containers. That has worked well in my setup so far and removes a repetitive task.",
            "it": "Watchtower controlla ogni giorno le nuove immagini e aggiorna una parte dei miei container. Finora nel mio setup ha funzionato bene e mi evita un compito ripetitivo."
          },
          {
            "en": "An update can break a service. I’m still deciding where automation is worth that risk and where I want to review a release first.",
            "it": "Un aggiornamento può interrompere un servizio. Sto ancora decidendo dove l’automazione valga quel rischio e dove preferisca leggere prima le note di rilascio."
          }
        ],
      },
      {
        id: "stato-progetto",
        title: {
          it: "Rivedere la scelta di Watchtower",
          en: "Revisiting Watchtower",
        },
        paragraphs: [
          {
            "en": "The original Watchtower repository is archived and no longer maintained. I still use it, but need to reassess the choice. Maintenance status can change after a tool becomes part of the setup.",
            "it": "Il repository originale di Watchtower è archiviato e non più mantenuto. Lo uso ancora, ma devo rivalutare la scelta. Lo stato di manutenzione può cambiare dopo che uno strumento è entrato nel setup."
          }
        ],
      },
      {
        id: "immich",
        title: {
          it: "Aggiornare Immich a mano",
          en: "Updating Immich manually",
        },
        paragraphs: [
          {
            "en": "I update Immich manually, following the guide and reading the release notes. Before changing the service holding my photos, I want to know which steps need attention.",
            "it": "Aggiorno Immich manualmente, seguendo la guida e leggendo le note di rilascio. Prima di modificare il servizio che conserva le foto, voglio sapere quali passaggi richiedano attenzione."
          }
        ],
      },
      {
        id: "backup",
        title: {
          it: "Più spazio e backup completi",
          en: "More storage and complete backups",
        },
        paragraphs: [
          {
            "en": "I’d like to expand from 256 GB to roughly 4 TB, with disk redundancy. That is a future plan tied to my budget.",
            "it": "Vorrei passare da 256 GB a circa 4 TB, con una forma di ridondanza dei dischi. È un piano futuro, legato al budget."
          },
          {
            "en": "Redundancy and a separate backup serve different purposes. For Immich, I need to protect both the files and database. Daily phone uploads are useful, but a fuller backup and recovery setup still needs work.",
            "it": "Ridondanza e backup separati servono a scopi diversi. Per Immich devo proteggere sia i file sia il database. I caricamenti quotidiani dal telefono sono utili, ma una configurazione più completa di backup e recupero richiede ancora lavoro."
          }
        ],
      },
      {
        id: "futuro",
        title: {
          it: "Trovare tempo per la manutenzione",
          en: "Making time for maintenance",
        },
        paragraphs: [
          {
            "en": "I want to improve storage, power and the Linux setup. I also keep adding small experiments and Telegram bots, so I need to leave time for the services I already use.",
            "it": "Voglio migliorare spazio, alimentazione e configurazione Linux. Continuo anche ad aggiungere piccoli esperimenti e bot Telegram, quindi devo lasciare tempo ai servizi che uso già."
          },
          {
            "en": "With a managed service, part of the fee pays someone else to do this work. I chose to handle some of it myself. Maintenance is part of that choice, even when it’s less interesting than trying a new app.",
            "it": "Con un servizio gestito, una parte del costo paga qualcuno che si occupa di questo lavoro. Io ho scelto di farne una parte da solo. La manutenzione fa parte della scelta, anche quando è meno interessante che provare una nuova app."
          }
        ],
      },
    ],
    sources: [
      {
        title: "Watchtower · documentazione / documentation",
        href: "https://containrrr.dev/watchtower/",
      },
      {
        title: "Watchtower · stato del progetto / project status",
        href: "https://github.com/containrrr/watchtower",
      },
      {
        title: "Immich · aggiornamenti / upgrading",
        href: "https://docs.immich.app/install/upgrading/",
      },
      {
        title: "Immich · backup e ripristino / restore",
        href: "https://docs.immich.app/administration/backup-and-restore/",
      },
    ],
  },
  {
    slug: "open-source",
    title: {
      it: "Perché uso e condivido software aperto",
      en: "Why I use and share open software",
    },
    category: "ideas",
    description: {
      it: "Il laboratorio mi ha fatto riflettere su codice sorgente, manutenzione e condivisione delle decisioni tecniche.",
      en: "The lab has made me think about source code, maintenance and how people share technical decisions.",
    },
    sections: [
      {
        id: "liberta",
        title: {
          it: "Leggere e modificare il codice",
          en: "Reading and changing the code",
        },
        paragraphs: [
          {
            "en": "Open source lets me read the code behind a tool and try changing it. I don’t do that for every service, but having the option matters when I want to understand a decision or investigate a problem.",
            "it": "L’open source mi permette di leggere il codice di uno strumento e provare a modificarlo. Non lo faccio per ogni servizio, ma avere questa possibilità conta quando voglio capire una scelta o indagare un problema."
          },
          {
            "en": "I’d like other people to build on my work too. Licences define the terms; documenting the choices helps someone else find a starting point.",
            "it": "Mi piacerebbe che altre persone potessero partire dal mio lavoro. Le licenze definiscono le condizioni; documentare le scelte aiuta chi cerca un punto di partenza."
          }
        ],
      },
      {
        id: "ricerca",
        title: {
          it: "Imparare dal lavoro condiviso",
          en: "Learning from shared work",
        },
        paragraphs: [
          {
            "en": "My lab depends on software and guides other people have shared. Being able to study that work is how I learned to configure much of it.",
            "it": "Il mio laboratorio dipende da software e guide condivisi da altre persone. Poter studiare quel lavoro mi ha permesso di imparare a configurarne buona parte."
          },
          {
            "en": "I’d like to contribute through code, explanations or support for maintainers. An honest account of something I tried can also save someone else time.",
            "it": "Vorrei contribuire con codice, spiegazioni o sostegno a chi mantiene i progetti. Anche il racconto onesto di una prova può far risparmiare tempo a qualcun altro."
          }
        ],
      },
      {
        id: "persone",
        title: {
          it: "Persone di cui seguo il lavoro",
          en: "People whose work I follow",
        },
        paragraphs: [
          {
            "en": "I save work that explains how a tool was built and which trade-offs its author accepted. The library holds these references so I can return to them.",
            "it": "Conservo lavori che spiegano come è stato costruito uno strumento e quali compromessi ha accettato l’autore. Raccolgo questi riferimenti nella biblioteca per poterci tornare."
          },
          {
            "en": "I’m interested in Linus Torvalds’ work on Linux, Salvatore “antirez” Sanfilippo’s writing about software design, and Fabrice Bellard’s projects such as QEMU and TinyCC. Each gives me a different way to think about building software.",
            "it": "Mi interessano il lavoro di Linus Torvalds su Linux, gli scritti di Salvatore “antirez” Sanfilippo sulla progettazione software e i progetti di Fabrice Bellard, come QEMU e TinyCC. Ognuno mi dà un modo diverso di ragionare sullo sviluppo."
          },
          {
            "en": "I also follow the work behind SQLite and curl, Simon Willison’s technical experiments and Mitchell Hashimoto’s work on Ghostty. I look for explanations I can apply to my own projects.",
            "it": "Seguo anche il lavoro dietro SQLite e curl, gli esperimenti tecnici di Simon Willison e il lavoro di Mitchell Hashimoto su Ghostty. Cerco spiegazioni che possa applicare ai miei progetti."
          },
          {
            "en": "Rich Hickey’s “Simple Made Easy”, Rob Pike’s writing on tool design and Pieter Hintjens’ ZeroMQ guide are references I want to keep studying. I’m interested in their specific arguments, rather than treating them as a single philosophy.",
            "it": "“Simple Made Easy” di Rich Hickey, gli scritti di Rob Pike sulla progettazione degli strumenti e la guida ZeroMQ di Pieter Hintjens sono riferimenti che voglio continuare a studiare. Mi interessano i loro ragionamenti specifici, senza considerarli una filosofia unica."
          }
        ],
      },
      {
        id: "pubblico",
        title: {
          it: "Codice finanziato pubblicamente",
          en: "Publicly funded code",
        },
        paragraphs: [
          {
            "en": "I’d like publicly funded software to be open so people can study and reuse it. I appreciate that IO’s source code is available through pagoPA.",
            "it": "Vorrei che il software finanziato pubblicamente fosse aperto, per poterlo studiare e riutilizzare. Apprezzo che pagoPA renda disponibile il codice sorgente di IO."
          },
          {
            "en": "Sharing code also requires care with personal data and credentials. I want transparency that helps people understand the system while protecting those who use it.",
            "it": "Condividere codice richiede anche attenzione a dati personali e credenziali. Mi interessa una trasparenza che aiuti a capire il sistema e protegga chi lo usa."
          }
        ],
      },
      {
        id: "sostenibilita",
        title: {
          it: "Pagare per la manutenzione",
          en: "Paying for maintenance",
        },
        paragraphs: [
          {
            "en": "I’m willing to pay for useful software and its maintenance. What bothers me is paying to stay in a service that collects information about me and makes it difficult to leave.",
            "it": "Sono disposto a pagare per un software utile e per la sua manutenzione. Mi pesa pagare per restare in un servizio che raccoglie informazioni su di me e da cui è difficile uscire."
          },
          {
            "en": "Donations, crowdfunding and services with clear costs are options I’m interested in. I’m deciding which conveniences to buy and which I want to build myself.",
            "it": "Donazioni, crowdfunding e servizi con costi chiari sono opzioni che mi interessano. Sto decidendo quali comodità comprare e quali costruire da me."
          }
        ],
      },
      {
        id: "europa",
        title: {
          it: "Scelte tecnologiche in Europa",
          en: "Technology choices in Europe",
        },
        paragraphs: [
          {
            "en": "I’d like more European investment in software and infrastructure, and more room for new companies. More options would give people and organisations more control over what they depend on.",
            "it": "Vorrei più investimenti europei in software e infrastrutture e più spazio per nuove imprese. Avere più opzioni darebbe a persone e organizzazioni maggiore controllo sulle proprie dipendenze."
          },
          {
            "en": "In my lab, that means thinking about where I keep data and what happens if a service changes. Open formats and skills I can reuse are a practical starting point.",
            "it": "Nel mio laboratorio questo significa ragionare su dove tengo i dati e su cosa succede se un servizio cambia. Formati aperti e competenze riutilizzabili sono un punto di partenza pratico."
          }
        ],
      },
      {
        id: "trasparenza",
        title: {
          it: "Scrivere le decisioni",
          en: "Writing down decisions",
        },
        paragraphs: [
          {
            "en": "I want people working on a project to have access to the documents and reasoning behind decisions. That makes it easier to contribute and revisit a choice months later.",
            "it": "Vorrei che chi lavora a un progetto avesse accesso ai documenti e ai ragionamenti dietro le decisioni. Questo aiuta a contribuire e a rivedere una scelta mesi dopo."
          },
          {
            "en": "GitLab’s handbook and Oxide’s Requests for Discussion interest me as examples of written context. I’m interested in how documentation helps people work with more autonomy.",
            "it": "L’handbook di GitLab e le Requests for Discussion di Oxide mi interessano come esempi di contesto scritto. Mi interessa capire come la documentazione aiuti a lavorare con maggiore autonomia."
          }
        ],
      },
      {
        id: "organizzazione",
        title: {
          it: "Come mi piacerebbe lavorare",
          en: "How I’d like to work",
        },
        paragraphs: [
          {
            "en": "I’m drawn to small teams with enough context to make technical decisions. PostHog’s handbook and 37signals’ writing are references I explore for that way of working.",
            "it": "Mi attirano i piccoli team con il contesto necessario per prendere decisioni tecniche. L’handbook di PostHog e gli scritti di 37signals sono riferimenti che esploro per questo modo di lavorare."
          },
          {
            "en": "Mozilla’s work on an open web and Automattic’s emphasis on learning and communication also interest me. I look at specific practices I could learn from, rather than treating any company as an ideal model.",
            "it": "Mi interessano anche il lavoro di Mozilla per un web aperto e l’attenzione di Automattic all’apprendimento e alla comunicazione. Guardo a pratiche specifiche da cui imparare, senza considerare un’azienda un modello ideale."
          },
          {
            "en": "The lab is where I try some of these ideas on a small scale. I use external services where they save work and host my own where I want more control. I expect those choices to change.",
            "it": "Il laboratorio è dove provo alcune di queste idee in piccolo. Uso servizi esterni quando mi risparmiano lavoro e gestisco i miei quando voglio più controllo. Mi aspetto che queste scelte cambino."
          }
        ],
      },
    ],
    sources: [
      {
        title: "Public Money, Public Code · FSFE",
        href: "https://publiccode.eu/",
      },
      {
        title: "IO · codice / source",
        href: "https://github.com/pagopa/io-app",
      },
      {
        title: "Simple Made Easy",
        href: "https://www.infoq.com/presentations/Simple-Made-Easy/",
      },
      {
        title: "Go · design e software engineering",
        href: "https://go.dev/talks/2012/splash.article",
      },
      {
        title: "ZeroMQ · The Guide",
        href: "https://zguide.zeromq.org/",
      },
      {
        title: "GitLab · handbook e valori",
        href: "https://handbook.gitlab.com/handbook/values/",
      },
      {
        title: "Oxide · Requests for Discussion",
        href: "https://rfd.shared.oxide.computer/",
      },
      {
        title: "PostHog · small teams",
        href: "https://posthog.com/handbook/company/small-teams",
      },
      {
        title: "Mozilla · manifesto",
        href: "https://www.mozilla.org/en-US/about/manifesto/",
      },
      {
        title: "Automattic · credo",
        href: "https://automattic.com/creed/",
      },
      {
        title: "37signals · come lavora",
        href: "https://37signals.com/",
      },
    ],
  },
];

export const libraryKinds = [
  "channel",
  "video",
  "book",
  "paper",
  "documentation",
  "website",
  "repository",
] as const;
export type LibraryKind = (typeof libraryKinds)[number];
export type LibraryResource = {
  id: string;
  title: string;
  kind: LibraryKind;
  author: string;
  href: string;
  topics: string[];
  note: Copy;
};
export const libraryKindLabels: Record<LibraryKind, Copy> = {
  channel: c("Canale YouTube", "YouTube channel"),
  video: c("Video", "Video"),
  book: c("Libro", "Book"),
  paper: c("Paper", "Paper"),
  documentation: c("Documentazione", "Documentation"),
  website: c("Sito e progetto", "Website and project"),
  repository: c("Repository", "Repository"),
};
// Add entries here. Types and topics drive the library filters automatically.
export const nannixLibrary: LibraryResource[] = [
  {
    id: "morrolinux",
    title: "Morrolinux",
    kind: "channel",
    author: "Morrolinux",
    href: "https://www.youtube.com/user/morrolinux/",
    topics: ["Linux", "Self-hosting"],
    note: c(
      "Uno dei miei riferimenti italiani per orientarmi tra Linux, servizi e self-hosting. Video e tutorial hanno accompagnato le prove sul mio server.",
      "One of my Italian references for Linux, services and self-hosting. Videos and tutorials accompanied experiments on my server.",
    ),
  },
  {
    id: "riccardo-palombo",
    title: "Riccardo Palombo",
    kind: "channel",
    author: "Riccardo Palombo",
    href: "https://youtube.com/riccardopalombo",
    topics: ["Linux", "Hardware"],
    note: c(
      "L’ho seguito per Linux e le distribuzioni. Un riferimento nel percorso di apprendimento che ha preceduto e accompagnato il laboratorio.",
      "I followed his work on Linux and distributions. A reference in the learning process before and during the lab.",
    ),
  },
  {
    id: "immich",
    title: "Immich",
    kind: "documentation",
    author: "Immich",
    href: "https://docs.immich.app/",
    topics: ["Self-hosting", "Foto", "Backup"],
    note: c(
      "Il riferimento per installazione, funzionalità e manutenzione della mia raccolta fotografica. Torno qui anche prima degli aggiornamenti manuali.",
      "The reference for installing, using and maintaining my photo library. I also return here before manual updates.",
    ),
  },
  {
    id: "tailscale-pihole",
    title: "Tailscale + Pi-hole",
    kind: "documentation",
    author: "Tailscale",
    href: "https://tailscale.com/kb/1114/pi-hole",
    topics: ["Reti", "Self-hosting"],
    note: c(
      "Una guida per capire il collegamento tra accesso remoto e filtro DNS. Utile per distinguere le diverse parti della configurazione.",
      "A guide to connecting remote access and DNS filtering. Useful for understanding the different parts of the configuration.",
    ),
  },
  {
    id: "beszel",
    title: "Beszel",
    kind: "documentation",
    author: "Beszel",
    href: "https://beszel.dev/",
    topics: ["Monitoraggio", "Self-hosting"],
    note: c(
      "Documentazione del monitoraggio leggero che uso dopo aver provato Netdata sul server.",
      "Documentation for the lightweight monitoring I use after trying Netdata on the server.",
    ),
  },
  {
    id: "docker",
    title: "Docker Docs",
    kind: "documentation",
    author: "Docker",
    href: "https://docs.docker.com/",
    topics: ["Self-hosting"],
    note: c(
      "Un punto di partenza per capire container e strumenti di gestione. Da affiancare alle guide dei singoli servizi.",
      "A starting point for containers and management tools. Read alongside the guides for individual services.",
    ),
  },
  {
    id: "public-code",
    title: "Public Money, Public Code",
    kind: "website",
    author: "Free Software Foundation Europe",
    href: "https://publiccode.eu/",
    topics: ["Open source", "Europa", "Ricerca"],
    note: c(
      "Una campagna vicina all’idea che il software finanziato pubblicamente debba poter essere studiato, condiviso e migliorato.",
      "A campaign close to the idea that publicly funded software should be open to study, sharing and improvement.",
    ),
  },
  {
    id: "io",
    title: "IO · codice dell’app",
    kind: "website",
    author: "pagoPA",
    href: "https://github.com/pagopa/io-app",
    topics: ["Open source", "Europa"],
    note: c(
      "Un esempio concreto che apprezzo: il codice di un’applicazione italiana per i servizi pubblici, disponibile da esplorare.",
      "A concrete example I appreciate: publicly available code for an Italian public services app.",
    ),
  },
  {
    id: "linus-torvalds",
    title: "Linux · kernel",
    kind: "repository",
    author: "Linus Torvalds e contributor",
    href: "https://github.com/torvalds/linux",
    topics: ["Open source", "Engineering", "Linux", "Sistemi operativi", "C"],
    note: c(
      "Il kernel Linux come riferimento per studiare codice e sviluppo condiviso.",
      "The Linux kernel as a reference for studying code and collaborative development.",
    ),
  },
  {
    id: "antirez",
    title: "Salvatore “antirez” Sanfilippo",
    kind: "website",
    author: "Salvatore Sanfilippo",
    href: "https://antirez.com/",
    topics: ["Open source", "Semplicità"],
    note: c(
      "Software, esperimenti e ragionamenti sulle scelte tecniche. Un riferimento per costruire strumenti comprensibili.",
      "Software, experiments and reasoning about technical choices. A reference for building understandable tools.",
    ),
  },
  {
    id: "fabrice-bellard",
    title: "Fabrice Bellard · progetti",
    kind: "website",
    author: "Fabrice Bellard",
    href: "https://bellard.org/",
    topics: ["Open source", "Engineering"],
    note: c(
      "Da QEMU a TinyCC: progetti da esplorare per il lavoro tecnico concentrato e l’inventiva.",
      "From QEMU to TinyCC: projects to explore for focused technical work and inventiveness.",
    ),
  },
  {
    id: "richard-hipp",
    title: "SQLite · il team",
    kind: "website",
    author: "D. Richard Hipp e team SQLite",
    href: "https://sqlite.org/crew.html",
    topics: ["Open source", "Semplicità"],
    note: c(
      "Un riferimento per strumenti essenziali, affidabilità e continuità della manutenzione.",
      "A reference for focused tools, reliability and sustained maintenance.",
    ),
  },
  {
    id: "daniel-stenberg",
    title: "Daniel Stenberg · curl",
    kind: "website",
    author: "Daniel Stenberg",
    href: "https://daniel.haxx.se/",
    topics: ["Open source", "Manutenzione"],
    note: c(
      "Il lavoro su curl e il racconto della manutenzione di un progetto open source usato ovunque.",
      "Work on curl and accounts of maintaining an open source project used everywhere.",
    ),
  },
  {
    id: "simon-willison",
    title: "Simon Willison’s Weblog",
    kind: "website",
    author: "Simon Willison",
    href: "https://simonwillison.net/",
    topics: ["Open source", "Conoscenza condivisa"],
    note: c(
      "Esperimenti, strumenti e appunti tecnici condivisi: rendere visibile anche il processo di apprendimento.",
      "Shared experiments, tools and technical notes: making the learning process visible too.",
    ),
  },
  {
    id: "mitchell-hashimoto",
    title: "Mitchell Hashimoto",
    kind: "website",
    author: "Mitchell Hashimoto",
    href: "https://mitchellh.com/",
    topics: ["Open source", "Autonomia"],
    note: c(
      "Scrittura tecnica e lavoro sul software, incluso Ghostty. Un riferimento per continuare a costruire personalmente.",
      "Technical writing and software work, including Ghostty. A reference for continuing to build hands-on.",
    ),
  },
  {
    id: "rich-hickey",
    title: "Simple Made Easy",
    kind: "video",
    author: "Rich Hickey",
    href: "https://www.infoq.com/presentations/Simple-Made-Easy/",
    topics: ["Semplicità", "Engineering"],
    note: c(
      "Una conferenza per distinguere semplicità e facilità, e ragionare sulla complessità dei sistemi.",
      "A talk for distinguishing simplicity from ease and thinking about system complexity.",
    ),
  },
  {
    id: "rob-pike",
    title: "Go · design e software engineering",
    kind: "paper",
    author: "Rob Pike",
    href: "https://go.dev/talks/2012/splash.article",
    topics: ["Semplicità", "Engineering"],
    note: c(
      "Il design di Go letto attraverso i problemi concreti dello sviluppo e della manutenzione del software.",
      "Go’s design through the practical problems of building and maintaining software.",
    ),
  },
  {
    id: "pieter-hintjens",
    title: "ZeroMQ · The Guide",
    kind: "book",
    author: "Pieter Hintjens",
    href: "https://zguide.zeromq.org/",
    topics: ["Open source", "Documentazione", "Conoscenza condivisa"],
    note: c(
      "Protocolli, esempi e comunità: una guida aperta che rende condivisibile il lavoro sui sistemi distribuiti.",
      "Protocols, examples and community: an open guide that makes work on distributed systems shareable.",
    ),
  },
  {
    id: "gitlab",
    title: "GitLab · handbook e valori",
    kind: "documentation",
    author: "GitLab",
    href: "https://handbook.gitlab.com/handbook/values/",
    topics: ["Documentazione", "Trasparenza interna"],
    note: c(
      "Documentare contesto e decisioni per renderli accessibili a chi lavora nell’azienda.",
      "Documenting context and decisions to make them accessible to people working in the company.",
    ),
  },
  {
    id: "oxide",
    title: "Oxide · Requests for Discussion",
    kind: "documentation",
    author: "Oxide Computer Company",
    href: "https://rfd.shared.oxide.computer/",
    topics: ["Engineering", "Documentazione", "Trasparenza interna"],
    note: c(
      "Discussioni tecniche scritte: una traccia delle domande e delle scelte dietro i sistemi.",
      "Written technical discussions: a record of the questions and choices behind systems.",
    ),
  },
  {
    id: "posthog",
    title: "PostHog · small teams",
    kind: "documentation",
    author: "PostHog",
    href: "https://posthog.com/handbook/company/small-teams",
    topics: ["Autonomia", "Team piccoli", "Trasparenza interna"],
    note: c(
      "L’handbook sui piccoli team: responsabilità sul prodotto, autonomia e contesto condiviso.",
      "The handbook on small teams: product ownership, autonomy and shared context.",
    ),
  },
  {
    id: "mozilla",
    title: "Mozilla · manifesto",
    kind: "website",
    author: "Mozilla",
    href: "https://www.mozilla.org/en-US/about/manifesto/",
    topics: ["Open source", "Conoscenza condivisa"],
    note: c(
      "Un riferimento per il web aperto, la partecipazione e il software libero.",
      "A reference for the open web, participation and free software.",
    ),
  },
  {
    id: "automattic",
    title: "Automattic · credo",
    kind: "website",
    author: "Automattic",
    href: "https://automattic.com/creed/",
    topics: ["Conoscenza condivisa", "Documentazione"],
    note: c(
      "Apprendimento continuo e comunicazione come parte del lavoro quotidiano.",
      "Continuous learning and communication as part of everyday work.",
    ),
  },
  {
    id: "37signals",
    title: "37signals · come lavora",
    kind: "website",
    author: "37signals",
    href: "https://37signals.com/",
    topics: ["Semplicità", "Team piccoli"],
    note: c(
      "Team piccoli e prodotti semplici: pratiche da esplorare per ridurre burocrazia e complessità.",
      "Small teams and simple products: practices to explore for reducing bureaucracy and complexity.",
    ),
  },
  {
    id: "build-your-own-x",
    title: "codecrafters-io/build-your-own-x",
    kind: "repository",
    author: "codecrafters-io",
    href: "https://github.com/codecrafters-io/build-your-own-x",
    topics: ["Programmazione", "Progetti", "Imparare costruendo"],
    note: {
      it: "Lo tengo qui per quando voglio capire una tecnologia provando a ricostruirla: database, interpreti, motori e tanti altri progetti spiegati passo per passo. È molto vicino alla curiosità da cui nasce Nannix.",
      en: "I keep this for when I want to understand a technology by rebuilding it: databases, interpreters, engines and many other step-by-step projects. It fits the curiosity behind Nannix.",
    },
  },
  {
    id: "freecodecamp",
    title: "freeCodeCamp/freeCodeCamp",
    kind: "repository",
    author: "freeCodeCamp",
    href: "https://github.com/freeCodeCamp/freeCodeCamp",
    topics: ["Programmazione", "Web", "Percorsi di studio"],
    note: {
      it: "Un percorso di studio con esercizi e progetti, insieme al codice della piattaforma. Mi interessa poter passare dalla lezione al lavoro concreto e vedere come è costruito anche lo strumento che insegna.",
      en: "A study path with exercises and projects, alongside the platform’s code. I like the chance to move from a lesson to practical work and see how the teaching tool itself is built.",
    },
  },
  {
    id: "free-programming-books",
    title: "EbookFoundation/free-programming-books",
    kind: "repository",
    author: "EbookFoundation",
    href: "https://github.com/EbookFoundation/free-programming-books",
    topics: ["Programmazione", "Libri", "Percorsi di studio"],
    note: {
      it: "Una raccolta di libri e risorse di programmazione disponibili gratuitamente, in molte lingue. Un posto da cui partire quando voglio approfondire un argomento con una lettura più lunga.",
      en: "A collection of freely available programming books and resources in many languages. A starting point for exploring a subject through longer reading.",
    },
  },
  {
    id: "ossu-computer-science",
    title: "ossu/computer-science",
    kind: "repository",
    author: "ossu",
    href: "https://github.com/ossu/computer-science",
    topics: ["Informatica", "Percorsi di studio"],
    note: {
      it: "Mi interessa come mappa per uno studio più strutturato dell’informatica: corsi aperti, prerequisiti e un ordine con cui affrontarli. Lo tengo vicino agli esperimenti per dare più solidità alle basi.",
      en: "I’m interested in it as a map for more structured computer science study: open courses, prerequisites and an order for tackling them. I keep it alongside experiments to strengthen the foundations.",
    },
  },
  {
    id: "developer-roadmap",
    title: "kamranahmedse/developer-roadmap",
    kind: "repository",
    author: "kamranahmedse",
    href: "https://github.com/nilbuild/developer-roadmap",
    topics: ["Programmazione", "Web", "Percorsi di studio"],
    note: {
      it: "Roadmap e guide per orientarmi tra competenze e percorsi di sviluppo. Mi piace usarlo come mappa delle domande da approfondire, senza sentire di dover imparare tutto in una volta.",
      en: "Roadmaps and guides for finding my way through development skills and learning paths. I like it as a map of questions to explore, without feeling I need to learn everything at once.",
    },
  },
  {
    id: "system-design-primer",
    title: "donnemartin/system-design-primer",
    kind: "repository",
    author: "donnemartin",
    href: "https://github.com/donnemartin/system-design-primer",
    topics: ["Architettura", "Sistemi distribuiti"],
    note: {
      it: "Una raccolta per studiare come si progettano sistemi su larga scala. Mi interessa collegare componenti, compromessi e casi concreti, anche quando il mio laboratorio è molto più piccolo.",
      en: "A collection for studying large-scale system design. I want to connect components, trade-offs and real examples, even when my own lab is much smaller.",
    },
  },
  {
    id: "coding-interview-university",
    title: "jwasham/coding-interview-university",
    kind: "repository",
    author: "jwasham",
    href: "https://github.com/jwasham/coding-interview-university",
    topics: ["Algoritmi", "Strutture dati", "Colloqui", "Percorsi di studio"],
    note: {
      it: "Un piano di studio ampio per prepararsi ai colloqui tecnici. Lo tengo come traccia per tornare su algoritmi, strutture dati e basi di informatica con un po’ di ordine.",
      en: "A broad study plan for technical interviews. I keep it as a guide for revisiting algorithms, data structures and computer science foundations in an organised way.",
    },
  },
  {
    id: "project-based-learning",
    title: "practical-tutorials/project-based-learning",
    kind: "repository",
    author: "practical-tutorials",
    href: "https://github.com/practical-tutorials/project-based-learning",
    topics: ["Programmazione", "Progetti", "Imparare costruendo"],
    note: {
      it: "Tutorial organizzati attorno a progetti e linguaggi. Mi piace l’idea di scegliere qualcosa da costruire e incontrare i concetti mentre provo a farlo funzionare.",
      en: "Tutorials organised around projects and languages. I like choosing something to build and meeting the concepts as I try to make it work.",
    },
  },
  {
    id: "the-algorithms",
    title: "The Algorithms",
    kind: "website",
    author: "The Algorithms",
    href: "https://github.com/TheAlgorithms",
    topics: ["Algoritmi", "Strutture dati", "Programmazione"],
    note: {
      it: "Una comunità di repository con implementazioni di algoritmi in diversi linguaggi. Mi interessa confrontare il codice dello stesso problema e capire cosa cambia da un linguaggio all’altro.",
      en: "A community of repositories implementing algorithms in different languages. I want to compare code for the same problem and understand what changes between languages.",
    },
  },
  {
    id: "you-dont-know-js",
    title: "getify/You-Dont-Know-JS",
    kind: "repository",
    author: "getify",
    href: "https://github.com/getify/You-Dont-Know-JS",
    topics: ["JavaScript", "Libri", "Programmazione"],
    note: {
      it: "Una serie di libri per andare più a fondo in JavaScript. La tengo qui per tornare sui meccanismi del linguaggio che posso usare ogni giorno senza averli ancora capiti fino in fondo.",
      en: "A book series for going deeper into JavaScript. I keep it for revisiting language mechanisms I might use every day without fully understanding them.",
    },
  },
  {
    id: "javascript-algorithms",
    title: "trekhleb/javascript-algorithms",
    kind: "repository",
    author: "trekhleb",
    href: "https://github.com/trekhleb/javascript-algorithms",
    topics: ["JavaScript", "Algoritmi", "Strutture dati"],
    note: {
      it: "Algoritmi e strutture dati in JavaScript, con spiegazioni e riferimenti. Mi interessa affiancare l’idea astratta a un’implementazione che posso leggere e modificare.",
      en: "Algorithms and data structures in JavaScript, with explanations and references. I want to pair the abstract idea with an implementation I can read and change.",
    },
  },
  {
    id: "kubernetes-the-hard-way",
    title: "kelseyhightower/kubernetes-the-hard-way",
    kind: "repository",
    author: "kelseyhightower",
    href: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
    topics: ["Kubernetes", "Infrastruttura", "Reti"],
    note: {
      it: "Una guida per costruire un cluster Kubernetes entrando nei dettagli dei componenti. La tengo tra le cose da esplorare: nel mio laboratorio uso Docker e non ho ancora usato Kubernetes.",
      en: "A guide to building a Kubernetes cluster by going into its components. I keep it among things to explore: my lab uses Docker and I’ve not used Kubernetes yet.",
    },
  },
  {
    id: "awesome-iot",
    title: "phodal/awesome-iot",
    kind: "repository",
    author: "phodal",
    href: "https://github.com/phodal/awesome-iot",
    topics: ["IoT", "Hardware", "Progetti"],
    note: {
      it: "Una raccolta di risorse, librerie e piattaforme per l’Internet of Things. Mi interessa come ponte tra codice, dispositivi fisici e idee da provare sull’hardware.",
      en: "A collection of resources, libraries and platforms for the Internet of Things. I see it as a bridge between code, physical devices and ideas to try on hardware.",
    },
  },
  {
    id: "awesome-hacking",
    title: "Hack-with-Github/Awesome-Hacking",
    kind: "repository",
    author: "Hack-with-Github",
    href: "https://github.com/Hack-with-Github/Awesome-Hacking",
    topics: ["Sicurezza", "Reti"],
    note: {
      it: "Raccolte di strumenti e risorse per studiare sicurezza, pentesting e ricerca. Mi interessa capire meglio i sistemi che uso e le domande da farmi quando li configuro.",
      en: "Collections of tools and resources for studying security, pentesting and research. I want to better understand the systems I use and the questions to ask when configuring them.",
    },
  },
  {
    id: "awesome",
    title: "sindresorhus/awesome",
    kind: "repository",
    author: "sindresorhus",
    href: "https://github.com/sindresorhus/awesome",
    topics: ["Programmazione", "Risorse", "Conoscenza condivisa"],
    note: {
      it: "Un indice di raccolte curate su moltissimi argomenti. Lo tengo come porta d’ingresso quando una curiosità nuova mi porta fuori dagli strumenti che conosco già.",
      en: "An index of curated collections on many subjects. I keep it as an entry point when a new curiosity takes me beyond the tools I already know.",
    },
  },
  {
    id: "public-apis",
    title: "public-apis/public-apis",
    kind: "repository",
    author: "public-apis",
    href: "https://github.com/public-apis/public-apis",
    topics: ["API", "Web", "Progetti"],
    note: {
      it: "Un catalogo di API pubbliche da esplorare per piccoli progetti e integrazioni. Prima di usarne una guardo autenticazione, limiti e condizioni: il catalogo mi aiuta a scoprire possibilità.",
      en: "A catalogue of public APIs to explore for small projects and integrations. Before using one I check authentication, limits and terms; the catalogue helps me discover possibilities.",
    },
  },
  {
    id: "awesome-selfhosted",
    title: "awesome-selfhosted/awesome-selfhosted",
    kind: "repository",
    author: "awesome-selfhosted",
    href: "https://github.com/awesome-selfhosted/awesome-selfhosted",
    topics: ["Self-hosting", "Infrastruttura", "Risorse"],
    note: {
      it: "Una raccolta di servizi e applicazioni che posso ospitare da me. È uno scaffale molto vicino a Nannix: nuove idee da esplorare, da scegliere in base a quello che mi serve e riesco a mantenere.",
      en: "A collection of services and applications I can host myself. It is a shelf close to Nannix: new ideas to explore, chosen around what I need and can maintain.",
    },
  },
  {
    id: "missing-semester",
    title: "The Missing Semester of Your CS Education",
    kind: "website",
    author: "MIT",
    href: "https://missing.csail.mit.edu/",
    topics: ["Terminale", "Git", "Percorsi di studio"],
    note: {
      it: "Un corso sugli strumenti quotidiani dello sviluppo: shell, ambiente di lavoro, Git e debugging. Mi interessa perché imparare a usarli meglio può cambiare anche il modo in cui affronto i miei progetti.",
      en: "A course on everyday development tools: shell, working environment, Git and debugging. I’m interested because using them better can change how I approach my projects too.",
    },
  },
  {
    id: "linux-from-scratch",
    title: "Linux From Scratch",
    kind: "book",
    author: "Linux From Scratch community",
    href: "https://www.linuxfromscratch.org/lfs/",
    topics: ["Linux", "Sistemi operativi", "Imparare costruendo"],
    note: {
      it: "Una guida per costruire un sistema Linux partendo dai sorgenti. La tengo tra gli approfondimenti che vorrei affrontare per capire cosa c’è sotto la distribuzione che uso.",
      en: "A guide to building a Linux system from source. I keep it among things I want to explore to understand what sits underneath the distribution I use.",
    },
  },
  {
    id: "xv6",
    title: "xv6 · RISC-V",
    kind: "repository",
    author: "mit-pdos",
    href: "https://github.com/mit-pdos/xv6-riscv",
    topics: ["Sistemi operativi", "C", "Informatica"],
    note: {
      it: "Un piccolo sistema operativo didattico, simile a Unix, per RISC-V. Mi interessa per studiare processi, memoria e file system dentro un codice pensato per l’apprendimento.",
      en: "A small Unix-like teaching operating system for RISC-V. I’m interested in studying processes, memory and file systems in code designed for learning.",
    },
  },
  {
    id: "serenityos",
    title: "SerenityOS",
    kind: "repository",
    author: "SerenityOS",
    href: "https://github.com/SerenityOS/serenity",
    topics: ["Sistemi operativi", "C++", "Open source"],
    note: {
      it: "Un sistema operativo da esplorare attraverso il suo codice. Mi incuriosisce vedere come tanti pezzi, dal kernel agli strumenti grafici, diventano un ambiente completo.",
      en: "An operating system to explore through its code. I’m curious about how its many parts, from the kernel to graphical tools, become a complete environment.",
    },
  },
  {
    id: "rustlings",
    title: "rust-lang/rustlings",
    kind: "repository",
    author: "rust-lang",
    href: "https://github.com/rust-lang/rustlings",
    topics: ["Rust", "Programmazione", "Esercizi"],
    note: {
      it: "Piccoli esercizi per prendere confidenza con la lettura e la scrittura di Rust. Mi piace un percorso in cui posso provare, ricevere un errore e ragionare su come correggerlo.",
      en: "Small exercises for getting familiar with reading and writing Rust. I like a path where I can try, get an error and work out how to fix it.",
    },
  },
  {
    id: "thecherno",
    title: "The Cherno",
    kind: "channel",
    author: "Yan Chernikov",
    href: "https://www.youtube.com/@TheCherno",
    topics: ["C++", "Grafica", "Progetti"],
    note: {
      it: "Un canale da esplorare per C++, motori di gioco e programmazione grafica. Mi interessa il racconto tecnico di come si costruisce un progetto mentre prende forma.",
      en: "A channel to explore for C++, game engines and graphics programming. I’m interested in the technical story of a project being built as it takes shape.",
    },
  },
  {
    id: "leetcode",
    title: "LeetCode",
    kind: "website",
    author: "LeetCode",
    href: "https://leetcode.com/",
    topics: ["Algoritmi", "Strutture dati", "Esercizi", "Colloqui"],
    note: {
      it: "Problemi di programmazione su cui esercitarsi e ragionare sulle soluzioni. Lo tengo come spazio per allenare il problem solving, accanto ai progetti in cui i problemi li scelgo io.",
      en: "Programming problems for practising and reasoning about solutions. I keep it as a place to train problem-solving alongside projects where I choose the problems myself.",
    },
  },
  {
    id: "neetcode",
    title: "NeetCode",
    kind: "website",
    author: "NeetCode",
    href: "https://neetcode.io/",
    topics: ["Algoritmi", "Strutture dati", "Colloqui", "Percorsi di studio"],
    note: {
      it: "Percorsi ed esercizi per orientarsi nella preparazione ai colloqui tecnici. Mi interessa avere una sequenza ragionata con cui affrontare i problemi e collegare gli argomenti.",
      en: "Paths and exercises for finding a way through technical interview preparation. I’m interested in an organised sequence for tackling problems and connecting topics.",
    },
  },
  {
    id: "arduino-project-hub",
    title: "Arduino Project Hub",
    kind: "website",
    author: "Arduino community",
    href: "https://projecthub.arduino.cc/",
    topics: ["Arduino", "IoT", "Hardware", "Progetti"],
    note: {
      it: "Progetti della comunità Arduino da cui prendere spunti per costruire qualcosa di fisico. Mi piace il passaggio dal codice a un dispositivo che posso vedere e provare.",
      en: "Arduino community projects to spark ideas for building something physical. I like the move from code to a device I can see and try.",
    },
  },
  {
    id: "python-tutor",
    title: "Python Tutor",
    kind: "website",
    author: "Python Tutor",
    href: "https://pythontutor.com/",
    topics: ["Python", "Programmazione", "Debugging"],
    note: {
      it: "Uno strumento per visualizzare l’esecuzione del codice passo per passo. Mi interessa vedere come cambiano variabili e strutture in memoria, soprattutto quando il risultato da solo non mi spiega cosa è successo.",
      en: "A tool for visualising code execution step by step. I want to see variables and memory structures changing, especially when the result alone does not explain what happened.",
    },
  },
  {
    id: "oh-my-git",
    title: "Oh My Git!",
    kind: "website",
    author: "blinry e bleeptrack",
    href: "https://ohmygit.org/",
    topics: ["Git", "Esercizi", "Imparare costruendo"],
    note: {
      it: "Un gioco aperto per imparare Git visualizzando repository e operazioni. Mi incuriosisce un modo di capire branch e storia del codice vedendo gli effetti delle mie scelte.",
      en: "An open game for learning Git by visualising repositories and operations. I’m curious about understanding branches and code history by seeing the effects of my choices.",
    },
  },
  {
    id: "oh-my-zsh",
    title: "Oh My Zsh",
    kind: "repository",
    author: "ohmyzsh",
    href: "https://github.com/ohmyzsh/ohmyzsh",
    topics: ["Terminale", "Zsh", "Strumenti"],
    note: {
      it: "Uso Oh My Zsh per configurare la mia shell Zsh: è la mia scelta per l’ambiente del terminale. Mi piace poterlo adattare con temi e plugin, mantenendo gli strumenti quotidiani vicini al mio modo di lavorare.",
      en: "I use Oh My Zsh to configure my Zsh shell: it is my choice for my terminal environment. I like adapting it with themes and plugins so everyday tools fit how I work.",
    },
  },
];
