/* ══════════════════════════════════════════
   ASUTOSH PANIGRAHI — PORTFOLIO SCRIPT
══════════════════════════════════════════ */

/* ── LIFE JOURNEY DATA ── */
const JOURNEY_EVENTS = [
  { year: 2003, age: 0,  label: "⚓ Born",            desc: "The voyage begins. Born in Odisha, India.", icon: "⚓", color: "#00f5ff" },
  { year: 2010, age: 7,  label: "📚 School Begins",   desc: "Started primary school. First brushes with curiosity and learning.", icon: "📚", color: "#a78bfa" },
  { year: 2019, age: 16, label: "🏫 Higher Secondary", desc: "Joined Takshashila Residential School. CBSE Higher Secondary — 71.4%.", icon: "🏫", color: "#f59e0b" },
  { year: 2021, age: 18, label: "🎓 NIST University",  desc: "Enrolled in B.Tech CSE at NIST University, Berhampur. GPA: 7.40", icon: "🎓", color: "#00f5ff" },
  { year: 2022, age: 19, label: "🏴 Club Excel",       desc: "Joined Club Excel as Core Member. Organized workshops reaching 500+ students.", icon: "🏴", color: "#34d399" },
  { year: 2023, age: 20, label: "🔗 Blockchain Project", desc: "Built QR-Based Authentication System using Blockchain, Solidity & React.", icon: "🔗", color: "#f472b6" },
  { year: 2024, age: 21, label: "🛡️ TPSODL Intern",   desc: "Cybersecurity Summer Intern at TPSODL. Vulnerability assessments & network audits.", icon: "🛡️", color: "#fb923c" },
  { year: 2024, age: 21, label: "🍳 Recipe App",       desc: "Built API-Based Recipe Recommendation App on Salesforce LWC with REST APIs.", icon: "🍳", color: "#a3e635" },
  { year: 2024, age: 21, label: "🎨 UX Certifications", desc: "Earned Accenture Product Design & Digital Skills: UX certifications.", icon: "🎨", color: "#00f5ff" },
  { year: 2025, age: 22, label: "⚡ Spikewell SDE",    desc: "SDE Intern at Spikewell. Built Salesforce Lightning Web App, reduced workflow clicks by 30%.", icon: "⚡", color: "#f59e0b" },
  { year: 2025, age: 22, label: "🌐 Portfolio Launch", desc: "Launched this sci-fi pirate portfolio. The map is still being drawn…", icon: "🌐", color: "#00f5ff" },
  { year: 2103, age: 100, label: "☠️ Treasure Found",  desc: "The final destination. A lifetime of building, designing, and exploring.", icon: "☠️", color: "#ff6b6b" },
];

