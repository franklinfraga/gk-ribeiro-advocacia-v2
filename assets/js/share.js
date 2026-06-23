document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var shareBtn = document.getElementById('share-btn');
  if (!shareBtn) return;
  var shareMenu = document.getElementById('share-menu');
  var shareMsg = document.getElementById('share-msg');
  shareBtn.addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({
        title: 'Como Iniciar sua Acao Trabalhista no TRT-2',
        url: 'https://gkribeiro.adv.br/blog/acao-trabalhista-trt2-guia.html'
      }).catch(function () {});
    } else {
      shareMenu.style.display = shareMenu.style.display === 'none' ? 'block' : 'none';
    }
  });
  var copyItem = document.querySelector('.share-item[data-action="copy"]');
  if (copyItem) {
    copyItem.addEventListener('click', function (e) {
      e.preventDefault();
      navigator.clipboard.writeText('https://gkribeiro.adv.br/blog/acao-trabalhista-trt2-guia.html').then(function () {
        shareMenu.style.display = 'none';
        shareMsg.style.display = 'inline';
        setTimeout(function () {
          shareMsg.style.display = 'none';
        }, 2000);
      }).catch(function () {});
    });
  }
});