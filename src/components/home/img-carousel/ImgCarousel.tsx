import { useEffect, useRef, useState } from 'react';
import type { FocusEvent, PointerEvent } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'styled-components';
import CarouselContainer, { Frame, WindowBar, Slides, ImgSlide, ZoomButton, Controls, NavButton, Indicators, Pill } from './StyledImgCarousel';
import Lightbox from './Lightbox';
import { ChevronLeft, ChevronRight, Expand } from './icons';
import { captionFor, srcFor } from './caption';
import useInView from '@/hooks/useInView';
import useSwipe from '@/hooks/useSwipe';
import type { CarouselImage } from '@/types';

const AUTOPLAY_MS = 5000;

type Direction = 'next' | 'prev';

interface SlideState {
  index: number;
  prev: number | null;
  dir: Direction;
}

interface ImgCarouselProps {
  images: CarouselImage[];
  color: string;
  wide?: boolean;
}

const isFocusVisible = (el: Element) => {
  try {
    return el.matches(':focus-visible');
  } catch {
    return true;
  }
};

const ImgCarousel = ({ images, color, wide = false }: ImgCarouselProps) => {
  const [slide, setSlide] = useState<SlideState>({ index: 0, prev: null, dir: 'next' });
  const [hovered, setHovered] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const inView = useInView(containerRef);
  const { isDark } = useTheme();

  const slideIndex = slide.index;
  const count = images.length;
  const multiple = count > 1;
  // Autoplay pauses while a mouse is over the image, keyboard focus is inside, the lightbox is open,
  // or the carousel is off screen. Hovering the arrows and pills doesn't count, so clicking them
  // starts the next slide's progress straight away.
  const paused = hovered || keyboardFocused || lightboxOpen || !inView;

  const goTo = (index: number, dir?: Direction) => {
    if (index === slideIndex) return;
    setSlide({ index, prev: slideIndex, dir: dir ?? ((index > slideIndex) ? 'next' : 'prev') });
  };
  const prev = () => goTo((slideIndex <= 0) ? count - 1 : slideIndex - 1, 'prev');
  const next = () => goTo((slideIndex >= count - 1) ? 0 : slideIndex + 1, 'next');
  const swipe = useSwipe(next, prev);

  const slideClass = (i: number) => {
    const classes: string[] = [slide.dir];
    if (slide.prev !== null) classes.push('animate');
    if (i === slideIndex) classes.push('active');
    if (i === slide.prev && i !== slideIndex) classes.push('leaving');
    return classes.join(' ');
  };

  // Return focus to the image that is showing once the lightbox closes
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !lightboxOpen) zoomRefs.current[slideIndex]?.focus();
    wasOpen.current = lightboxOpen;
  }, [lightboxOpen, slideIndex]);

  // Mouse only: a tap on a touch screen fires an enter with no matching leave, which would pause it for good
  const onPointerEnter = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') setHovered(true);
  };

  const onFocus = (e: FocusEvent<HTMLDivElement>) => {
    if (isFocusVisible(e.target)) setKeyboardFocused(true);
  };
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setKeyboardFocused(false);
  };

  return (
    <CarouselContainer
      className='carousel'
      ref={containerRef}
      role='group'
      aria-roledescription='carousel'
      aria-label={multiple ? `Screenshots, ${count} images` : 'Screenshot'}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Frame onPointerEnter={onPointerEnter} onPointerLeave={() => setHovered(false)}>
        <WindowBar>
          <div className='lights' aria-hidden='true'><span /><span /><span /></div>
          <span className='title'>{captionFor(images[slideIndex])}</span>
        </WindowBar>

        <Slides {...swipe}>
          {images.map((img, i) =>
            <ImgSlide $wide={wide} className={slideClass(i)} aria-hidden={i !== slideIndex} key={img.src}>
              <ZoomButton
                type='button'
                $color={color}
                ref={(el) => { zoomRefs.current[i] = el; }}
                tabIndex={(i === slideIndex) ? 0 : -1}
                onClick={() => setLightboxOpen(true)}
                aria-label={`Enlarge image: ${captionFor(img)}`}
              >
                <img src={srcFor(img, isDark)} alt={img.alt} />
                <span className='zoom-hint' aria-hidden='true'><Expand /></span>
              </ZoomButton>
            </ImgSlide>
          )}
        </Slides>
      </Frame>

      {multiple && (
        <Controls>
          <NavButton type='button' $color={color} onClick={prev} aria-label='Previous image'>
            <ChevronLeft />
          </NavButton>

          <Indicators>
            {images.map((img, i) =>
              <Pill
                type='button'
                $color={color}
                className={(i === slideIndex) ? 'active' : ''}
                onClick={() => goTo(i)}
                aria-label={`Show image ${i + 1} of ${count}: ${captionFor(img)}`}
                aria-current={(i === slideIndex) ? 'true' : undefined}
                key={img.src}
              >
                {(i === slideIndex) && (
                  <span
                    className='fill'
                    key={slideIndex}
                    onAnimationEnd={next}
                    style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                  />
                )}
              </Pill>
            )}
          </Indicators>

          <NavButton type='button' $color={color} onClick={next} aria-label='Next image'>
            <ChevronRight />
          </NavButton>
        </Controls>
      )}

      {lightboxOpen && createPortal(
        <Lightbox
          images={images}
          index={slideIndex}
          color={color}
          onIndexChange={(i) => goTo(i)}
          onClose={() => setLightboxOpen(false)}
        />,
        document.body,
      )}
    </CarouselContainer>
  );
};

export default ImgCarousel;
