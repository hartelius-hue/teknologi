'use strict';
/* SkoleGPT Lab · motivationsbadges. Tildeles på faktisk gemt progression. */
const BADGE_ICON_PATHS={
spark:'<path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m20 17 .7 2.3L23 20l-2.3.7L20 23l-.7-2.3L17 20l2.3-.7L20 17Z"/>',
flame:'<path d="M12 22c4.5 0 7.5-3 7.5-7.5 0-3.5-2-6.5-5.5-10.5.5 3-1 5-3 6.5C10.5 8 10 5.5 10 4 6.5 7.5 4.5 11 4.5 14.5 4.5 19 7.5 22 12 22Z"/><path d="M12 22c2 0 3.5-1.5 3.5-3.5 0-1.8-1-3.3-2.7-5-1 2.4-3.5 3.8-3.5 5C9.3 20.6 10.4 22 12 22Z"/>',
star:'<path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3 6.2 20.4l1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z"/>',
shield:'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
crown:'<path d="M3 8 7.5 12 12 4l4.5 8L21 8l-2 11H5L3 8Z"/><path d="M5 22h14"/>',
brain:'<path d="M12 7c-1-2-4-3-6-1-2 0-3 2-3 4 0 1 .4 2 1.2 2.7C3 16 6 18 8 17c1.3 2 3 2.8 4 2V7ZM12 7c1-2 4-3 6-1 2 0 3 2 3 4 0 1-.4 2-1.2 2.7C21 16 18 18 16 17c-1.3 2-3 2.8-4 2V7Z"/><path d="M9 9v4m6-4v4"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
prompt:'<path d="M4 4h16v12H9l-5 4V4Z"/><path d="M8 9h8m-8 3h5"/>',
headphones:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="12" width="4" height="8" rx="2"/><rect x="17" y="12" width="4" height="8" rx="2"/>',
wrench:'<path d="M14 7a6 6 0 0 0-7 7l-4.5 4.5a2 2 0 0 0 3 3L10 17a6 6 0 0 0 7-7l-4 3-3-3 4-3Z"/>',
search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M8.5 10.5h4"/>',
swords:'<path d="m3 3 7 7m4 4 7 7M3 3l2 6 4-4-6-2Zm18 18-2-6-4 4 6 2Z"/><path d="m21 3-7 7m-4 4-7 7m18-18-2 6-4-4 6-2ZM3 21l2-6 4 4-6 2Z"/>',
mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 11v2a7 7 0 0 0 14 0v-2m-7 9v2m-4 0h8"/>',
bot:'<rect x="3" y="7" width="18" height="14" rx="4"/><path d="M12 7V3m-2 0h4M7 12h2m6 0h2m-10 5c3 2 7 2 10 0"/>',
gear:'<path d="m9.5 2 5 0 .8 2.8 2.4 1 2.6-1.4 2.4 4.2-2.3 2 .1 2.8 2.2 2-2.4 4.2-2.6-1.4-2.4 1L14.5 22h-5l-.8-2.8-2.4-1-2.6 1.4-2.4-4.2 2.3-2-.1-2.8-2.2-2 2.4-4.2 2.6 1.4 2.4-1L9.5 2Z"/><circle cx="12" cy="12" r="3"/>',
scale:'<path d="M12 3v18M4 7h16M4 7l-3 7h6L4 7Zm16 0-3 7h6l-3-7ZM8 21h8"/>',
lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 4v3"/>',
flask:'<path d="M9 2h6m-5 0v7L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3L14 9V2M7 16h10"/>',
globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c-6 5-6 15 0 20m0-20c6 5 6 15 0 20M4 7h16M4 17h16"/>',
trophy:'<path d="M7 3h10v8a5 5 0 0 1-10 0V3ZM7 5H3c0 5 1 8 5 8M17 5h4c0 5-1 8-5 8M12 16v4m-5 2h10"/>',
lightbulb:'<path d="M9 18h6m-5 3h4M9 15c-2-1-4-4-4-7a7 7 0 0 1 14 0c0 3-2 6-4 7l-1 3h-4l-1-3Z"/>',
code:'<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"/>',
terminal:'<rect x="2" y="3" width="20" height="18" rx="3"/><path d="m6 9 4 3-4 3m7 1h5"/>',
monitor:'<rect x="2" y="3" width="20" height="15" rx="2"/><path d="M8 22h8m-4-4v4m-7-12h14"/>',
rocket:'<path d="M8 16c-1-5 3-11 11-13 2 8-4 12-9 13l-2 0Zm0-6-4 1-1 5 5-2m6 0 0 5-5 2 1-5M7 17l-2 4 4-2"/><circle cx="15" cy="8" r="1.5"/>'
};
const BADGE_MISSIONS=M.map((mission,i)=>({id:'mission-'+i,title:mission[0],note:'Gennemfør alle 3 udfordringer i missionen',icon:['brain','compass','prompt','headphones','wrench','search','swords','mic','bot','gear','scale','lock','flask','globe','trophy','lightbulb','code','terminal','monitor','rocket'][i],tier:Math.floor(i/5),kind:'mission',earned:()=>[0,1,2].every(j=>done(i,j)),value:()=>[0,1,2].filter(j=>done(i,j)).length+'/3'}));
const BADGE_LEVELS=[...levels.map((l,i)=>({id:'level-'+i,title:['AI-pilot','Promptmester','Kritisk ekspert','Kodekreatør'][i],note:'Bestå niveauprøven i '+l[0],icon:['brain','bot','shield','rocket'][i],tier:i,kind:'level',earned:()=>!!saved.exams?.[i]?.passed,value:()=>saved.exams?.[i]?.passed?'Bestået':'0/1'}))];
const BADGE_STEPS=[
{id:'start',title:'Første gnist',note:'Gennemfør 1 udfordring',icon:'spark',tier:0,kind:'milestone',target:1},
{id:'three',title:'Godt i gang',note:'Gennemfør 3 udfordringer',icon:'flame',tier:0,kind:'milestone',target:3},
{id:'ten',title:'Nysgerrig forsker',note:'Gennemfør 10 udfordringer',icon:'star',tier:1,kind:'milestone',target:10},
{id:'thirty',title:'AI-eventyrer',note:'Gennemfør 30 udfordringer',icon:'shield',tier:2,kind:'milestone',target:30},
{id:'sixty',title:'AI-legende',note:'Gennemfør alle 60 udfordringer',icon:'crown',tier:3,kind:'milestone',target:60}
].map(x=>({...x,earned:()=>count()>=x.target,value:()=>Math.min(count(),x.target)+'/'+x.target}));
const BADGE_ALL=[...BADGE_STEPS,...BADGE_LEVELS,...BADGE_MISSIONS];
const badgeEarned=b=>b.earned();
const badgeCurrent=()=>BADGE_ALL.filter(badgeEarned);
const badgeSymbol=name=>'<svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(BADGE_ICON_PATHS[name]||BADGE_ICON_PATHS.star)+'</svg>';
function badgeCard(b){
const win=badgeEarned(b),progress=b.value(),state=win?'Vundet':'Låst';
return '<article class="achievement '+(win?'achievement-earned':'achievement-locked')+' badge-tier-'+b.tier+'" aria-label="'+esc(b.title)+', '+state+', '+esc(b.note)+'">'+
'<div class="achievement-medal" aria-hidden="true"><div class="achievement-disc">'+badgeSymbol(b.icon)+'</div><span class="achievement-facet facet-one">✦</span><span class="achievement-facet facet-two">✧</span></div>'+
'<div class="achievement-title">'+esc(b.title)+'</div><div class="achievement-meta">'+esc(progress)+'</div>'+
'<div class="achievement-description">'+esc(win?'🏅 Opnået · '+b.note:b.note)+'</div>'+
'</article>';
}
function groupBadges(title,note,list){
const unlocked=list.filter(badgeEarned).length;
const ordered=list.filter(badgeEarned).concat(list.filter(b=>!badgeEarned(b)));
return '<section class="badge-category"><div class="badge-category-title"><div><h3>'+esc(title)+'</h3><p>'+esc(note)+'</p></div><span>'+unlocked+' / '+list.length+'</span></div><div class="achievement-grid">'+ordered.map(badgeCard).join('')+'</div></section>';
}
function renderBadgeWall(){
const wall=el('badge-wall');if(!wall)return;
const earned=badgeCurrent().length;
wall.innerHTML='<div class="badge-wall-head"><div><span class="badge-eyebrow">DINE PRÆSTATIONER</span><h2>Min badge-samling</h2><p>Medaljerne får farve, når du når et fagligt mål. Låste medaljer viser dit næste mål.</p></div><div class="badge-count"><span>'+earned+'</span><small>AF '+BADGE_ALL.length+' BADGES</small></div></div>'+
groupBadges('Milepæle','For hver nye udfordring du gennemfører',BADGE_STEPS)+
groupBadges('Niveaumestre','Opnås, når en niveauprøve er bestået',BADGE_LEVELS)+
groupBadges('Missionsmærker','Gennemfør alle tre sværhedsgrader i hver mission',BADGE_MISSIONS);
}
function renderBadgeProgress(){
const target=el('progress-body');if(!target)return;
const doneCount=count(),fully=M.filter((_,i)=>[0,1,2].every(j=>done(i,j))).length,tests=BADGE_LEVELS.filter(badgeEarned).length;
target.innerHTML='<div class="achievement-stats"><div><strong>'+doneCount+' / 60</strong><span>Udfordringer</span></div><div><strong>'+fully+' / 20</strong><span>Færdige missioner</span></div><div><strong>'+tests+' / 4</strong><span>Beståede niveauprøver</span></div></div>'+
'<div class="achievement-list-title"><h2>Mine missioner</h2><p>Hver færdig mission giver dig et missionsmærke.</p></div>'+
'<div class="achievement-mission-list">'+M.map((x,i)=>{const n=[0,1,2].filter(j=>done(i,j)).length;return '<div class="achievement-mission-item '+(n===3?'mission-finished':'')+'"><span class="achievement-mission-icon">'+(n===3?'✓':x[1])+'</span><div><strong>'+esc(x[0])+'</strong><small>'+esc(levels[Math.floor(i/5)][0])+'</small></div><span class="achievement-progress-pill">'+n+'/3</span></div>'}).join('')+'</div>';
}
const badgeOldProgress=progress;
progress=function(){
el('certificate-view').style.display='none';
badgeOldProgress();
renderBadgeProgress();
renderBadgeWall();
};
const badgeOldComplete=complete;
let badgeToastTimer=null;
complete=function(note){
const before=new Set(badgeCurrent().map(b=>b.id));
badgeOldComplete(note);
const gained=badgeCurrent().filter(b=>!before.has(b.id));
if(gained.length){const badge=gained[0],toast=el('badge-toast');if(toast){toast.innerHTML='<div class="badge-toast-icon">'+badgeSymbol(badge.icon)+'</div><div><strong>🏅 Nyt badge: '+esc(badge.title)+'</strong><span>'+esc(badge.note)+(gained.length>1?' · +'+(gained.length-1)+' mere':'')+'</span></div><button onclick="progress()">Se badges →</button>';toast.hidden=false;toast.classList.remove('badge-pop');void toast.offsetWidth;toast.classList.add('badge-pop');if(badgeToastTimer)clearTimeout(badgeToastTimer);badgeToastTimer=setTimeout(()=>{toast.hidden=true},5200);}}};
