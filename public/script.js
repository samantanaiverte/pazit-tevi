const langButtons = Array.from(document.querySelectorAll('.lang-btn'));
const teamTrack = document.getElementById('teamTrack');
const teamPrev = document.getElementById('teamPrev');
const teamNext = document.getElementById('teamNext');
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');
const navSectionLinks = Array.from(document.querySelectorAll('.main-nav-wrap a[href^="#"]'));
const focusItems = Array.from(document.querySelectorAll('.focus-item'));

function captureDomTranslations() {
  const captured = {};

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) {
      return;
    }

    if (element.tagName.toLowerCase() === 'title') {
      captured[key] = element.textContent.trim();
      return;
    }

    captured[key] = element.innerHTML.trim();
  });

  return captured;
}

const TRANSLATIONS = {
  lv: {
    'meta.title': 'Pazīt Tevi | Meiteņu Nometne',
    'nav.logo': 'Pazīt Tevi',
    'nav.home': 'Sākums',
    'nav.focus': 'Fokuss',
    'nav.about': 'Par mums',
    'nav.team': 'Komanda',
    'nav.gallery': 'Foto mirkļi',
    'nav.testimonials': 'Atsauksmes',
    'nav.contact': 'Sazinies ar mums',
    'hero.kicker': 'meiteņu nometne',
    'hero.title': 'Pazīt Tevi',
    'hero.caption': 'NO 30.JŪLIJA LĪDZ 2.AUGUSTAM',
    'hero.cta': 'piesakies šī gada nometnei',
    'focus.title': 'Mūsu fokuss',
    'focus.subtitle': 'Sagatavot dievbijīgas sievietes nākamajai dzīves sezonai.',
    'focus.imageAlt': 'Meitenes aktivitātēs dabā',
    'focus.item1.title': 'Laiks dabā',
    'focus.item1.copy':
      'Mēs daudz laika pavadām svaigā gaisā – sarunās, spēlēs, pastaigās un kopīgos piedzīvojumos. Daba palīdz apstāties no ikdienas steigas un baudīt to, ka vienkārši varam būt.',
    'focus.item2.title': 'Meistarklases un radošums',
    'focus.item2.copy':
      'Meitenēm ir pieejamas dažādas meistarklases, kur mācāmies rūpēties par sevi un atklāt savus talantus no ēst gatavošanas līdz kustībai, skaistumkopšanai, dejai un citām radošām aktivitātēm.',
    'focus.item3.title': 'Garīgā izaugsme',
    'focus.item3.copy':
      'Nometnes centrā ir laiks ar Dievu. Lekcijās, sarunās un klusajos brīžos mēs mācāmies labāk iepazīt Dievu, sevi un savu identitāti.',
    'focus.item4.title': 'Izaicinājumi, kas stiprina',
    'focus.item4.copy':
      'Nometnē ir arī brīži, kas palīdz pārkāpt savām robežām, iemācīties drosmi, uzticēties sev un komandai.',
    'focus.item5.title': 'Kopība',
    'focus.item5.copy':
      'Šī ir ļoti nozīmīga lieta, kad meitenes var būt vienā vietā, vienā laikā. Draudzības, sarunas līdz vēlam vakaram un būt pieņemtai tieši tāda, kāda esi. Tā mēs katra atplaukstam.',
    'about.tag': 'Par mums',
    'about.title': 'Pazīt Tevi komanda',
    'about.copy':
      '• PAZĪT TEVI ir kristīga nometne sievietēm vecumā no 15 līdz 25 gadiem.<br><br>• Mūsu komandā apvienojušās sievietes dažādos vecumos, dzīves sezonās, no dažādām pilsētām un draudzēm, kuras vieno mīlestība uz Jēzu un kopīgs mērķis - sagatavot dievbijīgas sievietes nākamajam dzīves posmam.<br><br>• 2022. gada sākumā Dievs īpaši uzrunāja Martu un Sabīni, katrai atsevišķi liekot sirdī vienu domu - nometni meitenēm. Lūdzot un meklējot Dieva vadību, tika sperti pirmie soļi nometnes virzienā. Dievs katrai nometnei ir sagatavojis un devis īsto komandu, lektorus un visu vajadzīgo nodrošinājumu!',
    'about.imageAlt': 'Nometnes dalībnieces',
    'team.tag': 'Vadītājas',
    'team.title': 'Iepazīsti mūsu komandu',
    'team.subtitle': 'Komanda, kas ar prieku kalpo un rada vidi, kur meitenes var augt',
    'team.prevAria': 'Iepriekšējās kartītes',
    'team.nextAria': 'Nākamās kartītes',
    'gallery.tag': 'Foto mirkļi',
    'gallery.title': 'Atmiņas no nometnes',
    'gallery.more': 'Skatīt vairāk',
    'testimonials.tag': 'Atsauksmes',
    'testimonials.title': 'Ko saka meitenes pēc nometnes',
    'testimonials.prevAria': 'Iepriekšējās atsauksmes',
    'testimonials.nextAria': 'Nākamās atsauksmes',
    'contact.tag': 'Sazinies ar mums',
    'contact.title': 'Uzdod jautājumu vai piesakies nometnei',
    'contact.name': 'Vārds',
    'contact.emailLabel': 'E-pasts',
    'contact.question': 'Jautājums',
    'contact.send': 'Nosūtīt',
    'footer.emailLabel': 'E-pasts:',
    'footer.phoneLabel': 'Tālrunis:',
  },
  en: {
    'meta.title': 'Pazit Tevi | Girls Camp',
    'nav.logo': 'Pazit Tevi',
    'nav.home': 'Home',
    'nav.focus': 'Focus',
    'nav.about': 'About us',
    'nav.team': 'Team',
    'nav.gallery': 'Photo moments',
    'nav.testimonials': 'Reviews',
    'nav.contact': 'Contact us',
    'hero.kicker': 'girls camp',
    'hero.title': 'Pazit Tevi',
    'hero.caption': 'FROM JULY 30 TO AUGUST 2',
    'hero.cta': 'apply for this year camp',
    'focus.title': 'Our Focus',
    'focus.subtitle': 'Preparing godly women for the next season of life.',
    'focus.imageAlt': 'Girls in outdoor camp activities',
    'focus.item1.title': 'Time In Nature',
    'focus.item1.copy':
      'We spend a lot of time outdoors in conversations, games, walks, and shared adventures. Nature helps us pause from daily rush and enjoy simply being.',
    'focus.item2.title': 'Workshops And Creativity',
    'focus.item2.copy':
      'Girls can join different workshops where we learn self-care and discover talents, from cooking to movement, beauty care, dance, and other creative activities.',
    'focus.item3.title': 'Spiritual Growth',
    'focus.item3.copy':
      'At the center of camp is time with God. Through talks, discussions, and quiet moments, we learn to know God, ourselves, and our identity more deeply.',
    'focus.item4.title': 'Strengthening Challenges',
    'focus.item4.copy':
      'Camp also includes moments that help us step beyond our limits, learn courage, and build trust in ourselves and in the team.',
    'focus.item5.title': 'Community',
    'focus.item5.copy':
      'This is deeply important: girls being together in one place at one time. Friendships, late-night conversations, and being accepted exactly as you are help each of us bloom.',
    'about.tag': 'About us',
    'about.title': 'Pazit Tevi team',
    'about.copy':
      'We create a Christian girls camp where every participant is seen, heard, and encouraged. Our goal is to grow closer to God, build confidence, and strengthen a safe community.',
    'about.imageAlt': 'Camp participants',
    'team.tag': 'Leaders',
    'team.title': 'Meet our team',
    'team.subtitle': 'A team that serves with joy and creates a space where girls can grow',
    'team.prevAria': 'Previous cards',
    'team.nextAria': 'Next cards',
    'gallery.tag': 'Photo moments',
    'gallery.title': 'Camp memories',
    'gallery.more': 'See more',
    'testimonials.tag': 'Reviews',
    'testimonials.title': 'What girls say after camp',
    'testimonials.prevAria': 'Previous testimonials',
    'testimonials.nextAria': 'Next testimonials',
    'contact.tag': 'Contact us',
    'contact.title': 'Ask a question or apply to camp',
    'contact.name': 'Name',
    'contact.emailLabel': 'Email',
    'contact.question': 'Question',
    'contact.send': 'Send',
    'footer.emailLabel': 'Email:',
    'footer.phoneLabel': 'Phone:',
  },
};

