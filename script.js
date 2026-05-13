const sections = [...document.querySelectorAll(".page")];
const navLinks = [...document.querySelectorAll(".top-nav a")];
const dotLinks = [...document.querySelectorAll(".page-dots a")];
const meter = document.querySelector(".scroll-meter span");
const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

const trackContent = {
  revitalize: {
    tag: "Line One",
    title: "从群众足球到乡村振兴的五个入口",
    body:
      "“村超”通过群众参与聚集人气，通过民族文化形成特色，通过文旅消费带动产业，通过数字传播扩大影响，通过多主体参与提升基层治理能力。",
    points: ["产业振兴", "文化振兴", "人才回流", "组织协同", "形象提升"],
  },
  reconstruction: {
    tag: "Line Two",
    title: "从受灾赛事到民族地区恢复能力的重建链条",
    body:
      "洪涝灾害后，民族体育赛事的重建不能只理解为重新开赛，而要同时完成场地设施修复、公共服务恢复、组织体系重建、文化场景回归、市场主体复业和社会信心修复。",
    points: ["空间修复", "秩序恢复", "产业复业", "文化回归", "信心重建", "长期韧性"],
  },
};

const rebuildContent = {
  space: {
    title: "空间修复：球场成为重建进度的公共信号",
    body:
      "“村超”球场承载比赛、展演、游客集聚和夜间消费。灾后球场修复不只是设施修复，也是在向村民、游客和商户传递“榕江正在恢复”的确定性。",
  },
  industry: {
    title: "产业复苏：以赛事重启恢复人流和消费场景",
    body:
      "餐饮、住宿、摊位、农特产品、非遗文创和直播带货高度依赖人流。赛事重启为游客重返提供理由，为商户复业提供预期，也为产品销售重新搭建场景。",
  },
  mind: {
    title: "心理重建：把灾后叙事转化为共同体叙事",
    body:
      "感恩巡游、文艺演出、民族歌舞和群众参与，使灾后恢复不只是“把空间修好”，也在修复不确定感、焦虑感和地方发展信心。",
  },
  govern: {
    title: "协同治理：政府兜底、群众自治、市场参与、社会互助",
    body:
      "灾后重建需要基础设施、公共安全、市场秩序、交通组织、传播回应等多线协同。“村+”模式把多主体放进同一个公共场景，形成“以赛促建、以建兴赛”的恢复路径。",
  },
};

const mechanismContent = {
  villager: {
    title: "村民主体机制：从“被治理对象”到“重建行动者”",
    body:
      "村民既是球员、观众、志愿者，也是摊主、主播、非遗展演者和民宿经营者。赛事情感归属和利益关联，使其更愿意参与清淤、复业、接待、宣传和秩序维护。",
    list: ["核心主体：村民、球员、摊主、主播、非遗传承人", "作用逻辑：共同参与形成内生动力，避免外来项目悬浮", "振兴指向：组织振兴与人才振兴"],
  },
  culture: {
    title: "文化认同机制：以民族文化修复灾后共同体",
    body:
      "足球竞技与侗族大歌、苗族芦笙舞、民族服饰、地方美食和非遗展演共同出现，使灾后重启不是单纯恢复比赛，而是恢复能够表达地方身份和共同体情感的文化场域。",
    list: ["核心主体：村寨、民族文化传承人、文艺团队", "作用逻辑：民族文化符号形成地方品牌和灾后情感修复", "振兴指向：文化振兴与共同体意识"],
  },
  industry: {
    title: "产业转化机制：从赛事流量到县域“超经济”",
    body:
      "“村超”的经济意义不在门票收入，而在于开放观赛后游客在餐饮、住宿、交通、购物、娱乐、研学、电商等环节形成综合消费。",
    list: ["核心主体：商户、企业、合作社、电商平台", "作用逻辑：将赛事流量转化为吃住行游购娱综合消费", "振兴指向：产业振兴、就业扩大和市场主体增长"],
  },
  digital: {
    title: "数字传播机制：从“被看见”到“可持续被连接”",
    body:
      "榕江本土直播团队和新媒体账号让村民、返乡青年、摊主、球员都可能成为传播者。灾后，这一机制既传播救援需求，也传播复工复产和赛事重启。",
    list: ["核心主体：本土直播团队、新媒体账号、游客 UGC", "作用逻辑：低成本高频传播维持关注和信任", "振兴指向：拓展市场半径，吸引返乡创业和外部资源"],
  },
  governance: {
    title: "协同治理机制：多元主体互补，而非单一主体包办",
    body:
      "政府负责规则、设施、安全、交通、市场秩序和灾后统筹；村民参与组织、志愿服务、经营接待和传播；企业参与品牌开发、电商运营、文旅产品和赞助支持。",
    list: ["核心主体：政府、村民、企业、社会力量", "作用逻辑：政府兜底、群众自治、市场运作、社会互助互补", "振兴指向：治理韧性和灾后恢复效率"],
  },
  ecology: {
    title: "生态韧性机制：把安全发展纳入“村+”模式",
    body:
      "洪水提醒我们，乡村文旅 IP 越火，越需要完善防洪排涝、交通疏导、场馆安全、医疗救援、食品安全、舆情应对和保险机制。",
    list: ["核心主体：政府部门、社区、文旅经营者", "作用逻辑：防灾设施、应急预案与文旅空间改造结合", "振兴指向：生态宜居与安全发展"],
  },
};

