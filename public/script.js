const langToggle = document.querySelector('.lang-toggle');
const langToggleLabel = document.querySelector('.lang-toggle-label');
const teamTrack = document.getElementById('teamTrack');
const teamPrev = document.getElementById('teamPrev');
const teamNext = document.getElementById('teamNext');
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');
const navSectionLinks = Array.from(document.querySelectorAll('.main-nav-wrap a[href^="#"]'));
const focusItems = Array.from(document.querySelectorAll('.focus-item'));
let currentLanguage = 'lv';

function getNextLanguage(language) {
  return language === 'en' ? 'lv' : 'en';
}

function updateLanguageToggle(language) {
  if (!langToggle || !langToggleLabel) {
    return;
  }

  const nextLanguage = getNextLanguage(language);
  const nextLabel = nextLanguage.toUpperCase();
  const ariaLabel = nextLanguage === 'en' ? 'Switch to English' : 'Switch to Latvian';

  langToggle.dataset.lang = nextLanguage;
  langToggleLabel.textContent = nextLabel;
  langToggle.setAttribute('aria-label', ariaLabel);
  langToggle.setAttribute('title', ariaLabel);
}

function t(key, fallback = '') {
  return TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS.lv?.[key] || fallback;
}

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
    'hero.kicker': 'MEITEŅU NOMETNE',
    'hero.title': 'Pazīt Tevi',
    'hero.badge': '2026',
    'hero.caption': '30. jūlijs — 2. augusts',
    'hero.cta': 'Piesakies šī gada nometnei',
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
    'testimonials.roleParticipant': 'NOMETNES DALĪBNIECE',
    'testimonials.prevAria': 'Iepriekšējās atsauksmes',
    'testimonials.nextAria': 'Nākamās atsauksmes',
    'reviews.modalClose': 'Aizvērt atsauksmi',
    'reviews.modalPrev': 'Iepriekšējā atsauksme',
    'reviews.modalNext': 'Nākamā atsauksme',
    'reviews.readMore': 'Lasīt vairāk',
    'reviews.showLess': 'Rādīt mazāk',
    'gallery.lightbox.close': 'Aizvērt attēlu skatītāju',
    'gallery.lightbox.prev': 'Iepriekšējais attēls',
    'gallery.lightbox.next': 'Nākamais attēls',
    'gallery.lightbox.openImage': 'Atvērt attēlu',
    'gallery.lightbox.of': 'no',
    'contact.tag': 'Sazinies ar mums',
    'contact.infoTag': 'kontakti',
    'contact.title': 'Uzdod jautājumu vai piesakies nometnei',
    'contact.personName': 'Samanta Naiverte',
    'contact.phoneLabel': 'Tel. Nr.:',
    'contact.directEmailLabel': 'Epasts:',
    'contact.name': 'Vārds',
    'contact.emailLabel': 'E-pasts',
    'contact.question': 'Jautājums',
    'contact.send': 'Nosūtīt',
    'footer.emailLabel': 'E-pasts:',
    'footer.phoneLabel': 'Tālrunis:',
  },
  en: {
    'meta.title': "Pazit Tevi | Girls' Camp",
    'nav.logo': 'Pazit Tevi',
    'nav.home': 'Home',
    'nav.focus': 'Our Focus',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'hero.kicker': "GIRLS' CAMP",
    'hero.title': 'Pazit Tevi',
    'hero.badge': '2026',
    'hero.caption': 'JULY 30 — AUGUST 2',
    'hero.cta': "Apply for this year's camp",
    'focus.title': 'Our Focus',
    'focus.subtitle': 'Preparing godly women for their next season of life.',
    'focus.imageAlt': 'Girls in outdoor camp activities',
    'focus.item1.title': 'Time in Nature',
    'focus.item1.copy':
      'We spend a lot of time outdoors in conversations, games, walks, and shared adventures. Nature helps us step out of the daily rush and enjoy simply being.',
    'focus.item2.title': 'Workshops & Creativity',
    'focus.item2.copy':
      'Girls can join a variety of workshops where we learn self-care and discover our gifts, from cooking and movement to beauty care, dance, and other creative activities.',
    'focus.item3.title': 'Spiritual Growth',
    'focus.item3.copy':
      'At the center of camp is time with God. Through talks, discussions, and quiet moments, we learn to know God, ourselves, and our identity more deeply.',
    'focus.item4.title': 'Challenges That Build Strength',
    'focus.item4.copy':
      'Camp also includes moments that help us step beyond our limits, grow in courage, and build trust in ourselves and in the team.',
    'focus.item5.title': 'Community',
    'focus.item5.copy':
      'One of the most meaningful parts of camp is simply being together. Friendships, late-night conversations, and being accepted exactly as you are help each of us bloom.',
    'about.tag': 'About Us',
    'about.title': 'The Pazit Tevi Team',
    'about.copy':
      '<span class="about-lead">PAZIT TEVI is a Christian camp for girls and young women aged 15 to 25.</span><span class="about-paragraph about-paragraph-highlight">Our team brings together women of different ages and life seasons, from different cities and churches. We are united by love for Jesus and a shared desire to prepare godly women for the next season of life.</span><span class="about-paragraph">At the beginning of 2022, God specifically spoke to Marta and Sabine about starting a camp for girls. Through prayer and seeking God’s guidance, the first steps were taken, and over time a team was formed that serves in this camp with joy.</span>',
    'about.imageAlt': 'Camp participants',
    'team.tag': 'Leaders',
    'team.title': "Meet This Year's Team",
    'team.subtitle': 'A team that serves with joy and creates a space where girls can grow.',
    'team.prevAria': 'Previous cards',
    'team.nextAria': 'Next cards',
    'gallery.tag': 'Gallery',
    'gallery.title': 'Camp Moments',
    'gallery.more': 'See More',
    'testimonials.tag': 'Testimonials',
    'testimonials.title': 'What Girls Say After Camp',
    'testimonials.roleParticipant': 'CAMP PARTICIPANT',
    'testimonials.prevAria': 'Previous testimonials',
    'testimonials.nextAria': 'Next testimonials',
    'reviews.modalClose': 'Close testimonial',
    'reviews.modalPrev': 'Previous testimonial',
    'reviews.modalNext': 'Next testimonial',
    'reviews.readMore': 'Read more',
    'reviews.showLess': 'Show less',
    'gallery.lightbox.close': 'Close image viewer',
    'gallery.lightbox.prev': 'Previous image',
    'gallery.lightbox.next': 'Next image',
    'gallery.lightbox.openImage': 'Open image',
    'gallery.lightbox.of': 'of',
    'contact.tag': 'Contact Us',
    'contact.title': 'Ask a Question or Apply for Camp',
    'contact.infoTag': 'Contacts',
    'contact.personName': 'Samanta Naiverte',
    'contact.phoneLabel': 'Phone:',
    'contact.directEmailLabel': 'Email:',
    'contact.name': 'Name',
    'contact.emailLabel': 'Email',
    'contact.question': 'Question',
    'contact.send': 'Send Message',
    'footer.emailLabel': 'Email:',
    'footer.phoneLabel': 'Phone:',
  },
};

