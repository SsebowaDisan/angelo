export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  heroImage: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'vloerwerken-zwevegem',
    title: 'Vloerwerken',
    category: 'Vloeren',
    location: 'Zwevegem',
    year: '2026',
    description:
      'Vloerwerken in Zwevegem met een strakke plaatsing, duurzame materialen en een nette afwerking die perfect aansluit op de ruimte.',
    challenge:
      'Het project vroeg om een nauwkeurige plaatsing en een consistente afwerking zodat het vloerbeeld overal mooi doorloopt en het resultaat jarenlang sterk blijft.',
    solution:
      'Met een zorgvuldige voorbereiding van de ondergrond, een precieze plaatsing en aandacht voor details realiseerden we een duurzame vloerafwerking in Zwevegem.',
    heroImage: '/project-images/vloerwerken-zwevegem/vloerwerken-zwevegem-vloerafwerking-01.webp',
    images: [
      '/project-images/vloerwerken-zwevegem/vloerwerken-zwevegem-vloerafwerking-02.webp',
      '/project-images/vloerwerken-zwevegem/vloerwerken-zwevegem-vloerafwerking-03.webp',
      '/project-images/vloerwerken-zwevegem/vloerwerken-zwevegem-vloerafwerking-04.webp',
      '/project-images/vloerwerken-zwevegem/vloerwerken-zwevegem-vloerafwerking-05.webp',
      '/project-images/vloerwerken-zwevegem/vloerwerken-zwevegem-vloerafwerking-06.webp'
    ],
    tags: ['Vloerwerken', 'Zwevegem', 'Afwerking', 'Interieur']
  },
  {
    id: 'renovation-marke',
    title: 'Renovation',
    category: 'Renovaties',
    location: 'Marke',
    year: '2026',
    description:
      'Totaalrenovatie in Marke met een frisse, moderne afwerking en aandacht voor detail in elke fase van de uitvoering.',
    challenge:
      'De bestaande ruimtes vroegen om een volledige vernieuwing met een strakke planning, consistente afwerking en een harmonieus eindresultaat.',
    solution:
      'Met een doordachte renovatieaanpak, kwalitatieve materialen en nauwkeurige uitvoering werd dit project in Marke omgevormd tot een hedendaagse en duurzame woonomgeving.',
    heroImage: '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-06.webp',
    images: [
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-01.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-02.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-03.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-04.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-05.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-07.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-08.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-09.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-10.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-11.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-12.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-13.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-14.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-15.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-16.webp',
      '/project-images/renovatie-marke/renovatie-marke-totaalrenovatie-17.webp'
    ],
    tags: ['Renovatie', 'Marke', 'Afwerking', 'Interieur']
  },
  {
    id: 'luxe-badkamer-renovatie',
    title: 'Luxe Badkamerrenovatie',
    category: 'Badkamerrenovaties',
    location: 'Antwerpen',
    year: '2025',
    description: 'Een complete transformatie van een gedateerde badkamer naar een luxueuze wellness ruimte met natuursteen, zwarte kranen en premium afwerking.',
    challenge: 'De klant wilde een kleine badkamer omtoveren tot een luxe spa-achtige ruimte zonder de functionaliteit te verliezen.',
    solution: 'Door slim gebruik van ruimte, premium materialen en strategische verlichting hebben we een adembenemende badkamer gecreëerd die luxe en functionaliteit perfect combineert.',
    heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ],
    tags: ['Natuursteen', 'Luxe Afwerking', 'Vloerverwarming', 'Douche']
  },
  {
    id: 'moderne-keuken-renovatie',
    title: 'Moderne Keukenrenovatie',
    category: 'Keukenrenovaties',
    location: 'Brussel',
    year: '2025',
    description: 'Een strakke, moderne keuken met hoogglans afwerking, geïntegreerde apparatuur en een functioneel kookeiland.',
    challenge: 'Het creëren van een moderne, functionele keuken binnen een beperkte ruimte met optimale werkflow.',
    solution: 'Een doordacht ontwerp met maatwerk kasten, slim opbergsysteem en een multifunctioneel kookeiland dat tevens dienst doet als eetbar.',
    heroImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1588854337221-4cf9fa96673f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ],
    tags: ['Kookeiland', 'Maatwerk', 'Moderne Design', 'Apparatuur']
  },
  {
    id: 'woonkamer-interieur',
    title: 'Modern Woonkamer Design',
    category: 'Interieur',
    location: 'Gent',
    year: '2023',
    description: 'Een elegante woonkamer met custom wandbekleding, ingebouwde verlichting en hoogwaardige afwerking.',
    challenge: 'De woonkamer moest zowel gastvrij als stijlvol zijn, met veel opbergruimte zonder de ruimte vol te laten lijken.',
    solution: 'Ingebouwde kasten op maat, indirecte LED-verlichting en een neutrale kleurenpalet creëren een ruime, luxe uitstraling.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ],
    tags: ['Maatwerk Kasten', 'LED Verlichting', 'Wandbekleding', 'Luxe']
  },
  {
    id: 'exterieur-renovatie',
    title: 'Exterieur Renovatie',
    category: 'Gevels & Buitenwerk',
    location: 'Mechelen',
    year: '2023',
    description: 'Complete renovatie van de gevel met moderne isolatie, nieuwe ramen en strakke afwerking.',
    challenge: 'Verouderde gevel moderniseren met behoud van de originele architectuur en verbetering van de energie-efficiëntie.',
    solution: 'Hoogwaardige isolatie, energiezuinige ramen en een moderne gevelafwerking die de authentieke uitstraling respecteert.',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ],
    tags: ['Isolatie', 'Ramen', 'Gevel', 'Energie-efficiënt']
  },
  {
    id: 'vloerwerk-project',
    title: 'Professioneel Vloerwerk',
    category: 'Vloeren',
    location: 'Leuven',
    year: '2025',
    description: 'Installatie van hoogwaardige plavuizen met vloerverwarming in een modern appartement.',
    challenge: 'Het leggen van grote formaat tegels met perfecte vlakheid en integratie van vloerverwarming.',
    solution: 'Professionele egalisatie, premium tegels van 120x60cm en naadloze integratie van een efficiënt vloerverwarmingssysteem.',
    heroImage: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1565183928294-625b3e8ac5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ],
    tags: ['Tegels', 'Vloerverwarming', 'Groot Formaat', 'Modern']
  },
  {
    id: 'terras-oprit',
    title: 'Terras & Oprit Aanleg',
    category: 'Terrassen & Opritten',
    location: 'Hasselt',
    year: '2023',
    description: 'Aanleg van een ruim terras en oprit met natuursteen en drainage systeem.',
    challenge: 'Creëren van een duurzaam, onderhoudsvriendelijk buitenterras met perfecte waterafvoer.',
    solution: 'Gebruik van premium natuursteen, professionele fundering en een doordacht drainagesysteem voor langdurige kwaliteit.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1601760562234-9814eea6663a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    ],
    tags: ['Natuursteen', 'Drainage', 'Oprit', 'Terras']
  }
];

export const projectCategories = [
  'Alle Projecten',
  'Renovaties',
  'Badkamerrenovaties',
  'Keukenrenovaties',
  'Interieur',
  'Gevels & Buitenwerk',
  'Vloeren',
  'Terrassen & Opritten'
];
