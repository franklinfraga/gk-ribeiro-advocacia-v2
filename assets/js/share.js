document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var shareBtn = document.getElementById('share-btn');
  if (!shareBtn) return;
  var shareMenu = document.getElementById('share-menu');
  var shareMsg = document.getElementById('share-msg');
  var pageTitle = document.title || document.querySelector('h1')?.textContent || 'Compartilhar';
  var pageUrl = window.location.href;
  shareBtn.addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({ title: pageTitle, url: pageUrl }).catch(function () {});
    } else {
      shareMenu.style.display = shareMenu.style.display === 'none' ? 'block' : 'none';
    }
  });
  document.querySelectorAll('[data-share-link]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); window.open(this.href, '_blank', 'width=600,height=500'); });
  });
  var copyItem = document.querySelector('[data-share="copy"]');
  if (copyItem) {
    copyItem.addEventListener('click', function (e) {
      e.preventDefault();
      navigator.clipboard.writeText(pageUrl).then(function () {
        shareMenu.style.display = 'none';
        if (shareMsg) { shareMsg.style.display = 'inline'; setTimeout(function () { shareMsg.style.display = 'none'; }, 2000); }
      }).catch(function () {});
    });
  }
});