export type Locale = "en" | "it";
export type Copy = Record<Locale, string>;
export type GalleryMedia = {
  src: string;
  width: number;
  height: number;
  caption: Copy;
  credit?: string;
  poster?: string;
};
export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  categoryIt: string;
  color: string;
  ink: string;
  summary: Copy;
  story: Copy[];
  chapters?: {
    id?: string;
    title: Copy;
    body: Copy[];
    images?: GalleryMedia[];
    links?: { label: Copy; href: string }[];
    image?: {
      src: string;
      width: number;
      height: number;
      caption: Copy;
      credit?: string;
    };
    video?: { src: string; poster: string; caption: Copy };
  }[];
  gallery?: {
    src: string;
    width: number;
    height: number;
    caption: Copy;
    title?: Copy;
    body?: Copy[];
    mediaKind?: "logo";
    website?: string;
  }[];
  logo?: string;
  designCredit?: { name: string; instagram?: string };
  journey?: {
    title: Copy;
    body: Copy;
    diagram: "signals" | "context" | "conversation" | "server";
  }[];
  tools: string[];
  images: string[];
  technicalImage?: string;
  website?: string;
  github?: string;
  cover?:
  | "edgeworks"
  | "team"
  | "telemetry"
  | "homelab"
  | "pomodoro"
  | "ai"
  | "cutout"
  | "watchface"
  | "photo";
};
const text = (en: string, it: string): Copy => ({ en, it });
export const portfolioProjects: PortfolioProject[] = [
  {
    "slug": "sapienza-foiling-team",
    "title": "Sapienza Foiling Team",
    "category": "Website · Embedded · Team leadership",
    categoryIt: "Sito web · Elettronica · Coordinamento del team",
    "color": "#b53c4a",
    "ink": "#fff1e6",
    "website": "https://sapienzafoilingteam.com",
    "github": "https://github.com/nannipy/sapienzafoilingteam",
    "images": [
      "/work/sft-website-home-2026.webp",
      "/work/telemetry-map-cover.png"
    ],
    "tools": [
      "React",
      "Next.js",
      "TypeScript",
      "Web design",
      "ESP32-S3",
      "C++",
      "IMU + GPS",
      "WebSocket",
      "Supabase"
    ],
    "summary": {
      "en": "I build the team’s website, internal tools and a telemetry prototype for our foiling boat.",
      "it": "Sviluppo il sito del team, gli strumenti interni e un prototipo di telemetria per la nostra barca a foil."
    },
    "story": [
      {
        "en": "I joined Sapienza Foiling Team to build its first website. Since then, I’ve added a private area for the communication team, built a CRM and worked on the boat’s electronics and telemetry. For the 2026–2027 season, I also coordinate a small software and electronics group.",
        "it": "Sono entrato nel Sapienza Foiling Team per costruire il primo sito. Da allora ho aggiunto un’area riservata per la comunicazione, sviluppato un CRM e lavorato all’elettronica e alla telemetria della barca. Per la stagione 2026–2027 coordino anche un piccolo gruppo di informatici ed elettronici."
      },
      {
        "en": "The team began when my friend Federico Romeo discovered the SuMoth Challenge and suggested that Sapienza should take part. We started with no boat and little to show. The competition gave us deadlines; our studies, available materials and opportunities to test shaped what we could build.",
        "it": "Il team è nato quando il mio amico Federico Romeo ha scoperto la SuMoth Challenge e proposto di far partecipare la Sapienza. All’inizio non avevamo una barca e avevamo poco da mostrare. La gara ci dava le scadenze; lo studio, i materiali disponibili e le occasioni per fare prove determinavano cosa riuscivamo a costruire."
      },
      {
        "en": "Our boat foiled on Lake Garda. The telemetry is at a different stage: we have an assembled board and a browser visualiser, but had not tested the system on the water as of October 2026. The sections below cover what I built, who I worked with and what still needs testing.",
        "it": "La nostra barca ha volato sui foil al Lago di Garda. La telemetria è a uno stadio diverso: abbiamo una scheda assemblata e un visualizzatore nel browser, ma a ottobre 2026 non abbiamo ancora provato il sistema in acqua. Qui racconto cosa ho costruito, con chi ho lavorato e cosa resta da verificare."
      }
    ],
    "cover": "team",
    "chapters": [
      {
        "title": {
          "en": "Starting the team",
          "it": "Avviare il team"
        },
        "body": [
          {
            "en": "Federico’s idea was a starting point. We still had to recruit people, divide the work and find materials and components. The competition set deadlines, while progress depended on the time we could put in and the chances we had to test.",
            "it": "L’idea di Federico era un punto di partenza. Dovevamo ancora trovare persone, dividerci il lavoro e procurarci materiali e componenti. La gara fissava le scadenze, mentre il ritmo dipendeva dal tempo disponibile e dalle occasioni per fare prove."
          }
        ]
      },
      {
        "title": {
          "en": "A boatyard to work in",
          "it": "Un cantiere in cui lavorare"
        },
        "body": [
          {
            "en": "Michele Saponara and Fluido Design gave us access to a boatyard and tools. That made it possible for a team starting from scratch to build the boat.",
            "it": "Michele Saponara e Fluido Design ci hanno messo a disposizione il cantiere e gli strumenti. Quel supporto ha permesso a un team che partiva da zero di costruire la barca."
          }
        ]
      },
      {
        "title": {
          "en": "The first website",
          "it": "Il primo sito"
        },
        "body": [
          {
            "en": "I offered to build the website before we had a boat or photographs to put on it. We needed a place to introduce the team. I started with the HTML, CSS and JavaScript I’d studied at university, then learned React and Next.js while building it.",
            "it": "Ho proposto di costruire il sito prima che avessimo una barca o fotografie da pubblicare. Serviva uno spazio per presentare il team. Sono partito dall’HTML, dal CSS e dal JavaScript studiati all’università, poi ho imparato React e Next.js sviluppandolo."
          },
          {
            "en": "The early versions were slow, particularly because of heavy images. Maintaining the site for two years taught me how components, APIs and rendering choices affect the page people actually load.",
            "it": "Le prime versioni erano lente, soprattutto per le immagini pesanti. Gestire il sito per due anni mi ha insegnato come componenti, API e scelte di rendering influiscano sulla pagina che le persone caricano."
          }
        ],
        "image": {
          "src": "/work/sft-website-home-2026.webp",
          "width": 1280,
          "height": 720,
          "caption": {
            "en": "The team’s website.",
            "it": "Il sito del team."
          }
        }
      },
      {
        "title": {
          "en": "Images, loading and feedback",
          "it": "Immagini, caricamento e feedback"
        },
        "body": [
          {
            "en": "I revisited image sizes and loading, and questioned whether each visual effect was worth its cost. The design improved through feedback and repeated revisions. The blog gave the team a place to publish its work as it happened.",
            "it": "Ho rivisto dimensioni e caricamento delle immagini, valutando il costo di ogni effetto visivo. Il design è migliorato attraverso feedback e revisioni. Il blog ha dato al team uno spazio per pubblicare il lavoro man mano che procedeva."
          }
        ],
        "image": {
          "src": "/work/sft-website-blog-2026.webp",
          "width": 1280,
          "height": 720,
          "caption": {
            "en": "The website’s blog and team stories.",
            "it": "Il blog del sito e i racconti del team."
          }
        }
      },
      {
        "title": {
          "en": "Content the team can update",
          "it": "Contenuti che il team può aggiornare"
        },
        "body": [
          {
            "en": "I built a backend and a private administration area so the communication team could update content without asking me to make every change. My role expanded as the team needed more tools, from the website to electronics and internal organisation.",
            "it": "Ho realizzato un backend e un’area di amministrazione riservata perché il team di comunicazione potesse aggiornare i contenuti senza passare da me per ogni modifica. Il mio ruolo è cresciuto con le necessità del gruppo, dal sito all’elettronica e all’organizzazione interna."
          }
        ],
        "image": {
          "src": "/SFT/SFT_admin_dashboard.png",
          "width": 2824,
          "height": 1640,
          "caption": {
            "en": "The website’s administration dashboard.",
            "it": "La dashboard di amministrazione del sito."
          }
        }
      },
      {
        "id": "sft-crm",
        "title": {
          "en": "A CRM for the 2026–2027 season",
          "it": "Un CRM per la stagione 2026–2027"
        },
        "body": [
          {
            "en": "I built the team’s CRM with Next.js, React and Supabase to organise commitments, deadlines, files and presentations. It is a new project intended to become our main workspace; the season is still being set up.",
            "it": "Ho sviluppato il CRM del team con Next.js, React e Supabase per organizzare impegni, scadenze, file e presentazioni. È un progetto nuovo, pensato per diventare il nostro spazio di lavoro principale; la stagione è ancora in fase di avvio."
          }
        ],
        "links": [
          {
            "label": {
              "en": "Team CRM",
              "it": "CRM del team"
            },
            "href": "https://crm.sapienzafoilingteam.com"
          }
        ],
        "image": {
          "src": "/work/sft-crm/home.webp",
          "width": 1245,
          "height": 984,
          "caption": {
            "en": "The team’s new shared workspace. The 2026–2027 season is still being set up.",
            "it": "Il nuovo spazio condiviso del team. La stagione 2026–2027 è ancora in fase di avvio."
          }
        },
        "images": [
          {
            "src": "/work/sft-crm/agenda.webp",
            "width": 1245,
            "height": 1198,
            "caption": {
              "en": "Agenda and competition deliverables, ready to organise the new season.",
              "it": "Agenda e delivery della gara, pronte per organizzare la nuova stagione."
            }
          }
        ]
      },
      {
        "title": {
          "en": "Choosing the telemetry components",
          "it": "Scegliere i componenti della telemetria"
        },
        "body": [
          {
            "en": "The team needed to record the boat’s position and movement. I worked with Francesco Miletto, who also belongs to Sapienza Gladiators, to choose the components and assemble the electronics. His hardware experience helped me learn the parts I hadn’t worked with before.",
            "it": "Il team aveva bisogno di registrare posizione e movimenti della barca. Ho lavorato con Francesco Miletto, che fa parte anche di Sapienza Gladiators, per scegliere i componenti e assemblare l’elettronica. La sua esperienza mi ha aiutato a imparare a usare componenti con cui non avevo mai lavorato."
          },
          {
            "en": "We chose an ESP32-S3, GPS, a Pololu MinIMU-9 v5 and a microSD reader, powered by a small FPV drone battery. The system is designed for a waterproof enclosure. I started by wiring the modules on a table and getting them to communicate.",
            "it": "Abbiamo scelto un ESP32-S3, un GPS, una Pololu MinIMU-9 v5 e un lettore microSD, alimentati da una batteria per piccoli droni FPV. Il sistema è pensato per una scatola impermeabile. Ho iniziato cablando i moduli su un tavolo e facendoli comunicare."
          }
        ],
        "image": {
          "src": "/work/garda-workbench.webp",
          "width": 1400,
          "height": 1867,
          "caption": {
            "en": "The workbench: laptops, wiring and electronics.",
            "it": "Il banco di lavoro: computer, cablaggi ed elettronica."
          }
        }
      },
      {
        "title": {
          "en": "A browser view of the boat’s orientation",
          "it": "L’assetto della barca nel browser"
        },
        "body": [
          {
            "en": "The firmware combines inertial sensor readings to estimate roll, pitch and yaw. A bridge sends the data to the web visualiser. At the bench, I could move the sensor and see the 3D model respond, which helped me inspect the connection between the board and the software.",
            "it": "Il firmware combina le letture del sensore inerziale per stimare rollio, beccheggio e imbardata. Un bridge invia i dati al visualizzatore web. Al banco potevo muovere il sensore e vedere il modello 3D rispondere, verificando il collegamento tra scheda e software."
          }
        ],
        "image": {
          "src": "/work/garda-telemetry-prototype.webp",
          "width": 1600,
          "height": 1067,
          "caption": {
            "en": "The wired prototype alongside the connected 3D visualiser.",
            "it": "Il prototipo cablato accanto al visualizzatore 3D collegato."
          }
        }
      },
      {
        "title": {
          "en": "From wiring to a PCB",
          "it": "Dal cablaggio alla PCB"
        },
        "body": [
          {
            "en": "We chose the components together, and Francesco handled the PCB design software. JLCPCB manufactured the boards. Once they arrived, we soldered and assembled the modules, then checked the connections.",
            "it": "Abbiamo scelto insieme i componenti e Francesco ha seguito il disegno della PCB nel software di progettazione. JLCPCB ha prodotto le schede. Quando sono arrivate, abbiamo saldato e assemblato i moduli, poi controllato i collegamenti."
          },
          {
            "en": "The board gave the modules fixed positions and replaced the loose bench wiring. It also introduced constraints I don’t face on a web page: dimensions, connectors and physical access to each component.",
            "it": "La scheda ha dato ai moduli posizioni fisse e sostituito i fili sparsi sul banco. Ha anche introdotto vincoli che non incontro in una pagina web: dimensioni, connettori e accesso fisico a ogni componente."
          }
        ],
        "image": {
          "src": "/work/garda-pcb.webp",
          "width": 1400,
          "height": 2488,
          "caption": {
            "en": "The circuit boards before assembly.",
            "it": "I circuiti stampati prima dell’assemblaggio."
          }
        }
      },
      {
        "title": {
          "en": "Assembly and intermittent faults",
          "it": "Assemblaggio e guasti intermittenti"
        },
        "body": [
          {
            "en": "The assembled board brings the microcontroller, inertial sensor and GPS into one unit. Getting it to work consistently was harder than getting the model to move once. Connections could appear sound, then fail under apparently identical conditions.",
            "it": "La scheda assemblata riunisce microcontrollore, sensore inerziale e GPS. Farla funzionare con continuità è stato più difficile che vedere il modello muoversi una volta. I collegamenti sembravano a posto, poi smettevano di funzionare in condizioni apparentemente identiche."
          },
          {
            "en": "I had to check connections repeatedly, calibrate the sensors and investigate missing or noisy readings. A moving model helped test the pipeline, but wasn’t enough to establish that its measurements were dependable.",
            "it": "Ho dovuto controllare più volte i collegamenti, calibrare i sensori e indagare sulle letture mancanti o rumorose. Il modello in movimento aiutava a verificare il flusso dei dati, ma non bastava a dimostrare l’affidabilità delle misure."
          },
          {
            "en": "As of October 2026, the telemetry has not been tested on the water. The boat was launched too late to fit in those trials. Testing continues this autumn; validation aboard the boat is still ahead.",
            "it": "A ottobre 2026 la telemetria non è stata provata in acqua. Il varo è arrivato troppo tardi per includere quei test. Le prove proseguono in autunno; la verifica a bordo resta da fare."
          }
        ],
        "image": {
          "src": "/work/garda-telemetry-board.webp",
          "width": 1400,
          "height": 1867,
          "caption": {
            "en": "The telemetry board, assembled.",
            "it": "La scheda di telemetria assemblata."
          }
        }
      },
      {
        "title": {
          "en": "Explaining the board",
          "it": "Spiegare la scheda"
        },
        "body": [
          {
            "en": "Showing the board to other people meant explaining what each sensor measured and why it mattered for the boat. That was another part of my role: making the technical work understandable to the rest of the team.",
            "it": "Mostrare la scheda significava spiegare cosa misurasse ogni sensore e perché servisse alla barca. Anche questo faceva parte del mio ruolo: rendere il lavoro tecnico comprensibile al resto del team."
          }
        ],
        "image": {
          "src": "/work/garda-sharing.webp",
          "width": 1400,
          "height": 933,
          "caption": {
            "en": "Sharing the team’s work.",
            "it": "Raccontare il lavoro del team."
          }
        }
      },
      {
        "title": {
          "en": "Building the boat",
          "it": "Costruire la barca"
        },
        "body": [
          {
            "en": "In October 2024, we set out to build a single-handed foiling Moth from scratch. The hull, sail and foils each brought work to organise and problems to solve. My software and electronics work was one part of that shared effort.",
            "it": "A ottobre 2024 abbiamo iniziato a costruire da zero un Moth monoposto a foil. Scafo, vela e foil richiedevano lavoro da organizzare e problemi da risolvere. Il mio contributo su software ed elettronica era una parte di quel lavoro condiviso."
          }
        ],
        "image": {
          "src": "/work/garda-build.webp",
          "width": 1400,
          "height": 788,
          "caption": {
            "en": "Building the boat, together.",
            "it": "Costruire la barca, insieme."
          }
        }
      },
      {
        "title": {
          "en": "The first flight on Lake Garda",
          "it": "Il primo volo al Lago di Garda"
        },
        "body": [
          {
            "en": "At Lake Garda, the boat we’d built rose onto its foils. After months of work, we could see it do what we’d set out to build it for. You can hear my reaction in the video.",
            "it": "Al Lago di Garda la barca che avevamo costruito si è sollevata sui foil. Dopo mesi di lavoro l’abbiamo vista fare quello per cui l’avevamo progettata. Nel video si sente la mia reazione."
          }
        ],
        "video": {
          "src": "/work/garda-flight.mp4",
          "poster": "/work/garda-flight-poster.webp",
          "caption": {
            "en": "Our first flight. Turn the sound on: that’s me shouting. The boat crashes shortly afterwards as we learn to foil.",
            "it": "Il nostro primo volo. Alza il volume: quello che urla sono io. Poco dopo la barca si schianta, mentre impariamo a navigare sui foil."
          }
        },
        "image": {
          "src": "/work/garda-boat.webp",
          "width": 1600,
          "height": 2400,
          "caption": {
            "en": "The boat on Lake Garda. Something we had built, finally in the water.",
            "it": "La barca sul Garda. Qualcosa che avevamo costruito noi, finalmente in acqua."
          },
          "credit": "Emma Bortoluzzi · SuMoth Challenge 2026"
        }
      },
      {
        "title": {
          "en": "A repair in 24 hours",
          "it": "Una riparazione in 24 ore"
        },
        "body": [
          {
            "en": "When a part broke, we rebuilt it with iron bars from local hardware shops and welded them together. Twenty-four hours later, the boat was back on the water. It was a repair we had to work out with the materials and time available.",
            "it": "Quando si è rotto un pezzo, lo abbiamo ricostruito con spranghe di ferro comprate nelle ferramenta locali e saldate insieme. Ventiquattro ore dopo la barca era di nuovo in acqua. Abbiamo dovuto trovare una riparazione con i materiali e il tempo disponibili."
          }
        ],
        "image": {
          "src": "/work/garda-hands.webp",
          "width": 1024,
          "height": 683,
          "caption": {
            "en": "Hands on the boat. The work we shared at Garda.",
            "it": "Le mani sulla barca. Il lavoro condiviso al Garda."
          },
          "credit": "Alessandro Cazzulani · SuMoth Challenge 2026"
        }
      },
      {
        "title": {
          "en": "Working alongside other teams",
          "it": "Lavorare accanto agli altri team"
        },
        "body": [
          {
            "en": "At the SuMoth Challenge, we met students from Cagliari, Munich, Southampton, Milan, Trieste and other European universities. We competed, but also helped each other with the work around the boats. That exchange is one of the things I remember most from Garda.",
            "it": "Alla SuMoth Challenge abbiamo incontrato studenti da Cagliari, Monaco, Southampton, Milano, Trieste e altre università europee. Eravamo in gara, ma ci aiutavamo anche nel lavoro sulle barche. Questo scambio è una delle cose che ricordo di più del Garda."
          }
        ],
        "image": {
          "src": "/work/garda-community.webp",
          "width": 1024,
          "height": 768,
          "caption": {
            "en": "Teams together at the SuMoth Challenge on Lake Garda.",
            "it": "I team riuniti alla SuMoth Challenge sul Lago di Garda."
          },
          "credit": "Alessandro Cazzulani · SuMoth Challenge 2026"
        }
      },
      {
        "title": {
          "en": "My part in a shared project",
          "it": "Il mio contributo a un progetto condiviso"
        },
        "body": [
          {
            "en": "I’m proud of the boat, and of the people who built and repaired it. I contributed the website, internal tools and electronics work; many other people made the boat and the trip to Garda possible.",
            "it": "Sono orgoglioso della barca e delle persone che l’hanno costruita e riparata. Io ho contribuito con il sito, gli strumenti interni e il lavoro sull’elettronica; tante altre persone hanno reso possibili la barca e la trasferta al Garda."
          }
        ]
      },
      {
        "title": {
          "en": "What it cost and what I learned",
          "it": "Il tempo dedicato e quello che ho imparato"
        },
        "body": [
          {
            "en": "I took on more responsibility as the project grew. Balancing it with university didn’t go particularly well: I devoted a lot of time to the team, and my studies suffered. I still think it was worth it. Two years of building and maintaining these systems helped me understand what I enjoy working on.",
            "it": "Ho assunto più responsabilità con la crescita del progetto. Conciliare tutto con l’università non mi è riuscito particolarmente bene: ho dedicato molto tempo al team e lo studio ne ha risentito. Penso comunque che ne sia valsa la pena. Due anni di sviluppo e gestione di questi sistemi mi hanno aiutato a capire su cosa mi piace lavorare."
          }
        ]
      }
    ],
    "technicalImage": "/work/telemetry-map-cover.png"
  },
  {
    slug: "recup",
    title: "RECUP",
    category: "Web app · Social impact",
    categoryIt: "App web · Recupero alimentare",
    color: "#e1d49c",
    ink: "#3c351e",
    logo: "/work/recup-logo.webp",
    website: "https://associazionerecup.org/",
    github: "https://github.com/nannipy/Recup",
    images: ["/Recup/overview.webp"],
    tools: ["Next.js", "TypeScript", "Supabase"],
    summary: text(
      "A platform for RECUP volunteers to record food recoveries and for administrators to prepare reports.",
      "Un gestionale per registrare i recuperi alimentari di RECUP e preparare i report dell’associazione.",
    ),
    story: [
      {
        "en": "I built RECUP’s management platform with Next.js, TypeScript and Supabase. Volunteers record recovered food and attendance. Administrators review activities across markets and prepare reports. RECUP redistributes unsold market food free of charge.",
        "it": "Ho sviluppato il gestionale di RECUP con Next.js, TypeScript e Supabase. I volontari registrano cibo recuperato e presenze. Gli amministratori consultano le attività dei mercati e preparano i report. RECUP ridistribuisce gratuitamente il cibo invenduto nei mercati."
      },
      {
        "en": "The previous platform had fallen out of use. Data collected through Google Forms and another tool contained inconsistent food names, misspelled volunteer names and typing errors in quantities. Those differences made reporting difficult. I started with an MVP for food names, kilograms and attendance, then expanded it after the association chose to continue.",
        "it": "Il vecchio gestionale era stato abbandonato. I dati raccolti con Google Moduli e un altro strumento contenevano nomi diversi per lo stesso alimento, errori nei nomi dei volontari e nelle quantità. Queste differenze complicavano i report. Sono partito da un MVP per alimenti, chili e presenze, poi l’ho ampliato quando l’associazione ha scelto di proseguire."
      },
      {
        "en": "I chose tools I knew so I could make proposals concrete quickly. The platform links recovery records to estimates of water saved, CO₂ avoided and economic value. RECUP supplied the calculation method, developed with researchers at the University of Milan. I implemented it in the application.",
        "it": "Ho scelto strumenti che conoscevo per rendere concrete le proposte in tempi brevi. Il gestionale collega i recuperi alle stime di acqua risparmiata, CO₂ evitata e valore economico. RECUP ha fornito il metodo di calcolo, elaborato con docenti dell’Università degli Studi di Milano. Io l’ho implementato nell’applicazione."
      },
      {
        "en": "As of October 2026, the platform is being introduced into the markets. I work with the association’s administrators on new requests and with market administrators on feedback from daily use. We’re still fixing issues and refining the forms.",
        "it": "A ottobre 2026 il gestionale è in fase di introduzione nei mercati. Lavoro con gli amministratori dell’associazione sulle nuove richieste e con quelli dei mercati sui feedback dell’uso quotidiano. Continuiamo a correggere problemi e affinare i moduli."
      },
      {
        "en": "The hardest part has been agreeing on how a request should work in practice. Trying a form together often tells us more than discussing a feature in the abstract. I care about this project because it supports work on food waste and inclusion, and because the people using it help me understand what to build next.",
        "it": "La parte più difficile è capire insieme come una richiesta debba funzionare nella pratica. Provare un modulo spesso ci dice più che discutere una funzione in astratto. Tengo a questo progetto perché sostiene il lavoro contro lo spreco alimentare e per l’inclusione, e perché chi lo usa mi aiuta a capire cosa costruire dopo."
      }
    ],
    gallery: [
      {
        src: "/Recup/volunteer-city.webp", width: 2848, height: 1640,
        title: text("Choose a city", "Scegliere la città"),
        body: [
          {
            "en": "Volunteers start by choosing a city. The portal follows the way RECUP organises its activities across markets.",
            "it": "I volontari iniziano scegliendo la città. Il portale segue l’organizzazione delle attività di RECUP nei mercati."
          }
        ],
        caption: text("Volunteer access · city selection.", "Accesso volontari · scelta della città."),
      },
      {
        src: "/Recup/volunteer-market.webp", width: 2848, height: 1640,
        title: text("Choose a market", "Scegliere il mercato"),
        body: [
          {
            "en": "Market access ties each entry to the place where the recovery happened. Administrators can then review those records together.",
            "it": "L’accesso per mercato collega ogni registrazione al luogo del recupero. Gli amministratori possono poi consultare insieme quei dati."
          }
        ],
        caption: text("Volunteer access · market selection.", "Accesso volontari · scelta del mercato."),
      },
      {
        src: "/Recup/recovery-food.webp", width: 2848, height: 1640,
        title: text("Record food and weight", "Registrare alimenti e peso"),
        body: [
          {
            "en": "Volunteers enter the date, recovered foods and kilograms. These records supply the data used in the reports.",
            "it": "I volontari inseriscono data, alimenti recuperati e chilogrammi. Queste registrazioni forniscono i dati usati nei report."
          }
        ],
        caption: text("New recovery · foods and weight.", "Nuovo recupero · alimenti e peso."),
      },
      {
        src: "/Recup/volunteer-presence.webp", width: 2848, height: 1640,
        title: text("Record attendance", "Registrare le presenze"),
        body: [
          {
            "en": "The next section records who took part, including volunteers and unregistered guests. We initially put food and attendance in one form; testing showed that separate sections made the sequence easier to follow.",
            "it": "La sezione successiva registra chi ha partecipato, inclusi volontari e ospiti non iscritti. Inizialmente avevamo riunito alimenti e presenze in un modulo; le prove ci hanno mostrato che sezioni distinte rendevano la sequenza più facile da seguire."
          }
        ],
        caption: text("Recovery form · finding the volunteers present.", "Modulo di recupero · ricerca delle persone presenti."),
      },
      {
        src: "/Recup/volunteer-selected.webp", width: 2848, height: 1640,
        title: text("Review the participants", "Controllare i partecipanti"),
        body: [
          {
            "en": "Selected participants remain visible before the recovery is saved. Attendance stays linked to that recovery in the database.",
            "it": "I partecipanti selezionati restano visibili prima del salvataggio. Nel database le presenze rimangono collegate a quel recupero."
          }
        ],
        caption: text("Recovery form · selected participants.", "Modulo di recupero · persone selezionate."),
      },
      {
        src: "/Recup/recoveries.webp", width: 2848, height: 1640,
        title: text("Review past recoveries", "Consultare i recuperi precedenti"),
        body: [
          {
            "en": "Administrators filter recoveries by market and period, with weights and environmental estimates alongside the activity history.",
            "it": "Gli amministratori filtrano i recuperi per mercato e periodo, con peso e stime ambientali accanto allo storico delle attività."
          }
        ],
        caption: text("Admin area · recovery history and filters.", "Area admin · storico dei recuperi e filtri."),
      },
      {
        src: "/Recup/reports.webp", width: 2848, height: 1640,
        title: text("Prepare reports", "Preparare i report"),
        body: [
          {
            "en": "Reports combine recovered food, attendance and environmental estimates. Filters and exports help administrators prepare the association’s reporting.",
            "it": "I report riuniscono cibo recuperato, presenze e stime ambientali. Filtri ed esportazioni aiutano gli amministratori a preparare la rendicontazione dell’associazione."
          }
        ],
        caption: text("Admin area · reports, environmental indicators and exports.", "Area admin · report, indicatori ambientali ed esportazioni."),
      },
      {
        src: "/Recup/companies.webp", width: 2848, height: 1640,
        title: text("Track company participation", "Registrare la partecipazione delle aziende"),
        body: [
          {
            "en": "The admin area connects companies with their volunteers and the recoveries they joined. This lets RECUP include company participation in its records.",
            "it": "L’area admin collega le aziende ai loro volontari e ai recuperi a cui hanno partecipato. RECUP può così includere la partecipazione aziendale nelle registrazioni."
          }
        ],
        caption: text("Admin area · companies and participation.", "Area admin · aziende e partecipazione."),
      },
    ],
  },
  {
    slug: "edocla",
    title: "EDOCLA Costruzioni",
    category: "Website · Construction",
    categoryIt: "Sito web · Edilizia",
    color: "#d3ad90",
    ink: "#412d20",
    website: "https://edoclacostruzioni.com",
    github: "https://github.com/nannipy/ec-website",
    designCredit: { name: "Iachini Design" },
    images: ["/work/edocla-opening-v2.jpg"],
    tools: ["React", "Figma", "Vercel", "Resend", "Cloudflare", "Umami"],
    summary: text(
      "A website for a friend’s construction company in Rome, with services and an enquiry form.",
      "Il sito per l’impresa edile di un amico a Roma, con servizi e un modulo per le richieste.",
    ),
    story: [
      {
        "en": "I built the website for EDOCLA, a friend’s construction company founded in Rome in 2026. It needed a page to explain its services and receive enquiries and requests for estimates.",
        "it": "Ho realizzato il sito di EDOCLA, l’impresa edile di un amico nata a Roma nel 2026. Serviva una pagina per presentare i servizi e ricevere contatti e richieste di preventivo."
      },
      {
        "en": "Giorgio Iachini of Iachini Design created the design in Figma. I implemented it in React, translating the layouts, typography and interactions into the site.",
        "it": "Giorgio Iachini di Iachini Design ha curato il progetto grafico in Figma. Io l’ho implementato in React, portando nel sito layout, tipografia e interazioni."
      },
      {
        "en": "I connected the enquiry form to Resend, deployed the site on Vercel and added Umami analytics. The domain is managed through Cloudflare. The published site presents the business and sends form submissions to the company by email.",
        "it": "Ho collegato il modulo a Resend, pubblicato il sito su Vercel e aggiunto le statistiche di Umami. Il dominio è gestito tramite Cloudflare. Il sito presenta l’attività e invia le richieste all’azienda via email."
      }
    ],
    gallery: [
      {
        src: "/work/edocla-about-v2.jpg", width: 1195, height: 460,
        title: text("Implementing the design", "Implementare il design"),
        body: [
          {
            "en": "I translated Iachini Design’s company introduction into React, keeping the typography, spacing and photographs consistent with the Figma layouts.",
            "it": "Ho tradotto in React la presentazione dell’azienda di Iachini Design, mantenendo tipografia, spazi e fotografie coerenti con i layout Figma."
          }
        ],
        caption: text("A close view of the company introduction and its photographs.", "Un dettaglio della presentazione dell’azienda e delle sue fotografie."),
      },
      {
        src: "/work/edocla-services-v2.jpg", width: 1195, height: 530,
        title: text("Services in expandable groups", "Servizi in gruppi espandibili"),
        body: [
          {
            "en": "Expandable groups organise construction, renovation, interiors and systems. They let visitors read the services they need without opening the entire list at once.",
            "it": "I gruppi espandibili organizzano costruzioni, ristrutturazioni, interni e impianti. Chi visita il sito può leggere i servizi che gli interessano senza aprire tutto l’elenco."
          }
        ],
        caption: text("The construction services, shown in an expanded group.", "Il dettaglio dei servizi di edilizia in un gruppo aperto."),
      },
      {
        src: "/work/edocla-process-v2.jpg", width: 1195, height: 532,
        title: text("The stages of a job", "Le fasi di un intervento"),
        body: [
          {
            "en": "The numbered sections explain the steps from a site visit and estimate to planning, construction and handover. I implemented the sequence from Iachini Design’s layouts.",
            "it": "Le sezioni numerate spiegano le fasi dal sopralluogo e preventivo alla pianificazione, al cantiere e alla consegna. Ho implementato la sequenza prevista nei layout di Iachini Design."
          }
        ],
        caption: text("A detail of the four stages of EDOCLA’s working process.", "Un dettaglio delle quattro fasi del processo di lavoro di EDOCLA."),
      },
      {
        src: "/work/edocla-contact-v2.jpg", width: 1195, height: 540,
        title: text("Sending an enquiry", "Inviare una richiesta"),
        body: [
          {
            "en": "Visitors describe the work they need and leave their contact details. I connected the form to Resend so submissions arrive in the company’s email.",
            "it": "Chi visita il sito descrive l’intervento e lascia i propri contatti. Ho collegato il modulo a Resend perché le richieste arrivino all’email dell’azienda."
          }
        ],
        caption: text("The contact section pairs a project photograph with the enquiry form.", "La sezione contatti affianca una fotografia al modulo di richiesta."),
      },
      {
        src: "/work/edocla-form-detail-v2.jpg", width: 487, height: 535,
        title: text("A published website", "Un sito pubblicato"),
        body: [
          {
            "en": "The site is online on Vercel. It gives EDOCLA a place to explain its work and receive enquiries. The design was Giorgio’s; my contribution was implementing and deploying it.",
            "it": "Il sito è online su Vercel. EDOCLA ha uno spazio per presentare il lavoro e ricevere richieste. Il design è di Giorgio; il mio contributo è stato implementarlo e pubblicarlo."
          }
        ],
        caption: text("A closer look at the enquiry form connected to Resend.", "Uno sguardo ravvicinato al modulo di contatto collegato a Resend."),
      },
    ],
  },
  {
    slug: "homelab",
    title: "Nannix server",
    category: "Infrastructure · Personal",
    categoryIt: "Infrastruttura · Progetto personale",
    color: "#94bda0",
    ink: "#173c2b",
    cover: "photo",
    images: ["/work/nannix-wordmark.webp"],
    tools: ["Linux Mint", "Docker", "Immich", "Tailscale", "Pi-hole", "File Browser", "Beszel", "Scrutiny", "Uptime Kuma", "Watchtower"],
    summary: text(
      "A home server built by reusing an old computer I already had.",
      "Un server domestico ricavato da un vecchio computer che avevo già.",
    ),
    story: [
      {
        "en": "I reused an old computer I already had as a home server. I wanted my applications to keep running when I closed my main computer, and more control over where I stored my files.",
        "it": "Ho riutilizzato un vecchio computer che avevo già per farne un server domestico. Volevo far girare le applicazioni anche a computer principale chiuso e scegliere dove conservare i miei file."
      },
      {
        "en": "It runs Linux Mint and Docker. I use Immich for photos, Tailscale for remote access, Pi-hole for DNS filtering and several tools to monitor the machine. It has 256 GB of storage and no battery, so storage, backups and power cuts are limits I still need to address. Nannix documents the setup and my choices.",
        "it": "Gira con Linux Mint e Docker. Uso Immich per le foto, Tailscale per l’accesso remoto, Pi-hole per il filtro DNS e altri strumenti per monitorare la macchina. Ha 256 GB di spazio e nessuna batteria: spazio, backup e interruzioni di corrente sono limiti su cui devo ancora lavorare. In Nannix raccolgo la configurazione e le mie scelte."
      }
    ],
  },
  {
    slug: "nanni-pdf",
    title: "Nanni PDF",
    category: "macOS app · Offline PDF tools",
    categoryIt: "App macOS · Strumenti PDF offline",
    color: "#4285f4",
    ink: "#f5f8ff",
    cover: "photo",
    images: ["/work/nanni-pdf/app-cropped.webp"],
    tools: ["Go", "Wails", "Svelte", "pdfcpu", "MuPDF", "Tesseract"],
    summary: text(
      "Common PDF tools, in an app I built for my MacBook. The documents stay on my computer.",
      "Gli strumenti comuni per i PDF, in un’app che ho creato per il mio MacBook. I documenti restano sul mio computer."
    ),
    story: [
      text(
        "Merging documents, splitting pages, compressing a file: these are common tasks. I wanted my own tool for them, ready to use on my MacBook. That is why I built Nanni PDF.",
        "Unire documenti, separare pagine, comprimere un file: sono operazioni comuni. Volevo avere uno strumento mio per farle, pronto da usare sul MacBook. Da qui è nata Nanni PDF."
      ),
      text(
        "A PDF can contain personal information or confidential material. For these everyday tasks, I prefer to keep the file on my computer. Nanni PDF processes it locally, without uploading it to an online service.",
        "Un PDF può contenere informazioni personali o materiale riservato. Per queste operazioni quotidiane preferisco tenere il file sul mio computer. Nanni PDF lo elabora in locale, senza caricarlo su un servizio online."
      )
    ],
    chapters: [
      {
        title: text("Keeping documents on my Mac", "Tenere i documenti sul mio Mac"),
        body: [text(
          "Uploading a document to a PDF website means sending its contents to another service. When I just need to merge or rotate pages, I want to do that on my Mac, especially if the document contains sensitive information.",
          "Caricare un documento su un sito per PDF significa inviarne il contenuto a un altro servizio. Se devo solo unire o ruotare delle pagine, voglio poterlo fare sul Mac, soprattutto quando il documento contiene informazioni sensibili."
        ), text(
          "With Nanni PDF, I select files from my computer and the result is saved locally. The operations work offline: no document upload is needed, and processing does not depend on an internet connection.",
          "Con Nanni PDF seleziono i file dal computer e il risultato viene salvato in locale. Le operazioni funzionano offline: non serve caricare il documento e l’elaborazione non dipende dalla connessione a Internet."
        )],
        image: {
          src: "/work/nanni-pdf/offline.webp", width: 1536, height: 1024,
          caption: text("Illustration: local processing keeps documents out of an online upload flow.", "Illustrazione: elaborare in locale evita di inviare i documenti a un servizio online.")
        }
      },
      {
        title: text("Everyday tools, my own app", "Strumenti quotidiani, un’app mia"),
        body: [text(
          "I brought merging, splitting, compression and rotation into one window, alongside watermarks, password protection, conversion between PDFs and images, and OCR. I choose the operation, select the files and start processing.",
          "Ho raccolto in una finestra unione, divisione, compressione e rotazione, insieme a filigrane, protezione con password, conversione tra PDF e immagini e OCR. Scelgo l’operazione, seleziono i file e avvio l’elaborazione."
        ), text(
          "I built the app with Go and a Svelte interface connected through Wails. pdfcpu handles the PDF operations, MuPDF renders pages and Tesseract supports OCR. The interface in the screenshot still uses the project’s earlier name, LocPDF.",
          "Ho costruito l’app con Go e un’interfaccia Svelte collegata tramite Wails. pdfcpu gestisce le operazioni sui PDF, MuPDF renderizza le pagine e Tesseract serve per l’OCR. Nell’interfaccia dello screenshot compare ancora il primo nome del progetto, LocPDF."
        )],
        image: {
          src: "/work/nanni-pdf/everyday-tools.webp", width: 1536, height: 1024,
          caption: text("Illustration of four common operations: merge, split, compress and rotate.", "Illustrazione di quattro operazioni comuni: unire, dividere, comprimere e ruotare.")
        }
      }
    ]
  },
  {
    slug: "pomodoro-go",
    title: "Pomodoro Go",
    category: "Utility · Focus",
    categoryIt: "Utilità · Studio",
    color: "#db9f91",
    ink: "#472720",
    cover: "pomodoro",
    images: ["/work/pomodoro-launch.webp", "/work/pomodoro-work.webp"],
    tools: ["Go", "macOS", "System tray"],
    summary: text(
      "A macOS menu-bar timer I built to use while studying.",
      "Un timer nella barra dei menu di macOS, costruito per usarlo mentre studio.",
    ),
    story: [
      {
        "en": "I built Pomodoro Go to try making a macOS menu-bar app and to experiment with Go. With help from AI tools, I had a timer I could use while studying after about an hour of work.",
        "it": "Ho costruito Pomodoro Go per provare a realizzare un’app nella barra dei menu di macOS e sperimentare con Go. Con l’aiuto di strumenti AI, dopo circa un’ora avevo un timer da usare mentre studiavo."
      },
      {
        "en": "I start a session, get a notification when it ends and take a break. The scope stayed small, which let me finish it and use it straight away.",
        "it": "Avvio una sessione, ricevo una notifica quando finisce e faccio una pausa. Ho tenuto il progetto piccolo, così sono riuscito a finirlo e usarlo subito."
      }
    ],
  },
  {
    slug: "aesculapius",
    title: "Aesculapius",
    category: "AI · Sport",
    categoryIt: "AI · Sport",
    color: "#94bec2",
    ink: "#203b3e",
    cover: "ai",
    images: [],
    github: "https://github.com/nannipy/aesculapius",
    tools: ["Python", "RAG", "Garmin Connect", "Telegram", "Self-hosted"],
    summary: text(
      "An experimental Telegram assistant for asking questions about my Garmin training and sleep data.",
      "Un assistente sperimentale su Telegram per fare domande sui miei dati Garmin di allenamento e sonno.",
    ),
    story: [
      {
        "en": "I built Aesculapius to ask questions about my Garmin data through Telegram. It combines training, sleep and recovery records in a conversation. As of October 2026, it works and I use it occasionally, but I’m still testing what makes it useful day to day.",
        "it": "Ho costruito Aesculapius per fare domande sui miei dati Garmin attraverso Telegram. Riunisce allenamento, sonno e recupero in una conversazione. A ottobre 2026 funziona e lo uso ogni tanto, ma sto ancora capendo cosa lo renda utile nella vita quotidiana."
      },
      {
        "en": "It follows FoxRun, my earlier Strava dashboard. Changes to Strava’s API access conditions stopped that project. I moved to Garmin Connect for a fuller view of my days, using cyberjunky’s open-source python-garminconnect library to access the records.",
        "it": "Nasce dopo FoxRun, la mia precedente dashboard basata su Strava. I cambiamenti alle condizioni di accesso alle API di Strava hanno fermato quel progetto. Sono passato a Garmin Connect per avere un quadro più completo delle mie giornate, usando la libreria open source python-garminconnect di cyberjunky per accedere ai dati."
      },
      {
        "en": "I use Python and retrieval to bring relevant records into the conversation. Self-hosting lets me choose how to store and process those records. Running and cycling are also ways I unwind, so I want the assistant to fit around them without becoming another task to manage.",
        "it": "Uso Python e il recupero delle informazioni pertinenti per portare i dati nella conversazione. Il self-hosting mi permette di scegliere come archiviarli ed elaborarli. Corsa e bici sono anche modi per rilassarmi: voglio che l’assistente si inserisca in queste attività senza diventare un altro compito da gestire."
      },
      {
        "en": "The difficult part is the interaction: keeping the data up to date and making the answers useful. I’d like to add books and technical sources on training, but that remains a direction to explore.",
        "it": "La parte difficile è l’interazione: mantenere i dati aggiornati e ottenere risposte utili. Vorrei aggiungere libri e fonti tecniche sull’allenamento, ma è ancora una direzione da esplorare."
      }
    ],
    gallery: [
      {
        src: "/personal/cycling-0661-v2.jpg",
        width: 4032,
        height: 3024,
        title: text("Cycling", "Ciclismo"),
        caption: text("Out on the bike.", "Un’uscita in bici."),
        body: [
          {
            "en": "I enjoy cycling and want to keep improving. I’m interested in the data because it lets me compare rides and explore how effort and recovery relate across days.",
            "it": "Mi piace andare in bici e voglio continuare a migliorare. I dati mi interessano perché permettono di confrontare le uscite ed esplorare il rapporto tra sforzo e recupero nelle diverse giornate."
          }
        ],
      },
      {
        src: "/personal/rome.webp",
        width: 828,
        height: 1104,
        title: text("Running", "Corsa"),
        caption: text("Outside, in Rome.", "Fuori, a Roma."),
        body: [
          {
            "en": "Running helps me relax. I want the assistant to account for sleep, recovery and how I feel, while leaving room to enjoy the activity.",
            "it": "Correre mi aiuta a rilassarmi. Vorrei che l’assistente tenesse conto di sonno, recupero e sensazioni personali, lasciando spazio al piacere dell’attività."
          }
        ],
      },
    ],
    journey: [
      {
        title: text("After FoxRun", "Dopo FoxRun"),
        body: text(
          "I stopped my Strava dashboard when API access conditions changed and looked for another way to use my records.",
          "Ho fermato la dashboard Strava quando sono cambiate le condizioni di accesso alle API e cercato un altro modo per usare i miei dati.",
        ),
        diagram: "signals",
      },
      {
        title: text("Collect Garmin records", "Raccogliere i dati Garmin"),
        body: text(
          "Training, sleep and recovery records provide the assistant’s starting point.",
          "I dati di allenamento, sonno e recupero sono il punto di partenza dell’assistente.",
        ),
        diagram: "signals",
      },
      {
        title: text("Retrieve relevant context", "Recuperare il contesto pertinente"),
        body: text(
          "Retrieval selects records to include in the model’s context when I ask a question.",
          "Il recupero delle informazioni seleziona i dati da includere nel contesto del modello quando faccio una domanda.",
        ),
        diagram: "context",
      },
      {
        title: text("Ask through Telegram", "Fare domande su Telegram"),
        body: text(
          "Telegram is the main interface. I’m still testing which questions and answers are useful in daily use.",
          "Telegram è l’interfaccia principale. Sto ancora verificando quali domande e risposte siano utili nell’uso quotidiano.",
        ),
        diagram: "conversation",
      },
      {
        title: text(
          "Manage the storage",
          "Gestire l’archiviazione",
        ),
        body: text(
          "Self-hosting lets me choose how the project stores and processes my personal records.",
          "Il self-hosting mi permette di scegliere come il progetto archivia ed elabora i miei dati personali.",
        ),
        diagram: "server",
      },
    ],
  },
  {
    slug: "ollapy",
    title: "OllaPy",
    category: "AI · Local-first",
    categoryIt: "AI · Modelli locali",
    color: "#c0c892",
    ink: "#343c20",
    images: [
      "/ollapy/Home.png",
      "/ollapy/Chat.png",
      "/ollapy/model-choice.png",
    ],
    github: "https://github.com/nannipy/ollapy",
    tools: ["Python", "Ollama", "Local LLMs"],
    summary: text(
      "A chatbot interface I built for local models through Ollama.",
      "Un’interfaccia chatbot che ho costruito per usare modelli locali tramite Ollama.",
    ),
    story: [
      {
        "en": "I built OllaPy because I wanted a chatbot interface for the open-source models I ran on my computer. It connects to Ollama’s API and lets me switch models, configure the context window and use attachments in conversations.",
        "it": "Ho costruito OllaPy perché volevo un’interfaccia chatbot per i modelli open source che eseguivo sul mio computer. Si collega alle API di Ollama e permette di cambiare modello, configurare la finestra di contesto e usare allegati nelle conversazioni."
      },
      {
        "en": "I used it on a MacBook Pro M1 with 8 GB of memory. That limited me to small models, and responses were slow. Building the interface was manageable; making local inference useful on that hardware was the harder constraint.",
        "it": "L’ho usato su un MacBook Pro M1 con 8 GB di memoria. Questo mi limitava a modelli piccoli, con risposte lente. Costruire l’interfaccia era fattibile; rendere utile l’esecuzione locale con quell’hardware era il vincolo più difficile."
      },
      {
        "en": "As other Ollama interfaces developed, I had less reason to maintain my own. OllaPy remains a learning project that I used for a while.",
        "it": "Con l’arrivo di altre interfacce per Ollama, avevo meno motivi per mantenere la mia. OllaPy resta un progetto di apprendimento che ho usato per un periodo."
      }
    ],
  },
  {
    slug: "vector",
    title: "Vector",
    category: "Terminal · AI",
    categoryIt: "Terminale · AI",
    color: "#c4a4ce",
    ink: "#3b2444",
    images: ["/work/vector.webp", "/work/vector-report.webp"],
    github: "https://github.com/nannipy/vector4HN",
    tools: ["Python", "Ollama", "Gemini", "TUI"],
    summary: text(
      "A Hacker News reader for the terminal, with summaries and chat about articles.",
      "Un lettore di Hacker News nel terminale, con riassunti e chat sugli articoli.",
    ),
    story: [
      {
        "en": "I built Vector to read Hacker News in the terminal and try designing a terminal user interface. I open it occasionally to browse the feed.",
        "it": "Ho costruito Vector per leggere Hacker News nel terminale e provare a progettare un’interfaccia testuale. Lo apro ogni tanto per scorrere le notizie."
      },
      {
        "en": "I added article summaries, saved reports and contextual chat using local models through Ollama or cloud models through Gemini. I wanted to skim an article and explore its discussion from the same interface.",
        "it": "Ho aggiunto riassunti degli articoli, report salvati e chat contestuale, usando modelli locali tramite Ollama o modelli cloud tramite Gemini. Volevo leggere rapidamente un articolo e approfondire la discussione dalla stessa interfaccia."
      },
      {
        "en": "It was a quick build and remains a rough experiment. The main reason to keep it around is that I enjoy using this kind of interface.",
        "it": "L’ho realizzato in poco tempo e resta un esperimento abbozzato. Lo tengo soprattutto perché mi piace usare questo tipo di interfaccia."
      }
    ],
  },
  {
    slug: "removebackground",
    title: "Remove Background",
    category: "Image tool · Utility",
    categoryIt: "Immagini · Utilità",
    color: "#c5c3bb",
    ink: "#33332e",
    cover: "cutout",
    images: ["/work/removebackground-local.jpg"],
    tools: ["Python", "Flask", "rembg", "Pillow", "HTML", "CSS", "JavaScript"],
    summary: text("A local web app that removes image backgrounds and exports transparent PNGs.", "Una piccola app web locale che rimuove gli sfondi ed esporta PNG trasparenti."),
    story: [
      {
        "en": "I wanted to remove image backgrounds without uploading the files to an external website. I built a small local app with a browser interface: select an image, remove its background, compare the result and download a transparent PNG.",
        "it": "Volevo rimuovere gli sfondi senza caricare i file su un sito esterno. Ho costruito una piccola app locale con un’interfaccia nel browser: si sceglie un’immagine, si rimuove lo sfondo, si confronta il risultato e si scarica un PNG trasparente."
      },
      {
        "en": "HTML, CSS and JavaScript handle the interface. A local Flask server uses rembg and Pillow to process the image. The cutouts generally work well in my use; the project is a small wrapper around those libraries.",
        "it": "HTML, CSS e JavaScript gestiscono l’interfaccia. Un server Flask locale elabora l’immagine con rembg e Pillow. Nel mio uso gli scontorni funzionano generalmente bene; il progetto è una piccola interfaccia per queste librerie."
      }
    ],
  },
  {
    slug: "sway",
    title: "Sway Touch Bar",
    category: "macOS app · Touch Bar",
    categoryIt: "App macOS · Touch Bar",
    color: "#b8c4cf",
    ink: "#25313d",
    cover: "photo",
    images: ["/work/sway/icon.png"],
    github: "https://github.com/nannipy/sway-touchbar",
    tools: ["Swift", "AppKit", "Objective-C", "macOS", "Tailscale"],
    summary: text(
      "My personal fork of Pock, with running apps, system controls and a customisable Touch Bar layout.",
      "Il mio fork personale di Pock, con app aperte, controlli di sistema e un layout personalizzabile per la Touch Bar.",
    ),
    story: [
      text(
        "Sway is my personal, open-source fork of Pock. I adapted the Touch Bar around the controls I use on my MacBook: running applications, volume, display and keyboard brightness, battery, date and time. The app lives in the menu bar.",
        "Sway è il mio fork personale e open source di Pock. Ho adattato la Touch Bar ai controlli che uso sul mio MacBook: applicazioni aperte, volume, luminosità dello schermo e della tastiera, batteria, data e ora. L’app vive nella barra dei menu.",
      ),
      text(
        "I work in Swift and AppKit, with Objective-C bridges for the system controls. Elements can be shown, hidden and moved between the left, centre and right areas. The layout is saved on the Mac. A Tailscale button controls an existing local connection.",
        "Lavoro in Swift e AppKit, con bridge Objective-C per i controlli di sistema. Gli elementi si possono mostrare, nascondere e spostare tra le zone sinistra, centrale e destra. Il layout viene salvato sul Mac. Un pulsante Tailscale controlla una connessione locale già configurata.",
      ),
      text(
        "It is an experimental alpha. The project documents checks on a MacBook Pro M1 with a physical Touch Bar; other configurations remain unverified. Some controls rely on private macOS APIs, so system updates can affect them. The repository provides source code and build instructions. Pock’s original attribution and MIT licence are preserved.",
        "È un’alpha sperimentale. Il progetto documenta verifiche su un MacBook Pro M1 con Touch Bar fisica; le altre configurazioni restano da verificare. Alcuni controlli dipendono da API private di macOS e possono risentire degli aggiornamenti del sistema. Il repository contiene il codice e le istruzioni di compilazione. Sono conservate le attribuzioni originali di Pock e la licenza MIT.",
      ),
    ],
    gallery: [
      {
        src: "/work/sway/touch-bar.png",
        width: 2008,
        height: 60,
        title: text("The controls on my Touch Bar", "I controlli sulla mia Touch Bar"),
        caption: text(
          "Sway running on the MacBook Pro Touch Bar, from the project’s README.",
          "Sway in esecuzione sulla Touch Bar del MacBook Pro, dal README del progetto.",
        ),
        body: [text(
          "Running apps sit on the left, date, battery and time in the centre, and system controls on the right. Tap and swipe adjust volume and brightness. Each group can be repositioned through the customisation window.",
          "Le app aperte sono a sinistra, data, batteria e ora al centro, i controlli di sistema a destra. Tap e swipe regolano volume e luminosità. Ogni gruppo si può riposizionare dalla finestra di personalizzazione.",
        )],
      },
    ],
  },
];
export const siteContent = {
  spotifyUrl: null as string | null,
  cv: {
    en: "/cv/giovanni-pernazza-en.pdf",
    it: "/cv/giovanni-pernazza-it.pdf",
  } as Record<Locale, string | null>,
};
export const personalPhotos = [
  {
    src: "/personal/climbing.webp",
    en: "Finding a way up.",
    it: "Cercando una via verso l’alto.",
    tag: "Mountains",
  },
  {
    src: "/personal/cycling-0661-v2.jpg",
    en: "A good day on two wheels.",
    it: "Una bella giornata su due ruote.",
    tag: "Cycling",
  },
  {
    src: "/personal/camp.webp",
    en: "A little further from the screen.",
    it: "Un po’ più lontano dallo schermo.",
    tag: "Outside",
  },
  {
    src: "/personal/hiking.webp",
    en: "Taking the long way home.",
    it: "Prendendo la strada più lunga.",
    tag: "Mountains",
  },
  {
    src: "/personal/mountains.webp",
    en: "Worth the climb.",
    it: "Vale la salita.",
    tag: "Mountains",
  },
  {
    src: "/personal/rome.webp",
    en: "Home, with a different view.",
    it: "Casa, da un altro punto di vista.",
    tag: "Running",
  },
];
export const getLocale = (value: string | string[] | undefined): Locale =>
  value === "it" ? "it" : "en";
