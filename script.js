const periods = [
  {
    label: "JAN — FEV", month: "Janeiro & fevereiro", number: "01", theme: "Dados, acesso e colaboração",
    items: [
      ["CPE", "Automatização do fluxo de carga", "Aceleramos o atendimento das áreas do Sebrae ao automatizar as cargas de dados das empresas.", "DADOS"],
      ["MULESOFT RPA", "Regularidade fiscal automatizada", "Implantamos robôs que mantêm as certidões federais em dia, com mais agilidade e menos retrabalho.", "AUTOMAÇÃO"],
      ["ZTNA", "Acesso remoto seguro", "Implementamos um novo modelo de acesso remoto, mais seguro que VPN e preparado para o futuro digital.", "SEGURANÇA"],
      ["VARONIS", "Auditoria automática de dados", "Passamos a monitorar e proteger dados estratégicos contra acessos indevidos.", "DADOS"],
      ["SHAREPOINT UTIC 1.0", "Colaboração digital", "Disponibilizamos um ambiente digital único para organizar informações e integrar equipes.", "COLABORAÇÃO"],
      ["SGSI", "Gestão de segurança da informação", "Criamos o primeiro Sistema de Gestão de Segurança da Informação da história do Sebrae.", "SEGURANÇA"],
    ],
  },
  {
    label: "MAR", month: "Março", number: "02", theme: "Inteligência e governança",
    items: [
      ["DW LEME", "Replicação do ambiente", "Garantimos continuidade operacional e inteligência analítica ao replicar, com segurança, o ambiente DW Leme.", "DADOS"],
      ["UGE / NPS", "Implantação da carga do NPS", "Padronizamos e controlamos informações ao implantar a governança de dados na adequação à LGPD.", "GOVERNANÇA"],
      ["IDP", "Governança de dados", "Padronizamos e controlamos informações ao implantar a governança de dados na adequação à LGPD.", "GOVERNANÇA"],
      ["PSMN", "Prêmio Sebrae Mulher de Negócios", "Aumentamos em 50% o número de inscrições após implantar a nova versão da plataforma do prêmio.", "PLATAFORMA"],
    ],
  },
  {
    label: "ABR", month: "Abril", number: "03", theme: "Privacidade e proteção",
    items: [
      ["IDP", "Inteligência digital em privacidade", "Diminuímos o esforço dos DPOs com um sistema próprio de auditoria sobre questões ligadas à LGPD.", "PRIVACIDADE"],
      ["MULESOFT RPA", "Conferência automatizada", "Reduzimos inconsistências e retrabalho contábil ao automatizar as conciliações.", "AUTOMAÇÃO"],
      ["ANTI-DDoS", "Proteção contra ataques", "Aumentamos a disponibilidade dos sistemas com a implantação de proteção Anti-DDoS.", "SEGURANÇA"],
      ["MINDAWARE", "Treinamento de segurança", "Preparamos colaboradores para reconhecer golpes e prevenir riscos de segurança.", "CONSCIENTIZAÇÃO"],
      ["E-MAIL", "Segurança reforçada", "Mitigamos o recebimento de e-mails fraudulentos com o reforço da segurança do correio eletrônico.", "SEGURANÇA"],
    ],
  },
  {
    label: "MAI — JUL", month: "Maio a julho", number: "04", theme: "Infraestrutura que escala",
    items: [
      ["CONECTIVIDADE", "Links de internet", "Ampliamos velocidade e redundância da conectividade com dois novos links de internet.", "INFRAESTRUTURA"],
      ["BASE DE CONHECIMENTO", "Documentação de suporte", "Otimizamos o tempo do suporte técnico especializado com documentação completa de banco de dados.", "OPERAÇÕES"],
      ["COE RPA", "Cultura em automação", "Estimulamos as unidades a automatizar seus processos com o Centro de Excelência em automação.", "AUTOMAÇÃO"],
      ["BACKUP", "Expansão para 1 PB", "Ampliamos para 1.000 terabytes a capacidade de guardar informações e dados do Sebrae.", "INFRAESTRUTURA"],
      ["CLUSTER HCI", "Capacidade ampliada", "Aumentamos a capacidade de processamento das integrações e de registro de atendimentos.", "INFRAESTRUTURA"],
    ],
  },
  {
    label: "AGO — SET", month: "Agosto & setembro", number: "05", theme: "Experiências, impacto e inovação",
    items: [
      ["EMPRETEC", "Dados mais acessíveis", "Aprimoramos a experiência do cliente com notificações nos dashboards para análise de dados.", "EXPERIÊNCIA"],
      ["ESG", "Jornada e Selo ESG", "Impulsionamos a agenda ESG das MPEs: mais de 10 mil empresas atendidas com jornada, diagnóstico e Selo ESG.", "IMPACTO"],
      ["FLUIG", "Automação corporativa", "Fortalecemos a gestão e a automação de processos com a implantação da plataforma corporativa FLUIG.", "AUTOMAÇÃO"],
      ["RECONHECIMENTO", "CIO Destaque 2026", "O gerente de TI do Sebrae NA foi reconhecido entre os principais nomes de cibersegurança no Brasil.", "CIBERSEGURANÇA"],
      ["DESENVOLVIMENTO", "Novo serviço de software", "Reduzimos em até 40% o tempo de entrega da UTIC com perfis especializados em IA e desenvolvimento ágil.", "INOVAÇÃO"],
      ["SEMANA DO FUTURO", "Apresentação de soluções", "Compartilhamos inovação em nível nacional ao apresentar novas soluções na Semana do Futuro.", "INOVAÇÃO"],
      ["SEGURANÇA", "Campanha de conscientização", "Fortalecemos a cultura institucional com uma campanha de conscientização em cibersegurança.", "CIBERSEGURANÇA"],
    ],
  },
  {
    label: "OUT", month: "Outubro", number: "06", theme: "Modernização de ambientes",
    items: [
      ["DATACENTER REGIONAL", "Migração SebraePrev", "Aumentamos a segurança dos dados de previdência ao migrar a infraestrutura do SebraePrev para o datacenter do Sebrae NA.", "INFRAESTRUTURA"],
      ["FOCO", "Servidores e novo DW", "Replicamos e integramos processos estratégicos com os estados, preparando a base para desligar o SAS e integrar mais de 30 sistemas nacionais.", "DADOS"],
    ],
  },
  {
    label: "NOV", month: "Novembro", number: "07", theme: "Novas possibilidades de negócio",
    items: [
      ["AVALIZA", "Horas de aval", "Ampliamos a segurança das operações dos fundos garantidores de crédito com a entrega do sistema de honras de aval.", "SISTEMAS"],
      ["AGENTES DE MERCADO", "Nova versão mobile", "Ampliamos as possibilidades de negócio com uma nova versão mobile integrada ao WhatsApp.", "MOBILIDADE"],
    ],
  },
  {
    label: "DEZ", month: "Dezembro", number: "08", theme: "Processos e prestação de contas",
    items: [
      ["UAC", "Concepções de processos", "Iniciamos uma nova forma de organizar e padronizar processos da UAC, com fluxos de contratos e pesquisa de mercado.", "PROCESSOS"],
      ["CONECTA TECH", "Prestação de contas das UFs", "Consolidamos e demos transparência às entregas nacionais de TI por meio do programa Conecta Tech.", "GOVERNANÇA"],
      ["UCSEBRAE", "Solicitações educacionais", "Automatizamos solicitações de soluções educacionais, reduzindo o tempo e o esforço do time.", "AUTOMAÇÃO"],
      ["PORTFÓLIO", "Framework de análise", "Documentamos a gestão do portfólio de sistemas para identificar sobreposições e apoiar a redução de sistemas.", "ESTRATÉGIA"],
    ],
  },
  {
    label: "CONTÍNUO", month: "Ao longo do ano", number: "09", theme: "Evolução que não para",
    items: [
      ["SISTEMAS", "Evolução contínua", "Ajustes e melhorias constantes para acompanhar as necessidades do Sebrae.", "EVOLUÇÃO"],
      ["ADOBE / FIGMA", "Contratos estratégicos", "Condução de compras e articulação institucional para ferramentas essenciais ao trabalho.", "GESTÃO"],
      ["DESIGN SYSTEM", "Padrões e experiência", "Manutenção e evolução dos padrões de interface e experiência do usuário.", "EXPERIÊNCIA"],
      ["ESCUDO DIGITAL", "Cibersegurança Sebrae", "Colocamos em prática disciplinas de cibersegurança e ampliamos a confiança dos clientes.", "SEGURANÇA"],
      ["SEBRAE CONSULT", "Módulo Cliente Contrata", "Entregamos o módulo “Cliente Contrata” em vários estados.", "SISTEMAS"],
      ["REGULARIDADE FISCAL", "Menos esforço operacional", "Reduzimos em mais de 50% o esforço do processo de regularidade fiscal com robotização.", "AUTOMAÇÃO"],
    ],
  },
];

