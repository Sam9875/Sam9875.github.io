const CONFIG = {
  name: 'Samesun Singh',
  githubProfile: 'https://github.com/Sam9875',
  linkedin: 'https://www.linkedin.com/in/samesun-singh',
  researchgate: 'https://www.researchgate.net/profile/Samesun-Singh',
  email: 'samesun987@gmail.com',
  phone: '+39 347 665 7332'
};

const featured = [
  {id:'langgraph',n:'01',title:'AI Agent with LangGraph',stars:'41.1k',blurb:'Stateful multi-step agents as graphs: reason, tool, reflect, memory.',tags:['LangGraph','Agents','Python'],github:'https://github.com/langchain-ai/langgraph',stack:'LangGraph / LangChain / tools / checkpointer',arch:[['User goal','intent'],['Graph state','messages'],['Reason','LLM plan'],['Tool node','APIs'],['Reflect','retry/stop'],['Response','answer']]},
  {id:'rag',n:'02',title:'RAG from scratch',stars:'9.3k',blurb:'Chunk, embed, retrieve, rerank, then ground the LLM in citations.',tags:['RAG','Embeddings','LangChain'],github:'https://github.com/langchain-ai/rag-from-scratch',stack:'chunk / embed / index / rerank / generate',arch:[['Corpus','docs'],['Chunk+embed','metadata'],['Vector store','ANN'],['Retrieve','top-k'],['Rerank','cross-enc'],['Generate','+sources']]},
  {id:'promptfoo',n:'03',title:'LLM evaluations with Promptfoo',stars:'24.8k',blurb:'Prompts as code: fixtures, providers, assertions, CI scoreboard.',tags:['Evals','Promptfoo','QA'],github:'https://github.com/promptfoo/promptfoo',stack:'promptfoo / providers / rubric / CI',arch:[['Tests','inputs'],['Providers','models'],['Run','parallel'],['Assert','rubric'],['Scores','cost/lat'],['CI gate','block']]},
  {id:'unsloth',n:'04',title:'Fine-tune an LLM with LoRA',stars:'75.6k',blurb:'QLoRA on one GPU with Unsloth. Train adapters, merge, export GGUF.',tags:['LoRA','Unsloth','Fine-tune'],github:'https://github.com/unslothai/unsloth',stack:'Unsloth / PEFT / bitsandbytes / GGUF',arch:[['Base LLM','weights'],['4-bit load','memory'],['LoRA','adapters'],['Train','SFT/DPO'],['Merge','full'],['Export','GGUF']]},
  {id:'mcp',n:'05',title:'Build an MCP server',stars:'90.1k',blurb:'Tools, resources and prompts over MCP so any host can call your data.',tags:['MCP','Tools','Protocol'],github:'https://github.com/modelcontextprotocol/servers',stack:'MCP SDK / stdio SSE / tools / auth',arch:[['Host','Claude/Cursor'],['Client','schema'],['Server','process'],['Tools','JSON'],['Resources','files/DB'],['Systems','APIs']]},
  {id:'gemini',n:'06',title:'Multimodal app with Gemini',stars:'17.7k',blurb:'Text, image, audio and video with function calling.',tags:['Gemini','Multimodal','Apps'],github:'https://github.com/google-gemini/cookbook',stack:'Gemini API / parts / tools / UI',arch:[['Inputs','multi'],['App','session'],['Gemini','generate'],['Tools','calls'],['Filter','safety'],['Output','media']]},
  {id:'qdrant',n:'07',title:'Semantic search with vector DBs',stars:'34.4k',blurb:'Qdrant collections, payload filters, hybrid sparse+dense ANN.',tags:['Qdrant','ANN','Search'],github:'https://github.com/qdrant/qdrant',stack:'Qdrant / dense-sparse / filters',arch:[['Docs','ingest'],['Embed','vectors'],['Collection','HNSW'],['Query','embed'],['Search','ANN'],['Hits','UI/RAG']]},
  {id:'openhands',n:'08',title:'AI coding agent with OpenHands',stars:'86.2k',blurb:'Agent that writes, runs and fixes code in a sandbox.',tags:['OpenHands','Code agent','Sandbox'],github:'https://github.com/OpenHands/OpenHands',stack:'OpenHands / sandbox / LLM / git',arch:[['Task','issue'],['Plan','steps'],['Edit','files'],['Runtime','tests'],['Observe','logs'],['Ship','PR']]},
  {id:'mlops',n:'09',title:'End-to-end MLOps',stars:'49.4k',blurb:'Notebook to production: train, eval, register, serve, monitor.',tags:['MLOps','Registry','Serving'],github:'https://github.com/GokuMohandas/Made-With-ML',stack:'MLflow / registry / API / monitor',arch:[['Data','versioned'],['Train','tracking'],['Eval','slices'],['Registry','stage'],['Serve','API'],['Monitor','drift']]},
  {id:'reco',n:'10',title:'Recommendation system',stars:'21.9k',blurb:'Microsoft Recommenders: candidates, ranking, offline/online eval.',tags:['RecSys','Ranking','Microsoft'],github:'https://github.com/recommenders-team/recommenders',stack:'two-tower / LTR / metrics',arch:[['Events','user-item'],['Candidates','recall'],['Features','context'],['Ranker','LTR'],['Rules','diversity'],['Serve','top-N']]}
];

