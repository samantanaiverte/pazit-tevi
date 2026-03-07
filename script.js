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

function setupTeamPagination(track, prevButton, nextButton, cardsPerPage = 5, stepSize = 2) {
  if (!track || !prevButton || !nextButton) {
    return;
  }

  const originalCards = Array.from(track.children);
  const totalCards = originalCards.length;
  if (!totalCards) {
    return;
  }

  if (totalCards <= cardsPerPage) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const normalizedStep = Math.max(1, Math.min(stepSize, totalCards));

  function cloneCard(card) {
    const copy = card.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    return copy;
  }

  const cloneBuffer = cardsPerPage + normalizedStep;
  const prependClones = originalCards.slice(-cloneBuffer).map(cloneCard);
  const appendClones = originalCards.slice(0, cloneBuffer).map(cloneCard);
  track.replaceChildren(...prependClones, ...originalCards, ...appendClones);

  let currentStart = 0;
  let locked = false;

  function getGapPixels() {
    const computedStyles = window.getComputedStyle(track);
    const gapValue = computedStyles.columnGap !== 'normal' ? computedStyles.columnGap : computedStyles.gap;
    return Number.parseFloat(gapValue) || 0;
  }

  function getCardStepSize() {
    const firstCard = track.children[0];
    if (!firstCard) {
      return 0;
    }
    return firstCard.getBoundingClientRect().width + getGapPixels();
  }

  function setPosition(startIndex, animate) {
    const stepSizePx = getCardStepSize();
    const offset = (startIndex + cloneBuffer) * stepSizePx;
    if (!animate) {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${offset}px)`;
    if (!animate) {
      track.getBoundingClientRect();
      track.style.transition = '';
    }
  }

  function normalizedIndex(index) {
    if (index < 0) {
      return ((index % totalCards) + totalCards) % totalCards;
    }
    return index % totalCards;
  }

  function moveBy(stepDirection) {
    if (locked) {
      return;
    }

    locked = true;
    const targetStart = currentStart + stepDirection * normalizedStep;
    const needsWrap = targetStart < 0 || targetStart >= totalCards;

    setPosition(targetStart, true);
    currentStart = targetStart;

    window.setTimeout(() => {
      if (needsWrap) {
        currentStart = normalizedIndex(currentStart);
        setPosition(currentStart, false);
      }
      locked = false;
    }, 340);
  }

  prevButton.addEventListener('click', () => moveBy(-1));
  nextButton.addEventListener('click', () => moveBy(1));
  window.addEventListener('resize', () => {
    setPosition(currentStart, false);
  });

  setPosition(currentStart, false);
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

function setupReviewTruncation() {
  const reviewTexts = document.querySelectorAll('.review-text');
  reviewTexts.forEach((paragraph) => {
    const fullText = paragraph.dataset.fulltext || paragraph.textContent.trim();
    const words = fullText.split(/\s+/);
    if (words.length <= 50) {
      paragraph.textContent = fullText;
      return;
    }

    const shortText = `${words.slice(0, 50).join(' ')}...`;
    paragraph.textContent = shortText;

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'read-more';
    toggleButton.textContent = 'lasīt vairāk';
    toggleButton.dataset.expanded = 'false';

    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.dataset.expanded === 'true';
      if (expanded) {
        paragraph.textContent = shortText;
        toggleButton.textContent = 'lasīt vairāk';
        toggleButton.dataset.expanded = 'false';
      } else {
        paragraph.textContent = fullText;
        toggleButton.textContent = 'rādīt mazāk';
        toggleButton.dataset.expanded = 'true';
      }
    });

    paragraph.insertAdjacentElement('afterend', toggleButton);
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

if (teamPrev && teamNext && teamTrack) {
  setupTeamPagination(teamTrack, teamPrev, teamNext, 4);
}

if (reviewPrev && reviewNext && reviewsTrack) {
  bindCarouselButton(reviewPrev, reviewsTrack, -1, 2);
  bindCarouselButton(reviewNext, reviewsTrack, 1, 2);
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

setupReviewTruncation();
setupScrollReveal();
initializeLucideIcons();
setupActiveNavLinks();
setupFocusAccordion();
setupLeaderCardTextBehavior();
