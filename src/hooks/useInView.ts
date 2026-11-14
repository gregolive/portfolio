import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

/** True while at least `threshold` of the element is inside the viewport. */
const useInView = (ref: RefObject<Element | null>, threshold = 0.25): boolean => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
};

export default useInView;