const own = [
  {id:'coldstart',title:'Cold-start recommender',org:'Thesis / Column news',blurb:'Recommender for new users and items in sparse interaction data.',tags:['RecSys','Cold start','Python'],github:'https://github.com/Sam9875/Two-Tower-thesis',stack:'two-tower / content / ranking metrics',arch:[['Users/items','sparse'],['Content','embeddings'],['Warm CF','where possible'],['Cold','priors'],['Hybrid','blend'],['Eval','nDCG']]},
  {id:'stellantis',title:'Vehicle breakdown risk',org:'Research student / Stellantis',blurb:'1M+ service logs, warranty claims and sensors. CatBoost, LightGBM, RF.',tags:['CatBoost','LightGBM','Pipelines'],github:null,stack:'pandas/Spark / GBDT / calibration',arch:[['Logs','sensors'],['Clean','units'],['Features','usage'],['Models','GBDT'],['Compare','PR-AUC'],['Score','ops']]},
  {id:'hospital',title:'Post-operative risk models',org:'LINKS Foundation and Molinette',blurb:'Complications and nosocomial infection risk for ENT oncology patients.',tags:['Healthcare ML','Risk','SHAP'],github:null,stack:'XGBoost / SHAP / temporal split',arch:[['EHR','cohort'],['Features','labs'],['Train','XGB'],['Explain','SHAP'],['Validate','time'],['Flags','clinic']]},
  {id:'ego4d',title:'Egocentric NLQ + VideoQA',org:'Politecnico di Torino',blurb:'VSLBase/VSLNet on Ego4D plus Video-LLaVA QA (BLEU/ROUGE).',tags:['Video','NLQ','Video-LLaVA'],github:'https://github.com/Sam9875/Egocentric_VIsion',stack:'Ego4D / Omnivore / EgoVLP / VSLNet',arch:[['Video','Ego4D'],['Encode','Omnivore'],['Query','NLQ'],['Span','VSLNet'],['QA','LLaVA'],['Metrics','IoU']]},
  {id:'age',title:'Age from speech',org:'Politecnico di Torino',blurb:'Regression from linguistic and acoustic features of spoken sentences.',tags:['Speech','Regression'],github:null,stack:'acoustic + linguistic / sklearn',arch:[['Audio','speech'],['Acoustic','prosody'],['Linguistic','lexicon'],['Models','regress'],['Select','MAE'],['Age','bands']]},
  {id:'os',title:'Microkernel vs monolithic OS',org:'Publication / Dec 2023',blurb:'OS architecture vs functional safety, reliability and fault isolation.',tags:['OS','Safety','Paper'],github:null,paper:'https://www.researchgate.net/profile/Samesun-Singh',stack:'fault models / isolation / latency',arch:[['Workloads','safety'],['Monolithic','shared'],['Microkernel','servers'],['Faults','crash'],['Props','isolation'],['Report','tradeoff']]},
  {id:'column-demo',title:'Column news demo',org:'Thesis product / Column news',blurb:'Demo client for the Column recommendation stack (v3 / v4).',tags:['RecSys','Product','JavaScript'],github:'https://github.com/Sam9875/Column-Demo-apk',stack:'two-tower / ranking API / demo UI',arch:[['Session','user'],['Candidates','MIND'],['Rank','v3/v4'],['App','feed'],['Feedback','clicks'],['Loop','eval']]},
  {id:'tenant-bias',title:'Tenant-bias LLM audit',org:'Research / Turin rental screening',blurb:'5 listings x 480 synthetic applicants. Owl-alpha and Qwen.',tags:['LLM eval','Fairness','Python'],github:'https://github.com/Sam9875/Tenant-bias-LLM',stack:'Owl-alpha / Qwen / slice metrics',arch:[['Listings','Turin'],['Profiles','480'],['LLM','screener'],['Scores','rank'],['Slices','gaps'],['Report','bias']]},
  {id:'mind',title:'MIND large two-tower',org:'Column / news recommendation',blurb:'Two-tower training on MIND Large for news ranking.',tags:['MIND','Two-tower','News'],github:'https://github.com/Sam9875/MIND-large-column',stack:'MIND Large / two-tower / retrieval',arch:[['MIND','news'],['Users','history'],['Towers','user/item'],['Train','contrastive'],['Retrieve','ANN'],['Rank','news']]}
];

