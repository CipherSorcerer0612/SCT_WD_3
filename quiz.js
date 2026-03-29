const BANK = {
  Science: {
    color:'#2563eb', icon:'⚗️',
    qs:[
      { type:'single', text:'What is the chemical symbol for Gold?', options:['Go','Gd','Au','Ag'], answer:2, pts:10, exp:'Au comes from the Latin "Aurum".' },
      { type:'multi',  text:'Which of these are Noble Gases?', options:['Helium','Oxygen','Neon','Nitrogen','Argon'], answer:[0,2,4], pts:15, exp:'Noble gases — He, Ne, Ar — have complete outer electron shells.' },
      { type:'fitb',   text:'The speed of light in a vacuum is approximately _____ km/s.', answer:['300000','300,000'], pts:10, exp:'~299,792 km/s, commonly rounded to 300,000.' },
      { type:'single', text:'Which planet is known as the Red Planet?', options:['Venus','Mars','Jupiter','Saturn'], answer:1, pts:10, exp:'Mars looks red because of iron oxide (rust) on its surface.' },
      { type:'order',  text:'Order these planets from closest to farthest from the Sun:', items:['Earth','Mercury','Saturn','Venus'], answer:[1,3,0,2], pts:15, exp:'Mercury → Venus → Earth → Saturn.' },
      { type:'single', text:'What gas do plants absorb during photosynthesis?', options:['Oxygen','Nitrogen','Carbon Dioxide','Hydrogen'], answer:2, pts:10, exp:'Plants absorb CO₂ and release O₂ during photosynthesis.' },
      { type:'multi',  text:'Which of these are states of matter?', options:['Solid','Energy','Liquid','Wave','Gas'], answer:[0,2,4], pts:15, exp:'Solid, liquid and gas are the classic three states of matter.' },
    ]
  },
  Technology: {
    color:'#7c3aed', icon:'💻',
    qs:[
      { type:'single', text:'What does HTTP stand for?', options:['HyperText Transfer Protocol','HyperText Transmission Protocol','HighText Transfer Protocol','HyperType Transfer Protocol'], answer:0, pts:10, exp:'HTTP — HyperText Transfer Protocol — is the foundation of web communication.' },
      { type:'multi',  text:'Which of these are programming paradigms?', options:['Object-Oriented','Procedural','Functional','Sequential','Relational'], answer:[0,1,2], pts:15, exp:'OOP, Procedural and Functional are the three major programming paradigms.' },
      { type:'fitb',   text:'In CSS, the property used to change text color is _____.', answer:['color','colour'], pts:10, exp:'The CSS `color` property sets the foreground color of text.' },
      { type:'single', text:'What is Big O notation O(log n) called?', options:['Linear','Quadratic','Logarithmic','Constant'], answer:2, pts:10, exp:'O(log n) is logarithmic complexity — common in binary search.' },
      { type:'order',  text:'Order from smallest to largest storage unit:', items:['Megabyte','Bit','Gigabyte','Byte'], answer:[1,3,0,2], pts:15, exp:'Bit < Byte < Megabyte < Gigabyte.' },
      { type:'single', text:'Which language runs natively in the browser?', options:['Python','Java','JavaScript','Ruby'], answer:2, pts:10, exp:'JavaScript is the only language executed natively by web browsers.' },
      { type:'multi',  text:'Which are valid HTTP methods?', options:['GET','PUSH','POST','FETCH','DELETE'], answer:[0,2,4], pts:15, exp:'GET, POST and DELETE are standard HTTP methods.' },
    ]
  },
  Math: {
    color:'#059669', icon:'🔢',
    qs:[
      { type:'fitb',   text:'What is the value of π to 2 decimal places?', answer:['3.14'], pts:10, exp:'π ≈ 3.14159…, rounded to 3.14.' },
      { type:'single', text:'What is the square root of 144?', options:['11','12','13','14'], answer:1, pts:10, exp:'√144 = 12 since 12 × 12 = 144.' },
      { type:'multi',  text:'Which of the following are prime numbers?', options:['1','2','7','9','13'], answer:[1,2,4], pts:15, exp:'2, 7 and 13 are prime. 1 is not prime; 9 = 3×3.' },
      { type:'fitb',   text:'The sum of interior angles in a triangle is _____ degrees.', answer:['180'], pts:10, exp:'The interior angles of any triangle always sum to 180°.' },
      { type:'order',  text:'Order from smallest to largest value:', items:['½','¾','⅛','⅔'], answer:[2,0,3,1], pts:15, exp:'⅛ (0.125) < ½ (0.5) < ⅔ (0.667) < ¾ (0.75).' },
      { type:'single', text:'What is 7 × 8?', options:['54','56','58','64'], answer:1, pts:10, exp:'7 × 8 = 56.' },
      { type:'single', text:'How many sides does a hexagon have?', options:['5','6','7','8'], answer:1, pts:10, exp:'A hexagon has 6 sides.' },
    ]
  },
  History: {
    color:'#d97706', icon:'📜',
    qs:[
      { type:'single', text:'In which year did World War II end?', options:['1943','1944','1945','1946'], answer:2, pts:10, exp:'WWII ended in 1945 — V-E Day in May and V-J Day in September.' },
      { type:'multi',  text:'Which were ancient Wonders of the World?', options:['Great Wall of China','Colossus of Rhodes','Lighthouse of Alexandria','Eiffel Tower','Statue of Zeus'], answer:[1,2,4], pts:15, exp:'Colossus of Rhodes, Lighthouse of Alexandria and Statue of Zeus are among the seven ancient wonders.' },
      { type:'fitb',   text:'The first President of the United States was _____.', answer:['george washington','washington'], pts:10, exp:'George Washington served as the 1st US President from 1789 to 1797.' },
      { type:'single', text:'Which empire did Genghis Khan rule?', options:['Ottoman','Mongol','Roman','Byzantine'], answer:1, pts:10, exp:'Genghis Khan founded the Mongol Empire, the largest contiguous land empire in history.' },
      { type:'order',  text:'Order these events from earliest to most recent:', items:['Moon Landing','French Revolution','World War I','Fall of Rome'], answer:[3,1,2,0], pts:15, exp:'Fall of Rome (476) → French Revolution (1789) → WWI (1914) → Moon Landing (1969).' },
      { type:'single', text:'Who sealed the Magna Carta?', options:['King John','Henry VIII','Julius Caesar','Charlemagne'], answer:0, pts:10, exp:'King John sealed the Magna Carta in 1215 under pressure from barons.' },
      { type:'multi',  text:'Which countries were Allied Powers in WWII?', options:['USA','Germany','UK','Japan','USSR'], answer:[0,2,4], pts:15, exp:'The main Allied Powers were the USA, UK and USSR.' },
    ]
  },
  English: {
    color:'#db2777', icon:'📖',
    qs:[
      { type:'single', text:'What is the plural of "phenomenon"?', options:['Phenomenons','Phenomena','Phenomenas','Phenomenes'], answer:1, pts:10, exp:'"Phenomena" is the correct Greek-origin plural.' },
      { type:'multi',  text:'Which of these are types of figurative language?', options:['Simile','Syntax','Metaphor','Grammar','Hyperbole'], answer:[0,2,4], pts:15, exp:'Simile, metaphor and hyperbole are figures of speech.' },
      { type:'fitb',   text:'The literary term for the turning point of a story is the _____.', answer:['climax'], pts:10, exp:'The climax is the peak moment of tension in a narrative.' },
      { type:'single', text:'Which sentence is grammatically correct?', options:["She don't know.","She doesn't knows.","She doesn't know.","She do not knows."], answer:2, pts:10, exp:'"She doesn\'t know" correctly uses the third-person singular negative.' },
      { type:'order',  text:'Order the story structure elements correctly:', items:['Resolution','Climax','Introduction','Rising Action'], answer:[2,3,1,0], pts:15, exp:'Introduction → Rising Action → Climax → Resolution.' },
      { type:'single', text:'What is an antonym?', options:['A word with the same meaning','A word with the opposite meaning','A word that sounds the same','A descriptive word'], answer:1, pts:10, exp:'An antonym is a word with the opposite meaning, e.g. hot/cold.' },
      { type:'multi',  text:'Which are vowels in the English alphabet?', options:['A','B','E','I','O'], answer:[0,2,3,4], pts:10, exp:'A, E, I, O (and U) are the standard vowels.' },
    ]
  },
  Geography: {
    color:'#0891b2', icon:'🌍',
    qs:[
      { type:'single', text:'What is the capital city of Australia?', options:['Sydney','Melbourne','Canberra','Brisbane'], answer:2, pts:10, exp:'Canberra was chosen as a compromise between Sydney and Melbourne.' },
      { type:'multi',  text:'Which of these are continents?', options:['Africa','Atlantic','Europe','Pacific','Antarctica'], answer:[0,2,4], pts:15, exp:'Africa, Europe and Antarctica are continents. Atlantic and Pacific are oceans.' },
      { type:'fitb',   text:'The longest river in the world is the _____.', answer:['nile','nile river'], pts:10, exp:'The Nile in Africa (~6,650 km) is generally considered the longest river.' },
      { type:'single', text:'Which country has the largest land area?', options:['China','Canada','USA','Russia'], answer:3, pts:10, exp:'Russia is the largest country by area at ~17.1 million km².' },
      { type:'order',  text:'Order these countries by population, largest first:', items:['Brazil','China','USA','India'], answer:[1,3,2,0], pts:15, exp:'China > India > USA > Brazil by population.' },
      { type:'single', text:'Mount Everest is located in which mountain range?', options:['Alps','Rockies','Andes','Himalayas'], answer:3, pts:10, exp:'Mount Everest is in the Himalayas on the Nepal–Tibet border.' },
      { type:'multi',  text:'Which of these are landlocked countries?', options:['Switzerland','France','Mongolia','Germany','Nepal'], answer:[0,2,4], pts:15, exp:'Switzerland, Mongolia and Nepal have no coastline.' },
    ]
  }
};