/* ── PROJECT DATA ── */
const DATA = {
  designer: {
    resume: { file: "assets/Asutosh_Panigrahi_UX_Resume.pdf", label: "UX Resume" },
    badge: "UI/UX Designer",
    tagline: "Crafting experiences<br/>pixel by pixel.",
    sub: "I design interfaces that feel effortless — blending UX research, prototyping, and motion into products people love.",
    aboutAccent: "design & aesthetics.",
    aboutP1: "I'm a UI/UX Designer who believes great design is invisible. I obsess over every user flow, every micro-interaction, and every pixel — because that's where trust is built.",
    aboutP2: "With skills in Figma, wireframing, and usability testing, I craft experiences that are both beautiful and purposeful. Certified by Accenture in Product Design and UX.",
    aboutTags: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Usability Testing", "Framer", "Canva"],
    logoRole: "design",
    cardTitle: "design.fig",
    cardType: "figma",
    skills: [
      { name: "Figma",           icon: "🎨", level: 0.95 },
      { name: "Adobe XD",        icon: "🔵", level: 0.85 },
      { name: "Prototyping",     icon: "⚡", level: 0.90 },
      { name: "User Research",   icon: "🔍", level: 0.85 },
      { name: "Wireframing",     icon: "📐", level: 0.92 },
      { name: "Usability Testing",icon:"🧪", level: 0.80 },
      { name: "Adobe Photoshop", icon: "🖼️", level: 0.75 },
      { name: "Framer",          icon: "✨", level: 0.70 },
    ],
    projects: [
      {
        title: "ZenithMart — E-Commerce UX/UI",
        desc: "Designed wireframes, user flows, and high-fidelity prototypes for a responsive e-commerce platform using Figma. Conducted user feedback sessions and iterative design improvements to enhance usability and navigation.",
        tags: ["Figma", "UX Research", "Prototyping", "E-Commerce"],
        icon: "🛒",
        bgColor: "linear-gradient(135deg, #0a0a1a, #1a0a2e)",
        type: "UI/UX Design",
        // screenshot: null,
        // figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=REPLACE_ZENITHMART_FIGMA_URL",
        // figmaLink: "https://www.figma.com/REPLACE_ZENITHMART_FIGMA_URL",
      },
      {
        title: "Chat App UI Redesign",
        desc: "Designed a modern Android chat application focused on seamless real-time communication. Created intuitive user flows, wireframes, and responsive interface designs. Applied usability, accessibility, and mobile-first design principles.",
        tags: ["Mobile UI", "Android", "UX Design", "Wireframing"],
        icon: "💬",
        bgColor: "linear-gradient(135deg, #0a1a10, #0a2e1a)",
        type: "Mobile UI",
        screenshot: null,
        figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=REPLACE_CHATAPP_FIGMA_URL",
        figmaLink: "https://www.figma.com/REPLACE_CHATAPP_FIGMA_URL",
      },
      {
        title: "Spikewell — Salesforce UX",
        desc: "Contributed to the design of a Salesforce Lightning app for call center agents. Improved UX by redesigning interface interactions and simplifying task flows, reducing process steps from ~30 clicks to ~20 clicks (≈30% reduction). Collaborated with stakeholders to translate business needs into intuitive interface solutions.",
        tags: ["Salesforce", "UX Design", "Workflow Design", "Enterprise"],
        icon: "⚡",
        bgColor: "linear-gradient(135deg, #1a1000, #2e1a00)",
        type: "Enterprise UX",
        screenshot: null,
        isCode: false,
        figmaEmbed: "",
        figmaLink: "",
        isExperience: true,
        company: "Spikewell · SDE Intern",
        period: "Jan 2025 – Feb 2026",
      },
    ],
  },

  developer: {
    resume: { file: "assets/Asutosh_Panigrahi_Dev_Resume.pdf", label: "Dev Resume" },
    badge: "Frontend Developer",
    tagline: "Building things that<br/>live on the internet.",
    sub: "I write clean, performant code — Salesforce LWC, React, and everything in between.",
    aboutAccent: "code & architecture.",
    aboutP1: "I'm a developer with a strong foundation in Salesforce Lightning, React, and full-stack thinking. I built real-world apps during my internship at Spikewell and love solving complex problems with clean, scalable code.",
    aboutP2: "From Blockchain-based authentication to LWC components talking to REST APIs, I enjoy building things that actually work and scale. Currently pursuing B.Tech CSE at NIST University.",
    aboutTags: ["Salesforce LWC", "React", "Python", "JavaScript", "MySQL", "Git", "Apex", "HTML/CSS"],
    logoRole: "dev",
    cardTitle: "main.jsx",
    cardType: "code",
    skills: [
      { name: "Salesforce LWC", icon: "☁️", level: 0.90 },
      { name: "React",          icon: "⚛️", level: 0.85 },
      { name: "JavaScript",     icon: "🟨", level: 0.88 },
      { name: "Python",         icon: "🐍", level: 0.82 },
      { name: "Apex / SOQL",    icon: "🔷", level: 0.88 },
      { name: "MySQL",          icon: "🗄️", level: 0.80 },
      { name: "Git / GitHub",   icon: "🌿", level: 0.92 },
      { name: "HTML / CSS",     icon: "🎨", level: 0.90 },
    ],
    projects: [
      {
        title: "QR-Based Blockchain Auth",
        desc: "Built a decentralized authentication system integrating Ethereum smart contracts with QR-based verification. Developed a responsive interface displaying real-time transaction updates and implemented on-chain identity verification using Solidity and React.",
        tags: ["Solidity", "React", "Blockchain", "Ethereum", "Web3"],
        icon: "🔗",
        bgColor: "linear-gradient(135deg, #0a0f1a, #0a1a2e)",
        type: "Blockchain",
        screenshot: null,
        isCode: true,
        codeLink: "https://github.com/asutosh-panigrahi/qr-blockchain-auth",
      },
      {
        title: "Recipe Recommendation App",
        desc: "Developed a Salesforce LWC that fetches random recipes using external REST APIs via Apex Callout. Implemented Apex Controller to handle API callouts and process responses within Salesforce. Built an intuitive LWC Component to render fetched recipe data in real-time.",
        tags: ["Salesforce", "LWC", "Apex", "REST API", "SOQL"],
        icon: "🍳",
        bgColor: "linear-gradient(135deg, #1a0a0a, #2e1500)",
        type: "Salesforce App",
        screenshot: null,
        isCode: true,
        codeLink: "https://github.com/asutosh-panigrahi/recipe-app-lwc",
      },
      {
        title: "Spikewell — Order Management App",
        desc: "Developed and deployed a Salesforce Lightning Web Application for call center agents for order management. Optimized workflows by redesigning UI interactions, reducing process steps from ~30 to ~20 clicks (≈30%). Wrote optimized SOQL queries and migrated legacy Workflow Rules to Salesforce Flows for improved scalability.",
        tags: ["Salesforce", "LWC", "SOQL", "Apex", "Flows"],
        icon: "⚡",
        bgColor: "linear-gradient(135deg, #0a1a0a, #0f2e0f)",
        type: "Enterprise App",
        screenshot: null,
        isCode: true,
        isExperience: true,
        company: "Spikewell · SDE Intern",
        period: "Jan 2025 – Feb 2026",
        codeLink: "https://github.com/asutosh-panigrahi",
      },
    ],
  },
};

/* ── STATE ── */
let currentMode = "designer";