const DOM_LV_TRANSLATIONS = captureDomTranslations();
TRANSLATIONS.lv = { ...TRANSLATIONS.lv, ...DOM_LV_TRANSLATIONS };

function captureCardTranslations() {
  const leaders = Array.from(document.querySelectorAll('.leader-card')).map((card) => {
    const lead = card.querySelector('.lead-strong')?.textContent.trim() || '';
    const body = card.querySelector('p:last-child')?.textContent.trim() || '';
    return { lead, body };
  });

  const reviews = Array.from(document.querySelectorAll('.review-card'))
    .filter((card) => card.dataset.clone !== 'true')
    .map((card, index) => {
      card.dataset.reviewId = String(index);
      const name = card.querySelector('.review-name')?.textContent.trim() || '';
      const full = card.querySelector('.review-text')?.dataset.fulltext?.trim() || '';
      return { name, full };
    });

  return { leaders, reviews };
}

const CARD_TRANSLATIONS_LV = captureCardTranslations();

const CARD_TRANSLATIONS_EN = {
  leaders: [
    {
      lead: 'I am one of the camp leaders, and I love spending quality time with people.',
      body: "This camp matters deeply to me because I believe God moves powerfully when we come together and let Him fulfill His will: to bring things into the light, heal, restore, and encourage.",
    },
    {
      lead: "I am one of the camp organizers. I'm my mother's daughter and my little sister Ketlina's big sister.",
      body: 'This camp matters to me because I want girls to see themselves through God’s eyes, believe what He says about them, and build their lives on that truth.',
    },
    {
      lead: 'I am one of the camp organizers and a small-group leader. I am family-oriented and love giving and bringing joy to others.',
      body: 'This camp is very important to me because it is a special, set-apart time where God can work in girls’ hearts and lives. Through talks and one-on-one conversations, each girl can receive so much.',
    },
    {
      lead: 'I am one of the camp organizers, a small-group leader, and I also take care of much of the camp’s design.',
      body: 'This camp is very important to me because I have experienced how God has changed my heart and what a blessing it is to truly surrender to Him. I want every girl to experience that too.',
    },
    {
      lead: 'I help create a celebratory atmosphere and beauty around the camp. I care about the small details and notice them.',
      body: 'This camp matters to me because I care deeply that young girls come to know God and, through that, discover their identity, femininity, and calling.',
    },
    {
      lead: 'I am responsible for camp order and cleanliness. I love helping make sure everyone feels cared for.',
      body: 'This camp matters to me because it is a place where girls can experience sisterhood, understanding, hope, forgiveness, and the grace to forgive others.',
    },
    {
      lead: 'I serve in many ways: as a small-group leader, in the worship team, and as a workshop leader at this year’s camp.',
      body: 'This camp matters to me because the world can be a hard place. I believe it is valuable for girls to receive a “road map” to their worth, significance, and beauty in God’s eyes.',
    },
    {
      lead: 'I am part of the camp planning team and a small-group leader, and I am passionate about healthy living.',
      body: 'This camp is especially important to me because I see how much girls can learn, hear, and rediscover about the truths the Bible teaches about womanhood.',
    },
    {
      lead: 'I am a wife to one, a mother of four, and God’s beloved daughter. In daily life, I coordinate the “whirlwind.”',
      body: 'This camp matters to me because while serving others, I also grow myself. I am convinced women need a community where they feel heard, understood, and loved.',
    },
    {
      lead: 'I am a small-group leader. Beautiful sunsets and people’s laughter warm my heart.',
      body: 'This camp matters to me because it helps girls experience God’s love, believe it, and learn to accept themselves as God created them.',
    },
    {
      lead: 'I am a small-group leader and also help with many other tasks, both small and big. I am very patient.',
      body: 'This camp matters to me because it strengthens faith, builds value awareness, and helps girls grow spiritually, emotionally, and relationally.',
    },
  ],
  reviews: [
    {
      name: 'Lana',
      full: 'Camp was the place where I found the courage to open my heart and release the birds I had kept trapped for so long in a heavy iron cage. It was a place where I felt deep pride for every young and older woman, where I saw growth and openness. It was where I could once again feel and be grateful, proud to be a woman. I am grateful for everything that has happened, and these four days feel like inspiration for all the days ahead: my past is not a period at the end of my story, it is only one of the commas. Everything has meaning and value. We can be women and be proud of it, not ashamed. We are God’s princesses, crowned by the Almighty Himself. It is our choice to straighten that crown when it tilts. He is waiting for us at home, and He has given us the freedom to choose to be His children, His princesses. Most of all, my heart says THANK YOU. So very valuable.',
    },
    {
      name: 'Katrīna',
      full: 'This camp was a great blessing for me. I had the opportunity to reflect on important topics, draw even closer to God, and see how He was at work in each girl’s life. These days were full of emotion and filled with God’s love.',
    },
    {
      name: 'Inita',
      full: 'When I was heading to camp, I had no expectations and thought it might feel strange. No guys there, so what would it even be like? But a girls-only camp is something I can hardly describe. Talking about relevant topics that encourage girls, building unforgettable friendships, being understood, and being in an atmosphere filled with love and femininity. Even walking through camp in a dress or skirt and not needing to change if you want to join an activity, because usually a dress is not considered “practical” clothing, already felt like a victory. It is hard to put into words, but at camp you can feel so free, so loved, and without insecurities. You can talk about faith, release pain, learn new things about important topics and about yourself, strengthen your relationship with God, and learn from older sisters. I truly wish everyone could experience a camp like this at least once in life.',
    },
    {
      name: 'Karīna',
      full: 'This year, the girls’ camp Pazīt Sevi = Pazīt Tevi took place for the first time. It was a chance to look into our hearts and get to know the heart of the One who created us. Over four days, we listened to talks on topics such as womanhood, the female cycle, relationships with the opposite sex, relationships with parents, and relationship with our Creator; the final talk was about forgiveness. What we heard in the talks did not stay as passing words, but became valuable insights we took home and can apply in daily life. Beyond the talks, we watched a film, faced a physically challenging team task, danced, expressed ourselves in creative workshops, recognized our own value, and had encouraging conversations in small groups. On the second-to-last evening we had beautiful festive dinner where we celebrated ourselves and all we had experienced. At the center of everything was our Lord: we worshiped Him together, singing, dancing, and rejoicing in our shared heavenly Father. At camp, you could clearly see how remarkable girls’ unity and support for one another can be. I was truly glad to be part of this first girls’ camp.',
    },
  ],
};

