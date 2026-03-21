import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = [
  {
    title: '1. Algemene draagwijdte der voorwaarden',
    content: `1.1 Deze voorwaarden bevatten en beheersen de volledige overeenkomst tussen de klant en Angelo Renovates, met betrekking tot het geheel van de aan of door ons gevraagde en toevertrouwde werken. Deze voorwaarden worden geacht onherroepelijk aanvaard te zijn bij de ondertekening door de klant van de bestelbon, offerte of overeenkomst, ongeacht welkdanige eerdere correspondentie en ongeacht enige andere voorwaarden of enige documenten of formulieren van welke aard ook vanwege de klant. Elke afwijking aan onderhavige voorwaarden dient verplichtend schriftelijk te gebeuren.`
  },
  {
    title: '2. Totstandkoming overeenkomst',
    content: `2.1 De prijsoffertes en prijsramingen zijn bindend. Iedere prijsofferte vervalt na één maand, tenzij conventionele afwijking. Zij kunnen geen aanleiding geven tot enige betwisting, noch weigering der werken of prijsvermindering.

2.2 Een overeenkomst komt pas tot stand na schriftelijke of elektronische bevestiging van de offerte door de klant. Eventuele wijzigingen of aanvullingen na de totstandkoming zijn slechts geldig na schriftelijk akkoord van beide partijen.

2.3 Opgegeven uitvoeringstermijnen zijn steeds indicatief. Niet naleving van de vooropgestelde uitvoeringstermijnen kunnen nooit aanleiding geven tot ontbinding van de overeenkomst lastens Angelo Renovates, tot indeplaatsstelling noch tot betaling van enige schadevergoeding aan de klant.

2.4 Bij bestellingen of opdrachten voor rekening van een derde is de opdrachtgever hoofdelijk en ondeelbaar gehouden tot betaling met de derden door hem aangewezen.

2.5 Onze prijzen, zoals opgegeven in onze offertes, hetzij als eenheidsprijzen of als forfaitaire prijzen, werden vastgelegd op basis van de tarieven, officiële koersen, weddes en sociale lasten geldig op de datum van de opstelling van de offerte.

2.6 Zij zijn steeds herzienbaar door Angelo Renovates en zelfs zonder het voorafgaandelijk akkoord van de klant, indien de marktprijzen of de parameters voor hun berekening op het ogenblik van de facturatie, met minstens 5 % gestegen zijn.

2.7 Elke wijziging, toevoeging of weglating met betrekking tot de werkzaamheden zoals omschreven in de bestelbon/offerte/overeenkomst, moet het voorwerp uitmaken van een aanhangsel bij de bestelbon/offerte/overeenkomst.

2.8 Meerwerken worden pas uitgevoerd na bevestiging van de opdracht door de klant en als de prijs overeengekomen is. Meerwerken mogen met alle middelen van recht bewezen worden.`
  },
  {
    title: '3. Leveringen en termijnen/overmacht',
    content: `3.1 Hoe dan ook zal elke gebeurtenis die een onoverkomelijke hindernis vormt of ons er toe dwingt de werken tijdelijk of definitief stil te leggen, als een geval van overmacht worden beschouwd, zo ondermeer (maar niet-limitatief) ongevallen, oorlogen en hun gevolgen, slechte weersomstandigheden, stakingen, lock-out, tekort aan werkkrachten en materiaal, storingen en moeilijkheden inzake transport, vertragingen bij leveranciers, ziekten, personeelstekort, bedrijfsorganisatorische omstandigheden, vertraging van andere aannemers werkzaam op de werf, het in gebreke blijven van de klant om Angelo Renovates de nodige inlichtingen te verschaffen nodig voor de uitvoering van de opdracht enz...

3.2 De tijdelijke opschorting van de werken door overmacht, brengt van rechtswege en zonder schadevergoeding met zich dat de oorspronkelijk voorziene uitvoeringstermijn verlengd wordt met een periode gelijk aan de opschortingstermijn.

3.3 De aannemer kan evenwel aan de tegenpartij vragen om het contract opnieuw te onderhandelen met het oog op de aanpassing of beëindiging ervan indien aan bepaalde vereisten is voldaan.

3.4 Indien de levering franco op de werf of het magazijn is overeengekomen, is Angelo Renovates, diens onderaannemers of aangestelden slechts gehouden op deze plaats te leveren voor zover zij op normale wijze bereikbaar is.`
  },
  {
    title: '4. Aansprakelijkheid voor schade',
    content: `4.1 De klant is jegens Angelo Renovates aansprakelijk voor elk schadeverwekkend feit dat zich voordoet op de werf aan onze goederen, aangestelden of onderaannemers en hun materialen.

4.2 Angelo Renovates is niet aansprakelijk voor het verlies, de diefstal, het waardeverlies of de beschadiging van door de klant aan ons toevertrouwde materialen of werken van welke aard ook.

4.3 Partijen komen uitdrukkelijk overeen dat de verplichtingen van Angelo Renovates een inspanningsverbintenis en geen resultaatsverbintenis uitmaken.

4.4 Conform artikel 1152 OBW wordt uitdrukkelijk overeengekomen dat indien de aansprakelijkheid van Angelo Renovates toch in het gedrang zou worden gebracht, deze aansprakelijkheid beperkt zal zijn tot een vermindering van de prijs.

4.5 De klant dient ervoor te zorgen dat de werf voldoende verzekerd is voor aanvang van de werken.

4.6 Bij bouw, vernieuwbouw en alle andere opdrachten waarbij administratieve vergunningen te pas komen, dragen wij geen enkele verantwoordelijkheid wat de administratieve vergunningen betreft.

4.7 De klant dient ervoor te zorgen dat de werken onmiddellijk kunnen worden aangevat. De werf dient door de klant in het voordeel van Angelo Renovates gratis voorzien te worden van elektriciteit en water.`
  },
  {
    title: '5. Beëindiging',
    content: `Bij beëindiging van toevertrouwde opdracht, door de klant of door onze firma, het weze voor of tijdens de uitvoering van de werken, is een forfaitaire schadevergoeding verschuldigd ten belope van minimum 30% van de waarde van de bestelling zonder BTW, dit evenwel onder voorbehoud van een hogere bewezen reële schadevergoeding.`
  },
  {
    title: '6. Aanvaarding der werken',
    content: `6.1 Uit hoofde van onze leveringen, beperkt onze waarborg zich tot deze die wij kunnen bekomen bij onze leveranciers. De goederen mogen echter niet verwerkt of behandeld zijn.

6.2 In geen enkel geval is Angelo Renovates aansprakelijk voor gebreken, van welke aard ook, die door Angelo Renovates, onze onderaannemers of aangestelden geleverde goederen en materialen zouden bekleven.

6.3 De uitvoering van de werken dient te gebeuren volgens de regels van het goed vakmanschap. Deze worden gespecifieerd in de eigenlijke overeenkomst of in het lastenboek of bij gebreke hieraan in de technische voorschriften van Buildwise.

6.4 Door de inontvangstname of het meenemen van de goederen erkent de koper uitdrukkelijk dat de koopwaar beantwoordt aan zijn bestelling en vrij is van enig zichtbaar gebrek.

6.5 Voor eventuele verborgen gebreken dient Angelo Renovates per aangetekende brief op de hoogte worden gebracht binnen uiterlijk twee maanden na ontdekking van het gebrek.

6.6 In geen geval is Angelo Renovates aansprakelijk voor gebreken, van welke aard ook, in goederen en materialen die door de klant, diens onderaannemers, gemandateerden of aangestelden werden geleverd.`
  },
  {
    title: '7. Oplevering',
    content: `7.1 Ingeval de gesloten overeenkomst onder de toepassing valt van de Woningbouwwet (Wet Breyne), zal de voorlopige oplevering der werken worden aanzien als de uitdrukkelijke aanvaarding der werken.

7.2 Indien geen oplevering werd voorzien, zal de levering van de goederen of materialen of de uitvoering van het werk zelf, zonder protest bij aangetekend schrijven vanwege de klant binnen de 48 uren vanaf de levering of uitvoering, gelden als definitieve en onherroepelijke aanvaarding.

7.3 In alle gevallen zal een onvoorwaardelijke betaling van de vorderingsstaten, voorschotten, facturen of andere kostenstaten zonder redelijk protest worden aanzien als een definitieve en onherroepelijke aanvaarding van de werken.

7.4 In alle gevallen zal tegelijk de onvoorwaardelijke gehele of gedeeltelijke ingebruikname van het gebouw door de klant of diens gemachtigden worden aanzien als de definitieve en onherroepelijke aanvaarding der werken.`
  },
  {
    title: '8. Onderaanneming',
    content: `De facturen van onderaannemers van Angelo Renovates zijn pas betaalbaar na voorlopige oplevering van de werken die hun betreffen.`
  },
  {
    title: '9. Klachten inzake voorschotten of facturatie',
    content: `Ten einde geldig te zijn, moet elke klacht aangaande voorschotten, betalingen en facturen geschieden bij aangetekend schrijven aan de zetel van Angelo Renovates binnen de acht kalenderdagen vanaf de datum van verzending van de factuur, nota of kostenstaat. De factuurdatum wordt onweerlegbaar vermoed de datum van verzending van factuur te zijn.`
  },
  {
    title: '10. Eigendomsvoorbehoud',
    content: `10.1 Alle goederen, materialen en benodigdheden, alsmede de uitgevoerde werken blijven eigendom van Angelo Renovates tot aan de integrale betaling van onze facturen in hoofdsom en aankleven.

10.2 Het risico gaat echter over op het moment dat de goederen onze magazijnen verlaten. De klant staat vanaf de levering op de werf in voor schade aan en vervreemding van deze goederen.`
  },
  {
    title: '11. Betalingsmodaliteiten',
    content: `11.1 Al onze bestellingen en leveringen zijn contant betaalbaar binnen de 14 dagen na factuurdatum aan onze maatschappelijke zetel.

11.2 De B.T.W. en alle andere belastingen, taksen, heffingen of kosten zijn steeds ten laste van de klant.

11.3 Indien de klant nalaat het volgens factuur in hoofdsom en aankleven bepaalde te betalen binnen de voormelde termijn, is het integrale bedrag ineens en zonder nadere ingebrekestelling opeisbaar.

11.4 Elke schuld van een klant die op de vervaldag onbetaald blijft, zal van rechtswege en zonder ingebrekestelling of welke andere formaliteit ook, een interest van 12 % per jaar opbrengen, alsook een forfaitaire schadevergoeding van 10 % met een minimum van 150 Euro en een maximum van 2.750,00 Euro.

11.5 Elke vertraging in de betaling kan aanleiding geven om de nog uit te voeren leveringen en werken op te schorten of te vernietigen.

11.6 Angelo Renovates kan het contract op kennisgeving ontbinden wanneer de niet-nakoming van de klant voldoende ernstig is.

11.7 Angelo Renovates heeft het recht de overeenkomst als van rechtswege en met onmiddellijke ingang beëindigd te beschouwen ingevolge een faillissement, de aanvraag van een WCO-procedure, de vereffening of de ontbinding van de klant.`
  },
  {
    title: '12. Nietigheid',
    content: `Indien één of meerdere bedingen ongeldig of nietig zijn, dan tast dit de geldigheid en afdwingbaarheid van de andere bedingen van deze algemene voorwaarden niet aan.`
  },
  {
    title: '13. GDPR',
    content: `De persoonsgegevens van de opdrachtgevers worden door Angelo Renovates verwerkt in het kader van de offerte voor de opdracht met het oog op het klantenbeheer en de boekhouding. De opdrachtgevers kunnen hun gegevens altijd inkijken en, zo nodig, laten verbeteren of wissen, via een eenvoudig verzoek met bewijs van identiteit.`
  },
  {
    title: '14. Bevoegdheid en toepasselijk recht',
    content: `14.1 In geval van geschil zijn enkel de Rechtbanken van het gerechtelijk arrondissement Gent afdeling Kortrijk bevoegd.

14.2 Enkel het Belgische recht is van toepassing.

14.3 Alvorens een gerechtelijke procedure te starten, kan elk van de partijen verzoeken om elk technisch geschil voor te leggen aan de Verzoeningscommissie Bouw, Espace Jacquemotte, Hoogstraat 139, 1000 Brussel, www.bouwverzoening.be`
  }
];

