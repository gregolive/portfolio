import { act, renderHook } from '@testing-library/react';
import useTypewriter from '../useTypewriter';

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

const opts = { typeSpeed: 10, backSpeed: 5, backDelay: 100, startDelay: 50 };
const advance = (ms: number) => act(() => { vi.advanceTimersByTime(ms); });

test('types, erases and loops through the strings', () => {
  const { result } = renderHook(() => useTypewriter(['ab', 'c'], opts));
  expect(result.current).toBe('');

  advance(60);              // start delay + first character
  expect(result.current).toBe('a');
  advance(10);
  expect(result.current).toBe('ab');

  advance(100);             // hold, then erase one character
  expect(result.current).toBe('a');
  advance(5);
  expect(result.current).toBe('');

  advance(60);              // next string
  expect(result.current).toBe('c');
  advance(100 + 5 + 60);    // hold, erase, back to the first string
  expect(result.current).toBe('a');
});

test('stops its timers on unmount', () => {
  const { unmount } = renderHook(() => useTypewriter(['abc'], opts));
  unmount();
  expect(vi.getTimerCount()).toBe(0);
});

test('swaps whole strings when reduced motion is preferred', () => {
  const spy = vi.spyOn(window, 'matchMedia').mockImplementation((query: string) => ({
    matches: query.includes('reduce'), media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  }));
  const { result } = renderHook(() => useTypewriter(['first', 'second'], opts));
  expect(result.current).toBe('first');
  advance(100 + 1500);
  expect(result.current).toBe('second');
  spy.mockRestore();
});