const track = document.querySelector("#timeline-track");
track.innerHTML = periods.map((period) => `
  <section class="period" aria-labelledby="period-${period.number}">
    <div class="period-heading">
      <div class="period-labels"><h3 id="period-${period.number}">${period.month}</h3></div>
      <div class="period-controls" hidden>
        <button class="period-arrow is-prev" type="button" data-direction="-1" aria-label="Cartões anteriores — ${period.month}"><img src="img/chevron.png" alt="" /></button>
        <button class="period-arrow is-next" type="button" data-direction="1" aria-label="Próximos cartões — ${period.month}"><img src="img/chevron.png" alt="" /></button>
      </div>
    </div>
    <div class="period-cards" id="cards-${period.number}" role="region" aria-label="Entregas de ${period.month}" tabindex="0">
      ${period.items.map((item) => `
        <article class="delivery-card">
          <span class="card-project">${item[0]}</span>
          <h4>${item[1]}</h4>
          <p>${item[2]}</p>
        </article>`).join("")}
    </div>
  </section>`).join("");

const periodScrollers = [...document.querySelectorAll(".period")].map((period) => {
  const cards = period.querySelector(".period-cards");
  const controls = period.querySelector(".period-controls");
  const previous = controls.querySelector(".is-prev");
  const next = controls.querySelector(".is-next");
  let updateFrame = 0;

  const updateControls = () => {
    updateFrame = 0;
    const maxScroll = Math.max(0, cards.scrollWidth - cards.clientWidth);
    controls.hidden = maxScroll < 2;
    const showPrevious = maxScroll >= 2 && cards.scrollLeft > 2;
    const showNext = maxScroll >= 2 && cards.scrollLeft < maxScroll - 2;
    cards.classList.toggle("fade-left", showPrevious);
    cards.classList.toggle("fade-right", showNext);
    previous.classList.toggle("is-hidden", !showPrevious);
    next.classList.toggle("is-hidden", !showNext);
    previous.setAttribute("aria-hidden", String(!showPrevious));
    next.setAttribute("aria-hidden", String(!showNext));
    previous.tabIndex = showPrevious ? 0 : -1;
    next.tabIndex = showNext ? 0 : -1;
  };
  const scheduleUpdate = () => {
    if (!updateFrame) updateFrame = requestAnimationFrame(updateControls);
  };
  cards.addEventListener("scroll", scheduleUpdate, { passive: true });
  previous.addEventListener("click", () => cards.scrollBy({ left: -cards.clientWidth * 0.82, behavior: "smooth" }));
  next.addEventListener("click", () => cards.scrollBy({ left: cards.clientWidth * 0.82, behavior: "smooth" }));
  updateControls();
  return { cards, scheduleUpdate };
});

