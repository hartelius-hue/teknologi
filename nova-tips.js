'use strict';
/* Nova giver 60 fagligt afstemte starttips og 60 uddybende tips.
   Rådene guider eleverne uden at afsløre flervalgssvar. */
const NOVA_MISSION_HINTS=[[["Sammenlign ordene 'forudsiger' og 'ved'. Hvilket af dem beskriver bedst, hvad en sprogmodel gør?","Tænk på forskellen mellem et flydende svar og et svar, der er undersøgt i en faglig kilde."],["Et selvsikkert tonefald kan snyde. Hvilket udsagn i svaret ville du helst undersøge nærmere?","Overvej, hvad der kan ske, hvis modellen svarer sikkert på et spørgsmål, den ikke har belæg for."],["Hvordan vil du kontrollere et navn, et årstal eller en kilde uden at spørge den samme AI igen?","Se efter et tegn på, at svaret kan være opfundet. Hvilken uafhængig dokumentation mangler?"]],[["Start med ét tydeligt spørgsmål om fotosyntese. Hvad forklarer modellen godt, og hvad er uklart?","Gem en sætning fra svaret, som du vil undersøge i en naturfaglig kilde."],["Ændr kun én del af prompten, så du kan se, hvad netop den ændring betyder.","Sammenlign svarene ud fra faglig præcision, eksempler og hvor godt de passer til modtageren."],["Fjern en vigtig oplysning fra din prompt. Hvad gætter modellen på, når den mangler kontekst?","Prøv derefter at tilføje den manglende oplysning igen. Beskriv, hvad der ændrer sig."]],[["Skriv, hvem forklaringen er til, og hvilket fagligt niveau den skal passe til.","Bed om et konkret eksempel, og se om det faktisk hjælper med at forstå fotosyntesen."],["En god eksamenstræner skal stille spørgsmål, ikke give hele svaret med det samme.","Afprøv din instruktion: Giver assistenten et hint, når du svarer usikkert?"],["Adskil fakta, argumenter og usikkerhed, når modellen diskuterer atomkraft.","Bed om kilder, men kontrollér selv, om de eksisterer og støtter påstandene."]],[["Lyt først uden at læse. Hvilken del af udsagnet kan være vigtig at undersøge?","Et tal kan være afrundet. Overvej, hvornår en tilnærmelse er god nok."],["Læg mærke til ord som 'alle' og 'altid'. Hvad kræver så stærk en påstand?","Overvej, om ét eksempel er nok til at beskrive, hvordan alle unge lærer."],["En præcis procentdel lyder overbevisende. Hvem kan være blevet spurgt?","Hvad betyder 'dygtigere' konkret? Uden en definition er tallet svært at vurdere."]],[["'Fortæl om energi' er bredt. Giv opgaven en målgruppe og et tydeligt formål.","Vælg, om du vil have en forklaring, en sammenligning eller en undersøgelsesopgave."],["Hvis AI laver hele afleveringen, hvad lærer eleven så? Omskriv prompten til en aktivitet.","Bed fx om spørgsmål og feedback, så eleven selv skal formulere svar."],["Prøv at kræve både faglige kilder og tydelige forbehold om usikkerhed.","Undersøg, om prompten adskiller årsager, konsekvenser og mulige løsninger."]],[["Hvem står bag den oprindelige påstand? En kilde er mere end et link i et AI-svar.","Prøv at finde dokumentet uden for chatbotten. Kan du se afsender og dato?"],["Regler kan ændre sig. Hvor finder du den gældende og officielle tekst?","Sammenlign myndighedens oplysninger med chatbot-svaret; hvad mangler der?"],["To tal kan være forskellige uden at ét nødvendigvis er forkert. Undersøg målemetoden.","Se på årstal, målgruppe og definitioner, inden du vælger, hvad tallene viser."]],[["Test to prompts med nøjagtig samme spørgsmål, så sammenligningen bliver fair.","Bestem kriterier før forsøget: faglighed, forståelighed og relevans."],["Tilføj målgruppe eller svarformat i én prompt, men lad resten være det samme.","Sammenlign, hvilken besvarelse en bestemt elev faktisk får mest ud af."],["Læg mærke til, om modellen skelner mellem sikker viden og vurderinger.","Bed om en begrundelse for usikkerheden, og kontrollér selv vigtige oplysninger."]],[["Forklar med dine egne ord, hvad der kendetegner en brugbar prompt.","Giv et eksempel på en upræcis prompt og forklar, hvad du ville ændre."],["Du kan godt være kritisk over for et svar, der lyder professionelt. Forklar hvorfor.","Brug et konkret eksempel på et udsagn, der bør kontrolleres."],["Præsenter både én fordel og én risiko ved en AI-eksamenstræner.","Afslut med et forslag til en regel, der gør brugen mere ansvarlig."]],[["Start med et lille mål: fem gloser ad gangen og korte tilbagemeldinger.","Beskriv, hvad assistenten skal gøre, når eleven svarer forkert."],["Sikker træning kræver grænser. Hvilke råd må assistenten ikke give?","Afprøv den på et usikkert spørgsmål, og vurder om den reagerer forsvarligt."],["En eksamenscoach skal hjælpe eleven til at tænke selv. Hvordan skriver du det ind?","Test instruktionen på et svært spørgsmål: Kommer der hints før facit?"]],[["Vælg én upræcis formulering i AI-svaret. Hvad vil du gerne forstå bedre?","Ret en ting ad gangen, så du kan se, om forklaringen faktisk forbedres."],["Beskriv fejlen konkret i stedet for blot at skrive 'det er forkert'.","Bed om en rettelse med begrundelse. Undersøg derefter, om fejlen er væk."],["En tjekliste skal kunne bruges af en anden elev. Gør hvert punkt observerbart.","Medtag både faglig korrekthed, privatliv og forståelig feedback."]],[["Hvilke perspektiver eller personer nævner modellen slet ikke?","Sammenlign dens eksempler med et uafhængigt fagligt grundlag."],["Stil to ens spørgsmål med forskellige rammer. Ændrer fremstillingen sig?","Se efter, om bestemte grupper eller holdninger får mindre plads."],["Tænk over, hvem der kan få et skævt indtryk af emnet gennem AI-svaret.","Undersøg ikke bare, hvem der nævnes, men også hvordan de beskrives."]],[["Overvej, om en oplysning kan knyttes til en virkelig person, selv uden navn.","Prøv at omskrive din prompt, så ingen følsomme data er nødvendige."],["Vurder både, hvad AI kan hjælpe med, og hvad eleven selv bør gøre.","Tag et konkret eksempel, hvor AI-hjælp kan gøre læringen svagere."],["Skriv regler, som en elev kan følge i praksis, ikke kun flotte hensigtserklæringer.","Medtag kildekontrol, persondata og tydelighed om AI-hjælp."]],[["Et tvetydigt spørgsmål kan forstås på flere måder. Hvilken betydning vælger AI?","Omformulér spørgsmålet og se, om svaret bliver mere præcist."],["Sammenlign de to svar efter faste kriterier frem for at vælge det længste.","Undersøg, om modellerne bygger på forskellige antagelser eller definitioner."],["Planlæg en test, hvor du kun ændrer én faktor ad gangen.","Skriv på forhånd, hvad der ville tælle som en begrænsning ved modellen."]],[["Brug ét konkret eksempel fra hverdagen, og forklar både gevinst og risiko.","Skeln mellem noget, AI kan gøre hurtigt, og noget et menneske bør afgøre."],["Hvem kan eje det materiale, en model har lært af eller genereret?","Giv plads til flere synspunkter, og forklar hvad der stadig er usikkert."],["Prøv at forbinde AI med demokrati, ressourceforbrug og ulige muligheder.","Vælg ét dilemma og beskriv, hvem der får fordele, og hvem der kan blive påvirket."]],[["En fagmakker skal stille hjælpsomme spørgsmål på elevens niveau.","Bestem, hvordan den giver feedback uden bare at skrive løsningen."],["Beskriv træningens formål og klare grænser for sikkerhedsrelaterede råd.","Test, hvad assistenten gør, hvis den bliver bedt om noget uforsvarligt."],["En ansvarlig skoleassistent skal kunne håndtere usikkerhed og fejl.","Lav mindst tre testscenarier med både almindelige og vanskelige spørgsmål."]],[["Et godt kodeprojekt starter med en lille funktion og en tydelig målgruppe.","Forestil dig en elev, der skal bruge appen. Hvad skal den kunne gøre?"],["Når kode fejler, skal fejlen kunne genskabes. Hvilke trin fører til problemet?","Overvej, hvorfor en lille rettelse er nemmere at teste end en total omskrivning."],["AI kan foreslå kode, men hvem undersøger, om den fungerer og er sikker?","Tænk på ansvar for indhold, privatliv og tilgængelighed inden udgivelse."]],[["Beskriv én quizrunde fra start til slut: spørgsmål, svar og feedback.","Bed om én fil og en tydelig måde at teste korrekte og forkerte svar på."],["Planlæg, hvordan ordtræneren giver point og hjælper ved fejl.","Skriv en test, hvor eleven svarer forkert to gange. Hvad skal der ske?"],["En tilgængelig app skal også kunne bruges uden mus. Hvordan tester du det?","Nævn krav til tastatur, tydelige knapnavne og brugbar feedback."]],[["Ændr først én synlig tekst eller én knap. Kør koden og se, hvad der sker.","Find det HTML-element, du vil ændre. Hvordan kan du genkende det i koden?"],["Prøv både et korrekt og et forkert svar. Virker feedbacken i begge tilfælde?","Undersøg, om spillet kan testes igen uden at genindlæse hele siden."],["Test både at give point og at nulstille. Hvornår skal tallet ændres?","Læg mærke til, om det viste pointtal og den gemte værdi altid passer sammen."]],[["Begynd med at skitsere, hvilke sider brugeren har brug for.","Tænk på, hvordan en elev kommer fra forsiden til en aktivitet og tilbage."],["Prøv først at indlejre en lille kodeøvelse. Hvad vises på siden?","Undersøg forskellen på at indlejre kode og at redigere hele hjemmesidens kildekode."],["Afprøv på en Chromebook og en mindre skærm. Hvad bliver svært at bruge?","Indhent feedback fra en anden elev, og tjek ophavsret og persondata."]],[["Beskriv problemet med én sætning. Hvem vil have glæde af løsningen?","Vælg den vigtigste funktion i stedet for at love for mange ting."],["Vis en lille fungerende prototype. Hvilke to ændringer forbedrede den?","Lad en anden elev prøve løsningen uden at få en lang instruktion først."],["Brugertest handler om, hvad brugeren faktisk gør – ikke kun hvad du tror.","Beskriv én fejl, du fandt, hvordan du rettede den, og hvad du lærte om AI."]]];
const NOVA_STAGE_GUIDE=[
  'Hvilken konkret observation kan du gøre først? Beskriv, hvad du vil sammenligne.',
  'Hvilken forskel får du frem ved kun at ændre én ting i forsøget?',
  'Hvilke usikkerheder eller begrænsninger vil du nævne i din konklusion?'
];
const NOVA_REVIEW_HINTS=[
  'Du har gennemført denne udfordring. Kan du forklare, hvad du lærte, med dine egne ord?',
  'Overvej, hvordan du kunne forbedre forsøget, hvis du prøvede igen.',
  'Vælg den næste sværhedsgrad, eller prøv at teste din løsning med en makker.'
];
const NOVA_HOME_HINTS=[
  'Vælg en mission, der interesserer dig. Start med at undersøge spørgsmålet, før du prøver at løse det.',
  'Du må gerne teste dig frem. Lav én ændring ad gangen, så du kan se, hvad der virker.',
  'Brug AI som sparringspartner, men tjek altid vigtige fakta i andre kilder.',
  'Vis din løsning til en makker, og bed om ét konkret forbedringsforslag.',
  'Åbn Min progression for at se, hvilke badges og niveauprøver du mangler.'
];
let novaKey=null,novaIndex=0,novaLastMode='',novaHomeIndex=0,novaCompletedShown=false;
function novaRender(text){
  const target=el('helper-text');
  if(target)target.textContent=text;
}
function novaIsTask(){return el('task-view')?.style.display==='block'}
function novaIsProgress(){return el('progress-view')?.style.display==='block'}
function novaTaskKey(){return m+'-'+d}
function novaCurrentHints(){
  const mission=NOVA_MISSION_HINTS[m];
  if(!mission||!mission[d])return NOVA_STAGE_GUIDE;
  return [...mission[d],NOVA_STAGE_GUIDE[d]];
}
function novaNextTip(){
  if(!novaIsTask()){
    if(novaIsProgress()){
      const total=count(),passed=EXAMS.filter((_,i)=>saved.exams?.[i]?.passed).length;
      const tips=[
        'Du har gennemført '+total+' af 60 udfordringer. Kig efter en mission, hvor du mangler én sværhedsgrad.',
        'Du har bestået '+passed+' af fire niveauprøver. De næste badges viser, hvad du kan arbejde videre med.',
        'Når alle tre udfordringer i en mission er færdige, får du et missionsbadge.',
        'En bestået niveauprøve låser næste niveau op. Gennemgå de fem missioner først.'
      ];novaHomeIndex=(novaHomeIndex+1)%tips.length;novaRender(tips[novaHomeIndex]);return;
    }
    novaHomeIndex=(novaHomeIndex+1)%NOVA_HOME_HINTS.length;novaRender(NOVA_HOME_HINTS[novaHomeIndex]);return;
  }
  const id=novaTaskKey();
  if(novaKey!==id){novaKey=id;novaIndex=0;novaCompletedShown=false}
  const hints=novaCurrentHints();novaIndex=(novaIndex+1)%hints.length;
  novaRender(hints[novaIndex]);
}
hint=function(){
  const id=novaTaskKey();
  if(novaKey!==id){novaKey=id;novaIndex=0;novaCompletedShown=false;novaRender(novaCurrentHints()[0]);return}
  if(done(m,d)&&!novaCompletedShown){
    novaCompletedShown=true;novaRender(NOVA_REVIEW_HINTS[d]);return;
  }
  novaNextTip();
};
const novaPreviousOpenTask=openTask;
openTask=function(i,j){
  novaKey=null;novaIndex=0;novaCompletedShown=false;
  novaPreviousOpenTask(i,j);
};
const novaPreviousHome=home;
home=function(){
  novaPreviousHome();
  novaHomeIndex=(novaHomeIndex+1)%NOVA_HOME_HINTS.length;
  novaRender(NOVA_HOME_HINTS[novaHomeIndex]);
};
const novaPreviousProgress=progress;
progress=function(){
  novaPreviousProgress();
  const finished=count(),examsPassed=EXAMS.filter((_,i)=>saved.exams?.[i]?.passed).length;
  const message=finished===0?'Du er klar til at begynde. Din første udfordring giver det første badge.':
    'Du har klaret '+finished+' ud af 60 udfordringer og bestået '+examsPassed+' ud af fire niveauprøver. Hvad vil du arbejde med næste gang?';
  novaRender(message);
};
