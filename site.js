(() => {
  'use strict';
  const publications = {
    iqa: {
      category: 'Journal manuscript · Under review · 2026',
      title: 'Synthetic Data Filtering for Enhanced Construction Object Detection via Image Quality Assessment',
      authors: 'Y. Lee, J. Lee, F. Baek, H. Kim, J. Kim, and J. Jeon',
      venue: 'Developments in the Built Environment · Under review',
      summary: 'This under-review manuscript investigates synthetic-image filtering for construction object detection. Stable Diffusion v2.1 produces 600 synthetic images for each of two object categories (safety helmets and excavators). GMM-GIQA and ImageReward separately rank the images; high- and low-quality subsets are then evaluated in YOLOv8 training across six augmentation sizes. The experiments report peak mean mAP@50 of 80.5% for helmets and 96.5% for excavators. ImageReward is stronger for helmet imagery in the main experiment; GMM-GIQA is stronger for excavators. Repeated-seed, quantity-matched and independent-replication analyses test the scope of these observations. These are results from an unpublished manuscript, not a peer-reviewed publication.',
      links: [],
      methods: ['Stable Diffusion v2.1','GMM-GIQA','ImageReward','YOLOv8','10 repeated seeds'],
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
      summary: 'This published study evaluates construction unprotected-opening detection using three generative AI tools (DALL-E, Midjourney, Stable Diffusion) combined with three prompting strategies (zero-shot, structured, and image-guided structured prompting). The best combination—Stable Diffusion with image-guided structured prompting—improves YOLOv8n mAP@50 from a baseline of 51.6% to 92.5% when 150 generated images are incorporated. The findings also show that indiscriminately increasing synthetic-image quantity is not always helpful.',
      links: [{label: 'Read published paper ↗', url: 'https://doi.org/10.1016/j.autcon.2025.106317'}],
      methods: ['Midjourney / DALL-E / Stable Diffusion','Prompting strategies','YOLOv8n','mAP@50'],
      figures: [['assets/autcon-framework.png', 'Original research framework from Lee et al. (2025), Automation in Construction.', 'Generative AI data augmentation framework from Automation in Construction 2025']],
      citation: 'Lee, Y., Kang, G., Kim, J., Yoon, S., & Jeon, J. (2025). Generative AI-driven data augmentation for enhanced construction hazard detection. Automation in Construction, 177, 106317. https://doi.org/10.1016/j.autcon.2025.106317'
    },
    drowsy: {
      category: 'Journal article · Published · 2025',
      title: 'Improvement of Construction Workers’ Drowsiness Detection and Classification via Text-to-Image Augmentation and Computer Vision',
      authors: 'D. Jung, Y. Lee, K. Jeong, J. Lee, J. Kim, H. Park, and J. Jeon',
      venue: 'Sustainability, 17(20), 9158 (2025)',
      summary: 'This published co-authored work investigates text-to-image augmentation for construction-worker drowsiness detection using construction and non-construction datasets, polygon-based labeling, and YOLOv8/YOLO11 detectors. Domain-matched training improves performance relative to non-construction imagery. With 400 synthetic training images, the reported peak mAP@50 reaches 95.3% for YOLOv8 and 93.3% for YOLO11 (versus real-only baselines of 68.2% and 56.6%, respectively). The graph below is accurately redrawn from Tables 4–5 of the open-access article.',
      links: [{label: 'Read published paper ↗', url: 'https://doi.org/10.3390/su17209158'}],
      methods: ['Text-to-image generation','Domain-specific datasets','YOLOv8 / YOLO11','Polygon annotation'],
      figures: [
        ['assets/drowsiness-performance.svg', 'Performance trend redrawn from Sustainability (2025), Tables 4–5. Not an original published figure.', 'Reconstructed chart of YOLOv8 and YOLO11 detection performance'],
        ['https://www.mdpi.com/sustainability/sustainability-17-09158/article_deploy/html/images/sustainability-17-09158-g003.png', 'Original Fig. 3. Examples of labeled images, Jung et al. (2025), Sustainability 17, 9158; © authors, CC BY 4.0. Hosted by MDPI.', 'Original annotated awake and drowsy image examples from the published study']
      ],
      citation: 'Jung, D., Lee, Y., Jeong, K., Lee, J., Kim, J., Park, H., & Jeon, J. (2025). Improvement of Construction Workers’ Drowsiness Detection and Classification via Text-to-Image Augmentation and Computer Vision. Sustainability, 17(20), 9158. https://doi.org/10.3390/su17209158'
    }
  };
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

  const nav = document.querySelector('.top-nav');
  const menu = document.querySelector('.mobile-toggle');
  const closeMenu = () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); };
  menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  const legacy = {journals:'publications.html#journals', conferences:'publications.html#conferences', projects:'research.html#projects', experience:'cv.html#cv-education', awards:'achievements.html#awards'};
  if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
    const target = legacy[location.hash.slice(1)]; if (target) location.replace(target);
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
    const methods = p.methods?.length ? `<div class="modal-method-tags">${p.methods.map(m => `<span>${escapeHtml(m)}</span>`).join('')}</div>` : '';
    const actions = p.links.length ? `<div class="modal-actions">${p.links.map((x,i)=>`<a class="${i===0?'main-action':''}" target="_blank" rel="noopener noreferrer" href="${escapeHtml(x.url)}">${escapeHtml(x.label)}</a>`).join('')}</div>` : '';
    return `<p class="modal-tag">${escapeHtml(p.category)}</p><h2 id="modal-title">${escapeHtml(p.title)}</h2>
      <p class="modal-authors">${escapeHtml(p.authors)}</p><p class="modal-journal">${escapeHtml(p.venue)}</p>${actions}
      <h3 class="modal-label">RESEARCH OVERVIEW</h3><p class="modal-summary">${escapeHtml(p.summary)}</p>${methods}
      ${p.figures.length ? `<h3 class="modal-label">RESEARCH FIGURES</h3>${figures}` : ''}
      <div class="modal-citation"><div class="citation-bar"><span class="modal-label">CITATION</span><button type="button" class="copy-citation" data-copy="${escapeHtml(id)}">Copy citation</button></div><p>${escapeHtml(p.citation)}</p></div>`;
  };
  const showPaper = id => {
    if (!publications[id] || !modal) return;
    previousFocus = document.activeElement;
    content.innerHTML = renderPaper(id);
    content.querySelectorAll('.modal-figure img').forEach(img => img.addEventListener('error', () => {
      const fig = img.closest('figure');
      if (!fig) return;
      img.style.display = 'none';
      if (img.src.startsWith('https://')) {
        const note = document.createElement('p');
        note.className = 'figure-load-note';
        note.textContent = 'This figure is hosted by the publisher. Use the Full size link below to view it at the source.';
        fig.prepend(note);
      }
    }));
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