function applyLeaderAndReviewTranslations(language) {
  const source = language === 'en' ? CARD_TRANSLATIONS_EN : CARD_TRANSLATIONS_LV;

  const leaderCards = Array.from(document.querySelectorAll('.leader-card'));
  leaderCards.forEach((card, index) => {
    const entry = source.leaders[index] || CARD_TRANSLATIONS_LV.leaders[index];
    if (!entry) {
      return;
    }
    const lead = card.querySelector('.lead-strong');
    const body = card.querySelector('p:last-child');
    if (lead) {
      lead.textContent = entry.lead;
    }
    if (body) {
      body.textContent = entry.body;
    }
  });

  const reviewCards = Array.from(document.querySelectorAll('.review-card'));
  reviewCards.forEach((card, index) => {
    const id = Number.parseInt(card.dataset.reviewId || '', 10);
    const reviewIndex = Number.isNaN(id) ? index % CARD_TRANSLATIONS_LV.reviews.length : id;
    const entry = source.reviews[reviewIndex] || CARD_TRANSLATIONS_LV.reviews[reviewIndex];
    if (!entry) {
      return;
    }
    const name = card.querySelector('.review-name');
    const text = card.querySelector('.review-text');
    if (name) {
      name.textContent = entry.name;
    }
    if (text) {
      text.dataset.fulltext = entry.full;
    }
  });
}

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

  function isInteractiveTarget(target) {
    return target instanceof Element && Boolean(target.closest('button, a, input, textarea, select, label'));
  }

  const sourceCards = Array.from(track.querySelectorAll('.review-card'));
  sourceCards.forEach((card, index) => {
    card.dataset.reviewId = String(index);
  });
  if (sourceCards.length < 2) {
    return;
  }

  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dragThresholdPx = 8;
  const autoResumeDelayMs = 2800;
  let cardsPerView = 3;
  let currentIndex = 0;
  let isTransitioning = false;
  let autoSlideTimer;
  let autoResumeTimer;
  let wheelSnapTimer;
  let activePointerId = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartOffset = 0;
  let dragDeltaX = 0;
  let isDragging = false;
  let suppressClick = false;
  let wheelOffset = null;

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

  function getOffsetFromIndex() {
    return currentIndex * getStepPx();
  }

  function setOffset(offset, animate = false) {
    if (!animate) {
      track.style.transition = 'none';
      track.style.transform = `translate3d(-${offset}px, 0, 0)`;
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
      if (autoResumeTimer) {
        window.clearTimeout(autoResumeTimer);
        autoResumeTimer = undefined;
      }
      return;
    }
    window.clearInterval(autoSlideTimer);
    autoSlideTimer = undefined;
    if (autoResumeTimer) {
      window.clearTimeout(autoResumeTimer);
      autoResumeTimer = undefined;
    }
  }

  function startAutoSlide() {
    if (motionReduced) {
      return;
    }
    stopAutoSlide();
    autoSlideTimer = window.setInterval(goNext, 4200);
  }

  function pauseAutoSlide() {
    stopAutoSlide();
  }

  function resumeAutoSlideWithDelay(delayMs = autoResumeDelayMs) {
    if (motionReduced) {
      return;
    }
    if (autoResumeTimer) {
      window.clearTimeout(autoResumeTimer);
    }
    autoResumeTimer = window.setTimeout(() => {
      startAutoSlide();
    }, delayMs);
  }

  function snapToNearest(offset) {
    const stepPx = getStepPx();
    if (!stepPx) {
      setPosition(false);
      return;
    }

    const baseOffset = getOffsetFromIndex();
    const deltaOffset = offset - baseOffset;
    const steps = Math.round(deltaOffset / stepPx);

    if (!steps) {
      setPosition(true);
      return;
    }

    if (isTransitioning) {
      return;
    }
    isTransitioning = true;
    currentIndex += steps;
    setPosition(true);
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

  track.addEventListener('pointerdown', (event) => {
    if (isTransitioning) {
      return;
    }
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }
    if (isInteractiveTarget(event.target)) {
      return;
    }

    pauseAutoSlide();
    activePointerId = event.pointerId;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragStartOffset = getOffsetFromIndex();
    dragDeltaX = 0;
    isDragging = false;
    track.classList.add('is-dragging');
    if (event.pointerType !== 'touch') {
      track.setPointerCapture(event.pointerId);
    }
  });

  track.addEventListener('pointermove', (event) => {
    if (activePointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragStartX;
    const deltaY = event.clientY - dragStartY;

    if (!isDragging) {
      if (Math.abs(deltaX) < dragThresholdPx) {
        return;
      }
      if (Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
      }
      isDragging = true;
    }

    dragDeltaX = deltaX;
    suppressClick = true;
    setOffset(dragStartOffset - dragDeltaX, false);
  });

  function finishPointerInteraction(event) {
    if (activePointerId !== event.pointerId) {
      return;
    }

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    track.classList.remove('is-dragging');
    activePointerId = null;

    if (isDragging) {
      snapToNearest(dragStartOffset - dragDeltaX);
    } else {
      setPosition(true);
    }
    isDragging = false;
    dragDeltaX = 0;
    if (suppressClick) {
      window.setTimeout(() => {
        suppressClick = false;
      }, 180);
    }
    resumeAutoSlideWithDelay();
  }

  track.addEventListener('pointerup', finishPointerInteraction);
  track.addEventListener('pointercancel', finishPointerInteraction);

  track.addEventListener(
    'click',
    (event) => {
      if (!suppressClick) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    },
    true
  );

  track.addEventListener(
    'wheel',
    (event) => {
      if (isTransitioning || isDragging) {
        return;
      }

      const horizontalDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.shiftKey ? event.deltaY : 0;

      if (!horizontalDelta) {
        return;
      }

      event.preventDefault();
      pauseAutoSlide();

      const baseOffset = wheelOffset === null ? getOffsetFromIndex() : wheelOffset;
      wheelOffset = baseOffset + horizontalDelta;
      setOffset(wheelOffset, false);

      if (wheelSnapTimer) {
        window.clearTimeout(wheelSnapTimer);
      }
      wheelSnapTimer = window.setTimeout(() => {
        if (wheelOffset === null) {
          return;
        }
        const pendingOffset = wheelOffset;
        wheelOffset = null;
        snapToNearest(pendingOffset);
        resumeAutoSlideWithDelay();
      }, 130);
    },
    { passive: false }
  );

  track.addEventListener('mouseenter', pauseAutoSlide);
  track.addEventListener('mouseleave', () => resumeAutoSlideWithDelay(1200));
  track.addEventListener('focusin', pauseAutoSlide);
  track.addEventListener('focusout', () => resumeAutoSlideWithDelay(1200));

  let previousPerView = getCardsPerView();
  window.addEventListener('resize', () => {
    const nextPerView = getCardsPerView();
    if (nextPerView !== previousPerView) {
      previousPerView = nextPerView;
      rebuildTrack();
      resumeAutoSlideWithDelay(900);
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
  currentLanguage = activeLanguage;
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
  updateLanguageToggle(activeLanguage);

  applyLeaderAndReviewTranslations(activeLanguage);
  refreshFocusAccordion();
  updateLeaderDescriptionTruncation();
  setupReviewTruncation(reviewsTrack);
  document.querySelectorAll('.review-role').forEach((element) => {
    element.textContent = t('testimonials.roleParticipant', 'NOMETNES DALĪBNIECE');
  });
  refreshGalleryLightboxLabels();
}

function setupReviewTruncation(track = reviewsTrack) {
  if (!track) {
    return;
  }

  const reviewCards = Array.from(track.querySelectorAll('.review-card'));

  reviewCards.forEach((card) => {
    const paragraph = card.querySelector('.review-text');
    const toggleButton = card.querySelector('.read-more');
    if (!paragraph) {
      return;
    }

    const fullText = paragraph.dataset.fulltext || paragraph.textContent.trim();
    paragraph.dataset.fulltext = fullText;
    paragraph.textContent = fullText;

    if (!toggleButton) {
      return;
    }

    toggleButton.textContent = t('reviews.readMore', 'Lasīt vairāk');
  });
}

function setupReviewModal(track = reviewsTrack) {
  if (!track || track.dataset.reviewModalBound === 'true') {
    return;
  }

  track.dataset.reviewModalBound = 'true';
  const sourceCards = Array.from(track.querySelectorAll('.review-card')).filter((card) => card.dataset.clone !== 'true');
  if (!sourceCards.length) {
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'review-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <button type="button" class="review-modal-nav review-modal-prev" aria-label="">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 5.5 8 12l6.5 6.5"></path>
      </svg>
    </button>
    <div class="review-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="reviewModalTitle">
      <button type="button" class="review-modal-close" aria-label=""></button>
      <p class="review-modal-role"></p>
      <h3 class="review-modal-title" id="reviewModalTitle"></h3>
      <div class="review-modal-body"></div>
    </div>
    <button type="button" class="review-modal-nav review-modal-next" aria-label="">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9.5 5.5 16 12l-6.5 6.5"></path>
      </svg>
    </button>
  `;

  document.body.appendChild(modal);

  const dialog = modal.querySelector('.review-modal-dialog');
  const prevButton = modal.querySelector('.review-modal-prev');
  const closeButton = modal.querySelector('.review-modal-close');
  const nextButton = modal.querySelector('.review-modal-next');
  const roleElement = modal.querySelector('.review-modal-role');
  const titleElement = modal.querySelector('.review-modal-title');
  const bodyElement = modal.querySelector('.review-modal-body');

  if (!dialog || !prevButton || !closeButton || !nextButton || !roleElement || !titleElement || !bodyElement) {
    modal.remove();
    return;
  }

  let lastFocusedElement = null;
  let activeIndex = 0;

  function getFocusableElements() {
    return Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.offsetParent !== null);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('review-modal-open');
    bodyElement.textContent = '';
    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  function updateModalContent() {
    const card = sourceCards[activeIndex];
    if (!card) {
      return;
    }

    const textElement = card.querySelector('.review-text');
    const title = card.querySelector('.review-name')?.textContent?.trim() || '';
    const role = card.querySelector('.review-role')?.textContent?.trim() || '';
    const fullText = textElement?.dataset.fulltext?.trim() || textElement?.textContent?.trim() || '';

    titleElement.textContent = title;
    roleElement.textContent = role;
    bodyElement.textContent = fullText;
    closeButton.setAttribute('aria-label', t('reviews.modalClose', 'Aizvērt atsauksmi'));
    prevButton.setAttribute('aria-label', t('reviews.modalPrev', 'Iepriekšējā atsauksme'));
    nextButton.setAttribute('aria-label', t('reviews.modalNext', 'Nākamā atsauksme'));
  }

  function openModal(card, trigger) {
    const cardIndex = sourceCards.findIndex((sourceCard) => sourceCard.dataset.reviewId === card.dataset.reviewId);
    activeIndex = cardIndex >= 0 ? cardIndex : 0;
    updateModalContent();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('review-modal-open');
    lastFocusedElement = trigger;
    closeButton.focus();
  }

  function showPrevious() {
    activeIndex = (activeIndex - 1 + sourceCards.length) % sourceCards.length;
    updateModalContent();
  }

  function showNext() {
    activeIndex = (activeIndex + 1) % sourceCards.length;
    updateModalContent();
  }

  track.addEventListener('click', (event) => {
    const toggleButton = event.target.closest('.read-more');
    if (!toggleButton || !track.contains(toggleButton)) {
      return;
    }

    const card = toggleButton.closest('.review-card');
    if (!card) {
      return;
    }

    openModal(card, toggleButton);
  });

  prevButton.addEventListener('click', showPrevious);
  closeButton.addEventListener('click', closeModal);
  nextButton.addEventListener('click', showNext);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = getFocusableElements();
    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });
}

function refreshGalleryLightboxLabels() {
  const galleryImages = Array.from(document.querySelectorAll('.mosaic-grid img'));
  const total = galleryImages.length;
  galleryImages.forEach((image, index) => {
    image.setAttribute('aria-label', `${t('gallery.lightbox.openImage', 'Open image')} ${index + 1} ${t('gallery.lightbox.of', 'of')} ${total}`);
  });

  const closeButton = document.querySelector('.gallery-lightbox-close');
  const prevButton = document.querySelector('.gallery-lightbox-prev');
  const nextButton = document.querySelector('.gallery-lightbox-next');
  if (closeButton) {
    closeButton.setAttribute('aria-label', t('gallery.lightbox.close', 'Close image viewer'));
  }
  if (prevButton) {
    prevButton.setAttribute('aria-label', t('gallery.lightbox.prev', 'Previous image'));
  }
  if (nextButton) {
    nextButton.setAttribute('aria-label', t('gallery.lightbox.next', 'Next image'));
  }
}

function setupScrollReveal() {
  const galleryTargets = Array.from(document.querySelectorAll('.mosaic-grid img'));
  const textTargets = Array.from(
    document.querySelectorAll('.hero-content, .section-head, .about-text, .focus-points article, .contact-info, .contact-card')
  );
  const mediaTargets = Array.from(
    document.querySelectorAll('.focus-layout img, .about-image, .leader-card, .review-card')
  );
  const allTargets = [...new Set([...textTargets, ...mediaTargets, ...galleryTargets])];

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

  galleryTargets.forEach((element, index) => {
    element.classList.add('reveal-gallery');
    element.style.transitionDelay = `${Math.min(index * 70, 770)}ms`;
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

function setupGalleryLightbox() {
  const galleryImages = Array.from(document.querySelectorAll('.mosaic-grid img'));
  if (!galleryImages.length) {
    return;
  }

  const galleryMoreHref = document.querySelector('.see-more')?.getAttribute('href') || 'gallery.html';

  const lightbox = document.createElement('div');
  lightbox.className = 'gallery-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button type="button" class="gallery-lightbox-btn gallery-lightbox-close" aria-label="">&times;</button>
    <button type="button" class="gallery-lightbox-btn gallery-lightbox-prev" aria-label="">&#8249;</button>
    <img class="gallery-lightbox-media" src="" alt="" />
    <button type="button" class="gallery-lightbox-btn gallery-lightbox-next" aria-label="">&#8250;</button>
  `;
  document.body.appendChild(lightbox);

  const media = lightbox.querySelector('.gallery-lightbox-media');
  const closeButton = lightbox.querySelector('.gallery-lightbox-close');
  const prevButton = lightbox.querySelector('.gallery-lightbox-prev');
  const nextButton = lightbox.querySelector('.gallery-lightbox-next');
  if (!media || !closeButton || !prevButton || !nextButton) {
    lightbox.remove();
    return;
  }

  let activeIndex = 0;
  let lastFocusedElement = null;

  function updateNextButtonState() {
    const isLastImage = activeIndex === galleryImages.length - 1;
    nextButton.classList.toggle('is-more-link', isLastImage);
    nextButton.innerHTML = isLastImage ? `<span>${t('gallery.more', 'Skatīt vairāk')}</span>` : '&#8250;';
    nextButton.setAttribute(
      'aria-label',
      isLastImage ? t('gallery.more', 'Skatīt vairāk') : t('gallery.lightbox.next', 'Next image')
    );
  }

  function updateMedia() {
    const sourceImage = galleryImages[activeIndex];
    if (!sourceImage) {
      return;
    }
    media.src = sourceImage.currentSrc || sourceImage.src;
    media.alt = sourceImage.alt || '';
    updateNextButtonState();
  }

  function open(index) {
    activeIndex = index;
    updateMedia();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lastFocusedElement = document.activeElement;
    closeButton.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    media.removeAttribute('src');
    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  function showPrevious() {
    activeIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    updateMedia();
  }

  function showNext() {
    if (activeIndex === galleryImages.length - 1) {
      window.location.href = galleryMoreHref;
      return;
    }

    activeIndex += 1;
    updateMedia();
  }

  if (galleryImages.length < 2) {
    prevButton.hidden = true;
    nextButton.hidden = true;
  }

  galleryImages.forEach((image, index) => {
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.addEventListener('click', () => open(index));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(index);
      }
    });
  });

  closeButton.addEventListener('click', close);
  prevButton.addEventListener('click', showPrevious);
  nextButton.addEventListener('click', showNext);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      close();
      return;
    }
    if (event.key === 'ArrowLeft') {
      showPrevious();
      return;
    }
    if (event.key === 'ArrowRight') {
      showNext();
    }
  });

  refreshGalleryLightboxLabels();
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
  setupReviewModal(reviewsTrack);
}

const savedLanguage = localStorage.getItem('preferredLanguage') || 'lv';
applyTranslations(savedLanguage);

if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyTranslations(langToggle.dataset.lang || getNextLanguage(currentLanguage));
  });
}

setupScrollReveal();
initializeLucideIcons();
setupActiveNavLinks();
setupFocusAccordion();
setupLeaderCardTextBehavior();
setupGalleryLightbox();