export const localHref = (href: string, locale: Locale) =>
  `${href}?lang=${locale}`;
portfolioProjects.push(
  {
    slug: "garmin-watch-face",
    title: "Garmin Watch Face",
    category: "Wearable · Personal project",
    categoryIt: "Orologio · Progetto personale",
    color: "#94b39a",
    ink: "#203b29",
    cover: "watchface",
    images: ["/work/garmin-watchface.webp"],
    tools: ["Monkey C", "Connect IQ", "Garmin fēnix 7X", "MIP display"],
    summary: text(
      "A custom face for my fēnix 7X, with the fields and layout I use every day.",
      "Un quadrante per il mio fēnix 7X, con i campi e il layout che uso ogni giorno.",
    ),
    story: [
      {
        "en": "I built Personal Fenix Face to choose the fonts, layout and information on my Garmin fēnix 7X. It started from a watch face I already liked, adapted to the way I use the watch.",
        "it": "Ho costruito Personal Fenix Face per scegliere font, layout e informazioni sul mio Garmin fēnix 7X. Sono partito da un quadrante che mi piaceva già, adattandolo al mio modo di usare l’orologio."
      },
      {
        "en": "I used AI agents to implement it in Monkey C with Connect IQ. I directed the layout and interactions; I didn’t learn Monkey C during this project. The work focused on fitting readable fields into a round 280 × 280 MIP display.",
        "it": "Ho usato agenti AI per implementarlo in Monkey C con Connect IQ. Ho definito layout e interazioni; durante questo progetto non ho imparato Monkey C. Il lavoro si è concentrato su campi leggibili in un display MIP rotondo da 280 × 280 pixel."
      },
      {
        "en": "Fields and colours are configurable. Long presses open the associated Garmin app or change a metric. The face uses data already available on the watch, without starting GPS or streaming sensors.",
        "it": "Campi e colori sono configurabili. La pressione prolungata apre l’app Garmin associata o cambia una metrica. Il quadrante usa i dati già disponibili sull’orologio, senza avviare GPS o sensori in streaming."
      },
      {
        "en": "After about a day of work, I installed it on my watch. As of October 2026, I use it daily. The image here is from the simulator. I’d like to share the project so others can adapt it.",
        "it": "Dopo circa un giorno di lavoro l’ho installato sull’orologio. A ottobre 2026 lo uso ogni giorno. L’immagine qui viene dal simulatore. Vorrei condividere il progetto per permettere ad altri di adattarlo."
      }
    ],
  },
  {
    "slug": "edgeworks",
    "title": "Edgeworks",
    "category": "Freelance · Software & AI",
    categoryIt: "Freelance · Software e AI",
    "color": "#7da8d8",
    "ink": "#163650",
    "cover": "edgeworks",
    "images": [
      "/hiresight/home.png",
      "/work/timesheet-reports.webp"
    ],
    "website": "https://www.edgeworks.it/",
    "tools": [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Supabase",
      "Recharts",
      "LLMs",
      "RAG"
    ],
    "summary": {
      "en": "Time tracking, CV analysis and an email-drafting prototype built with Edgeworks.",
      "it": "Registrazione delle ore, analisi dei CV e un prototipo per le bozze email, sviluppati con Edgeworks."
    },
    "story": [
      {
        "en": "I worked with Edgeworks on Time Tracker, HireSight and the first Mora MVP. Salvatore Iannola, a senior software engineer and one of the company’s administrators, gave direction and reviewed my work as we tested product ideas.",
        "it": "Ho lavorato con Edgeworks su Time Tracker, HireSight e il primo MVP di Mora. Salvatore Iannola, senior software engineer e uno degli amministratori dell’azienda, mi dava indicazioni e rivedeva il lavoro mentre sperimentavamo idee di prodotto."
      },
      {
        "en": "Time Tracker records hours and prepares reports. HireSight organises CVs and uses AI to support candidate analysis. Mora explored classifying incoming email and preparing draft replies from company information.",
        "it": "Time Tracker registra le ore e prepara report. HireSight organizza i CV e usa l’AI per supportare l’analisi dei candidati. Mora sperimentava la classificazione delle email in arrivo e la preparazione di bozze basate sulle informazioni aziendali."
      },
      {
        "en": "As of October 2026, Time Tracker is still in use. Edgeworks also used HireSight internally and showed it to interested clients. My contribution to Mora was limited to the early prototype. Working with Salvatore gave me a place to test decisions and revise them with an experienced engineer.",
        "it": "A ottobre 2026 Time Tracker è ancora utilizzato. Edgeworks ha usato anche HireSight internamente e lo ha mostrato a clienti interessati. Il mio contributo a Mora riguarda il primo prototipo. Il confronto con Salvatore mi ha permesso di verificare le scelte e rivederle con un ingegnere esperto."
      }
    ],
    "chapters": [
      {
        "id": "timesheet",
        "title": {
          "en": "Time Tracker: recording hours",
          "it": "Time Tracker: registrare le ore"
        },
        "body": [
          {
            "en": "At Marsilea, I’d built a time-tracking tool with Google Sheets and Apps Script. That workflow was frustrating to maintain. When Edgeworks needed to record hours too, we built a separate application.",
            "it": "Per Marsilea avevo costruito uno strumento per le ore con Google Sheets e Apps Script. Quel flusso era frustrante da gestire. Quando anche Edgeworks ha avuto bisogno di registrare le ore, abbiamo costruito un’applicazione dedicata."
          }
        ],
        "image": {
          "src": "/work/timesheet-reports.webp",
          "width": 1660,
          "height": 1146,
          "caption": {
            "en": "Time Tracker · Reports and overview",
            "it": "Time Tracker · Report e panoramica"
          }
        }
      },
      {
        "id": "timesheet-2",
        "title": {
          "en": "Projects, clients and reports",
          "it": "Progetti, clienti e report"
        },
        "body": [
          {
            "en": "I worked on an interface for phones and desktops with Next.js, React and TypeScript. Supabase stores the records, and Recharts displays the charts. Time entries, projects and clients feed into reports with Excel exports.",
            "it": "Ho lavorato a un’interfaccia per telefono e desktop con Next.js, React e TypeScript. Supabase conserva i dati e Recharts mostra i grafici. Registrazioni delle ore, progetti e clienti alimentano i report, esportabili in Excel."
          }
        ],
        "image": {
          "src": "/work/timesheet-dashboard.webp",
          "width": 1682,
          "height": 1672,
          "caption": {
            "en": "Time Tracker · Dashboard",
            "it": "Time Tracker · Dashboard"
          }
        }
      },
      {
        "id": "timesheet-3",
        "title": {
          "en": "Replacing the spreadsheet workflow",
          "it": "Sostituire il flusso del foglio di calcolo"
        },
        "body": [
          {
            "en": "Dedicated forms and database operations gave us more control over entries than the spreadsheet had. As of October 2026, Time Tracker is still in use. That continued use is the result I value most from the collaboration.",
            "it": "Moduli e operazioni dedicate sul database ci hanno dato più controllo sulle registrazioni rispetto al foglio di calcolo. A ottobre 2026 Time Tracker è ancora utilizzato. È il risultato della collaborazione a cui tengo di più."
          }
        ],
        "image": {
          "src": "/work/timesheet-calendar.webp",
          "width": 1672,
          "height": 1116,
          "caption": {
            "en": "Time Tracker · Calendar",
            "it": "Time Tracker · Calendario"
          }
        },
        "links": [
          {
            "label": {
              "en": "Time Tracker on Edgeworks",
              "it": "Time Tracker sul sito Edgeworks"
            },
            "href": "https://www.edgeworks.it/products_timetracker.php"
          },
          {
            "label": {
              "en": "Source code",
              "it": "Codice sorgente"
            },
            "href": "https://github.com/salvatoreiannola72/timetracker"
          }
        ]
      },
      {
        "id": "hiresight",
        "title": {
          "en": "HireSight: organising CVs",
          "it": "HireSight: organizzare i CV"
        },
        "body": [
          {
            "en": "I helped build HireSight so HR could receive and organise CVs, with an overview of candidates and employees. AI-assisted analysis supports reviewing those records.",
            "it": "Ho contribuito a costruire HireSight perché HR potesse ricevere e organizzare i CV, con una panoramica di candidati e dipendenti. L’analisi assistita dall’AI supporta la consultazione dei dati."
          }
        ],
        "image": {
          "src": "/hiresight/home.png",
          "width": 1908,
          "height": 1038,
          "caption": {
            "en": "HireSight · Overview",
            "it": "HireSight · Panoramica"
          }
        }
      },
      {
        "id": "hiresight-2",
        "title": {
          "en": "The application and its data",
          "it": "L’applicazione e i dati"
        },
        "body": [
          {
            "en": "The application uses React and TypeScript for the interface, Python for processing and Supabase for data. My work with Edgeworks helped connect those parts.",
            "it": "L’applicazione usa React e TypeScript per l’interfaccia, Python per l’elaborazione e Supabase per i dati. Il mio lavoro con Edgeworks ha contribuito a collegare queste parti."
          }
        ],
        "image": {
          "src": "/work/hiresight-live.jpg",
          "width": 1280,
          "height": 720,
          "caption": {
            "en": "HireSight · Sign-in to the application",
            "it": "HireSight · Accesso all’applicazione"
          }
        }
      },
      {
        "id": "hiresight-3",
        "title": {
          "en": "Job positions",
          "it": "Posizioni aperte"
        },
        "body": [
          {
            "en": "Recruiters can organise job positions alongside candidates. This gives CV analysis a specific role to compare against.",
            "it": "Chi si occupa di selezione può organizzare posizioni aperte e candidati. L’analisi dei CV ha così un ruolo specifico con cui confrontarsi."
          }
        ],
        "image": {
          "src": "/hiresight/posizioni.png",
          "width": 1908,
          "height": 1038,
          "caption": {
            "en": "HireSight · Job positions",
            "it": "HireSight · Posizioni aperte"
          }
        }
      },
      {
        "id": "hiresight-4",
        "title": {
          "en": "CVs and available skills",
          "it": "CV e competenze disponibili"
        },
        "body": [
          {
            "en": "The shared database brings CVs and skills together to help prepare interviews and identify capabilities for different projects.",
            "it": "Il database condiviso riunisce CV e competenze per aiutare a preparare i colloqui e individuare capacità utili ai diversi progetti."
          }
        ],
        "image": {
          "src": "/hiresight/candidati.png",
          "width": 1908,
          "height": 1038,
          "caption": {
            "en": "HireSight · Candidates",
            "it": "HireSight · Candidati"
          }
        }
      },
      {
        "id": "hiresight-5",
        "title": {
          "en": "Reviewing candidate matches",
          "it": "Consultare le corrispondenze dei candidati"
        },
        "body": [
          {
            "en": "Candidate details include match scores and their reasoning, so recruiters can review what the analysis is based on. Edgeworks has used HireSight internally and shown it to interested clients.",
            "it": "I dettagli dei candidati includono punteggi di corrispondenza e motivazioni, così chi seleziona può esaminare le basi dell’analisi. Edgeworks ha utilizzato HireSight internamente e lo ha mostrato a clienti interessati."
          }
        ],
        "image": {
          "src": "/hiresight/dettaglio_candidato.png",
          "width": 1908,
          "height": 1038,
          "caption": {
            "en": "HireSight · Candidate details and analysis",
            "it": "HireSight · Dettaglio e analisi del candidato"
          }
        },
        "links": [
          {
            "label": {
              "en": "Explore HireSight",
              "it": "Esplora HireSight"
            },
            "href": "https://hiresight-cv.vercel.app"
          },
          {
            "label": {
              "en": "Source code",
              "it": "Codice sorgente"
            },
            "href": "https://github.com/nannipy/hiresight"
          }
        ]
      },
      {
        "id": "mora",
        "title": {
          "en": "Mora: an early email prototype",
          "it": "Mora: un primo prototipo per le email"
        },
        "body": [
          {
            "en": "I worked on Mora’s first MVP to classify incoming emails and prepare draft replies. A small retrieval system brought relevant company information into the language model’s context. The output was a draft to review.",
            "it": "Ho lavorato al primo MVP di Mora per classificare le email in arrivo e preparare bozze di risposta. Un piccolo sistema di recupero portava le informazioni aziendali pertinenti nel contesto del modello linguistico. Il risultato era una bozza da rivedere."
          },
          {
            "en": "We explored recurring enquiries, requests for estimates and spam classification, along with switching models according to costs and requirements. My contribution was an initial experiment; Edgeworks’ product page describes the wider workflow.",
            "it": "Abbiamo sperimentato richieste ricorrenti, preventivi e classificazione dello spam, oltre alla scelta dei modelli in base a costi ed esigenze. Il mio contributo è stato un esperimento iniziale; la pagina del prodotto di Edgeworks descrive il flusso più ampio."
          }
        ],
        "links": [
          {
            "label": {
              "en": "Mora on Edgeworks",
              "it": "Mora sul sito Edgeworks"
            },
            "href": "https://www.edgeworks.it/products_mora.php"
          }
        ]
      }
    ]
  },
);