function escapeXml(s) {
  return String(s).replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
}

function svgArch(steps) {
  var w = 820, h = 210, n = steps.length, boxW = 112, gap = (w - n * boxW) / (n + 1), y = 70;
  var boxes = '', arrows = '', i, x, title, sub;
  for (i = 0; i < n; i++) {
    title = steps[i][0];
    sub = steps[i][1];
    x = gap + i * (boxW + gap);
    boxes += '<rect class="node' + (i === 0 || i === n - 1 ? ' node-accent' : '') + '" x="' + x + '" y="' + y + '" width="' + boxW + '" height="64" rx="12"/>';
    boxes += '<text class="label" x="' + (x + boxW / 2) + '" y="' + (y + 28) + '" text-anchor="middle">' + escapeXml(title) + '</text>';
    boxes += '<text class="sub" x="' + (x + boxW / 2) + '" y="' + (y + 46) + '" text-anchor="middle">' + escapeXml(sub) + '</text>';
    if (i < n - 1) {
      arrows += '<line class="flow" x1="' + (x + boxW + 4) + '" y1="' + (y + 32) + '" x2="' + (x + boxW + gap - 4) + '" y2="' + (y + 32) + '"/>';
    }
  }
  return '<svg viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg"><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#67e8f9"/></marker></defs><text class="sub" x="0" y="24">PIPELINE</text>' + arrows + boxes + '</svg>';
}

function cardHTML(p, feat) {
  var gh;
  if (p.github) gh = '<a class="mini gh" href="' + p.github + '" target="_blank" rel="noopener">GitHub</a>';
  else if (p.paper) gh = '<a class="mini gh" href="' + p.paper + '" target="_blank" rel="noopener">ResearchGate</a>';
  else gh = '<span class="mini">Private / in progress</span>';
  var tags = p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
  var label = feat ? (p.n + '  |  ' + p.stars + ' stars') : p.org;
  return '<article class="proj ' + (feat ? '' : 'own') + '"><div class="proj-num"><span class="stars">' + label + '</span></div><h3>' + p.title + '</h3><p>' + p.blurb + '</p><div class="tags">' + tags + '</div><div class="actions">' + gh + '<button class="mini arch" data-open="' + p.id + '">Architecture</button></div></article>';
}

function findProject(id) {
  var i;
  for (i = 0; i < featured.length; i++) if (featured[i].id === id) return featured[i];
  for (i = 0; i < own.length; i++) if (own[i].id === id) return own[i];
  return null;
}

function openModal(id) {
  var p = findProject(id);
  if (!p) return;
  var link = p.github || p.paper;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-sub').textContent = p.stack;
  document.getElementById('modal-arch').innerHTML = svgArch(p.arch);
  var cta = document.getElementById('modal-cta');
  if (link) {
    cta.style.display = 'inline-flex';
    cta.href = link;
    cta.textContent = p.github ? 'Open GitHub repository' : 'Open on ResearchGate';
  } else {
    cta.style.display = 'none';
  }
  document.getElementById('modal').classList.add('open');
}

document.getElementById('featured-grid').innerHTML = featured.map(function (p) { return cardHTML(p, true); }).join('');
document.getElementById('own-grid').innerHTML = own.map(function (p) { return cardHTML(p, false); }).join('');
document.body.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-open]');
  if (btn) openModal(btn.getAttribute('data-open'));
  if (e.target.id === 'modal' || e.target.closest('.close')) document.getElementById('modal').classList.remove('open');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') document.getElementById('modal').classList.remove('open');
});
document.getElementById('gh-profile').href = CONFIG.githubProfile;
document.getElementById('li-profile').href = CONFIG.linkedin;
document.getElementById('rg-profile').href = CONFIG.researchgate;
document.getElementById('mail-link').href = 'mailto:' + CONFIG.email;
document.getElementById('mail-text').textContent = CONFIG.email;
document.getElementById('phone-text').textContent = CONFIG.phone;
document.getElementById('year').textContent = new Date().getFullYear();
