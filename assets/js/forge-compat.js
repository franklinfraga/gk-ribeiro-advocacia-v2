(function(){
'use strict';

// Theme toggle
(function(){
  var root = document.documentElement;
  var saved = localStorage.getItem('gk-theme');
  if (saved) root.setAttribute('data-theme', saved);
})();

// Year
document.querySelectorAll('[data-year]').forEach(function(el){
  el.textContent = new Date().getFullYear();
});

// ============ Replace old site-header with masthead ============
(function(){
  var oldHeader = document.querySelector('.site-header');
  if (!oldHeader) return;

  // Determine path prefix
  var path = window.location.pathname;
  var prefix = '';
  if (path.indexOf('/blog/') >= 0 || path.indexOf('/bairros/') >= 0) {
    prefix = '../';
  }

  // Build masthead HTML (identical to index)
  var masthead = document.createElement('header');
  masthead.className = 'masthead';
  masthead.innerHTML = '<div class="wrap">' +
    '<div class="masthead-row">' +
      '<div class="brand"><a href="' + prefix + 'index.html" aria-label="GK Ribeiro Advocacia Trabalhista e Previdenci\u00e1ria">' +
        '<svg width="135" height="105" viewBox="0 0 195 152" role="img" style="display:block;height:105px;width:auto;">' +
          '<title>GK Ribeiro</title><desc>S\u00edmbolo GK</desc>' +
          '<path fill="var(--logo-primary)" stroke="var(--logo-stroke)" stroke-width="14" stroke-linejoin="round" paint-order="stroke fill" transform="scale(0.169271 0.169271)" d="M564.197 221.82C565.194 223.228 564.779 345.443 564.758 354.306C546.583 354.164 528.407 354.163 510.232 354.302L510.182 290.851C483.751 297.629 450.325 307.897 424.146 313.079C424.969 345.338 423.624 379.104 424.215 411.487C424.483 426.142 423.366 444.906 425.257 459.048C430.516 498.374 450.009 533.559 477.551 561.734C488.216 572.644 498.238 580.379 510.205 589.537L510.212 453.563C494.514 453.146 475.516 453.725 459.69 453.84L459.708 400.873C472.221 400.372 486.286 400.657 498.958 400.656L564.753 400.553C564.902 410.634 564.787 421.021 564.798 431.126L564.803 682.866C520.868 665.545 472.66 634.351 439.446 600.991C401.632 563.011 375.028 514.131 370.154 460.202C369.303 450.788 369.55 440.945 369.559 431.5L369.607 390.737L369.584 272.036C410.37 262.095 451.199 250.652 491.933 240.351C515.753 234.327 540.209 226.901 564.197 221.82Z"/>' +
          '<path fill="var(--logo-secondary)" stroke="var(--logo-stroke)" stroke-width="14" stroke-linejoin="round" paint-order="stroke fill" transform="scale(0.169271 0.169271)" d="M594.384 222.513C610.557 225.254 632.945 231.824 649.488 236.005C649.873 254.369 649.574 273.718 649.579 292.141L649.63 396.086C677.662 378.577 705.431 360.168 733.41 342.833C732.575 315.893 733.275 285.217 733.293 258.006C750.353 261.73 771.76 267.292 788.626 272.172C788.953 304.927 788.685 338.312 788.609 371.101C770.704 382.878 751.812 393.514 733.977 405.218C735.931 406.56 738.041 408.475 739.842 410.062C756.129 424.407 773.334 438.113 789.31 452.779C789.184 461.986 786.533 478.668 784.337 487.579C766.318 560.679 715.306 614.678 652.794 653.119C634.13 664.479 614.635 674.413 594.474 682.835C594.205 662.556 594.188 642.275 594.423 621.996C602.188 617.201 613.125 612.819 621.574 607.619C676.088 574.071 715.573 535.555 730.864 472.135L685.955 435.673C673.867 443.535 661.701 451.277 649.459 458.897C649.926 469.137 649.519 482.857 649.517 493.319L649.507 560.237C636.252 573.286 611.07 587.941 594.506 596.182C594.878 561.307 594.311 525.184 594.329 490.16L594.384 222.513Z"/>' +
        '</svg></a></div>' +
      '<nav class="primary-nav">' +
        '<a href="' + prefix + 'index.html">In\u00edcio</a>' +
        '<a href="' + prefix + 'blog.html">Blog</a>' +
        '<a href="' + prefix + 'trabalhista.html">Trabalhista</a>' +
        '<a href="' + prefix + 'previdenciario.html">Previdenci\u00e1rio</a>' +
        '<a href="' + prefix + 'sobre.html">Sobre</a>' +
        '<a href="' + prefix + 'localizacao.html">Localiza\u00e7\u00e3o</a>' +
        '<a href="' + prefix + 'contato.html">Contato</a>' +
        '<button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema"><span data-theme-label>\uD83C\uDF19</span></button>' +
        '<button class="nav-mobile-toggle" data-nav-toggle aria-label="Abrir menu" style="display:none;">\u2630 Menu</button>' +
      '</nav>' +
    '</div>' +
    '<div class="masthead-meta"><span>Dra. Greice Kelli Ribeiro</span><span class="ornament">\u00a7</span><span>OAB/SP 387.933</span><span class="ornament">\u00a7</span><span>Atendimento presencial e online</span><span class="spacer"></span><span>S\u00e3o Paulo - SP</span></div>' +
    '<div class="progress-line" id="progress-line"></div>' +
  '</div>';

  // Replace old header
  oldHeader.parentNode.replaceChild(masthead, oldHeader);

  // Setup theme toggle
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    var label = toggle.querySelector('[data-theme-label]');
    var saved = localStorage.getItem('gk-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
      label.textContent = saved === 'dim' ? '\u2600' : '\uD83C\uDF19';
    }
    toggle.addEventListener('click', function(){
      var root = document.documentElement;
      var cur = root.getAttribute('data-theme');
      var next = cur === 'dim' ? 'light' : 'dim';
      root.setAttribute('data-theme', next);
      label.textContent = next === 'dim' ? '\u2600' : '\uD83C\uDF19';
      localStorage.setItem('gk-theme', next);
    });
  }

  // Progress line
  var progressLine = document.getElementById('progress-line');
  if (progressLine) {
    function update(){
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progressLine.style.width = (docHeight > 0 ? Math.min(1, scrollTop / docHeight) * 100 : 0) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Mobile nav
  var navToggle = document.querySelector('[data-nav-toggle]');
  if (navToggle) {
    var nav = document.querySelector('.primary-nav');
    if (nav) {
      navToggle.addEventListener('click', function(){
        nav.classList.toggle('open');
        this.textContent = nav.classList.contains('open') ? '\u2715 Fechar' : '\u2630 Menu';
      });
    }
  }
})();

// ============ Replace old site-footer with colophon ============
(function(){
  var oldFooter = document.querySelector('.site-footer');
  if (!oldFooter) return;

  var path = window.location.pathname;
  var prefix = '';
  if (path.indexOf('/blog/') >= 0 || path.indexOf('/bairros/') >= 0) {
    prefix = '../';
  }

  var colophon = document.createElement('footer');
  colophon.className = 'colophon';
  colophon.innerHTML = '<div class="wrap"><div class="colophon-grid">' +
    '<div class="col-block"><h4>GK Ribeiro Advocacia</h4><p><em>Dra. Greice Kelli Ribeiro</em> \u00b7 OAB/SP 387.933<br>Advocacia Trabalhista e Previdenci\u00e1ria.</p></div>' +
    '<div class="col-block"><h4>Endere\u00e7os</h4><p><em>Zona Leste:</em> Rua In\u00e1cio Monteiro, 2220, Jardim S\u00e3o Paulo<br><em>Centro:</em> Rua L\u00edbero Badar\u00f3, 101, 12 andar</p></div>' +
    '<div class="col-block"><h4>Contato</h4><ul>' +
      '<li><a href="tel:+5511957314252">(11) 95731-4252</a></li>' +
      '<li><a href="mailto:atendimento@gkribeiro.adv.br">atendimento@gkribeiro.adv.br</a></li>' +
      '<li><a href="https://www.instagram.com/gkribeiro.adv/" target="_blank" rel="noopener">@gkribeiro.adv</a></li>' +
    '</ul></div></div>' +
    '<div class="colophon-foot"><span>GK Ribeiro Advocacia Trabalhista e Previdenci\u00e1ria</span><span class="colophon-mark">\u2014 S\u00e3o Paulo - SP \u2014</span><span>\u00a9 <span data-year></span> \u00b7 conte\u00fado informativo</span></div></div>';

  oldFooter.parentNode.replaceChild(colophon, oldFooter);
  // Re-run year filler
  document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });
})();

// ============ Standardize WhatsApp links ============
(function(){
  var msg = 'Ol\u00e1, vim pelo site da GK Ribeiro Advocacia e gostaria de informa\u00e7\u00f5es sobre atendimento.';
  var standardUrl = 'https://wa.me/5511957314252?text=' + encodeURIComponent(msg);
  document.querySelectorAll('.floating-whatsapp, .btn-primary[href*="wa.me"], .btn-light[href*="wa.me"]').forEach(function(el){
    if (el.href && el.href.indexOf('wa.me') > 0) {
      el.href = standardUrl;
    }
  });
  // Also fix WhatsApp buttons in section-actions
  document.querySelectorAll('.section-actions a[href*="wa.me"]').forEach(function(el){
    if (el.href.indexOf('wa.me') > 0 && el.href.indexOf('5511957314252') > 0) {
      el.href = standardUrl;
    }
  });
})();

// ============ Inject chapter-toc sidebar ============
(function(){
  var contentGrid = document.querySelector('.content-grid');
  var existingToc = document.querySelector('.chapter-toc');
  if (!contentGrid || existingToc) return;
  if (window.innerWidth < 900) return;

  var toc = document.createElement('aside');
  toc.className = 'chapter-toc';

  var path = window.location.pathname;
  var prefix = '';
  if (path.indexOf('/bairros/') >= 0) {
    prefix = '../';
  }

  var pageLinks = [
    {name: 'In\u00edcio', url: prefix + 'index.html'},
    {name: 'Blog', url: prefix + 'blog.html'},
    {name: 'Trabalhista', url: prefix + 'trabalhista.html'},
    {name: 'Previdenci\u00e1rio', url: prefix + 'previdenciario.html'},
    {name: 'Sobre', url: prefix + 'sobre.html'},
    {name: 'Localiza\u00e7\u00e3o', url: prefix + 'localizacao.html'},
    {name: 'Contato', url: prefix + 'contato.html'}
  ];

  var currentPath = window.location.pathname.split('/').pop();

  // Build "Nesta p\u00e1gina" from h2
  var articleBody = document.querySelector('.article-body');
  var nestaHtml = '<div class="toc-section"><div class="toc-label">Nesta p\u00e1gina</div><ul class="toc-list">';
  if (articleBody) {
    articleBody.querySelectorAll('h2').forEach(function(h){
      var id = h.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      h.id = h.id || id;
      nestaHtml += '<li><a href="#' + h.id + '">' + h.textContent + '</a></li>';
    });
  }
  nestaHtml += '</ul></div>';
  toc.innerHTML = nestaHtml;

  // Build "Links r\u00e1pidos"
  var linksHtml = '<div class="toc-section"><div class="toc-label">Links r\u00e1pidos</div><ul class="toc-list">';
  pageLinks.forEach(function(link){
    var linkFile = link.url.split('/').pop();
    if (linkFile !== currentPath) {
      linksHtml += '<li><a href="' + link.url + '">' + link.name + '</a></li>';
    }
  });
  linksHtml += '</ul></div>';
  toc.innerHTML += linksHtml;

  // Add class to content-grid for CSS targeting
  contentGrid.classList.add('has-toc');
  
  // Insert before article-body
  if (articleBody) {
    contentGrid.insertBefore(toc, articleBody);
  } else {
    contentGrid.insertBefore(toc, contentGrid.firstChild);
  }
})();
})();