// Prioritise client work, then the broader engineering projects and personal tools.
const projectRelevance = [
  "recup", "sapienza-foiling-team", "edgeworks", "homelab", "edocla", "aesculapius", "garmin-watch-face",
  "ollapy", "vector", "pomodoro-go", "sway", "removebackground",
];
const relevanceRank = new Map(projectRelevance.map((slug, index) => [slug, index]));
portfolioProjects.sort((a, b) =>
  (relevanceRank.get(a.slug) ?? projectRelevance.length) -
  (relevanceRank.get(b.slug) ?? projectRelevance.length),
);

const sftStory = portfolioProjects.find(
  (project) => project.slug === "sapienza-foiling-team",
)!;
export const homeMediaGallery: GalleryMedia[] = [
  ...personalPhotos.map((photo) => ({
    src: photo.src,
    width: 1200,
    height: 900,
    caption: { en: photo.en, it: photo.it },
  })),
  {
    src: "/work/garda-team.webp",
    width: 1024,
    height: 683,
    caption: text(
      "Our team, our boat. Lake Garda.",
      "Il nostro team, la nostra barca. Lago di Garda.",
    ),
    credit: "Alessandro Cazzulani · SuMoth Challenge 2026",
  },
  ...(sftStory.chapters || []).filter((chapter) => chapter.image?.src.startsWith("/work/garda-") || chapter.video).flatMap((chapter) => {
    const items: GalleryMedia[] = [];
    if (chapter.video)
      items.push({ ...chapter.video, width: 540, height: 960 });
    if (chapter.image) items.push(chapter.image);
    return items;
  }),
  ...(sftStory.gallery || []),
];