if ("ResizeObserver" in window) {
  const periodResizeObserver = new ResizeObserver(() => periodScrollers.forEach(({ scheduleUpdate }) => scheduleUpdate()));
  periodScrollers.forEach(({ cards }) => periodResizeObserver.observe(cards));
} else {
  window.addEventListener("resize", () => periodScrollers.forEach(({ scheduleUpdate }) => scheduleUpdate()));
}

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  document.body.classList.toggle("menu-open", !isOpen);
});
document.querySelectorAll(".desktop-nav a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
}));

// Keep scroll-linked videos paused and ease their playheads toward the scroll position.
function bindScrollSyncedVideo(section, video, { smoothingMs = 115, maxSeekStep = 0.14, minSeekInterval = 32, directScrub = false } = {}) {
  let targetTime = 0;
  let frame = 0;
  let previousFrameTime = 0;
  let previousSeekTime = 0;
  const stickyLayer = section.querySelector(".hero-sticky, .journey-video-stage");

  const updateTarget = () => {
    const bounds = section.getBoundingClientRect();
    const pinnedHeight = stickyLayer?.offsetHeight || document.documentElement.clientHeight;
    const travel = Math.max(1, section.offsetHeight - pinnedHeight);
    const progress = Math.min(1, Math.max(0, -bounds.top / travel));
    if (!Number.isFinite(video.duration) || video.duration === 0) return;
    targetTime = progress * Math.max(0, video.duration - 0.08);
    if (!frame) frame = requestAnimationFrame(easePlayhead);
  };

  const easePlayhead = (now) => {
    if (!Number.isFinite(video.duration) || video.duration === 0) {
      frame = 0;
      return;
    }
    if (video.seeking) {
      frame = 0;
      return;
    }

    const elapsed = previousFrameTime ? Math.min(48, now - previousFrameTime) : 16;
    previousFrameTime = now;
    const difference = targetTime - video.currentTime;
    if (Math.abs(difference) < 0.025) {
      if (Math.abs(difference) > 0.002 && (!directScrub || now - previousSeekTime >= minSeekInterval)) {
        video.currentTime = targetTime;
        previousSeekTime = now;
      }
      frame = 0;
      return;
    }

    if (directScrub) {
      if (now - previousSeekTime < minSeekInterval) {
        frame = requestAnimationFrame(easePlayhead);
        return;
      }
      video.currentTime = targetTime;
      previousSeekTime = now;
      frame = 0;
      return;
    }

    if (now - previousSeekTime >= minSeekInterval) {
      const smoothing = 1 - Math.exp(-elapsed / smoothingMs);
      const easedStep = Math.max(-maxSeekStep, Math.min(maxSeekStep, difference * smoothing));
      video.currentTime += easedStep;
      previousSeekTime = now;
    }
    frame = requestAnimationFrame(easePlayhead);
  };

  video.addEventListener("loadedmetadata", updateTarget);
  video.addEventListener("seeked", () => {
    if (!frame && Math.abs(targetTime - video.currentTime) > 0.025) frame = requestAnimationFrame(easePlayhead);
  });
  window.addEventListener("scroll", updateTarget, { passive: true });
  window.addEventListener("resize", updateTarget);
  window.visualViewport?.addEventListener("resize", updateTarget, { passive: true });
  video.pause();
  updateTarget();
}

