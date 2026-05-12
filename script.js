const sections = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".top-nav a")];
const dotLinks = [...document.querySelectorAll(".page-dots a")];
const meter = document.querySelector(".scroll-meter span");
const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

const modelContent = {
  self: {
    title: "村民自治",
    body:
      "赛事从村寨内部生长出来，村民既是球员、观众，也是组织者和传播者。群众基础让赛事保持“草根感”和高黏性。",
    list: ["自下而上形成参与热情", "村寨荣誉感转化为组织力", "低成本、高参与、强认同"],
  },
  guide: {
    title: "专业指导",
    body:
      "政府与体育部门提供赛程、安全、规则、基础设施等托底服务，让草根赛事保留乡土味的同时具备可持续运行能力。",
    list: ["规则规范与赛事秩序", "公共服务与场地保障", "风险管理和赛事升级"],
  },
  culture: {
    title: "民族文化",
    body:
      "侗族大歌、苗族芦笙舞、民族服饰、村寨礼俗与赛场同频出现，使体育画面具有鲜明的贵州识别度。",
    list: ["非遗展演成为传播内容", "体育流量反哺文化展示", "乡土审美形成差异化记忆"],
  },
  industry: {
    title: "产业转化",
    body:
      "赛事把流量导向旅游、餐饮、住宿、农特产品和品牌合作，形成从公共热度到县域经济的转化链条。",
    list: ["农产品获得新销售场景", "文旅线路被重新组织", "企业合作进入县域平台"],
  },
  governance: {
    title: "基层治理",
    body:
      "大型群众赛事要求多主体协作，也放大了乡村公共事务的组织能力。灾后重建中的联动恢复就是典型检验。",
    list: ["政府、村民、企业协同", "公共服务能力被赛事锻炼", "乡村共同体认同增强"],
  },
};

const factContent = {
  teams: "2026年第四届贵州“村超”在榕江开赛，137支村级球队从田间地头、市井街巷集结。",
  matches: "据公开报道，本届赛事设置422场预选赛，热度不只集中在决赛，而是把更多村寨卷入持续参与。",
  global: "榕江村超也延展为开放交流平台，公开资料提到已有62个国家和地区的球队参与相关交流活动。",
};

const tabContent = {
  football: {
    title: "村超：足球作为最大公约数",
    body:
      "足球门槛低、观看性强、传播画面天然热烈，适合把村寨荣誉、民族展演和游客消费集中到一个公共赛场。",
    points: ["村寨球队", "非遗展演", "文旅消费"],
    coords: [
      ["30%", "38%"],
      ["63%", "28%"],
      ["51%", "66%"],
    ],
  },
  basketball: {
    title: "村BA：篮球连接农闲节庆",
    body:
      "篮球场更紧凑，观众与球员距离近，适合形成“围场观看、即时欢呼、节庆交流”的公共生活氛围。",
    points: ["吃新节传统", "全民围观", "大区联赛"],
    coords: [
      ["34%", "34%"],
      ["62%", "48%"],
      ["45%", "72%"],
    ],
  },
  plus: {
    title: "村+拓展：一地一策的赛事生长",
    body:
      "不同地区可以把排球、龙舟、跑步、民俗竞技等本地优势接入“村+”框架，重点是群众主体、文化符号和产业接口三者同时成立。",
    points: ["本地资源", "群众基础", "产业接口"],
    coords: [
      ["28%", "58%"],
      ["55%", "35%"],
      ["70%", "66%"],
    ],
  },
};

const impactContent = {
  economy: {
    title: "经济发展",
    body:
      "赛事带来游客、消费、农产品曝光和市场主体增长，形成“流量进入县域，收益回到乡土”的转化路径。",
  },
  culture: {
    title: "文化传承",
    body:
      "非遗与民族文化不再只停留在展陈空间，而是在赛事现场和短视频传播中被看见、被参与、被再创作。",
  },
  governance: {
    title: "基层治理",
    body:
      "赛事组织锻炼了村寨协商、志愿服务、公共安全、交通疏导和灾后恢复能力，治理逻辑从管理走向共建。",
  },
  identity: {
    title: "乡村认同",
    body:
      "村寨之间的竞争和助威，让年轻人重新看见家乡的公共舞台，也让外地游客把贵州乡村视作鲜活目的地。",
  },
};

