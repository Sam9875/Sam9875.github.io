// src/data/projects.ts
var PROFILE = {
  name: "Samesun Singh",
  role: "Data Science & Engineering",
  school: "Politecnico di Torino",
  location: "Torino, Italy",
  address: "Via Melezet, 13, Torino",
  email: "samesun987@gmail.com",
  phone: "+39 347 665 7332",
  github: "https://github.com/Sam9875",
  linkedin: "https://www.linkedin.com/in/samesun-singh-979a86275/",
  researchgate: "https://www.researchgate.net/profile/Samesun-Singh",
  site: "https://sam9875.github.io",
  summary: "Master\u2019s student in Data Science and Engineering at Politecnico di Torino, where I also completed my Bachelor\u2019s. Strong foundation in Python and SQL, with solid analytical and problem-solving skills. Comfortable in international environments \u2014 Italian and English. Motivated to apply my skills to real-world, data-driven challenges."
};
var experience = [
  {
    role: "Thesis Student",
    org: "Column news",
    dates: "Mar 2026 \u2014 Present",
    place: "Torino",
    points: [
      "Developing a recommender for the cold-start problem on new users and items, training and iterating on AWS SageMaker.",
      "Researching machine learning techniques for personalized recommendations in sparse-data environments.",
      "Working with user\u2013item interaction datasets to analyse recommendation patterns and system performance."
    ],
    slug: "two-tower-thesis"
  },
  {
    role: "Research Student",
    org: "Stellantis",
    dates: "Sep 2025 \u2014 Jan 2026",
    place: "Torino",
    points: [
      "Designed and implemented an ML solution to predict vehicle breakdown risk using 1M+ service logs, warranty claims, and sensor signals.",
      "Built automated data-cleaning and feature-engineering pipelines.",
      "Trained and compared CatBoost, LightGBM, and Random Forests."
    ],
    slug: "stellantis"
  }
];
var education = [
  {
    title: "Master\u2019s in Data Science and Engineering",
    place: "Politecnico di Torino",
    dates: "Oct 2024 \u2014 Present",
    note: "Torino, Italy"
  },
  {
    title: "Bachelor\u2019s in Computer Engineering",
    place: "Politecnico di Torino",
    dates: "Sep 2020 \u2014 Sep 2024",
    note: "GPA 95/110"
  },
  {
    title: "Exchange \xB7 Computer Engineering",
    place: "Mississippi State University",
    dates: "Aug 2023 \u2014 Dec 2023",
    note: "GPA 4.0/4.0 \xB7 Starkville, USA"
  }
];
var skillGroups = [
  { group: "Programming", items: ["Python", "SQL", "Java"] },
  { group: "Big Data", items: ["Hadoop", "Apache Spark"] },
  { group: "ML tools", items: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "XGBoost", "SHAP", "Jupyter", "RAG", "LangChain", "LangGraph", "Guardrails"] },
  { group: "Cloud", items: ["AWS SageMaker", "Google Cloud"] },
  { group: "Databases", items: ["Microsoft SQL Server", "Oracle PL/SQL"] },
  { group: "Other", items: ["Git", "Docker", "Agile", "Office 365"] }
];
var publications = [
  {
    title: "Microkernel vs. Monolithic OS",
    dates: "Dec 2023",
    note: "Impact of OS architectures on functional safety, reliability, and fault tolerance in safety-critical systems.",
    href: "https://www.researchgate.net/profile/Samesun-Singh"
  }
];
var languages = [
  { name: "English", level: "C2" },
  { name: "Hindi", level: "C2" },
  { name: "Italian", level: "B2" },
  { name: "Spanish", level: "A1" }
];
var projects = [
  {
    slug: "langgraph-agent",
    title: "LangGraph-style news agent",
    repo: "langgraph-agent-lab",
    github: "https://github.com/Sam9875/langgraph-agent-lab",
    upstream: "https://github.com/langchain-ai/langgraph",
    year: "2026",
    language: "Python",
    category: "LLM",
    featured: true,
    lab: true,
    scene: "graph",
    blurb: "Four-node stateful graph: planner, retrieval, policy, draft \u2014 built for Column-style news, not a chatbot demo.",
    story: "Study of LangGraph, rewritten as a graph I own. The change is the policy node: it refuses a headline that is not in the retrieved titles, and the state checkpoints so a dropped run resumes.",
    tags: ["LangGraph", "Agents", "Policy"],
    stack: "state graph \xB7 planner \xB7 retrieve \xB7 policy \xB7 draft",
    arch: [
      { title: "Query", sub: "user" },
      { title: "Plan", sub: "sub-qs" },
      { title: "Retrieve", sub: "news index" },
      { title: "Policy", sub: "ground" },
      { title: "Draft", sub: "cite" },
      { title: "Save", sub: "checkpoint" }
    ],
    whatsNew: [
      "Policy is a first-class node, not a regex on the system prompt.",
      "citations[] on state \u2014 a draft cannot ship without sources."
    ],
    next: ["Swap the stub LLM for an OpenRouter call behind the same graph."]
  },
  {
    slug: "rag-scratch",
    title: "RAG from scratch",
    repo: "rag-from-scratch-lab",
    github: "https://github.com/Sam9875/rag-from-scratch-lab",
    upstream: "https://github.com/langchain-ai/rag-from-scratch",
    year: "2026",
    language: "Python",
    category: "NLP",
    featured: true,
    lab: true,
    scene: "rag",
    blurb: "Chunk, embed, retrieve, generate \u2014 no framework. Abstain when the news index is not confident.",
    story: "First-principles RAG on a news corpus. Hash embeddings so it runs without a download. The generator abstains on low cosine instead of hallucinating a cold-start user an answer.",
    tags: ["RAG", "Embeddings", "Abstain"],
    stack: "chunk \xB7 hash-embed \xB7 cosine \xB7 generate / abstain",
    arch: [
      { title: "Docs", sub: "news" },
      { title: "Chunk", sub: "windows" },
      { title: "Embed", sub: "hash" },
      { title: "kNN", sub: "cosine" },
      { title: "Prompt", sub: "context" },
      { title: "Answer", sub: "or abstain" }
    ],
    whatsNew: [
      "Confidence gate so a cold-start query can return ABSTAIN.",
      "Corpus is news + thesis facts, not Wikipedia trivia."
    ],
    next: ["Replace hash vectors with a small sentence encoder."]
  },
  {
    slug: "promptfoo-evals",
    title: "Promptfoo-style LLM evals",
    repo: "promptfoo-evals-lab",
    github: "https://github.com/Sam9875/promptfoo-evals-lab",
    upstream: "https://github.com/promptfoo/promptfoo",
    year: "2026",
    language: "Python",
    category: "LLM",
    featured: true,
    lab: true,
    scene: "eval",
    blurb: "Tiny eval runner with fairness assertions from the Turin tenant-screening audit.",
    story: "Promptfoo\u2019s idea \u2014 cases in, report out \u2014 pointed at my 7,800-call audit. Gender parity and nationality-leak checks live next to JSON-shape tests.",
    tags: ["Evals", "Fairness", "Promptfoo"],
    stack: "cases \xB7 runner \xB7 asserts \xB7 report.json",
    arch: [
      { title: "Cases", sub: "YAML-like" },
      { title: "Model", sub: "stub / API" },
      { title: "JSON", sub: "shape" },
      { title: "Parity", sub: "gender" },
      { title: "Leak", sub: "nationality" },
      { title: "Report", sub: "pass/fail" }
    ],
    whatsNew: [
      "Fairness slices as first-class asserts, not a later spreadsheet.",
      "Wired to the same tenant-screening prompts as Tenant-bias-LLM."
    ],
    next: ["Run the same cases against Owl-alpha and Qwen."]
  },
  {
    slug: "unsloth-lora",
    title: "Unsloth-style LoRA lab",
    repo: "unsloth-lora-lab",
    github: "https://github.com/Sam9875/unsloth-lora-lab",
    upstream: "https://github.com/unslothai/unsloth",
    year: "2026",
    language: "Python",
    category: "LLM",
    lab: true,
    scene: "lora",
    blurb: "4-bit base + LoRA recipe for news title \u2192 abstract on one GPU. Dry-run without weights.",
    story: "Unsloth\u2019s single-GPU path, as a recipe I own. Data is MIND/Column style pairs. Eval is ROUGE on held-out abstracts, not a vibe check.",
    tags: ["LoRA", "Unsloth", "News"],
    stack: "4-bit base \xB7 LoRA q/v \xB7 SFT \xB7 adapter save",
    arch: [
      { title: "Pairs", sub: "title/abs" },
      { title: "Tokenize", sub: "news" },
      { title: "Base", sub: "4-bit" },
      { title: "LoRA", sub: "rank 8" },
      { title: "SFT", sub: "one GPU" },
      { title: "Save", sub: "adapter" }
    ],
    whatsNew: [
      "Dry-run trainer so the recipe is reviewable without a GPU.",
      "News pairs instead of alpaca."
    ],
    next: ["Run for real on a rented 24GB box and publish adapter metrics."]
  },
  {
    slug: "mcp-server",
    title: "MCP server \u2014 news, listings, risk",
    repo: "mcp-server-lab",
    github: "https://github.com/Sam9875/mcp-server-lab",
    upstream: "https://github.com/modelcontextprotocol/servers",
    year: "2026",
    language: "Python",
    category: "Systems",
    lab: true,
    scene: "mcp",
    blurb: "Three MCP tools I would actually call: search_news, listing_fit, breakdown_risk.",
    story: "MCP servers are usually filesystem toys. These tools match Column search, the tenant audit, and Stellantis lookup \u2014 JSON-RPC over stdin so it scripts without the full SDK.",
    tags: ["MCP", "Tools", "JSON-RPC"],
    stack: "search_news \xB7 listing_fit \xB7 breakdown_risk",
    arch: [
      { title: "Host", sub: "stdio" },
      { title: "News", sub: "search" },
      { title: "Fit", sub: "listing" },
      { title: "Risk", sub: "VIN" },
      { title: "JSON", sub: "result" },
      { title: "Agent", sub: "calls" }
    ],
    whatsNew: [
      "Domain tools, not echo/read_file.",
      "No PII store on listing_fit \u2014 income in, JSON out."
    ],
    next: ["Expose the same tools over the official MCP SDK."]
  },
  {
    slug: "gemini-multimodal",
    title: "Gemini-style multimodal lab",
    repo: "gemini-multimodal-lab",
    github: "https://github.com/Sam9875/gemini-multimodal-lab",
    upstream: "https://github.com/google-gemini/cookbook",
    year: "2026",
    language: "Python",
    category: "Vision",
    lab: true,
    scene: "multimodal",
    blurb: "Text, image, short video in one interface. Video path returns an Ego4D-style NLQ span.",
    story: "Cookbook pattern, pointed at first-person video. A clip plus a query returns (t0, t1) so it can sit in front of VSLNet / Video-LLaVA from the Ego4D repo.",
    tags: ["Gemini", "VideoQA", "Ego4D"],
    stack: "text \xB7 image \xB7 video+NLQ \u2192 span",
    arch: [
      { title: "Input", sub: "3 modes" },
      { title: "Encode", sub: "stub" },
      { title: "Fuse", sub: "modalities" },
      { title: "Text", sub: "answer" },
      { title: "Video", sub: "span" },
      { title: "Out", sub: "JSON" }
    ],
    whatsNew: [
      "NLQ span on the video path, not caption-only.",
      "Same fuse() for all three modes."
    ],
    next: ["Call Gemini / Video-LLaVA behind fuse()."]
  },
  {
    slug: "qdrant-search",
    title: "Qdrant-style hybrid search",
    repo: "qdrant-semantic-search",
    github: "https://github.com/Sam9875/qdrant-semantic-search",
    upstream: "https://github.com/qdrant/qdrant",
    year: "2026",
    language: "Python",
    category: "NLP",
    lab: true,
    scene: "vectors",
    blurb: "Dense + lexical hybrid for news titles and rare supplier SKUs.",
    story: "Qdrant\u2019s hybrid idea, in-memory, using the same trick as the 2026 supplier-search hackathon: lexical fallback when embeddings blank on part numbers.",
    tags: ["Qdrant", "Hybrid", "ANN"],
    stack: "embed \xB7 cosine \xB7 lexical \xB7 0.7/0.3 blend",
    arch: [
      { title: "Records", sub: "news/SKU" },
      { title: "Dense", sub: "vectors" },
      { title: "Lex", sub: "postings" },
      { title: "Query", sub: "blend" },
      { title: "Top-k", sub: "hits" },
      { title: "Serve", sub: "rank" }
    ],
    whatsNew: [
      "Hybrid score with an explicit lexical term for SKUs.",
      "Shared records: thesis news + hackathon suppliers."
    ],
    next: ["Drop the same schema into a real Qdrant collection."]
  },
  {
    slug: "openhands-agent",
    title: "OpenHands-style coding agent",
    repo: "openhands-coding-agent",
    github: "https://github.com/Sam9875/openhands-coding-agent",
    upstream: "https://github.com/OpenHands/OpenHands",
    year: "2026",
    language: "Python",
    category: "LLM",
    lab: true,
    scene: "agent",
    blurb: "Plan, patch, run tests, stop. The oracle is compile-and-test, not a vibe check.",
    story: "OpenHands loop, cut down. This is the compile-and-test oracle I want in LLM-for-software-engineering.",
    tags: ["OpenHands", "Agent", "Oracle"],
    stack: "plan \xB7 patch \xB7 exec \xB7 assert",
    arch: [
      { title: "Task", sub: "spec" },
      { title: "Plan", sub: "steps" },
      { title: "Patch", sub: "files" },
      { title: "Run", sub: "exec" },
      { title: "Oracle", sub: "tests" },
      { title: "Stop", sub: "pass/fail" }
    ],
    whatsNew: [
      "Oracle is an executed test, not BLEU on code.",
      "Workspace is a real folder the agent writes."
    ],
    next: ["Plug the loop into the SE eval dashboard."]
  },
  {
    slug: "mlops-lab",
    title: "Made-With-ML style MLOps",
    repo: "made-with-ml-ops",
    github: "https://github.com/Sam9875/made-with-ml-ops",
    upstream: "https://github.com/GokuMohandas/Made-With-ML",
    year: "2026",
    language: "Python",
    category: "Industry",
    lab: true,
    scene: "mlops",
    blurb: "Notebook \u2192 train \u2192 PR-AUC \u2192 model card. Stellantis-shaped temporal split on toy logs.",
    story: "Made-With-ML\u2019s production path, pointed at breakdown-risk. Time split so future garage visits do not leak. Registry writes model.json + card.md.",
    tags: ["MLOps", "PR-AUC", "Model card"],
    stack: "logs \xB7 time split \xB7 train \xB7 register",
    arch: [
      { title: "Logs", sub: "toy" },
      { title: "Clean", sub: "rows" },
      { title: "Split", sub: "time" },
      { title: "Train", sub: "GBDT-shaped" },
      { title: "PR-AUC", sub: "test" },
      { title: "Card", sub: "registry" }
    ],
    whatsNew: [
      "Temporal split and PR-AUC, not random accuracy.",
      "Model card is a first-class artifact."
    ],
    next: ["Swap the toy table for a redacted Stellantis shard."]
  },
  {
    slug: "ms-recommenders",
    title: "Microsoft Recommenders lab",
    repo: "microsoft-recommenders-lab",
    github: "https://github.com/Sam9875/microsoft-recommenders-lab",
    upstream: "https://github.com/recommenders-team/recommenders",
    year: "2026",
    language: "Python",
    category: "RecSys",
    featured: true,
    lab: true,
    scene: "towers",
    blurb: "Two-tower retrieval on a MIND-shaped table with explicit new-user / new-item / both slices.",
    story: "Recommenders-team patterns, cut to the metric I care about in the Column thesis: recall by cold-start slice, not one blended nDCG.",
    tags: ["MIND", "Two-tower", "Cold start"],
    stack: "user bag \xB7 news text \xB7 hash towers \xB7 slice recall",
    arch: [
      { title: "Impr", sub: "MIND-like" },
      { title: "User", sub: "history bag" },
      { title: "Item", sub: "text" },
      { title: "Score", sub: "dot" },
      { title: "Slices", sub: "cold/warm" },
      { title: "Recall", sub: "@2" }
    ],
    whatsNew: [
      "Metrics split: new-user, new-item, both, warm.",
      "Same evaluation idea as Two-Tower-thesis, runnable in one file."
    ],
    next: ["Train real towers on MIND Large from this lab\u2019s split code."]
  },
  {
    slug: "two-tower-thesis",
    title: "Two-tower cold-start recommender",
    repo: "Two-Tower-thesis",
    github: "https://github.com/Sam9875/Two-Tower-thesis",
    year: "2026",
    language: "Python / HTML",
    category: "RecSys",
    featured: true,
    scene: "towers",
    blurb: "Thesis for Column news: a two-tower model that still ranks when the user or the item is brand new.",
    story: "Sparse user\u2013item logs fail classic collaborative filters. This stack encodes content on both towers, blends a popularity prior for true cold items, and evaluates with recall@k and nDCG on held-out sessions \u2014 not a single blended score that hides the hard slice.",
    tags: ["Two-tower", "Cold start", "Column news"],
    stack: "content towers \xB7 contrastive train \xB7 popularity prior \xB7 ranking metrics",
    arch: [
      { title: "Events", sub: "sparse clicks" },
      { title: "Content", sub: "title / body" },
      { title: "User tower", sub: "history pool" },
      { title: "Item tower", sub: "embeddings" },
      { title: "Blend", sub: "prior + score" },
      { title: "Eval", sub: "nDCG / recall" }
    ],
    whatsNew: [
      "Hard-negative mining from in-batch plus popular distractors.",
      "Cold-start slice in the eval report: new users vs new items vs both."
    ],
    next: ["Session-aware user tower with a short GRU over the last N reads."]
  },
  {
    slug: "mind-large",
    title: "MIND Large two-tower",
    repo: "MIND-large-column",
    github: "https://github.com/Sam9875/MIND-large-column",
    year: "2026",
    category: "RecSys",
    featured: true,
    scene: "towers",
    blurb: "Train a two-tower retriever on Microsoft MIND Large, then feed candidates to Column ranking.",
    story: "News ranking needs millions of impressions. MIND Large is the public stand-in: user history as a bag of news, item text as title+abstract, contrastive loss, then ANN retrieval for serving.",
    tags: ["MIND", "Retrieval", "News"],
    stack: "MIND Large \xB7 two-tower \xB7 ANN \xB7 candidate gen",
    arch: [
      { title: "MIND", sub: "impressions" },
      { title: "History", sub: "user bag" },
      { title: "Towers", sub: "user / news" },
      { title: "Train", sub: "contrastive" },
      { title: "Index", sub: "ANN" },
      { title: "Serve", sub: "top-k news" }
    ],
    whatsNew: [
      "Separate retrieval index from the ranker so Column can swap v3/v4 heads.",
      "Impression-level negatives instead of random news."
    ],
    next: ["Distill the item tower into a smaller encoder for on-device recs."]
  },
  {
    slug: "column-demo",
    title: "Column news demo",
    repo: "Column-Demo-apk",
    github: "https://github.com/Sam9875/Column-Demo-apk",
    year: "2026",
    language: "JavaScript",
    category: "RecSys",
    featured: true,
    scene: "towers",
    blurb: "Product client for the Column stack \u2014 v3 and v4 ranking reaching a real feed UI.",
    story: "Models only matter if a reader sees them. The demo wires candidate generation to a mobile/web feed, switches ranking versions, and logs clicks so the thesis loop can close.",
    tags: ["Product", "Feed UI", "v3 / v4"],
    stack: "ranking API \xB7 two-tower scores \xB7 session UI",
    arch: [
      { title: "Session", sub: "new / return" },
      { title: "Recall", sub: "two-tower" },
      { title: "Rank", sub: "v3 or v4" },
      { title: "Feed", sub: "demo app" },
      { title: "Clicks", sub: "feedback" },
      { title: "Loop", sub: "offline eval" }
    ],
    whatsNew: [
      "Explicit v3 vs v4 toggle in the demo.",
      "Session badge for cold users."
    ],
    next: ["Push impressions back into MIND-style training shards."]
  },
  {
    slug: "tenant-bias",
    title: "Tenant-bias LLM audit",
    repo: "Tenant-bias-LLM",
    github: "https://github.com/Sam9875/Tenant-bias-LLM",
    year: "2026",
    language: "Python",
    category: "LLM",
    featured: true,
    scene: "audit",
    blurb: "7,800 API calls: do rental-screening LLMs treat Turin applicants differently by gender or national background?",
    story: "Five Turin listings \xD7 480 synthetic profiles. Owl-alpha (OpenRouter) and Qwen 3.5 9B (Regolo). RQ1 gender, RQ2 nationality, RQ3 intersection, RQ4 mitigation with fairness and chain-of-thought prompts.",
    tags: ["Fairness", "Owl-alpha", "Qwen"],
    stack: "OpenRouter \xB7 Regolo \xB7 2400\xD72 audits \xB7 RQ4 mitigation",
    arch: [
      { title: "Listings", sub: "5 Turin" },
      { title: "Profiles", sub: "480" },
      { title: "LLM", sub: "screener" },
      { title: "Fit JSON", sub: "yes / no" },
      { title: "Slices", sub: "RQ1\u20133" },
      { title: "Mitigate", sub: "RQ4" }
    ],
    whatsNew: [
      "RQ4: 500 pairs \xD7 three prompt conditions on both models.",
      "Static results dashboard so reviewers need no API keys."
    ],
    next: ["Add a third model class under the same profile set."]
  },
  {
    slug: "ego4d",
    title: "Egocentric NLQ + VideoQA",
    repo: "Egocentric_VIsion",
    github: "https://github.com/Sam9875/Egocentric_VIsion",
    year: "2025",
    category: "Vision",
    featured: true,
    scene: "vision",
    blurb: "Span models on Ego4D (VSLBase / VSLNet) plus a Video-LLaVA question-answering head.",
    story: "Natural language queries on first-person video: encode clips with Omnivore / EgoVLP, predict a temporal span, then ask Video-LLaVA what happened. Metrics: temporal IoU, BLEU, ROUGE.",
    tags: ["Ego4D", "VSLNet", "Video-LLaVA"],
    stack: "Ego4D \xB7 Omnivore \xB7 EgoVLP \xB7 VSLNet \xB7 Video-LLaVA",
    arch: [
      { title: "Ego clip", sub: "Ego4D" },
      { title: "Visual", sub: "Omnivore" },
      { title: "Query", sub: "NLQ text" },
      { title: "Span", sub: "VSLNet" },
      { title: "QA", sub: "Video-LLaVA" },
      { title: "Metrics", sub: "IoU / BLEU" }
    ],
    whatsNew: [
      "VideoQA extension on the best span model.",
      "GloVe vs BERT query encoders called out in the writeup."
    ],
    next: ["Swap EgoVLP for a newer egocentric encoder."]
  },
  {
    slug: "llm-se",
    title: "LLMs for software engineering",
    repo: "LLM-for-software-engineering",
    github: "https://github.com/Sam9875/LLM-for-software-engineering",
    year: "2026",
    language: "Python",
    category: "LLM",
    featured: true,
    scene: "eval",
    blurb: "Eval harness and dashboard for code-oriented LLMs \u2014 tasks, traces, and scoreboards.",
    story: "Software-engineering prompts need more than a vibe check. This repo runs models against SE tasks, stores traces, and exposes a small dashboard so regressions show up before a demo.",
    tags: ["Evals", "Code LLM", "Dashboard"],
    stack: "Python scripts \xB7 results JSON \xB7 dashboard",
    arch: [
      { title: "Tasks", sub: "SE prompts" },
      { title: "Models", sub: "API / local" },
      { title: "Run", sub: "traces" },
      { title: "Score", sub: "asserts" },
      { title: "Store", sub: "results/" },
      { title: "UI", sub: "dashboard" }
    ],
    whatsNew: [
      "Task pack split from the runner so new SE problems drop in as JSON.",
      "Dashboard reads gitignored result dumps without re-running paid APIs."
    ],
    next: ["Add a compile-and-test oracle for generated patches."]
  },
  {
    slug: "cyber-agents",
    title: "Prompt-injection multi-agent defense",
    repo: "hackathon-Cyber-security-",
    github: "https://github.com/Sam9875/hackathon-Cyber-security-",
    year: "2026",
    language: "Python",
    category: "LLM",
    scene: "graph",
    blurb: "Hackathon system: multi-agent chatbots that catch prompt injection instead of echoing it.",
    story: "A single chatbot is an easy injection target. Split roles \u2014 planner, tool caller, policy checker \u2014 and require the policy agent to sign off before a tool runs.",
    tags: ["Prompt injection", "Multi-agent", "Hackathon"],
    stack: "agent roles \xB7 policy gate \xB7 tool sandbox",
    arch: [
      { title: "User", sub: "chat" },
      { title: "Planner", sub: "intent" },
      { title: "Policy", sub: "injection scan" },
      { title: "Tools", sub: "gated" },
      { title: "Reply", sub: "sanitized" },
      { title: "Log", sub: "attacks" }
    ],
    whatsNew: [
      "Policy agent is first-class, not a regex bolted on the prompt.",
      "Attack log so failed injections become regression tests."
    ],
    next: ["Red-team pack with indirect injection via retrieved docs."]
  },
  {
    slug: "supplier-search",
    title: "Semantic supplier search",
    repo: "hackathon2026",
    github: "https://github.com/Sam9875/hackathon2026",
    year: "2026",
    language: "Python",
    category: "NLP",
    scene: "vectors",
    blurb: "Hackathon pipeline: ingest suppliers, embed, enrich, and search with hybrid matching.",
    story: "Procurement queries are messy. Ingest sheets, enrich records, embed them, then hybrid-search so a buyer finds the right vendor without exact SKU strings.",
    tags: ["Embeddings", "Hybrid search", "Procurement"],
    stack: "ingest \xB7 embed \xB7 enrich \xB7 search engine \xB7 Streamlit app",
    arch: [
      { title: "Sheets", sub: "ingest" },
      { title: "Enrich", sub: "normalize" },
      { title: "Embed", sub: "dense" },
      { title: "Index", sub: "hybrid" },
      { title: "Query", sub: "buyer text" },
      { title: "App", sub: "ranked hits" }
    ],
    whatsNew: [
      "Search engine isolated from ingest.",
      "Lexical fallback when embeddings blank on rare part numbers."
    ],
    next: ["Add a reranker on the top 50 hits."]
  },
  {
    slug: "besstie",
    title: "BESSTIE dialect extensions",
    repo: "DNLP-BESSTIE-Extensions",
    github: "https://github.com/Sam9875/DNLP-BESSTIE-Extensions",
    year: "2026",
    language: "Notebook",
    category: "NLP",
    scene: "eval",
    blurb: "Sentiment and sarcasm classification across varieties of English \u2014 not just standard news text.",
    story: "Models trained on mainstream English miss sarcasm in other varieties. These notebooks extend BESSTIE with extra dialect slices and report where accuracy drops.",
    tags: ["Sarcasm", "Dialect", "Classification"],
    stack: "BESSTIE \xB7 notebooks \xB7 variety slices",
    arch: [
      { title: "Corpus", sub: "varieties" },
      { title: "Labels", sub: "sent / sarcasm" },
      { title: "Encode", sub: "LM" },
      { title: "Classify", sub: "heads" },
      { title: "Slice", sub: "dialect" },
      { title: "Report", sub: "gaps" }
    ],
    whatsNew: [
      "Per-variety error table so a single macro-F1 cannot hide a dialect collapse.",
      "Sarcasm vs sentiment heads trained jointly, then ablated."
    ],
    next: ["Add a code-switch slice if the license allows."]
  },
  {
    slug: "summarization",
    title: "Text summarization",
    repo: "Text-summarization",
    github: "https://github.com/Sam9875/Text-summarization",
    year: "2025",
    language: "Notebook",
    category: "NLP",
    scene: "rag",
    blurb: "Extractive and abstractive summarization notebooks with ROUGE-style checks.",
    story: "Course / lab work on compressing documents. Compare a simple extractive baseline against a neural abstractive model and keep the numbers honest.",
    tags: ["Summarization", "ROUGE", "NLP"],
    stack: "notebooks \xB7 extractive \xB7 abstractive",
    arch: [
      { title: "Docs", sub: "source" },
      { title: "Extract", sub: "sentences" },
      { title: "Abstract", sub: "seq2seq" },
      { title: "Score", sub: "ROUGE" },
      { title: "Compare", sub: "baselines" },
      { title: "Notes", sub: "failures" }
    ],
    whatsNew: [
      "Failure cases called out (hallucinated entities) instead of only leaderboard ROUGE.",
      "Single notebook path from raw text to both systems."
    ],
    next: ["Add a faithfulness check against the source sentences."]
  },
  {
    slug: "stellantis",
    title: "Vehicle breakdown risk",
    year: "2025\u201326",
    category: "Industry",
    featured: true,
    scene: "mlops",
    blurb: "Stellantis: predict breakdown risk from 1M+ service logs, warranty claims, and sensor signals.",
    story: "Industrial ML, not a notebook toy. Cleaning messy garage data, engineering usage and fault-code features, then comparing CatBoost, LightGBM and Random Forests with calibration in mind. Temporal splits so future visits do not leak into training.",
    tags: ["CatBoost", "LightGBM", "Pipelines"],
    stack: "pandas / Spark \xB7 feature pipes \xB7 GBDT \xB7 PR-AUC",
    arch: [
      { title: "Logs", sub: "1M+" },
      { title: "Clean", sub: "units / gaps" },
      { title: "Features", sub: "usage" },
      { title: "Models", sub: "GBDT" },
      { title: "Calibrate", sub: "PR-AUC" },
      { title: "Score", sub: "ops" }
    ],
    whatsNew: [
      "Model card: which fault codes actually move the score.",
      "Temporal split so we do not leak future garage visits."
    ],
    next: ["Online monitoring for concept drift on new vehicle lines."]
  },
  {
    slug: "hospital",
    title: "Post-operative risk models",
    year: "2025\u201326",
    category: "Industry",
    scene: "audit",
    blurb: "LINKS Foundation & Molinette: complications and nosocomial infection risk for ENT oncology.",
    story: "Clinical tabular models with explanations. Temporal validation, SHAP drivers, flags meant for a clinician \u2014 not a raw probability dump.",
    tags: ["Healthcare", "XGBoost", "SHAP"],
    stack: "clinical features \xB7 XGBoost \xB7 SHAP \xB7 time split",
    arch: [
      { title: "EHR", sub: "cohort" },
      { title: "Feats", sub: "labs" },
      { title: "Train", sub: "XGB" },
      { title: "Explain", sub: "SHAP" },
      { title: "Validate", sub: "time" },
      { title: "Flags", sub: "clinic" }
    ],
    whatsNew: [
      "Infection vs complication treated as separate heads.",
      "Clinician-facing top-3 SHAP drivers on each flag."
    ],
    next: ["External validation on a later Molinette window."]
  },
  {
    slug: "age-speech",
    title: "Age from speech",
    year: "2024\u201325",
    category: "NLP",
    scene: "eval",
    blurb: "Regression from acoustic and linguistic features of spoken sentences.",
    story: "PoliTo lab: extract prosody and lexical cues, train ensembles, report MAE/RMSE with error bands \u2014 not a single magic number.",
    tags: ["Speech", "Regression"],
    stack: "acoustic + linguistic \xB7 sklearn",
    arch: [
      { title: "Audio", sub: "speech" },
      { title: "Acoustic", sub: "prosody" },
      { title: "Lexical", sub: "cues" },
      { title: "Regress", sub: "ensemble" },
      { title: "Select", sub: "MAE" },
      { title: "Age", sub: "bands" }
    ],
    whatsNew: [
      "Ablation: acoustic-only vs linguistic-only vs both."
    ],
    next: ["Test on a second corpus to check domain shift."]
  },
  {
    slug: "os-paper",
    title: "Microkernel vs monolithic OS",
    year: "2023",
    paper: "https://www.researchgate.net/profile/Samesun-Singh",
    category: "Systems",
    scene: "systems",
    blurb: "Publication: how kernel architecture changes isolation, reliability and fault tolerance.",
    story: "Safety-critical systems care whether a crash stays in a server or takes the whole kernel. The paper compares isolation and latency trade-offs, not slogans.",
    tags: ["OS", "Safety", "Paper"],
    stack: "fault models \xB7 isolation \xB7 latency",
    arch: [
      { title: "Load", sub: "safety" },
      { title: "Mono", sub: "shared" },
      { title: "Micro", sub: "servers" },
      { title: "Faults", sub: "crash" },
      { title: "Props", sub: "isolation" },
      { title: "Report", sub: "tradeoff" }
    ],
    whatsNew: [
      "Portfolio writeup states the fault model explicitly (crash vs corrupt)."
    ],
    next: ["Link the PDF once a stable ResearchGate file URL is pinned."]
  },
  {
    slug: "dcn-23",
    title: "DCN-23",
    repo: "DCN-23",
    github: "https://github.com/Sam9875/DCN-23",
    year: "2025",
    language: "C++",
    category: "Systems",
    scene: "systems",
    blurb: "Data-communication coursework in C++ \u2014 protocols, sockets, and lab traces.",
    story: "Low-level networking still matters when you later ship ML services. This lab is the C++ side of that: packets, not notebooks.",
    tags: ["C++", "Networking"],
    stack: "C++ \xB7 sockets \xB7 lab traces",
    arch: [
      { title: "Spec", sub: "protocol" },
      { title: "Socket", sub: "C++" },
      { title: "Send", sub: "frames" },
      { title: "Recv", sub: "parse" },
      { title: "Log", sub: "traces" },
      { title: "Check", sub: "lab" }
    ],
    whatsNew: [
      "Framed as systems grounding for later ML serving."
    ],
    next: ["Add a tiny README with build + run commands."]
  },
  {
    slug: "sockets-c",
    title: "Sockets in C",
    repo: "Socket-programming-in-c-",
    github: "https://github.com/Sam9875/Socket-programming-in-c-",
    year: "2024",
    language: "C",
    category: "Systems",
    scene: "systems",
    blurb: "TCP client/server exercises in C \u2014 the unglamorous layer under every API.",
    story: "Bind, listen, accept, read. The point is to remember what a model-serving socket actually is.",
    tags: ["C", "TCP"],
    stack: "BSD sockets \xB7 C",
    arch: [
      { title: "Bind", sub: "port" },
      { title: "Listen", sub: "backlog" },
      { title: "Accept", sub: "client" },
      { title: "Read", sub: "buffer" },
      { title: "Write", sub: "reply" },
      { title: "Close", sub: "fd" }
    ],
    whatsNew: ["Portfolio card documents the intended client/server flow."],
    next: ["Commit a minimal echo server + client with a Makefile."]
  },
  {
    slug: "ml-lab",
    title: "Machine & deep learning lab",
    repo: "machine-deep-lab-3s",
    github: "https://github.com/Sam9875/machine-deep-lab-3s",
    year: "2025",
    category: "Course",
    scene: "mlops",
    blurb: "Course lab 3: classical ML through small deep models, with notebooks as the trail.",
    story: "The lab that sits under later work \u2014 sklearn, a first net, plots. Kept public so the path from coursework to Stellantis / thesis is visible.",
    tags: ["sklearn", "Deep learning", "Lab"],
    stack: "notebooks \xB7 sklearn \xB7 small nets",
    arch: [
      { title: "Data", sub: "lab set" },
      { title: "Baseline", sub: "sklearn" },
      { title: "Net", sub: "MLP" },
      { title: "Train", sub: "loop" },
      { title: "Plot", sub: "curves" },
      { title: "Report", sub: "lab 3" }
    ],
    whatsNew: ["Tagged as coursework so it does not pretend to be a production system."],
    next: ["Pin package versions so the notebook still runs."]
  },
  {
    slug: "hellooow",
    title: "Hellooow \u2014 interaction study",
    repo: "Hellooow",
    github: "https://github.com/Sam9875/Hellooow",
    year: "2026",
    language: "JavaScript",
    category: "Course",
    scene: "multimodal",
    blurb: "Small client-side site: layout, motion, and interaction as product craft \u2014 not a course dump.",
    story: "A personal frontend experiment. Useful as a reminder that ranking models still have to live inside an interface someone will touch.",
    tags: ["Frontend", "Interaction"],
    stack: "JavaScript \xB7 client UI",
    arch: [
      { title: "Page", sub: "shell" },
      { title: "Layout", sub: "rhythm" },
      { title: "Motion", sub: "easing" },
      { title: "Input", sub: "tap" },
      { title: "State", sub: "local" },
      { title: "Polish", sub: "craft" }
    ],
    whatsNew: ["Recast on the portfolio as a craft study, not a joke repo."],
    next: ["Extract one interaction pattern into the Column demo."]
  },
  {
    slug: "grit",
    title: "Grit",
    repo: "Grit",
    year: "2026",
    language: "JavaScript",
    category: "Course",
    private: true,
    scene: "agent",
    blurb: "Private JavaScript experiment. Closed source \u2014 this page is the public sketch, not the tree.",
    story: "A private product/interaction experiment. Listed so the GitHub account is complete; internals stay off this site.",
    tags: ["Private", "JavaScript"],
    stack: "JS \xB7 private",
    arch: [
      { title: "Idea", sub: "closed" },
      { title: "Proto", sub: "JS" },
      { title: "Iterate", sub: "private" },
      { title: "Hold", sub: "source" },
      { title: "Note", sub: "portfolio" },
      { title: "Ask", sub: "walkthrough" }
    ],
    whatsNew: ["Named on the site without exposing the private tree."],
    next: ["Walkthrough on request."]
  },
  {
    slug: "portfolio-site",
    title: "This portfolio",
    repo: "Sam9875.github.io",
    github: "https://github.com/Sam9875/Sam9875.github.io",
    year: "2026",
    language: "TypeScript",
    category: "Course",
    scene: "constellation",
    blurb: "Personal site: CV, every public repo, 3D architecture views, and the 2026 lab set.",
    story: "Static Pages plus this interactive app. GitHub links are live. Architecture is a first-class button. The ten DS/AI labs are original repos, not silent forks of 90k-star trees.",
    tags: ["Portfolio", "Three.js"],
    stack: "React \xB7 TanStack \xB7 three.js \xB7 GitHub Pages",
    arch: [
      { title: "CV", sub: "facts" },
      { title: "Repos", sub: "catalog" },
      { title: "Labs", sub: "10 stacks" },
      { title: "Arch", sub: "pipelines" },
      { title: "3D", sub: "scenes" },
      { title: "Ship", sub: "preview" }
    ],
    whatsNew: [
      "Ten original GitHub labs for the DS/AI stack list, each with a twist from Column / Stellantis / Ego4D.",
      "Per-project 3D scene plus a constellation you can orbit."
    ],
    next: ["Keep Pages and this app in sync when a new repo lands."]
  }
];
var categories = [
  "All",
  "Labs",
  "RecSys",
  "LLM",
  "Vision",
  "NLP",
  "Systems",
  "Industry",
  "Course"
];
function projectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
function githubProjects() {
  return projects.filter((p) => p.repo);
}
function labProjects() {
  return projects.filter((p) => p.lab);
}
function labSceneNodes() {
  return labProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
    kind: p.scene
  }));
}
export {
  PROFILE,
  categories,
  education,
  experience,
  githubProjects,
  labProjects,
  labSceneNodes,
  languages,
  projectBySlug,
  projects,
  publications,
  skillGroups
};
