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

setUpTrailer();
setUpRegister();