// ══════════════════════════════════════
// ENGINE
// ══════════════════════════════════════
const Engine = {
  questions:[], current:0, score:0, streak:0, bestStreak:0, answers:[], answered:false,

  init() {
    const cats = Object.keys(BANK);
    const picked = [];
    // 3 from first 3 cats, 2 from last 3 = 15 total
    cats.forEach((cat, i) => {
      const n = i < 3 ? 3 : 2;
      const pool = [...BANK[cat].qs].sort(()=>Math.random()-.5);
      pool.slice(0,n).forEach(q => picked.push({...q, category:cat}));
    });
    this.questions = picked.sort(()=>Math.random()-.5);
    this.current = 0; this.score = 0; this.streak = 0;
    this.bestStreak = 0; this.answers = []; this.answered = false;
  },

  q()     { return this.questions[this.current]; },
  total() { return this.questions.length; },
  done()  { return this.current >= this.total(); },

  validate(val) {
    const q = this.q();
    if (q.type === 'single') return val === q.answer;
    if (q.type === 'multi')  {
      const s=[...val].sort((a,b)=>a-b), a=[...q.answer].sort((a,b)=>a-b);
      return s.length===a.length && s.every((v,i)=>v===a[i]);
    }
    if (q.type === 'fitb')  return q.answer.some(a=>a.toLowerCase()===val.trim().toLowerCase());
    if (q.type === 'order') return JSON.stringify(val)===JSON.stringify(q.answer);
  },

  submit(val) {
    const ok = this.validate(val);
    if (ok) { this.streak++; this.bestStreak=Math.max(this.bestStreak,this.streak); this.score+=this.q().pts; }
    else this.streak=0;
    this.answers.push({q:this.q(), val, correct:ok, skipped:false});
    this.answered=true;
    return ok;
  },

  skip() {
    this.streak=0;
    this.answers.push({q:this.q(), val:null, correct:false, skipped:true});
    this.answered=true;
  },

  next() { this.current++; this.answered=false; },

  catStats() {
    const m={};
    this.answers.forEach(a=>{
      const c=a.q.category;
      if(!m[c]) m[c]={correct:0,total:0};
      m[c].total++;
      if(a.correct) m[c].correct++;
    });
    return m;
  }
};

