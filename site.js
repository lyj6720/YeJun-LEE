(() => {
  'use strict';
  const publications = {
    iqa: {
      category: 'Journal manuscript · Under review · 2026',
      title: 'Synthetic Data Filtering for Enhanced Construction Object Detection via Image Quality Assessment',
      authors: 'Y. Lee, J. Lee, F. Baek, H. Kim, J. Kim, and J. Jeon',
      venue: 'Developments in the Built Environment · Under review',
      summary: 'This study examines whether image quality assessment can guide synthetic-data curation for construction object detection. GMM-GIQA and ImageReward are used to independently rank AI-generated images of safety helmets and excavators. The work investigates whether quality-selected images improve YOLOv8 detection performance, and whether the relative effectiveness of the two IQA criteria differs across target objects. The main experiments report maximum mAP@50 values of 80.5% for safety helmets and 96.5% for excavators. These results belong to a manuscript under review and should not be interpreted as published findings.',
      links: [],
      figures: [
        ['assets/paper-framework.webp', 'Fig. 1. Research framework', 'Research framework from the author-provided manuscript'],
        ['assets/paper-quality-results.webp', 'Fig. 7. Detection performance by generative image quality', 'Line charts comparing generative image quality and detection performance'],
        ['assets/paper-quantity-results.webp', 'Fig. 8. Detection performance by generative image quantity', 'Bar charts comparing data quantity and detection performance'],
        ['assets/paper-detection-examples.webp', 'Fig. 9. Object detection results with IQA-based augmentation', 'Comparison of detected safety helmets and excavators']
      ],
      citation: 'Lee, Y., Lee, J., Baek, F., Kim, H., Kim, J., & Jeon, J. (2026). Synthetic Data Filtering for Enhanced Construction Object Detection via Image Quality Assessment. Developments in the Built Environment (under review).'
    },
    autcon: {
      category: 'Journal article · Published · 2025',
      title: 'Generative AI-driven data augmentation for enhanced construction hazard detection',
      authors: 'Y. Lee, G. Kang, J. Kim, S. Yoon, and J. Jeon',
      venue: 'Automation in Construction, 177, 106317 (2025)',
      summary: 'This paper explores generative AI-based data augmentation for construction hazard detection. It compares image generation tools and prompting strategies and evaluates how synthetic-image quantity influences downstream object detection. The study demonstrates how carefully designed synthetic training images can address the scarcity of construction hazard data, while highlighting that more augmented images do not necessarily lead to better performance.',
      links: [{label: 'Read published paper ↗', url: 'https://doi.org/10.1016/j.autcon.2025.106317'}],
      figures: [['assets/autcon-framework.png', 'Research framework from the published paper', 'Generative AI data augmentation framework from Automation in Construction 2025']],
      citation: 'Lee, Y., Kang, G., Kim, J., Yoon, S., & Jeon, J. (2025). Generative AI-driven data augmentation for enhanced construction hazard detection. Automation in Construction, 177, 106317. https://doi.org/10.1016/j.autcon.2025.106317'
    },
    drowsy: {
      category: 'Journal article · Published · 2025',
      title: 'Improvement of Construction Workers’ Drowsiness Detection and Classification via Text-to-Image Augmentation and Computer Vision',
      authors: 'D. Jung, Y. Lee, K. Jeong, J. Lee, J. Kim, H. Park, and J. Jeon',
      venue: 'Sustainability, 17(20), 9158 (2025)',
      summary: 'This co-authored study explores the use of text-to-image augmentation and computer vision for construction worker drowsiness detection and classification. The publication is available at its DOI. This portfolio does not display a figure for this article because the corresponding original figure file was not supplied.',
      links: [{label: 'Read published paper ↗', url: 'https://doi.org/10.3390/su17209158'}],
      figures: [],
      citation: 'Jung, D., Lee, Y., Jeong, K., Lee, J., Kim, J., Park, H., & Jeon, J. (2025). Improvement of Construction Workers’ Drowsiness Detection and Classification via Text-to-Image Augmentation and Computer Vision. Sustainability, 17(20), 9158. https://doi.org/10.3390/su17209158'
    }
  };
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  const nav = document.querySelector('.side-nav');
  const menu = document.querySelector('.mobile-toggle');
  if (nav && menu) {
    menu.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
        });
      }, {rootMargin: '-12% 0px -70% 0px'});
      document.querySelectorAll('main > section[id]').forEach(el => observer.observe(el));
    }
  }

  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const chosen = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => {
      const selected = b === button;
      b.classList.toggle('selected', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-topics]').forEach(card => {
      card.hidden = chosen !== 'all' && !card.dataset.topics.split(' ').includes(chosen);
    });
  }));

  const modal = document.querySelector('#paper-modal');
  const content = document.querySelector('#modal-content');
  const close = document.querySelector('.modal-close');
  let previousFocus = null;
  const renderPaper = id => {
    const p = publications[id];
    if (!p) return null;
    const figures = p.figures.map(([src, caption, alt]) => `
      <figure class="modal-figure">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">
        <figcaption><span>${escapeHtml(caption)}</span><a href="${escapeHtml(src)}" target="_blank" rel="noopener">Full size ↗</a></figcaption>
      </figure>`).join('');
    const actions = p.links.length ? `<div class="modal-actions">${p.links.map((x,i)=>`<a class="${i===0?'main-action':''}" target="_blank" rel="noopener noreferrer" href="${escapeHtml(x.url)}">${escapeHtml(x.label)}</a>`).join('')}</div>` : '';
    return `<p class="modal-tag">${escapeHtml(p.category)}</p><h2 id="modal-title">${escapeHtml(p.title)}</h2>
      <p class="modal-authors">${escapeHtml(p.authors)}</p><p class="modal-journal">${escapeHtml(p.venue)}</p>${actions}
      <h3 class="modal-label">RESEARCH OVERVIEW</h3><p class="modal-summary">${escapeHtml(p.summary)}</p>
      ${p.figures.length ? `<h3 class="modal-label">RESEARCH FIGURES</h3>${figures}` : ''}
      <div class="modal-citation"><div class="citation-bar"><span class="modal-label">CITATION</span><button type="button" class="copy-citation" data-copy="${escapeHtml(id)}">Copy citation</button></div><p>${escapeHtml(p.citation)}</p></div>`;
  };
  const showPaper = id => {
    if (!publications[id] || !modal) return;
    previousFocus = document.activeElement;
    content.innerHTML = renderPaper(id);
    if (!modal.open) modal.showModal();
    document.body.classList.add('modal-open');
    modal.scrollTop = 0;
  };
  const hidePaper = () => {
    if (!modal?.open) return;
    modal.close();
    document.body.classList.remove('modal-open');
    previousFocus?.focus();
  };
  document.querySelectorAll('[data-paper]').forEach(button => button.addEventListener('click', () => showPaper(button.dataset.paper)));
  close?.addEventListener('click', hidePaper);
  modal?.addEventListener('click', e => { if (e.target === modal) hidePaper(); });
  modal?.addEventListener('close', () => { document.body.classList.remove('modal-open'); });
  content?.addEventListener('click', async e => {
    const button = e.target.closest('[data-copy]');
    if (!button) return;
    const cite = publications[button.dataset.copy]?.citation;
    if (!cite) return;
    try { await navigator.clipboard.writeText(cite); button.textContent = 'Copied'; }
    catch { button.textContent = 'Select citation below'; }
  });
})();