/* ── DOM REFS ── */
const body         = document.body;
const togglePill   = document.getElementById("togglePill");
const labelDesign  = document.getElementById("labelDesign");
const labelDev     = document.getElementById("labelDev");
const modeToggle   = document.getElementById("modeToggle");
const logoRole     = document.getElementById("logoRole");
const badgeText    = document.getElementById("badgeText");
const heroTagline  = document.getElementById("heroTagline");
const heroSub      = document.getElementById("heroSub");
const aboutAccent  = document.getElementById("aboutAccent");
const aboutPara1   = document.getElementById("aboutPara1");
const aboutPara2   = document.getElementById("aboutPara2");
const aboutTags    = document.getElementById("aboutTags");
const floatBadge   = document.getElementById("floatBadge");
const skillsGrid   = document.getElementById("skillsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const cardTitle    = document.getElementById("cardTitle");
const cardBody     = document.getElementById("cardBody");
const nav          = document.getElementById("nav");
const resumeBtn    = document.getElementById("resumeBtn");
const resumeLabel  = document.getElementById("resumeLabel");

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  renderMode("designer");
  positionTogglePill("designer");
  initCursor();
  initScrollReveal();
  initNav();
  initModal();
  initContactForm();
  initJourneyMap();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ══════════════════════════════════════════
   HOLOGRAPHIC PIRATE JOURNEY MAP
══════════════════════════════════════════ */
function initJourneyMap() {
  const canvas  = document.getElementById("mapCanvas");
  const tooltip = document.getElementById("mapTooltip");
  if (!canvas) return;

  const DPR = window.devicePixelRatio || 1;
  let W, H, animFrame, tick = 0;

  function resize() {
    const wrap = canvas.parentElement;
    W = wrap.clientWidth;
    H = Math.max(440, Math.min(580, W * 0.48));
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width  = W + "px";
    canvas.style.height = H + "px";
  }

  /* ── PATH (winding pirate route) ── */
  function getPath() {
    return [
      [0.04,0.82],[0.10,0.72],[0.15,0.60],[0.13,0.45],
      [0.20,0.35],[0.30,0.28],[0.38,0.38],[0.42,0.52],
      [0.50,0.58],[0.58,0.48],[0.62,0.33],[0.72,0.25],
      [0.80,0.32],[0.85,0.48],[0.92,0.55],[0.96,0.18],
    ].map(([px,py]) => [px*W, py*H]);
  }

  /* Even subdivision */
  function subdividePath(pts, N) {
    const segs = [];
    let total = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const dx = pts[i+1][0]-pts[i][0], dy = pts[i+1][1]-pts[i][1];
      const len = Math.sqrt(dx*dx+dy*dy);
      segs.push({x0:pts[i][0],y0:pts[i][1],x1:pts[i+1][0],y1:pts[i+1][1],len,cum:total});
      total += len;
    }
    const result = [];
    for (let i = 0; i <= N; i++) {
      const t = (i/N)*total;
      let seg = segs[segs.length-1];
      for (const s of segs) { if (s.cum+s.len >= t) { seg=s; break; } }
      const r = seg.len > 0 ? (t-seg.cum)/seg.len : 0;
      result.push([seg.x0+r*(seg.x1-seg.x0), seg.y0+r*(seg.y1-seg.y0)]);
    }
    return result;
  }

  const TOTAL_DASHES = 100;
  const BIRTH_YEAR   = 2003;
  const CURRENT_YEAR = 2026;
  const CURRENT_DASH = Math.min(CURRENT_YEAR - BIRTH_YEAR, TOTAL_DASHES - 1);
  let hoveredDash = null;

  function dashYear(i) { return BIRTH_YEAR + i; }
  function eventForDash(i) {
    return JOURNEY_EVENTS.find(e => e.year === dashYear(i)) || null;
  }

  /* ── HOLOGRAPHIC SCAN LINE ── */
  function drawHoloScan(ctx, t) {
    const y = ((t * 0.4) % H);
    const grad = ctx.createLinearGradient(0, y-30, 0, y+30);
    grad.addColorStop(0,   "rgba(0,245,255,0)");
    grad.addColorStop(0.5, "rgba(0,245,255,0.04)");
    grad.addColorStop(1,   "rgba(0,245,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, y-30, W, 60);
  }

  /* ── HOLOGRAPHIC GRID ── */
  function drawHoloGrid(ctx, t) {
    const pulse = 0.03 + 0.015 * Math.sin(t * 0.02);
    ctx.save();
    ctx.strokeStyle = `rgba(0,245,255,${pulse})`;
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += 50) {
      ctx.globalAlpha = 0.4 + 0.3 * Math.sin(t*0.015 + x*0.05);
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke();
    }
    for (let y = 0; y < H; y += 50) {
      ctx.globalAlpha = 0.4 + 0.3 * Math.sin(t*0.015 + y*0.05);
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke();
    }
    ctx.restore();
  }

  /* ── HOLOGRAPHIC ISLAND ── */
  function drawIsland(ctx, cx, cy, rx, ry, t) {
    ctx.save();
    const pulse = 0.5 + 0.12 * Math.sin(t * 0.03 + cx);
    // Outer glow ring
    const outerGrad = ctx.createRadialGradient(cx, cy, rx*0.5, cx, cy, rx*1.6);
    outerGrad.addColorStop(0, `rgba(0,255,120,${0.08 * pulse})`);
    outerGrad.addColorStop(1, "rgba(0,255,120,0)");
    ctx.fillStyle = outerGrad;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx*1.6, ry*1.6, 0, 0, Math.PI*2); ctx.fill();

    // Island body — dark holographic teal
    const bodyGrad = ctx.createRadialGradient(cx, cy-ry*0.2, 0, cx, cy, Math.max(rx,ry));
    bodyGrad.addColorStop(0, `rgba(0,60,40,${0.85 * pulse})`);
    bodyGrad.addColorStop(1, `rgba(0,25,20,${0.7 * pulse})`);
    ctx.fillStyle = bodyGrad;
    ctx.shadowColor = `rgba(0,255,150,${0.3 * pulse})`;
    ctx.shadowBlur  = 20;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2); ctx.fill();

    // Glowing shore edge
    ctx.strokeStyle = `rgba(0,255,150,${0.4 * pulse})`;
    ctx.lineWidth   = 2;
    ctx.stroke();

    // Scan line on island
    const scanY = cy + ry * Math.sin(t * 0.04);
    const sg = ctx.createLinearGradient(cx-rx, scanY, cx+rx, scanY);
    sg.addColorStop(0,   "rgba(0,255,150,0)");
    sg.addColorStop(0.5, `rgba(0,255,150,${0.15 * pulse})`);
    sg.addColorStop(1,   "rgba(0,255,150,0)");
    ctx.fillStyle = sg;
    ctx.fillRect(cx-rx, scanY-3, rx*2, 6);
    ctx.restore();
  }

  /* ── HOLOGRAPHIC COMPASS ── */
  function drawCompass(ctx, cx, cy, r, t) {
    ctx.save();
    const rot   = t * 0.008;
    const pulse = 0.5 + 0.25 * Math.sin(t * 0.04);
    ctx.translate(cx, cy);

    // Outer glow halo
    const halo = ctx.createRadialGradient(0, 0, r*0.8, 0, 0, r*1.5);
    halo.addColorStop(0, `rgba(0,245,255,${0.12*pulse})`);
    halo.addColorStop(1, "rgba(0,245,255,0)");
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(0, 0, r*1.5, 0, Math.PI*2); ctx.fill();

    // Rings
    [r, r*0.65, r*0.3].forEach((rad, i) => {
      ctx.beginPath();
      ctx.arc(0, 0, rad, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(0,245,255,${(0.6 - i*0.15) * pulse})`;
      ctx.lineWidth   = i === 0 ? 1.5 : 0.8;
      ctx.stroke();
    });

    // Rotating tick marks
    ctx.rotate(rot);
    for (let a = 0; a < 360; a += 15) {
      const rad = a * Math.PI / 180;
      const inner = a % 90 === 0 ? r*0.55 : a % 45 === 0 ? r*0.6 : r*0.7;
      ctx.beginPath();
      ctx.moveTo(Math.cos(rad)*inner, Math.sin(rad)*inner);
      ctx.lineTo(Math.cos(rad)*r, Math.sin(rad)*r);
      ctx.strokeStyle = `rgba(0,245,255,${a % 90 === 0 ? 0.9 : 0.3})`;
      ctx.lineWidth   = a % 90 === 0 ? 1.5 : 0.5;
      ctx.stroke();
    }
    ctx.rotate(-rot);

    // Cardinal arrows (N pulsing)
    const arrowPulse = 0.8 + 0.2 * Math.sin(t * 0.06);
    ctx.fillStyle   = `rgba(0,245,255,${arrowPulse})`;
    ctx.shadowColor = "#00f5ff";
    ctx.shadowBlur  = 10;

    // N arrow
    ctx.beginPath();
    ctx.moveTo(0, -r*0.55); ctx.lineTo(5, -r*0.2); ctx.lineTo(-5, -r*0.2);
    ctx.closePath(); ctx.fill();
    // S arrow (dimmer)
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.moveTo(0, r*0.55); ctx.lineTo(5, r*0.2); ctx.lineTo(-5, r*0.2);
    ctx.closePath(); ctx.fill();
    ctx.globalAlpha = 1;

    // Labels
    ctx.font = "bold 10px Poppins";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.shadowBlur = 8;
    ctx.fillStyle  = `rgba(0,245,255,${arrowPulse})`;
    ctx.fillText("N", 0, -r-10);
    ctx.globalAlpha = 0.5;
    ctx.fillText("S", 0, r+10);
    ctx.fillText("W", -r-10, 0);
    ctx.fillText("E",  r+10, 0);
    ctx.restore();
  }

  /* ── DRAW HOLOGRAPHIC PATH GLOW ── */
  function drawPathGlow(ctx, pts, t) {
    const pulse = 0.08 + 0.04 * Math.sin(t * 0.03);
    // Wide soft glow
    ctx.save();
    ctx.shadowColor = "rgba(0,245,255,0.5)";
    ctx.shadowBlur  = 40;
    ctx.strokeStyle = `rgba(0,245,255,${pulse})`;
    ctx.lineWidth   = 12;
    ctx.lineCap     = "round";
    ctx.lineJoin    = "round";
    ctx.beginPath();
    pts.forEach(([x,y], i) => i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y));
    ctx.stroke();
    ctx.restore();

    // Tight core glow
    ctx.save();
    ctx.shadowColor = "#00f5ff";
    ctx.shadowBlur  = 12;
    ctx.strokeStyle = `rgba(180,255,255,${0.15 + 0.08*Math.sin(t*0.05)})`;
    ctx.lineWidth   = 3;
    ctx.beginPath();
    pts.forEach(([x,y], i) => i===0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y));
    ctx.stroke();
    ctx.restore();
  }

  /* ── DRAW DASHES ── */
  function drawDashes(ctx, dashes, t) {
    for (let i = 0; i < TOTAL_DASHES; i++) {
      const [x1,y1] = dashes[i];
      const [x2,y2] = dashes[i+1];
      const isPast   = i <= CURRENT_DASH;
      const isHov    = i === hoveredDash;
      const ev       = eventForDash(i);

      const dx = x2-x1, dy = y2-y1;
      const len = Math.sqrt(dx*dx+dy*dy);
      const nx = dx/len, ny = dy/len;
      const gap = 0.32;
      const sx = x1+nx*len*gap*0.5, sy = y1+ny*len*gap*0.5;
      const ex = x2-nx*len*gap*0.5, ey = y2-ny*len*gap*0.5;
      const mx = (sx+ex)/2, my = (sy+ey)/2;

      ctx.save();

      if (isPast) {
        // Holographic cyan — animated shimmer
        const shimmer = 0.7 + 0.3 * Math.sin(t * 0.06 + i * 0.2);
        if (isHov) {
          const hc = ev ? ev.color : "#00f5ff";
          ctx.shadowColor = hc;
          ctx.shadowBlur  = 28;
          ctx.strokeStyle = hc;
          ctx.lineWidth   = 5;
        } else if (ev) {
          ctx.shadowColor = ev.color;
          ctx.shadowBlur  = 16;
          ctx.strokeStyle = ev.color;
          ctx.lineWidth   = 3.5;
          ctx.globalAlpha = shimmer;
        } else {
          // Chromatic shift: slight hue variation per dash
          const hue = 180 + 15 * Math.sin(i * 0.3 + t * 0.02);
          ctx.strokeStyle = `hsl(${hue},100%,${55 + 20*shimmer}%)`;
          ctx.shadowColor = `hsl(${hue},100%,70%)`;
          ctx.shadowBlur  = 10;
          ctx.lineWidth   = 2.5;
          ctx.globalAlpha = 0.6 + 0.4 * shimmer;
        }
      } else {
        // Future: ghostly, very dim, no detail
        ctx.strokeStyle = "rgba(0,245,255,0.06)";
        ctx.lineWidth   = 1;
        ctx.setLineDash([2, 5]);
        ctx.globalAlpha = 0.4;
      }

      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
      ctx.restore();

      /* Event node */
      if (ev && isPast) {
        const nodePulse = 0.7 + 0.3 * Math.sin(t * 0.07 + i);
        ctx.save();
        // Outer ring pulse
        ctx.beginPath();
        ctx.arc(mx, my, (isHov ? 16 : 11) * nodePulse, 0, Math.PI*2);
        ctx.strokeStyle = ev.color;
        ctx.globalAlpha = 0.2 * nodePulse;
        ctx.lineWidth   = 1;
        ctx.stroke();
        // Main dot
        ctx.beginPath();
        ctx.arc(mx, my, isHov ? 8 : 5.5, 0, Math.PI*2);
        ctx.fillStyle   = ev.color;
        ctx.shadowColor = ev.color;
        ctx.shadowBlur  = isHov ? 30 : 18;
        ctx.globalAlpha = nodePulse;
        ctx.fill();
        // Crosshair lines (holographic detail)
        ctx.strokeStyle = ev.color;
        ctx.lineWidth   = 0.5;
        ctx.globalAlpha = 0.4 * nodePulse;
        const cr = isHov ? 14 : 10;
        ctx.beginPath();
        ctx.moveTo(mx-cr, my); ctx.lineTo(mx+cr, my);
        ctx.moveTo(mx, my-cr); ctx.lineTo(mx, my+cr);
        ctx.stroke();
        ctx.restore();

        // Icon
        ctx.save();
        ctx.font = `${isHov ? 17 : 13}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.globalAlpha = nodePulse;
        ctx.shadowColor = ev.color;
        ctx.shadowBlur  = 12;
        ctx.fillStyle   = "#fff";
        ctx.fillText(ev.icon, mx, my - (isHov ? 13 : 9));
        ctx.restore();
      }
    }
  }

  /* ── FLYING PARTICLE TRAIL ── */
  function drawParticleTrail(ctx, dashes, t) {
    const trailLen = 6;
    for (let k = 0; k < trailLen; k++) {
      const offset = (t * 0.15 + k * 3) % CURRENT_DASH;
      const idx    = Math.floor(offset);
      if (idx >= dashes.length - 1) continue;
      const frac = offset - idx;
      const [x1,y1] = dashes[idx];
      const [x2,y2] = dashes[idx+1];
      const px = x1 + (x2-x1)*frac;
      const py = y1 + (y2-y1)*frac;
      const alpha = (1 - k/trailLen) * 0.8;
      const size  = (1 - k/trailLen) * 4;
      ctx.save();
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI*2);
      ctx.fillStyle   = "#00f5ff";
      ctx.globalAlpha = alpha;
      ctx.shadowColor = "#00f5ff";
      ctx.shadowBlur  = 16;
      ctx.fill();
      ctx.restore();
    }
  }

  /* ── MAIN DRAW (animated) ── */
  function drawMap() {
    const ctx = canvas.getContext("2d");
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, W, H);

    /* Deep space ocean */
    const bg = ctx.createRadialGradient(W*0.5, H*0.4, 0, W*0.5, H*0.5, W*0.9);
    bg.addColorStop(0,   "#060e1f");
    bg.addColorStop(0.5, "#030b18");
    bg.addColorStop(1,   "#010610");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    /* Starfield */
    drawStars(ctx, tick);

    /* Holographic grid */
    drawHoloGrid(ctx, tick);

    /* Scan line sweep */
    drawHoloScan(ctx, tick);

    const pts    = getPath();
    const dashes = subdividePath(pts, TOTAL_DASHES);

    /* Islands */
    drawIsland(ctx, W*0.22, H*0.68, 55, 38, tick);
    drawIsland(ctx, W*0.55, H*0.75, 38, 26, tick + 100);
    drawIsland(ctx, W*0.76, H*0.65, 48, 30, tick + 200);
    drawIsland(ctx, W*0.40, H*0.18, 32, 20, tick + 300);

    /* Path glow behind dashes */
    drawPathGlow(ctx, pts, tick);

    /* Dashes */
    drawDashes(ctx, dashes, tick);

    /* Animated particle along path */
    drawParticleTrail(ctx, dashes, tick);

    /* Compass */
    drawCompass(ctx, W*0.88, H*0.82, 42, tick);

    /* Ship at current position */
    const [sx2, sy2] = dashes[CURRENT_DASH];
    const shipBob = Math.sin(tick * 0.05) * 3;
    ctx.save();
    ctx.font = "22px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "#00f5ff";
    ctx.shadowBlur  = 28;
    ctx.fillText("🏴‍☠️", sx2, sy2 - 16 + shipBob);
    ctx.restore();

    /* Anchor at start */
    const [ax, ay] = dashes[0];
    ctx.save();
    ctx.font = "16px serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.shadowColor = "#00f5ff"; ctx.shadowBlur = 14;
    ctx.fillText("⚓", ax, ay);
    ctx.restore();

    /* Skull at end */
    const [endX, endY] = dashes[TOTAL_DASHES];
    const skullPulse = 0.6 + 0.4 * Math.sin(tick * 0.04);
    ctx.save();
    ctx.font = "26px serif";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.shadowColor = `rgba(255,50,50,${skullPulse})`;
    ctx.shadowBlur  = 30;
    ctx.globalAlpha = 0.5 + 0.2 * skullPulse;
    ctx.fillText("☠️", endX, endY);
    ctx.restore();

    /* "UNCHARTED" label over future section */
    const futureStartDash = CURRENT_DASH + 3;
    if (futureStartDash < dashes.length - 1) {
      const [fx, fy] = dashes[Math.min(futureStartDash + 20, dashes.length - 2)];
      const fogAlpha = 0.25 + 0.12 * Math.sin(tick * 0.03);
      ctx.save();
      ctx.font = "bold 9px Poppins";
      ctx.textAlign = "center";
      ctx.letterSpacing = "0.15em";
      ctx.fillStyle   = `rgba(0,245,255,${fogAlpha})`;
      ctx.shadowColor = "#00f5ff";
      ctx.shadowBlur  = 8;
      ctx.fillText("⚠ UNCHARTED WATERS ⚠", fx, fy - 20);
      ctx.restore();
    }

    /* Year labels on past events only */
    JOURNEY_EVENTS.slice(0, -1).forEach(ev => {
      const dashIdx = ev.year - BIRTH_YEAR;
      if (dashIdx < 0 || dashIdx > CURRENT_DASH || dashIdx >= dashes.length) return;
      const [dx2, dy2] = dashes[dashIdx];
      const lp = 0.6 + 0.2 * Math.sin(tick * 0.04 + dashIdx);
      ctx.save();
      ctx.font = "600 8px Poppins";
      ctx.textAlign = "center";
      ctx.fillStyle = ev.color;
      ctx.globalAlpha = lp;
      ctx.shadowColor = ev.color;
      ctx.shadowBlur  = 6;
      ctx.fillText(ev.year, dx2, dy2 + 20);
      ctx.restore();
    });
  }

  /* ── STARFIELD ── */
  const STARS = Array.from({length: 80}, () => ({
    x: Math.random(), y: Math.random(),
    r: 0.3 + Math.random() * 1.2,
    phase: Math.random() * Math.PI * 2,
    speed: 0.01 + Math.random() * 0.04,
  }));
  function drawStars(ctx, t) {
    STARS.forEach(s => {
      const alpha = 0.2 + 0.3 * Math.sin(t * s.speed + s.phase);
      ctx.save();
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI*2);
      ctx.fillStyle   = `rgba(180,240,255,${alpha})`;
      ctx.shadowColor = "#00f5ff";
      ctx.shadowBlur  = 4;
      ctx.fill();
      ctx.restore();
    });
  }

  /* ── MOUSE INTERACTION ── */
  function getDashUnderMouse(mx, my) {
    const pts    = getPath();
    const dashes = subdividePath(pts, TOTAL_DASHES);
    let best = -1, bestDist = 24;
    for (let i = 0; i < TOTAL_DASHES; i++) {
      const [x1,y1] = dashes[i], [x2,y2] = dashes[i+1];
      const cx2 = (x1+x2)/2, cy2 = (y1+y2)/2;
      const d = Math.sqrt((mx-cx2)**2+(my-cy2)**2);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    return best;
  }

  canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const dash = getDashUnderMouse(mx, my);
    hoveredDash = dash;

    if (dash >= 0) {
      const ev     = eventForDash(dash);
      const yr     = dashYear(dash);
      const isPast = dash <= CURRENT_DASH;

      let html;
      if (ev && isPast) {
        html = `<div class="tt-event">
          <span class="tt-icon">${ev.icon}</span>
          <div>
            <div class="tt-title">${ev.label}</div>
            <div class="tt-year">${yr} · Age ${yr - BIRTH_YEAR}</div>
            <div class="tt-desc">${ev.desc}</div>
          </div>
        </div>`;
      } else if (isPast) {
        html = `<div class="tt-plain">
          <span class="tt-yr">${yr}</span>
          <span class="tt-age">Sailed ✓</span>
        </div>`;
      } else {
        html = `<div class="tt-uncharted">
          <span class="tt-unc-icon">🌊</span>
          <span class="tt-unc-msg">Uncharted waters!! Writer is still cooking the story…</span>
        </div>`;
      }

      tooltip.innerHTML = html;
      tooltip.classList.add("visible");
      let tx = mx + 18, ty = my - 20;
      if (tx + 230 > W) tx = mx - 240;
      if (ty < 0) ty = 10;
      tooltip.style.left = tx + "px";
      tooltip.style.top  = ty + "px";
    } else {
      tooltip.classList.remove("visible");
    }
  });

  canvas.addEventListener("mouseleave", () => {
    hoveredDash = null;
    tooltip.classList.remove("visible");
  });

  /* ── ANIMATION LOOP ── */
  function loop() {
    tick++;
    resize();
    drawMap();
    animFrame = requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  resize();
  loop();
}

