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
    "color": "#b53c4a",
    "ink": "#fff1e6",
    "website": "https://sapienzafoilingteam.com",
    "github": "https://github.com/nannipy/sapienzafoilingteam",
    "images": [
      "/work/sft-live.jpg",
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
      "en": "From the first website to the boat’s electronics. A team we built together.",
      "it": "Dal primo sito all’elettronica della barca. Un team costruito insieme."
    },
    "story": [
      {
        "en": "This started with a close friend, Federico Romeo, a physicist who discovered the SuMoth Challenge. Seeing universities from Europe and beyond take part, he could not believe that Sapienza, with so many students, had no team in the competition. We decided to try. At first, there was only an idea and a group of people who wanted to turn it into a boat.",
        "it": "Tutto è iniziato da un mio caro amico, Federico Romeo, un fisico che aveva scoperto la SuMoth Challenge. Vedendo partecipare università da tutta Europa e dal resto del mondo, gli sembrava impossibile che la Sapienza, con così tanti studenti, non avesse un team in gara. Abbiamo deciso di provarci. All’inizio c’erano soltanto un’idea e un gruppo di persone che volevano trasformarla in una barca."
      },
      {
        "en": "Until then, I had studied without putting much into practice. I saw other people building things and wanted to join in, get my hands on a real project and find out whether I enjoyed it. I offered to build the website and helped with whatever else needed doing. Over time, that grew into telemetry, electronics, communication and management. For the 2026–2027 season, I am also coordinating a small group working on software and electronics.",
        "it": "Fino ad allora avevo studiato senza mettere davvero in pratica quello che imparavo. Vedevo altre persone costruire cose e volevo farne parte: mettere mano a un progetto vero e capire se mi piaceva. Ho proposto di realizzare il sito e ho aiutato con le mille altre cose che servivano. Nel tempo mi sono ritrovato a occuparmi anche di telemetria, elettronica, comunicazione e management. Per la stagione 2026–2027 seguo anche un piccolo gruppo di informatici ed elettronici."
      },
      {
        "en": "It is a sustained collaboration, with responsibility for both the technical work and the team’s organisation. I am happy to be part of it and proud of the effort we have put in. Building a team and a boat this ambitious has required time, persistence and people willing to learn together. Seeing what we have made keeps me committed to the next step.",
        "it": "È una collaborazione continuativa, con responsabilità sul lavoro tecnico e sull’organizzazione del team. Sono felice di farne parte e orgoglioso dell’impegno che ci abbiamo messo. Costruire un team e una barca così ambiziosi ha richiesto tempo, costanza e persone disposte a imparare insieme. Vedere quello che abbiamo realizzato mi dà voglia di continuare a impegnarmi per il passo successivo."
      }
    ],
    "cover": "team",
    "chapters": [
      {
        "title": {
          "en": "An idea from a friend. Everything to build.",
          "it": "L’idea di un amico. Tutto da costruire."
        },
        "body": [
          {
            "en": "Federico’s idea gave us a starting point, but there was no infrastructure behind it yet. We had to bring people together, organise the work, and find the materials and components we needed. Help came from friends and from people we had never met. Building the team was part of building the boat.",
            "it": "L’idea di Federico ci aveva dato un punto di partenza, ma dietro non esisteva ancora nessuna infrastruttura. Bisognava raccogliere persone, organizzare il lavoro e trovare i materiali e i componenti necessari. Sono arrivati aiuti da amici e da persone che non conoscevamo. Costruire il team faceva parte del costruire la barca."
          },
          {
            "en": "The competition set our deadlines. We held meetings to organise the work, exchange ideas and divide responsibilities among ourselves. There was a lot to learn, but also a date by which the work had to be ready. The pace also depended on the time we could devote to the project and the opportunities we had to test it.",
            "it": "Le scadenze arrivavano soprattutto dalla gara. Facevamo riunioni per organizzare il lavoro, incontrarci e scambiarci idee; ci assegnavamo i compiti e dividevamo quello che c’era da fare. C’era tanto da imparare, ma anche una data entro cui il lavoro doveva essere pronto. Il ritmo dipendeva anche dal tempo che riuscivamo a dedicarci e dalle occasioni per fare le prove."
          }
        ]
      },
      {
        "title": {
          "en": "The people who made room for us.",
          "it": "Le persone che ci hanno fatto spazio."
        },
        "body": [
          {
            "en": "Michele Saponara and Fluido Design were fundamental to making the boat possible. Michele made the boatyard and its tools available to us. For a group starting with nothing, having a place and the equipment to build was an enormous contribution. That generosity is part of the story as much as anything we made ourselves.",
            "it": "Michele Saponara e Fluido Design sono stati fondamentali per rendere possibile la barca. Michele ci ha messo a disposizione il cantiere e gli strumenti per costruirla. Per un gruppo che partiva da zero, avere uno spazio e le attrezzature con cui lavorare è stato un aiuto enorme. Quella generosità fa parte della storia quanto tutto quello che abbiamo costruito noi."
          }
        ]
      },
      {
        "title": {
          "en": "The first thing I built was the website.",
          "it": "La prima cosa che ho costruito è stata il sito."
        },
        "body": [
          {
            "en": "I proposed the website because we needed an identity. Other teams had one; we had an idea, but no boat, no images and little to show yet. The first site was a way to start giving that idea a shape, even before there was much to put on its pages.",
            "it": "Ho proposto io di fare il sito perché ci serviva un’identità. Gli altri team ne avevano uno; noi avevamo un’idea, ma nessuna barca, nessuna immagine e ancora poco da mostrare. Il primo sito serviva a cominciare a dare una forma al progetto, prima ancora di avere contenuti con cui riempirlo."
          },
          {
            "en": "I did not know how to build a website, so I learned by trying, making mistakes and trying again. The early versions were rough and painfully slow, with heavy images that took too long to load. React and Next.js became tools I learned through a real need. As the team progressed, the pages finally filled with people, work and a boat we had built. Seeing that change is incredibly satisfying.",
            "it": "Non sapevo come si costruisse un sito, quindi ho imparato per tentativi, sbagliando e riprovando. Le prime versioni erano acerbe e lentissime, con immagini pesantissime che impiegavano troppo a caricarsi. React e Next.js sono diventati strumenti da imparare attraverso una necessità reale. Mentre il team cresceva, le pagine si sono finalmente riempite di persone, lavoro e di una barca costruita da noi. Vedere questo cambiamento è una soddisfazione incredibile."
          },
          {
            "en": "My starting point was the HTML, CSS and JavaScript I had learned at university. I had also tried Ruby on Rails, but it did not feel like the right fit for me. Discovering React and Next.js gave me an approach I enjoyed studying in depth. After two years of building and maintaining the site, I can understand how its components, APIs, backend, frontend and rendering fit together, and how those choices affect performance. There is still plenty to learn.",
            "it": "Partivo dall’HTML, dal CSS e dal JavaScript studiati all’università. Avevo provato anche Ruby on Rails, ma non mi trovavo con quel modo di lavorare. Scoprire React e Next.js mi ha dato un approccio che avevo voglia di studiare a fondo. Dopo due anni di sviluppo e gestione del sito, riesco a orientarmi tra componenti, API, backend, frontend e rendering, e a capire come queste scelte influiscano sulle prestazioni. Ho ancora tante cose da scoprire."
          }
        ],
        "image": {
          "src": "/work/sft-live.jpg",
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
          "en": "Learning when to keep it simple.",
          "it": "Imparare quando tenere le cose semplici."
        },
        "body": [
          {
            "en": "The slow first versions made performance a concrete problem. I gradually learned to pay attention to image weight and loading, and to question what each visual effect added to the site. Improving it meant returning to mistakes I could now recognise and understand.",
            "it": "Le prime versioni lente hanno reso le prestazioni un problema concreto. Col tempo ho imparato a fare attenzione al peso delle immagini e al caricamento, e a chiedermi cosa aggiungesse davvero ogni effetto visivo. Migliorare il sito significava tornare su errori che ora riuscivo a riconoscere e capire."
          },
          {
            "en": "The first design was rough. It has improved, but I still see plenty of room to make it better. Working with other people, listening to feedback and revisiting the choices is part of the learning. The blog gives that work a purpose: helping the team tell what it is building.",
            "it": "Il primo design era decisamente acerbo. È migliorato, ma vedo ancora molto spazio per renderlo più efficace. Collaborare con altre persone, ascoltare i feedback e rivedere le scelte fa parte dell’apprendimento. Il blog dà a questo lavoro uno scopo: aiutare il team a raccontare quello che sta costruendo."
          }
        ],
        "image": {
          "src": "/SFT/SFT_blog.png",
          "width": 2824,
          "height": 2102,
          "caption": {
            "en": "The website’s blog and team stories.",
            "it": "Il blog del sito e i racconti del team."
          }
        }
      },
      {
        "title": {
          "en": "From a website to tools for the team.",
          "it": "Dal sito agli strumenti per il team."
        },
        "body": [
          {
            "en": "As the site grew, I built a backend and a private administration area for the communication team. They can now update the site’s content themselves, without every change having to go through me. Something I had initially built to learn became a tool other people could use independently.",
            "it": "Con la crescita del sito ho realizzato anche un backend e un’area riservata per il team di comunicazione. Ora possono aggiornare i contenuti in autonomia, senza dover passare da me per ogni modifica. Quello che avevo iniziato per imparare è diventato uno strumento che altre persone possono usare da sole."
          },
          {
            "en": "My role grew with those needs: from the website to telemetry and electronics, then communication, organisation and coordinating a small software and electronics team. Each new responsibility came from something the group needed to move forward.",
            "it": "Il mio ruolo è cresciuto insieme a queste necessità: dal sito alla telemetria e all’elettronica, poi alla comunicazione, all’organizzazione e al coordinamento di un piccolo team di informatici ed elettronici. Ogni nuova responsabilità è nata da qualcosa che serviva al gruppo per andare avanti."
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
          "en": "A shared workspace for the next season.",
          "it": "Uno spazio condiviso per la nuova stagione."
        },
        "body": [
          {
            "en": "For the 2026–2027 season, I also built the team’s CRM with Next.js, React and Supabase. It is a new project, intended to become our main workspace for commitments, deadlines, internal files and presentations. The public website tells our story; the CRM will help us organise the work behind it.",
            "it": "Per la stagione 2026–2027 ho realizzato anche il CRM del team con Next.js, React e Supabase. È un progetto appena nato, che utilizzeremo come base principale per organizzare impegni, scadenze, file interni e presentazioni. Il sito pubblico racconta il nostro percorso; il CRM ci aiuterà a organizzare il lavoro che c’è dietro."
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
          "en": "Making the boat’s movement visible.",
          "it": "Dare una forma al movimento della barca."
        },
        "body": [
          {
            "en": "I moved into electronics because the team needed it and I wanted to experiment. I had always wanted to tinker with hardware, even though I had little experience. Taking that first step introduced me to a physical side of building that I had barely explored, and made me want to try more projects.",
            "it": "Sono passato all’elettronica perché serviva al team e mi piaceva l’idea di sperimentare. Avevo sempre sognato di smanettare con l’hardware, anche se avevo pochissima esperienza. Buttarmi in questo lavoro mi ha aperto una parte fisica del costruire che conoscevo appena e mi ha fatto venire voglia di provare altri progetti."
          },
          {
            "en": "Working alongside Francesco Miletto made a huge difference. He also belongs to Sapienza Gladiators, the university’s motorcycle team, and brought experience I did not have. We chose the components and designed the PCB together, then worked through assembly and soldering. Having someone experienced beside me helped me learn far more than I could have done alone.",
            "it": "Lavorare accanto a Francesco Miletto ha fatto una differenza enorme. Fa parte anche di Sapienza Gladiators, il team della Sapienza dedicato alle moto, e aveva un’esperienza che a me mancava. Abbiamo scelto insieme i componenti e progettato la PCB, fino all’assemblaggio e alla saldatura. Avere accanto una persona esperta mi ha aiutato a imparare molto più di quanto avrei potuto fare da solo."
          },
          {
            "en": "The aim was to record the boat’s position, speed, acceleration and movement with a compact system. We chose an ESP32-S3, a GPS module, a Pololu MinIMU-9 v5 with accelerometer, gyroscope and magnetometer, and a microSD reader for storing the data, powered by a battery intended for small FPV drones. The system is designed to sit inside a waterproof enclosure, so the electronics can stay dry aboard the boat.",
            "it": "L’obiettivo era registrare posizione, velocità, accelerazione e movimenti della barca con un sistema compatto. Abbiamo scelto un ESP32-S3, un modulo GPS, una Pololu MinIMU-9 v5 con accelerometro, giroscopio e magnetometro e un lettore microSD per salvare i dati, alimentati da una batteria per piccoli droni FPV. Il sistema è pensato per stare dentro una scatola impermeabile, così da proteggere l’elettronica dall’acqua a bordo."
          },
          {
            "en": "That started on a table, with computers, cables and sensors. Before designing a finished board, I had to make the individual parts communicate and understand what they were telling me. The photograph captures that stage: the project spread across a workbench, while software and electronics began to meet.",
            "it": "Tutto è iniziato su un tavolo, tra computer, cavi e sensori. Prima di pensare a una scheda finita, dovevo far comunicare i singoli componenti e capire cosa mi stavano dicendo. La foto racconta quella fase: il progetto sparso sul banco di lavoro, mentre software ed elettronica cominciavano a incontrarsi."
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
          "en": "From loose wires to a boat on screen.",
          "it": "Dai fili a una barca sullo schermo."
        },
        "body": [
          {
            "en": "On the workbench, the electronics sit next to a browser displaying the boat’s orientation. The ESP32-S3 reads an inertial sensor and GPS. The firmware combines sensor readings to estimate roll, pitch and yaw; a bridge then sends that information to the web visualiser.",
            "it": "Sul banco di lavoro, l’elettronica è accanto al browser che mostra l’assetto della barca. L’ESP32-S3 legge un sensore inerziale e il GPS. Il firmware combina le misure per stimare rollio, beccheggio e imbardata; un bridge porta poi queste informazioni al visualizzatore web."
          },
          {
            "en": "For me, the important step was connecting both ends: a physical board and a model I could inspect on screen. It gave the code a visible consequence. The bench prototype made that connection tangible: moving from readings in a program to an object whose orientation I could see.",
            "it": "Per me, il passaggio importante è stato collegare le due estremità: una scheda fisica e un modello che potevo osservare sullo schermo. Il codice aveva una conseguenza visibile. Il prototipo al banco ha reso concreto quel collegamento: dalle letture dentro un programma a un oggetto di cui potevo vedere l’orientamento."
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
          "en": "Giving the electronics a structure.",
          "it": "Dare una struttura all’elettronica."
        },
        "body": [
          {
            "en": "We chose the components together, while Francesco handled the PCB design software. We had the boards manufactured by JLCPCB and shipped from China. Once they arrived, the design had to become something physical: soldering, assembling and checking whether the connections worked as intended.",
            "it": "Abbiamo scelto insieme i componenti, mentre Francesco ha seguito il disegno della PCB nel software di progettazione. Abbiamo fatto produrre le schede da JLCPCB e spedire dalla Cina. Quando sono arrivate, il disegno doveva diventare qualcosa di fisico: saldare, assemblare e controllare se i collegamenti funzionavano come previsto."
          },
          {
            "en": "A wired prototype is useful for trying things out, but it also makes every connection part of the experiment. The circuit boards represent the next step: moving towards a more organised assembly, with a place for the modules and their connections.",
            "it": "Un prototipo cablato serve a provare le cose, ma rende ogni collegamento parte dell’esperimento. I circuiti stampati raccontano il passo successivo: andare verso un assemblaggio più ordinato, con uno spazio per i moduli e per le loro connessioni."
          },
          {
            "en": "It is a different kind of design from building a web page. The result has dimensions, connectors and components that have to work together in the real world. That is one of the things I enjoy most about this project: software keeps bringing me back to the physical object.",
            "it": "È un tipo di progettazione diverso dal costruire una pagina web. Il risultato ha dimensioni, connettori e componenti che devono lavorare insieme nel mondo reale. È una delle cose che mi piacciono di più di questo progetto: il software mi riporta continuamente all’oggetto fisico."
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
          "en": "The parts, finally together.",
          "it": "I pezzi, finalmente insieme."
        },
        "body": [
          {
            "en": "Here the modules are assembled on the board. The microcontroller, inertial sensing and GPS are now parts of one object, instead of separate elements on the table. Seeing that progression matters to me as much as seeing the visualiser respond.",
            "it": "Qui i moduli sono assemblati sulla scheda. Il microcontrollore, i sensori inerziali e il GPS diventano parti di un unico oggetto, invece di elementi separati sul tavolo. Vedere questo percorso conta per me quanto vedere il visualizzatore rispondere."
          },
          {
            "en": "Making the readings meaningful and the system dependable also means checking sensor behaviour, calibrating, understanding missing or noisy data, and testing each step. A moving model is a useful milestone; building confidence in what it shows takes more work.",
            "it": "Rendere le letture comprensibili e il sistema affidabile significa anche controllare il comportamento dei sensori, calibrare, capire i dati mancanti o rumorosi e verificare ogni passaggio. Un modello che si muove è un traguardo utile; poter avere fiducia in ciò che mostra richiede altro lavoro."
          },
          {
            "en": "The hardest part was intermittent behaviour: connections that seemed fine, a system that worked one moment and failed the next in apparently identical conditions. It took repeated attempts and checks to understand what was happening and find a setup that worked consistently. With hardware, writing the code was only part of the work.",
            "it": "La difficoltà più grande era il comportamento intermittente: contatti che sembravano a posto, un sistema che funzionava e poi smetteva, in condizioni apparentemente identiche. Servivano prove e controlli ripetuti per capire cosa stesse succedendo e trovare una configurazione che funzionasse con continuità. Con l’hardware, scrivere il codice era soltanto una parte del lavoro."
          },
          {
            "en": "As of October 2026, the telemetry system has not yet been tested on the water. The boat was launched too late for us to fit those trials in. Testing is continuing this autumn; validating the electronics aboard the boat remains a step ahead of us.",
            "it": "A ottobre 2026 il sistema di telemetria non è ancora stato provato in acqua. Il varo della barca è arrivato troppo tardi per riuscire a fare anche quelle prove. I test stanno proseguendo questo autunno; verificare il funzionamento dell’elettronica a bordo resta un passaggio da affrontare."
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
          "en": "Explaining what we were building.",
          "it": "Raccontare quello che stavamo costruendo."
        },
        "body": [
          {
            "en": "Holding the board and explaining it brings the project back to the people around it. I can talk about sensors and firmware, but the reason they are there is the boat, the team and the experience we shared.",
            "it": "Prendere in mano la scheda e spiegarla riporta il progetto alle persone che gli stanno intorno. Posso parlare di sensori e firmware, ma il motivo per cui esistono è la barca, il team e l’esperienza che abbiamo condiviso."
          },
          {
            "en": "That connection is what I want to remember here: the first experiments on a table, the electronics coming together, and the boat we took to Garda. The technical work and the human story belong to the same project.",
            "it": "È questo collegamento che voglio lasciare qui: le prime prove su un tavolo, l’elettronica che prende forma e la barca che abbiamo portato al Garda. Il lavoro tecnico e la storia delle persone appartengono allo stesso progetto."
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
          "en": "An idea taking shape.",
          "it": "Un’idea che prende forma."
        },
        "body": [
          {
            "en": "October 2024. We set out to build a single-handed foiling Moth from scratch. With Sapienza Foiling Team, an idea became something we had to find a way to make real: a hull, a sail, the ability to rise out of the water. Each stage brought something new to learn and solve together. We had a fantastic group of people.",
            "it": "Ottobre 2024. Ci siamo messi in testa di costruire da zero un Moth monoposto capace di volare sui foil. Con il Sapienza Foiling Team, un’idea è diventata qualcosa a cui dovevamo trovare il modo di dare forma: uno scafo, una vela, la possibilità di sollevarsi dall’acqua. Ogni passaggio portava qualcosa di nuovo da imparare e risolvere insieme. Avevamo un gruppo fantastico."
          },
          {
            "en": "Looking at this photo, I see more than a finished boat. I see everything it took to get it there. And the people who made it possible.",
            "it": "Quando guardo questa foto, non vedo soltanto una barca finita. Vedo tutto quello che è servito per portarla fin lì. E le persone che l’hanno reso possibile."
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
          "en": "Then our boat flew.",
          "it": "Poi la nostra barca ha volato."
        },
        "body": [
          {
            "en": "We brought it to Lake Garda. Our boat, the one we had built ourselves, was finally on the water. Then it foiled. There is something difficult to put into words about seeing an idea leave the workshop and lift off the surface of a lake. All the difficulties were still part of the story. But now, so was that moment.",
            "it": "L’abbiamo portata al Lago di Garda. La nostra barca, quella che avevamo costruito noi, era finalmente in acqua. Poi ha volato. C’è qualcosa di difficile da spiegare nel vedere un’idea uscire dal lavoro di costruzione e sollevarsi dalla superficie di un lago. Tutte le difficoltà facevano ancora parte della storia. Ma adesso c’era anche quel momento."
          }
        ],
        "video": {
          "src": "/work/garda-flight.mp4",
          "poster": "/work/garda-flight-poster.webp",
          "caption": {
            "en": "Our very first flight! Turn the sound on: that’s me yelling with excitement. Then comes the crash… all part of learning to foil. Nothing to worry about, hahaha!",
            "it": "Il nostro primissimo volo! Alza il volume: quello che urla dall’emozione sono io. Poi si schianta… ma fa parte del gioco quando impari a volare sui foil. Niente paura, ahahah!"
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
          "en": "Broken. Back on the water in 24 hours.",
          "it": "Si è rotta. Dopo 24 ore era di nuovo in acqua."
        },
        "body": [
          {
            "en": "Then a part broke. After everything it had taken to get there, we were suddenly faced with another problem to solve. We rebuilt the part from scratch, using iron bars from local hardware shops and welding them together. Those legendary hardware shops became part of our project, too.",
            "it": "Poi si è rotto un pezzo. Dopo tutto quello che era servito per arrivare fin lì, ci siamo ritrovati davanti a un altro problema da risolvere. Abbiamo ricostruito il pezzo da capo, con le spranghe di ferro delle ferramenta e le saldature. Quelle ferramenta mitiche sono entrate a far parte del nostro progetto anche loro."
          },
          {
            "en": "Twenty-four hours later, we put the boat back on the water. That return means as much to me as the first flight. Because I know what stood between the two: a broken part, a repair to work out, and a team that found a way together.",
            "it": "Ventiquattro ore dopo, abbiamo rimesso la barca in acqua. Quel ritorno, per me, vale quanto il primo volo. Perché so cosa c’è stato in mezzo: un pezzo rotto, una riparazione da inventare e un team che, insieme, ha trovato il modo."
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
          "en": "Competing. Helping each other.",
          "it": "In competizione. Dalla stessa parte."
        },
        "body": [
          {
            "en": "Around us were students from Cagliari, Munich, Southampton, Milan, Trieste and across Europe. Different teams, different boats, the same desire to build something and see it sail. We competed on sustainable sailing and foiling, and we helped one another. That combination made the experience extraordinary.",
            "it": "Intorno a noi c’erano studenti da Cagliari, Monaco, Southampton, Milano, Trieste e da tutta Europa. Team diversi, barche diverse, la stessa voglia di costruire qualcosa e vederlo navigare. Ci sfidavamo sulla sostenibilità delle barche a vela e sul foiling, e ci aiutavamo. Questa combinazione ha reso l’esperienza straordinaria."
          },
          {
            "en": "I came away with the memory of the boat, but also of how generous and welcoming everyone was. The competition brought us there. The people are a reason I will remember it.",
            "it": "Mi è rimasto il ricordo della barca, ma anche della disponibilità e della simpatia di tutte quelle persone. La competizione ci ha portati lì. Le persone sono uno dei motivi per cui me lo ricorderò."
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
          "en": "A boat. And everything it brought us.",
          "it": "Una barca. E tutto quello che ci ha dato."
        },
        "body": [
          {
            "en": "I am proud of the boat we built. I am just as proud to be part of the team that built it, repaired it and got it back on the water. My telemetry work belongs to that story: code and sensors, inside something much bigger that we made together.",
            "it": "Sono orgoglioso della barca che abbiamo costruito. E sono altrettanto orgoglioso di far parte del team che l’ha costruita, riparata e rimessa in acqua. Il mio lavoro sulla telemetria appartiene a questa storia: codice e sensori, dentro qualcosa di molto più grande che abbiamo fatto insieme."
          }
        ]
      },
      {
        "title": {
          "en": "A commitment I am happy to keep making.",
          "it": "Un impegno che sono felice di portare avanti."
        },
        "body": [
          {
            "en": "I started with a website to learn, and found myself helping build a team, leading electronics work and taking a boat to Garda. I am proud of that path because I know how much effort it took, and how much of it belongs to the people around me. There is still a lot to improve; being part of that work is something that makes me happy.",
            "it": "Sono partito da un sito per imparare e mi sono ritrovato a contribuire alla costruzione di un team, gestire il lavoro sull’elettronica e portare una barca al Garda. Sono orgoglioso di questo percorso perché so quanto impegno ha richiesto e quanto di quel risultato appartenga alle persone intorno a me. C’è ancora molto da migliorare; far parte di questo lavoro è una cosa che mi rende felice."
          },
          {
            "en": "Balancing this with university did not go particularly well: I devoted a lot of time to the team, and my studies felt that cost. I still think it was worth it. Building and maintaining something real for two years taught me an enormous amount and helped me understand what I enjoy doing.",
            "it": "Conciliare tutto questo con l’università non mi è riuscito particolarmente bene: ho dedicato molto tempo al team e lo studio ne ha risentito. Penso comunque che ne sia valsa la pena. Costruire e mantenere qualcosa di reale per due anni mi ha dato tantissimo e mi ha aiutato a capire cosa mi piace fare."
          }
        ]
      }
    ],
    "technicalImage": "/work/telemetry-local.jpg"
  },
  {
    slug: "recup",
    title: "RECUP",
    category: "Web app · Social impact",
    color: "#e1d49c",
    ink: "#3c351e",
    logo: "/work/recup-logo.webp",
    website: "https://associazionerecup.org/",
    github: "https://github.com/nannipy/Recup",
    images: ["/Recup/overview.webp"],
    tools: ["Next.js", "TypeScript", "Supabase"],
    summary: text(
      "Software for the people who give food a second chance.",
      "Software per chi dà una seconda possibilità al cibo.",
    ),
    story: [
      text(
        "RECUP recovers unsold food from markets and redistributes it free of charge. Food that has lost its economic value becomes an opportunity to share, meet and take part. Its environmental impact and its social value belong to the same everyday activity.",
        "RECUP recupera il cibo invenduto nei mercati e lo ridistribuisce gratuitamente. Quello che ha perso valore economico diventa un’occasione di condivisione, incontro e partecipazione. L’impatto ambientale e il valore sociale nascono dalla stessa attività quotidiana.",
      ),
      text(
        "I already knew RECUP by name and through its social impact in Milan and Rome. The collaboration began through Marsilea: someone I had worked with there was also involved in RECUP and, following a good experience together, recommended me for this project. That introduction brought us into contact.",
        "Conoscevo già RECUP per nome e per il suo impatto sociale a Milano e Roma. La collaborazione è nata attraverso Marsilea: una persona con cui avevo lavorato lì faceva parte anche di RECUP e, dopo la buona esperienza insieme, mi ha consigliato per questo progetto. Da quella presentazione siamo entrati in contatto.",
      ),
      text(
        "The association had a management platform that no longer met its needs and had gradually been abandoned. Recovery data was also collected through Google Forms and a small software tool. A food name entered in the plural could differ from the database entry; a volunteer’s name could be misspelled or written differently, and quantities could contain typing errors. These small inconsistencies made filtering, cleaning and calculating useful indicators difficult. We decided to rebuild the platform around the way the association actually works.",
        "L’associazione aveva un gestionale che non rispondeva alle sue esigenze e che aveva progressivamente abbandonato. I dati dei recuperi venivano raccolti anche attraverso Google Moduli e un piccolo software. Un alimento scritto al plurale poteva non corrispondere alla voce nel database; il nome di un volontario poteva essere scritto male o in modo diverso, e le quantità potevano contenere errori di battitura. Queste piccole differenze rendevano difficile filtrare, pulire i dati e ricavarne indicatori utili. Abbiamo deciso di rifare il gestionale partendo dal modo in cui l’associazione lavora davvero.",
      ),
      text(
        "We agreed to start with an MVP focused on three essentials: the food name, kilograms recovered and volunteers present. That first version made the proposal concrete so we could assess it together. After a period of evaluation, the association chose to continue. The scope then grew to connect foods with their impact indicators and include volunteers, corporate volunteers, associations and guests who were not registered. Beta testing helped us refine the platform before introducing it into the markets.",
        "Abbiamo concordato di partire da un MVP concentrato su tre informazioni essenziali: nome dell’alimento, chili recuperati e volontari presenti. Quella prima versione rendeva concreta la proposta e ci permetteva di valutarla insieme. Dopo un periodo di valutazione, l’associazione ha scelto di proseguire. Il progetto si è poi ampliato, collegando gli alimenti ai loro indicatori di impatto e includendo volontari, volontari aziendali, associazioni e ospiti non iscritti. Il beta testing ci ha aiutato a mettere a punto il gestionale prima di introdurlo nei mercati.",
      ),
      text(
        "I chose Next.js and Supabase because they were technologies I knew and felt comfortable working with. They let me move quickly and fit well with AI-assisted development tools. The platform, built with TypeScript, connects two views of the same work: a portal for volunteers to record recovered food and the people present, and a private administration area to manage activities, review data and prepare reports.",
        "Ho scelto Next.js e Supabase perché erano tecnologie che conoscevo e con cui mi trovavo bene. Mi permettevano di procedere rapidamente e si integravano bene con gli strumenti di sviluppo assistito dall’AI. Il gestionale, realizzato con TypeScript, collega due punti di vista sullo stesso lavoro: un portale per le persone volontarie, che registrano il cibo recuperato e chi partecipa, e un’area privata per gli admin, che gestiscono le attività, consultano i dati e preparano i report.",
      ),
      text(
        "Recording the food is only the beginning. The platform brings together recovered weight, participation and environmental indicators, including estimates of water saved and CO₂ emissions avoided. The numbers help make visible both the resources preserved and the people who make each recovery possible.",
        "Registrare gli alimenti è solo il punto di partenza. La piattaforma mette insieme peso recuperato, partecipazione e indicatori ambientali, comprese le stime di acqua risparmiata e CO₂ evitata. I numeri aiutano a rendere visibili sia le risorse preservate sia le persone che rendono possibile ogni recupero.",
      ),
      text(
        "The calculations for water saved, CO₂ emissions avoided and estimated economic savings were developed by RECUP with researchers at the University of Milan. My role was to implement the method supplied by the association in the platform. I also proposed other databases, but together we chose to keep this approach for the current version.",
        "I calcoli per l’acqua risparmiata, la CO₂ evitata e il risparmio economico stimato sono stati elaborati da RECUP insieme a docenti dell’Università degli Studi di Milano. Il mio ruolo è stato tradurre nel gestionale il metodo fornito dall’associazione. Ho proposto anche altri database, ma per questa versione abbiamo scelto insieme di mantenere questo approccio.",
      ),
      text(
        "Organised data changes how the association can see and explain its work. Recoveries that were previously scattered across individual entries become a shared overview of its activities and impact. For me, the value is in making that everyday work easier to understand, report and improve.",
        "Avere dati organizzati cambia il modo in cui l’associazione può vedere e raccontare il proprio lavoro. I recuperi, prima dispersi tra singole registrazioni, diventano una visione condivisa delle attività e del loro impatto. Per me il valore sta nel rendere quel lavoro quotidiano più comprensibile, rendicontabile e migliorabile.",
      ),
      text(
        "As of October 2026, the platform is being introduced into the markets. The association’s feedback has been positive, and we are continuing to fix issues and improve the workflows as they are used in everyday activity. Building it is an ongoing collaboration: real use tells us what needs refining next.",
        "A ottobre 2026 il gestionale è in fase di introduzione nei mercati. Il riscontro dell’associazione è positivo e continuiamo a correggere i problemi e migliorare i flussi man mano che entrano nell’attività quotidiana. È una collaborazione che continua: l’utilizzo reale ci indica cosa affinare e cosa serve aggiungere.",
      ),
      text(
        "I work directly with the association’s administrators to gather requests and define new features. Market administrators provide feedback from everyday use. These conversations connect the association’s overall needs with what happens when someone actually records a recovery.",
        "Lavoro direttamente con gli amministratori dell’associazione per raccogliere le richieste e definire le nuove funzioni. Gli amministratori dei mercati mi restituiscono invece i feedback dell’utilizzo quotidiano. Questo confronto collega le esigenze generali di RECUP a ciò che succede quando qualcuno registra davvero un recupero.",
      ),
      text(
        "The hardest part has been turning real needs into practical software. A request is not always fully defined at the start, and explaining possibilities, constraints and different workflows takes work on both sides. Sometimes a proposed solution only becomes clear after we explore another route and return to the original idea. That can be frustrating, but it has taught me to listen more carefully, make proposals concrete and give people time to understand how a feature would fit their work.",
        "La difficoltà maggiore è stata tradurre le esigenze reali in un software pratico da usare. Una richiesta non è sempre del tutto definita all’inizio, e spiegare possibilità, limiti e diversi modi di lavorare richiede un confronto da entrambe le parti. A volte una soluzione proposta diventa chiara soltanto dopo aver esplorato un’altra strada ed essere tornati all’idea iniziale. Può essere frustrante, ma mi ha insegnato ad ascoltare meglio, rendere concrete le proposte e lasciare il tempo di capire come una funzione si inserirebbe nel lavoro quotidiano.",
      ),
      text(
        "The social impact of technology is one of the things that interests me most. Working with RECUP means meeting people who care deeply about sustainability and inclusion, with experiences and perspectives I find fascinating. It is a project I care about because the software supports something that matters to me, alongside people I enjoy learning from.",
        "L’impatto sociale della tecnologia è una delle cose che mi interessano di più. Lavorare con RECUP significa incontrare persone attente alla sostenibilità e all’inclusione, con esperienze e punti di vista che trovo molto interessanti. È un progetto a cui tengo perché il software sostiene qualcosa in cui credo, insieme a persone da cui mi piace imparare.",
      ),
    ],
    gallery: [
      {
        src: "/Recup/volunteer-city.webp", width: 2848, height: 1640,
        title: text("Starting with the place.", "Si parte dal territorio."),
        body: [text(
          "The volunteer portal begins with the city. The route into the tool follows the way RECUP’s activities are organised: people meet in a place, at a market, to recover food together.",
          "Il portale delle persone volontarie parte dalla città. L’ingresso nello strumento segue l’organizzazione delle attività di RECUP: ci si ritrova in un luogo, in un mercato, per recuperare il cibo insieme.",
        )],
        caption: text("Volunteer access · city selection.", "Accesso volontari · scelta della città."),
      },
      {
        src: "/Recup/volunteer-market.webp", width: 2848, height: 1640,
        title: text("Each market, its own activity.", "Ogni mercato, la sua attività."),
        body: [text(
          "Choosing the market gives each entry its context. The portal is designed for volunteers, with access tied to the market; the private administration area brings the different activities together.",
          "Scegliere il mercato dà un contesto a ogni registrazione. Il portale è pensato per i volontari, con un accesso legato al mercato; l’area privata di amministrazione riunisce poi le diverse attività.",
        )],
        caption: text("Volunteer access · market selection.", "Accesso volontari · scelta del mercato."),
      },
      {
        src: "/Recup/recovery-food.webp", width: 2848, height: 1640,
        title: text("Giving recovered food a record.", "Dare una traccia al cibo recuperato."),
        body: [text(
          "Volunteers record the date, the foods recovered and their weight. A recovery becomes a set of usable data, while the form keeps the focus on the activity happening at the market.",
          "Le persone volontarie registrano la data, gli alimenti recuperati e il loro peso. Il recupero diventa un insieme di dati utilizzabili, mentre il modulo mantiene al centro l’attività che si svolge al mercato.",
        )],
        caption: text("New recovery · foods and weight.", "Nuovo recupero · alimenti e peso."),
      },
      {
        src: "/Recup/volunteer-presence.webp", width: 2848, height: 1640,
        title: text("The people behind each recovery.", "Le persone dietro ogni recupero."),
        body: [text(
          "The next step records who took part. Keeping participation alongside the food data makes room for the social dimension: the time, energy and relationships that make the activity possible.",
          "Il passaggio successivo registra chi ha partecipato. Affiancare le presenze ai dati sul cibo dà spazio anche alla dimensione sociale: il tempo, l’energia e le relazioni che rendono possibile l’attività.",
        ), text(
          "At first, I thought food and volunteers could be entered in a single form. Using the application showed us that the workflow needed separate sections. That change came from trying it in practice and understanding which sequence made the task easier.",
          "All’inizio pensavo che alimenti e volontari potessero essere inseriti in un unico modulo. Utilizzando l’applicazione abbiamo capito che il flusso aveva bisogno di sezioni distinte. Il cambiamento è nato dalle prove pratiche e dal capire quale sequenza rendesse il compito più semplice.",
        )],
        caption: text("Recovery form · finding the volunteers present.", "Modulo di recupero · ricerca delle persone presenti."),
      },
      {
        src: "/Recup/volunteer-selected.webp", width: 2848, height: 1640,
        title: text("Food and participation, together.", "Cibo e partecipazione, insieme."),
        body: [text(
          "Selected volunteers remain visible in the form. The recovery and its participants are connected, so the association can look at the work as both food saved and a shared effort.",
          "Le persone selezionate restano visibili nel modulo. Il recupero e chi vi partecipa sono collegati, così l’associazione può leggere il lavoro sia come cibo salvato sia come impegno condiviso.",
        )],
        caption: text("Recovery form · selected participants.", "Modulo di recupero · persone selezionate."),
      },
      {
        src: "/Recup/recoveries.webp", width: 2848, height: 1640,
        title: text("From individual entries to a shared overview.", "Dalle registrazioni a una visione d’insieme."),
        body: [text(
          "In the private admin area, recoveries can be reviewed by market and period. Weight, water and CO₂ indicators sit alongside the activity history, making it easier to follow the work over time.",
          "Nell’area privata degli admin, i recuperi si possono consultare per mercato e periodo. Peso, acqua e CO₂ affiancano lo storico delle attività, rendendo più semplice seguire il lavoro nel tempo.",
        )],
        caption: text("Admin area · recovery history and filters.", "Area admin · storico dei recuperi e filtri."),
      },
      {
        src: "/Recup/reports.webp", width: 2848, height: 1640,
        title: text("Making the impact easier to explain.", "Rendere l’impatto più facile da raccontare."),
        body: [text(
          "Reports bring together recovered food, attendance and environmental estimates. Filters and exports help turn daily entries into evidence the association can use to report its activities and explain their value to the community and its supporters.",
          "I report riuniscono cibo recuperato, presenze e stime ambientali. Filtri ed esportazioni aiutano a trasformare le registrazioni quotidiane in informazioni utili per rendicontare le attività e raccontarne il valore alla comunità e a chi sostiene RECUP.",
        )],
        caption: text("Admin area · reports, environmental indicators and exports.", "Area admin · report, indicatori ambientali ed esportazioni."),
      },
      {
        src: "/Recup/companies.webp", width: 2848, height: 1640,
        title: text("A project made of relationships.", "Un progetto fatto di relazioni."),
        body: [text(
          "The platform also brings company participation into the picture. Connecting organisations, volunteers and recoveries helps describe the network around RECUP, alongside the kilograms and environmental indicators.",
          "La piattaforma dà spazio anche alla partecipazione delle aziende. Collegare organizzazioni, persone volontarie e recuperi aiuta a descrivere la rete intorno a RECUP, insieme ai chilogrammi e agli indicatori ambientali.",
        )],
        caption: text("Admin area · companies and participation.", "Area admin · aziende e partecipazione."),
      },
    ],
  },
  {
    slug: "edocla",
    title: "EDOCLA Costruzioni",
    category: "Website · Construction",
    color: "#d3ad90",
    ink: "#412d20",
    website: "https://edoclacostruzioni.com",
    github: "https://github.com/nannipy/ec-website",
    designCredit: { name: "Iachini Design" },
    images: ["/work/edocla-opening-v2.jpg"],
    tools: ["React", "Figma", "Vercel", "Resend", "Cloudflare", "Umami"],
    summary: text(
      "A friend's construction company in Rome. A simple website to show the value of its work.",
      "L’impresa edile di un caro amico, a Roma. Un sito semplice per dare valore al suo lavoro.",
    ),
    story: [
      text(
        "EDOCLA is a construction company in Rome run by a close friend. Founded in 2026, it was starting from scratch and needed an online presence as it began taking on work. The goal was straightforward: a simple website to introduce the company and collect enquiries and requests for estimates from potential clients.",
        "EDOCLA è un’impresa edile a Roma di un mio caro amico. Nata nel 2026, partiva da zero e aveva bisogno di una presenza online mentre iniziava a lavorare. L’obiettivo era concreto: un sito semplice per presentare l’azienda e raccogliere contatti, proposte e richieste di preventivo dai potenziali clienti.",
      ),
      text(
        "Another friend, Giorgio Iachini of Iachini Design, created the complete design in Figma. Giorgio studied design in Cambridge; my role was to turn his design into a React web application. The work was fairly quick and straightforward, with most of the care going into translating each component faithfully into the functioning site.",
        "Un altro amico, Giorgio Iachini di Iachini Design, ha realizzato interamente il progetto grafico in Figma. Giorgio ha studiato design a Cambridge; il mio ruolo è stato tradurre il suo design in un’applicazione web React. Il lavoro è stato piuttosto semplice e veloce: l’attenzione principale è andata a riprodurre correttamente i singoli componenti nel sito funzionante.",
      ),
      text(
        "I connected the contact form at the bottom of the page to Resend so enquiries could reach the company by email, and deployed the application on Vercel. The domain was purchased through Cloudflare, and I added basic analytics with Umami. A small, focused implementation gave the new business a place to present itself and receive enquiries.",
        "Ho collegato il modulo di contatto in fondo alla pagina a Resend, per far arrivare le richieste all’azienda via email, e pubblicato l’applicazione su Vercel. Il dominio è stato acquistato su Cloudflare e ho aggiunto alcune statistiche di base con Umami. Un’implementazione contenuta, pensata per dare alla nuova attività uno spazio in cui presentarsi e ricevere richieste.",
      ),
    ],
    gallery: [
      {
        src: "/work/edocla-about-v2.jpg", width: 1195, height: 460,
        title: text("An introduction built on trust.", "Presentarsi, prima di tutto."),
        body: [text(
          "Before talking about code, we needed to make the company easy to understand. Who is behind it? What kind of work does it do? The introduction gives visitors that context, bringing the people and the company’s experience into the same page as its work.",
          "Prima del codice, c’era bisogno di rendere l’azienda facile da capire. Chi c’è dietro? Di cosa si occupa? La sezione di presentazione dà questo contesto a chi arriva sul sito, affiancando le persone e l’esperienza dell’impresa alle immagini del suo lavoro.",
        ), text(
          "Implementing my friend’s design meant preserving its visual character: typography, spacing and photographs all needed to work together. The goal was to translate his idea into a functioning page, keeping the company at the centre of the experience.",
          "Implementare il design del mio amico significava conservarne il carattere: tipografia, spazi e fotografie dovevano funzionare insieme. L’obiettivo era tradurre la sua idea in una pagina concreta, mantenendo l’azienda al centro dell’esperienza.",
        )],
        caption: text("A close view of the company introduction and its photographs.", "Un dettaglio della presentazione dell’azienda e delle sue fotografie."),
      },
      {
        src: "/work/edocla-services-v2.jpg", width: 1195, height: 530,
        title: text("Make the work easy to explore.", "Rendere il lavoro facile da esplorare."),
        body: [text(
          "The services section puts the practical questions first. Visitors can explore the kinds of work EDOCLA offers, from construction and renovation to interiors and systems. The expandable groups keep a substantial list readable without turning the page into a wall of text.",
          "La sezione servizi parte dalle domande pratiche. Chi visita il sito può esplorare gli interventi di EDOCLA, dalle costruzioni alle ristrutturazioni, dagli interni agli impianti. I gruppi espandibili tengono leggibile un elenco ampio, senza trasformare la pagina in un muro di testo.",
        ), text(
          "This is where a simple React application is enough: clear sections, direct interactions and content that is easy to find. I wanted the implementation to support the design and make the information useful, without adding complexity for its own sake.",
          "Qui una semplice applicazione React è sufficiente: sezioni chiare, interazioni dirette e contenuti facili da trovare. Volevo che l’implementazione sostenesse il design e rendesse utili le informazioni, senza aggiungere complessità fine a sé stessa.",
        )],
        caption: text("The construction services, shown in an expanded group.", "Il dettaglio dei servizi di edilizia in un gruppo aperto."),
      },
      {
        src: "/work/edocla-process-v2.jpg", width: 1195, height: 532,
        title: text("Show what happens next.", "Spiegare cosa succede dopo."),
        body: [text(
          "Choosing a construction company also means understanding how a project will unfold. The process section describes the steps from the first site visit and estimate through planning, construction and handover. It gives shape to the work behind the finished result.",
          "Scegliere un’impresa edile significa anche capire come si svolgerà un progetto. La sezione dedicata al processo racconta le fasi dal sopralluogo e preventivo alla pianificazione, al cantiere e alla consegna. Dà una forma al lavoro che precede il risultato finale.",
        ), text(
          "The large numbered steps are part of Iachini Design’s visual language. My contribution was to bring that layout into the application, keeping the sequence and the explanations connected as visitors move through the page.",
          "Le grandi fasi numerate fanno parte del linguaggio visivo di Iachini Design. Il mio contributo è stato portare quel layout nell’applicazione, mantenendo collegate la sequenza e le spiegazioni mentre si scorre la pagina.",
        )],
        caption: text("A detail of the four stages of EDOCLA’s working process.", "Un dettaglio delle quattro fasi del processo di lavoro di EDOCLA."),
      },
      {
        src: "/work/edocla-contact-v2.jpg", width: 1195, height: 540,
        title: text("From a visit to a conversation.", "Da una visita a una conversazione."),
        body: [text(
          "The page ends with a concrete next step: contacting the company. A photograph sits alongside the form, keeping the visual story present even at this practical moment. Visitors can explain what they need and leave their contact details in one place.",
          "La pagina arriva a un passo concreto: contattare l’impresa. Una fotografia affianca il modulo, mantenendo presente il racconto visivo anche in questo momento pratico. Chi visita il sito può spiegare di cosa ha bisogno e lasciare i propri riferimenti in un unico punto.",
        ), text(
          "I connected the email flow with Resend and deployed the application on Vercel. Those choices fit the scope of the project: a straightforward way to publish the site and handle enquiries, with a small implementation that serves the company’s everyday needs.",
          "Ho collegato il flusso delle email con Resend e pubblicato l’applicazione su Vercel. Scelte coerenti con la dimensione del progetto: un modo diretto per mettere online il sito e gestire le richieste, con un’implementazione contenuta al servizio delle esigenze quotidiane dell’azienda.",
        )],
        caption: text("The contact section pairs a project photograph with the enquiry form.", "La sezione contatti affianca una fotografia al modulo di richiesta."),
      },
      {
        src: "/work/edocla-form-detail-v2.jpg", width: 487, height: 535,
        title: text("Simple, and useful.", "Semplice, e utile."),
        body: [text(
          "Looking back, what matters most to me is the collaboration. A friend brought his company, another brought the design, and I helped turn it into a working website. The result does what we needed: it presents EDOCLA, explains its work and gives people a clear way to get in touch.",
          "Ripensandoci, la parte che conta di più per me è la collaborazione. Un amico ha portato la sua azienda, un altro il design, e io ho aiutato a trasformare tutto in un sito funzionante. Il risultato fa ciò che ci serviva: presenta EDOCLA, spiega il suo lavoro e dà alle persone un modo chiaro per contattarla.",
        )],
        caption: text("A closer look at the enquiry form connected to Resend.", "Uno sguardo ravvicinato al modulo di contatto collegato a Resend."),
      },
    ],
  },
  {
    "slug": "homelab",
    "title": "Homelab",
    "category": "Infrastructure · Personal",
    "color": "#94bda0",
    "ink": "#173c2b",
    "cover": "photo",
    "images": [
      "/work/nannix-macbook-services-green.webp"
    ],
    "tools": [
      "Linux",
      "Docker",
      "Tailscale",
      "Pi-hole",
      "Immich",
      "Beszel",
      "Scrutiny",
      "Uptime Kuma",
      "File Browser"
    ],
    "summary": {
      "en": "Nannix server. A place for my data, my services and whatever comes next.",
      "it": "Nannix server. Uno spazio per i miei dati, i miei servizi e le prossime idee."
    },
    "story": [
      {
        "en": "Nannix server began with curiosity: I wanted a server of my own, with applications running around the clock that I could reach from anywhere. Immich was the first service I installed, followed by Tailscale to connect the machine to my other devices and access it away from home.",
        "it": "Nannix server nasce dalla curiosità: volevo un server mio, con applicazioni in funzione H24 a cui poter accedere da ovunque. Il primo servizio che ho installato è stato Immich, seguito da Tailscale per collegare la macchina agli altri dispositivi e raggiungerla anche fuori casa."
      },
      {
        "en": "Alongside that freedom to experiment, I wanted to depend less on Google and other cloud services. As my photo library and files grew, I wanted more control over their storage and the services I used. I wanted to decide where my data lived and how to manage it, on hardware I could take care of myself.",
        "it": "Accanto alla libertà di sperimentare, volevo dipendere meno da Google e dagli altri servizi cloud. Con la crescita delle mie raccolte di foto e file, volevo avere più controllo sull’archiviazione e sui servizi che utilizzavo. Volevo scegliere dove conservare i miei dati e come gestirli, su hardware di cui potermi occupare direttamente."
      },
      {
        "en": "I started with a 2016 MacBook Air that was sitting unused at home: a modest machine, without a battery. Linux and Docker gave it a second life. Without a battery, a power cut interrupts the server immediately; that remains a limitation of this setup.",
        "it": "Sono partito da un MacBook Air del 2016 che avevo fermo a casa: una macchina poco potente, senza batteria. Linux e Docker gli hanno dato una seconda vita. Senza batteria, un blackout interrompe subito il funzionamento del server: rimane un limite di questa configurazione."
      },
      {
        "en": "Today Immich holds my photos and videos, Filebrowser gives me access to my files and Pi-hole helps me control DNS traffic on my network. Tailscale lets me reach the server from my other devices, even away from home. The services make it useful today; being able to add the next idea is what keeps the project interesting.",
        "it": "Oggi Immich ospita le mie foto e i miei video, Filebrowser mi dà accesso ai file e Pi-hole mi aiuta a controllare il traffico DNS della rete. Tailscale mi permette di raggiungere il server dagli altri dispositivi, anche fuori casa. I servizi lo rendono utile oggi; poterci aggiungere la prossima idea è ciò che continua a rendere interessante il progetto."
      },
      {
        "en": "Because the computer is old, I wanted to understand how it was coping with continuous use. I added monitoring for disk health, resource use and service availability, both to notice signs of trouble and to see which activities put the most load on the machine. During the summer in Rome, the temperatures I observed remained acceptable.",
        "it": "Essendo un computer vecchio, volevo capire come affrontasse l’utilizzo continuo. Ho aggiunto il monitoraggio della salute dei dischi, dell’uso delle risorse e della disponibilità dei servizi, sia per accorgermi di eventuali segnali di problemi sia per capire quali attività pesassero di più sulla macchina. Durante l’estate romana, le temperature che ho osservato sono rimaste accettabili."
      },
      {
        "en": "So far, the main challenge has been the computer’s limited processing power. Large batches of photos and backups take time, especially when Immich also has to process the images with its machine-learning features. This has made the hardware’s limits tangible and taught me to pay attention to workloads and cooling.",
        "it": "Finora la difficoltà principale è stata la potenza limitata del computer. Grandi quantità di foto e backup richiedono tempo, soprattutto quando Immich deve anche elaborare le immagini con le sue funzioni di machine learning. È stato un modo concreto di conoscere i limiti dell’hardware e imparare a prestare attenzione ai carichi di lavoro e al raffreddamento."
      },
      {
        "en": "The project also opened a door to many open-source tools, which account for most of the software I use here. I explored different Linux distributions and currently use Linux Mint; I would like to move to Ubuntu Server for a setup more focused on hosting services. Along the way I learned Linux commands, Docker and container management, and discovered what Kubernetes is for, although I have not used it myself.",
        "it": "Il progetto mi ha fatto scoprire tanti strumenti open source, che costituiscono la maggior parte del software che uso qui. Ho esplorato diverse distribuzioni Linux e oggi utilizzo Linux Mint; vorrei passare a Ubuntu Server per una configurazione più orientata a ospitare servizi. Nel percorso ho imparato comandi Linux, Docker e la gestione dei container, e scoperto a cosa serve Kubernetes, anche se non l’ho ancora utilizzato."
      }
    ],
    "gallery": [
      {
        "src": "/work/homelab-0726.webp",
        "width": 1600,
        "height": 1200,
        "title": {
          "en": "A server that starts with what I have.",
          "it": "Un server che parte da quello che ho."
        },
        "caption": {
          "en": "The closed MacBook Air, connected on my desk.",
          "it": "Il MacBook Air chiuso, collegato sulla scrivania."
        },
        "body": [
          {
            "en": "The machine sits in a corner of my desk, connected and ready to host services throughout the day. Its limited memory and ageing SSD shape what I can run. I can improve the setup as my needs change, without waiting for the perfect hardware to begin.",
            "it": "La macchina occupa un angolo della scrivania, collegata e pronta a ospitare servizi durante tutta la giornata. La memoria limitata e l’SSD che invecchia orientano ciò che posso farci girare. Posso migliorare la configurazione man mano che cambiano le esigenze, senza aspettare l’hardware perfetto per cominciare."
          }
        ]
      },
      {
        "src": "/work/homelab-0727.webp",
        "width": 1200,
        "height": 1600,
        "title": {
          "en": "Linux, as a base for new ideas.",
          "it": "Linux, come base per nuove idee."
        },
        "caption": {
          "en": "The MacBook Air running its Linux desktop.",
          "it": "Il MacBook Air con il desktop Linux in esecuzione."
        },
        "body": [
          {
            "en": "The laptop currently runs Linux Mint. Exploring distributions has become part of the project, alongside learning the commands and tools needed to maintain services. Ubuntu Server is a possible next step I would like to try.",
            "it": "Il portatile oggi utilizza Linux Mint. Esplorare le distribuzioni è diventato parte del progetto, insieme a imparare i comandi e gli strumenti necessari per mantenere i servizi. Ubuntu Server è un possibile prossimo passo che vorrei provare."
          }
        ]
      },
      {
        "src": "/work/homelab-0728.webp",
        "width": 1200,
        "height": 1600,
        "title": {
          "en": "Docker · Room for the next experiment.",
          "it": "Docker · Spazio per il prossimo esperimento."
        },
        "caption": {
          "en": "The MacBook with a terminal open.",
          "it": "Il MacBook con il terminale aperto."
        },
        "body": [
          {
            "en": "Docker lets me organise the applications into containers. When I want to build a Telegram bot, run a scheduled task or try a new tool, I have somewhere to put it. The server is a platform I can keep extending, alongside the services already in use.",
            "it": "Docker mi permette di organizzare le applicazioni in container. Quando voglio creare un bot Telegram, eseguire un’attività periodica o provare un nuovo strumento, ho un posto in cui farlo girare. Il server è una piattaforma che posso continuare ad ampliare, accanto ai servizi già in uso."
          }
        ]
      },
      {
        "src": "/work/immich-logo.svg",
        "width": 792,
        "height": 792,
        "mediaKind": "logo",
        "website": "https://immich.app",
        "title": {
          "en": "Immich · My alternative to Google Photos.",
          "it": "Immich · La mia alternativa a Google Foto."
        },
        "caption": {
          "en": "Immich logo",
          "it": "Logo Immich"
        },
        "body": [
          {
            "en": "Immich is one of the main reasons this server matters in my daily life. It gives my photos and videos a library on my own hardware, with mobile backup and a way to browse and rediscover them. It takes the place Google Photos had for me, while letting me choose how to store my memories.",
            "it": "Immich è uno dei motivi principali per cui questo server conta nella mia vita quotidiana. Dà alle mie foto e ai miei video una libreria sul mio hardware, con backup dal telefono e un modo comodo per sfogliarli e ritrovarli. Prende il posto che per me aveva Google Foto, lasciandomi scegliere come conservare i miei ricordi."
          },
          {
            "en": "It is also one of the open-source projects I find most exciting. I love seeing something this useful and thoughtfully built available for people to run themselves. Photos from cycling, the mountains, friends and the boat make the value very tangible: I am using it to look after things I care about.",
            "it": "È anche uno dei progetti open source che trovo più interessanti. Mi entusiasma vedere qualcosa di così utile e curato che le persone possono far girare da sé. Le foto del ciclismo, della montagna, degli amici e della barca rendono il suo valore molto concreto: lo uso per prendermi cura di cose a cui tengo."
          }
        ]
      },
      {
        "src": "/work/homelab-pihole.webp",
        "width": 1500,
        "height": 910,
        "title": {
          "en": "Pi-hole · Less tracking, more control.",
          "it": "Pi-hole · Meno tracking, più controllo."
        },
        "caption": {
          "en": "Pi-hole: DNS activity and filtering dashboard.",
          "it": "Pi-hole: dashboard delle attività DNS e del filtraggio."
        },
        "body": [
          {
            "en": "Pi-hole filters DNS requests on my network. Blocking domains associated with advertising and tracking reduces some of the noise and gives me more control over what my devices contact. The dashboard lets me see queries, blocked requests and their history; DNS filtering can stop many unwanted domains, though it cannot remove every ad.",
            "it": "Pi-hole filtra le richieste DNS della mia rete. Bloccare domini associati a pubblicità e tracking riduce una parte del rumore e mi dà più controllo su ciò che contattano i dispositivi. La dashboard mostra le query, le richieste bloccate e il loro storico: il filtraggio DNS può fermare molti domini indesiderati, anche se non elimina ogni pubblicità."
          }
        ]
      },
      {
        "src": "/work/homelab-filebrowser.webp",
        "width": 1500,
        "height": 910,
        "title": {
          "en": "Filebrowser · My files, on my server.",
          "it": "Filebrowser · I miei file, sul mio server."
        },
        "caption": {
          "en": "File Browser: the server’s web file manager.",
          "it": "File Browser: il gestore dei file del server via web."
        },
        "body": [
          {
            "en": "For documents and other files, Filebrowser gives me a web interface to browse, upload and organise what I keep on the machine. Together with Immich for photos, it helps me move more of my digital life onto my own server and reduce my reliance on external storage services.",
            "it": "Per documenti e altri file, Filebrowser mi dà un’interfaccia web per consultare, caricare e organizzare ciò che conservo sulla macchina. Insieme a Immich per le foto, mi aiuta a portare una parte maggiore della mia vita digitale sul mio server e a dipendere meno dai servizi di archiviazione esterni."
          }
        ]
      },
      {
        "src": "/work/tailscale-logo.svg",
        "width": 256,
        "height": 256,
        "mediaKind": "logo",
        "website": "https://tailscale.com",
        "title": {
          "en": "Tailscale · The part that makes it simple.",
          "it": "Tailscale · La parte che rende tutto semplice."
        },
        "caption": {
          "en": "Tailscale logo",
          "it": "Logo Tailscale"
        },
        "body": [
          {
            "en": "All of this would be much less convenient without Tailscale. My server stays at home, but I can reach it from my phone or laptop when I am elsewhere. Photos, files and dashboards remain within reach through a private, encrypted network between my devices.",
            "it": "Tutto questo sarebbe molto meno comodo senza Tailscale. Il server rimane a casa, ma posso raggiungerlo dal telefono o dal portatile quando sono altrove. Foto, file e dashboard restano a portata di mano attraverso una rete privata e cifrata tra i miei dispositivi."
          },
          {
            "en": "That simplicity is a big part of why the homelab works for me. I can use my services remotely without setting up port forwarding for each one, and spend more time building and using them.",
            "it": "Questa semplicità è una parte importante del motivo per cui l’homelab funziona per me. Posso usare i servizi da remoto senza configurare il port forwarding per ciascuno e dedicare più tempo a costruirli e usarli."
          }
        ]
      },
      {
        "src": "/work/homelab-scrutiny.webp",
        "width": 1500,
        "height": 910,
        "title": {
          "en": "Scrutiny · Watching the SSD over time.",
          "it": "Scrutiny · Seguire l’SSD nel tempo."
        },
        "caption": {
          "en": "Scrutiny: SSD health and temperature history.",
          "it": "Scrutiny: salute dell’SSD e storico della temperatura."
        },
        "body": [
          {
            "en": "Scrutiny brings together disk health information, S.M.A.R.T. data and temperature history. On an older machine, being able to follow those changes helps me notice warning signs and plan maintenance before a problem takes me by surprise.",
            "it": "Scrutiny riunisce informazioni sulla salute dei dischi, dati S.M.A.R.T. e storico delle temperature. Su una macchina non più nuova, seguire questi cambiamenti mi aiuta a riconoscere segnali da approfondire e pianificare la manutenzione prima che un problema mi colga di sorpresa."
          }
        ]
      },
      {
        "src": "/work/homelab-beszel.webp",
        "width": 1500,
        "height": 910,
        "title": {
          "en": "Beszel · Knowing what the machine is doing.",
          "it": "Beszel · Capire cosa sta facendo la macchina."
        },
        "caption": {
          "en": "Beszel: CPU, memory and Docker resource charts.",
          "it": "Beszel: grafici di CPU, memoria e risorse Docker."
        },
        "body": [
          {
            "en": "Beszel shows CPU, memory, disk and network usage, together with the resources used by Docker containers. Its historical charts help me understand loads and trends. Supported hardware sensors add context, so I can judge how much room this small server has for another service.",
            "it": "Beszel mostra l’utilizzo di CPU, memoria, disco e rete, insieme alle risorse usate dai container Docker. I grafici storici mi aiutano a capire carichi e andamento nel tempo. I sensori supportati dall’hardware aggiungono contesto, così posso valutare quanto spazio ha ancora questo piccolo server per un altro servizio."
          }
        ]
      },
      {
        "src": "/work/homelab-uptime.webp",
        "width": 1500,
        "height": 910,
        "title": {
          "en": "Uptime Kuma · Are my sites and services responding?",
          "it": "Uptime Kuma · Siti e servizi rispondono?"
        },
        "caption": {
          "en": "Uptime Kuma: server and service availability.",
          "it": "Uptime Kuma: disponibilità del server e dei servizi."
        },
        "body": [
          {
            "en": "Uptime Kuma monitors my websites and the availability of the server’s services. It gives me response times and uptime history in one place, helping me distinguish a machine that is powered on from a service I can actually reach. Together, these three monitoring tools close the loop: disk health, resource use and availability.",
            "it": "Uptime Kuma controlla i miei siti e la disponibilità dei servizi del server. Riunisce tempi di risposta e storico dell’uptime, aiutandomi a distinguere una macchina accesa da un servizio che riesco davvero a raggiungere. Questi tre strumenti di monitoraggio completano il quadro: salute dei dischi, uso delle risorse e disponibilità."
          }
        ]
      }
    ]
  },
  {
    slug: "pomodoro-go",
    title: "Pomodoro Go",
    category: "Utility · Focus",
    color: "#db9f91",
    ink: "#472720",
    cover: "pomodoro",
    images: ["/work/pomodoro-launch.webp", "/work/pomodoro-timer.webp"],
    tools: ["Go", "macOS", "System tray"],
    summary: text(
      "A small tool for making room to focus.",
      "Un piccolo strumento per trovare spazio per concentrarsi.",
    ),
    story: [
      text(
        "Pomodoro Go began as a quick experiment: I wanted to build an application for my Mac’s menu bar and try a new language. I chose Go for its efficiency, speed and lightness, and used AI tools to help me develop it. In about an hour, I went from the idea to studying with an application I had made myself.",
        "Pomodoro Go nasce come un esperimento veloce: volevo costruire un’applicazione per la menu bar del mio Mac e provare un nuovo linguaggio. Ho scelto Go per l’efficienza, la velocità e la leggerezza, facendomi aiutare anche dagli strumenti AI nello sviluppo. In circa un’ora sono passato dall’idea a studiare con un’applicazione fatta da me.",
      ),
      text(
        "The workflow is simple: I start a timer, get notified when it is time to stop and take a break, then start again. The satisfaction came from completing something small and using it straight away. It was a short project, but it gave me a practical first encounter with Go and building a menu-bar application.",
        "Il funzionamento è semplice: avvio un timer, ricevo una notifica quando è il momento di fermarmi e fare una pausa, poi riparto. La soddisfazione è stata completare qualcosa di piccolo e usarlo subito. Un progetto breve, che mi ha dato un primo contatto pratico con Go e con lo sviluppo di un’applicazione per la menu bar.",
      ),
    ],
  },
  {
    slug: "aesculapius",
    title: "Aesculapius",
    category: "AI · Sport",
    color: "#94bec2",
    ink: "#203b3e",
    cover: "ai",
    images: [],
    github: "https://github.com/nannipy/aesculapius",
    tools: ["Python", "RAG", "Garmin Connect", "Telegram", "Self-hosted"],
    summary: text(
      "My training, sleep and recovery. One conversation to connect the dots.",
      "Allenamento, sonno e recupero. Una conversazione per collegare i punti.",
    ),
    story: [
      text(
        "Aesculapius began with the idea of talking to the data recorded by my Garmin: an indirect way to listen to my body and understand it better. I wanted to use AI and software to explore training, recovery, sleep and wellbeing in the context of my own days.",
        "Aesculapius nasce dall’idea di parlare con i dati registrati dal mio Garmin: un modo indiretto di ascoltare il mio corpo e conoscerlo meglio. Volevo usare l’AI e il software per esplorare allenamento, recupero, sonno e benessere nel contesto delle mie giornate.",
      ),
      text(
        "Before Aesculapius there was FoxRun, a project still available on my GitHub. It connected to Strava, rather than Garmin Connect, collected my activity data and used it to build an intelligent dashboard for exploring training, performance and trends.",
        "Prima di Aesculapius c’era FoxRun, un progetto ancora disponibile sul mio GitHub. Si collegava a Strava, invece che a Garmin Connect, raccoglieva i dati delle mie attività e li usava per costruire una dashboard intelligente con cui esplorare allenamenti, prestazioni e andamenti.",
      ),
      text(
        "Changes to Strava’s API access conditions brought FoxRun to a halt. I wanted more independence in accessing my activity data and choosing how to use it. That led me to look for another way.",
        "FoxRun si è fermato con il cambiamento delle condizioni di accesso alle API di Strava. Volevo più autonomia nell’accesso ai dati delle mie attività e nella scelta di come usarli. Da questa esigenza ho iniziato a cercare un’altra strada.",
      ),
      text(
        "Garmin Connect gave me a richer, more detailed picture of my days, beyond the activities I shared on Strava. Aesculapius became possible thanks to python-garminconnect, the open source library maintained by cyberjunky. I am grateful for the work behind it: it gave me a starting point for accessing my Garmin data and building something around my own needs.",
        "Garmin Connect mi offriva un quadro più ricco e preciso delle mie giornate, oltre alle attività che condividevo su Strava. Aesculapius è diventato possibile grazie a python-garminconnect, la libreria open source curata da cyberjunky. Apprezzo molto il lavoro che c’è dietro: mi ha dato una base per accedere ai miei dati Garmin e costruire qualcosa intorno alle mie esigenze.",
      ),
      text(
        "My Garmin records a lot about my days. Training, sleep, recovery and physiological measurements are all there, but I wanted to bring them into one picture and ask questions that start from my own context.",
        "Il mio Garmin registra molto delle mie giornate. Allenamento, sonno, recupero e parametri fisiologici ci sono tutti, ma volevo riunirli in un quadro unico e fare domande che partissero dal mio contesto.",
      ),
      text(
        "Training is also a way for me to unwind and relax. I want it to be useful and suited to my situation, while leaving room for the pleasure of cycling and running. Finding that balance is part of what I want the assistant to help me explore.",
        "L’allenamento è anche un modo per distendermi e rilassarmi. Voglio che sia funzionale e adatto alla mia situazione, lasciando spazio al piacere della corsa e della bici. Trovare questo equilibrio è parte di ciò che vorrei esplorare con l’assistente.",
      ),
      text(
        "As of October 2026, the project works and I use it occasionally, but it is still experimental. Telegram is its main interface: a chat with an assistant built around my Garmin data. I am still looking for the form of conversation that makes it most useful in everyday life.",
        "A ottobre 2026 il progetto funziona e ogni tanto lo utilizzo, ma è ancora sperimentale. L’interfaccia principale è Telegram: una chat con un assistente costruito intorno ai miei dati Garmin. Sto ancora cercando la forma di conversazione che lo renda più utile nella vita quotidiana.",
      ),
      text(
        "The longer-term idea is something like a Jarvis for training: an assistant that can connect my personal data with books and technical sources on running, cycling and sport. I would like that combination to support a more scientific approach, grounded in my own context. Bringing those sources together is a direction I want to develop.",
        "L’idea per il futuro è quasi un Jarvis per l’allenamento: un assistente capace di collegare i miei dati personali a libri e fonti tecniche sulla corsa, sul ciclismo e sullo sport. Vorrei che questo insieme permettesse un approccio più scientifico, legato alla mia situazione. Integrare queste fonti è una direzione che voglio sviluppare.",
      ),
      text(
        "The hardest part has been finding the right interaction: easy, intuitive and natural enough to fit into training. I want the information to stay up to date automatically and the conversation to be useful without becoming another task to manage. Solving that experience matters more to me than adding features; it could eventually make the project useful to other people too.",
        "La difficoltà maggiore è trovare l’interazione giusta: facile, intuitiva e abbastanza naturale da inserirsi nell’allenamento. Vorrei che le informazioni si aggiornassero automaticamente e che la conversazione fosse utile senza diventare un’altra attività da gestire. Mettere a punto questa esperienza conta per me più che aggiungere funzioni; potrebbe rendere il progetto utile anche ad altre persone.",
      ),
      text(
        "Self-hosting is part of the idea: I want to own the storage and understand the processing of my personal data. The project is still evolving: I am experimenting, learning from using it and looking for the right balance between data, questions and answers that are actually useful in everyday life.",
        "Il self-hosting fa parte dell’idea: voglio gestire l’archiviazione e capire come vengono elaborati i miei dati personali. Il progetto è ancora in evoluzione: continuo a sperimentare, a imparare dall’uso e a cercare una quadra tra dati, domande e risposte che siano davvero utili nella vita quotidiana.",
      ),
    ],
    gallery: [
      {
        src: "/personal/cycling-0661-v2.jpg",
        width: 4032,
        height: 3024,
        title: text("Cycling · The experience behind the data.", "Ciclismo · L’esperienza dietro i dati."),
        caption: text("Out on the bike.", "Un’uscita in bici."),
        body: [text(
          "Behind every recorded activity is an outing like this. I care about the effort, the enjoyment and the desire to keep improving. The data interests me because it lets me return to that experience, compare it with other days and ask how training and recovery fit together.",
          "Dietro ogni attività registrata c’è un’uscita come questa. Mi interessano lo sforzo, il divertimento e la voglia di continuare a migliorare. I dati mi incuriosiscono perché mi permettono di tornare su quell’esperienza, confrontarla con altre giornate e chiedermi come si collegano allenamento e recupero.",
        )],
      },
      {
        src: "/personal/rome.webp",
        width: 828,
        height: 1104,
        title: text("Running · Understanding my own rhythm.", "Corsa · Capire il mio ritmo."),
        caption: text("Outside, in Rome.", "Fuori, a Roma."),
        body: [text(
          "Running is part of that same curiosity, and also a way to relax. I want to understand how effort fits into the rest of my life, alongside sleep, recovery and personal sensations. The assistant should fit that rhythm and help me enjoy training as well as make it useful.",
          "Anche la corsa fa parte della stessa curiosità ed è un modo per rilassarmi. Voglio capire come lo sforzo si inserisce nel resto della mia vita, insieme a sonno, recupero e sensazioni personali. L’assistente dovrebbe adattarsi a questo ritmo e aiutarmi a vivere l’allenamento con piacere, rendendolo anche funzionale.",
        )],
      },
    ],
    journey: [
      {
        title: text("It started with FoxRun.", "Tutto è iniziato con FoxRun."),
        body: text(
          "FoxRun turned my Strava activities into an intelligent dashboard. When the API access conditions changed, I stopped the project and looked for a way to keep working independently with my own data.",
          "FoxRun trasformava le mie attività Strava in una dashboard intelligente. Quando le condizioni di accesso alle API sono cambiate, ho fermato il progetto e cercato un modo per continuare a lavorare autonomamente sui miei dati.",
        ),
        diagram: "signals",
      },
      {
        title: text("The question came first.", "Prima di tutto, la domanda."),
        body: text(
          "How do I feel today, and what in my recent days might explain it? The starting point was the wish to connect training, sleep and recovery rather than look at each measurement in isolation.",
          "Come mi sento oggi, e cosa nelle ultime giornate potrebbe spiegarlo? Il punto di partenza era collegare allenamento, sonno e recupero, invece di guardare ogni misura da sola.",
        ),
        diagram: "signals",
      },
      {
        title: text("Bring the context together.", "Riunire il contesto."),
        body: text(
          "python-garminconnect gives me access to the richer context recorded by Garmin Connect. The project organises it and uses retrieval to bring relevant information into the conversation.",
          "python-garminconnect mi permette di accedere al contesto più ricco registrato da Garmin Connect. Il progetto lo organizza e usa il retrieval per portare nella conversazione le informazioni pertinenti.",
        ),
        diagram: "context",
      },
      {
        title: text("Make it a conversation.", "Renderlo una conversazione."),
        body: text(
          "Telegram is the front door. I can ask about training, nutrition, rest or sleep through the bot, with the goal of getting suggestions grounded in my own situation.",
          "Telegram è il punto d’ingresso. Posso chiedere al bot di allenamento, alimentazione, riposo o sonno, con l’obiettivo di ottenere suggerimenti legati alla mia situazione.",
        ),
        diagram: "conversation",
      },
      {
        title: text(
          "Keep building it on my terms.",
          "Continuare a costruirlo a modo mio.",
        ),
        body: text(
          "A self-hosted foundation lets me choose how the project stores and processes data. It grows alongside my homelab and my understanding of what is actually useful to me.",
          "Una base self-hosted mi permette di scegliere come il progetto archivia ed elabora i dati. Cresce insieme al mio homelab e alla mia comprensione di ciò che mi è davvero utile.",
        ),
        diagram: "server",
      },
    ],
  },
  {
    slug: "ollapy",
    title: "OllaPy",
    category: "AI · Local-first",
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
      "A simple interface for models running on your own machine.",
      "Un’interfaccia semplice per i modelli sul tuo computer.",
    ),
    story: [
      text(
        "OllaPy began with my interest in open-source models, especially those I could run locally on my own computer. As ChatGPT and chatbot interfaces were becoming familiar, I wanted to try building one myself: an interface connected to Ollama through its API. At the time, I did not have the front end I wanted for that local setup, so I made my own.",
        "OllaPy nasce dalla mia passione per i modelli open source, soprattutto quelli che potevo eseguire in locale sul mio computer. Mentre ChatGPT e le interfacce chatbot iniziavano a diffondersi, volevo provare a costruirne una: un’interfaccia collegata a Ollama attraverso le sue API. In quel momento non avevo il front-end che cercavo per questa configurazione locale, così l’ho realizzato da solo.",
      ),
      text(
        "I worked on switching between models, configuring the context window and handling attachments alongside the conversation. Taking inspiration from other chatbots helped me explore which features I wanted and how I wanted to use them. The project was as much about designing an interface as connecting it to a model.",
        "Ho lavorato sulla scelta tra modelli diversi, sulla configurazione della finestra di contesto e sulla gestione degli allegati insieme alla conversazione. Prendere ispirazione da altri chatbot mi ha aiutato a capire quali funzioni desideravo e come volevo utilizzarle. Il progetto riguardava la progettazione dell’interfaccia tanto quanto il collegamento al modello.",
      ),
      text(
        "I used it for a while on a MacBook Pro M1 with 8 GB of memory. That hardware shaped the experience: I had to use small models, with limited capabilities for what I wanted to do, and the responses were slow. Trying the application myself made the trade-offs of running models locally very concrete.",
        "L’ho utilizzato per un periodo su un MacBook Pro M1 con 8 GB di memoria. L’hardware condizionava l’esperienza: dovevo usare modelli piccoli, con capacità limitate rispetto a ciò che cercavo, e le risposte erano lente. Provare personalmente l’applicazione mi ha fatto conoscere in modo concreto i compromessi dell’esecuzione locale.",
      ),
      text(
        "As the tools around Ollama evolved, I no longer felt the same need for my own interface. OllaPy remains a learning project: it taught me to design a chatbot around the features and interactions I cared about. It was useful to me at that moment, and satisfying to build.",
        "Con l’evoluzione degli strumenti intorno a Ollama, per me è venuta meno la stessa esigenza di avere un’interfaccia mia. OllaPy rimane un progetto di apprendimento: mi ha insegnato a progettare un chatbot intorno alle funzioni e alle interazioni che mi interessavano. In quel momento mi è stato utile ed è stato soddisfacente costruirlo.",
      ),
    ],
  },
  {
    slug: "vector",
    title: "Vector",
    category: "Terminal · AI",
    color: "#c4a4ce",
    ink: "#3b2444",
    images: ["/work/vector.webp", "/work/vector-report.webp"],
    github: "https://github.com/nannipy/vector4HN",
    tools: ["Python", "Ollama", "Gemini", "TUI"],
    summary: text(
      "Read Hacker News. Go deeper without leaving the terminal.",
      "Leggi Hacker News. Approfondisci senza lasciare il terminale.",
    ),
    story: [
      text(
        "Vector grew out of my habit of reading Hacker News and wanting to build a terminal user interface. I like TUIs: they have a nerdy appeal, and I wanted to make something efficient and fun to use. Every now and then, I open Vector in the terminal and browse what is new on Hacker News.",
        "Vector nasce dall’abitudine di leggere Hacker News e dalla voglia di costruire una TUI, un’interfaccia nel terminale. Le TUI mi piacciono molto: hanno un fascino da nerd e volevo realizzare qualcosa di efficiente e divertente da usare. Ogni tanto apro Vector nel terminale e spulcio le novità di Hacker News.",
      ),
      text(
        "I added AI as another experiment. The aim was to get a quick summary, pick out interesting ideas and explore how an article was received in the discussion. It supports local models through Ollama and cloud models through Gemini, with saved reports and contextual chat. Those features gave me another way to skim and explore the feed.",
        "Ho aggiunto l’AI come un altro esperimento. L’obiettivo era ottenere un riassunto veloce, cogliere le idee interessanti ed esplorare come un articolo veniva accolto nella discussione. Supporta modelli locali tramite Ollama e modelli cloud tramite Gemini, con report salvati e chat contestuale. Queste funzioni mi davano un altro modo di leggere rapidamente e curiosare tra le notizie.",
      ),
      text(
        "Building it was quick and fairly straightforward. It remains a rough experiment, and that is part of its character: a small project made for the enjoyment of trying an interface I like and putting it to use in an existing habit.",
        "Realizzarlo è stato veloce e piuttosto semplice. Rimane un esperimento un po’ abbozzato, ed è parte del suo carattere: un piccolo progetto nato dal piacere di provare un’interfaccia che mi piace e inserirla in un’abitudine che avevo già.",
      ),
    ],
  },
  {
    slug: "removebackground",
    title: "Remove Background",
    category: "Image tool · Utility",
    color: "#c5c3bb",
    ink: "#33332e",
    cover: "cutout",
    images: ["/work/removebackground-local.jpg"],
    tools: ["Python", "Flask", "rembg", "Pillow", "HTML", "CSS", "JavaScript"],
    summary: text("Remove a background, keeping the image on my computer.", "Rimuovere uno sfondo, mantenendo l’immagine sul mio computer."),
    story: [
      text(
        "Remove Background began with a simple need: I wanted to remove backgrounds without uploading my images to external websites. I preferred to keep control of the files and process them on my own computer. In a few minutes, I put together a small tool for that task.",
        "Remove Background nasce da un’esigenza semplice: volevo rimuovere gli sfondi senza caricare le mie immagini su siti esterni. Preferivo mantenere il controllo dei file ed elaborarli sul mio computer. In pochi minuti ho messo insieme un piccolo strumento per questo compito.",
      ),
      text(
        "I added a graphical interface so that people without technical experience could use it too. You select a photo, start the background removal, compare the original with the result and download a PNG with a transparent background. The workflow stays focused on that one task.",
        "Ho aggiunto un’interfaccia grafica perché potesse utilizzarlo anche chi non ha esperienza tecnica. Si seleziona una foto, si avvia la rimozione dello sfondo, si confrontano originale e risultato e si scarica un PNG con sfondo trasparente. Il flusso rimane concentrato su questo singolo compito.",
      ),
      text(
        "The interface is built with HTML, CSS and JavaScript and talks to a local Flask server. Python handles the image through Pillow and the open-source rembg library, then returns the result as a PNG. In my use, the cutouts generally work well: a quick experiment that turned an existing library into a tool I could use directly.",
        "L’interfaccia è realizzata con HTML, CSS e JavaScript e comunica con un server Flask locale. Python gestisce l’immagine attraverso Pillow e la libreria open source rembg, poi restituisce il risultato in PNG. Nel mio utilizzo, gli scontorni funzionano generalmente bene: un esperimento rapido che ha trasformato una libreria esistente in uno strumento da usare direttamente.",
      ),
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
    color: "#94b39a",
    ink: "#203b29",
    cover: "watchface",
    images: ["/work/garmin-watchface.webp"],
    tools: ["Monkey C", "Connect IQ", "Garmin fēnix 7X", "MIP display"],
    summary: text(
      "My daily essentials, on the watch I take outside.",
      "I dati che mi servono ogni giorno, sull’orologio che porto fuori.",
    ),
    story: [
      text(
        "Personal Fenix Face began with a watch face I already liked on my Garmin. I wanted to build my own version so I could choose the font, move information to a different position and decide how it interacted with me. The motivation was simply to make something tailored to the way I use my watch.",
        "Personal Fenix Face nasce da un quadrante che mi piaceva già sul mio Garmin. Volevo costruire una versione mia per scegliere il font, spostare le informazioni e decidere come interagire con il quadrante. La motivazione era semplice: realizzare qualcosa su misura per il modo in cui uso l’orologio.",
      ),
      text(
        "That freedom is one of the things I appreciate most about Garmin: being able to personalise the device and have more control over it. I used AI agents to build the face in Monkey C through Connect IQ. I did not learn the language myself during this project; the agents helped turn my choices into a working implementation.",
        "Questa libertà è una delle cose che apprezzo di più di Garmin: poter personalizzare il dispositivo e averne maggiore controllo. Ho utilizzato agenti AI per costruire il quadrante in Monkey C attraverso Connect IQ. Durante questo progetto non ho imparato personalmente il linguaggio: gli agenti mi hanno aiutato a trasformare le mie scelte in un’implementazione funzionante.",
      ),
      text(
        "The challenge was fitting useful information into a round 280 × 280 MIP display. I worked on spacing, bitmap fonts, icons and configurable colours, with selectable fields for activity, battery, weather and other metrics available on the watch. The face uses local Garmin data without starting GPS or streaming sensors.",
        "La sfida era far entrare informazioni utili in un display MIP rotondo da 280 × 280 pixel. Ho lavorato su spaziature, font bitmap, icone e colori configurabili, con campi selezionabili per attività, batteria, meteo e altre metriche disponibili sull’orologio. Il quadrante usa dati locali Garmin senza avviare GPS o sensori in streaming.",
      ),
      text(
        "The implementation includes long-press interactions for opening a field’s associated Garmin app or changing the displayed metric. The image shown here comes from the simulator. After about a day of work, I had the face installed on my fēnix 7X; as of October 2026, I use it every day.",
        "L’implementazione include interazioni con pressione prolungata per aprire l’app Garmin associata a un campo o cambiare la metrica mostrata. L’immagine qui proviene dal simulatore. Dopo circa un giorno di lavoro avevo il quadrante installato sul mio fēnix 7X; a ottobre 2026 lo utilizzo ogni giorno.",
      ),
      text(
        "I would like to share it so that other people can use it, fork it or take inspiration for their own watch face. For now, its value to me is very concrete: something I shaped around my preferences is on my wrist every day.",
        "Vorrei condividerlo perché altre persone possano utilizzarlo, crearne un fork o prendere ispirazione per il proprio quadrante. Per ora, il suo valore per me è molto concreto: ogni giorno porto al polso qualcosa che ho costruito intorno alle mie preferenze.",
      ),
    ],
  },
  {
    "slug": "edgeworks",
    "title": "Edgeworks",
    "category": "Freelance · Software & AI",
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
      "en": "Time Tracker, HireSight and Mora. New products explored with the Edgeworks team.",
      "it": "Time Tracker, HireSight e Mora. Nuovi prodotti sperimentati con il team Edgeworks."
    },
    "story": [
      {
        "en": "My collaboration with Edgeworks began through Salvatore Iannola, a senior software engineer and one of the company’s administrators. I wanted to put my knowledge into practice, while the team wanted to explore new products and solutions to show clients. Those two needs brought us together.",
        "it": "La collaborazione con Edgeworks è nata attraverso Salvatore Iannola, senior software engineer e uno degli amministratori dell’azienda. Io volevo mettere in pratica le mie conoscenze; il team cercava nuovi prodotti e soluzioni da sperimentare e mostrare ai clienti. Queste due esigenze ci hanno fatto incontrare."
      },
      {
        "en": "My role was to experiment with those solutions and help build them. I worked with Salvatore across Time Tracker, HireSight and Mora: he provided direction, feedback and corrections as the projects took shape. It was an interesting collaboration that also let me get to know the wider Edgeworks team.",
        "it": "Il mio ruolo era sperimentare queste soluzioni e contribuire a costruirle. Ho lavorato con Salvatore su Time Tracker, HireSight e Mora: mi dava indicazioni, feedback e correzioni mentre i progetti prendevano forma. È stata una collaborazione interessante, che mi ha permesso anche di conoscere il resto del team Edgeworks."
      },
      {
        "en": "Time Tracker is the most important result for me and is still in use as of October 2026. HireSight has also been used internally by Edgeworks and shown to interested clients, while Mora was an early prototype for classifying incoming emails and preparing draft replies. Each project was a different way to turn an everyday need into software.",
        "it": "Time Tracker è per me il risultato più importante ed è ancora utilizzato a ottobre 2026. Anche HireSight è stato utilizzato internamente da Edgeworks e mostrato a clienti interessati, mentre Mora era un primo prototipo per classificare le email in arrivo e preparare bozze di risposta. Ogni progetto affrontava un’esigenza quotidiana diversa attraverso il software."
      },
      {
        "en": "Salvatore encouraged me to keep improving and gave me constructive criticism alongside positive feedback. That ongoing exchange mattered more than any single correction: I could try ideas, discuss them with an experienced engineer and refine the work.",
        "it": "Salvatore mi spronava a fare meglio e affiancava ai riscontri positivi critiche costruttive. Quel confronto continuo contava più di una singola correzione: potevo provare idee, discuterle con un ingegnere esperto e migliorare il lavoro."
      }
    ],
    "chapters": [
      {
        "id": "timesheet",
        "title": {
          "en": "Time Tracker · Time, projects and reports.",
          "it": "Time Tracker · Ore, progetti e report."
        },
        "body": [
          {
            "en": "Time Tracker grew out of an earlier experience at Marsilea, where I had built a time-tracking tool with Google Sheets and Google Apps Script. Working with that setup had been frustrating. When Edgeworks also needed an efficient way to record hours, we decided to build a new application from scratch.",
            "it": "Time Tracker nasce anche da una precedente esperienza con Marsilea, dove avevo costruito uno strumento per registrare le ore con Google Sheets e Google Apps Script. Lavorare con quella soluzione era stato frustrante. Quando anche Edgeworks ha avuto bisogno di contare le ore in modo efficiente, abbiamo deciso di costruire una nuova applicazione da zero."
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
          "en": "An interface built around the work.",
          "it": "Un’interfaccia intorno al lavoro."
        },
        "body": [
          {
            "en": "We wanted a simple, intuitive interface that worked well on both phones and desktops, backed by a database. Next.js and React provided the interface, with TypeScript, Supabase and Recharts supporting the application, data and charts. The tool brings together time entries, projects, clients and reporting, with authentication and Excel exports.",
            "it": "Volevamo un’interfaccia semplice e intuitiva, utilizzabile bene sia da telefono sia da desktop, con un database dietro. Next.js e React hanno dato forma all’interfaccia, con TypeScript, Supabase e Recharts a supporto dell’applicazione, dei dati e dei grafici. Lo strumento riunisce registrazioni delle ore, progetti, clienti e report, con autenticazione ed esportazioni Excel."
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
          "en": "From a spreadsheet to a daily tool.",
          "it": "Dal foglio di calcolo a uno strumento quotidiano."
        },
        "body": [
          {
            "en": "The main improvement for me was having a workflow tailored to the task. In the spreadsheet, entries could become disorganised and some errors were difficult to handle. Time Tracker gave us more control over how information was entered and managed in the database, through dedicated operations and an interface designed around recording hours.",
            "it": "Il miglioramento principale per me era avere un flusso su misura. Nel foglio le registrazioni potevano diventare disordinate e alcuni errori erano difficili da gestire. Time Tracker ci dava maggiore controllo su come inserire e gestire le informazioni nel database, attraverso operazioni dedicate e un’interfaccia progettata intorno alla registrazione delle ore."
          },
          {
            "en": "It is a straightforward tool, and that is what I like about it: it does the job and remains in use. Building it was satisfying because an experience with a cumbersome workflow became the starting point for something more practical.",
            "it": "È uno strumento semplice, ed è questo che mi piace: fa ciò che serve e continua a essere utilizzato. Costruirlo è stato soddisfacente perché l’esperienza con un flusso poco comodo è diventata il punto di partenza per qualcosa di più pratico."
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
          "en": "HireSight · Applications in context.",
          "it": "HireSight · Candidature nel loro contesto."
        },
        "body": [
          {
            "en": "HireSight began with the need to receive CVs, analyse them and organise them so HR could have an overview of both candidates and employees.",
            "it": "HireSight nasce dalla necessità di ricevere curriculum, analizzarli e organizzarli, dando a HR una visione d’insieme sia dei candidati sia dei dipendenti."
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
          "en": "Connecting the interface and the data.",
          "it": "Collegare l’interfaccia e i dati."
        },
        "body": [
          {
            "en": "React, TypeScript, Python and Supabase connect the interface, data and AI-assisted analysis.",
            "it": "React, TypeScript, Python e Supabase collegano interfaccia, dati e analisi supportata dall’AI."
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
          "en": "Starting with the job positions.",
          "it": "Partire dalle posizioni aperte."
        },
        "body": [
          {
            "en": "A recruitment platform developed in my work with Edgeworks. It helps organise job positions and candidates, with AI-assisted CV analysis.",
            "it": "Una piattaforma di recruiting sviluppata nel mio lavoro con Edgeworks. Aiuta a organizzare posizioni e candidati, con analisi dei CV supportata dall’AI."
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
          "en": "Bringing CVs and skills together.",
          "it": "Riunire curriculum e competenze."
        },
        "body": [
          {
            "en": "The idea was to bring CVs and skills into a shared database, useful for preparing interviews and understanding which capabilities were available for different projects.",
            "it": "L’idea era riunire curriculum e competenze in un database condiviso, utile per preparare colloqui e capire quali capacità fossero disponibili per i diversi progetti."
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
          "en": "Understanding the match.",
          "it": "Capire la corrispondenza."
        },
        "body": [
          {
            "en": "The interface connects candidate details, match scores and the reasoning behind them, so recruiters can review the information in context.",
            "it": "L’interfaccia collega dettagli dei candidati, punteggi di corrispondenza e relative motivazioni, per esaminare le informazioni nel loro contesto."
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
          "en": "Mora · A first email-automation MVP.",
          "it": "Mora · Un primo MVP per le email."
        },
        "body": [
          {
            "en": "Mora was a very early MVP: an email orchestrator that prepared automatic draft replies based on specific company requests. My experience with it was an initial experiment, with a small RAG system to retrieve relevant context for the drafts.",
            "it": "Mora era un MVP davvero embrionale: un orchestratore di email che preparava automaticamente bozze di risposta in base a richieste specifiche delle aziende. La mia esperienza era una prima sperimentazione, con un piccolo sistema RAG per recuperare il contesto utile alle bozze."
          },
          {
            "en": "The prototype explored repetitive, standard communications: information requests, requests for estimates and other categories of incoming mail. It also explored distinguishing spam from other messages and switching language models according to cost and other requirements. The aim was to test a product that could save companies time when handling recurring enquiries.",
            "it": "Il prototipo esplorava le comunicazioni standard e ripetitive: richieste di informazioni, di preventivo e altre categorie di email in arrivo. Comprendeva anche la distinzione tra spam e altri messaggi e la possibilità di cambiare modello linguistico in base ai costi e ad altre esigenze. L’obiettivo era provare un prodotto che potesse far risparmiare tempo alle aziende nella gestione delle richieste ricorrenti."
          },
          {
            "en": "The interesting part was connecting an incoming request to information that could help answer it. Retrieval provided context to the language model; the result was a draft to review. The scope of this work was to test that idea in an early prototype.",
            "it": "La parte interessante era collegare una richiesta in arrivo alle informazioni utili per rispondere. Il recupero dei dati forniva contesto al modello linguistico; il risultato era una bozza da rivedere. Il perimetro di questo lavoro era provare quell’idea in un primo prototipo."
          },
          {
            "en": "Edgeworks now describes Mora as a Python-based email workflow that retrieves unread messages, classifies them and generates contextual drafts, with Gmail API integration. Its product page provides a reference for the workflow; my contribution here concerns the early MVP.",
            "it": "Oggi Edgeworks descrive Mora come un flusso basato su Python che recupera i messaggi non letti, li classifica e genera bozze contestualizzate, con integrazione Gmail API. La pagina del prodotto offre un riferimento per il funzionamento; il mio contributo qui riguarda il primo MVP."
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
  "ollapy", "vector", "pomodoro-go", "removebackground",
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
