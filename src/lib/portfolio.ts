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
    "github": "https://github.com/nannipy/SapienzaFoilingTeam",
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
      "WebSocket"
    ],
    "summary": {
      "en": "From the first website to the boat’s electronics. A team we built together.",
      "it": "Dal primo sito all’elettronica della barca. Un team costruito insieme."
    },
    "story": [
      {
        "en": "I joined Sapienza Foiling Team because I wanted a real project to put my curiosity and skills to work. I started alongside the founders, helping build the team from the ground up. The website was my first contribution; over time, that starting point became a much wider commitment.",
        "it": "Sono entrato nel Sapienza Foiling Team perché volevo un progetto concreto in cui mettere alla prova le mie competenze e la voglia di fare. Ho iniziato insieme ai fondatori, contribuendo a costruire il team da zero. Il sito è stato il mio primo contributo; nel tempo, quel punto di partenza è diventato un impegno molto più ampio."
      },
      {
        "en": "Today I lead the electronics subteam and help manage the team’s digital tools and electronics work. My responsibilities connect software, the embedded system and the organisation around them: deciding what needs doing, working with other people and helping the different pieces come together.",
        "it": "Oggi gestisco il sottoteam di elettronica e seguo una parte del management del team, sia sul lato informatico sia su quello elettronico. Le mie responsabilità collegano il software, il sistema embedded e l’organizzazione del lavoro: capire cosa serve, collaborare con le altre persone e aiutare i diversi pezzi a funzionare insieme."
      },
      {
        "en": "It is an unpaid collaboration, with the continuity and responsibility of a job. I am happy to be part of it and proud of the effort we have put in. Building a team and a boat this ambitious has required time, persistence and people willing to learn together. Seeing what we have made keeps me committed to the next step.",
        "it": "È una collaborazione non retribuita, con la continuità e la responsabilità di un lavoro. Sono felice di farne parte e orgoglioso dell’impegno che ci abbiamo messo. Costruire un team e una barca così ambiziosi ha richiesto tempo, costanza e persone disposte a imparare insieme. Vedere quello che abbiamo realizzato mi dà voglia di continuare a impegnarmi per il passo successivo."
      }
    ],
    "cover": "team",
    "chapters": [
      {
        "title": {
          "en": "Starting with the founders.",
          "it": "Cominciare insieme ai fondatori."
        },
        "body": [
          {
            "en": "At the beginning there was a team to build, alongside the boat we wanted to make. I wanted to develop my skills through something shared and useful. Joining the founders meant finding my place while we were still creating the organisation, learning how to turn individual enthusiasm into work we could carry forward together.",
            "it": "All’inizio c’era un team da costruire, insieme alla barca che volevamo realizzare. Volevo sviluppare le mie competenze attraverso qualcosa di condiviso e utile. Affiancare i fondatori ha significato trovare il mio posto mentre stavamo ancora creando l’organizzazione e imparare a trasformare l’entusiasmo individuale in un lavoro da portare avanti insieme."
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
            "en": "The website was my way into the team. It needed to present the people, the boat, sponsors and the project’s progress. For me, it was also a real reason to learn React: understanding components and how to assemble a site that other people would actually use.",
            "it": "Il sito è stato il mio ingresso nel team. Doveva presentare le persone, la barca, gli sponsor e l’avanzamento del progetto. Per me era anche un motivo concreto per imparare React: capire i componenti e come assemblare un sito che altre persone avrebbero usato davvero."
          },
          {
            "en": "Working on it took me beyond the visible page. I began learning how the backend and the data behind the site worked, how content reached the interface, and what server-side rendering could offer. React and Next.js became things to understand through decisions and results, with their benefits and their complexity.",
            "it": "Lavorarci mi ha portato oltre la pagina visibile. Ho iniziato a capire il backend e i dati dietro il sito, come i contenuti arrivavano all’interfaccia e cosa poteva offrire il server-side rendering. React e Next.js sono diventati strumenti da comprendere attraverso scelte e risultati, con i loro vantaggi e la loro complessità."
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
            "en": "A team website needs to work on the devices people already have. That made performance, compatibility and simplicity practical concerns. I learned to question whether an animation or another layer of the framework was helping the visitor enough to justify its cost.",
            "it": "Il sito di un team deve funzionare sui dispositivi che le persone hanno già. Performance, compatibilità e semplicità sono quindi diventate questioni concrete. Ho imparato a chiedermi se un’animazione o un altro livello del framework aiutassero abbastanza chi visita il sito da giustificarne il costo."
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
            "en": "The public site is one side of the work; the administration area is the other. Content and the data behind it need to be managed by the people who keep the project moving. I wanted the technical choices to support that everyday work, without making a simple task unnecessarily complicated.",
            "it": "Il sito pubblico è una parte del lavoro; l’area di amministrazione è l’altra. I contenuti e i dati che li accompagnano devono essere gestiti dalle persone che fanno avanzare il progetto. Volevo che le scelte tecniche sostenessero questo lavoro quotidiano, senza rendere inutilmente complicata un’operazione semplice."
          },
          {
            "en": "That experience gradually expanded my role. Today I help connect the team’s digital work with the electronics subteam I lead. I care about organising the work as well as writing the code, because the system only becomes useful when people can build and use it together.",
            "it": "Questa esperienza ha ampliato gradualmente il mio ruolo. Oggi contribuisco a collegare il lavoro informatico del team con il sottoteam di elettronica che gestisco. Tengo all’organizzazione del lavoro quanto al codice, perché il sistema diventa utile quando le persone riescono a costruirlo e usarlo insieme."
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
        "title": {
          "en": "Making the boat’s movement visible.",
          "it": "Dare una forma al movimento della barca."
        },
        "body": [
          {
            "en": "This was my first real experience building an electronic system and getting hands-on with hardware. I had to move from software alone to power, cables, sensors and physical connections. I worked with Francesco Miletto, who helped me build the embedded system: sharing that process made a difficult first step much more approachable.",
            "it": "È stata la mia prima vera esperienza nella costruzione di un sistema elettronico e nel mettere le mani sull’hardware. Dovevo passare dal solo software ad alimentazione, cavi, sensori e collegamenti fisici. Ho collaborato con Francesco Miletto, che mi ha aiutato a costruire il sistema embedded: condividere questo percorso ha reso più affrontabile un primo passo difficile."
          },
          {
            "en": "The boat brought a very concrete question into my software work: how could we observe what it was doing, beyond watching it from the shore? I wanted to connect the movement of something we had built to information the team could actually read. Telemetry became my way of contributing to that shared project.",
            "it": "La barca ha portato una domanda molto concreta nel mio lavoro software: come potevamo osservare cosa stava facendo, oltre a guardarla da riva? Volevo collegare il movimento di qualcosa che avevamo costruito a informazioni che il team potesse leggere. La telemetria è diventata il mio modo di contribuire a quel progetto collettivo."
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
            "en": "We designed a PCB from scratch, arranged the connections and components, and had the boards manufactured and shipped from China. Once they arrived, the drawing had to become something physical: soldering, assembling and checking whether the connections worked as intended.",
            "it": "Abbiamo disegnato una PCB da zero, organizzato collegamenti e componenti e fatto produrre e spedire le schede dalla Cina. Quando sono arrivate, il disegno doveva diventare qualcosa di fisico: saldare, assemblare e controllare se i collegamenti funzionavano come previsto."
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
            "en": "Hardware brought a different kind of difficulty: a wiring mistake or a bad connection could stop the system even when the code looked right. Learning to solder, isolate a problem and test one part at a time became as important as programming the firmware.",
            "it": "L’hardware ha portato difficoltà diverse: un errore nel cablaggio o un contatto problematico potevano fermare il sistema anche con un codice apparentemente corretto. Imparare a saldare, isolare un problema e verificare una parte alla volta è diventato importante quanto programmare il firmware."
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
          "en": "Very little money. A huge idea.",
          "it": "Pochissimi soldi. Un’idea enorme."
        },
        "body": [
          {
            "en": "October 2024. We set out to build a single-handed foiling Moth from scratch. With Sapienza Foiling Team, an idea became something we had to find a way to make real: a hull, a sail, the ability to rise out of the water. There was little money and no shortage of difficulties. What we had was a fantastic group of people.",
            "it": "Ottobre 2024. Ci siamo messi in testa di costruire da zero un Moth monoposto capace di volare sui foil. Con il Sapienza Foiling Team, un’idea è diventata qualcosa a cui dovevamo trovare il modo di dare forma: uno scafo, una vela, la possibilità di sollevarsi dall’acqua. I soldi erano pochi e le difficoltà non mancavano. Avevamo però un gruppo fantastico."
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
            "en": "Twenty-four hours later, we put the boat back on the water. That return means as much to me as the first flight. Because I know what stood between the two: a broken part, limited resources, and a team that found a way together.",
            "it": "Ventiquattro ore dopo, abbiamo rimesso la barca in acqua. Quel ritorno, per me, vale quanto il primo volo. Perché so cosa c’è stato in mezzo: un pezzo rotto, risorse limitate e un team che, insieme, ha trovato il modo."
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
        "The collaboration began through someone inside RECUP whom I had worked with on a previous project. That connection brought us together, and I joined the work on a management platform tailored to the association’s needs.",
        "La collaborazione è nata attraverso una persona all’interno di RECUP con cui avevo già lavorato a un altro progetto. Da quel rapporto siamo entrati in contatto e ho collaborato alla realizzazione di un gestionale costruito su misura per le esigenze dell’associazione.",
      ),
      text(
        "Built with Next.js, TypeScript and Supabase, it connects two views of the same work: a portal for volunteers to record recovered food and the people present, and a private administration area to manage activities, review data and prepare reports.",
        "Realizzato con Next.js, TypeScript e Supabase, il gestionale collega due punti di vista sullo stesso lavoro: un portale per le persone volontarie, che registrano il cibo recuperato e chi partecipa, e un’area privata per gli admin, che gestiscono le attività, consultano i dati e preparano i report.",
      ),
      text(
        "Recording the food is only the beginning. The platform brings together recovered weight, participation and environmental indicators, including estimates of water saved and CO₂ emissions avoided. The numbers help make visible both the resources preserved and the people who make each recovery possible.",
        "Registrare gli alimenti è solo il punto di partenza. La piattaforma mette insieme peso recuperato, partecipazione e indicatori ambientali, comprese le stime di acqua risparmiata e CO₂ evitata. I numeri aiutano a rendere visibili sia le risorse preservate sia le persone che rendono possibile ogni recupero.",
      ),
      text(
        "Having organised, reportable data can help RECUP explain its impact to donors and funding partners, support funding applications and identify where to improve its activities. For me, the value of this software lies in helping that work become easier to understand and sustain.",
        "Avere dati organizzati e rendicontabili può aiutare RECUP a raccontare il proprio impatto a donatori e finanziatori, sostenere richieste di fondi e capire dove migliorare le attività. Per me il valore di questo software sta anche qui: aiutare un lavoro importante a essere più comprensibile e più sostenibile nel tempo.",
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
          "Reports bring together recovered food, attendance and environmental estimates. Filters and exports help turn daily entries into evidence the association can use for reporting, conversations with supporters and funding applications.",
          "I report riuniscono cibo recuperato, presenze e stime ambientali. Filtri ed esportazioni aiutano a trasformare le registrazioni quotidiane in informazioni utili per la rendicontazione, il dialogo con chi sostiene RECUP e le richieste di finanziamento.",
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
    title: "Edocla Costruzioni",
    category: "Website · Construction",
    color: "#d3ad90",
    ink: "#412d20",
    website: "https://edoclacostruzioni.com",
    github: "https://github.com/nannipy/ec-website",
    designCredit: { name: "Iachini Design" },
    images: ["/work/edocla-opening-v2.jpg"],
    tools: ["React", "Vercel", "Resend"],
    summary: text(
      "A friend's construction company in Rome. A simple website to show the value of its work.",
      "L’impresa edile di un caro amico, a Roma. Un sito semplice per dare valore al suo lavoro.",
    ),
    story: [
      text(
        "Edocla is a construction company in Rome run by a close friend. This project began with a very personal reason: helping someone I care about present his company online, with the same care he puts into his work.",
        "Edocla è un’impresa edile a Roma di un mio caro amico. Questo progetto è nato da un motivo molto personale: aiutare una persona a cui tengo a presentare online la sua azienda, con la stessa cura che mette nel proprio lavoro.",
      ),
      text(
        "We worked together with another friend, Iachini Design, who designed the website. My role was to implement that design in React, deploy the application on Vercel and connect the contact emails through Resend. It was a collaboration with clear roles and one shared goal: a lean, effective website that lets the company’s value come through.",
        "Abbiamo lavorato insieme a un altro amico, Iachini Design, che ha realizzato il design del sito. Io mi sono occupato di implementarlo in React, pubblicare l’applicazione su Vercel e collegare le email del modulo di contatto tramite Resend. Una collaborazione con ruoli chiari e un obiettivo comune: un sito snello, efficace, capace di far emergere il valore dell’azienda.",
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
          "The services section puts the practical questions first. Visitors can explore the kinds of work Edocla offers, from construction and renovation to interiors and systems. The expandable groups keep a substantial list readable without turning the page into a wall of text.",
          "La sezione servizi parte dalle domande pratiche. Chi visita il sito può esplorare gli interventi di Edocla, dalle costruzioni alle ristrutturazioni, dagli interni agli impianti. I gruppi espandibili tengono leggibile un elenco ampio, senza trasformare la pagina in un muro di testo.",
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
        caption: text("A detail of the four stages of Edocla’s working process.", "Un dettaglio delle quattro fasi del processo di lavoro di Edocla."),
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
          "Looking back, what matters most to me is the collaboration. A friend brought his company, another brought the design, and I helped turn it into a working website. The result does what we needed: it presents Edocla, explains its work and gives people a clear way to get in touch.",
          "Ripensandoci, la parte che conta di più per me è la collaborazione. Un amico ha portato la sua azienda, un altro il design, e io ho aiutato a trasformare tutto in un sito funzionante. Il risultato fa ciò che ci serviva: presenta Edocla, spiega il suo lavoro e dà alle persone un modo chiaro per contattarla.",
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
        "en": "I wanted a small server running at home around the clock: somewhere to host a Telegram bot, start a Docker container, automate a task or try whatever idea came to mind. A computer that could keep doing its job when my laptop was closed, available whenever I needed it. That is where Nannix server began.",
        "it": "Volevo un piccolo server acceso a casa H24: un posto dove ospitare un bot Telegram, avviare un container Docker, automatizzare un’attività o provare qualsiasi idea mi passasse per la testa. Un computer che continuasse a fare il suo lavoro anche con il mio portatile chiuso, disponibile quando mi serve. Nannix server nasce da questa esigenza."
      },
      {
        "en": "Alongside that freedom to experiment, I wanted to depend less on Google and other cloud services. Paying recurring subscriptions as my photo library and files grew did not feel sustainable for me over time. I wanted to decide where my data lived and how to manage it, on hardware I could take care of myself.",
        "it": "Accanto alla libertà di sperimentare, volevo dipendere meno da Google e dagli altri servizi cloud. Pagare abbonamenti ricorrenti mentre foto e file aumentano non mi sembrava sostenibile nel tempo, soprattutto dal punto di vista dei costi. Volevo scegliere dove conservare i miei dati e come gestirli, su hardware di cui potermi occupare direttamente."
      },
      {
        "en": "I started with a 2016 MacBook Air I already had. Linux and Docker turned it into a home for both everyday services and new experiments. Reusing it kept the initial cost down and gave a second life to a machine that still had something to offer.",
        "it": "Sono partito da un MacBook Air del 2016 che avevo già. Linux e Docker lo hanno trasformato in una casa per i servizi quotidiani e per nuovi esperimenti. Riutilizzarlo ha contenuto la spesa iniziale e dato una seconda vita a una macchina che aveva ancora qualcosa da offrire."
      },
      {
        "en": "Today Immich holds my photos and videos, Filebrowser gives me access to my files and Pi-hole helps me control DNS traffic on my network. Tailscale lets me reach the server from my other devices, even away from home. The services make it useful today; being able to add the next idea is what keeps the project interesting.",
        "it": "Oggi Immich ospita le mie foto e i miei video, Filebrowser mi dà accesso ai file e Pi-hole mi aiuta a controllare il traffico DNS della rete. Tailscale mi permette di raggiungere il server dagli altri dispositivi, anche fuori casa. I servizi lo rendono utile oggi; poterci aggiungere la prossima idea è ciò che continua a rendere interessante il progetto."
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
            "en": "The machine sits in a corner of my desk, connected and ready to host services throughout the day. Its limited memory and ageing SSD shape what I can run. I can improve the setup as needs and budget change, without waiting for the perfect hardware to begin.",
            "it": "La macchina occupa un angolo della scrivania, collegata e pronta a ospitare servizi durante tutta la giornata. La memoria limitata e l’SSD che invecchia orientano ciò che posso farci girare. Posso migliorare la configurazione man mano che cambiano le esigenze e il budget, senza aspettare l’hardware perfetto per cominciare."
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
            "en": "A familiar laptop now runs a Linux environment I can configure and understand. It is the foundation for the services I use and a place to learn by building something that stays running after the experiment is over.",
            "it": "Un portatile familiare ora ospita un ambiente Linux che posso configurare e capire. È la base dei servizi che uso e uno spazio per imparare costruendo qualcosa che rimane in funzione anche dopo la fase di esperimento."
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
        "A personal Pomodoro tool written in Go, with a system-tray timer and desktop notifications. A deliberately small project built around the rhythm of working and taking a break.",
        "Uno strumento Pomodoro personale scritto in Go, con timer nella barra di sistema e notifiche desktop. Un progetto volutamente piccolo, intorno al ritmo del lavoro e delle pause.",
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
        "Training matters a lot to me. Cycling and running are part of my everyday life: I enjoy being outside, putting in the work and seeing how I change over time. That is why I care about understanding what is happening around each session, as well as the performance itself.",
        "L’allenamento è una parte importante della mia vita. Il ciclismo e la corsa fanno parte della mia quotidianità: mi piace stare fuori, impegnarmi e vedere come cambio nel tempo. Per questo tengo a capire ciò che succede intorno a ogni allenamento, oltre alla prestazione in sé.",
      ),
      text(
        "My Garmin records a lot about my days. Training, sleep, recovery and physiological measurements are all there, but I wanted to bring them into one picture and ask questions that start from my own context.",
        "Il mio Garmin registra molto delle mie giornate. Allenamento, sonno, recupero e parametri fisiologici ci sono tutti, ma volevo riunirli in un quadro unico e fare domande che partissero dal mio contesto.",
      ),
      text(
        "I find it fascinating to observe those trends and explore whether they can help me anticipate changes in my condition. Managing effort, recovery and injury concerns, while performing at my best, is something I care about deeply. I want to understand the data alongside how I actually feel, and learn which questions are worth asking.",
        "Trovo molto interessante osservare questi andamenti e capire se possono aiutarmi ad anticipare cambiamenti nella mia condizione. Gestire lo sforzo, il recupero e le difficoltà legate agli infortuni, cercando di esprimere al meglio le mie prestazioni, è una cosa a cui tengo molto. Voglio leggere i dati insieme a come mi sento davvero e imparare quali domande vale la pena fare.",
      ),
      text(
        "That was the reason for Aesculapius: a personal experiment in turning the data I already collect into something I can discuss. I wanted to connect training, food, rest and sleep in one conversation. Monitoring my own patterns and exploring possible predictions are goals of the project, rather than capabilities I have already validated.",
        "Da qui nasce Aesculapius: un esperimento personale per trasformare i dati che già raccolgo in qualcosa su cui confrontarmi. Volevo collegare allenamenti, alimentazione, riposo e sonno in un’unica conversazione. Monitorare i miei andamenti ed esplorare possibili previsioni sono obiettivi del progetto, ancora da verificare nell’uso.",
      ),
      text(
        "The project combines Garmin Connect data with an AI and retrieval pipeline. I chose a Telegram bot as the interface so that the conversation could fit into a tool I already use, instead of another dashboard to check.",
        "Il progetto combina i dati Garmin Connect con una pipeline AI e di retrieval. Ho scelto un bot Telegram come interfaccia per inserire la conversazione in uno strumento che uso già, invece di aggiungere un’altra dashboard da consultare.",
      ),
      text(
        "Self-hosting is part of the idea: I want to own the storage and understand the processing of my personal data. The bot is a project shaped around my needs, and something I can keep refining as I learn from using it.",
        "Il self-hosting fa parte dell’idea: voglio gestire l’archiviazione e capire come vengono elaborati i miei dati personali. Il bot è un progetto costruito intorno alle mie esigenze, da affinare mentre imparo a usarlo.",
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
          "Running is another part of that same curiosity. I want to improve my performance and understand how effort fits into the rest of my life. Aesculapius comes from wanting to bring those observations together: sessions, sleep, recovery and personal sensations, with room to ask questions as my situation changes.",
          "Anche la corsa fa parte della stessa curiosità. Voglio migliorare le prestazioni e capire come lo sforzo si inserisce nel resto della mia vita. Aesculapius nasce dal desiderio di riunire queste osservazioni: allenamenti, sonno, recupero e sensazioni personali, con uno spazio in cui fare domande mentre la mia situazione cambia.",
        )],
      },
    ],
    journey: [
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
          "Garmin Connect provides the records. The project organises that personal context and uses retrieval to bring relevant information into the conversation.",
          "Garmin Connect fornisce le registrazioni. Il progetto organizza il contesto personale e usa il retrieval per portare nella conversazione le informazioni pertinenti.",
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
        "OllaPy provides an interface for talking to local language models through Ollama. The conversations and models run on your own machine.",
        "OllaPy offre un’interfaccia per parlare con modelli linguistici locali tramite Ollama. Conversazioni e modelli rimangono sul tuo computer.",
      ),
      text(
        "The project explores model selection, chat and file uploads through a straightforward interface.",
        "Il progetto esplora selezione dei modelli, chat e caricamento dei file attraverso un’interfaccia immediata.",
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
        "Vector is a terminal-based Hacker News assistant. It brings together the feed, article reading and AI-assisted analysis of articles and discussions.",
        "Vector è un assistente per Hacker News nel terminale. Riunisce feed, lettura degli articoli e analisi di articoli e discussioni con l’AI.",
      ),
      text(
        "It supports local models through Ollama and cloud models through Gemini, with saved reports and contextual chat.",
        "Supporta modelli locali tramite Ollama e modelli cloud tramite Gemini, con report salvati e chat contestuale.",
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
    tools: ["Python", "Image processing"],
    summary: text("One task. Less friction.", "Un compito. Meno attrito."),
    story: [
      text(
        "A small image-processing utility for removing backgrounds. Another personal tool built around a specific task.",
        "Una piccola utility per rimuovere lo sfondo dalle immagini. Un altro strumento personale costruito intorno a un compito preciso.",
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
        "Running, cycling and hiking made my Garmin fēnix 7X part of my daily routine. I built Personal Fenix Face to choose what I see at a glance: a large, readable time display and the fields that matter to me, instead of a fixed layout designed for everyone.",
        "Corsa, ciclismo e montagna hanno reso il Garmin fēnix 7X parte della mia quotidianità. Ho creato Personal Fenix Face per scegliere cosa vedere a colpo d’occhio: l’ora grande e leggibile e i campi che mi servono, invece di un layout fisso pensato per tutti.",
      ),
      text(
        "The challenge was fitting useful information into a round 280 × 280 MIP display. I worked on spacing, bitmap fonts, icons and configurable colours, with selectable fields for activity, battery, weather and other metrics available on the watch. The face uses local Garmin data without starting GPS or streaming sensors.",
        "La sfida era far entrare informazioni utili in un display MIP rotondo da 280 × 280 pixel. Ho lavorato su spaziature, font bitmap, icone e colori configurabili, con campi selezionabili per attività, batteria, meteo e altre metriche disponibili sull’orologio. Il quadrante usa dati locali Garmin senza avviare GPS o sensori in streaming.",
      ),
      text(
        "Long-press interactions let me switch between opening a field’s associated Garmin app and changing the displayed metric. The image here is the current simulator capture; physical-device gestures and phone synchronisation still need verification.",
        "Le pressioni prolungate permettono di alternare l’apertura dell’app Garmin associata a un campo e la modifica della metrica mostrata. L’immagine è la cattura corrente del simulatore; i gesti sul dispositivo fisico e la sincronizzazione con il telefono restano da verificare.",
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
      "React",
      "TypeScript",
      "Python",
      "Supabase",
      "Recharts",
      "LLMs",
      "RAG"
    ],
    "summary": {
      "en": "HireSight, Timesheet and Mora. Three projects from my freelance work.",
      "it": "HireSight, Timesheet e Mora. Tre progetti della mia esperienza freelance."
    },
    "story": [
      {
        "en": "My freelance collaboration with Edgeworks brought together three different kinds of work: recruitment with HireSight, time tracking and reporting with Timesheet, and an early email-automation MVP called Mora.",
        "it": "La collaborazione freelance con Edgeworks ha riunito tre lavori diversi: il recruiting con HireSight, la gestione delle ore e dei report con Timesheet e un primo MVP di automazione delle email, Mora."
      },
      {
        "en": "The common thread was making information easier to work with: connecting data, interfaces and workflows to the needs of the people using them. Each project had its own scope, from application development to a small experiment with language models and retrieval.",
        "it": "Il filo comune era rendere le informazioni più facili da usare: collegare dati, interfacce e flussi di lavoro alle esigenze delle persone. Ogni progetto aveva un perimetro diverso, dallo sviluppo applicativo a un piccolo esperimento con modelli linguistici e recupero del contesto."
      }
    ],
    "chapters": [
      {
        "id": "hiresight",
        "title": {
          "en": "HireSight · Applications in context.",
          "it": "HireSight · Candidature nel loro contesto."
        },
        "body": [
          {
            "en": "A recruitment platform developed in my work with Edgeworks. It helps organise job positions and candidates, with AI-assisted CV analysis.",
            "it": "Una piattaforma di recruiting sviluppata nel mio lavoro con Edgeworks. Aiuta a organizzare posizioni e candidati, con analisi dei CV supportata dall’AI."
          },
          {
            "en": "The interface connects candidate details, match scores and the reasoning behind them, so recruiters can review the information in context.",
            "it": "L’interfaccia collega dettagli dei candidati, punteggi di corrispondenza e relative motivazioni, per esaminare le informazioni nel loro contesto."
          },
          {
            "en": "React, TypeScript, Python and Supabase connect the interface, data and AI-assisted analysis.",
            "it": "React, TypeScript, Python e Supabase collegano interfaccia, dati e analisi supportata dall’AI."
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
        },
        "images": [
          {
            "src": "/work/hiresight-live.jpg",
            "width": 1280,
            "height": 720,
            "caption": {
              "en": "HireSight · Screen 2",
              "it": "HireSight · Schermata 2"
            }
          },
          {
            "src": "/hiresight/posizioni.png",
            "width": 1908,
            "height": 1038,
            "caption": {
              "en": "HireSight · Screen 3",
              "it": "HireSight · Schermata 3"
            }
          },
          {
            "src": "/hiresight/candidati.png",
            "width": 1908,
            "height": 1038,
            "caption": {
              "en": "HireSight · Screen 4",
              "it": "HireSight · Schermata 4"
            }
          },
          {
            "src": "/hiresight/dettaglio_candidato.png",
            "width": 1908,
            "height": 1038,
            "caption": {
              "en": "HireSight · Screen 5",
              "it": "HireSight · Schermata 5"
            }
          }
        ],
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
        "id": "timesheet",
        "title": {
          "en": "Timesheet · Time, projects and reports.",
          "it": "Timesheet · Ore, progetti e report."
        },
        "body": [
          {
            "en": "An internal timesheet management application for Edgeworks, bringing together time entries, projects, clients and reporting.",
            "it": "Un’applicazione di gestione timesheet per Edgeworks che riunisce registrazioni delle ore, progetti, clienti e report."
          },
          {
            "en": "The application includes authentication, interactive charts and Excel exports. I worked on modernising the interface and the full-stack workflow.",
            "it": "L’applicazione include autenticazione, grafici interattivi ed esportazioni Excel. Ho lavorato alla modernizzazione dell’interfaccia e del flusso full-stack."
          },
          {
            "en": "React, TypeScript, Supabase and Recharts support the application, its data and charts.",
            "it": "React, TypeScript, Supabase e Recharts supportano l’applicazione, i dati e i grafici."
          }
        ],
        "image": {
          "src": "/work/timesheet-reports.webp",
          "width": 1660,
          "height": 1146,
          "caption": {
            "en": "Timesheet · Overview",
            "it": "Timesheet · Panoramica"
          }
        },
        "images": [
          {
            "src": "/work/timesheet-dashboard.webp",
            "width": 1682,
            "height": 1672,
            "caption": {
              "en": "Timesheet · Screen 2",
              "it": "Timesheet · Schermata 2"
            }
          },
          {
            "src": "/work/timesheet-calendar.webp",
            "width": 1672,
            "height": 1116,
            "caption": {
              "en": "Timesheet · Screen 3",
              "it": "Timesheet · Schermata 3"
            }
          }
        ],
        "links": [
          {
            "label": {
              "en": "Timesheet on Edgeworks",
              "it": "Timesheet sul sito Edgeworks"
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