/* ══════════════════════════════════════════
   MODE TOGGLE
══════════════════════════════════════════ */
modeToggle.addEventListener("click", () => {
  currentMode = currentMode === "designer" ? "developer" : "designer";
  triggerModeSwitch(currentMode);
});

function triggerModeSwitch(mode) {
  const flash = document.createElement("div");
  flash.className = "mode-flash";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 600);
  positionTogglePill(mode);
  resumeBtn.classList.add("switching");
  setTimeout(() => { renderMode(mode); resumeBtn.classList.remove("switching"); }, 200);
}

function positionTogglePill(mode) {
  const isDesign  = mode === "designer";
  const leftRect  = labelDesign.getBoundingClientRect();
  const rightRect = labelDev.getBoundingClientRect();
  const trackRect = togglePill.parentElement.getBoundingClientRect();
  if (isDesign) {
    togglePill.style.left  = (leftRect.left - trackRect.left - 4) + "px";
    togglePill.style.width = (leftRect.width + 8) + "px";
    labelDesign.classList.add("active");
    labelDev.classList.remove("active");
  } else {
    togglePill.style.left  = (rightRect.left - trackRect.left - 4) + "px";
    togglePill.style.width = (rightRect.width + 8) + "px";
    labelDev.classList.add("active");
    labelDesign.classList.remove("active");
  }
}
window.addEventListener("resize", () => positionTogglePill(currentMode));
window.addEventListener("load",   () => positionTogglePill(currentMode));

