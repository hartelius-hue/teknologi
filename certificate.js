'use strict';
/* Personligt diplom genereres udelukkende i elevens browser. Intet navn sendes til serveren. */
const diplomaEarned=()=>EXAMS.every((_,i)=>saved.exams?.[i]?.passed===true)&&M.every((_,i)=>[0,1,2].every(j=>done(i,j)));
const diplomaDate=()=>{const timestamps=EXAMS.map((_,i)=>Date.parse(saved.exams?.[i]?.date||'')).filter(Number.isFinite);const completed=timestamps.length===EXAMS.length?new Date(Math.max(...timestamps)):new Date();return new Intl.DateTimeFormat('da-DK',{timeZone:'Europe/Copenhagen',day:'numeric',month:'long',year:'numeric'}).format(completed)};
const diplomaFeatures=['Forstår og anvender sprogmodeller','Skriver, tester og forbedrer prompts','Bruger AI kritisk og ansvarligt','Udvikler og afprøver kodeprojekter'];
const diplomaStripName=value=>String(value||'').trim().replace(/\s+/g,' ').slice(0,70);
function drawDiploma(name,date){
return '<div class="diploma-sheet" id="certificate-stage" role="document" aria-label="Personligt diplom til '+esc(name)+'">'+
'<div class="diploma-inner"><div class="diploma-orbit" aria-hidden="true">✧</div>'+
'<div class="diploma-kicker">◈ SKOLEGPT LAB · TEKNOLOGIFORSTÅELSE</div>'+
'<div class="diploma-sparkles" aria-hidden="true">✦ &nbsp; ★ &nbsp; ✧ &nbsp; ★ &nbsp; ✦</div>'+
'<div class="diploma-heading">DIPLOM</div>'+
'<div class="diploma-small">TILDELES</div>'+
'<div class="diploma-recipient">'+esc(name)+'</div>'+
'<p class="diploma-lead">for at have gennemført alle 60 udfordringer, bestået fire niveauprøver<br>og samlet alle 29 præstationsbadges.</p>'+
'<div class="diploma-competencies">'+diplomaFeatures.map(x=>'<div><span aria-hidden="true">✦</span> '+esc(x)+'</div>').join('')+'</div>'+
'<div class="diploma-bottom"><div><span>Gennemført</span><strong>'+esc(date)+'</strong></div><div class="diploma-seal" aria-label="Fire beståede niveauer"><strong>4 / 4</strong><small>BESTÅET</small></div><div><span>Læringsforløb</span><strong>SkoleGPT Lab · 8.–9. klasse</strong></div></div>'+
'<div class="diploma-foot">Udstedt lokalt på baggrund af registrerede niveauprøver i elevens browser.</div></div></div>';
}
function renderDiplomaCTA(host=el('certificate-panel')){
if(!host)return;
if(!diplomaEarned()){
const n=EXAMS.filter((_,i)=>saved.exams?.[i]?.passed).length;
const finished=count();
host.innerHTML='<div class="diploma-locked"><span aria-hidden="true">🏅</span><div><h3>Dit personlige diplom</h3><p>Gennemfør alle 60 udfordringer og bestå alle fire niveauprøver. Du har gennemført '+finished+'/60 udfordringer og bestået '+n+'/4 prøver.</p></div><span class="diploma-lock-label">🔒 LÅST</span></div>';return;
}
host.innerHTML='<div class="diploma-ready"><span aria-hidden="true">🏆</span><div><h3>Du har fortjent dit diplom!</h3><p>Alle 60 udfordringer og fire niveauprøver er gennemført. Skriv dit navn, og gem diplomet som PDF eller udskriv det.</p></div><button class="primary" onclick="showDiploma()">🎓 Hent diplom</button></div>';
}
function showDiploma(){
if(!diplomaEarned()){alert('Du skal gennemføre alle 60 udfordringer og bestå alle fire niveauprøver, før diplomet kan udstedes.');return}
el('home-view').style.display='none';el('task-view').style.display='none';el('progress-view').style.display='none';el('exam-view').style.display='none';el('certificate-view').style.display='block';
el('certificate-name').value=saved.certName||'';
el('certificate-stage-wrap').innerHTML='';
el('certificate-error').textContent='';
window.scrollTo(0,0);
}
function prepareDiploma(){
if(!diplomaEarned()){el('certificate-error').textContent='Diplomet er låst, indtil alle 60 udfordringer og alle fire prøver er bestået.';return false}
const name=diplomaStripName(el('certificate-name').value);
if(name.length<2||!/[\p{L}]/u.test(name)){el('certificate-error').textContent='Skriv dit navn (mindst to tegn).';return false}
saved.certName=name;save();el('certificate-error').textContent='';
el('certificate-stage-wrap').innerHTML=drawDiploma(name,diplomaDate());
return true;
}
function printDiploma(){if(!prepareDiploma())return;window.print()}
function downloadDiploma(){
if(!prepareDiploma())return;
const name=saved.certName,style=document.getElementById('diploma-styles')?.textContent||'';
const doc='<!doctype html><html lang="da"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Diplom · SkoleGPT Lab</title><style>'+style+'</style><body style="margin:0;background:#101a33"><div class="standalone-diploma">'+drawDiploma(name,diplomaDate())+'</div><p class="standalone-hint">Du kan gemme eller udskrive dette diplom fra browseren med Ctrl+P → Gem som PDF.</p></body></html>';
const blob=new Blob([doc],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
a.href=url;a.download='SkoleGPT-Lab-Diplom.html';a.click();setTimeout(()=>URL.revokeObjectURL(url),1200);
}
const certificateHome=home;home=function(){el('certificate-view').style.display='none';certificateHome();renderDiplomaCTA()};
const certificateProgress=progress;progress=function(){el('certificate-view').style.display='none';certificateProgress();const target=el('certificate-progress');if(target){target.innerHTML='<h2>Diplom</h2><div id="certificate-panel-progress"></div>';renderDiplomaCTA(el('certificate-panel-progress'))}};
const certificateExamRender=renderExam;renderExam=function(){certificateExamRender();if(examSession?.index>=8&&diplomaEarned()){const c=el('exam-content');c.innerHTML+='<p class="notice">🏆 Du har gennemført hele kurset og opnået alle 29 badges. Dit personlige diplom er nu klar.</p><button class="primary" onclick="showDiploma()">🎓 Lav mit diplom</button>'}};
home();
