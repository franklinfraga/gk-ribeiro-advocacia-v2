document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var shareBtn = document.getElementById('share-btn');
  if (!shareBtn) return;
  var shareMenu = document.getElementById('share-menu');
  var shareMsg = document.getElementById('share-msg');
  var pageUrl = window.location.href;
  shareBtn.addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({ title: document.title, url: pageUrl }).catch(function () {});
    } else {
      if (shareMenu) { shareMenu.style.display = shareMenu.style.display === 'none' ? 'block' : 'none'; }
    }
  });
  var copyItem = document.querySelector('[data-share="copy"]');
  if (copyItem) {
    copyItem.addEventListener('click', function (e) {
      e.preventDefault();
      navigator.clipboard.writeText(pageUrl).then(function () {
        if (shareMenu) { shareMenu.style.display = 'none'; }
        if (shareMsg) { shareMsg.style.display = 'inline'; setTimeout(function () { shareMsg.style.display = 'none'; }, 2000); }
      }).catch(function () {});
    });
  }
});

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  var evt = new Event('DOMContentLoaded');
  document.dispatchEvent(evt);
}