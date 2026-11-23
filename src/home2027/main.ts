import './home.css';

/** Swap the trailer poster for the YouTube player only when someone presses play. */
function setUpTrailer(): void {
  document.querySelectorAll<HTMLButtonElement>('button.yt[data-yt]').forEach((button) => {
    button.addEventListener(
      'click',
      () => {
        const id = button.dataset.yt;
        const frame = document.createElement('iframe');
        frame.className = 'yt-frame';
        frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=1`;
        frame.title = 'Trailer: The Nepal Discourse 2027';
        frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        button.replaceWith(frame);
        frame.focus();
      },
      { once: true },
    );
  });

  // Warm up the YouTube connection when someone is about to press play.
  const warm = () => {
    for (const href of ['https://www.youtube-nocookie.com', 'https://i.ytimg.com']) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      document.head.append(link);
    }
  };
  document.querySelector('button.yt')?.addEventListener('pointerover', warm, { once: true });
}

/** Until a sign-up form exists, "Register interest" opens an email to the team. */
function setUpRegister(): void {
  const form = document.querySelector<HTMLFormElement>('#register-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const subject = encodeURIComponent('Register interest: The Nepal Discourse 2027');
    const body = encodeURIComponent(`Please keep me updated about The Nepal Discourse 2027.\n\nEmail: ${email}`);
    window.location.href = `mailto:info@thenepaldiscourse.com?subject=${subject}&body=${body}`;
  });
}

/** Phones and tablets: the section menu under the top bar. */
function setUpMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const menu = document.querySelector<HTMLElement>('#nav-menu');
  if (!toggle || !menu) return;
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };
  toggle.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!menu.hidden && !(event.target as HTMLElement).closest('header')) setOpen(false);
  });
}

/** Phones: pause/play the scrolling topics band. */
function setUpTopicsBand(): void {
  const band = document.querySelector<HTMLElement>('.topics-band');
  const button = band?.querySelector<HTMLButtonElement>('.topics-pause');
  if (!band || !button) return;
  button.addEventListener('click', () => {
    const paused = band.classList.toggle('is-paused');
    button.setAttribute('aria-pressed', String(paused));
    button.querySelector('.vh')!.textContent = paused ? 'Play the moving topics' : 'Pause the moving topics';
  });
}

/** In the room: "Show all" reveals the rest of the album; any photo opens the full-size viewer. */
function setUpGallery(): void {
  const grid = document.querySelector<HTMLUListElement>('#gallery-grid');
  const toggle = document.querySelector<HTMLButtonElement>('.gl-toggle');
  const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
  if (!grid || !toggle || !dialog) return;

  toggle.addEventListener('click', () => {
    const all = grid.classList.toggle('gl-all');
    toggle.setAttribute('aria-expanded', String(all));
    toggle.textContent = (all ? toggle.dataset.less : toggle.dataset.more) ?? '';
    if (all) grid.querySelector<HTMLAnchorElement>('.gl-extra .gl-item')?.focus();
    else grid.scrollIntoView({ block: 'start' });
  });

  const links = [...grid.querySelectorAll<HTMLAnchorElement>('.gl-item')];
  const img = dialog.querySelector<HTMLImageElement>('.lb-img')!;
  const avif = dialog.querySelector<HTMLSourceElement>('.lb-avif')!;
  const count = dialog.querySelector<HTMLElement>('.lb-count')!;
  const live = dialog.querySelector<HTMLElement>('.lb-live')!;
  const close = dialog.querySelector<HTMLButtonElement>('.lb-close')!;
  let index = 0;
  let opener: HTMLAnchorElement | null = null;

  // link.href is resolved against the page, so the full-size photo works on / and /staging/.
  const largeUrl = (i: number, ext = '.webp') => links[i].href.replace(/\.webp$/, ext);
  const wrap = (i: number) => (i + links.length) % links.length;
  const show = (i: number) => {
    index = wrap(i);
    const alt = links[index].querySelector('img')?.alt ?? '';
    avif.srcset = largeUrl(index, '.avif');
    img.src = largeUrl(index);
    img.alt = alt;
    count.textContent = `${index + 1} / ${links.length}`;
    live.textContent = `Photo ${index + 1} of ${links.length}. ${alt}`;
  };

  // Once a photo is in, warm its neighbours in the format the browser chose.
  img.addEventListener('load', () => {
    const ext = img.currentSrc.endsWith('.avif') ? '.avif' : '.webp';
    for (const n of [index + 1, index - 1]) new Image().src = largeUrl(wrap(n), ext);
  });

  links.forEach((link, i) =>
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      document.documentElement.classList.add('lb-open');
      dialog.showModal();
      show(i);
      close.focus();
    }),
  );
  close.addEventListener('click', () => dialog.close());
  dialog.querySelector('.lb-prev')!.addEventListener('click', () => show(index - 1));
  dialog.querySelector('.lb-next')!.addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') show(index + 1);
    else if (event.key === 'ArrowLeft') show(index - 1);
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || (event.target as HTMLElement).classList.contains('lb-figure')) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('lb-open');
    opener?.focus();
  });

  // Swipe left/right on the photo (Previous/Next buttons remain the single-tap alternative).
  let startX = 0;
  let startY = 0;
  img.addEventListener('pointerdown', (event) => {
    startX = event.clientX;
    startY = event.clientY;
  });
  img.addEventListener('pointerup', (event) => {
    const dx = event.clientX - startX;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(event.clientY - startY)) show(index + (dx < 0 ? 1 : -1));
  });
}

setUpTrailer();
setUpRegister();
setUpMenu();
setUpTopicsBand();
setUpGallery();