const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
bindScrollSyncedVideo(document.querySelector(".hero"), document.querySelector(".hero-video"), coarsePointer
  ? { directScrub: true, minSeekInterval: 80 }
  : undefined);
bindScrollSyncedVideo(document.querySelector(".journey"), document.querySelector(".journey-video"), {
  smoothingMs: 135,
  maxSeekStep: 0.12,
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const overviewVideo = document.querySelector(".overview-video");
const slowOverviewVideo = () => { overviewVideo.playbackRate = 0.48; };
overviewVideo.addEventListener("loadedmetadata", slowOverviewVideo);
if (overviewVideo.readyState >= 1) slowOverviewVideo();
if (reducedMotion.matches) overviewVideo.pause();

// Alternate two copies so the future section can dissolve softly between loops.
const futureVideos = [...document.querySelectorAll(".future-video")];
let activeFutureVideo = 0;
let loopTransition = false;
let futureVisible = false;
const futurePlaybackRate = 0.32;

futureVideos.forEach((futureVideo) => {
  futureVideo.playbackRate = futurePlaybackRate;
  futureVideo.addEventListener("loadedmetadata", () => { futureVideo.playbackRate = futurePlaybackRate; });
});

async function fadeFutureVideo() {
  if (loopTransition || reducedMotion.matches || !futureVisible) return;
  loopTransition = true;
  const outgoing = futureVideos[activeFutureVideo];
  const incomingIndex = (activeFutureVideo + 1) % futureVideos.length;
  const incoming = futureVideos[incomingIndex];
  incoming.currentTime = 0;
  incoming.playbackRate = futurePlaybackRate;

  try {
    await incoming.play();
    incoming.classList.add("is-active");
    outgoing.classList.remove("is-active");
    window.setTimeout(() => {
      outgoing.pause();
      activeFutureVideo = incomingIndex;
      loopTransition = false;
    }, 1700);
  } catch {
    loopTransition = false;
  }
}

futureVideos.forEach((futureVideo) => futureVideo.addEventListener("ended", fadeFutureVideo));
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  const futureObserver = new IntersectionObserver((entries) => {
    futureVisible = entries[0].isIntersecting;
    if (futureVisible) {
      futureVideos[activeFutureVideo].play().catch(() => {});
    } else {
      futureVideos.forEach((futureVideo) => futureVideo.pause());
    }
  }, { threshold: 0.12 });
  futureObserver.observe(document.querySelector(".future"));
}
