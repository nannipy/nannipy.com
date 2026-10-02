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
    title: Copy;
    body: Copy[];
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
    slug: "sapienza-foiling-team",
    title: "Sapienza Foiling Team",
    category: "Website · Team",
    color: "#a8bed0",
    ink: "#203341",
    website: "https://sapienzafoilingteam.com",
    github: "https://github.com/nannipy/SapienzaFoilingTeam",
    images: [
      "/work/sft-live.jpg",
      "/SFT/SFT_blog.png",
      "/SFT/SFT_admin_dashboard.png",
    ],
    tools: ["Next.js", "TypeScript", "Web design"],
    summary: text(
      "A home for a team that builds boats that fly.",
      "Una casa digitale per un team che costruisce barche che volano.",
    ),
    story: [
      text(
        "The website brings the Sapienza Foiling Team’s work together: the boat, the people, the sponsors and the stories behind the project.",
        "Il sito riunisce il lavoro del Sapienza Foiling Team: la barca, le persone, gli sponsor e le storie del progetto.",
      ),
      text(
        "I worked on the public website and the tools behind it, including the blog and administration area. It is part of my wider experience with the team, alongside the telemetry project.",
        "Ho lavorato al sito pubblico e agli strumenti per gestirlo, tra cui blog e area amministrativa. È parte della mia esperienza nel team, insieme al progetto di telemetria.",
      ),
    ],
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
    images: [
      "/work/recup.webp",
      "/work/recup-market.webp",
      "/Recup/Dashboard_2.png",
    ],
    tools: ["Next.js", "TypeScript", "Supabase"],
    summary: text(
      "Software for the people who give food a second chance.",
      "Software per chi dà una seconda possibilità al cibo.",
    ),
    story: [
      text(
        "RECUP recovers surplus food through a network of volunteers. I am building a management platform to support the people doing this work.",
        "RECUP recupera eccedenze alimentari attraverso una rete di volontari. Sto costruendo un gestionale per supportare le persone che fanno questo lavoro.",
      ),
      text(
        "The project connects recovery activities, volunteers and reporting. The focus is on making everyday tasks easier while keeping the information useful to the organisation.",
        "Il progetto collega recuperi, volontari e report. L’obiettivo è semplificare le attività quotidiane mantenendo informazioni utili all’associazione.",
      ),
    ],
  },
  {
    slug: "sft-telemetry",
    title: "SFT Telemetry",
    category: "Embedded · Sailing",
    color: "#96b5ac",
    ink: "#1c3832",
    images: ["/work/telemetry-map-cover.png"],
    website: "https://sapienzafoilingteam.com",
    tools: ["ESP32-S3", "C++", "IMU + GPS", "WebSocket"],
    summary: text(
      "A boat built from scratch. A team that kept it afloat. My part in understanding how it moves.",
      "Una barca costruita da zero. Un team che non si è arreso. Il mio contributo per capire come si muove.",
    ),
    chapters: [
      {
        title: {
          en: "Very little money. A huge idea.",
          it: "Pochissimi soldi. Un’idea enorme.",
        },
        body: [
          {
            en: "October 2024. We set out to build a single-handed foiling Moth from scratch. With Sapienza Foiling Team, an idea became something we had to find a way to make real: a hull, a sail, the ability to rise out of the water. There was little money and no shortage of difficulties. What we had was a fantastic group of people.",
            it: "Ottobre 2024. Ci siamo messi in testa di costruire da zero un Moth monoposto capace di volare sui foil. Con il Sapienza Foiling Team, un’idea è diventata qualcosa a cui dovevamo trovare il modo di dare forma: uno scafo, una vela, la possibilità di sollevarsi dall’acqua. I soldi erano pochi e le difficoltà non mancavano. Avevamo però un gruppo fantastico.",
          },
          {
            en: "Looking at this photo, I see more than a finished boat. I see everything it took to get it there. And the people who made it possible.",
            it: "Quando guardo questa foto, non vedo soltanto una barca finita. Vedo tutto quello che è servito per portarla fin lì. E le persone che l’hanno reso possibile.",
          },
        ],
        image: {
          src: "/work/garda-build.webp",
          width: 1400,
          height: 788,
          caption: text(
            "Building the boat, together.",
            "Costruire la barca, insieme.",
          ),
        },
      },
      {
        title: {
          en: "Then our boat flew.",
          it: "Poi la nostra barca ha volato.",
        },
        body: [
          {
            en: "We brought it to Lake Garda. Our boat, the one we had built ourselves, was finally on the water. Then it foiled. There is something difficult to put into words about seeing an idea leave the workshop and lift off the surface of a lake. All the difficulties were still part of the story. But now, so was that moment.",
            it: "L’abbiamo portata al Lago di Garda. La nostra barca, quella che avevamo costruito noi, era finalmente in acqua. Poi ha volato. C’è qualcosa di difficile da spiegare nel vedere un’idea uscire dal lavoro di costruzione e sollevarsi dalla superficie di un lago. Tutte le difficoltà facevano ancora parte della storia. Ma adesso c’era anche quel momento.",
          },
        ],
        video: {
          src: "/work/garda-flight.mp4",
          poster: "/work/garda-flight-poster.webp",
          caption: text(
            "Our very first flight! Turn the sound on: that’s me yelling with excitement. Then comes the crash… all part of learning to foil. Nothing to worry about, hahaha!",
            "Il nostro primissimo volo! Alza il volume: quello che urla dall’emozione sono io. Poi si schianta… ma fa parte del gioco quando impari a volare sui foil. Niente paura, ahahah!",
          ),
        },
        image: {
          src: "/work/garda-boat.webp",
          width: 1600,
          height: 2400,
          caption: {
            en: "The boat on Lake Garda. Something we had built, finally in the water.",
            it: "La barca sul Garda. Qualcosa che avevamo costruito noi, finalmente in acqua.",
          },
          credit: "Emma Bortoluzzi · SuMoth Challenge 2026",
        },
      },
      {
        title: {
          en: "Broken. Back on the water in 24 hours.",
          it: "Si è rotta. Dopo 24 ore era di nuovo in acqua.",
        },
        body: [
          {
            en: "Then a part broke. After everything it had taken to get there, we were suddenly faced with another problem to solve. We rebuilt the part from scratch, using iron bars from local hardware shops and welding them together. Those legendary hardware shops became part of our project, too.",
            it: "Poi si è rotto un pezzo. Dopo tutto quello che era servito per arrivare fin lì, ci siamo ritrovati davanti a un altro problema da risolvere. Abbiamo ricostruito il pezzo da capo, con le spranghe di ferro delle ferramenta e le saldature. Quelle ferramenta mitiche sono entrate a far parte del nostro progetto anche loro.",
          },
          {
            en: "Twenty-four hours later, we put the boat back on the water. That return means as much to me as the first flight. Because I know what stood between the two: a broken part, limited resources, and a team that found a way together.",
            it: "Ventiquattro ore dopo, abbiamo rimesso la barca in acqua. Quel ritorno, per me, vale quanto il primo volo. Perché so cosa c’è stato in mezzo: un pezzo rotto, risorse limitate e un team che, insieme, ha trovato il modo.",
          },
        ],
        image: {
          src: "/work/garda-hands.webp",
          width: 1024,
          height: 683,
          caption: {
            en: "Hands on the boat. The work we shared at Garda.",
            it: "Le mani sulla barca. Il lavoro condiviso al Garda.",
          },
          credit: "Alessandro Cazzulani · SuMoth Challenge 2026",
        },
      },
      {
        title: {
          en: "Competing. Helping each other.",
          it: "In competizione. Dalla stessa parte.",
        },
        body: [
          {
            en: "Around us were students from Cagliari, Munich, Southampton, Milan, Trieste and across Europe. Different teams, different boats, the same desire to build something and see it sail. We competed on sustainable sailing and foiling, and we helped one another. That combination made the experience extraordinary.",
            it: "Intorno a noi c’erano studenti da Cagliari, Monaco, Southampton, Milano, Trieste e da tutta Europa. Team diversi, barche diverse, la stessa voglia di costruire qualcosa e vederlo navigare. Ci sfidavamo sulla sostenibilità delle barche a vela e sul foiling, e ci aiutavamo. Questa combinazione ha reso l’esperienza straordinaria.",
          },
          {
            en: "I came away with the memory of the boat, but also of how generous and welcoming everyone was. The competition brought us there. The people are a reason I will remember it.",
            it: "Mi è rimasto il ricordo della barca, ma anche della disponibilità e della simpatia di tutte quelle persone. La competizione ci ha portati lì. Le persone sono uno dei motivi per cui me lo ricorderò.",
          },
        ],
        image: {
          src: "/work/garda-community.webp",
          width: 1024,
          height: 768,
          caption: {
            en: "Teams together at the SuMoth Challenge on Lake Garda.",
            it: "I team riuniti alla SuMoth Challenge sul Lago di Garda.",
          },
          credit: "Alessandro Cazzulani · SuMoth Challenge 2026",
        },
      },
      {
        title: {
          en: "A boat. And everything it brought us.",
          it: "Una barca. E tutto quello che ci ha dato.",
        },
        body: [
          {
            en: "I am proud of the boat we built. I am just as proud to be part of the team that built it, repaired it and got it back on the water. My telemetry work belongs to that story: code and sensors, inside something much bigger that we made together.",
            it: "Sono orgoglioso della barca che abbiamo costruito. E sono altrettanto orgoglioso di far parte del team che l’ha costruita, riparata e rimessa in acqua. Il mio lavoro sulla telemetria appartiene a questa storia: codice e sensori, dentro qualcosa di molto più grande che abbiamo fatto insieme.",
          },
        ],
      },
    ],
    story: [
      {
        en: "My contribution is an embedded telemetry system built around an ESP32-S3, inertial sensors and GPS. I am developing it to turn the boat’s movement into information we can inspect, connecting my software work to the boat and to the questions the team asks about it.",
        it: "Il mio contributo è un sistema di telemetria embedded basato su ESP32-S3, sensori inerziali e GPS. Lo sto sviluppando per trasformare il movimento della barca in informazioni da osservare, collegando il mio lavoro software alla barca e alle domande del team.",
      },
      {
        en: "The firmware reads the sensors and estimates orientation through sensor fusion. Web visualisers use a WebSocket bridge to show orientation and GPS information. The interface below is shown without a connected sensor.",
        it: "Il firmware legge i sensori e stima l’orientamento tramite fusione sensoriale. I visualizzatori web usano un bridge WebSocket per mostrare orientamento e informazioni GPS. L’interfaccia qui sotto è mostrata senza un sensore collegato.",
      },
    ],
    gallery: [
      {
        src: "/work/garda-workbench.webp",
        width: 1400,
        height: 1867,
        caption: {
          en: "The workbench: laptops, wiring and electronics.",
          it: "Il banco di lavoro: computer, cablaggi ed elettronica.",
        },
        title: {
          en: "Making the boat’s movement visible.",
          it: "Dare una forma al movimento della barca.",
        },
        body: [
          {
            en: "The boat brought a very concrete question into my software work: how could we observe what it was doing, beyond watching it from the shore? I wanted to connect the movement of something we had built to information the team could actually read. Telemetry became my way of contributing to that shared project.",
            it: "La barca ha portato una domanda molto concreta nel mio lavoro software: come potevamo osservare cosa stava facendo, oltre a guardarla da riva? Volevo collegare il movimento di qualcosa che avevamo costruito a informazioni che il team potesse leggere. La telemetria è diventata il mio modo di contribuire a quel progetto collettivo.",
          },
          {
            en: "That started on a table, with computers, cables and sensors. Before designing a finished board, I had to make the individual parts communicate and understand what they were telling me. The photograph captures that stage: the project spread across a workbench, while software and electronics began to meet.",
            it: "Tutto è iniziato su un tavolo, tra computer, cavi e sensori. Prima di pensare a una scheda finita, dovevo far comunicare i singoli componenti e capire cosa mi stavano dicendo. La foto racconta quella fase: il progetto sparso sul banco di lavoro, mentre software ed elettronica cominciavano a incontrarsi.",
          },
        ],
      },
      {
        src: "/work/garda-telemetry-prototype.webp",
        width: 1600,
        height: 1067,
        caption: {
          en: "The wired prototype alongside the connected 3D visualiser.",
          it: "Il prototipo cablato accanto al visualizzatore 3D collegato.",
        },
        title: {
          en: "From loose wires to a boat on screen.",
          it: "Dai fili a una barca sullo schermo.",
        },
        body: [
          {
            en: "On the workbench, the electronics sit next to a browser displaying the boat’s orientation. The ESP32-S3 reads an inertial sensor and GPS. The firmware combines sensor readings to estimate roll, pitch and yaw; a bridge then sends that information to the web visualiser.",
            it: "Sul banco di lavoro, l’elettronica è accanto al browser che mostra l’assetto della barca. L’ESP32-S3 legge un sensore inerziale e il GPS. Il firmware combina le misure per stimare rollio, beccheggio e imbardata; un bridge porta poi queste informazioni al visualizzatore web.",
          },
          {
            en: "For me, the important step was connecting both ends: a physical board and a model I could inspect on screen. It gave the code a visible consequence. The bench prototype made that connection tangible: moving from readings in a program to an object whose orientation I could see.",
            it: "Per me, il passaggio importante è stato collegare le due estremità: una scheda fisica e un modello che potevo osservare sullo schermo. Il codice aveva una conseguenza visibile. Il prototipo al banco ha reso concreto quel collegamento: dalle letture dentro un programma a un oggetto di cui potevo vedere l’orientamento.",
          },
        ],
      },
      {
        src: "/work/garda-pcb.webp",
        width: 1400,
        height: 2488,
        caption: {
          en: "The circuit boards before assembly.",
          it: "I circuiti stampati prima dell’assemblaggio.",
        },
        title: {
          en: "Giving the electronics a structure.",
          it: "Dare una struttura all’elettronica.",
        },
        body: [
          {
            en: "A wired prototype is useful for trying things out, but it also makes every connection part of the experiment. The circuit boards represent the next step: moving towards a more organised assembly, with a place for the modules and their connections.",
            it: "Un prototipo cablato serve a provare le cose, ma rende ogni collegamento parte dell’esperimento. I circuiti stampati raccontano il passo successivo: andare verso un assemblaggio più ordinato, con uno spazio per i moduli e per le loro connessioni.",
          },
          {
            en: "It is a different kind of design from building a web page. The result has dimensions, connectors and components that have to work together in the real world. That is one of the things I enjoy most about this project: software keeps bringing me back to the physical object.",
            it: "È un tipo di progettazione diverso dal costruire una pagina web. Il risultato ha dimensioni, connettori e componenti che devono lavorare insieme nel mondo reale. È una delle cose che mi piacciono di più di questo progetto: il software mi riporta continuamente all’oggetto fisico.",
          },
        ],
      },
      {
        src: "/work/garda-telemetry-board.webp",
        width: 1400,
        height: 1867,
        caption: {
          en: "The telemetry board, assembled.",
          it: "La scheda di telemetria assemblata.",
        },
        title: {
          en: "The parts, finally together.",
          it: "I pezzi, finalmente insieme.",
        },
        body: [
          {
            en: "Here the modules are assembled on the board. The microcontroller, inertial sensing and GPS are now parts of one object, instead of separate elements on the table. Seeing that progression matters to me as much as seeing the visualiser respond.",
            it: "Qui i moduli sono assemblati sulla scheda. Il microcontrollore, i sensori inerziali e il GPS diventano parti di un unico oggetto, invece di elementi separati sul tavolo. Vedere questo percorso conta per me quanto vedere il visualizzatore rispondere.",
          },
          {
            en: "Making the readings meaningful and the system dependable also means checking sensor behaviour, calibrating, understanding missing or noisy data, and testing each step. A moving model is a useful milestone; building confidence in what it shows takes more work.",
            it: "Rendere le letture comprensibili e il sistema affidabile significa anche controllare il comportamento dei sensori, calibrare, capire i dati mancanti o rumorosi e verificare ogni passaggio. Un modello che si muove è un traguardo utile; poter avere fiducia in ciò che mostra richiede altro lavoro.",
          },
        ],
      },
      {
        src: "/work/garda-sharing.webp",
        width: 1400,
        height: 933,
        caption: {
          en: "Sharing the team’s work.",
          it: "Raccontare il lavoro del team.",
        },
        title: {
          en: "Explaining what we were building.",
          it: "Raccontare quello che stavamo costruendo.",
        },
        body: [
          {
            en: "Holding the board and explaining it brings the project back to the people around it. I can talk about sensors and firmware, but the reason they are there is the boat, the team and the experience we shared.",
            it: "Prendere in mano la scheda e spiegarla riporta il progetto alle persone che gli stanno intorno. Posso parlare di sensori e firmware, ma il motivo per cui esistono è la barca, il team e l’esperienza che abbiamo condiviso.",
          },
          {
            en: "That connection is what I want to remember here: the first experiments on a table, the electronics coming together, and the boat we took to Garda. The technical work and the human story belong to the same project.",
            it: "È questo collegamento che voglio lasciare qui: le prime prove su un tavolo, l’elettronica che prende forma e la barca che abbiamo portato al Garda. Il lavoro tecnico e la storia delle persone appartengono allo stesso progetto.",
          },
        ],
      },
    ],
    technicalImage: "/work/telemetry-local.jpg",
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
    slug: "homelab",
    title: "Homelab",
    category: "Infrastructure · Personal",
    color: "#aaa9d0",
    ink: "#282743",
    cover: "photo",
    images: ["/work/homelab-0728.webp"],
    tools: ["Linux", "Docker", "Tailscale", "Pi-hole", "Immich", "Beszel", "Scrutiny", "Uptime Kuma", "File Browser"],
    summary: text(
      "An old MacBook. A small piece of the internet I can call my own.",
      "Un vecchio MacBook. Un piccolo pezzo di internet che posso chiamare mio.",
    ),
    story: [
      text(
        "I wanted more ownership of my digital life: a place for my photos, files and personal services, where I could understand what happens to the data and decide how it is stored.",
        "Volevo più controllo sulla mia vita digitale: un posto per foto, file e servizi personali, dove poter capire cosa succede ai dati e decidere come conservarli.",
      ),
      text(
        "Instead of buying a new server, I started with a 2016 MacBook Air. Reusing an old computer made the project affordable and gave the hardware a second life. Linux and Docker became the foundation.",
        "Invece di comprare un server nuovo, sono partito da un MacBook Air del 2016. Riutilizzare un vecchio computer ha reso il progetto accessibile e ha dato all’hardware una seconda vita. Linux e Docker sono diventati la base.",
      ),
      text(
        "Immich takes care of my photo library. Pi-hole handles DNS filtering. Filebrowser, Uptime Kuma, Beszel and Scrutiny help me manage files and see how the machine is doing. Tailscale connects the pieces when I’m away from home.",
        "Immich si occupa della libreria fotografica. Pi-hole del filtraggio DNS. Filebrowser, Uptime Kuma, Beszel e Scrutiny mi aiutano a gestire i file e capire come sta il computer. Tailscale collega tutto quando sono fuori casa.",
      ),
      text(
        "Old hardware also means compromises: limited memory, an ageing SSD and a budget that calls for careful choices. It is an ongoing project in efficient reuse. A more complete server will come with time; for now, the point is to learn and make good use of what I have.",
        "L’hardware vecchio porta anche compromessi: memoria limitata, un SSD che invecchia e un budget che richiede scelte attente. È un progetto continuo di riuso efficiente. Un server più completo arriverà con il tempo; per ora il punto è imparare e sfruttare bene quello che ho.",
      ),
    ],
    gallery: [
      { src: "/work/homelab-0726.webp", width: 1600, height: 1200,
        title: text("A second life, right on my desk.", "Una seconda vita, sulla mia scrivania."),
        caption: text("The closed MacBook Air, connected on my desk.", "Il MacBook Air chiuso, collegato sulla scrivania."),
        body: [text("The server starts here: a laptop I already had, a power supply and a corner of the desk. Reusing it lets me experiment with self-hosting without having to buy a dedicated machine straight away.", "Il server parte da qui: un portatile che avevo già, un alimentatore e un angolo della scrivania. Riutilizzarlo mi permette di sperimentare con il self-hosting senza dover comprare subito una macchina dedicata.")],
      },
      { src: "/work/homelab-0727.webp", width: 1200, height: 1600,
        title: text("Still a laptop. Now a server.", "Ancora un portatile. Ora un server."),
        caption: text("The MacBook Air running its Linux desktop.", "Il MacBook Air con il desktop Linux in esecuzione."),
        body: [text("The screen and keyboard are still useful when I need to work directly on the machine. Underneath that familiar form is a Linux environment where I can organise my own services, learn how they fit together and keep improving the setup.", "Schermo e tastiera sono ancora utili quando devo lavorare direttamente sulla macchina. Sotto questa forma familiare c’è un ambiente Linux in cui organizzare i miei servizi, capire come si collegano e continuare a migliorare la configurazione.")],
      },
      { src: "/work/homelab-0728.webp", width: 1200, height: 1600,
        title: text("The work behind the services.", "Il lavoro dietro i servizi."),
        caption: text("The MacBook with a terminal open.", "Il MacBook con il terminale aperto."),
        body: [text("Docker gives each application a place in this small ecosystem. The terminal is part of the everyday work: configuring services, understanding what is running and dealing with the limits of a machine that was never bought to be a server.", "Docker dà a ogni applicazione un posto in questo piccolo ecosistema. Il terminale fa parte del lavoro quotidiano: configurare i servizi, capire cosa sta girando e confrontarmi con i limiti di una macchina che non era stata comprata per fare da server.")],
      },
      { src: "/work/homelab-pihole.webp", width: 1500, height: 910,
        title: text("Pi-hole · A quieter network.", "Pi-hole · Una rete più pulita."),
        caption: text("Pi-hole: DNS activity and filtering dashboard.", "Pi-hole: dashboard delle attività DNS e del filtraggio."),
        body: [text("Pi-hole is the DNS filtering part of the homelab. This dashboard makes the activity visible: requests, blocked queries and their distribution over time. It gives me a concrete view of a service that usually works quietly in the background.", "Pi-hole è la parte del mio homelab dedicata al filtraggio DNS. Questa dashboard rende visibile l’attività: richieste, query bloccate e distribuzione nel tempo. Mi dà una vista concreta di un servizio che normalmente lavora in silenzio.")],
      },
      { src: "/work/homelab-scrutiny.webp", width: 1500, height: 910,
        title: text("Scrutiny · Keep an eye on the SSD.", "Scrutiny · Tenere d’occhio l’SSD."),
        caption: text("Scrutiny: SSD health and temperature history.", "Scrutiny: salute dell’SSD e storico della temperatura."),
        body: [text("With an ageing computer, disk health deserves attention. Scrutiny puts the SSD status and temperature history in one place. It helps me observe the hardware I depend on, alongside the practical question of when an upgrade will fit my budget.", "Con un computer che invecchia, la salute del disco merita attenzione. Scrutiny riunisce lo stato dell’SSD e lo storico della temperatura. Mi aiuta a osservare l’hardware da cui dipendo, insieme alla domanda pratica di quando un aggiornamento rientrerà nel mio budget.")],
      },
      { src: "/work/homelab-filebrowser.webp", width: 1500, height: 910,
        title: text("File Browser · My files, within reach.", "File Browser · I miei file, a portata di mano."),
        caption: text("File Browser: the server’s web file manager.", "File Browser: il gestore dei file del server via web."),
        body: [text("File Browser gives me a web interface for the files stored on the server. It is a small, practical piece of the project: being able to browse and organise what I keep on my own machine, instead of treating every task as a terminal session.", "File Browser mi dà un’interfaccia web per i file conservati sul server. È una parte piccola e pratica del progetto: poter esplorare e organizzare ciò che tengo sulla mia macchina, senza trasformare ogni operazione in una sessione di terminale.")],
      },
      { src: "/work/homelab-beszel.webp", width: 1500, height: 910,
        title: text("Beszel · Understand the load.", "Beszel · Capire il carico."),
        caption: text("Beszel: CPU, memory and Docker resource charts.", "Beszel: grafici di CPU, memoria e risorse Docker."),
        body: [text("Beszel connects the services to the resources they use. CPU and memory charts, including the Docker containers, help me see what this small Mac can handle. That matters when every new application shares the same limited hardware.", "Beszel collega i servizi alle risorse che consumano. I grafici di CPU e memoria, anche dei container Docker, mi aiutano a vedere cosa riesce a sostenere questo piccolo Mac. Conta molto quando ogni nuova applicazione condivide lo stesso hardware limitato.")],
      },
      { src: "/work/homelab-uptime.webp", width: 1500, height: 910,
        title: text("Uptime Kuma · Is it still there?", "Uptime Kuma · È ancora disponibile?"),
        caption: text("Uptime Kuma: server and service availability.", "Uptime Kuma: disponibilità del server e dei servizi."),
        body: [text("A running container is only part of the picture: I also want to know whether a service responds. Uptime Kuma brings those checks together for the server, personal services and websites. The screenshot is a moment in the monitoring history, rather than a promise that nothing will ever go down.", "Un container in esecuzione è solo una parte del quadro: voglio anche sapere se un servizio risponde. Uptime Kuma riunisce questi controlli per il server, i servizi personali e i siti. La schermata è un momento nello storico del monitoraggio, non una promessa che non ci saranno mai interruzioni.")],
      },
      {
        src: "/work/tailscale-logo.svg", width: 256, height: 256,
        mediaKind: "logo", website: "https://tailscale.com",
        title: text("Tailscale · The link that makes it all useful.", "Tailscale · Il collegamento che rende tutto utile."),
        caption: text("Tailscale logo", "Logo Tailscale"),
        body: [
          text(
            "For me, Tailscale is one of the most useful parts of the whole homelab. The Mac stays on my desk, but I can reach its services from my phone or laptop when I am away. Files, photos and monitoring stop being things I can only use while sitting next to the server.",
            "Per me Tailscale è una delle parti più utili di tutto l’homelab. Il Mac rimane sulla scrivania, ma posso raggiungere i suoi servizi dal telefono o dal portatile quando sono fuori casa. File, foto e monitoraggio smettono di essere cose che posso usare soltanto seduto accanto al server.",
          ),
          text(
            "It connects my devices through a private, encrypted network and makes remote access possible without configuring port forwarding for each service. That simplicity matters enormously in a personal project: I can spend more time using and improving the homelab, with much less work just to reach it.",
            "Collega i miei dispositivi attraverso una rete privata e cifrata e rende possibile l’accesso remoto senza configurare il port forwarding per ogni servizio. Questa semplicità ha un valore enorme in un progetto personale: posso dedicare più tempo a usare e migliorare l’homelab, con molto meno lavoro solo per riuscire a raggiungerlo.",
          ),
          text(
            "It is the bridge between owning the hardware and having something I can actually rely on in everyday life. A small server at home becomes a useful part of my day, wherever I am.",
            "È il ponte tra possedere l’hardware e avere qualcosa che mi serve davvero nella vita quotidiana. Un piccolo server a casa diventa una parte utile delle mie giornate, anche quando sono altrove.",
          ),
        ],
      },
      {
        src: "/work/immich-logo.svg", width: 792, height: 792,
        mediaKind: "logo", website: "https://immich.app",
        title: text("Immich · A home for my memories.", "Immich · Una casa per i miei ricordi."),
        caption: text("Immich logo", "Logo Immich"),
        body: [
          text(
            "Photos are one of the strongest reasons I wanted my own server. Running, cycling, mountains, friends and the boat: they are a record of things that matter to me. Immich gives that library a home on my own hardware, where I can decide how it is stored and managed.",
            "Le foto sono uno dei motivi più forti per cui volevo un server mio. Corsa, ciclismo, montagna, amici e la barca: sono il racconto di cose a cui tengo. Immich dà a questa libreria una casa sul mio hardware, dove posso decidere come conservarla e gestirla.",
          ),
          text(
            "Its value goes beyond keeping a folder full of files. Immich brings photo and video backup, browsing, search and organisation into a usable library, with a mobile app and tools for albums and sharing. It makes self-hosting feel useful in a very personal way: finding and revisiting memories, while keeping control of the server that holds them.",
            "Il suo valore va oltre avere una cartella piena di file. Immich riunisce backup di foto e video, navigazione, ricerca e organizzazione in una libreria comoda da usare, con un’app mobile e strumenti per album e condivisione. Rende il self-hosting utile in un modo molto personale: ritrovare e rivivere i ricordi, mantenendo il controllo del server che li custodisce.",
          ),
          text(
            "Together with Tailscale, it is also part of the reason this old Mac feels worth keeping alive. The project is about learning infrastructure, but also about giving my own digital life a place I can take care of.",
            "Insieme a Tailscale, è anche uno dei motivi per cui vale la pena tenere in vita questo vecchio Mac. Il progetto riguarda imparare a gestire un’infrastruttura, ma anche dare alla mia vita digitale un posto di cui posso prendermi cura.",
          ),
        ],
      },
    ],
    journey: [
      {
        title: text("Start with what you have.", "Partire da quello che c’è."),
        body: text(
          "An old laptop becomes a Linux server. The constraint is part of the project: keep it useful without turning a small experiment into a large hardware purchase.",
          "Un vecchio portatile diventa un server Linux. Il limite è parte del progetto: renderlo utile senza trasformare un piccolo esperimento in una grande spesa per l’hardware.",
        ),
        diagram: "server",
      },
      {
        title: text(
          "Give every service a place.",
          "Dare un posto a ogni servizio.",
        ),
        body: text(
          "Docker brings the applications together. Photos, files and DNS each have their own role, in an environment I can maintain and keep learning from.",
          "Docker riunisce le applicazioni. Foto, file e DNS hanno ciascuno un ruolo, in un ambiente che posso gestire e da cui continuare a imparare.",
        ),
        diagram: "context",
      },
      {
        title: text(
          "Learn to keep it running.",
          "Imparare a tenerlo in funzione.",
        ),
        body: text(
          "Monitoring turns the computer into something I can observe: uptime, resource use and disk health. The next upgrade will follow the needs that emerge, and the budget available.",
          "Il monitoraggio rende il computer qualcosa che posso osservare: disponibilità, risorse e salute del disco. Il prossimo aggiornamento seguirà i bisogni che emergono e il budget disponibile.",
        ),
        diagram: "signals",
      },
    ],
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
        "My Garmin records a lot about my days. Training, sleep, recovery and physiological measurements are all there, but I wanted to bring them into one picture and ask questions that start from my own context.",
        "Il mio Garmin registra molto delle mie giornate. Allenamento, sonno, recupero e parametri fisiologici ci sono tutti, ma volevo riunirli in un quadro unico e fare domande che partissero dal mio contesto.",
      ),
      text(
        "That was the reason for Aesculapius: a personal experiment in turning the data I already collect into something I can discuss. I wanted suggestions about training, food, rest and sleep that take the rest of the picture into account.",
        "Da qui nasce Aesculapius: un esperimento personale per trasformare i dati che già raccolgo in qualcosa su cui confrontarmi. Volevo suggerimenti su allenamenti, alimentazione, riposo e sonno che tenessero conto del quadro complessivo.",
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
    src: "/personal/cycling.webp",
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
    tag: "Life",
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
    slug: "timesheet",
    title: "Timesheet",
    category: "Web app · Edgeworks",
    color: "#ddbd85",
    ink: "#45351c",
    images: [
      "/work/timesheet-reports.webp",
      "/work/timesheet-dashboard.webp",
      "/work/timesheet-calendar.webp",
    ],
    website: "https://www.edgeworks.it/products_timetracker.php",
    github: "https://github.com/salvatoreiannola72/timetracker",
    tools: ["React 19", "TypeScript", "Supabase", "Recharts"],
    summary: text(
      "Time tracking and reporting for a working team.",
      "Tempi e report per un team al lavoro.",
    ),
    story: [
      text(
        "An internal timesheet management application for Edgeworks, bringing together time entries, projects, clients and reporting.",
        "Un’applicazione di gestione timesheet per Edgeworks che riunisce registrazioni delle ore, progetti, clienti e report.",
      ),
      text(
        "The application includes authentication, interactive charts and Excel exports. I worked on modernising the interface and the full-stack workflow.",
        "L’applicazione include autenticazione, grafici interattivi ed esportazioni Excel. Ho lavorato alla modernizzazione dell’interfaccia e del flusso full-stack.",
      ),
    ],
  },
  {
    slug: "hiresight",
    title: "HireSight",
    category: "AI · Edgeworks",
    color: "#9aacce",
    ink: "#24334c",
    images: [
      "/hiresight/home.png",
      "/work/hiresight-live.jpg",
      "/hiresight/posizioni.png",
      "/hiresight/candidati.png",
      "/hiresight/dettaglio_candidato.png",
    ],
    website: "https://hiresight-cv.vercel.app",
    github: "https://github.com/nannipy/hiresight",
    tools: ["React", "TypeScript", "Python", "Supabase", "LLMs"],
    summary: text(
      "A clearer way to organise applications and review CVs.",
      "Un modo più chiaro per organizzare candidature e analizzare CV.",
    ),
    story: [
      text(
        "A recruitment platform developed in my work with Edgeworks. It helps organise job positions and candidates, with AI-assisted CV analysis.",
        "Una piattaforma di recruiting sviluppata nel mio lavoro con Edgeworks. Aiuta a organizzare posizioni e candidati, con analisi dei CV supportata dall’AI.",
      ),
      text(
        "The interface connects candidate details, match scores and the reasoning behind them, so recruiters can review the information in context.",
        "L’interfaccia collega dettagli dei candidati, punteggi di corrispondenza e relative motivazioni, per esaminare le informazioni nel loro contesto.",
      ),
    ],
  },
);

const sftStory = portfolioProjects.find(
  (project) => project.slug === "sft-telemetry",
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
  ...(sftStory.chapters || []).flatMap((chapter) => {
    const items: GalleryMedia[] = [];
    if (chapter.video)
      items.push({ ...chapter.video, width: 540, height: 960 });
    if (chapter.image) items.push(chapter.image);
    return items;
  }),
  ...(sftStory.gallery || []),
];