/* ══════════════════════════════════════════
   RENDER MODE
══════════════════════════════════════════ */
function renderMode(mode) {
  const d = DATA[mode];
  body.className      = mode === "designer" ? "mode-designer" : "mode-dev";
  logoRole.textContent = d.logoRole;
  resumeBtn.href       = "assets/" + (mode === "designer" ? "Asutosh_Panigrahi_UX_Resume.pdf" : "Asutosh_Panigrahi_Dev_Resume.pdf");
  resumeBtn.download   = mode === "designer" ? "Asutosh_UX_Resume.pdf" : "Asutosh_Dev_Resume.pdf";
  resumeLabel.textContent = d.resume.label;
  badgeText.textContent   = d.badge;
  heroTagline.innerHTML   = d.tagline;
  heroSub.textContent     = d.sub;
  cardTitle.textContent   = d.cardTitle;
  cardBody.innerHTML      = d.cardType === "figma" ? figmaCardHTML() : codeCardHTML();
  aboutAccent.textContent = d.aboutAccent;
  aboutPara1.textContent  = d.aboutP1;
  aboutPara2.textContent  = d.aboutP2;
  floatBadge.textContent  = mode === "designer" ? "✦ Available for work" : "⚡ Open to roles";
  aboutTags.innerHTML     = d.aboutTags.map(t => `<span>${t}</span>`).join("");
  renderSkills(d.skills);
  renderProjects(d.projects, mode);
  setTimeout(initScrollReveal, 100);
}

