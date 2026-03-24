import { ServiceDetail } from '../components/ServiceDetailPage';
import vloerwerkzaamhedenImage from '../assets/vloerwerkzaamheden.webp';
import oprittenTerrassenImage from '../assets/opritten-terrassen.webp';
import totaleProjectenImage from '../assets/totale-projecten.webp';
import schoorsteenvegenRenovatieImage from '../assets/schoorsteenvegen-renovatie.webp';
import exclusieveTegelherstellingImage from '../assets/tegelherstelling-zonder-breekwerk.webp';

export const servicesData: ServiceDetail[] = [
  {
    id: 'metselwerk',
    title: 'Metselwerk',
    subtitle: 'Metselwerken van Topkwaliteit – Sterk in Ruwbouw en Afwerking',
    description: 'Wij staan garant voor degelijk metselwerk, van fundering tot afwerking. Met jarenlange ervaring, oog voor detail en het gebruik van kwaliteitsmaterialen zorgen wij voor een resultaat dat zowel functioneel als esthetisch sterk staat.',
    image: 'https://images.unsplash.com/photo-1570894410457-adb47d89a36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlja2xheWluZyUyMG1hc29ucnklMjB3b3JrfGVufDF8fHx8MTc2MTEwNDAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        content: 'Wij voeren metselwerken uit voor renovatie en aanbouwprojecten. Zowel voor particulieren als aannemers nemen we ruwbouw- en afwerkingswerken voor onze rekening:',
        list: [
          'Funderingswerken en keldermetselwerk',
          'Buitenmuren metsen (snelbouw, gevelstenen, isolatiemetselwerk)',
          'Binnenmuren metsen (dragend en niet-dragend)',
          'Gevelmetselwerk en siermetselwerk',
          'Herstelwerken aan bestaand metselwerk',
          'Plaatsen van lateien en betonbalken',
          'Ruwbouwwerken in combinatie met andere structurele werken'
        ]
      },
      {
        content: 'Wij werken steeds volgens de geldende normen, met respect voor stabiliteit, isolatiewaarden en bouwvoorschriften.'
      },
      {
        title: 'Bent u op zoek naar professionele metselwerken?',
        content: 'Of het nu gaat om een volledige woning, een aanbouw of herstellingswerken: wij staan voor u klaar met een professionele aanpak.'
      }
    ],
    cta: 'Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  },
  {
    id: 'voegwerk',
    title: 'Voegwerk',
    subtitle: 'Voegwerken – Duurzaam, Fraai en Beschermend voor Uw Muren',
    description: 'Goede voegwerken zorgen niet alleen voor een esthetisch strakke uitstraling, maar beschermen uw gevel ook tegen vocht, koude en slijtage. Met onze professionele voegwerken verlengt u de levensduur van uw muren en verhoogt u de waarde van uw woning.',
    image: 'https://images.unsplash.com/photo-1717699352282-5352f85204eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2ludGluZyUyMG1vcnRhciUyMGpvaW50c3xlbnwxfHx8fDE3NjExMDQwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        content: 'Na verloop van tijd kunnen voegen scheuren, uitzakken of verweren door weersinvloeden en natuurlijke slijtage. Dit leidt tot vochtproblemen, isolatieverlies en een verouderde uitstraling.'
      },
      {
        title: 'Laat uw voegen professioneel herstellen of vernieuwen',
        content: 'Verouderde of beschadigde voegen? Wacht niet tot vocht- of isolatieproblemen ontstaan. Kies voor onze specialistische voegwerken en geef uw gevel de bescherming én uitstraling die het verdient.'
      }
    ],
    benefits: {
      title: 'Voordelen van onze voegwerken',
      items: [
        'Herstel van beschadigde en versleten voegen',
        'Bescherming tegen vocht- en vorstschade',
        'Verbeterde isolatie en energie-efficiëntie',
        'Verfraaiing van uw gevel of metselwerk',
        'Gebruik van kwalitatieve, duurzame voegmortels'
      ],
      image: 'https://images.unsplash.com/photo-1678803262992-d79d06dd5d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTczNzg3M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  },
  {
    id: 'muurinjectie-opstijgend-vocht',
    title: 'Muurinjectie tegen opstijgend vocht',
    subtitle: 'Professionele Muurinjectie – Duurzame Bescherming Tegen Opstijgend Vocht',
    description: 'Wij bieden professionele muurinjectiebehandelingen aan om opstijgend vocht effectief te stoppen. Deze methode creëert een waterafstotende barrière in de muur, zodat vocht niet langer door de structuur kan opstijgen.',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmljayUyMHdhbGwlMjBob3VzZXxlbnwxfHx8fDE3OTU0MjQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        content: 'Wij bieden professionele muurinjectiebehandelingen aan om opstijgend vocht effectief te stoppen. Deze methode houdt in dat een gespecialiseerde waterafstotende oplossing in de muren wordt geïnjecteerd, waardoor een barrière ontstaat die voorkomt dat vocht door de structuur opstijgt.'
      },
      {
        content: 'Onze oplossing helpt uw eigendom te beschermen tegen schade, verbetert de binnenluchtkwaliteit en zorgt voor langdurige resultaten. Geschikt voor zowel nieuwe als bestaande gebouwen, is deze behandeling een betrouwbare manier om uw muren droog en structureel in goede staat te houden.'
      },
      {
        title: 'Werkgebied',
        content: 'Wij bieden deze diensten aan in de regio’s West- en Oost-Vlaanderen.'
      }
    ],
    benefits: {
      title: 'Voordelen van onze muurinjectiebehandeling',
      items: [
        'Effectieve stopzetting van opstijgend vocht',
        'Bescherming van metselwerk en interieur tegen vochtschade',
        'Verbetering van de binnenluchtkwaliteit',
        'Duurzame en betrouwbare oplossing voor bestaande en nieuwe gebouwen',
        'Beschikbaar in West- en Oost-Vlaanderen'
      ]
    },
    cta: 'Last van opstijgend vocht? Vraag vandaag nog een vrijblijvende offerte aan voor een professionele muurinjectiebehandeling.'
  },
  {
    id: 'renovatiewerkzaamheden',
    title: 'Renovatiewerkzaamheden',
    subtitle: 'Complete renovaties van A tot Z',
    description: 'Van kleine aanpassingen tot grote transformaties - wij begeleiden uw renovatieproject van begin tot eind met vakmanschap en precisie.',
    image: 'https://images.unsplash.com/photo-1604159848821-104723525eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHJlbm92YXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxMDM0NjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        content: 'Onze renovatiewerken omvatten alle aspecten van uw project, van planning tot uitvoering. Wij zorgen voor een naadloze samenwerking tussen alle disciplines.'
      }
    ]
  },
  {
    id: 'sloop-ruwbouw',
    title: 'Sloop- en ruwbouwwerkzaamheden',
    subtitle: 'Afbraak- en Structurele Werken met Kracht & Precisie',
    description: 'Wij combineren kracht, vakmanschap en veiligheid om elk project efficiënt en correct uit te voeren. Van kleine binnenafbraak tot het verwijderen van draagmuren of volledige sloopwerken — wij klaren de klus met respect voor structuur, omgeving en planning.',
    image: 'https://images.unsplash.com/photo-1678944827354-fb54b9040a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjExMDQwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        title: 'Afbraakwerken op maat van uw project',
        content: 'Of het nu gaat om renovatie, heropbouw of herindeling van een woning of gebouw, wij voeren alle soorten sloopwerken uit met professioneel materieel en aandacht voor veiligheid:',
        list: [
          'Binnenafbraak (muren, vloeren, plafonds)',
          'Verwijderen van keukens, badkamers, tegels en schouwen',
          'Selectieve afbraak met oog op recyclage en afvalscheiding',
          'Voorbereidende werken voor renovaties'
        ]
      },
      {
        title: 'Structurele werken en draagmuren verwijderen',
        content: 'Gaat u uw woning verbouwen en moet er een draagmuur verwijderd worden of een structurele wijziging gebeuren? Wij voeren alle structurele ingrepen uit volgens de regels van de kunst, steeds in samenwerking met een ingenieur of op basis van een technisch verslag:',
        list: [
          'Verwijderen van draagmuren',
          'Plaatsen van stalen balken (HEB, I-profielen, enz.)',
          'Betonboringen en zaagwerken',
          'Funderingen en verstevigingswerken',
          'Stabiliteitswerken bij renovaties of uitbreidingen'
        ]
      }
    ],
    cta: 'Op zoek naar een betrouwbare partner voor afbraakwerken of structurele werken? Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  },
  {
    id: 'vloerwerkzaamheden',
    title: 'Vloerwerkzaamheden',
    subtitle: 'Professionele Vloerwerken op Maat – Betrouwbaar, Snel en Betaalbaar',
    description: 'Wij zijn gespecialiseerd in het plaatsen van vloeren voor zowel nieuwbouw- als renovatieprojecten. Met oog voor detail en gebruik van hoogwaardige materialen zorgen we voor een resultaat dat niet alleen mooi oogt, maar ook jarenlang meegaat.',
    image: vloerwerkzaamhedenImage,
    sections: [
      {
        content: 'Elke ruimte vraagt om een aangepaste aanpak. Of het nu gaat om een warme, gezellige leefruimte, een moderne keuken of een strakke badkamer – wij zorgen voor een vloer die perfect past bij uw interieur én levensstijl. Wij verzorgen:',
        list: [
          'Tegels plaatsen (keramische tegels, natuursteen, terrastegels, enz.)',
          'Vinyl, laminaat of parketvloeren',
          'Egaliseren van ondergronden',
          'Vloeropbouw en isolatie',
          'Afwerking met plinten en voegwerken'
        ]
      },
      {
        content: 'Of u nu een nieuwe vloer wil laten leggen of een bestaande vloer wil vernieuwen: wij leveren maatwerk met oog voor detail en duurzaamheid. Dankzij onze ervaring en professionele aanpak kunnen we elke vloer plaatsen volgens de regels van de kunst – strak, stabiel en stijlvol.'
      }
    ],
    cta: 'Op zoek naar een expert in vloerwerken die garant staat voor kwaliteit, duurzaamheid én een feilloze afwerking? Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  },
  {
    id: 'opritten-terrassen',
    title: 'Opritten en terrassen',
    subtitle: 'Opritten & Terrassen – Duurzaam vakwerk met oog voor detail',
    description: 'Een oprit of terras is veel meer dan een functioneel oppervlak. Het is het visitekaartje van uw woning en bepaalt mee de uitstraling en waarde van uw eigendom. Bij ons kunt u rekenen op een perfecte combinatie van functionaliteit, esthetiek en kwaliteit, volledig afgestemd op uw wensen en de stijl van uw woning.',
    image: oprittenTerrassenImage,
    sections: [
      {
        content: 'Of u nu kiest voor een moderne look met strakke lijnen, een landelijke stijl met karaktervolle materialen of een tijdloze afwerking – wij begeleiden u van ontwerp tot uitvoering. Wij zorgen voor een duurzame aanleg van:',
        list: [
          'Opritten in klinkers, natuursteen, beton, grind of andere materialen',
          'Terrassen op maat, geschikt voor elke tuin en levensstijl',
          'Afwatering en fundering, zodat alles jarenlang stabiel en onderhoudsvriendelijk blijft',
          'Trappen, boordstenen en afboordingen die naadloos aansluiten bij het geheel',
          'Herstellingen of vernieuwing van bestaande opritten of terrassen'
        ]
      },
      {
        content: 'Wij werken uitsluitend met kwalitatieve materialen en hanteren een doordachte opbouw van elke ondergrond. Dit garandeert niet alleen een mooie afwerking, maar ook een lange levensduur, zelfs bij intensief gebruik of wisselende weersomstandigheden. Elk project voeren we uit met nauwkeurigheid, vakkennis en respect voor planning en budget.'
      }
    ],
    cta: 'Wilt u een nieuwe oprit of terras laten aanleggen of een bestaande ruimte vernieuwen? Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  },
  {
    id: 'totale-projecten',
    title: 'Totale projecten',
    subtitle: 'Totaalprojecten – Complete Bouw- en Renovatieoplossingen Uit Één Hand',
    description: 'Met onze totaalprojecten nemen wij uw volledige bouw- of renovatieproces uit handen. Van het eerste ontwerp en de vergunningen tot de uitvoering en de oplevering: u heeft slechts één aanspreekpunt voor het hele project. Zo geniet u van een zorgeloos traject met heldere communicatie en gegarandeerde kwaliteit.',
    image: totaleProjectenImage,
    sections: [
      {
        content: 'Een totaalproject betekent dat wij alle fases van uw bouw- of renovatieproject coördineren en uitvoeren, inclusief:',
        list: [
          'Architectuur en ontwerp door onze eigen architect, die plannen volledig op maat van uw wensen maakt',
          'Vergunningen en administratie',
          'Stabiliteitsstudies en technische berekeningen verzorgd door onze interne stabiliteitsingenieur',
          'Metselwerk, vloeren, dakwerken en afwerking',
          'Technische installaties en energiezuinige oplossingen',
          'Afwerking en oplevering'
        ]
      },
      {
        content: 'Realiseer uw bouw- of renovatiedroom met onze totaalprojecten, waar vakmanschap, expertise en persoonlijke service samenkomen onder één dak.'
      }
    ],
    cta: 'Neem contact op voor een vrijblijvend adviesgesprek en ontdek hoe wij uw project succesvol kunnen maken!'
  },
  {
    id: 'camera-inspectie',
    title: 'Camera-inspectie',
    subtitle: 'Camera-Inspectie van Rioleringsbuizen – Snel, Nauwkeurig & Zonder Breekwerken',
    description: 'Met een camera-inspectie van de rioleringsbuizen sporen wij snel én efficiënt de oorzaak op. Dankzij onze geavanceerde inspectiecamera brengen we het volledige traject van de buizen in beeld — zonder breekwerken en met een helder verslag achteraf.',
    image: 'https://images.unsplash.com/photo-1747751460942-fabbeb158263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBpbnNwZWN0aW9uJTIwZHJhaW58ZW58MXx8fHwxNzYxMTA0MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        content: 'Een verstopping wijst vaak op een onderliggend probleem: een breuk in de buis, wortelgroei, verzakkingen of verkeerd geplaatste aansluitingen. Een camera-inspectie voorkomt giswerk én bespaart u onnodige kosten. U weet exact wat er aan de hand is, én waar.'
      },
      {
        title: 'Wat houdt de camera-inspectie in?',
        content: 'We brengen een professionele rioolcamera in de leiding. Die zendt haarscherpe beelden uit van de binnenkant van uw buizen. Zo kunnen we exact lokaliseren waar het probleem zich bevindt.\n\nNa de inspectie ontvangt u van ons een uitgebreid verslag en duidelijk advies over eventuele herstellingen of opvolging. U weet dus perfect wat er aan de hand is — zwart op wit.'
      }
    ],
    cta: 'Last van een verstopte afvoer of terugkerende rioolproblemen? Kies voor zekerheid en laat uw riolering professioneel controleren. Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  },
  {
    id: 'schoorsteenvegen',
    title: 'Schoorsteenvegen en renovatie',
    subtitle: 'Schoorsteenreiniging en Renovatie – Voor een Veilige en Efficiënte Rookafvoer',
    description: 'Een goed onderhouden schoorsteen is essentieel voor de veiligheid en het comfort in uw woning. Met onze professionele schoorsteenreiniging en renovatie voorkomt u rookproblemen, CO-vergiftiging en schoorsteenbrand. Wij zorgen ervoor dat uw schoorsteen optimaal functioneert, van grondige reiniging tot deskundige renovatie.',
    image: schoorsteenvegenRenovatieImage,
    sections: [
      {
        title: 'Schoorsteenreiniging',
        content: 'Na elke reiniging ontvangt u een officieel attest voor uw brandverzekering.\n\nMet gespecialiseerde technieken verwijderen we roet en andere afzettingen die de schoorsteen kunnen verstoppen of gevaarlijk maken. Regelmatige reiniging voorkomt nare geurtjes en garandeert een optimale trek van uw haard of kachel.',
        list: [
          'Grondige mechanische en manuele reiniging',
          'Verwijderen van roet en nestmateriaal',
          'Inspectie van rookkanalen met camera',
          'Preventie van schoorsteenbrand',
          'Officieel attest na reiniging voor uw verzekering'
        ]
      },
      {
        title: 'Schoorsteenrenovatie voor duurzame veiligheid',
        content: 'Schade aan uw schoorsteen, zoals scheuren, loszittende voegen of verzakkingen, kan leiden tot vochtproblemen en onveilige situaties. Onze renovatiediensten herstellen uw schoorsteen duurzaam en verbeteren de isolatie en afvoer.',
        list: [
          'Herstellen van schoorsteenmetselwerk en voegen',
          'Plaatsen van binnenbekleding of voeringen',
          'Aanbrengen van schoorsteenkappen en afdekkingen',
          'Isolatie en waterdichte afwerking'
        ]
      }
    ],
    cta: 'Last van schoorsteenproblemen? Laat u niet verrassen. Zorg voor een veilige en efficiënte rookafvoer met onze professionele schoorsteenreiniging en renovatie. Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  },
  {
    id: 'tegelherstelling',
    title: 'Exclusieve tegelherstelling zonder breekwerk',
    subtitle: 'Holle of Losliggende Tegels Herstellen Zonder Uitbraak – Unieke Techniek in België',
    description: 'Een mooie tegelvloer verdient zorg. Maar wat als sommige tegels hol klinken of los liggen? Breekwerk of vervanging is niet altijd de beste oplossing — zeker niet in woningen met een hoogwaardige afwerking, of in winkels waar snelheid en netheid belangrijk zijn.',
    image: exclusieveTegelherstellingImage,
    sections: [
      {
        content: 'Daarom passen wij een exclusieve hersteltechniek toe die in België slechts zelden wordt aangeboden. Zonder uitbreken, zonder stof, zonder schade aan je vloer.\n\nMet deze professionele methode herstellen we holle of losliggende vloertegels zodat ze weer stevig vastzitten — snel, proper en nagenoeg onzichtbaar.'
      },
      {
        content: 'Onze techniek is speciaal ontwikkeld voor situaties waarin breekwerk absoluut vermeden moet worden. Denk aan:',
        list: [
          'Woningen en appartementen',
          'Luxe woningen en moderne appartementen',
          'Winkelruimtes of showrooms',
          'Hoogwaardig afgewerkte interieurs',
          'Tegelvloeren met een esthetische of functionele waarde'
        ]
      },
      {
        content: 'De exacte werkwijze blijft ons vakgeheim — maar het resultaat spreekt voor zich: Een vloer die opnieuw massief klinkt, perfect vastligt en z\'n oorspronkelijke uitstraling behoudt.'
      },
      {
        title: 'Voordelen van deze exclusieve aanpak',
        list: [
          'Geen breekwerk of stof',
          'Je bestaande vloer blijft volledig behouden',
          'Snel en zonder overlast uitgevoerd',
          'Betaalbaarder dan volledige herstellingen',
          'Ideaal voor bewoonde woningen of actieve handelszaken',
          'Zorgeloos herstel, met respect voor je interieur'
        ]
      },
      {
        title: 'Voor welke tegels en ruimtes?',
        content: 'Onze techniek is toepasbaar op:',
        list: [
          'Keramische tegels en natuursteen',
          'Binnenvloeren, gangen, leefruimtes',
          'Commerciële ruimtes zoals winkels en showrooms',
          'Nieuwbouw en renovatieprojecten',
          'Holklinkende of losliggende tegels zonder zichtbare schade'
        ]
      }
    ],
    cta: 'Zoek je een specialist die vloertegels herstelt zonder uitbreken, met oog voor kwaliteit? Dan ben je bij ons aan het juiste adres. Vraag vandaag nog een vrijblijvende offerte aan – wij denken graag met u mee!'
  }
];

// Helper function to get service by ID
export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find(service => service.id === id);
}
