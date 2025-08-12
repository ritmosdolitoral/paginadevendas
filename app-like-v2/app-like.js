(function(){
  const EASE = 'cubic-bezier(.2,.8,.2,1)';
  const DURATION = 180; // within 150–200ms

  let firstFocusableInDrawer = null;
  let lastFocusableInDrawer = null;
  let lastFocusedBeforeOpen = null;

  function qs(sel, root=document){ return root.querySelector(sel); }
  function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

  function getHash(){ return window.location.hash || '#inicio'; }

  function ensureAnchors(){
    // Map current sections to required anchors without replacing existing IDs
    const map = [
      ['#inicio', ['#hero']],
      ['#problema', ['#dor']],
      ['#causa', ['#causa']],
      ['#solucao', ['#solucao']],
      ['#resultados', ['#prova']],
      ['#planos', ['#planos']]
    ];
    map.forEach(([target, candidates]) => {
      if(document.getElementById(target.slice(1))) return;
      for(const sel of candidates){
        const el = document.querySelector(sel);
        if(el){
          const a = document.createElement('span');
          a.id = target.slice(1);
          a.setAttribute('aria-hidden', 'true');
          a.style.position = 'relative';
          a.style.top = '-1px';
          el.prepend(a);
          break;
        }
      }
    });
  }

  function buildShell(){
    if(qs('#app-shell-mounted')) return; // idempotent

    const overlay = document.createElement('div');
    overlay.className = 'app-overlay';
    overlay.id = 'app-overlay';
    overlay.setAttribute('hidden', '');

    const drawer = document.createElement('aside');
    drawer.id = 'app-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <nav class="app-nav" aria-label="Navegação">
        <a href="#inicio">Início</a>
        <a href="#problema">O Problema</a>
        <a href="#causa">Por Que Acontece</a>
        <a href="#solucao">Nossa Solução</a>
        <a href="#resultados">Resultados</a>
        <a href="#planos">Planos</a>
      </nav>
    `;

    const fab = document.createElement('button');
    fab.className = 'app-fab';
    fab.id = 'app-fab';
    fab.setAttribute('aria-label', 'Abrir menu');
    fab.setAttribute('aria-expanded', 'false');
    fab.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';

    const sidebar = document.createElement('aside');
    sidebar.id = 'app-sidebar';
    sidebar.innerHTML = `
      <div class="app-brand"><i class="fas fa-bolt"></i><span>CONEXAO BUZIOS</span></div>
      <nav class="app-nav" aria-label="Navegação">
        <a href="#inicio">Início</a>
        <a href="#problema">O Problema</a>
        <a href="#causa">Por Que Acontece</a>
        <a href="#solucao">Nossa Solução</a>
        <a href="#resultados">Resultados</a>
        <a href="#planos">Planos</a>
      </nav>
    `;

    // marker for idempotency
    const marker = document.createElement('meta');
    marker.id = 'app-shell-mounted';

    document.body.appendChild(marker);
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    document.body.appendChild(fab);
    document.body.appendChild(sidebar);
  }

  function focusTrapSetup(container){
    const focusables = qsa('a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])', container)
      .filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
    firstFocusableInDrawer = focusables[0] || container;
    lastFocusableInDrawer = focusables[focusables.length - 1] || container;
  }

  function openDrawer(){
    const drawer = qs('#app-drawer');
    const overlay = qs('#app-overlay');
    const fab = qs('#app-fab');
    if(!drawer || !overlay || !fab) return;

    lastFocusedBeforeOpen = document.activeElement;

    drawer.setAttribute('aria-hidden', 'false');
    overlay.hidden = false;
    document.body.classList.add('drawer-open');
    fab.setAttribute('aria-expanded', 'true');

    focusTrapSetup(drawer);
    setTimeout(()=>{ if(firstFocusableInDrawer) firstFocusableInDrawer.focus(); }, 50);
  }

  function closeDrawer(){
    const drawer = qs('#app-drawer');
    const overlay = qs('#app-overlay');
    const fab = qs('#app-fab');
    if(!drawer || !overlay || !fab) return;

    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    fab.setAttribute('aria-expanded', 'false');

    // wait transition then hide overlay for clicks
    setTimeout(()=>{ overlay.hidden = true; fab.focus(); }, DURATION);
  }

  function toggleDrawer(force){
    const drawer = qs('#app-drawer');
    const isOpen = drawer && drawer.getAttribute('aria-hidden') === 'false';
    if(typeof force === 'boolean'){
      return force ? openDrawer() : closeDrawer();
    }
    return isOpen ? closeDrawer() : openDrawer();
  }

  function onKeydown(e){
    const drawer = qs('#app-drawer');
    const isOpen = drawer && drawer.getAttribute('aria-hidden') === 'false';
    if(!isOpen) return;

    if(e.key === 'Escape'){
      e.preventDefault();
      closeDrawer();
      return;
    }

    if(e.key === 'Tab'){
      // trap focus
      const active = document.activeElement;
      if(e.shiftKey){
        if(active === firstFocusableInDrawer || active === drawer){ e.preventDefault(); lastFocusableInDrawer?.focus(); }
      } else {
        if(active === lastFocusableInDrawer){ e.preventDefault(); firstFocusableInDrawer?.focus(); }
      }
    }
  }

  function attachEvents(){
    const overlay = qs('#app-overlay');
    const drawer = qs('#app-drawer');
    const fab = qs('#app-fab');

    overlay.addEventListener('click', ()=> closeDrawer());
    fab.addEventListener('click', ()=> toggleDrawer());

    drawer.addEventListener('click', (e)=>{
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      e.preventDefault();
      const href = a.getAttribute('href');
      navigateTo(href);
      closeDrawer();
    });

    // Sidebar link clicks
    qs('#app-sidebar').addEventListener('click', (e)=>{
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      e.preventDefault();
      const href = a.getAttribute('href');
      navigateTo(href);
    });

    document.addEventListener('keydown', onKeydown);

    // Scrollspy via IntersectionObserver
    const targets = ['#inicio','#problema','#causa','#solucao','#resultados','#planos']
      .map(id => qs(id)).filter(Boolean);
    if('IntersectionObserver' in window && targets.length){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
          if(entry.isIntersecting && entry.intersectionRatio >= 0.5){
            setActiveByHash('#' + entry.target.id);
            history.replaceState(null, '', '#' + entry.target.id);
          }
        });
      }, { threshold: [0.5] });
      targets.forEach(el => io.observe(el));
    }

    window.addEventListener('popstate', ()=>{
      setActiveByHash(getHash());
      scrollToAnchor(getHash());
    });
  }

  function scrollToAnchor(hash){
    const el = qs(hash);
    if(!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  function setActiveByHash(hash){
    const links = qsa('#app-drawer a, #app-sidebar a');
    links.forEach(a => {
      const active = a.getAttribute('href') === hash;
      if(active){ a.setAttribute('aria-current', 'page'); }
      else { a.removeAttribute('aria-current'); }
    });
  }

  function navigateTo(hash){
    if(getHash() !== hash){
      history.pushState(null, '', hash);
    }
    setActiveByHash(hash);
    scrollToAnchor(hash);
  }

  function disableOriginalMobileMenu(){
    // Ensure original mobile hamburger does not interfere
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    if(navMenu){ navMenu.classList.remove('active'); }
    if(navToggle){ navToggle.classList.remove('active'); }
  }

  function init(){
    ensureAnchors();
    buildShell();
    attachEvents();
    disableOriginalMobileMenu();

    // Initial state
    setActiveByHash(getHash());
    // Overlay hidden should reflect drawer state
    const overlay = qs('#app-overlay');
    overlay.hidden = true;
  }

  // Wait fonts/icons to be ready for better painting
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging/rollback
  window.__app_like_ui__ = { toggleDrawer, openDrawer, closeDrawer };
})();