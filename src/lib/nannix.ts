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
      it: "Come sono finito a farmi un server in casa.",
      en: "How I ended up running a server at home.",
    },
    category: "lab",
    description: {
      it: "Un po’ di insofferenza per gli abbonamenti, molta curiosità e un MacBook che aveva ancora qualcosa da fare.",
      en: "Some frustration with subscriptions, plenty of curiosity and a MacBook with something left to do.",
    },
    image: "/work/homelab-0726.webp",
    imageWidth: 1600,
    imageHeight: 1200,
    sections: [
      {
        id: "perche",
        title: {
          it: "È cominciata con una curiosità",
          en: "It started with curiosity",
        },
        paragraphs: [
          {
            it: "Da un po’ di tempo mi sono appassionato al **self hosting**. All’inizio volevo dare alle mie applicazioni un posto dove continuare a lavorare anche quando chiudevo il computer. Poi mi sono ritrovato a voler capire molto di più: dove finiscono i miei dati, quali servizi contattano i dispositivi, come funzionano DNS, tracking e filtri per la pubblicità. Una domanda ne apriva un’altra.",
            en: "I have been getting into **self-hosting** for a while. At first I wanted somewhere my applications could keep running after I closed my computer. Then I found myself wanting to understand much more: where my data ends up, which services my devices contact, how DNS, tracking and ad filtering work. One question led to another.",
          },
          {
            it: "Ho iniziato il laboratorio a gennaio 2026. Nannix è il posto in cui tengo insieme questo percorso: quello che esploro, gli strumenti che mi piace usare e le scelte che cambio quando capisco qualcosa in più. Mi piace poter raccontare anche la parte in cui sto ancora imparando.",
            en: "I started the lab in January 2026. Nannix is where I bring this journey together: what I explore, the tools I enjoy using and the choices I change as I understand more. I like leaving room for the parts I am still figuring out.",
          },
        ],
      },
      {
        id: "abbonamenti",
        title: {
          it: "Il fastidio per gli abbonamenti",
          en: "My frustration with subscriptions",
        },
        paragraphs: [
          {
            it: "Gli abbonamenti mi sono sempre stati antipatici. Mi pesa l’idea di aggiungere una quota mensile per ogni piccolo pezzo della mia vita digitale e continuare a pagare per accedere a cose mie. Quando un servizio raccoglie anche informazioni sulle mie abitudini, il fastidio aumenta: **sto già concedendo qualcosa di prezioso**, oltre ai soldi. Vorrei poter capire meglio questo scambio e scegliere quanto accettarne.",
            en: "I have always disliked subscriptions. I resent adding a monthly fee for every little part of my digital life and keeping on paying to access my own things. When a service also collects information about my habits, that feeling grows: **I am already giving something valuable**, on top of money. I want to understand that exchange better and decide how much of it to accept.",
          },
          {
            it: "Riconosco però l’efficienza che sto comprando: un’app pronta, accessibile ovunque, con persone che si occupano dell’infrastruttura. Quella comodità ha valore. Io sono disposto a dedicare tempo a **costruirmene una parte da me**, perché nel farlo imparo e posso decidere di più. Il costo si sposta su hardware, corrente, manutenzione e sulle mie ore; per me, una parte di quelle ore è anche un piacere.",
            en: "I do recognise the efficiency I am buying: a ready-to-use app, available everywhere, with people looking after its infrastructure. That convenience has value. I am willing to spend time **building some of it myself**, because I learn and get more say in the process. The cost shifts to hardware, electricity, maintenance and my own hours; for me, some of those hours are enjoyable too.",
          },
        ],
      },
      {
        id: "imparare",
        title: {
          it: "Prima guardo, poi provo",
          en: "First I watch, then I try",
        },
        paragraphs: [
          {
            it: "YouTube mi ha aperto molte porte. Ho seguito creator italiani e americani; **Morrolinux** è stato un riferimento per il self hosting e **Riccardo Palombo** per Linux e le distribuzioni. Mi piace partire dal racconto di qualcuno che usa davvero uno strumento, poi andare nella documentazione e provare a capire se può servire anche a me.",
            en: "YouTube opened many doors for me. I followed Italian and American creators; **Morrolinux** was a reference for self-hosting and **Riccardo Palombo** for Linux and distributions. I like starting with someone describing a tool they actually use, then reading the documentation and seeing whether it might work for me too.",
          },
          {
            it: "La parte difficile è trovare il tempo per approfondire. Seguire una guida mi fa partire; capire perché una configurazione funziona richiede più pazienza. Provo, confronto idee con altre persone e torno sui passaggi che avevo dato per scontati. Nella biblioteca raccolgo i riferimenti che mi accompagnano e quelli su cui voglio ancora tornare.",
            en: "Finding time to dig deeper is the difficult part. Following a guide gets me started; understanding why a configuration works takes more patience. I experiment, discuss ideas with other people and revisit steps I had taken for granted. The library holds references that help me along and others I want to return to.",
          },
        ],
      },
      {
        id: "hardware",
        title: {
          it: "Il MacBook che avevo già",
          en: "The MacBook I already had",
        },
        paragraphs: [
          {
            it: "Sono partito da un **MacBook Air del 2016, con 256 GB di spazio**, che era fermo a casa. Mi piaceva l’idea di rimetterlo al lavoro. Prima di cercare il server perfetto volevo vedere cosa riuscivo a fare con quello che avevo: questa macchina mi ha dato un modo concreto di iniziare e dei limiti con cui ragionare.",
            en: "I started with a **2016 MacBook Air with 256 GB of storage** that was sitting unused at home. I liked putting it back to work. Before looking for the perfect server, I wanted to see what I could do with what I had: this machine gave me a practical starting point and limits to think within.",
          },
          {
            it: "È senza batteria, quindi dipende completamente dalla corrente. Un blackout lo spegne subito. Prima o poi vorrei migliorare anche questo aspetto, con una batteria o un’alimentazione di riserva e una gestione adatta dello spegnimento. Intanto ho imparato ad avere parecchio rispetto per la presa sotto la scrivania.",
            en: "It has no battery, so it depends entirely on mains power. A power cut switches it off immediately. Eventually I want to improve this with a battery or backup power and suitable shutdown handling. In the meantime I have developed considerable respect for the socket under the desk.",
          },
        ],
      },
      {
        id: "linux",
        title: {
          it: "Linux Mint, Docker e le scelte che cambiano",
          en: "Linux Mint, Docker and changing choices",
        },
        paragraphs: [
          {
            it: "Oggi uso **Linux Mint e Docker**. Avere un’interfaccia grafica mi piaceva e mi aiutava ad avvicinarmi alla macchina, anche se ora lavoro quasi sempre dal terminale. Docker è diventato il modo con cui tengo insieme i servizi e provo nuove applicazioni. Ogni aggiunta mi dà un altro pezzo del sistema da capire.",
            en: "Today I use **Linux Mint and Docker**. I liked having a graphical interface to help me get familiar with the machine, even though I now work mostly in the terminal. Docker has become how I organise services and try new applications. Every addition gives me another part of the system to understand.",
          },
          {
            it: "Adesso valuterei Ubuntu Server per una configurazione più essenziale. La migrazione è ancora nella lista delle cose da fare: devo prepararla e trovare un momento in cui abbia senso toccare qualcosa che funziona. Anche un NAS o un mini PC potrebbero avere un posto in futuro. Per ora preferisco far crescere il laboratorio insieme ai miei bisogni.",
            en: "Now I would consider Ubuntu Server for a leaner configuration. Migration is still on my list: I need to prepare it and find a moment when changing something that works makes sense. A NAS or mini PC might have a place in the future too. For now I prefer to grow the lab alongside my needs.",
          },
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
      it: "Le mie foto sono state il primo passo.",
      en: "My photos were the first step.",
    },
    category: "lab",
    description: {
      it: "Con Immich ho iniziato a portare a casa qualcosa a cui tengo, cercando di conservare la comodità che mi piace.",
      en: "With Immich I started bringing something I care about home, while keeping the convenience I enjoy.",
    },
    sections: [
      {
        id: "motivo",
        title: {
          it: "Da qualche parte dovevo iniziare",
          en: "I had to start somewhere",
        },
        paragraphs: [
          {
            it: "**Immich è stato il primo servizio che ho installato**. Le foto erano un punto di partenza naturale: le uso ogni giorno e dentro ci sono ricordi che voglio poter ritrovare tra anni. Volevo dipendere meno da Google Foto e scegliere dove conservare la mia raccolta, invece di lasciare che quella scelta coincidesse sempre con il servizio più comodo.",
            en: "**Immich was the first service I installed**. Photos were a natural starting point: I use them every day and they hold memories I want to find years from now. I wanted to depend less on Google Photos and choose where to keep my library, rather than always letting the most convenient service make that decision for me.",
          },
          {
            it: "Qui il discorso sugli abbonamenti diventa molto concreto. Una raccolta cresce e lo spazio diventa qualcosa da pagare nel tempo. Io volevo provare a costruirmi un’alternativa, mantenendo un’esperienza che avessi voglia di usare. Salvare tutto in una cartella sarebbe stato solo una parte della risposta.",
            en: "This is where the subscription question becomes very practical. A library grows and storage becomes something to pay for over time. I wanted to try building an alternative while keeping an experience I would actually want to use. Putting everything in a folder would only have answered part of that need.",
          },
        ],
      },
      {
        id: "iphone",
        title: {
          it: "Il momento in cui il server diventa quotidiano",
          en: "When the server becomes part of everyday life",
        },
        paragraphs: [
          {
            it: "Lo uso **tutti i giorni sull’iPhone**. Nel mio setup il caricamento quotidiano funziona bene sia a casa sia fuori, e poter aprire l’app per ritrovare le mie foto rende utile tutto il lavoro fatto sul server. È una soddisfazione semplice: qualcosa che ho configurato entra nella mia giornata senza richiedere attenzione ogni volta.",
            en: "I use it **every day on my iPhone**. In my setup, daily uploads work well both at home and away, and opening the app to find my photos makes the work on the server worthwhile. It is a simple satisfaction: something I configured becomes part of my day without asking for attention every time.",
          },
          {
            it: "Posso scegliere gli album da caricare. Su iOS il lavoro in background dipende anche dal sistema operativo, quindi non mi aspetto che ogni scatto arrivi immediatamente. Mi interessa raccontare questa esperienza per come la vivo, con le sue comodità e i suoi tempi.",
            en: "I can choose which albums to upload. On iOS, background work also depends on the operating system, so I do not expect every photo to arrive immediately. I want to describe this experience as I use it, with its conveniences and its timing.",
          },
        ],
      },
      {
        id: "funzioni",
        title: {
          it: "Le comodità a cui tengo",
          en: "The conveniences I care about",
        },
        paragraphs: [
          {
            it: "Mi piace poter scorrere la **timeline**, organizzare album e ritrovare una foto attraverso la ricerca. Ricordi, riconoscimento dei volti, condivisione e Live Photos fanno parte delle comodità che rendono una raccolta piacevole da usare. Immich mi interessa perché porta molte di queste possibilità su una macchina che gestisco io.",
            en: "I like scrolling through the **timeline**, organising albums and finding a photo through search. Memories, facial recognition, sharing and Live Photos are conveniences that make a library enjoyable to use. Immich interests me because it brings many of those possibilities to a machine I manage myself.",
          },
          {
            it: "Nell’uso quotidiano sono molto soddisfatto della velocità. Con video pesanti, soprattutto fuori casa, a volte devo aspettare di più: entrano in gioco la connessione e il carico della macchina. È anche così che sto imparando cosa significa costruire l’efficienza che prima trovavo già pronta.",
            en: "I am very happy with its speed in everyday use. Large videos, especially away from home, sometimes take longer: connection quality and machine load come into play. This is also how I am learning what it takes to build the efficiency I used to get ready-made.",
          },
        ],
      },
      {
        id: "alternative",
        title: {
          it: "La scelta che oggi mi somiglia",
          en: "The choice that suits me today",
        },
        paragraphs: [
          {
            it: "Google Foto e iCloud hanno una comodità che capisco benissimo. Io oggi preferisco dedicare tempo a Immich, perché **controllo e possibilità di imparare** contano abbastanza da giustificare quel lavoro. PhotoPrism è un altro progetto che tengo tra le alternative da esplorare; non ho un confronto completo fatto da me da raccontare.",
            en: "I completely understand the convenience of Google Photos and iCloud. Today I prefer spending time on Immich, because **control and the chance to learn** matter enough to justify that work. PhotoPrism is another project I keep among alternatives to explore; I do not have a full comparison of my own to share.",
          },
        ],
      },
      {
        id: "cura",
        title: {
          it: "Prendermi cura di quello che ci metto",
          en: "Taking care of what I put there",
        },
        paragraphs: [
          {
            it: "Immich lo aggiorno **manualmente**, leggendo la documentazione e le note di rilascio. Per gli altri servizi automatizzo di più; qui voglio fermarmi un momento prima di cambiare qualcosa. Le foto sono il motivo per cui ho installato l’app, e meritano quella cura.",
            en: "I update Immich **manually**, reading its documentation and release notes. I automate more with other services; here I want to pause before changing anything. Photos are why I installed the app, and they deserve that care.",
          },
          {
            it: "Sto ancora lavorando alla protezione della raccolta. Il caricamento dall’iPhone e una copia di sicurezza del server sono due cose diverse: devo pensare sia ai file sia al database, e a come recuperarli se la macchina si guasta. Più spazio e backup più completi sono tra i prossimi passi. Avere i dati a casa mi dà controllo e mi chiede di occuparmene.",
            en: "I am still working on protecting the library. Uploading from my iPhone and backing up the server are separate things: I need to think about both files and the database, and how to recover them if the machine fails. More storage and fuller backups are next steps. Keeping data at home gives me control and asks me to care for it.",
          },
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
      it: "La curiosità per quello che succede in rete.",
      en: "Getting curious about what happens on the network.",
    },
    category: "lab",
    description: {
      it: "DNS, tracking e pubblicità mi hanno fatto guardare i dispositivi con occhi diversi. Tailscale e Pi-hole sono il mio modo di iniziare a capirci qualcosa.",
      en: "DNS, tracking and advertising made me look at my devices differently. Tailscale and Pi-hole are how I started making sense of it.",
    },
    image: "/work/homelab-pihole.webp",
    imageWidth: 1500,
    imageHeight: 910,
    sections: [
      {
        id: "accesso",
        title: {
          it: "Portarmi dietro un pezzo di casa",
          en: "Taking a piece of home with me",
        },
        paragraphs: [
          {
            it: "Dopo aver installato i primi servizi, volevo poterli usare anche fuori casa. **Tailscale** mi ha aiutato a rendere il laboratorio qualcosa che mi segue: collega i miei dispositivi a una rete privata e mi permette di raggiungere il server senza essere seduto accanto al MacBook.",
            en: "After installing the first services, I wanted to use them away from home too. **Tailscale** helped make the lab something that comes with me: it connects my devices to a private network and lets me reach the server without sitting next to the MacBook.",
          },
          {
            it: "Accedo con l’account Google e lo tengo sempre attivo sui dispositivi. Mi piace questa semplicità, perché mi lascia tempo per esplorare il resto. Gestire direttamente una VPN con WireGuard è un’altra strada che potrei approfondire; oggi questa combinazione risponde bene al mio bisogno.",
            en: "I sign in with a Google account and keep it active on my devices. I like that simplicity because it leaves me time to explore the rest. Managing a VPN directly with WireGuard is another path I could look into; today this combination serves my needs well.",
          },
        ],
      },
      {
        id: "dns",
        title: {
          it: "Il DNS è diventato una finestra",
          en: "DNS became a window",
        },
        paragraphs: [
          {
            it: "Mi sono incuriosito al mondo della **raccolta dati e del tracking**. Volevo capire cosa succede mentre uso un’app o apro una pagina, anche quando sullo schermo sembra non esserci niente di particolare. Il DNS è uno dei punti da cui ho iniziato: serve a tradurre i nomi di dominio negli indirizzi necessari a raggiungere i servizi.",
            en: "I became curious about **data collection and tracking**. I wanted to understand what happens when I use an app or open a page, even when nothing special seems to happen on screen. DNS was one of my starting points: it translates domain names into the addresses needed to reach services.",
          },
          {
            it: "Con **Pi-hole** posso osservare le richieste DNS e filtrare quelle verso determinati domini, compresi domini associati a pubblicità e tracciamento. Mi interessa poter collegare qualcosa che uso a qualcosa che succede nella rete. Le statistiche sono un punto da cui farmi domande: mostrano richieste a domini, senza raccontare tutto il contenuto delle connessioni o l’uso che viene fatto dei dati.",
            en: "With **Pi-hole** I can observe DNS requests and filter those to certain domains, including ones associated with advertising and tracking. I like being able to connect something I use to something happening on the network. The statistics give me a place to ask questions: they show domain requests without revealing all connection contents or how data is used.",
          },
        ],
      },
      {
        id: "tracking",
        title: {
          it: "Perché mi interessa filtrare",
          en: "Why filtering matters to me",
        },
        paragraphs: [
          {
            it: "La pubblicità mi infastidisce soprattutto quando si porta dietro la sensazione di essere seguito. Le informazioni su cosa guardo, quando uso un dispositivo e quali interessi mostro hanno valore. Vorrei avere più voce su quanto lascio uscire e su quale comodità ricevo in cambio. **Il filtro è una piccola scelta pratica** dentro questa curiosità più grande.",
            en: "Advertising bothers me most when it comes with the feeling of being followed. Information about what I look at, when I use a device and which interests I show has value. I want more say over how much I let out and what convenience I get in return. **Filtering is a small practical choice** within that broader curiosity.",
          },
          {
            it: "Pi-hole non blocca ogni pubblicità e non rende invisibile la mia navigazione. Se contenuti e annunci arrivano dallo stesso dominio, il filtro DNS ha dei limiti; un’estensione nel browser lavora in modo diverso. Sto imparando a distinguere questi livelli, e a scegliere gli strumenti in base a ciò che possono effettivamente fare.",
            en: "Pi-hole does not block every ad or make my browsing invisible. DNS filtering has limits when content and ads come from the same domain; a browser extension works differently. I am learning to distinguish these layers and choose tools according to what they can actually do.",
          },
        ],
      },
      {
        id: "scelta",
        title: {
          it: "Mi piace usarlo anche fuori casa",
          en: "I like using it away from home too",
        },
        paragraphs: [
          {
            it: "L’abbinamento con Tailscale mi permette di usare **il filtro anche sui dispositivi collegati fuori casa**. È una delle ragioni per cui tengo la connessione attiva. Il collegamento al DNS di Pi-hole è distinto dall’instradare tutta la navigazione attraverso il server: nel raccontare il mio setup tengo separate queste due cose.",
            en: "Pairing it with Tailscale lets me use **filtering on connected devices away from home too**. It is one reason I keep the connection active. Connecting to Pi-hole for DNS is different from routing all browsing through the server: I keep those two things separate when describing my setup.",
          },
          {
            it: "Rimangono dipendenze che ho scelto, come il coordinamento di Tailscale e l’accesso con Google. Voglio capirle e decidere quanto mi servono. Pi-hole, un filtro nel browser o un’alternativa come AdGuard Home mi interessano proprio perché mi costringono a fare domande più precise, invece di fermarmi alla promessa generica di “più privacy”.",
            en: "There are still dependencies I chose, such as Tailscale coordination and Google sign-in. I want to understand them and decide how much I need them. Pi-hole, a browser filter or an alternative like AdGuard Home interest me because they make me ask more precise questions instead of stopping at a vague promise of “more privacy”.",
          },
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
      it: "Una porta semplice per i miei file.",
      en: "A simple door to my files.",
    },
    category: "lab",
    description: {
      it: "File Browser mi piace per una cosa molto concreta: apro il browser e raggiungo le cartelle del mio server.",
      en: "I like File Browser for a very practical reason: I open the browser and reach the folders on my server.",
    },
    image: "/work/homelab-filebrowser.webp",
    imageWidth: 1500,
    imageHeight: 910,
    sections: [
      {
        id: "motivo",
        title: {
          it: "Dopo le foto, tutto il resto",
          en: "After photos, everything else",
        },
        paragraphs: [
          {
            it: "Le foto hanno trovato posto in Immich, ma sul server ci sono anche altri file. Volevo poterli raggiungere quando mi servono, con un’interfaccia comoda. **File Browser** mi dà un accesso web alle cartelle; Tailscale fa parte del modo con cui raggiungo il laboratorio fuori casa.",
            en: "Photos found a home in Immich, but there are other files on the server too. I wanted to reach them when needed through a convenient interface. **File Browser** gives me web access to folders; Tailscale is part of how I reach the lab away from home.",
          },
          {
            it: "Mi piace quando un servizio risponde a un bisogno così chiaro. Dietro c’è una macchina Linux, ma nell’uso quotidiano voglio poter aprire una pagina e ritrovare quello che cerco. È un altro piccolo pezzo della comodità che sto cercando di costruire da me.",
            en: "I like a service that answers such a clear need. There is a Linux machine behind it, but in everyday use I want to open a page and find what I need. It is another small piece of the convenience I am trying to build for myself.",
          },
        ],
      },
      {
        id: "scelta",
        title: {
          it: "Mi piacciono gli strumenti che mi bastano",
          en: "I like tools that are enough for me",
        },
        paragraphs: [
          {
            it: "Per adesso questo accesso diretto mi basta. Nextcloud mi incuriosisce come piattaforma più ampia; Syncthing per la sincronizzazione tra dispositivi. Sono esigenze diverse, e sto imparando a partire da quello che voglio fare prima di aggiungere un’applicazione. Sul mio MacBook ogni servizio si prende un po’ di spazio e attenzione.",
            en: "For now, this direct access is enough. Nextcloud interests me as a broader platform; Syncthing for synchronising between devices. Those are different needs, and I am learning to start with what I want to do before adding an application. On my MacBook every service takes some space and attention.",
          },
        ],
      },
      {
        id: "manutenzione",
        title: {
          it: "Anche una scelta comoda va rivista",
          en: "Even a convenient choice needs revisiting",
        },
        paragraphs: [
          {
            it: "Il progetto originale di File Browser è stato archiviato e non riceverà ulteriori correzioni. Questo cambia il modo in cui guardo allo strumento che uso: **la manutenzione del progetto conta quanto l’interfaccia**. Devo tenerne conto e valutare un’alternativa mantenuta, anche se l’abitudine rende comodo continuare con quello che conosco.",
            en: "The original File Browser project has been archived and will receive no further fixes. That changes how I look at the tool I use: **project maintenance matters as much as the interface**. I need to account for it and consider a maintained alternative, even though familiarity makes sticking with what I know convenient.",
          },
        ],
      },
      {
        id: "alternative",
        title: {
          it: "I file sono miei, la cura anche",
          en: "My files, my responsibility too",
        },
        paragraphs: [
          {
            it: "Lo spazio resta quello dei 256 GB del MacBook. Accedere ai file dal browser non significa averli protetti da un guasto o da una cancellazione: le copie di sicurezza sono un altro pezzo da costruire. Questa parte del laboratorio mi ricorda che avere più controllo significa anche sapere cosa devo ancora sistemare.",
            en: "Storage is still the MacBook’s 256 GB. Browser access does not protect files against a failure or deletion: backups are another piece to build. This part of the lab reminds me that more control also means knowing what I still need to improve.",
          },
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
      it: "Imparare ad ascoltare il mio server.",
      en: "Learning to listen to my server.",
    },
    category: "lab",
    description: {
      it: "Grafici, temperature e messaggi Telegram: gli strumenti con cui provo a capire come sta la macchina che uso ogni giorno.",
      en: "Graphs, temperatures and Telegram messages: the tools I use to understand how my everyday machine is doing.",
    },
    image: "/work/homelab-beszel.webp",
    imageWidth: 1500,
    imageHeight: 910,
    sections: [
      {
        id: "bisogno",
        title: {
          it: "Acceso non mi basta più",
          en: "Powered on is no longer enough",
        },
        paragraphs: [
          {
            it: "All’inizio volevo vedere le applicazioni funzionare. Poi ho iniziato a chiedermi **quanto stanno chiedendo alla macchina**: CPU, memoria, temperature, spazio. Su un computer del 2016 queste domande sono molto concrete. Mi piace poter osservare il sistema e collegare i numeri a quello che ci sto facendo.",
            en: "At first I wanted to see applications running. Then I started asking **how much they ask of the machine**: CPU, memory, temperatures, storage. On a 2016 computer these questions are practical. I like being able to observe the system and connect the numbers to what I am doing with it.",
          },
        ],
      },
      {
        id: "beszel",
        title: {
          it: "Ho cambiato idea sul monitoraggio",
          en: "I changed my mind about monitoring",
        },
        paragraphs: [
          {
            it: "Avevo installato **Netdata** e mi piacevano la quantità di informazioni e gli avvisi. Sul mio MacBook, però, occupava troppa CPU. Sono passato a **Beszel** per avere un monitoraggio più leggero. È una scelta nata dall’uso: volevo che restassero risorse per le applicazioni che avevo acceso il server per ospitare.",
            en: "I installed **Netdata** and liked its wealth of information and alerts. On my MacBook, though, it used too much CPU. I moved to **Beszel** for lighter monitoring. That choice came from use: I wanted resources left for the applications I had started the server to host.",
          },
          {
            it: "Netdata resta un progetto che trovo interessante. Questa esperienza mi ha insegnato a scegliere rispetto alla mia macchina e a quello che mi serve vedere. Una dashboard può piacermi molto e chiedere comunque più di quanto voglio dedicarle.",
            en: "I still find Netdata interesting. This experience taught me to choose according to my machine and what I need to see. I can really like a dashboard and still decide it asks for more than I want to give it.",
          },
        ],
      },
      {
        id: "dischi",
        title: {
          it: "Domande diverse, strumenti diversi",
          en: "Different questions, different tools",
        },
        paragraphs: [
          {
            it: "Con **Scrutiny** osservo le informazioni sullo stato dei dischi e la temperatura. Con **Uptime Kuma** controllo se siti e servizi sono raggiungibili. Mi piace che ogni strumento mi aiuti a guardare un aspetto preciso: lo stato della macchina, quello del disco, la disponibilità di ciò che uso.",
            en: "With **Scrutiny** I observe disk health information and temperature. With **Uptime Kuma** I check whether websites and services are reachable. I like how each tool helps me look at a specific aspect: machine condition, disk condition and availability of what I use.",
          },
          {
            it: "Sto imparando anche cosa questi segnali non possono dirmi. Un disco che oggi mostra valori rassicuranti può comunque guastarsi; un servizio raggiungibile può avere altri problemi. I grafici mi aiutano a farmi domande e a intervenire, mentre i backup restano una responsabilità separata.",
            en: "I am also learning what those signals cannot tell me. A disk with reassuring readings today can still fail; a reachable service can have other problems. Graphs help me ask questions and act, while backups remain a separate responsibility.",
          },
        ],
      },
      {
        id: "telegram",
        title: {
          it: "Le automazioni che mi piace costruire",
          en: "The automations I enjoy building",
        },
        paragraphs: [
          {
            it: "Un **bot Telegram** mi avvisa quando la CPU resta al massimo per circa dieci minuti e mi manda avvisi sulle temperature. Segnala interruzioni e ripristini della connessione, con il tempo trascorso. Posso anche chiedergli lo stato del server, temperature e warning. Mi piace questo modo di avere informazioni senza stare sempre davanti a una dashboard.",
            en: "A **Telegram bot** alerts me when CPU stays at maximum for around ten minutes and sends temperature warnings. It reports connection interruptions and recovery with the elapsed time. I can also ask for server status, temperatures and warnings. I like getting information without always sitting in front of a dashboard.",
          },
          {
            it: "Sono le automazioni che mi danno più soddisfazione: piccole, costruite attorno a qualcosa che mi serve davvero. Uso un servizio esterno come Telegram perché in questo caso la comodità mi convince. Sto cercando un equilibrio che riesca a vivere tutti i giorni.",
            en: "These are the automations I find most satisfying: small, built around something I actually need. I use an external service like Telegram because its convenience makes sense to me here. I am looking for a balance I can live with every day.",
          },
        ],
      },
      {
        id: "scelta",
        title: {
          it: "Imparare quando guardare e quando lasciarlo lavorare",
          en: "Learning when to look and when to let it run",
        },
        paragraphs: [
          {
            it: "Potrei aggiungere sempre un altro grafico. Preferisco cercare avvisi che mi dicano quando c’è qualcosa su cui intervenire e informazioni che mi aiutino a capirlo. Voglio che il laboratorio mi lasci spazio per fare altro, oltre a occuparmi del laboratorio stesso.",
            en: "I could always add another graph. I prefer looking for alerts that tell me when something needs attention and information that helps me understand it. I want the lab to leave me room to do other things as well as look after the lab itself.",
          },
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
      it: "La comodità che devo costruire ogni giorno.",
      en: "The convenience I have to keep building.",
    },
    category: "lab",
    description: {
      it: "Il self hosting continua dopo l’installazione. Sto imparando a prendermi cura delle cose che ho scelto di gestire.",
      en: "Self-hosting continues after installation. I am learning to take care of the things I chose to manage.",
    },
    sections: [
      {
        id: "watchtower",
        title: {
          it: "Togliere di mezzo il lavoro ripetitivo",
          en: "Taking repetitive work out of the way",
        },
        paragraphs: [
          {
            it: "Con **Watchtower** ho automatizzato gli aggiornamenti di una parte dei container: nel mio setup controlla ogni giorno le nuove immagini e aggiorna i servizi gestiti. Finora mi sono trovato bene. Se scelgo di costruire la mia comodità, mi interessa anche evitare di passare ogni giornata a ripetere gli stessi gesti.",
            en: "With **Watchtower** I automated updates for some containers: in my setup it checks for new images every day and updates the services it manages. It has worked well for me so far. If I choose to build my own convenience, I also want to avoid spending every day repeating the same actions.",
          },
          {
            it: "Un aggiornamento automatico può comunque introdurre un problema. Sto imparando a decidere dove questa comodità vale il rischio e dove voglio scegliere io il momento di cambiare. Il tempo che risparmio ha senso se riesco anche a capire cosa è successo quando qualcosa smette di funzionare.",
            en: "An automatic update can still introduce a problem. I am learning where that convenience is worth the risk and where I want to choose the moment to change things myself. Saving time makes sense if I can also understand what happened when something stops working.",
          },
        ],
      },
      {
        id: "stato-progetto",
        title: {
          it: "Anche chi aggiorna ha bisogno di attenzione",
          en: "Even the updater needs attention",
        },
        paragraphs: [
          {
            it: "Il repository originale di Watchtower è archiviato e il progetto non è più mantenuto. Nel laboratorio è ancora lo strumento che uso, ma devo rivalutare anche questa scelta. Mi ricorda che **scegliere un progetto è scegliere anche una storia di manutenzione**, che può cambiare nel tempo.",
            en: "The original Watchtower repository is archived and the project is no longer maintained. It is still the tool I use in the lab, but I need to reassess that choice too. It reminds me that **choosing a project also means choosing a maintenance history**, which can change over time.",
          },
        ],
      },
      {
        id: "immich",
        title: {
          it: "Sulle foto mi fermo un momento in più",
          en: "I take an extra moment with photos",
        },
        paragraphs: [
          {
            it: "Per **Immich** preferisco aggiornare a mano, seguendo la guida e leggendo le note di rilascio. Voglio sapere se ci sono cambiamenti che richiedono attenzione prima di applicarli. La differenza rispetto agli altri servizi nasce da quello che ci metto dentro: sono ricordi a cui tengo.",
            en: "For **Immich** I prefer updating by hand, following the guide and reading release notes. I want to know whether changes need attention before applying them. The difference from other services comes from what I put in it: memories I care about.",
          },
        ],
      },
      {
        id: "backup",
        title: {
          it: "Avere i dati qui è solo l’inizio",
          en: "Having data here is just the beginning",
        },
        paragraphs: [
          {
            it: "Oggi ho i 256 GB del MacBook. Vorrei aggiungere dischi e arrivare indicativamente a **4 TB**, con una forma di duplicazione che mi aiuti in caso di guasto. È ancora un progetto futuro, legato al budget. La voglia di installare cose nuove corre più veloce dello spazio che ho a disposizione.",
            en: "Today I have the MacBook’s 256 GB. I would like to add disks and reach roughly **4 TB**, with some form of redundancy to help if a disk fails. This is still a future plan tied to my budget. My desire to install new things runs faster than the storage I have.",
          },
          {
            it: "Sto cercando di ragionare anche sul recupero: la duplicazione può aiutare con un guasto, mentre una copia separata serve per errori e cancellazioni. Per Immich devo considerare sia i file sia il database. Il caricamento quotidiano dal telefono è utile, ma la protezione completa della raccolta è un lavoro che devo ancora sviluppare.",
            en: "I am also trying to think about recovery: redundancy can help with a failure, while a separate copy addresses mistakes and deletions. With Immich I need to consider both files and the database. Daily uploads from my phone are useful, but fuller protection of the library is something I still need to develop.",
          },
        ],
      },
      {
        id: "futuro",
        title: {
          it: "Far crescere qualcosa che riesco a seguire",
          en: "Growing something I can keep looking after",
        },
        paragraphs: [
          {
            it: "Vorrei migliorare spazio, alimentazione e configurazione Linux. Il server ospita anche piccoli esperimenti e bot Telegram, quindi la lista delle idee continua ad allungarsi. Mi piace avere un posto dove provarle; devo lasciare tempo anche per la cura di quelle che uso già.",
            en: "I want to improve storage, power and my Linux configuration. The server also hosts small experiments and Telegram bots, so the list of ideas keeps growing. I like having somewhere to try them; I need to leave time to care for what I already use too.",
          },
          {
            it: "È qui che torno al discorso sugli abbonamenti. Nei servizi gestiti pago anche perché qualcun altro si occupi di questi problemi. Io ho scelto di prendermene una parte: **voglio imparare a costruire quell’efficienza**, sapendo che ci saranno passaggi meno divertenti di un’installazione nuova. Nannix raccoglie anche questo lato dell’esperienza.",
            en: "This brings me back to subscriptions. With managed services I also pay for someone else to handle these problems. I chose to take on some of that work: **I want to learn to build that efficiency**, knowing some steps will be less fun than a new installation. Nannix records that side of the experience too.",
          },
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
      it: "Perché mi piace poterci mettere le mani.",
      en: "Why I like being able to get my hands on it.",
    },
    category: "ideas",
    description: {
      it: "Il laboratorio mi ha fatto mettere a fuoco cosa cerco nel software: poter capire, scegliere e costruire insieme agli altri.",
      en: "The lab helped me see what I look for in software: being able to understand, choose and build with others.",
    },
    sections: [
      {
        id: "liberta",
        title: {
          it: "La curiosità ha bisogno di una porta aperta",
          en: "Curiosity needs an open door",
        },
        paragraphs: [
          {
            it: "Più esploro il self hosting, più capisco cosa mi attira nell’**open source**: posso aprire la documentazione, studiare il codice, capire una scelta e provare a cambiarla. Magari non lo farò per ogni strumento, ma sapere che quella porta è aperta cambia il mio rapporto con ciò che uso.",
            en: "The more I explore self-hosting, the more I understand what draws me to **open source**: I can read the documentation, study the code, understand a choice and try changing it. I may not do that for every tool, but knowing the door is open changes my relationship with what I use.",
          },
          {
            it: "Quando costruisco qualcosa mi piace pensare che anche un’altra persona possa partire da lì. Le licenze stabiliscono le condizioni di questo scambio; spiegare le scelte e condividere quello che ho imparato gli dà un significato concreto. È uno dei motivi per cui voglio raccontare Nannix.",
            en: "When I build something, I like thinking another person could start from there too. Licences set the conditions of that exchange; explaining choices and sharing what I learned makes it concrete. That is one reason I want to write about Nannix.",
          },
        ],
      },
      {
        id: "ricerca",
        title: {
          it: "Quello che imparo viene dal lavoro degli altri",
          en: "What I learn comes from other people’s work",
        },
        paragraphs: [
          {
            it: "Il mio laboratorio esiste grazie a software, guide e idee che qualcuno ha reso accessibili. Mi viene naturale pensare alla ricerca scientifica: **poter studiare e verificare un lavoro permette di andare avanti**. Vorrei che questa disponibilità a condividere fosse sempre più normale anche nell’informatica.",
            en: "My lab exists because someone made software, guides and ideas accessible. I naturally think of scientific research: **being able to study and verify work lets us move forward**. I wish that willingness to share became ever more natural in computing too.",
          },
          {
            it: "Wikipedia e i progetti aperti mi fanno pensare a quanto uso ogni giorno di questo patrimonio. Mi piacerebbe restituire qualcosa: codice, una spiegazione utile, sostegno a chi mantiene uno strumento. Anche raccontare con onestà una prova può aiutare la persona che arriva dopo di me.",
            en: "Wikipedia and open projects remind me how much of that shared resource I use every day. I would like to give something back: code, a useful explanation, support for someone maintaining a tool. Even an honest account of an experiment can help the person who comes after me.",
          },
        ],
      },
      {
        id: "persone",
        title: {
          it: "Persone che continuano a costruire",
          en: "People who keep building",
        },
        paragraphs: [
          {
            it: "Nella biblioteca tengo anche persone da cui mi piace prendere spunti. Mi interessano i ragionamenti dietro il software: cosa semplificano, quali compromessi accettano e come spiegano il proprio lavoro. Questi sono alcuni dei riferimenti a cui voglio continuare a tornare.",
            en: "I also keep people whose ideas I enjoy in the library. I am interested in the thinking behind software: what they simplify, which trade-offs they accept and how they explain their work. These are some references I want to keep returning to.",
          },
          {
            it: "**Linus Torvalds** e il kernel Linux sono un riferimento per il lavoro sul codice condiviso. Di **Salvatore “antirez” Sanfilippo** mi interessa il ragionamento dietro gli strumenti: costruire, spiegare le scelte e cercare soluzioni che una persona possa ancora capire. **Fabrice Bellard**, con progetti come QEMU e TinyCC, mi ricorda quanto possa fare un lavoro tecnico concentrato.",
            en: "**Linus Torvalds** and the Linux kernel are a reference for work on shared code. What interests me about **Salvatore “antirez” Sanfilippo** is the thinking behind the tools: building, explaining choices and looking for solutions a person can still understand. **Fabrice Bellard**, through projects such as QEMU and TinyCC, reminds me how much focused technical work can achieve.",
          },
          {
            it: "In **D. Richard Hipp** e SQLite trovo un riferimento per strumenti essenziali e affidabili; in **Daniel Stenberg** e curl, per la cura continua di un progetto open source. **Simon Willison** rende esplorabili esperimenti e appunti tecnici; **Mitchell Hashimoto**, anche attraverso Ghostty, mi interessa per il legame tra autonomia e lavoro concreto sul software.",
            en: "In **D. Richard Hipp** and SQLite I find a reference for focused, reliable tools; in **Daniel Stenberg** and curl, for sustained care of an open source project. **Simon Willison** makes experiments and technical notes available to explore; **Mitchell Hashimoto**, including through Ghostty, interests me for the connection between autonomy and hands-on software work.",
          },
          {
            it: "**Rich Hickey**, in “Simple Made Easy”, mi aiuta a ragionare sulla complessità. **Rob Pike** collega il design degli strumenti alle esigenze di chi sviluppa e mantiene software. **Pieter Hintjens**, con la guida di ZeroMQ, porta nella stessa conversazione protocolli, documentazione e comunità. Sono riferimenti per aspetti diversi: da ciascuno voglio prendere domande utili, senza attribuire a tutti la stessa filosofia.",
            en: "**Rich Hickey**, in “Simple Made Easy”, helps me think about complexity. **Rob Pike** connects tool design to the needs of people building and maintaining software. **Pieter Hintjens**, through the ZeroMQ guide, brings protocols, documentation and community into the same conversation. These are references for different aspects: I want useful questions from each, without assigning them all the same philosophy.",
          },
        ],
      },
      {
        id: "pubblico",
        title: {
          it: "Vorrei poter vedere come sono fatte le cose comuni",
          en: "I want to see how shared things are built",
        },
        paragraphs: [
          {
            it: "Questo desiderio di capire mi accompagna anche fuori dal laboratorio. Vorrei che **il software finanziato pubblicamente fosse aperto**, così da poter studiare e riutilizzare il lavoro per cui abbiamo già contribuito. IO, nell’ecosistema pagoPA, è un riferimento che apprezzo per la disponibilità del suo codice.",
            en: "That desire to understand follows me outside the lab too. I would like **publicly funded software to be open**, so we can study and reuse work we have already contributed to. IO, in the pagoPA ecosystem, is a reference I appreciate for making its code available.",
          },
          {
            it: "Per me aprire il lavoro significa anche prendersi cura di quello che si espone: codice, dati personali e credenziali richiedono attenzioni diverse. Mi interessa una trasparenza che permetta di capire il sistema e che protegga le persone che lo usano.",
            en: "For me, opening work also means taking care of what is exposed: code, personal data and credentials need different treatment. I care about transparency that helps people understand the system and protects the people using it.",
          },
        ],
      },
      {
        id: "sostenibilita",
        title: {
          it: "Voglio scegliere cosa sto pagando",
          en: "I want to choose what I pay for",
        },
        paragraphs: [
          {
            it: "La mia insofferenza per gli abbonamenti convive con il rispetto per il lavoro di chi sviluppa. Sono disposto a pagare per qualcosa di utile e per sostenere chi lo mantiene. Mi pesa soprattutto uno scambio poco chiaro, in cui concedo informazioni preziose e pago anche per restare dentro un servizio da cui faccio fatica a uscire. **Vorrei pagare con consapevolezza e poter scegliere.**",
            en: "My dislike of subscriptions sits alongside respect for developers’ work. I am willing to pay for something useful and to support its maintenance. What bothers me most is an unclear exchange in which I give valuable information and also pay to remain in a service that is hard to leave. **I want to pay knowingly and have a choice.**",
          },
          {
            it: "Donazioni, crowdfunding e servizi con costi chiari sono modi di sostenere strumenti aperti che mi interessano. Apprezzo anche l’efficienza e la ricerca delle aziende private. Nel mio piccolo sto provando a capire quali comodità voglio comprare e quali mi dà più soddisfazione costruire, senza dimenticare chi rende possibile tutto questo lavoro.",
            en: "Donations, crowdfunding and services with clear costs are ways of supporting open tools that interest me. I also appreciate the efficiency and research of private companies. In my own small way I am working out which conveniences I want to buy and which I enjoy building, while remembering who makes all this work possible.",
          },
        ],
      },
      {
        id: "europa",
        title: {
          it: "Un piccolo laboratorio e domande più grandi",
          en: "A small lab and bigger questions",
        },
        paragraphs: [
          {
            it: "Quando penso alle mie dipendenze tecnologiche finisco anche per guardare oltre il server. Vorrei **più investimenti europei in software e infrastrutture**, più spazio per nuove imprese e più possibilità di scegliere. Mi piacerebbe vedere le competenze e la qualità della vita che apprezzo qui tradursi anche in autonomia tecnologica.",
            en: "Thinking about my technological dependencies also takes me beyond the server. I want **more European investment in software and infrastructure**, more room for new companies and more choice. I would like the expertise and quality of life I appreciate here to translate into technological independence too.",
          },
          {
            it: "Nel laboratorio questa domanda prende una forma molto piccola: quali strumenti capisco, dove tengo i dati, cosa succede se un servizio cambia? Formati aperti e competenze che restano con me mi sembrano un buon punto da cui partire.",
            en: "In the lab that question takes a very small form: which tools do I understand, where do I keep data, what happens if a service changes? Open formats and skills that stay with me feel like a good starting point.",
          },
        ],
      },
      {
        id: "trasparenza",
        title: {
          it: "Mi piace capire perché si decide qualcosa",
          en: "I like understanding why a decision is made",
        },
        paragraphs: [
          {
            it: "Quando parlo di **trasparenza interna**, intendo che chi lavora in un’azienda possa trovare documenti, contesto e motivazioni delle decisioni. Voglio poter capire perché si sta facendo qualcosa, contribuire e ritrovare il ragionamento anche mesi dopo. Scrivere queste cose aiuta a condividere conoscenza e a lavorare con autonomia.",
            en: "When I talk about **internal transparency**, I mean that people working in a company can find documents, context and the reasons behind decisions. I want to understand why something is being done, contribute and revisit the reasoning months later. Writing these things down helps people share knowledge and work autonomously.",
          },
          {
            it: "L’handbook di **GitLab** mi interessa per l’approccio alla documentazione; gli RFD, “Requests for Discussion”, di **Oxide Computer Company** per le discussioni tecniche messe per iscritto. Sono modi diversi di rendere il lavoro comprensibile. Un documento pubblico può essere utile anche fuori dall’azienda; per me il punto di partenza è che le informazioni circolino tra le persone che ci lavorano.",
            en: "The **GitLab** handbook interests me for its approach to documentation; **Oxide Computer Company**’s RFDs, “Requests for Discussion”, for written technical discussions. These are different ways to make work understandable. A public document can help people outside the company too; for me, the starting point is that information circulates among those working there.",
          },
        ],
      },
      {
        id: "organizzazione",
        title: {
          it: "Il modo di lavorare che mi attira",
          en: "The way of working that appeals to me",
        },
        paragraphs: [
          {
            it: "Mi interessa una cultura **engineering-first**: chi costruisce deve avere contesto e spazio per decidere. In **PostHog** guardo ai piccoli team autonomi descritti nell’handbook; in **37signals**, al lavoro con team piccoli e alla scelta di tenere il prodotto semplice. Vorrei poche procedure, utili, e tempo per costruire e mantenere bene gli strumenti.",
            en: "I care about an **engineering-first** culture: builders need context and room to make decisions. With **PostHog**, I look at the small autonomous teams described in its handbook; with **37signals**, at working in small teams and keeping the product simple. I want a few useful processes and time to build and maintain tools well.",
          },
          {
            it: "**Mozilla** è un riferimento per un web aperto e la partecipazione; il credo di **Automattic** per l’apprendimento continuo e la comunicazione. Mi interessano queste pratiche specifiche, senza trasformare aziende diverse in un unico modello ideale. Il filo che cerco è **conoscenza condivisa, autonomia tecnica e poca burocrazia**.",
            en: "**Mozilla** is a reference for an open web and participation; **Automattic**’s creed for continuous learning and communication. I care about these specific practices without turning different companies into one ideal model. The thread I am looking for is **shared knowledge, technical autonomy and little bureaucracy**.",
          },
          {
            it: "Queste letture accompagnano quello che provo a fare nel laboratorio. Continuo a usare servizi esterni dove la comodità mi convince e a cercare alternative dove voglio più controllo. Le mie scelte possono cambiare: mi interessa poterle spiegare e lasciare qui un racconto utile anche di quel cambiamento.",
            en: "These readings accompany what I try to do in the lab. I still use external services where their convenience makes sense to me and look for alternatives where I want more control. My choices can change: I want to explain them and leave a useful account of that change here too.",
          },
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
      "Documentazione del monitoraggio leggero che uso dopo aver provato Netdata sul MacBook.",
      "Documentation for the lightweight monitoring I use after trying Netdata on the MacBook.",
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
      en: "I am interested in it as a map for more structured computer science study: open courses, prerequisites and an order for tackling them. I keep it alongside experiments to strengthen the foundations.",
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
      en: "A guide to building a Kubernetes cluster by going into its components. I keep it among things to explore: my lab uses Docker and I have not used Kubernetes yet.",
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
      en: "A course on everyday development tools: shell, working environment, Git and debugging. I am interested because using them better can change how I approach my projects too.",
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
      en: "A small Unix-like teaching operating system for RISC-V. I am interested in studying processes, memory and file systems in code designed for learning.",
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
      en: "An operating system to explore through its code. I am curious about how its many parts, from the kernel to graphical tools, become a complete environment.",
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
      en: "A channel to explore for C++, game engines and graphics programming. I am interested in the technical story of a project being built as it takes shape.",
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
      en: "Paths and exercises for finding a way through technical interview preparation. I am interested in an organised sequence for tackling problems and connecting topics.",
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
      en: "An open game for learning Git by visualising repositories and operations. I am curious about understanding branches and code history by seeing the effects of my choices.",
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