/* ══════════════════════════════════════════
   HERO CARD
══════════════════════════════════════════ */
function figmaCardHTML() {
  return `<div class="frame-preview">
    <div class="frame-el frame-el-1"></div>
    <div class="frame-el frame-el-2"></div>
    <div class="frame-el frame-el-3"></div>
    <div class="frame-el frame-el-4"></div>
  </div>`;
}
function codeCardHTML() {
  return `<div class="code-preview">
    <span class="code-line"><span class="code-key">const</span> <span class="code-val">Portfolio</span> <span class="code-bracket">= () => {</span></span>
    <span class="code-line">  <span class="code-key">return</span> <span class="code-bracket">(</span></span>
    <span class="code-line">    <span class="code-bracket">&lt;</span><span class="code-val">main</span><span class="code-bracket">&gt;</span></span>
    <span class="code-line">      <span class="code-bracket">&lt;</span><span class="code-val">Hero</span> <span class="code-key">mode</span><span class="code-bracket">=</span><span class="code-str">"dev"</span> <span class="code-bracket">/&gt;</span></span>
    <span class="code-line">      <span class="code-bracket">&lt;</span><span class="code-val">Projects</span> <span class="code-bracket">/&gt;</span></span>
    <span class="code-line">    <span class="code-bracket">&lt;/</span><span class="code-val">main</span><span class="code-bracket">&gt;</span></span>
    <span class="code-line">  <span class="code-bracket">);</span></span>
    <span class="code-line"><span class="code-bracket">};</span></span>
  </div>`;
}