const DOM_LV_TRANSLATIONS = captureDomTranslations();
TRANSLATIONS.lv = { ...TRANSLATIONS.lv, ...DOM_LV_TRANSLATIONS };

function rotateTrack(track, direction, batchSize) {
  if (!track) {
    return;
  }

  const totalItems = track.children.length;
  if (!totalItems || batchSize <= 0) {
    return;
  }

  const moveCount = Math.min(batchSize, totalItems);
  track.style.scrollBehavior = 'auto';
  track.scrollLeft = 0;

  if (direction > 0) {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < moveCount; index += 1) {
      const firstItem = track.firstElementChild;
      if (!firstItem) {
        break;
      }
      fragment.appendChild(firstItem);
    }
    track.appendChild(fragment);
  } else {
    const itemsToMove = [];
    for (let index = 0; index < moveCount; index += 1) {
      const lastItem = track.lastElementChild;
      if (!lastItem) {
        break;
      }
      itemsToMove.push(lastItem);
      track.removeChild(lastItem);
    }
    itemsToMove.reverse().forEach((item) => {
      track.insertBefore(item, track.firstElementChild);
    });
  }

  track.scrollLeft = 0;
}

function bindCarouselButton(button, track, direction, batchSize) {
  if (!button || !track) {
    return;
  }

  let locked = false;
  button.addEventListener('click', () => {
    if (locked) {
      return;
    }
    locked = true;
    rotateTrack(track, direction, batchSize);
    window.setTimeout(() => {
      locked = false;
    }, 180);
  });
}

