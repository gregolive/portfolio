import { useEffect, useState } from 'react';

/**
 * True once the page is scrolled more than `y` px. The listener runs on every scroll event, but the
 * component only re-renders when the boolean flips (React skips updates with an unchanged value).
 */
const useScrolledPast = (y: number): boolean => {
  const [past, setPast] = useState(() => window.scrollY > y);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > y);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [y]);

  return past;
};

export default useScrolledPast;
