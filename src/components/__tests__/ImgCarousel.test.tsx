import { fireEvent, render, screen, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/assets/themes/themes';
import ImgCarousel from '@/components/home/img-carousel/ImgCarousel';

const images = [
  { src: 'one.jpg', alt: 'first screen' },
  { src: 'two.jpg', alt: 'second screen', caption: 'Custom caption' },
  { src: 'three.jpg', alt: 'third screen' },
];

const renderCarousel = (imgs = images) => render(
  <ThemeProvider theme={lightTheme}>
    <ImgCarousel images={imgs} color='#123456' wide />
  </ThemeProvider>
);

const title = (container: HTMLElement) => container.querySelector('.title')?.textContent;

test('shows the caption and moves between slides with the controls', () => {
  const { container } = renderCarousel();
  expect(title(container)).toBe('First screen');

  fireEvent.click(screen.getByRole('button', { name: 'Next image' }));
  expect(title(container)).toBe('Custom caption');

  fireEvent.click(screen.getByRole('button', { name: 'Previous image' }));
  fireEvent.click(screen.getByRole('button', { name: 'Previous image' }));
  expect(title(container)).toBe('Third screen');

  fireEvent.click(screen.getByRole('button', { name: /show image 1 of 3/i }));
  expect(title(container)).toBe('First screen');
  expect(screen.getByRole('button', { name: /show image 1 of 3/i })).toHaveAttribute('aria-current', 'true');
});

test('advances when the autoplay progress finishes', () => {
  const { container } = renderCarousel();
  fireEvent.animationEnd(container.querySelector('.fill') as Element);
  expect(title(container)).toBe('Custom caption');
});

test('opens a lightbox that supports arrow keys and closes with Escape', () => {
  const { container } = renderCarousel();
  fireEvent.click(screen.getByRole('button', { name: 'Enlarge image: First screen' }));

  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByText('1 / 3')).toBeInTheDocument();
  expect(within(dialog).getByRole('button', { name: 'Close image viewer' })).toHaveFocus();
  expect(document.body.style.overflow).toBe('hidden');

  fireEvent.keyDown(dialog, { key: 'ArrowRight' });
  expect(within(dialog).getByText('2 / 3')).toBeInTheDocument();
  expect(within(dialog).getByText('Custom caption')).toBeInTheDocument();

  fireEvent.keyDown(dialog, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
  // The carousel follows the lightbox and focus returns to the visible image
  expect(title(container)).toBe('Custom caption');
  expect(screen.getByRole('button', { name: 'Enlarge image: Custom caption' })).toHaveFocus();
});

test('a single image has no slide controls', () => {
  renderCarousel([images[0]]);
  expect(screen.queryByRole('button', { name: 'Next image' })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Enlarge image: First screen' })).toBeInTheDocument();
});

test('shows the dark-mode screenshot when the dark theme is on', () => {
  const themed = [{ src: 'light.jpg', darkSrc: 'dark.jpg', alt: 'themed screen' }, { src: 'plain.jpg', alt: 'plain screen' }];
  const renderWith = (theme: typeof lightTheme) => render(
    <ThemeProvider theme={theme}>
      <ImgCarousel images={themed} color='#123456' />
    </ThemeProvider>
  );

  const light = renderWith(lightTheme);
  expect(light.container.querySelectorAll('img')[0]).toHaveAttribute('src', 'light.jpg');
  light.unmount();

  const dark = renderWith(darkTheme);
  const imgs = dark.container.querySelectorAll('img');
  expect(imgs[0]).toHaveAttribute('src', 'dark.jpg');
  // Images without a dark version keep their normal screenshot
  expect(imgs[1]).toHaveAttribute('src', 'plain.jpg');
});

test('only pauses autoplay while a mouse is over the image', () => {
  // Report the carousel as on screen, otherwise autoplay stays paused
  const Original = window.IntersectionObserver;
  window.IntersectionObserver = class {
    constructor(private cb: IntersectionObserverCallback) {}
    observe() { this.cb([{ isIntersecting: true } as IntersectionObserverEntry], this as unknown as IntersectionObserver); }
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  } as unknown as typeof IntersectionObserver;
  const { container } = renderCarousel();
  window.IntersectionObserver = Original;
  const fill = () => container.querySelector<HTMLElement>('.fill')!;
  const frame = container.querySelector('.carousel')!.firstElementChild!;
  const controls = container.querySelector('.carousel')!.children[1];
  expect(fill().style.animationPlayState).toBe('running');

  fireEvent.pointerOver(frame, { pointerType: 'mouse' });
  expect(fill().style.animationPlayState).toBe('paused');
  fireEvent.pointerOut(frame, { pointerType: 'mouse', relatedTarget: controls });

  // Hovering and clicking the controls doesn't pause the new slide's progress
  fireEvent.pointerOver(controls, { pointerType: 'mouse' });
  fireEvent.click(screen.getByRole('button', { name: 'Next image' }));
  expect(fill().style.animationPlayState).not.toBe('paused');

  // A tap on a touch screen doesn't count as hovering
  fireEvent.pointerOver(frame, { pointerType: 'touch' });
  expect(fill().style.animationPlayState).not.toBe('paused');
});