function setupInfiniteReviewCarousel(track) {
  if (!track) {
    return;
  }

  const sourceCards = Array.from(track.querySelectorAll('.review-card'));
  if (sourceCards.length < 2) {
    return;
  }

  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cardsPerView = 3;
  let currentIndex = 0;
  let isTransitioning = false;
  let autoSlideTimer;

  function getCardsPerView() {
    if (window.innerWidth <= 760) {
      return 1;
    }
    if (window.innerWidth <= 1020) {
      return 2;
    }
    return 3;
  }

  function cloneReviewCard(card) {
    const clone = card.cloneNode(true);
    clone.dataset.clone = 'true';
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('button, a, input, textarea, select').forEach((el) => {
      el.setAttribute('tabindex', '-1');
    });
    return clone;
  }

  function getStepPx() {
    const firstCard = track.querySelector('.review-card');
    if (!firstCard) {
      return 0;
    }
    const computedStyles = window.getComputedStyle(track);
    const gapValue = computedStyles.columnGap !== 'normal' ? computedStyles.columnGap : computedStyles.gap;
    const gapPx = Number.parseFloat(gapValue) || 0;
    return firstCard.getBoundingClientRect().width + gapPx;
  }

  function setPosition(animate) {
    const offset = currentIndex * getStepPx();
    if (!animate) {
      track.style.transition = 'none';
      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
      track.getBoundingClientRect();
      return;
    }
    track.style.transition = 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)';
    track.style.transform = `translate3d(-${offset}px, 0, 0)`;
  }

  function rebuildTrack() {
    cardsPerView = getCardsPerView();
    const headClones = sourceCards.slice(-cardsPerView).map(cloneReviewCard);
    const tailClones = sourceCards.slice(0, cardsPerView).map(cloneReviewCard);
    track.replaceChildren(...headClones, ...sourceCards, ...tailClones);
    currentIndex = cardsPerView;
    setPosition(false);
    setupReviewTruncation(track);
  }

  function moveBy(direction) {
    if (isTransitioning) {
      return;
    }
    isTransitioning = true;
    currentIndex += direction;
    setPosition(true);
  }

  function goNext() {
    moveBy(1);
  }

  function goPrev() {
    moveBy(-1);
  }

  function stopAutoSlide() {
    if (!autoSlideTimer) {
      return;
    }
    window.clearInterval(autoSlideTimer);
    autoSlideTimer = undefined;
  }

  function startAutoSlide() {
    if (motionReduced) {
      return;
    }
    stopAutoSlide();
    autoSlideTimer = window.setInterval(goNext, 4200);
  }

  track.addEventListener('transitionend', () => {
    const originalCount = sourceCards.length;
    if (currentIndex >= originalCount + cardsPerView) {
      currentIndex = cardsPerView;
      setPosition(false);
    } else if (currentIndex < cardsPerView) {
      currentIndex = originalCount + cardsPerView - 1;
      setPosition(false);
    }
    isTransitioning = false;
  });

  let touchStartX = 0;
  let touchStartY = 0;
  track.addEventListener(
    'touchstart',
    (event) => {
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      stopAutoSlide();
    },
    { passive: true }
  );

  track.addEventListener(
    'touchend',
    (event) => {
      const touch = event.changedTouches[0];
      if (!touch) {
        return;
      }
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          goNext();
        } else {
          goPrev();
        }
      }
      startAutoSlide();
    },
    { passive: true }
  );

  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);
  track.addEventListener('focusin', stopAutoSlide);
  track.addEventListener('focusout', startAutoSlide);

  let previousPerView = getCardsPerView();
  window.addEventListener('resize', () => {
    const nextPerView = getCardsPerView();
    if (nextPerView !== previousPerView) {
      previousPerView = nextPerView;
      rebuildTrack();
      startAutoSlide();
    } else {
      setPosition(false);
    }
  });

  rebuildTrack();
  startAutoSlide();
}

