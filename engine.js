// src/components/three/engine.ts
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
var PAPER = "#f3efe6";
var SAND = 13616566;
var TEAL = 949606;
var PINE = 2382928;
var MUTED = 8029308;
function labelSprite(text, color = "#245c50") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.Sprite();
  ctx.clearRect(0, 0, 512, 128);
  ctx.font = "600 36px 'IBM Plex Sans', system-ui, sans-serif";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text.slice(0, 28), 256, 64);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1.8, 0.45, 1);
  return sprite;
}
function makeRenderer(el) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(el.clientWidth, el.clientHeight);
  renderer.setClearColor(0, 0);
  renderer.setClearAlpha(0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  el.style.background = PAPER;
  el.appendChild(renderer.domElement);
  renderer.domElement.style.display = "block";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.touchAction = "none";
  renderer.domElement.style.background = PAPER;
  return renderer;
}
function lights(scene) {
  scene.add(new THREE.HemisphereLight(16775920, 13945784, 1.15));
  const key = new THREE.DirectionalLight(16777215, 0.9);
  key.position.set(4, 7, 6);
  scene.add(key);
  const fill = new THREE.PointLight(TEAL, 0.55, 28);
  fill.position.set(-5, 3, -3);
  scene.add(fill);
}
function addCore(scene) {
  const g = new THREE.IcosahedronGeometry(0.35, 1);
  const m = new THREE.MeshStandardMaterial({
    color: TEAL,
    emissive: TEAL,
    emissiveIntensity: 0.28,
    roughness: 0.35,
    metalness: 0.15
  });
  const mesh = new THREE.Mesh(g, m);
  scene.add(mesh);
  return mesh;
}
function wireMat() {
  return new THREE.LineBasicMaterial({ color: TEAL, transparent: true, opacity: 0.4 });
}
function nodeMat(hex = TEAL) {
  return new THREE.MeshStandardMaterial({
    color: hex,
    emissive: hex,
    emissiveIntensity: 0.18,
    roughness: 0.42,
    metalness: 0.08
  });
}
function addGround(scene) {
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(3.8, 48),
    new THREE.MeshStandardMaterial({ color: 15196628, roughness: 0.95, metalness: 0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.55;
  scene.add(ground);
}
function buildGraph(scene) {
  const labels = ["plan", "retrieve", "policy", "draft"];
  const pts = [];
  labels.forEach((name, i) => {
    const a = i / labels.length * Math.PI * 2 - Math.PI / 2;
    const p = new THREE.Vector3(Math.cos(a) * 2.2, Math.sin(a) * 1.4, Math.sin(a) * 0.4);
    pts.push(p);
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 16), nodeMat());
    mesh.position.copy(p);
    scene.add(mesh);
    const s = labelSprite(name, "#0e7d66");
    s.position.copy(p).add(new THREE.Vector3(0, 0.42, 0));
    scene.add(s);
  });
  const geo = new THREE.BufferGeometry().setFromPoints([...pts, pts[0]]);
  scene.add(new THREE.Line(geo, wireMat()));
}
function buildRag(scene) {
  for (let i = 0; i < 6; i++) {
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.08, 1),
      new THREE.MeshStandardMaterial({
        color: i === 2 ? TEAL : SAND,
        emissive: i === 2 ? TEAL : 0,
        emissiveIntensity: i === 2 ? 0.28 : 0,
        roughness: 0.5
      })
    );
    box.position.set((i - 2.5) * 0.15, (i - 2.5) * 0.18, (i - 2.5) * 0.12);
    box.rotation.y = 0.2;
    scene.add(box);
  }
  const q = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 16), nodeMat(PINE));
  q.position.set(-2.4, 0.8, 1.2);
  scene.add(q);
}
function buildEval(scene) {
  const heights = [0.6, 1.4, 1.1, 1.8, 0.9];
  heights.forEach((h, i) => {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.38, h, 0.38), nodeMat(i === 3 ? TEAL : MUTED));
    bar.position.set((i - 2) * 0.7, h / 2 - 0.4, 0);
    scene.add(bar);
  });
}
function buildLora(scene) {
  const core = addCore(scene);
  core.scale.setScalar(2.2);
  const torus = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.08, 12, 64), nodeMat(TEAL));
  torus.rotation.x = Math.PI / 2.6;
  scene.add(torus);
  const torus2 = torus.clone();
  torus2.rotation.x = Math.PI / 1.5;
  torus2.scale.setScalar(0.78);
  scene.add(torus2);
}
function buildMcp(scene) {
  addCore(scene);
  const tools = ["news", "fit", "risk"];
  tools.forEach((t, i) => {
    const a = i / tools.length * Math.PI * 2;
    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.38), nodeMat(PINE));
    cube.position.set(Math.cos(a) * 1.8, Math.sin(a * 2) * 0.35, Math.sin(a) * 1.8);
    scene.add(cube);
    const s = labelSprite(t);
    s.position.copy(cube.position).add(new THREE.Vector3(0, 0.45, 0));
    scene.add(s);
  });
}
function buildMultimodal(scene) {
  const planes = [
    { rot: 0.4, pos: [-1.2, 0, 0], label: "text" },
    { rot: -0.2, pos: [0.2, 0.2, 0.4], label: "image" },
    { rot: 0.7, pos: [1.4, -0.1, -0.2], label: "video" }
  ];
  planes.forEach((p) => {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 1),
      new THREE.MeshStandardMaterial({
        color: 15196628,
        emissive: TEAL,
        emissiveIntensity: 0.16,
        side: THREE.DoubleSide,
        roughness: 0.55
      })
    );
    mesh.position.set(p.pos[0], p.pos[1], p.pos[2]);
    mesh.rotation.y = p.rot;
    scene.add(mesh);
    const s = labelSprite(p.label, "#0e7d66");
    s.position.set(p.pos[0], p.pos[1] + 0.7, p.pos[2]);
    scene.add(s);
  });
}
function buildVectors(scene) {
  const geo = new THREE.SphereGeometry(0.045, 8, 8);
  const mat = new THREE.MeshStandardMaterial({ color: MUTED, roughness: 0.6 });
  for (let i = 0; i < 90; i++) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set((Math.random() - 0.5) * 4.2, (Math.random() - 0.5) * 2.4, (Math.random() - 0.5) * 3.2);
    scene.add(m);
  }
  const q = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), nodeMat(TEAL));
  scene.add(q);
}
function buildAgent(scene) {
  const steps = ["plan", "patch", "test", "stop"];
  const pts = [];
  steps.forEach((name, i) => {
    const p = new THREE.Vector3(i * 1.15 - 1.7, Math.sin(i) * 0.25, 0);
    pts.push(p);
    const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), nodeMat());
    mesh.position.copy(p);
    scene.add(mesh);
    const s = labelSprite(name);
    s.position.copy(p).add(new THREE.Vector3(0, 0.45, 0));
    scene.add(s);
  });
  scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat()));
}
function buildMlops(scene) {
  const names = ["logs", "split", "train", "card"];
  names.forEach((name, i) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.5, 12), nodeMat(i === 3 ? TEAL : MUTED));
    mesh.position.set(i * 1.15 - 1.7, 0, 0);
    scene.add(mesh);
    const s = labelSprite(name);
    s.position.set(mesh.position.x, 0.7, 0);
    scene.add(s);
  });
  const belt = new THREE.Mesh(
    new THREE.BoxGeometry(4.4, 0.06, 0.8),
    new THREE.MeshStandardMaterial({ color: SAND, roughness: 0.8 })
  );
  belt.position.y = -0.32;
  scene.add(belt);
}
function buildTowers(scene) {
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.4, 0.7), nodeMat(TEAL));
  left.position.set(-1.1, 0.2, 0);
  const right = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.4, 0.7), nodeMat(PINE));
  right.position.set(1.1, 0.2, 0);
  scene.add(left, right);
  const bridge = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 0.08, 0.3),
    new THREE.MeshStandardMaterial({ color: TEAL, emissive: TEAL, emissiveIntensity: 0.35 })
  );
  bridge.position.y = 0.5;
  scene.add(bridge);
  const a = labelSprite("user");
  a.position.set(-1.1, 1.7, 0);
  const b = labelSprite("item");
  b.position.set(1.1, 1.7, 0);
  scene.add(a, b);
}
function buildAudit(scene) {
  for (const side of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), nodeMat(side < 0 ? TEAL : MUTED));
      m.position.set(side * 1.4 + (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 0.8);
      scene.add(m);
    }
  }
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 2.2, 1.6),
    new THREE.MeshStandardMaterial({ color: PINE, transparent: true, opacity: 0.28 })
  );
  scene.add(wall);
}
function buildVision(scene) {
  const cam = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.9), nodeMat(MUTED));
  cam.position.set(-1.6, 0.2, 1.2);
  scene.add(cam);
  const geo = new THREE.ConeGeometry(1.4, 2.4, 4, 1, true);
  const mat = new THREE.MeshStandardMaterial({
    color: TEAL,
    transparent: true,
    opacity: 0.22,
    side: THREE.DoubleSide,
    emissive: TEAL,
    emissiveIntensity: 0.18
  });
  const cone = new THREE.Mesh(geo, mat);
  cone.rotation.x = Math.PI / 2;
  cone.position.set(0.3, 0, -0.2);
  scene.add(cone);
}
function buildSystems(scene) {
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const p = new THREE.Vector3(x * 1.1, y * 1.1, z * 1.1);
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.22), nodeMat(x === 0 && y === 0 ? TEAL : MUTED));
        m.position.copy(p);
        scene.add(m);
      }
    }
  }
}
function buildConstellation(scene, nodes, pickables) {
  const n = Math.max(nodes.length, 1);
  nodes.forEach((node, i) => {
    const phi = Math.acos(-1 + 2 * i / n);
    const theta = Math.sqrt(n * Math.PI) * phi;
    const r = 2.6;
    const p = new THREE.Vector3(
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.cos(phi) * 0.85,
      r * Math.sin(theta) * Math.sin(phi)
    );
    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 0), nodeMat(TEAL));
    mesh.position.copy(p);
    mesh.userData.slug = node.slug;
    scene.add(mesh);
    pickables.push(mesh);
    const s = labelSprite(node.title, "#245c50");
    s.position.copy(p).add(new THREE.Vector3(0, 0.32, 0));
    scene.add(s);
  });
  const positions = [];
  pickables.forEach((a, i) => {
    const b = pickables[(i + 3) % pickables.length];
    positions.push(a.position.x, a.position.y, a.position.z, b.position.x, b.position.y, b.position.z);
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  scene.add(new THREE.LineSegments(g, wireMat()));
}
function populate(scene, kind, nodes, pickables) {
  addGround(scene);
  switch (kind) {
    case "graph":
      buildGraph(scene);
      break;
    case "rag":
      buildRag(scene);
      break;
    case "eval":
      buildEval(scene);
      break;
    case "lora":
      buildLora(scene);
      break;
    case "mcp":
      buildMcp(scene);
      break;
    case "multimodal":
      buildMultimodal(scene);
      break;
    case "vectors":
      buildVectors(scene);
      break;
    case "agent":
      buildAgent(scene);
      break;
    case "mlops":
      buildMlops(scene);
      break;
    case "towers":
      buildTowers(scene);
      break;
    case "audit":
      buildAudit(scene);
      break;
    case "vision":
      buildVision(scene);
      break;
    case "systems":
      buildSystems(scene);
      break;
    case "constellation":
      buildConstellation(scene, nodes, pickables);
      break;
    default:
      addCore(scene);
  }
}
function mountScene(el, opts) {
  const scene = new THREE.Scene();
  scene.background = null;
  const camera = new THREE.PerspectiveCamera(42, el.clientWidth / Math.max(el.clientHeight, 1), 0.1, 80);
  camera.position.set(0, 1.4, 7.2);
  const renderer = makeRenderer(el);
  lights(scene);
  const pickables = [];
  populate(scene, opts.kind, opts.nodes ?? [], pickables);
  const rig = new THREE.Group();
  [...scene.children].forEach((child) => {
    if (!(child instanceof THREE.Light)) rig.add(child);
  });
  scene.add(rig);
  const bases = /* @__PURE__ */ new Map();
  rig.traverse((obj) => {
    if (obj instanceof THREE.Mesh) bases.set(obj, obj.position.clone());
  });
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.enablePan = false;
  controls.minDistance = 4;
  controls.maxDistance = 14;
  controls.autoRotate = !opts.reducedMotion;
  controls.autoRotateSpeed = 2.4;
  controls.target.set(0, 0, 0);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const onClick = (ev) => {
    if (!opts.onSelect || pickables.length === 0) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = (ev.clientX - rect.left) / rect.width * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(pickables, false)[0];
    const slug = hit?.object.userData.slug;
    if (slug) opts.onSelect(slug);
  };
  renderer.domElement.addEventListener("pointerup", onClick);
  const clock = new THREE.Clock();
  let frame = 0;
  const tick = () => {
    frame = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    if (!opts.reducedMotion) {
      rig.rotation.y = t * 0.32;
      rig.rotation.x = Math.sin(t * 0.45) * 0.08;
      let i = 0;
      bases.forEach((base, obj) => {
        obj.rotation.y = t * 0.85 + i * 0.2;
        obj.rotation.z = Math.sin(t * 1.05 + i) * 0.14;
        obj.position.y = base.y + Math.sin(t * 1.6 + i * 0.7) * 0.16;
        i += 1;
      });
    }
    controls.update();
    renderer.render(scene, camera);
  };
  tick();
  const onResize = () => {
    const w = el.clientWidth;
    const h = el.clientHeight;
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  const ro = new ResizeObserver(onResize);
  ro.observe(el);
  return () => {
    cancelAnimationFrame(frame);
    ro.disconnect();
    renderer.domElement.removeEventListener("pointerup", onClick);
    controls.dispose();
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        const mat = obj.material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat.dispose();
      }
      if (obj instanceof THREE.Sprite) {
        obj.material.map?.dispose();
        obj.material.dispose();
      }
    });
    renderer.dispose();
    renderer.domElement.remove();
  };
}
export {
  mountScene
};
