'use strict';
/* Nuancerede svarmuligheder, blandet rækkefølge og faglig begrundelse i alle niveauprøver. */
const EXAM_ALTERNATIVES=[
[
['Den sammenholder svar med alle internettets kilder, før den viser sin tekst.','Den gengiver træningsdata som præcise citater fra de vigtigste kilder.','Den vælger altid én verificeret fagtekst og omskriver den til eleven.'],
['Forklar drivhuseffekten med ord, du selv ville bruge til en ven.','Giv en grundig forklaring af drivhuseffekten med alle centrale begreber.','Lav et overblik over drivhuseffekten og nævn nogle virkninger.'],
['Spørge modellen, hvilke kilder den selv mener, den har brugt.','Sammenligne tallet med et svar fra en anden sprogmodel.','Bede SkoleGPT forklare, hvorfor netop dette tal ser sandsynligt ud.'],
['Et resultat, der afviger fra faglige kilder, selv om det er velformuleret.','En forklaring, der indeholder korrekte fakta, men bruger svære fagord.','Et svar, der kun dækker en del af spørgsmålet uden at være forkert.'],
['Bede om mere indhold om samme emne, indtil svaret er langt nok.','Få modellen til at give tre eksempler, uden at ændre andre krav.','Bede om et alternativt svar og vælge den version, man bedst kan lide.'],
['Et navn og en fødselsdato, der kan knyttes til en bestemt elev.','En fiktiv persons navn i et rollespil til en danskfaglig opgave.','En anonym beskrivelse af en klasseøvelse uden personoplysninger.'],
['Kun hvis der står en kilde nederst i svaret, bør den efterprøves.','Hvis flere modeller nævner samme kilde, er kontrol mindre vigtig.','Hvis svaret handler om kendt stof, kan kilderne bruges uden opslag.'],
['Den lærer, der stillede opgaven, skal alene kontrollere alle svar.','De andre elever i gruppen skal godkende svaret inden afleveringen.','Den AI-tjeneste, der formulerede svaret, skal dokumentere alle fakta.']
],
[
['Prøve dem i forskellige fag og vurdere, hvilken der giver længst svar.','Sammenligne én kort og én lang prompt og vælge den mest detaljerede.','Spørge AI, hvilken af de to prompts den selv synes er bedst.'],
['Give en samlet modelbesvarelse, som eleven derefter skal genfortælle.','Stille flere spørgsmål på én gang og vurdere alle svar til sidst.','Give facit efter hvert spørgsmål, så eleven hurtigt kan komme videre.'],
['En fast personlighed og et velkomstsvar, som er ens for alle elever.','En liste over emner, men lade modellen bestemme alle arbejdsmetoder.','Et præcist format for svar, men uden oplysninger om brugerens mål.'],
['Undersøge, om flere chatbots nævner titlen, før den bruges i opgaven.','Skrive henvisningen med et forbehold og lade læseren vurdere den.','Bruge dele af indholdet, hvis udsagnet virker rimeligt ud fra emnet.'],
['Få modellen til at fremhæve de dele af svaret, den selv er usikker på.','Sammenligne svaret med egne noter, men undlade eksterne fagkilder.','Bedømme om sproget og strukturen virker professionelle og præcise.'],
['Bede om en mere detaljeret forklaring uden at nævne modtageren.','Give et eksempel, men stadig lade AI vælge svarets sværhedsgrad.','Angive et længere svarformat, så der automatisk kommer mere hjælp.'],
['Bede om en helt ny besvarelse uden at beskrive fejlen nærmere.','Få modellen til at formulere sin tidligere påstand mere forsigtigt.','Bed modellen om kilder, men undlade at præcisere den konkrete fejl.'],
['Afprøve den på én erfaren bruger, som kan rette dens formuleringer.','Se, om den svarer hurtigt på fem forskellige spørgsmål om emnet.','Kontrollere om instruktionsprompten er skrevet uden stavefejl.']
],
[
['At modellen kan afspejle skæve mønstre fra sit datagrundlag.','At alle fagområder bliver fremstillet med samme mængde information.','At bestemte svar fylder mere på skærmen end andre svar.'],
['Gennemsigtige formål og sikker opbevaring af alle indsamlede elevdata.','At spørge eleverne om lov til at dele alle oplysninger med modellen.','At fjerne fulde navne, men altid bevare private detaljer i opgaven.'],
['Som faglig inspiration, der kan bruges frit, hvis den omskrives.','Med tydelig kildeangivelse, men uden at efterprøve selve indholdet.','Som et forslag, der er tilstrækkeligt, hvis det lyder som elevens sprog.'],
['En AI kan bruge gamle data, men det gør ikke nødvendigvis svaret forkert.','En AI kan misforstå spørgsmålet, men et flydende svar er ofte godt nok.','En AI kan formulere usikkerhed dårligt, men længere svar retter det ofte.'],
['At forskellige fag og jobs vil kræve nye måder at arbejde på.','At flere beslutninger kan blive baseret på mønstre fra digitale data.','At information kan produceres hurtigere og dermed få større udbredelse.'],
['Lade AI sammenligne mulighederne og følge dens mest detaljerede anbefaling.','Lade modellen vælge efter faste kriterier uden efterfølgende kontrol.','Lade en lærer læse resultatet, men undlade at vise AI-brugen.'],
['Hvor mange spørgsmål AI kan besvare på ét minut på en Chromebook.','Hvordan en elevs skærmstrømforbrug ændrer sig, mens en chatbot er åben.','Om et mindre AI-svar altid kræver færre ressourcer end en længere tekst.'],
['Vælge modellen med flest detaljer og derefter kontrollere de vigtigste tal.','Samle de to svar til et gennemsnit, så uenigheden bliver mindre.','Bede en tredje model afgøre, hvilken af de to der har ret.']
],
[
['Hvordan hjemmesiden skal se ud, når CSS og JavaScript mangler.','Hvilke handlinger der sker, når en bruger klikker på en knap.','Hvordan en bruger logger ind via skolens netværksforbindelse.'],
['At beskrive sidens tekstindhold og overskrifter med semantiske elementer.','At styre den bagvedliggende datamodel og opdatere en database.','At håndtere, hvad der sker, når en knap sender et formularsvar.'],
['At give hjemmesiden et ensartet visuelt layout på flere skærme.','At bestemme rækkefølgen af overskrifter og afsnit i HTML.','At gemme statiske billedfiler, så browseren kan hente dem.'],
['Beskriv først alle tænkelige funktioner, så AI kan vælge mellem dem.','Lav det fulde slutprodukt fra starten og vurder kvaliteten bagefter.','Begynd med designet og fastlæg først målgruppen, når spillet virker.'],
['Beskriver fejlen for AI og bruger dens rettelse uden yderligere test.','Udskifter hele scriptet og undersøger, om knappen nu ser rigtig ud.','Tester på en anden computer og antager, at problemet er løst dér.'],
['At layout og farver passer til skolens øvrige digitale materialer.','At siden fungerer på den computer, som udvikleren selv har brugt.','At koden indeholder så få filer som muligt, så den er nem at dele.'],
['At siden har så mange grafiske ikoner, at alle funktioner er synlige.','At animationer bruges som hjælp til at vise brugerens næste handling.','At spillet kan styres med mus, fordi de fleste elever har en mus.'],
['At AI har overholdt alle krav, der blev skrevet i den oprindelige prompt.','At siden ser korrekt ud i et enkelt skærmbillede på udviklerens maskine.','At den genererede kode er kort og derfor lettere at holde sikker.']
]
];
for(let l=0;l<EXAMS.length;l++){
if(EXAMS[l].questions.length!==8||EXAM_ALTERNATIVES[l].length!==8)throw Error('Ufuldstændig prøvebank');
EXAMS[l].questions=EXAMS[l].questions.map((q,i)=>[q[0],q[1],...EXAM_ALTERNATIVES[l][i]]);
}
/* Variation i svarets længde: hverken korteste eller længste mulighed er facit som fast regel. */
const REFINED_CORRECT={
'0-0':'Genererer tekst ud fra mønstre i træningsdata, uden at kunne garantere at alle fakta er korrekte.',
'0-2':'Kontrollere tallet hos en troværdig fagkilde og undersøge, hvad tallet bygger på.',
'0-4':'Præcisere opgavens målgruppe, format og formål for at få et mere brugbart svar.',
'1-1':'Stille ét spørgsmål ad gangen, give hints og først afsløre facit, når eleven har forsøgt.',
'1-2':'Beskrive rolle, målgruppe, arbejdsform, grænser og måden der gives faglig feedback på.',
'1-4':'Undersøge både påstandenes dokumentation, faglige holdbarhed og den usikkerhed, der er tilbage.',
'1-5':'Beskrive målgruppen og vælge et passende fagligt niveau for svaret.',
'1-7':'For at opdage upræcise forklaringer, misforståelser og forslag, som kan være usikre i praksis.',
'2-1':'Kun indsamle de personoplysninger, som er nødvendige, og beskytte elevens privatliv.',
'2-3':'Et overbevisende sprog er ikke dokumentation; centrale oplysninger skal kontrolleres i troværdige kilder.',
'2-5':'Bevare menneskets ansvar og undersøge mulige konsekvenser, før beslutninger træffes.',
'2-7':'Undersøge kilder, datoer og definitioner, så det bliver klart, hvorfor oplysningerne er forskellige.',
'3-0':'HTML beskriver en sides indhold og struktur, herunder overskrifter, afsnit, billeder og knapper.',
'3-2':'JavaScript håndterer interaktioner, spillogik og point, når brugeren klikker eller svarer.',
'3-4':'Genskabe fejlen med bestemte trin og derefter undersøge knappens kode og logik.',
'3-6':'At knapper har forståelige navne og kan betjenes med tastatur, også uden mus.'
};
for(let level=0;level<EXAMS.length;level++)for(let q=0;q<EXAMS[level].questions.length;q++){const replacement=REFINED_CORRECT[level+'-'+q];if(replacement)EXAMS[level].questions[q][1]=replacement}
const EXAM_BALANCED_CORRECT={
  "0-0": "Danner tekst ud fra mønstre i data og kontrollerer ikke selv alle fakta.",
  "0-2": "Tjekke tallet i en troværdig kilde og se, hvad det bygger på.",
  "1-1": "Stille spørgsmål og hints, før eleven får facit og forklaring.",
  "1-2": "Beskrive rolle, mål, fremgangsmåde, grænser og løbende feedback.",
  "1-4": "Kontrollere fakta og dokumentation samt faglig usikkerhed i svaret.",
  "2-1": "Indsamle færrest mulige persondata og beskytte elevers privatliv.",
  "2-3": "Flot, sikkert sprog er ikke dokumentation; påstande må efterprøves.",
  "3-2": "Styrer klik, point og logik i et interaktivt JavaScript-spil.",
  "0-1": "Forklar drivhuseffekten med tre eksempler for en elev i 8. klasse.",
  "0-3": "Et fejlagtigt svar, der lyder overbevisende, men mangler faktuelt belæg.",
  "1-0": "Teste samme opgave med begge prompts og vurdere forskellene.",
  "1-3": "Undlade kilden og undersøge den oprindelige dokumentation selv.",
  "2-0": "Skæve eller diskriminerende mønstre i nogle AI-besvarelser.",
  "2-2": "Bruge AI efter skolens regler, med egen vurdering og åbenhed.",
  "2-6": "Undersøge AI-systemets energi- og ressourceforbrug samt nytte.",
  "3-1": "CSS bruges til at definere sidens layout, farver og visuelle udtryk."
};
for(let level=0;level<EXAMS.length;level++)for(let q=0;q<EXAMS[level].questions.length;q++){const fix=EXAM_BALANCED_CORRECT[level+'-'+q];if(fix)EXAMS[level].questions[q][1]=fix}
function examShuffle(items){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
renderExam=function(){
const t=examSession,l=t.level,questions=EXAMS[l].questions;
let html='<div class="exam-hero"><span class="exam-kicker">'+levels[l][0]+' · NIVEAUPRØVE</span><h1>'+esc(EXAMS[l].title)+'</h1><p>Spørgsmål '+Math.min(t.index+1,8)+' af 8 · '+t.score+' rigtige indtil nu · Bestågrænse: 6/8</p><div class="bar"><i style="width:'+(t.index/8*100)+'%"></i></div></div>';
if(t.index>=questions.length){
const passed=t.score>=6;if(passed){const prev=saved.exams[l]||{};saved.exams[l]={passed:true,score:Math.max(prev.score||0,t.score),date:new Date().toISOString()};save()}
html+='<div class="exam-finish">'+(passed?'🏆':'🔄')+'<h2>'+(passed?'Tillykke! Du bestod!':'Øv videre og prøv igen')+'</h2><p>Du fik '+t.score+' af 8 rigtige. '+(passed?(l===3?'Du har bestået alle fire niveauprøver.':'Næste niveau er åbent. Fortsæt med at undersøge og afprøve.'):'Du skal have mindst seks rigtige. Læs feedbacken og prøv igen.')+'</p><button class="primary" onclick="endExam()">← Til læringsuniverset</button><button class="secondary" onclick="startExam('+l+')">Prøv igen</button></div>';
}else{
const q=questions[t.index];const choices=examShuffle(q.slice(1).map((label,i)=>({label,correct:i===0})));t.choices=choices;t.answered=false;t.reflected=false;
html+='<section class="exam-question"><span class="exam-kicker">SPØRGSMÅL '+(t.index+1)+'</span><h2>'+esc(q[0])+'</h2><p class="hint">Vælg det fagligt bedste svar. Forklar bagefter, hvorfor du valgte netop det.</p><div class="exam-options">'+choices.map((choice,i)=>'<button onclick="answerExam(this,'+i+')">'+esc(choice.label)+'</button>').join('')+'</div><div id="exam-feedback" aria-live="polite"></div><label for="exam-why">Din faglige begrundelse</label><textarea id="exam-why" placeholder="Mit valg bygger på … Et vigtigt forbehold er …" rows="3"></textarea><button id="exam-next" class="primary" style="display:none" onclick="nextExam()">Gem begrundelse og fortsæt →</button></section>';
}
document.getElementById('exam-content').innerHTML=html;
};
answerExam=function(button,index){
if(!examSession||examSession.answered)return;
const choice=examSession.choices?.[index];if(!choice)return;
examSession.answered=true;if(choice.correct)examSession.score++;
document.querySelectorAll('.exam-options button').forEach(btn=>{btn.disabled=true;if(btn===button)btn.classList.add(choice.correct?'right':'wrong')});
document.getElementById('exam-feedback').innerHTML='<div class="exam-feedback '+(choice.correct?'good':'bad')+'">'+(choice.correct?'✓ En fagligt holdbar løsning.':'Ikke det bedste valg. En vigtig nuance mangler i den løsning.')+' Forklar din vurdering og hvad du ville undersøge videre.</div>';
document.getElementById('exam-next').style.display='inline-block';
};
nextExam=function(){
if(!examSession?.answered)return;
const why=document.getElementById('exam-why')?.value.trim()||'';
if(why.length<40||why.split(/\s+/).length<7){document.getElementById('exam-feedback').innerHTML='<div class="exam-feedback bad">Begrund dit valg med mindst én konkret faglig pointe, før du fortsætter.</div>';return}
examSession.index++;examSession.answered=false;renderExam();
};
