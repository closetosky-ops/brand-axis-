const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// Netlify form submission: submit in the background, then load the thank-you page
// as a normal GET request. This avoids blank POST responses on static HTML pages.
const projectForm = document.querySelector('form[name="brand-axis-project"]');

if (projectForm) {
  const status = document.getElementById('form-status');
  const submitButton = projectForm.querySelector('button[type="submit"]');

  const encodeFormData = (formData) =>
    Array.from(formData.entries())
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

  projectForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!projectForm.checkValidity()) {
      projectForm.reportValidity();
      return;
    }

    const originalLabel = submitButton ? submitButton.innerHTML : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = 'SENDING…';
    }
    if (status) status.textContent = '';

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(new FormData(projectForm))
      });

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      window.location.assign('/thank-you.html');
    } catch (error) {
      if (status) {
        status.innerHTML = 'Something interrupted the form. Please email <a href="mailto:campaign@brand-axis.com">campaign@brand-axis.com</a> and I’ll take it from there.';
      }
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalLabel;
      }
    }
  });
}
