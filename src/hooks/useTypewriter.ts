import { useEffect, useState } from 'react';

interface TypewriterOptions {
  /** Delay per character while typing (ms) */
  typeSpeed?: number;
  /** Delay per character while erasing (ms) */
  backSpeed?: number;
  /** Pause with the full string showing before it is erased (ms) */
  backDelay?: number;
  /** Pause before each string starts typing (ms) */
  startDelay?: number;
}

const prefersReducedMotion = () => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

/**
 * Types out each string, erases it, then moves on to the next, looping forever.
 * With reduced motion the strings are swapped whole instead of typed.
 */
const useTypewriter = (
  strings: readonly string[],
  { typeSpeed = 100, backSpeed = 50, backDelay = 2000, startDelay = 500 }: TypewriterOptions = {},
): string => {
  const [text, setText] = useState('');
  // Depend on the contents, not the array identity, so an inline array literal doesn't restart it
  const key = strings.join('\u0000');

  useEffect(() => {
    const list = key ? key.split('\u0000') : [];
    if (list.length === 0) return undefined;

    let timer: ReturnType<typeof setTimeout>;
    let index = 0;

    if (prefersReducedMotion()) {
      const show = () => {
        setText(list[index]);
        index = (index + 1) % list.length;
        timer = setTimeout(show, backDelay + 1500);
      };
      show();
      return () => clearTimeout(timer);
    }

    let length = 0;
    const type = () => {
      const target = list[index];
      length += 1;
      setText(target.slice(0, length));
      timer = (length < target.length) ? setTimeout(type, typeSpeed) : setTimeout(erase, backDelay);
    };
    const erase = () => {
      length -= 1;
      setText(list[index].slice(0, length));
      if (length > 0) {
        timer = setTimeout(erase, backSpeed);
      } else {
        index = (index + 1) % list.length;
        timer = setTimeout(type, startDelay + typeSpeed);
      }
    };

    timer = setTimeout(type, startDelay + typeSpeed);
    return () => clearTimeout(timer);
  }, [key, typeSpeed, backSpeed, backDelay, startDelay]);

  return text;
};

export default useTypewriter;