function setupTeamScroller(track, prevButton, nextButton, stepSize = 1) {
  if (!track) {
    return;
  }

  const cards = Array.from(track.children);
  if (!cards.length) {
    return;
  }

  if (!track.hasAttribute('tabindex')) {
    track.setAttribute('tabindex', '0');
  }
  if (!track.hasAttribute('aria-label')) {
    track.setAttribute('aria-label', 'Leader cards carousel');
  }

  const normalizedStep = Math.max(1, stepSize);

  function getCardStepPx() {
    const computedStyles = window.getComputedStyle(track);
    const gapValue = computedStyles.columnGap !== 'normal' ? computedStyles.columnGap : computedStyles.gap;
    const firstCard = track.children[0];
    const gapPx = Number.parseFloat(gapValue) || 0;
    if (!firstCard) {
      return 0;
    }
    return firstCard.getBoundingClientRect().width + gapPx;
  }

  function moveBy(direction) {
    const stepPx = getCardStepPx();
    if (!stepPx) {
      return;
    }
    const directionFactor = direction > 0 ? 1 : -1;
    track.scrollBy({
      left: directionFactor * stepPx * normalizedStep,
      behavior: 'smooth',
    });
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => moveBy(-1));
    nextButton.addEventListener('click', () => moveBy(1));
  }

  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveBy(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveBy(1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      track.scrollTo({ left: 0, behavior: 'smooth' });
    }
    if (event.key === 'End') {
      event.preventDefault();
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    }
  });

  function refreshButtonState() {
    if (!prevButton || !nextButton) {
      return;
    }
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    prevButton.disabled = track.scrollLeft <= 2;
    nextButton.disabled = track.scrollLeft >= maxScroll - 2;
  }

  window.addEventListener('resize', () => {
    refreshButtonState();
  });

  track.addEventListener('scroll', refreshButtonState, { passive: true });
  refreshButtonState();
}

function applyTranslations(language) {
  const activeLanguage = TRANSLATIONS[language] ? language : 'lv';
  const dictionary = TRANSLATIONS[activeLanguage];
  document.documentElement.lang = activeLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];
    if (!value) {
      return;
    }
    if (value.includes('<') && value.includes('>')) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const mappings = element.dataset.i18nAttr.split(',');
    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(':').map((part) => part.trim());
      const value = dictionary[key];
      if (!attribute || !key || !value) {
        return;
      }
      element.setAttribute(attribute, value);
    });
  });

  localStorage.setItem('preferredLanguage', activeLanguage);
  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === activeLanguage);
  });

  refreshFocusAccordion();
  updateLeaderDescriptionTruncation();
}

function setupReviewTruncation(track = reviewsTrack) {
  if (!track) {
    return;
  }

  const maxPreviewLength = 180;
  const reviewCards = Array.from(track.querySelectorAll('.review-card'));

  function buildPreviewText(fullText) {
    const normalized = fullText.trim();
    if (normalized.length <= maxPreviewLength) {
      return normalized;
    }
    return `${normalized.slice(0, maxPreviewLength).trimEnd()}...`;
  }

  reviewCards.forEach((card) => {
    const paragraph = card.querySelector('.review-text');
    const toggleButton = card.querySelector('.read-more');
    if (!paragraph) {
      return;
    }

    const fullText = paragraph.dataset.fulltext || paragraph.textContent.trim();
    const previewText = buildPreviewText(fullText);
    paragraph.dataset.fulltext = fullText;
    paragraph.dataset.previewtext = previewText;
    paragraph.textContent = previewText;
    card.classList.remove('is-expanded');

    if (!toggleButton) {
      return;
    }

    toggleButton.textContent = 'Lasīt vairāk';
  });

  if (track.dataset.reviewToggleBound === 'true') {
    return;
  }
  track.dataset.reviewToggleBound = 'true';

  track.addEventListener('click', (event) => {
    const toggleButton = event.target.closest('.read-more');
    if (!toggleButton || !track.contains(toggleButton)) {
      return;
    }
    const card = toggleButton.closest('.review-card');
    if (!card) {
      return;
    }

    const paragraph = card.querySelector('.review-text');
    if (!paragraph) {
      return;
    }

    const fullText = paragraph.dataset.fulltext || paragraph.textContent.trim();
    const previewText = paragraph.dataset.previewtext || buildPreviewText(fullText);
    const expanded = !card.classList.contains('is-expanded');

    card.classList.toggle('is-expanded', expanded);
    paragraph.textContent = expanded ? fullText : previewText;
    toggleButton.textContent = expanded ? 'Rādīt mazāk' : 'Lasīt vairāk';
  });
}