// ══════════════════════════════════════
// RENDERERS
// ══════════════════════════════════════
const R = {
  single:{
    hint:null,
    render(q,el){
      let sel=null;
      const wrap=document.createElement('div'); wrap.className='options';
      const keys=['A','B','C','D','E'];
      q.options.forEach((opt,i)=>{
        const btn=document.createElement('button'); btn.className='opt';
        btn.innerHTML=`<span class="opt-key">${keys[i]}</span><span class="opt-text">${opt}</span><span class="opt-check"></span>`;
        btn.onclick=()=>{
          wrap.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected'));
          btn.classList.add('selected'); sel=i; UI.setCheckable(true);
        };
        wrap.appendChild(btn);
      });
      el.appendChild(wrap);
      return {
        get:()=>sel,
        reveal(){
          wrap.querySelectorAll('.opt').forEach((o,i)=>{
            o.classList.add('disabled');
            const ck=o.querySelector('.opt-check');
            if(i===q.answer){o.classList.add('correct');ck.textContent='✓';}
            else if(i===sel&&i!==q.answer){o.classList.add('wrong');ck.textContent='✗';}
          });
        }
      };
    }
  },

  multi:{
    hint:'Select all that apply',
    render(q,el){
      let sel=new Set();
      const wrap=document.createElement('div'); wrap.className='options';
      const keys=['A','B','C','D','E'];
      q.options.forEach((opt,i)=>{
        const btn=document.createElement('button'); btn.className='opt';
        btn.innerHTML=`<span class="opt-key">${keys[i]}</span><span class="opt-text">${opt}</span><span class="opt-check"></span>`;
        btn.onclick=()=>{
          sel.has(i)?sel.delete(i):sel.add(i);
          btn.classList.toggle('selected',sel.has(i));
          UI.setCheckable(sel.size>0);
        };
        wrap.appendChild(btn);
      });
      el.appendChild(wrap);
      return {
        get:()=>[...sel].sort((a,b)=>a-b),
        reveal(){
          wrap.querySelectorAll('.opt').forEach((o,i)=>{
            o.classList.add('disabled');
            const ck=o.querySelector('.opt-check');
            const isAns=q.answer.includes(i), wasSel=sel.has(i);
            if(isAns&&wasSel){o.classList.add('correct');ck.textContent='✓';}
            else if(!isAns&&wasSel){o.classList.add('wrong');ck.textContent='✗';}
            else if(isAns&&!wasSel){o.classList.add('reveal');ck.textContent='↑';}
          });
        }
      };
    }
  },

  fitb:{
    hint:'Type your answer exactly',
    render(q,el){
      const inp=document.createElement('input'); inp.className='fitb-field';
      inp.type='text'; inp.placeholder='Your answer…'; inp.autocomplete='off';
      inp.oninput=()=>UI.setCheckable(inp.value.trim().length>0);
      inp.onkeydown=e=>{if(e.key==='Enter'&&inp.value.trim())handleCheck();};
      el.appendChild(inp);
      setTimeout(()=>inp.focus(),80);
      return {
        get:()=>inp.value,
        reveal(ok){ inp.disabled=true; inp.classList.add(ok?'correct':'wrong'); }
      };
    }
  },

  order:{
    hint:'Drag items into the correct order',
    render(q,el){
      let order=q.items.map((_,i)=>i).sort(()=>Math.random()-.5);
      const list=document.createElement('div'); list.className='order-list';
      const build=()=>{
        list.innerHTML='';
        order.forEach((origIdx,pos)=>{
          const row=document.createElement('div'); row.className='order-item';
          row.draggable=true; row.dataset.pos=pos;
          row.innerHTML=`<span class="drag-grip">⠿</span><span class="order-pos">${pos+1}</span><span style="flex:1">${q.items[origIdx]}</span>`;
          row.ondragstart=e=>{e.dataTransfer.setData('text/plain',String(pos));row.classList.add('dragging');};
          row.ondragend=()=>row.classList.remove('dragging');
          row.ondragover=e=>{e.preventDefault();row.classList.add('over');};
          row.ondragleave=()=>row.classList.remove('over');
          row.ondrop=e=>{
            e.preventDefault();row.classList.remove('over');
            const from=+e.dataTransfer.getData('text/plain'),to=pos;
            if(from!==to){[order[from],order[to]]=[order[to],order[from]];build();}
          };
          list.appendChild(row);
        });
        UI.setCheckable(true);
      };
      build(); el.appendChild(list);
      return {
        get:()=>[...order],
        reveal(){
          list.querySelectorAll('.order-item').forEach((row,pos)=>{
            row.draggable=false;
            row.classList.add(order[pos]===q.answer[pos]?'correct':'wrong');
          });
        }
      };
    }
  }
};

