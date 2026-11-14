const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Editable site settings from /admin.
fetch('/data/site.json').then(r => r.ok ? r.json() : null).then(site => {
  if (!site) return;
  const prices = site.prices || {};
  document.querySelectorAll('[data-price]').forEach(el => {
    const key = el.dataset.price; if (prices[key]) el.textContent = prices[key];
  });
  document.querySelectorAll('[data-price-number]').forEach(el => {
    const key = el.dataset.priceNumber; if (prices[key]) el.textContent = String(prices[key]).replace(/[^0-9]/g,'');
  });
  document.querySelectorAll('[data-footer-tagline]').forEach(el => { if(site.footerTagline) el.textContent = site.footerTagline; });
  document.querySelectorAll('[data-campaign-email]').forEach(el => { if(site.campaignEmail){ el.textContent=site.campaignEmail; el.href=`mailto:${site.campaignEmail}`; } });
  document.querySelectorAll('[data-founder-email]').forEach(el => { if(site.founderEmail){ el.textContent=site.founderEmail; el.href=`mailto:${site.founderEmail}`; } });
}).catch(()=>{});

// Netlify form submission: POST to contact page, then open thank-you as a normal GET.
const projectForm = document.querySelector('form[name="brand-axis-project"]');
if (projectForm) {
  const status = document.getElementById('form-status');
  const submitButton = projectForm.querySelector('button[type="submit"]');
  const encodeFormData = (formData) => Array.from(formData.entries()).map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  projectForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!projectForm.checkValidity()) { projectForm.reportValidity(); return; }
    const originalLabel = submitButton ? submitButton.innerHTML : '';
    if (submitButton) { submitButton.disabled = true; submitButton.innerHTML = 'SENDING…'; }
    if (status) status.textContent = '';
    try {
      const response = await fetch('/contact.html', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:encodeFormData(new FormData(projectForm)) });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      window.location.assign('/thank-you.html');
    } catch (error) {
      if (status) status.innerHTML = 'Something interrupted the form. Please email <a href="mailto:campaign@brand-axis.com">campaign@brand-axis.com</a> and I’ll take it from there.';
      if (submitButton) { submitButton.disabled = false; submitButton.innerHTML = originalLabel; }
    }
  });
}

// Work portfolio rendered from admin-editable JSON.
const workGrid = document.getElementById('work-grid');
if (workGrid) {
  let projects = [];
  const esc = (v='') => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const render = (filter='all') => {
    const list = projects.filter(p => filter === 'all' || (p.categories||[]).some(c => c.toLowerCase() === filter));
    if (!list.length) { workGrid.innerHTML = '<p class="work-loading">More work is being added here.</p>'; return; }
    workGrid.innerHTML = list.map(p => {
      const cats = (p.categories||[]).map(c=>`<span>${esc(c)}</span>`).join('');
      const media = p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} project image">` : `<div class="work-card-placeholder" aria-hidden="true">BA</div>`;
      const link = p.link ? `<a class="work-card-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.link_label||'VIEW PROJECT')} →</a>` : '';
      return `<article class="work-card-v26"><div class="work-card-image-v26">${media}</div><div class="work-card-body-v26"><div class="work-card-top-v26"><span>${esc(p.type)}</span><span>${esc(p.status||'')}</span></div><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p><p class="work-card-details">${esc(p.details)}</p><div class="work-card-tags">${cats}</div>${link}</div></article>`;
    }).join('');
  };
  fetch('/data/work.json').then(r => r.json()).then(data => { projects = data.projects || []; render('all'); }).catch(()=>{ workGrid.innerHTML='<p class="work-loading">Work portfolio is being updated.</p>'; });
  document.querySelectorAll('[data-work-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-work-filter]').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(btn.dataset.workFilter);
  }));
}
