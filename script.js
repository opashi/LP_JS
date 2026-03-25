if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

$('.slider').slick({
  autoplaySpeed: 3000,
  speed: 1000,
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
  $('.slider').slick('slickPlay');
});

// ▼ スマホ・タブレット用タップイベント
document.querySelectorAll('.profile').forEach(card => {
  card.addEventListener('click', function () {

    // 他のカードが active の場合は解除
    document.querySelectorAll('.profile.active').forEach(activeCard => {
      if (activeCard !== this) {
        activeCard.classList.remove('active');
      }
    });

    // 自分をトグル
    this.classList.toggle('active');
  });
});

// ▼ スプラッシュスクリーン
$(window).on('load', function() {
  $('#splash').delay(1500).fadeOut('slow');
  $('#splash-logo').delay(1200).fadeOut('slow');
});

// PC版 Planの表示
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".plan");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
        }
        else {
          entry.target.classList.remove("is-show");
        }
      });
    },
    {
      threshold: 0.3 // 30%表示されたら発火
    }
  );

  targets.forEach(target => observer.observe(target));
});

$(function(){
	var btNo;
	$(".accordion .accordion-btn").click(function(){
    btNo = $(this).index()+9;
    console.log("btNo: " + btNo);
		var activeNo =  $(".accordion div.active").index()+1;
    console.log("activeNo: " + activeNo);
		$(".accordion-content").removeClass("active");
		$(".accordion-content:nth-child(" + (btNo)  +")").addClass("active");
		$(".accordion-btn").removeClass("thisOn");
		$(this).addClass("thisOn");

		if( btNo == activeNo ){ $(".accordion-content").removeClass("active"); $(".accordion-btn").removeClass("thisOn"); }

    // 他のアコーディオンが active の場合は解除
    document.querySelectorAll('.accordion-btn.active').forEach(activeAccordion => {
      if (activeAccordion !== this) {
        activeAccordion.classList.remove('active');
      }
    });

    // 自分をトグル
    this.classList.add('active');
	});

  $(".accordion-mobile .accordion-btn").click(function(){
    var btnIndex = $(this).index();
    var btNo;
    if (btnIndex <= 4) {
      btNo = btnIndex + 6;
    } else if (btnIndex <= 14) {
      btNo = btnIndex + 6;
    } else if (btnIndex <= 24) {
      btNo = btnIndex + 6;
    } else if (btnIndex <= 34) {
      btNo = btnIndex + 6;
    } else if (btnIndex <= 44) {
      btNo = btnIndex + 6;
    } else if (btnIndex <= 54) {
      btNo = btnIndex + 6;
    } else {
      btNo = btnIndex + 3;
    }
    console.log("btNo: " + btNo);
		var activeNo =  $(".accordion-mobile div.active").index()+1;
    console.log("activeNo: " + activeNo);
		$(".accordion-content").removeClass("active");
		$(".accordion-content:nth-child(" + (btNo)  +")").addClass("active");
		$(".accordion-btn").removeClass("thisOn");
		$(this).addClass("thisOn");

		if( btNo == activeNo ){ $(".accordion-content").removeClass("active"); $(".accordion-btn").removeClass("thisOn"); }

    // 他のアコーディオンが active の場合は解除
    document.querySelectorAll('.accordion-btn.active').forEach(activeAccordion => {
      if (activeAccordion !== this) {
        activeAccordion.classList.remove('active');
      }
    });

    // 自分をトグル
    this.classList.add('active');
	});
});