function AccordionItem({ 
  section, 
  index, 
  isOpen, 
  onToggle 
}: { 
  section: typeof sections[0]; 
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const appleEase = [0.28, 0, 0.4, 1] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: appleEase
      }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 lg:py-8 group text-left"
      >
        <h3
          className="text-black group-hover:text-yellow-500 transition-colors duration-300"
          style={{
            fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
          }}
        >
          {section.title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: appleEase }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: appleEase }}
        className="overflow-hidden"
      >
        <div className="pb-8 pr-12">
          <p
            className="text-gray-600 whitespace-pre-line"
            style={{
              fontSize: 'clamp(0.9375rem, 1.25vw, 1.0625rem)',
              lineHeight: 1.7,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            {section.content}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AlgemeneVoorwaarden() {
  const appleEase = [0.28, 0, 0.4, 1] as const;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="voorwaarden" className="relative bg-gray-50 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="mb-16 lg:mb-20 text-center"
        >
          <h2
            className="text-black tracking-tight mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Algemene Voorwaarden.
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: appleEase }}
            className="text-gray-600"
            style={{
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Transparantie en duidelijkheid in onze samenwerking
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200/60 overflow-hidden">
          <div className="px-6 lg:px-12">
            {sections.map((section, index) => (
              <AccordionItem
                key={index}
                section={section}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
          className="mt-16 text-center"
        >
          <p
            className="text-gray-600 mb-2"
            style={{
              fontSize: 'clamp(0.9375rem, 1.25vw, 1.0625rem)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif'
            }}
          >
            Vragen over onze voorwaarden?
          </p>
          <a
            href="mailto:info@angelorenovates.be"
            className="text-black hover:text-yellow-500 transition-colors duration-300"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            info@angelorenovates.be
          </a>
        </motion.div>
      </div>
    </div>
  );
}