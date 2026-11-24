'use strict';
/* Faglig vurdering, 2026: ingen fast svarplacering; eleven skal begrunde valget. */
const THINK_QUESTIONS={
0:[
{q:'En elev spørger SkoleGPT: "Hvad skete der i 1814?" Modellen giver et flydende svar uden kilder. Hvad forklarer bedst, hvordan svaret er dannet?',a:['Den forudsiger en tekst ud fra lærte mønstre; fakta må undersøges separat.','Den finder nødvendigvis oplysningerne i en historisk database og gengiver dem.','Den sammenligner selv alle historiske kilder og vælger automatisk den bedste.','Den husker skolens lærebog og kontrollerer hvert årstal inden svaret.'],why:'En sprogmodel genererer tekst ved hjælp af mønstre; et velformuleret svar er ikke et bevis for korrekthed.'},
{q:'SkoleGPT svarer sikkert, at et forsøg virker hver gang. Hvilken undersøgelse siger mest om svarets kvalitet?',a:['Undersøge forsøgets betingelser og kontrollere påstanden i en faglig kilde.','Bede om samme svar med flere detaljer og sammenligne formuleringerne.','Få modellen til at bekræfte udsagnet ved at stille spørgsmålet igen.','Kontrollere, om flere chatbots bruger lignende formuleringer, og behandle enigheden som bekræftelse uden andre kilder.'],why:'Uafhængig dokumentation og forsøgsbetingelser vejer tungere end stil og gentagelse.'},
{q:'En chatbot opgiver en forfatter og en bogtitel, du ikke kender. Hvilken fremgangsmåde er mest pålidelig?',a:['Slå titel og forfatter op hos biblioteket eller forlaget.','Spørge modellen, om den er sikker, og gemme dens bekræftelse som kilde.','Se efter, om titlen lyder troværdig, og bruge den med et forbehold.','Søge efter samme formulering i flere AI-genererede oversigter og behandle gentagelsen som dokumentation.'],why:'Kildens eksistens og oprindelse skal verificeres uden for chatbotten.'}
],
5:[
{q:'SkoleGPT henviser til en rapport uden dato eller afsender. Hvordan kan du bedst bruge henvisningen?',a:['Finde rapporten og kontrollere afsender, dato og metode.','Bruge rapporten med en note om, at AI ikke viste alle bibliografiske oplysninger.','Tage citatet med, hvis flere svar fra SkoleGPT nævner rapporten.','Anvende rapportens tal, men skrive at dokumentationen er usikker.'],why:'Ukendte referencer skal findes og kontrolleres, før de bruges som belæg.'},
{q:'Du skal undersøge regler for at bruge elevers billeder på skolens hjemmeside. Hvilket første skridt er stærkest?',a:['Tjekke skolens retningslinjer og relevante myndighedskilder i deres aktuelle version.','Bede AI skrive en juridisk vurdering og bruge den, hvis svaret er detaljeret.','Undersøge, hvordan andre skoler gør, og gå ud fra at det samme er tilladt, hvis deres praksis ligner skolens.','Læse en erfaren lærers opslag og bruge det som endeligt grundlag.'],why:'Regler og lokal praksis skal undersøges i autoritative og opdaterede kilder.'},
{q:'To undersøgelser viser forskellige procenttal for brug af AI i skolen. Hvad undersøger du først?',a:['Hvem der er spurgt, hvornår og hvordan brugen er defineret i undersøgelserne.','Hvilken undersøgelse der har flest deltagere, og bruge den som endeligt facit uden at se på målemetoden.','Hvilket resultat der ligger nærmest gennemsnittet af tallene.','Hvilket resultat der bliver refereret flest gange på sociale medier.'],why:'Forskelle i population, tidspunkt og metode kan gøre begge tal meningsfulde.'}
],
10:[
{q:'En AI-assistent foreslår næsten altid mandlige forskere til en tidslinje. Hvilken test kan bedst undersøge mulig bias?',a:['Sammenligne forslag med en uafhængig faglig oversigt og undersøge, hvem der udelades.','Bede modellen skrive en længere tidslinje og tælle alle navne i den.','Teste om andre AI-modeller også fremstiller forskerne i samme rækkefølge og bruge deres enighed som sikker dokumentation.','Fjerne alle oplysninger om køn og acceptere det første resultat.'],why:'Bias undersøges ved at se på mønstre og repræsentation i forhold til relevant dokumentation.'},
{q:'En model beskriver én kulturel praksis som "normal". Hvad er det vigtigste kritiske spørgsmål?',a:['Hvilke perspektiver og sammenligningsgrundlag der ligger bag ordet "normal".','Om modellen kan udskifte ordet med en mere neutral formulering.','Om tekstens længde giver plads til flere eksempler fra kulturen.','Om flere elever kender den praksis, som modellen nævner først.'],why:'Sprog kan indeholde skjulte normer; ordvalg og fravalg bør undersøges.'},
{q:'En AI-genereret tekst om et samfundsspørgsmål udelader nogle grupper. Hvilken konsekvens skal du især overveje?',a:['At bestemte erfaringer og interesser bliver overset i den fremstilling, andre bruger.','At teksten kan blive længere, hvis alle grupper nævnes med samme antal ord, så læsbarheden bliver sværere at opretholde.','At læseren må arbejde hårdere for at forstå en mere detaljeret fremstilling.','At modellen måske skal bruge mere regnekraft for at inddrage flere eksempler.'],why:'Manglende repræsentation kan forstærke skæve perspektiver og beslutninger.'}
],
15:[
{q:'Du vil bygge en ordtræner med SkoleGPT. Hvilken start giver bedst mulighed for at teste resultatet?',a:['Definere målgruppen og én lille funktion med et testkrav.','Bede om en komplet læringsportal og bagefter se, hvilke funktioner der virker.','Lade modellen vælge alle funktioner og først evaluere efter udgivelsen.','Kopiere en demo, ændre farverne og bruge antallet af knapper som mål.'],why:'En afgrænset prototype og konkrete testkrav gør fejl og forbedringer synlige.'},
{q:'Et AI-genereret spil tæller point forkert. Hvordan finder du bedst årsagen?',a:['Genskabe fejlen med bestemte klik og undersøge den relevante pointlogik.','Bede modellen skrive al koden om, så flere dele bliver ændret samtidig.','Skjule pointtælleren midlertidigt og arbejde videre med grafik og layout.','Spørge modellen, om spillet burde fungere, og acceptere dens forklaring.'],why:'Reproducerbare fejl og små målrettede rettelser er lettere at kontrollere.'},
{q:'En AI har lavet en hjemmeside til en skoleaktivitet. Hvem skal sikre, at den virker og overholder regler?',a:['Den ansvarlige, der vælger at udgive siden, sammen med relevante voksne.','Den AI-model, som genererede kildekoden og derfor er teknisk forfatter.','Webhotellet, fordi det har ansvaret for, hvordan siden bruges i klassen.','Besøgende elever, fordi fejl først kan opdages, når hjemmesiden bruges.'],why:'Ansvar for sikkerhed, kvalitet og udgivelse kan ikke lægges over på en chatbot.'}
]
};
const LISTEN_CASES=[
{q:'Du hører: "Solen er en stjerne, cirka 150 millioner kilometer fra Jorden." Hvad kan du efterprøve mest meningsfuldt?',a:['Om afstanden er et afrundet gennemsnit, og hvilken kilde der ligger bag.','Om det korrekte gennemsnit gælder på alle dage gennem hele året.','Om en enkelt illustration af Solen giver samme værdi som teksten.','Om andre chatbots vælger den samme rækkefølge i sætningen.'],why:'Afstanden varierer over året; cirka 150 millioner kilometer er en afrundet størrelse.'},
{q:'Du hører: "Alle unge lærer bedst ved hjælp af AI." Hvad er den vigtigste indvending?',a:['Påstanden generaliserer om en meget forskellig gruppe uden at afgrænse situationen.','Påstanden burde præcisere, hvilke digitale værktøjer de unge bruger mest.','Påstanden bliver først brugbar, hvis den ledsages af et eksempel fra en klasse.','Påstanden handler om læring og skal derfor kun undersøges ved spørgeskemaer.'],why:'En universel påstand om læring kræver stærk dokumentation og relevante forbehold.'},
{q:'Du hører: "94 procent bliver dygtigere af chatbots, viser en undersøgelse." Hvad spørger du først om?',a:['Hvem der blev undersøgt, hvordan "dygtigere" blev målt, og hvor data kan findes.','Om undersøgelsen kan gengives i et cirkeldiagram med nøjagtig 94 procent.','Om flere skoler har skrevet om undersøgelsen på deres egne hjemmesider.','Om modellen kan formulere tallet mere præcist med én decimal.'],why:'Et præcist procenttal er ikke dokumentation, før metode og datagrundlag er kendt.'}
];
function shuffledOptions(options){const items=options.map((label,i)=>({label,correct:i===0}));for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]]}return items}
let activeThink=null;
result=function(){
const c=M[m],type=c[2],q=c[3+d];let h='<div class="work">';
if(type==='quiz'||type==='listen'){
const entry=type==='quiz'?THINK_QUESTIONS[m][d]:LISTEN_CASES[d];const items=shuffledOptions(entry.a);activeThink={mission:m,difficulty:d,entry,selected:null,options:items};
h+='<p class="hint">Vælg den mest fagligt holdbare løsning. Alle forslag kan lyde plausible; begrund dit valg bagefter.</p>';
if(type==='listen')h+='<p>'+esc(q)+'</p><button class="secondary" onclick="speak('+JSON.stringify(q)+')">▶ Afspil påstanden</button>';
h+='<div class="answers">'+items.map((item,i)=>'<button class="thinking-choice" id="thinking-choice-'+i+'" onclick="choose('+i+')">'+esc(item.label)+'</button>').join('')+'</div>';
h+='<label for="think-why">Hvorfor vælger du denne løsning? Hvad skal undersøges, eller hvorfor er alternativerne mindre egnede?</label><textarea id="think-why" placeholder="Jeg vælger denne løsning, fordi … Jeg vil kontrollere …"></textarea>';
h+='<div class="controls"><button class="primary" onclick="finishThinking()">Vurder mit valg</button></div>';
}else if(type==='prompt'||type==='assistant'){
h+='<p>'+esc(q)+'</p><label for="purpose">Formål og emne</label><input type="text" id="purpose" value="'+esc(q)+'"><label for="audience">Målgruppe</label><input type="text" id="audience" value="elever i 8.–9. klasse"><label for="rules">Krav til svar og arbejdsform</label><textarea id="rules">Stil afklarende spørgsmål, giv trinvis hjælp, markér usikkerhed og foreslå test.</textarea>';
h+='<label for="prompt-reason">Hvilke ændringer har du valgt, og hvorfor passer de til opgaven?</label><textarea id="prompt-reason" placeholder="Jeg har præciseret … Det gør, at …"></textarea>';
h+='<div class="controls"><button class="primary" onclick="build()">Byg min instruktion</button></div><pre class="output" id="built" style="display:none"></pre><button class="secondary" onclick="finishPrompt()" id="built-done" style="display:none">✓ Jeg har afprøvet og vurderet instruktionen</button>';
}else if(type==='code'){
const initial=saved.notes[key(m,d)]||templates[d];
h+='<p>'+esc(q)+'</p><label for="code">Min HTML, CSS og JavaScript</label><textarea class="code" id="code" spellcheck="false">'+esc(initial)+'</textarea><div class="controls"><button class="primary" onclick="runCode()">▶ Kør kode</button><button class="secondary" onclick="downloadCode()">↓ Download HTML</button></div><iframe id="preview" sandbox="allow-scripts" referrerpolicy="no-referrer" title="Isoleret forhåndsvisning"></iframe>';
h+='<label for="code-reflection">Hvad ændrede du? Hvilken funktion testede du, og hvad skete der?</label><textarea id="code-reflection" placeholder="Jeg ændrede … Jeg forventede … Testen viste …"></textarea>';
h+='<button class="primary" onclick="completeCode()">✓ Gem, når jeg har testet og forklaret</button>';
}else{
h+='<label for="answer">'+esc(q)+'</label><textarea id="answer" oninput="saveAnswer()" placeholder="Beskriv dit forsøg, observationer og begrundelse …">'+esc(saved.notes[key(m,d)]||'')+'</textarea>';
if(type==='speak')h+='<button class="secondary" onclick="record()">🎙️ Indtal svar</button>';
h+='<p class="hint">Beskriv både et konkret eksempel, din vurdering og hvad du vil undersøge videre.</p>';
h+='<button class="primary" onclick="finish()">Gem min faglige refleksion</button>';
}
return h+'</div><div id="feedback" aria-live="polite"></div>';
};
choose=function(i){if(!activeThink||activeThink.mission!==m||activeThink.difficulty!==d)return;activeThink.selected=i;document.querySelectorAll('.thinking-choice').forEach((button,j)=>{button.classList.toggle('selected',i===j);button.setAttribute('aria-pressed',String(i===j))});el('feedback').innerHTML='<p class="hint">Forklar nu din faglige begrundelse, før du får feedback.</p>'};
function finishThinking(){
if(!activeThink||activeThink.selected===null){el('feedback').innerHTML='<p class="notice warn">Vælg først den løsning, du vil undersøge.</p>';return}
const reason=el('think-why')?.value.trim()||'';
if(reason.length<45||reason.split(/\s+/).length<7){el('feedback').innerHTML='<p class="notice warn">Forklar hvorfor med mindst én konkret faglig begrundelse.</p>';return}
const picked=activeThink.options[activeThink.selected],entry=activeThink.entry;
if(!picked.correct){el('feedback').innerHTML='<p class="notice warn">Ikke den stærkeste løsning endnu. '+esc(entry.why)+' Overvej derfor en anden mulighed, og skriv en ny begrundelse.</p>';return}
complete('Valg: '+picked.label+'\nBegrundelse: '+reason);el('feedback').innerHTML='<p class="notice">✓ Godt valgt. '+esc(entry.why)+' Din begrundelse er gemt i portfolioen.</p>';
}
const originalBuild=build;
build=function(){
const purpose=el('purpose').value.trim(),audience=el('audience').value.trim(),rules=el('rules').value.trim(),why=el('prompt-reason').value.trim();
if(purpose.length<18||audience.length<6||rules.length<55||why.length<55){el('feedback').innerHTML='<p class="notice warn">Gør instruktionen og begrundelsen mere konkret. Beskriv også, hvordan du vil teste resultatet.</p>';return}
if(purpose===M[m][3+d]&&audience==='elever i 8.–9. klasse'&&rules==='Stil afklarende spørgsmål, giv trinvis hjælp, markér usikkerhed og foreslå test.'){el('feedback').innerHTML='<p class="notice warn">Du har endnu ikke tilpasset standardskabelonen. Lav mindst én faglig ændring, og forklar hvorfor.</p>';return}
originalBuild();el('feedback').innerHTML='<p class="notice">Kopiér instruktionen til SkoleGPT, undersøg resultatet, og skriv hvad du vil forbedre.</p>';
};
function finishPrompt(){
const built=el('built').textContent.trim();if(!built){el('feedback').innerHTML='<p class="notice warn">Byg først en instruktion.</p>';return}
const reason=el('prompt-reason').value.trim();if(reason.length<55){el('feedback').innerHTML='<p class="notice warn">Forklar dine faglige valg lidt mere præcist.</p>';return}
complete(built+'\nBegrundelse: '+reason);
}
let codeExecuted=false;
const originalRunCode=runCode;
runCode=function(){codeExecuted=true;originalRunCode()};
const originalOpenTask=openTask;
openTask=function(i,j){codeExecuted=false;activeThink=null;originalOpenTask(i,j)};
completeCode=function(){
const code=el('code')?.value||'',reason=el('code-reflection')?.value.trim()||'';
if(!codeExecuted){el('feedback').innerHTML='<p class="notice warn">Kør din kode, og test funktionen i forhåndsvisningen først.</p>';return}
if(code===templates[d]){el('feedback').innerHTML='<p class="notice warn">Du har endnu ikke ændret startkoden. Tilpas mindst én funktion eller interaktion.</p>';return}
if(code.length<90||reason.length<55){el('feedback').innerHTML='<p class="notice warn">Beskriv din kodeændring, den konkrete test og resultatet.</p>';return}
complete(code+'\n\nTest og refleksion: '+reason);
};
finish=function(){
const v=el('answer')?.value.trim()||'';
if(v.length<90||v.split(/\s+/).length<16){el('feedback').innerHTML='<p class="notice warn">Uddyb din faglige refleksion: Hvad afprøvede du, hvad viste det, og hvorfor?</p>';return}
complete(v);
};
