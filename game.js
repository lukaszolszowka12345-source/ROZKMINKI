const el = (id) => document.getElementById(id);

const drawBtn = el("drawBtn");
const copyBtn = el("copyBtn");
const otherBtn = el("otherBtn");
const backBtn = el("backBtn");
const resetBtn = el("resetBtn");
const mixToggle = el("mixToggle");

const chipsEl = el("chips");
const metaLine = el("metaLine");
const tagLine = el("tagLine");
const questionLine = el("questionLine");

const CATS = [
  {
    key: "relacje",
    label: "Relacje",
    themes: ["zaufanie","granice","bliskość","komunikacja","konflikt","wsparcie","szacunek","uczciwość","przepraszanie","wybaczanie","wdzięczność","wspólne cele","samotność w relacji","bycie wysłuchanym","krytyka","różnice","przywiązanie","wolność","odpowiedzialność","intymność","bezpieczeństwo","oczekiwania","potrzeby","kontrola","napięcie","lęk o utratę","zazdrość","cisza","naprawa relacji","ważne rozmowy"],
    stems: [
      "W obszarze „{T}”: co najbardziej cenisz, a co najczęściej pomijasz?",
      "W obszarze „{T}”: co byłoby dla Ciebie „zdrową normą”, a co już sygnałem alarmowym?",
      "W obszarze „{T}”: jak zwykle reagujesz pod presją i co to robi drugiej osobie?",
      "W obszarze „{T}”: czego boisz się nazwać wprost i dlaczego?",
      "W obszarze „{T}”: jaka Twoja potrzeba stoi za tym, jak się zachowujesz?",
      "W obszarze „{T}”: co chciał(a)byś umieć robić inaczej od jutra?",
      "W obszarze „{T}”: jaka była Twoja najważniejsza lekcja z ostatniego trudnego momentu?",
      "W obszarze „{T}”: jak rozpoznajesz, że jesteś naprawdę usłyszany(a)?",
      "W obszarze „{T}”: gdzie kończy się kompromis, a zaczyna rezygnacja z siebie?",
      "W obszarze „{T}”: co wnosisz do relacji, a co nieświadomie z niej zabierasz?",
      "W obszarze „{T}”: jaka mała rzecz buduje u Ciebie więź najbardziej?",
      "W obszarze „{T}”: co powtarza się w Twoich relacjach jak schemat?"
    ]
  },
  {
    key: "emocje",
    label: "Emocje",
    themes: ["złość","smutek","lęk","wstyd","poczucie winy","radość","spokój","frustracja","bezradność","nadzieja","ulga","napięcie w ciele","przeciążenie","rozczarowanie","żal","wdzięczność","samokrytyka","poczucie zagrożenia","pustka","niepewność","odrętwienie","wzruszenie","zachwyt","poczucie odrzucenia","poczucie niesprawiedliwości","zazdrość","zniecierpliwienie","wstydzenie się","niepokój","przytłoczenie"],
    stems: [
      "Gdy pojawia się „{T}”, co pierwsze dzieje się w Twoim ciele?",
      "„{T}” — czego ta emocja próbuje Cię nauczyć albo przed czym ostrzega?",
      "Jak zwykle próbujesz „zarządzać” „{T}”: tłumisz, wybuchasz, uciekasz, a może prosisz o wsparcie?",
      "W jakich sytuacjach najczęściej uruchamia się u Ciebie „{T}” i co to mówi o Twoich granicach?",
      "Co w Twoim życiu ostatnio domaga się uwagi poprzez „{T}”?",
      "Jak wyglądałaby Twoja dojrzała reakcja na „{T}”, nawet jeśli jest niewygodna?",
      "Kiedy ostatnio uciekłeś/uciekłaś od „{T}” i jaką cenę za to zapłaciłeś/aś?",
      "Co byłoby dla Ciebie troską o siebie w chwili „{T}” — konkretnie?",
      "Jak „{T}” wpływa na Twoje decyzje: zawęża je czy poszerza?",
      "Jak chciał(a)byś, żeby inni reagowali, gdy w Tobie jest „{T}”?",
      "Jak Ty reagujesz na „{T}” u innych ludzi?",
      "Jak rozpoznajesz różnicę między „{T}” jako sygnałem a „{T}” jako nawykiem?"
    ]
  },
  {
    key: "ja",
    label: "Ja (self)",
    themes: ["wartości","tożsamość","poczucie własnej wartości","wewnętrzny krytyk","samoakceptacja","potrzeby","granice","odwaga","autentyczność","sprawczość","kontrola","zaufanie do siebie","wrażliwość","duma","wstyd","porównywanie się","perfekcjonizm","odkładanie na później","samowspółczucie","przekonania o sobie","przekonania o świecie","odpowiedzialność","regeneracja","zdrowie","energia","czas","sens","wdzięczność","cele","poczucie bezpieczeństwa","wewnętrzny spokój"],
    stems: [
      "W obszarze „{T}”: co mówisz sobie w głowie, gdy nikt nie słyszy?",
      "W obszarze „{T}”: co w Tobie jest prawdziwe, ale rzadko to pokazujesz?",
      "W obszarze „{T}”: jaka historia o Tobie rządzi Twoimi decyzjami?",
      "W obszarze „{T}”: co jest Twoją siłą, a co cieniem tej samej cechy?",
      "W obszarze „{T}”: czego najbardziej potrzebujesz, ale wstydzisz się o to prosić?",
      "W obszarze „{T}”: w jakich sytuacjach zdradzasz siebie, nawet drobno?",
      "W obszarze „{T}”: co byś zrobił(a), gdybyś był(a) życzliwy(a) dla siebie przez tydzień?",
      "W obszarze „{T}”: jakie Twoje „muszę/powinienem” warto dziś zakwestionować?",
      "W obszarze „{T}”: kiedy czujesz spójność ze sobą, a kiedy rozjazd?",
      "W obszarze „{T}”: co próbujesz udowodnić i komu?",
      "W obszarze „{T}”: jak wygląda Twoja definicja „wystarczająco dobrze”?",
      "W obszarze „{T}”: jaka jedna rzecz przyniosłaby Ci dziś ulgę?"
    ]
  },
  {
    key: "rozwoj",
    label: "Rozwój",
    themes: ["nawyki","dyscyplina","motywacja","odwaga do zmian","uczenie się","porażki","odporność psychiczna","konsekwencja","cele","priorytety","prokrastynacja","planowanie","skupienie","energia","zdrowie","relacja z pracą","pieniądze","czas","odpuszczanie","cierpliwość","asertywność","komfort vs wzrost","sens","rutyna","chaos","nauka na błędach","odpowiedzialność","zmiana otoczenia","ambicja","samorozwój"],
    stems: [
      "W obszarze „{T}”: co wiesz, że działa, ale rzadko to robisz?",
      "W obszarze „{T}”: jaki mały krok (5 minut) byłby realny już dziś?",
      "W obszarze „{T}”: co Cię najbardziej sabotuje: strach, wygoda czy chaos?",
      "W obszarze „{T}”: jaką cenę płacisz za to, że zostawiasz rzeczy „na potem”?",
      "W obszarze „{T}”: co jest Twoją prawdziwą intencją — i czy ona jest Twoja, czy cudza?",
      "W obszarze „{T}”: jaki nawyk dałby największy efekt domina w Twoim życiu?",
      "W obszarze „{T}”: czego musisz się oduczyć, żeby pójść dalej?",
      "W obszarze „{T}”: co powtarza się w Twoich porażkach i jaka jest w tym lekcja?",
      "W obszarze „{T}”: gdzie potrzebujesz więcej odwagi, a gdzie więcej cierpliwości?",
      "W obszarze „{T}”: jaki standard chcesz podnieść, a jaki obniżyć?",
      "W obszarze „{T}”: jaka jedna decyzja w tym tygodniu najbardziej przybliży Cię do celu?",
      "W obszarze „{T}”: co byś zrobił(a), gdybyś nie musiał(a) nikomu nic udowadniać?"
    ]
  },
  {
    key: "rodzina",
    label: "Rodzina",
    themes: ["komunikacja w domu","role rodzinne","granice z bliskimi","tradycje","konflikty","wsparcie","bezpieczeństwo","dzieciństwo","wzorce z domu","autorytety","bliskość","dystans","zaufanie","krytyka","porównywanie","emocje w rodzinie","tematy tabu","lojalność","obowiązek","opieka","wdzięczność","żal","przebaczenie","finanse w rodzinie","czas razem","obecność","szacunek","oczekiwania","nieobecność","dziedziczenie zachowań"],
    stems: [
      "W obszarze „{T}”: co w Twojej rodzinie jest mówione wprost, a co „czyta się między wierszami”?",
      "W obszarze „{T}”: jaka rzecz z dzieciństwa nadal wpływa na Twoje reakcje dziś?",
      "W obszarze „{T}”: jaki wzorzec chcesz zatrzymać, a jaki przerwać?",
      "W obszarze „{T}”: co dla Ciebie znaczy „zdrowa bliskość” w rodzinie?",
      "W obszarze „{T}”: w jakiej roli najczęściej lądujesz i dlaczego?",
      "W obszarze „{T}”: o co naprawdę toczy się spór, kiedy kłócicie się o drobiazgi?",
      "W obszarze „{T}”: co byłoby jedną małą zmianą, która poprawiłaby atmosferę w domu?",
      "W obszarze „{T}”: czego potrzebujesz od rodziny, ale boisz się to zakomunikować?",
      "W obszarze „{T}”: jak wyrażacie miłość — i czy to się zgadza między Wami?",
      "W obszarze „{T}”: jaki temat odkładacie od dawna i co by się stało, gdyby go podjąć łagodnie?",
      "W obszarze „{T}”: co Cię najbardziej porusza w relacji z najbliższymi — i z jakiego powodu?",
      "W obszarze „{T}”: co chciał(a)byś, żeby Twoja rodzina o Tobie rozumiała lepiej?"
    ]
  }
];

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildBank(cat){
  const s = new Set();
  for (const t of cat.themes){
    for (const stem of cat.stems){
      s.add(stem.replaceAll("{T}", t));
    }
  }
  return shuffle(Array.from(s)).slice(0, 100); // 100 pytań na kategorię
}