const rebuildContent = {
  relief: {
    title: "应急救援：村超流量变成八方支援的入口",
    body:
      "洪水发生后，救援队伍、援建力量和社会捐助迅速进入榕江。已有的“村超”关注度让灾情更快被看见，也让外部资源更快汇聚到县城恢复中。",
  },
  repair: {
    title: "场地修复：公共空间先恢复，群众信心才有落点",
    body:
      "球场清淤、草坪铺设、设施检修和安全保障同步推进。村超球场不只是比赛场地，更是榕江重新组织公共生活的象征性空间。",
  },
  market: {
    title: "商户复业：把复赛人流导回烟火气",
    body:
      "赛事重启前，周边餐饮住宿商户加速复业。游客回流、订单恢复、农特产品重新进入消费场景，让灾后恢复从基础设施延伸到生计恢复。",
  },
  restart: {
    title: "赛事重启：用一场球赛重新确认榕江还在向前",
    body:
      "7月下旬，“村超”以感恩和雄起为主题回归。球赛、巡游、民族文化展演与县域消费一起构成了灾后振兴的公开表达。",
  },
};

function setActiveLink(id) {
  [...navLinks, ...dotLinks].forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", active);
  });
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;
  meter.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
  document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
}

function animateCount(el) {
  if (el.dataset.done) return;
  el.dataset.done = "true";
  const target = Number(el.dataset.count || 0);
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString("zh-CN");
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      entry.target.querySelectorAll("[data-count]").forEach(animateCount);
      setActiveLink(entry.target.id);
    });
  },
  { threshold: 0.42 },
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll(".reveal").forEach((el) => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) el.classList.add("visible");
});

document.querySelectorAll("[data-count]").forEach((el) => {
  if (el.getBoundingClientRect().top < window.innerHeight) animateCount(el);
});

document.querySelectorAll(".node").forEach((node) => {
  node.addEventListener("click", () => {
    document.querySelectorAll(".node").forEach((item) => item.classList.remove("active"));
    node.classList.add("active");
    const data = modelContent[node.dataset.node];
    const card = document.querySelector("#node-card");
    card.innerHTML = `
      <p class="tag">当前机制</p>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <ul>${data.list.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  });
});

document.querySelectorAll(".fact").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".fact").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#fact-detail").textContent = factContent[button.dataset.fact];
  });
});

document.querySelectorAll(".player").forEach((player) => {
  player.addEventListener("click", () => {
    document.querySelector("#court-pop").textContent = player.dataset.pop;
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const data = tabContent[tab.dataset.tab];
    const points = data.points
      .map((point, index) => {
        const [x, y] = data.coords[index];
        return `<span style="--x: ${x}; --y: ${y}">${point}</span>`;
      })
      .join("");
    document.querySelector("#tab-panel").innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <div class="mini-map">${points}</div>
    `;
  });
});

document.querySelectorAll(".wheel-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".wheel-item").forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
    const data = impactContent[item.dataset.impact];
    document.querySelector("#impact-copy").innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
  });
});

document.querySelectorAll(".rebuild-step").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".rebuild-step").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    const data = rebuildContent[button.dataset.rebuild];
    document.querySelector("#rebuild-copy").innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
  });
});

document.querySelectorAll(".model-card, .story-panel, .tab-panel, .impact-numbers article, .rebuild-copy, .rebuild-stats article").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

document.querySelector(".source-toggle").addEventListener("click", (event) => {
  const list = document.querySelector(".source-list");
  const open = list.hasAttribute("hidden");
  list.toggleAttribute("hidden", !open);
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

menuToggle.addEventListener("click", () => {
  const open = !topNav.classList.contains("open");
  topNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

topNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    topNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
