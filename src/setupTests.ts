import '@testing-library/jest-dom/vitest';

// jsdom has no AnimationEvent, which makes React listen for `webkitAnimationEnd` instead of the
// `animationend` real browsers fire. Defining it (before React loads) keeps tests on the real event.
if (!('AnimationEvent' in window)) {
  (window as unknown as { AnimationEvent: typeof Event }).AnimationEvent = class AnimationEvent extends Event {};
}

// jsdom doesn't implement IntersectionObserver
if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    readonly root = null;
    readonly rootMargin = '';
    readonly thresholds = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  } as unknown as typeof IntersectionObserver;
}

// jsdom doesn't implement matchMedia
if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}
