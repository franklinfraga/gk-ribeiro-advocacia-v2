document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var shareBtn = document.getElementById('share-btn');
  var shareMenu = document.getElementById('share-menu');
  var shareMsg = document.getElementById('share-msg');

  if (!shareBtn || !shareMenu) return;

  var canonicalLink = document.querySelector('link[rel="canonical"]');
  var pageUrl = (canonicalLink && canonicalLink.href) ? canonicalLink.href : window.location.href;
  var titleNode = document.querySelector('h1');
  var pageTitle = ((titleNode && titleNode.textContent) || document.title || 'Compartilhar').trim();
  var shareText = pageTitle + ' ' + pageUrl;
  var shareGrid = shareMenu.querySelector('div');

  function setMenuOpen(open) {
    shareMenu.hidden = !open;
    shareBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function showCopyMessage() {
    if (!shareMsg) return;
    shareMsg.hidden = false;
    window.clearTimeout(showCopyMessage._timer);
    showCopyMessage._timer = window.setTimeout(function () {
      shareMsg.hidden = true;
    }, 2000);
  }

  function copyToClipboard() {
    function success() {
      setMenuOpen(false);
      showCopyMessage();
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(pageUrl).then(success).catch(fallbackCopy);
      return;
    }

    fallbackCopy();

    function fallbackCopy() {
      var textarea = document.createElement('textarea');
      textarea.value = pageUrl;
      textarea.setAttribute('readonly', 'readonly');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        success();
      } catch (err) {
        // No-op: clipboard may be unavailable in this browser context.
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  function buildShareUrl(network) {
    var encodedUrl = encodeURIComponent(pageUrl);
    var encodedTitle = encodeURIComponent(pageTitle);
    var encodedText = encodeURIComponent(shareText);

    if (network === 'email') {
      return 'mailto:?subject=' + encodedTitle + '&body=' + encodedText;
    }
    if (network === 'whatsapp') {
      return 'https://wa.me/?text=' + encodedText;
    }
    if (network === 'telegram') {
      return 'https://telegram.me/share/url?url=' + encodedUrl + '&text=' + encodedTitle;
    }
    if (network === 'facebook') {
      return 'https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl;
    }
    if (network === 'linkedin') {
      return 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '&title=' + encodedTitle;
    }
    return '#';
  }

  function syncShareLinks() {
    shareMenu.querySelectorAll('[data-share]').forEach(function (item) {
      var network = item.getAttribute('data-share');
      if (network === 'copy') {
        item.setAttribute('type', 'button');
        item.setAttribute('aria-label', 'Copiar link');
        item.addEventListener('click', function (e) {
          e.preventDefault();
          copyToClipboard();
        });
        return;
      }

      var href = buildShareUrl(network);
      item.setAttribute('href', href);
      item.setAttribute('target', '_blank');
      item.setAttribute('rel', 'noopener noreferrer');
      item.setAttribute('aria-label', item.getAttribute('aria-label') || item.textContent.trim());
      item.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });
  }

  function syncShareLayout() {
    if (!shareGrid) return;
    if (window.innerWidth < 560) {
      shareGrid.style.gridTemplateColumns = 'repeat(2, minmax(0, 1fr))';
    } else {
      shareGrid.style.gridTemplateColumns = 'repeat(3, minmax(0, 1fr))';
    }
  }

  shareBtn.setAttribute('aria-controls', 'share-menu');
  shareBtn.setAttribute('aria-expanded', 'false');
  setMenuOpen(false);
  syncShareLinks();
  syncShareLayout();
  window.addEventListener('resize', syncShareLayout, { passive: true });

  shareBtn.addEventListener('click', function () {
    if (navigator.share) {
      try {
        var shareResult = navigator.share({ title: pageTitle, url: pageUrl });
        if (shareResult && typeof shareResult.catch === 'function') {
          shareResult.catch(function () {
            setMenuOpen(!shareMenu.hidden);
          });
        }
      } catch (err) {
        setMenuOpen(!shareMenu.hidden);
      }
      return;
    }

    setMenuOpen(shareMenu.hidden);
  });

  document.addEventListener('click', function (event) {
    if (!shareMenu.hidden && !shareMenu.contains(event.target) && event.target !== shareBtn && !shareBtn.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  });
});
