const teamTrack = document.getElementById('teamTrack');
const prevBtn = document.getElementById('teamPrev');
const nextBtn = document.getElementById('teamNext');

function getScrollAmount() {
  const firstCard = teamTrack.querySelector('.team-card');
  if (!firstCard) {
    return 260;
  }
  const style = window.getComputedStyle(teamTrack);
  const gap = parseInt(style.columnGap || style.gap || '0', 10);
  return firstCard.getBoundingClientRect().width + gap;
}

prevBtn.addEventListener('click', () => {
  teamTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  teamTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});