// ══════════════════════════════════════
// UI
// ══════════════════════════════════════
const UI = {
  renderer:null, timerId:null, TIME:30,

  show(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  },

  setCheckable(on){ document.getElementById('check-btn').disabled=!on; },

  renderIntro(){
    const el=document.getElementById('subject-list');
    el.innerHTML=Object.entries(BANK).map(([name,data])=>
      `<span class="sub-chip" style="color:${data.color};background:${data.color}14;border-color:${data.color}30">${data.icon} ${name}</span>`
    ).join('');
  },

  renderQ(q,idx,total,score){
    document.getElementById('q-num').textContent=`${idx+1} / ${total}`;
    document.getElementById('prog-fill').style.width=`${(idx/total)*100}%`;
    document.getElementById('score-tag').textContent=`${score} pts`;
    document.getElementById('cat-tag').textContent=`${BANK[q.category].icon} ${q.category}`;
    document.getElementById('cat-tag').style.color=BANK[q.category].color;
    document.getElementById('q-text').textContent=q.text;

    const hEl=document.getElementById('q-hint');
    const hint=R[q.type].hint;
    if(hint){ document.getElementById('q-hint-txt').textContent=hint; hEl.style.display='flex'; }
    else hEl.style.display='none';

    const area=document.getElementById('answer-area');
    area.innerHTML='';
    this.renderer=R[q.type].render(q,area);

    document.getElementById('feedback').className='feedback';
    document.getElementById('skip-btn').style.display='';
    document.getElementById('check-lbl').textContent='Check';
    this.setCheckable(false);
    this.startTimer();
  },

  startTimer(){
    clearInterval(this.timerId);
    let t=this.TIME;
    const el=document.getElementById('timer-val');
    el.textContent=t; el.classList.remove('low');
    this.timerId=setInterval(()=>{
      t--; el.textContent=t;
      if(t<=8)el.classList.add('low');
      if(t<=0){clearInterval(this.timerId);onTimeout();}
    },1000);
  },

  stopTimer(){ clearInterval(this.timerId); },

  showFeedback(type,head,body){
    const fb=document.getElementById('feedback');
    document.getElementById('fb-ico').textContent={ok:'✓',err:'✗',timeout:'⏱'}[type];
    document.getElementById('fb-head').textContent=head;
    document.getElementById('fb-body').textContent=body;
    fb.className=`feedback show ${type}`;
  },

  lockActions(){
    document.getElementById('skip-btn').style.display='none';
    document.getElementById('check-lbl').textContent=Engine.done()?'See Results':'Next';
    this.setCheckable(true);
  },

  renderResults(){
    const total=Engine.total();
    const correct=Engine.answers.filter(a=>a.correct).length;
    const pct=Math.round(correct/total*100);
    const [[,label,emoji]]=[
      [90,'Outstanding','🏆'],[75,'Excellent','⭐'],[60,'Good','👍'],[45,'Average','📘'],[0,'Keep Going','💪']
    ].filter(([t])=>pct>=t);

    document.getElementById('res-big').textContent=`${Engine.score} pts`;
    document.getElementById('res-sub').textContent=`${emoji} ${label} — ${pct}% accuracy`;
    document.getElementById('st-correct').textContent=`${correct}/${total}`;
    document.getElementById('st-accuracy').textContent=`${pct}%`;
    document.getElementById('st-streak').textContent=`${Engine.bestStreak}`;

    // Category bars
    const stats=Engine.catStats();
    const barsEl=document.getElementById('cat-bars');
    barsEl.innerHTML='';
    Object.entries(stats)
      .sort(([,a],[,b])=>b.correct/b.total-a.correct/a.total)
      .forEach(([cat,s])=>{
        const p=Math.round(s.correct/s.total*100);
        const isWeak=p<50, isStrong=p>=80;
        const fillColor=isWeak?'var(--wrong)':isStrong?'var(--correct)':BANK[cat].color;
        const badge=isWeak?'<span class="badge badge-weak">Needs work</span>':isStrong?'<span class="badge badge-strong">Strong</span>':'';
        const row=document.createElement('div');
        row.className='cat-row';
        row.innerHTML=`
          <div class="cat-row-top">
            <div class="cat-name-lbl"><span>${BANK[cat].icon}</span><span>${cat}</span>${badge}</div>
            <span class="cat-score-lbl">${s.correct}/${s.total} · ${p}%</span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${p}%;background:${fillColor}"></div></div>`;
        barsEl.appendChild(row);
      });

    // Personalised feedback
    const weakCats=Object.entries(stats).filter(([,s])=>s.correct/s.total<.5).map(([c])=>c);
    const strongCats=Object.entries(stats).filter(([,s])=>s.correct/s.total>=.8).map(([c])=>c);
    const fbEl=document.getElementById('fb-cards');
    fbEl.innerHTML='';

    const cards=[];
    if(weakCats.length)
      cards.push({ico:'📌',title:`Focus on: ${weakCats.join(', ')}`,body:`You got fewer than half the questions right in ${weakCats.length>1?'these subjects':'this subject'}. Revisiting the fundamentals here will have the biggest impact on your score.`});
    if(strongCats.length)
      cards.push({ico:'⭐',title:`Strong in: ${strongCats.join(', ')}`,body:`Consistent accuracy here. Keep reinforcing these areas so they stay sharp.`});
    if(Engine.bestStreak>=4)
      cards.push({ico:'🔥',title:`${Engine.bestStreak}-question streak`,body:'Answering multiple questions in a row correctly reflects solid and consistent preparation.'});
    if(pct<50)
      cards.push({ico:'💡',title:'Tip: focus on one subject at a time',body:'Pick your weakest category and spend dedicated time on it. Progress in one area builds confidence across the board.'});
    else if(pct>=80)
      cards.push({ico:'🎯',title:'Nearly perfect',body:"You're in the top tier. Review the questions you missed — most high scorers lose points on just one or two concepts."});
    else
      cards.push({ico:'📈',title:'On the right track',body:'A solid, balanced result. Read through the explanations for any questions you got wrong — most mistakes trace back to a single concept.'});

    cards.forEach(c=>{
      const el=document.createElement('div'); el.className='fb-card';
      el.innerHTML=`<span class="fbc-ico">${c.ico}</span><div><div class="fbc-title">${c.title}</div><div class="fbc-body">${c.body}</div></div>`;
      fbEl.appendChild(el);
    });

    // Review
    const revEl=document.getElementById('review-list');
    revEl.innerHTML='';
    Engine.answers.forEach(a=>{
      const cls=a.skipped?'skip':a.correct?'ok':'err';
      const ico=a.skipped?'–':a.correct?'✓':'✗';
      const q=a.q;

      let userAns='Skipped';
      if(!a.skipped){
        if(q.type==='single') userAns=q.options[a.val]??'—';
        else if(q.type==='multi') userAns=(a.val||[]).map(i=>q.options[i]).join(', ')||'—';
        else if(q.type==='fitb') userAns=a.val||'—';
        else if(q.type==='order') userAns=(a.val||[]).map(i=>q.items[i]).join(' → ');
      }

      let correctHtml='';
      if(!a.correct&&!a.skipped){
        let ca='';
        if(q.type==='single') ca=q.options[q.answer];
        else if(q.type==='multi') ca=q.answer.map(i=>q.options[i]).join(', ');
        else if(q.type==='fitb') ca=q.answer[0];
        else if(q.type==='order') ca=q.answer.map(i=>q.items[i]).join(' → ');
        correctHtml=`<div class="rev-correct-ans">✓ ${ca}</div>`;
      }

      const el=document.createElement('div'); el.className=`rev-item ${cls}`;
      el.innerHTML=`
        <div class="rev-ico">${ico}</div>
        <div style="flex:1;min-width:0">
          <div class="rev-q">${q.text.length>75?q.text.slice(0,75)+'…':q.text}</div>
          <div class="rev-ans">Your answer: ${userAns}</div>
          ${correctHtml}
        </div>
        <div class="rev-pts">${a.correct?'+'+q.pts:'0'}</div>`;
      revEl.appendChild(el);
    });
  }
};