/* ══════════════════════════════════════════
   RENDER SKILLS
══════════════════════════════════════════ */
function renderSkills(skills) {
  skillsGrid.innerHTML = skills.map((s, i) => `
    <div class="skill-card reveal" style="transition-delay:${i * 0.07}s">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-level"><div class="skill-fill" style="width:${s.level*100}%"></div></div>
    </div>`).join("");
}

/* ══════════════════════════════════════════
   RENDER PROJECTS (new card design)
══════════════════════════════════════════ */
function renderProjects(projects, mode) {
  projectsGrid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal" style="transition-delay:${i * 0.1}s" data-index="${i}" data-mode="${mode}">
      <div class="project-thumb" style="background:${p.bgColor}">
        ${p.screenshot
          ? `<img src="${p.screenshot}" alt="${p.title}" class="project-screenshot"/>`
          : `<div class="project-thumb-icon-wrap">
               <span class="project-thumb-icon">${p.icon}</span>
             </div>`
        }
        <div class="project-thumb-label">${p.type}</div>
        ${p.isExperience ? `<div class="project-exp-badge">💼 Experience</div>` : ""}
        <div class="project-hover-overlay">
          <span>${p.isCode ? "View on GitHub →" : (p.figmaLink ? "View in Figma →" : "Learn More →")}</span>
        </div>
      </div>
      <div class="project-info">
        ${p.isExperience ? `<div class="project-company">${p.company} <span class="project-period">${p.period}</span></div>` : ""}
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc.slice(0, 110)}…</div>
        <div class="project-footer">
          <div class="project-tags">${p.tags.slice(0,3).map(t => `<span>${t}</span>`).join("")}</div>
          <span class="project-cta-icon">${p.isCode ? "🔗" : "🎨"}</span>
        </div>
      </div>
    </div>`).join("");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const proj = DATA[card.dataset.mode].projects[parseInt(card.dataset.index)];
      openModal(proj);
    });
  });
}

/* ══════════════════════════════════════════
   MODAL (expanded project detail)
══════════════════════════════════════════ */
const overlay           = document.getElementById("modalOverlay");
const modalTitle        = document.getElementById("modalTitle");
const modalTag          = document.getElementById("modalTag");
const modalIframe       = document.getElementById("modalIframe");
const modalIframeWrap   = document.getElementById("modalIframeWrap");
const modalBodyWrap     = document.getElementById("modalBodyWrap");
const modalScreenshotWrap = document.getElementById("modalScreenshotWrap");
const modalFullDesc     = document.getElementById("modalFullDesc");
const modalTechTags     = document.getElementById("modalTechTags");
const modalLink         = document.getElementById("modalLink");

function openModal(p) {
  modalTitle.textContent    = p.title;
  modalTag.textContent      = p.type;
  modalFullDesc.textContent = p.desc;
  modalTechTags.innerHTML   = p.tags.map(t => `<span>${t}</span>`).join("");

  // Screenshot
  if (p.screenshot) {
    modalScreenshotWrap.innerHTML = `<img src="${p.screenshot}" alt="${p.title}" style="width:100%;border-radius:8px;"/>`;
  } else {
    modalScreenshotWrap.innerHTML = `
      <div class="modal-no-screenshot" style="background:${p.bgColor}">
        <span style="font-size:3.5rem">${p.icon}</span>
        <p>Add a screenshot to <code>assets/screenshots/${p.title.replace(/\s+/g,'-').toLowerCase()}.png</code></p>
      </div>`;
  }

  // Figma embed vs GitHub
  if (!p.isCode && p.figmaEmbed && !p.figmaEmbed.includes("REPLACE")) {
    modalIframeWrap.style.display = "block";
    modalBodyWrap.style.display   = "none";
    modalIframe.src = p.figmaEmbed;
    modalLink.href  = p.figmaLink;
    modalLink.innerHTML = `Open in Figma <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  } else {
    modalIframeWrap.style.display = "none";
    modalBodyWrap.style.display   = "grid";
    const link = p.codeLink || p.figmaLink || "#";
    modalLink.href = link;
    modalLink.innerHTML = p.isCode
      ? `View on GitHub <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
      : `Open Project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function initModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { modalIframe.src = ""; }, 400);
}

/* ══════════════════════════════════════════
   CURSOR / SCROLL / NAV / CONTACT
══════════════════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const trail  = document.getElementById("cursorTrail");
  let tx = 0, ty = 0, cx = 0, cy = 0;
  document.addEventListener("mousemove", e => {
    tx = e.clientX; ty = e.clientY;
    cursor.style.left = tx + "px"; cursor.style.top = ty + "px";
  });
  function loop() { cx += (tx-cx)*0.15; cy += (ty-cy)*0.15; trail.style.left = cx+"px"; trail.style.top = cy+"px"; requestAnimationFrame(loop); }
  loop();
}

function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal").forEach(el => { el.classList.remove("visible"); obs.observe(el); });
}

function initNav() {
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 60));
}

function initContactForm() {
  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const btn = e.target.querySelector(".btn-send");
    btn.textContent = "Sent! ✓";
    btn.style.background = "#00c896";
    setTimeout(() => {
      btn.innerHTML = `Send Message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
      btn.style.background = ""; e.target.reset();
    }, 3000);
  });
}
