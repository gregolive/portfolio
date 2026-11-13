import { useRef } from 'react';
import type { TouchEvent } from 'react';

/**
 * Touch handlers that call `onSwipeLeft` / `onSwipeRight` for a mostly-horizontal swipe longer than
 * `threshold` px. Vertical swipes are ignored so the page still scrolls normally.
 */
const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void, threshold = 40) => {
  const start = useRef<{ x: number; y: number } | null>(null);

  return {
    onTouchStart: (e: TouchEvent) => {
      const touch = e.touches[0];
      start.current = { x: touch.clientX, y: touch.clientY };
    },
    onTouchEnd: (e: TouchEvent) => {
      if (!start.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - start.current.x;
      const dy = touch.clientY - start.current.y;
      start.current = null;
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) onSwipeLeft(); else onSwipeRight();
    },
  };
};

export default useSwipe;
