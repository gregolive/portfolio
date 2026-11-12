import { useEffect, useState } from 'react';

/**
 * Returns the id of the last section whose top has scrolled past `offset` px from the top of the
 * viewport (or the last section once the page is scrolled to the bottom).
 *
 * Rather than measuring on every scroll event, an IntersectionObserver watches a 1px line `offset` px
 * down the viewport. Every block inside <main> (plus the footer) is observed, and because those blocks
 * are contiguous the line is always inside one of them, so a callback fires whenever the line crosses
 * any block boundary, even after an instant jump. Only then do we measure the tracked sections.
 * `ids` must be a stable reference (e.g. a module-level constant).
 */
const useActiveSection = (ids: readonly string[], offset: number): string => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = '';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      });
      setActive(current);
    };

    let lineObserver: IntersectionObserver | undefined;
    const observeLine = () => {
      lineObserver?.disconnect();
      const bottomMargin = Math.max(0, window.innerHeight - offset - 1);
      lineObserver = new IntersectionObserver(update, { rootMargin: `-${offset}px 0px -${bottomMargin}px 0px` });
      document.querySelectorAll('main > *, footer').forEach((el) => lineObserver?.observe(el));
    };

    // The last section may never reach the line on a short page, so also react to the footer
    // coming fully into view (i.e. reaching the bottom of the page)
    const bottomObserver = new IntersectionObserver(update, { threshold: [0, 1] });
    const footer = document.querySelector('footer');
    if (footer) bottomObserver.observe(footer);

    observeLine();
    window.addEventListener('resize', observeLine);

    return () => {
      window.removeEventListener('resize', observeLine);
      lineObserver?.disconnect();
      bottomObserver.disconnect();
    };
  }, [ids, offset]);

  return active;
};

export default useActiveSection;
