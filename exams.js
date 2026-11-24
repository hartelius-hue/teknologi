'use strict';
/* SkoleGPT Lab – formative niveautests. Bevarer eksisterende lokale missioner. */
const EXAMS=[
{title:'Begynderprøven: AI-pilot',icon:'🚀',questions:[
['Hvad gør en sprogmodel primært?','Genererer tekst ud fra mønstre i træningsdata','Slår automatisk alt op i en sikker database','Tænker og føler som et menneske'],
['Hvilken prompt giver normalt det mest brugbare svar?','Forklar drivhuseffekten for en 8.-klasseelev med tre eksempler','Fortæl noget','Skriv et tilfældigt svar'],
['Hvad bør du gøre, når SkoleGPT nævner et overraskende tal?','Kontrollere tallet i en troværdig kilde','Bruge tallet uden kontrol','Bede om flere udråbstegn'],
['Hvad er en hallucination i generativ AI?','Et opdigtet eller forkert svar, der kan virke overbevisende','Når skærmen lyser kraftigt','Når en prompt bliver for kort'],
['Hvad er et godt næste skridt efter et upræcist svar?','Præcisere formål, målgruppe og ønsket format','Kopiere svaret ukritisk','Gentage samme prompt uden ændringer'],
['Hvilke oplysninger bør du undgå at dele i en chatbot?','Adgangskoder og følsomme personoplysninger','Generelle spørgsmål om fysik','Anonyme opgaveidéer'],
['Kan SkoleGPT altid garantere korrekte kilder?','Nej, de skal kontrolleres hver gang','Ja, hvis teksten er lang','Ja, hvis modellen virker venlig'],
['Hvem har ansvaret for at tjekke en AI-besvarelse?','Den, der bruger og afleverer den','Kun chatbotten','Ingen, fordi det er AI']
]},
{title:'Øvetprøven: Prompt- og assistentmester',icon:'🧠',questions:[
['Hvad er den bedste måde at sammenligne to prompts på?','Teste dem med samme opgave og tydelige vurderingskriterier','Vælge den korteste uden test','Kopiere det første svar'],
['Hvordan bør en eksamenstræner hjælpe eleven?','Stille spørgsmål og give hints, før den afslører facit','Skrive hele eksamensopgaven for eleven','Undgå al feedback'],
['Hvad bør en god assistentinstruktion indeholde?','Rolle, mål, arbejdsform, begrænsninger og feedback','Kun assistentens navn','Kun emojis'],
['Hvad gør du, hvis en AI-kilde ikke kan findes?','Undlader at bruge den og leder efter oprindelig dokumentation','Finder på et sidetal','Citerer den alligevel'],
['Hvad viser en god kritisk test af et svar?','Både efterprøvning af fakta og vurdering af usikkerhed','Kun at svaret er velskrevet','Kun antal ord'],
['En prompt mangler målgruppe. Hvad kan du forbedre?','Beskrive, hvem svaret skal passe til','Skrive med store bogstaver','Fjerne emnet'],
['Hvad er en god opfølgende prompt ved fejl?','Påpeg den konkrete fejl, og bed om en begrundet rettelse','Sig blot Du er dårlig','Bed om samme tekst igen'],
['Hvorfor skal en træningsassistent afprøves?','For at finde misforståelser, usikre råd og begrænsninger','Fordi den altid rammer plet','For at undgå at skrive en instruktion']
]},
{title:'Udvidet prøve: Kritisk AI-ekspert',icon:'🛡️',questions:[
['Hvad kan bias i en AI-model føre til?','Skæve eller diskriminerende svar','At alle svar bliver objektive','At computeren bliver langsommere'],
['Hvilket princip er vigtigst ved persondata i AI?','Dataminimering og respekt for privatliv','Del så mange oplysninger som muligt','Gem alles adgangskoder'],
['Hvordan bør AI-genereret indhold bruges i en aflevering?','Efter skolens regler, med egen faglig vurdering og åbenhed','Som en usynlig genvej uden kontrol','Uden hensyn til ophav'],
['Hvorfor er kildekritik vigtig, selv når AI-svaret lyder overbevisende?','Sproglig sikkerhed er ikke dokumentation','AI tager aldrig fejl','Lange svar er altid sande'],
['Hvad er en væsentlig samfundsmæssig AI-udfordring?','At AI kan forstærke ulighed og påvirke informationsmiljøet','At alle får helt samme muligheder','At tekster får flere kommaer'],
['Hvad er en ansvarlig måde at bruge AI til beslutningsstøtte?','Lade mennesker vurdere konsekvenser og ansvar','Lade modellen bestemme uden indblik','Skjule, at AI blev brugt'],
['Hvad kan du undersøge ved AI og miljø?','Energiforbrug, ressourceforbrug og faktisk nytte','Kun skærmens farve','Kun modellens navn'],
['Hvad er en god metode, når AI-svar er uenige?','Undersøge kilder, definitioner og usikkerhed','Vælge det mest populære svar','Tro på det længste svar']
]},
{title:'Vibe coding-prøven: Skab og test',icon:'💻',questions:[
['Hvad står HTML primært for i en hjemmeside?','Indholdets struktur','Farver og animationer','Internetforbindelsen'],
['Hvad bruger man CSS til?','Layout, farver og visuel præsentation','At gemme elevadgangskoder','At hente strøm til computeren'],
['Hvad bruges JavaScript typisk til i et interaktivt spil?','Reaktioner på klik, point og logik','Kun overskrifters udseende','Kun at åbne en browser'],
['Hvordan begynder du et vibe coding-projekt godt?','Beskriv målgruppe, formål, krav og en lille første version','Bed om en hel platform uden krav','Kopiér tilfældig kode uden at teste'],
['Din knap virker ikke. Hvad gør du først?','Reproducerer fejlen og undersøger den relevante kode','Udgiver spillet alligevel','Sletter hele projektet med det samme'],
['Hvad bør du undersøge før du udgiver på Google Sites?','Indlejring, mobilvisning, adgang, ophavsret og privatliv','Kun baggrundsfarven','Kun filnavnets længde'],
['Hvad er et vigtigt tilgængelighedskrav i en kodeopgave?','Knapper skal kunne bruges med tastatur og forståelige navne','Kun blinkende animationer','Så lille tekst som muligt'],
['Hvad bør du gøre med AI-genereret kode før udgivelse?','Læse, afprøve og rette den – også med andre brugere','Stole på den uden test','Skjule alle fejl']
]}];
saved.exams=saved.exams||{};
let examSession=null;
const baseHome=home,baseOpen=openTask,baseSelect=selectLevel,baseProgress=progress,baseReset=resetAll;
function unlocked(l){return l===0||!!saved.exams[l-1]?.passed}
function missionReady(l){return Array.from({length:5},(_,i)=>[0,1,2].some(d=>done(l*5+i,d))).every(Boolean)}
function showLock(level){const prev=level-1;const label=prev>=0?levels[prev][0]:'forrige';const msg='🔒 '+levels[level][0]+' åbner først, når du har bestået afslutningsprøven på '+label+'.';const helper=document.getElementById('helper-text');if(helper)helper.textContent=msg;alert(msg)}
home=function(){baseHome();const cards=Array.from(document.querySelectorAll('#level-cards>.card'));cards.forEach((card,l)=>{const btn=card.querySelector('button');if(!unlocked(l)){card.classList.add('level-locked');btn.textContent='🔒 Bestå forrige niveau først';btn.setAttribute('aria-label','Låst: '+levels[l][0]);btn.onclick=()=>showLock(l);btn.setAttribute('aria-disabled','true')}else{card.classList.remove('level-locked')}});
const panel=document.getElementById('exam-panel');panel.innerHTML=EXAMS.map((test,l)=>{const passed=!!saved.exams[l]?.passed,ready=missionReady(l),open=unlocked(l),countDone=Array.from({length:5},(_,i)=>[0,1,2].some(d=>done(l*5+i,d))).filter(Boolean).length;const disabled=!open||!ready;return '<article class="exam-tile '+(passed?'passed':'')+(disabled?' locked':'')+'"><div class="exam-icon">'+test.icon+'</div><div class="exam-content"><span class="exam-kicker">NIVEAU '+(l+1)+' · AFSLUTTENDE PRØVE</span><h3>'+esc(test.title)+'</h3><p>'+(passed?'✅ Bestået med '+saved.exams[l].score+'/8 rigtige. Næste niveau er låst op.':!open?'🔒 Bestå forrige niveau for at åbne prøven.':!ready?'Gennemfør mindst én udfordring i hver af de fem missioner først ('+countDone+'/5).':'Du er klar! Besvar otte spørgsmål. Du består med mindst seks rigtige.')+'</p></div><button '+(disabled?'disabled':'')+' onclick="startExam('+l+')">'+(passed?'Prøv igen':'Start niveauprøven')+' →</button></article>'}).join('');
};
selectLevel=function(l){if(l>=0&&!unlocked(l)){showLock(l);return}baseSelect(l)};
openTask=function(i,d){const level=Math.floor(i/5);if(!unlocked(level)){showLock(level);return}baseOpen(i,d)};
progress=function(){baseProgress();const block=document.getElementById('exam-progress');block.innerHTML='<h2>Mine niveauprøver</h2>'+EXAMS.map((x,i)=>'<p>'+(saved.exams[i]?.passed?'✅':'🔒')+' '+esc(x.title)+' · '+(saved.exams[i]?.passed?saved.exams[i].score+'/8 rigtige':'Ikke bestået endnu')+'</p>').join('')};
resetAll=function(){if(confirm('Vil du slette lokale missioner, besvarelser og beståede niveauprøver?')){saved={done:{},notes:{},exams:{}};save();progress()}};
function startExam(l){if(!unlocked(l)){showLock(l);return}if(!missionReady(l)){alert('Du skal først gennemføre mindst én udfordring i alle fem missioner.');return}examSession={level:l,index:0,score:0,answered:false};document.getElementById('home-view').style.display='none';document.getElementById('task-view').style.display='none';document.getElementById('progress-view').style.display='none';document.getElementById('exam-view').style.display='block';renderExam();window.scrollTo(0,0)}
function renderExam(){const t=examSession,l=t.level,questions=EXAMS[l].questions;
let html='<div class="exam-hero"><span class="exam-kicker">'+levels[l][0]+' · NIVEAUPRØVE</span><h1>'+esc(EXAMS[l].title)+'</h1><p>Spørgsmål '+(Math.min(t.index+1,8))+' af 8 · '+t.score+' rigtige indtil nu · Bestågrænse: 6/8</p><div class="bar"><i style="width:'+(t.index/8*100)+'%"></i></div></div>';
if(t.index>=questions.length){const passed=t.score>=6;if(passed){const prev=saved.exams[l]||{};saved.exams[l]={passed:true,score:Math.max(prev.score||0,t.score),date:new Date().toISOString()};save()}html+='<div class="exam-finish">'+(passed?'🏆':'🔄')+'<h2>'+(passed?'Tillykke! Du bestod!':'Du er tæt på – prøv igen')+'</h2><p>Du fik <strong>'+t.score+' af 8</strong> rigtige. '+(passed?(l===3?'Du har gennemført alle niveauprøver i SkoleGPT Lab.':'Næste niveau er nu åbent. Du kan også fortsætte med ekstra udfordringer.'):'Læs feedbacken, træn de svære emner og prøv igen. Du skal have mindst seks rigtige.')+'</p><button class="primary" onclick="endExam()">← Til læringsuniverset</button><button class="secondary" onclick="startExam('+l+')">Prøv testen igen</button></div>'}
else{const q=questions[t.index];const opts=q.slice(1).map((label,i)=>({label,correct:i===0}));const order=[1,2,0].map(i=>opts[(i+t.index)%3]);html+='<section class="exam-question"><p class="exam-kicker">SPØRGSMÅL '+(t.index+1)+'</p><h2>'+esc(q[0])+'</h2><div class="exam-options">'+order.map(o=>'<button data-correct="'+o.correct+'" onclick="answerExam(this,'+o.correct+')">'+esc(o.label)+'</button>').join('')+'</div><div id="exam-feedback" role="status" aria-live="polite"></div><button id="exam-next" class="primary" style="display:none" onclick="nextExam()">Næste spørgsmål →</button></section>'}
document.getElementById('exam-content').innerHTML=html}
function answerExam(button,correct){if(!examSession||examSession.answered)return;examSession.answered=true;if(correct)examSession.score++;document.querySelectorAll('.exam-options button').forEach(btn=>{btn.disabled=true;if(btn.dataset.correct==='true')btn.classList.add('right');if(btn===button&&!correct)btn.classList.add('wrong')});const q=EXAMS[examSession.level].questions[examSession.index];document.getElementById('exam-feedback').innerHTML='<div class="exam-feedback '+(correct?'good':'bad')+'">'+(correct?'✓ Rigtigt!':'✗ Ikke helt. Det rigtige svar er: '+esc(q[1]))+'</div>';document.getElementById('exam-next').style.display='inline-block'}
function nextExam(){if(!examSession||!examSession.answered)return;examSession.index++;examSession.answered=false;renderExam()}
function endExam(){examSession=null;document.getElementById('exam-view').style.display='none';filter=-1;home();document.getElementById('exam-panel').scrollIntoView({behavior:'smooth',block:'start'})}
home();