const boundaryContent = {
  copy: {
    title: "复制机制，而不是复制名称",
    body:
      "各地应从本地最有群众基础的体育、节庆、手工艺、音乐、饮食或农事活动出发，形成“村BA”“村排”“村跑”“村歌”“村T”等差异化形态。",
    points: ["真实文化", "群众主体", "产业承接", "政府兜底"],
  },
  risk: {
    title: "推广边界：防止过度商业化、同质化与安全风险",
    body:
      "如果企业营销、明星流量和外来资本喧宾夺主，赛事可能从公共文化活动变成消费景观；如果缺乏真实文化基础和群众参与，也容易变成短期招商或表演工程。",
    points: ["过度商业化", "简单模仿", "承载超限", "收益不透明"],
  },
  policy: {
    title: "面向灾后重建的政策建议",
    body:
      "建立“赛事空间+应急空间”一体化规划，并将球场修复、商户复业、农产品供应、交通接驳、住宿安全、网络传播和志愿服务纳入统一恢复清单。",
    points: ["应急空间规划", "灾后恢复清单", "小微主体支持", "数字人才培养", "文化保护规则"],
  },
};

function setActiveLink(id) {
  [...navLinks, ...dotLinks].forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
  });
}

function updateProgress() {
  if (!meter) return;
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
  { threshold: 0.36 },
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll(".reveal").forEach((el) => {
  if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("visible");
});

document.querySelectorAll("[data-count]").forEach((el) => {
  if (el.getBoundingClientRect().top < window.innerHeight) animateCount(el);
});

document.querySelectorAll(".track-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".track-btn").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    const data = trackContent[button.dataset.track];
    document.querySelector("#track-panel").innerHTML = `
      <p class="tag">${data.tag}</p>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <div class="track-keywords" aria-label="主线关键词">
        ${data.points.map((item) => `<span>${item}</span>`).join("")}
      </div>
    `;
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

document.querySelectorAll(".mechanism-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mechanism-btn").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    const data = mechanismContent[button.dataset.mechanism];
    document.querySelector("#mechanism-card").innerHTML = `
      <p class="tag">核心机制</p>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <ul>${data.list.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
  });
});

document.querySelectorAll("[data-boundary]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-boundary]").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    const data = boundaryContent[button.dataset.boundary];
    document.querySelector("#boundary-panel").innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <div class="principle-grid">${data.points.map((item) => `<span>${item}</span>`).join("")}</div>
    `;
  });
});

document
  .querySelectorAll(".thesis-card, .track-panel, .question-stack article, .foundation-grid article, .mechanism-card, .boundary-panel, .rebuild-copy, .rebuild-stats article")
  .forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = (y / rect.height - 0.5) * -4;
      const rotateY = (x / rect.width - 0.5) * 4;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

const sourceToggle = document.querySelector(".source-toggle");
sourceToggle?.addEventListener("click", (event) => {
  const list = document.querySelector(".source-list");
  const open = list.hasAttribute("hidden");
  list.toggleAttribute("hidden", !open);
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

menuToggle?.addEventListener("click", () => {
  const open = !topNav.classList.contains("open");
  topNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

topNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    topNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