const state = {
  enabled: new Set(CATS.map(c => c.key)),
  banks: {},
  bags: {},
  history: [],
  current: null,
  otherLeft: 2
};

function refillBag(catKey){
  const n = state.banks[catKey].length;
  state.bags[catKey] = shuffle(Array.from({length:n}, (_,i)=>i));
}

function pickRandomEnabledCategory(){
  const arr = Array.from(state.enabled);
  if (arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function showIntro(){
  tagLine.textContent = "Kliknij „Losuj”, żeby zacząć.";
  questionLine.textContent = "Wylosuj pytanie i potraktuj je jak spokojną rozmowę — bez pośpiechu.";
  otherBtn.textContent = `Inne pytanie (2)`;
  state.otherLeft = 2;
}

function renderCurrent(){
  if (!state.current) { showIntro(); return; }
  const cat = CATS.find(c => c.key === state.current.catKey);
  tagLine.textContent = `Kategoria: ${cat?.label || state.current.catKey}`;
  questionLine.textContent = state.current.text;
}

function updateMeta(){
  const enabledLabels = CATS.filter(c => state.enabled.has(c.key)).map(c => c.label);
  metaLine.textContent = `Zaznaczone: ${enabledLabels.length ? enabledLabels.join(", ") : "—"} • Historia: ${state.history.length} pyt.`;
}

function renderChips(){
  chipsEl.innerHTML = "";
  for (const cat of CATS){
    const b = document.createElement("button");
    b.className = "chip active";
    b.textContent = cat.label;
    b.onclick = () => {
      if (state.enabled.has(cat.key)) state.enabled.delete(cat.key);
      else state.enabled.add(cat.key);
      b.classList.toggle("active", state.enabled.has(cat.key));
      updateMeta();
    };
    chipsEl.appendChild(b);
  }
}

function drawQuestion(){
  const mix = mixToggle.checked;

  let catKey = mix ? pickRandomEnabledCategory() : (Array.from(state.enabled)[0] || "relacje");
  if (!catKey) {
    tagLine.textContent = "Zaznacz przynajmniej jedną kategorię.";
    questionLine.textContent = "—";
    return;
  }

  if (!state.bags[catKey] || state.bags[catKey].length === 0) refillBag(catKey);

  const idx = state.bags[catKey].pop();
  const text = state.banks[catKey][idx];

  state.current = { catKey, idx, text };
  state.history.push(state.current);

  state.otherLeft = 2; // reset limitu przy każdym nowym losowaniu
  otherBtn.textContent = `Inne pytanie (${state.otherLeft})`;

  renderCurrent();
  updateMeta();
}

// „Inne pytanie” = zmienia pytanie, ale max 2 razy na jedno wylosowane
function otherQuestion(){
  if (!state.current) return;
  if (state.otherLeft <= 0) return;

  state.otherLeft -= 1;
  otherBtn.textContent = `Inne pytanie (${state.otherLeft})`;

  // losujemy nowe pytanie (jak normalnie), ale NIE resetujemy licznika już
  const mix = mixToggle.checked;
  let catKey = mix ? pickRandomEnabledCategory() : (Array.from(state.enabled)[0] || state.current.catKey);
  if (!catKey) return;

  if (!state.bags[catKey] || state.bags[catKey].length === 0) refillBag(catKey);

  const idx = state.bags[catKey].pop();
  const text = state.banks[catKey][idx];

  state.current = { catKey, idx, text };
  state.history.push(state.current);

  renderCurrent();
  updateMeta();
}

function goBack(){
  if (state.history.length <= 1) {
    state.history = [];
    state.current = null;
    renderCurrent();
    updateMeta();
    return;
  }
  state.history.pop();
  state.current = state.history[state.history.length - 1];
  // cofnięcie nie resetuje limitu, ale też nie jest „zmianą”
  renderCurrent();
  updateMeta();
}

function resetAll(){
  state.history = [];
  state.current = null;
  for (const cat of CATS) refillBag(cat.key);
  showIntro();
  updateMeta();
}

function copyCurrent(){
  if (!state.current) return;
  const cat = CATS.find(c => c.key === state.current.catKey);
  const payload = `[${cat?.label || state.current.catKey}] ${state.current.text}`;

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(payload).then(() => {
      copyBtn.textContent = "Skopiowano ✓";
      setTimeout(() => (copyBtn.textContent = "Kopiuj"), 900);
    }).catch(() => fallbackCopy(payload));
  } else fallbackCopy(payload);
}

function fallbackCopy(text){
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch {}
  document.body.removeChild(ta);
  copyBtn.textContent = "Skopiowano ✓";
  setTimeout(() => (copyBtn.textContent = "Kopiuj"), 900);
}

function init(){
  for (const cat of CATS){
    state.banks[cat.key] = buildBank(cat);
    refillBag(cat.key);
  }
  renderChips();
  updateMeta();
  showIntro();
}

// Podpięcie przycisków
drawBtn.addEventListener("click", drawQuestion);
otherBtn.addEventListener("click", otherQuestion);
backBtn.addEventListener("click", goBack);
resetBtn.addEventListener("click", resetAll);
copyBtn.addEventListener("click", copyCurrent);

init();
