let current = 0;
let startX = 0;
let isSwiping = false;

function showSlide(index) {
  const images = document.querySelectorAll('.fade-slider img');
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function startAutoSlide() {
  const images = document.querySelectorAll('.fade-slider img');
  const total = images.length;

  setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
  }, 3000);
}

function setupSwipe() {
  const slider = document.querySelector('.fade-slider');
  const images = document.querySelectorAll('.fade-slider img');
  const total = images.length;

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
  });

  slider.addEventListener("touchend", (e) => {
    if (!isSwiping) return;
    let endX = e.changedTouches[0].clientX;

    // スワイプ判定（50px以上）
    if (startX - endX > 50) {
      // 次へ
      current = (current + 1) % total;
    } else if (endX - startX > 50) {
      // 前へ
      current = (current - 1 + total) % total;
    }

    showSlide(current);
    isSwiping = false;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
  startAutoSlide();
  setupSwipe();
});
