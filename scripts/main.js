document.addEventListener('DOMContentLoaded', function(){
  loading.classList.add('loaded');
  // mobile-btnをクリックした時
  mobileBtn.addEventListener('click', function(){
    container.classList.toggle('menu-open');
  });
  
  // mobile-menu__coverをクリックした時
  cover.addEventListener('click', function(){
    container.classList.toggle('menu-open');
  });
  
  // fadeInクラスが画面下から100px内側で交差したらshowクラスをつける
  new ScrollObserver('.fadeIn', _showAnimation,{rootMargin: "-100px"});

  // pageTopTriggerクラスが画面下から100px内側で交差したらshowクラスをつける
  new ScrollObserver('.pageTopTrigger', _pageTopAnimation,{rootMargin: "-300px 0px", once: false});
});

const mobileBtn = document.querySelector('.mobile-menu__btn');
const container = document.querySelector('.global-container');
const cover = document.querySelector('.mobile-menu__cover');
const loading = document.querySelector('.loading');

function _showAnimation(el, show) {
  if(show) {
    el.classList.add('show');
  }else {
      el.classList.remove('show');
  }
};

function _pageTopAnimation(el, show) {
  if(show) {
    el.classList.toggle('show');
  }

};