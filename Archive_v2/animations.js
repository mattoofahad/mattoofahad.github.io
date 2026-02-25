(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var revealElements = document.querySelectorAll('[data-reveal]');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = parseInt(entry.target.dataset.revealDelay, 10) || 0;
            setTimeout(function () {
              entry.target.classList.add('revealed');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      revealElements.forEach(function (el) {
        var siblings = el.parentElement.querySelectorAll('[data-reveal]');
        var siblingIdx = Array.from(siblings).indexOf(el);
        el.dataset.revealDelay = siblingIdx * 80;
        observer.observe(el);
      });
    } else {
      revealElements.forEach(function (el) {
        el.classList.add('revealed');
      });
    }
  });
})();
