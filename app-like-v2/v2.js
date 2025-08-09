(function v2Router(){
  const views = Array.from(document.querySelectorAll('.view'));
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));
  const tabLinks = Array.from(document.querySelectorAll('[data-tab]'));

  function activate(id){
    views.forEach(v => {
      const isActive = v.id === id;
      v.classList.toggle('is-active', isActive);
      v.setAttribute('aria-hidden', String(!isActive));
    });
    navLinks.forEach(a => a.setAttribute('aria-current', a.dataset.nav === id ? 'page' : 'false'));
    tabLinks.forEach(a => a.setAttribute('aria-current', a.dataset.tab === id ? 'page' : 'false'));
    history.replaceState({}, '', `#${id}`);
  }

  function getInitial(){
    const hash = location.hash.replace('#','');
    return views.some(v => v.id === hash) ? hash : views[0]?.id;
  }

  // Bind clicks
  [...navLinks, ...tabLinks].forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.dataset.nav || a.dataset.tab;
    if (id) activate(id);
  }));

  // Back/forward support
  window.addEventListener('popstate', () => {
    const hash = location.hash.replace('#','');
    if (hash) activate(hash);
  });

  const initial = getInitial();
  if (initial) activate(initial);
})();