function setupScrollReveal() {
  const textTargets = Array.from(
    document.querySelectorAll('.hero-content, .section-head, .about-text, .focus-points article, .contact-card')
  );
  const mediaTargets = Array.from(
    document.querySelectorAll('.focus-layout img, .about-image, .mosaic-grid img, .leader-card, .review-card')
  );
  const allTargets = [...new Set([...textTargets, ...mediaTargets])];

  if (!allTargets.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    allTargets.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  textTargets.forEach((element, index) => {
    element.classList.add('reveal', 'reveal-text');
    element.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
  });

  mediaTargets.forEach((element, index) => {
    element.classList.add('reveal', 'reveal-media');
    element.style.transitionDelay = `${Math.min(index * 22, 220)}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  allTargets.forEach((element) => revealObserver.observe(element));
}

function initializeLucideIcons() {
  if (!window.lucide || typeof window.lucide.createIcons !== 'function') {
    return;
  }
  window.lucide.createIcons();
}

function refreshFocusAccordion() {
  focusItems.forEach((item) => {
    if (!item.classList.contains('is-open')) {
      return;
    }
    const panel = item.querySelector('.focus-panel');
    if (!panel) {
      return;
    }
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  });
}

function updateLeaderDescriptionTruncation() {
  const descriptions = document.querySelectorAll('.leader-card p:last-child');
  descriptions.forEach((paragraph) => {
    paragraph.classList.remove('is-truncated');
    if (paragraph.scrollHeight > paragraph.clientHeight + 1) {
      paragraph.classList.add('is-truncated');
    }
  });
}

function setupLeaderCardTextBehavior() {
  const leadTextBlocks = document.querySelectorAll('.leader-card .lead-strong');
  leadTextBlocks.forEach((leadText) => {
    const text = leadText.textContent?.trim() ?? '';
    const isShortRole = text.length > 0 && text.length <= 16 && !/[.!?]/.test(text);
    leadText.classList.toggle('role-pill', isShortRole);
  });

  updateLeaderDescriptionTruncation();
  window.addEventListener('resize', updateLeaderDescriptionTruncation);
}

function setupFocusAccordion() {
  if (!focusItems.length) {
    return;
  }

  function setItemState(item, isOpen) {
    const trigger = item.querySelector('.focus-trigger');
    const panel = item.querySelector('.focus-panel');
    if (!trigger || !panel) {
      return;
    }

    item.classList.toggle('is-open', isOpen);
    trigger.setAttribute('aria-expanded', String(isOpen));
    panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0px';
  }

  focusItems.forEach((item, index) => {
    const trigger = item.querySelector('.focus-trigger');
    if (!trigger) {
      return;
    }

    setItemState(item, index === 0);

    trigger.addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('is-open');
      focusItems.forEach((otherItem) => {
        setItemState(otherItem, false);
      });
      if (shouldOpen) {
        setItemState(item, true);
      }
    });
  });
}

function setupActiveNavLinks() {
  if (!navSectionLinks.length || !('IntersectionObserver' in window)) {
    return;
  }

  const sectionById = new Map();
  navSectionLinks.forEach((link) => {
    const targetId = link.getAttribute('href')?.slice(1);
    if (!targetId) {
      return;
    }
    const section = document.getElementById(targetId);
    if (section) {
      sectionById.set(targetId, section);
    }
  });

  if (!sectionById.size) {
    return;
  }

  function setActiveLink(activeId) {
    navSectionLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${activeId}`;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  setActiveLink('top');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setActiveLink(entry.target.id);
      });
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    }
  );

  sectionById.forEach((section) => observer.observe(section));
}

if (teamTrack) {
  setupTeamScroller(teamTrack, teamPrev, teamNext, 1);
}

if (reviewsTrack) {
  setupInfiniteReviewCarousel(reviewsTrack);
  setupReviewTruncation(reviewsTrack);
}

if (langButtons.length) {
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'lv';
  applyTranslations(savedLanguage);
  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyTranslations(button.dataset.lang);
    });
  });
}

setupScrollReveal();
initializeLucideIcons();
setupActiveNavLinks();
setupFocusAccordion();
setupLeaderCardTextBehavior();