// ══════════════════════════════════════
// CONTROLLER
// ══════════════════════════════════════
function startQuiz(){
  Engine.init();
  UI.show('quiz-screen');
  UI.renderQ(Engine.q(),Engine.current,Engine.total(),Engine.score);
}

function handleCheck(){
  if(Engine.answered){
    UI.stopTimer(); Engine.next();
    if(Engine.done()){UI.renderResults();UI.show('result-screen');}
    else UI.renderQ(Engine.q(),Engine.current,Engine.total(),Engine.score);
    return;
  }
  const val=UI.renderer.get();
  if(val===null||val===undefined||val==='')return;
  UI.stopTimer();
  const ok=Engine.submit(val);
  UI.renderer.reveal(ok);
  UI.showFeedback(ok?'ok':'err', ok?`Correct  +${Engine.q().pts} pts`:'Incorrect', Engine.q().exp);
  UI.lockActions();
}

function doSkip(){
  UI.stopTimer(); Engine.skip();
  if(Engine.done()){UI.renderResults();UI.show('result-screen');}
  else{Engine.next();UI.renderQ(Engine.q(),Engine.current,Engine.total(),Engine.score);}
}

function onTimeout(){
  if(!Engine.answered){
    Engine.skip();
    const last=Engine.answers[Engine.answers.length-1];
    UI.showFeedback('timeout',"Time's up",last.q.exp||'');
    UI.lockActions(); Engine.answered=true;
  }
}

UI.renderIntro();
