import { useEffect, useRef } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { useTheme } from 'styled-components';
import Overlay, { TopBar, Stage, BottomBar, LightboxButton } from './StyledLightbox';
import { ChevronLeft, ChevronRight, Close } from './icons';
import useSwipe from '../../../hooks/useSwipe';
import type { CarouselImage } from '../../../types';
import { captionFor, srcFor } from './caption';

interface LightboxProps {
  images: CarouselImage[];
  index: number;
  color: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const Lightbox = ({ images, index, color, onIndexChange, onClose }: LightboxProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const multiple = count > 1;
  const image = images[index];
  const { isDark } = useTheme();
  const caption = captionFor(image);

  const prev = () => onIndexChange((index - 1 + count) % count);
  const next = () => onIndexChange((index + 1) % count);
  const swipe = useSwipe(next, prev);

  // Focus the close button and lock page scroll while open
  useEffect(() => {
    closeRef.current?.focus();
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    } else if (e.key === 'ArrowRight' && multiple) {
      next();
    } else if (e.key === 'ArrowLeft' && multiple) {
      prev();
    } else if (e.key === 'Tab') {
      // Keep keyboard focus inside the dialog
      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>('button');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === overlayRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  // Clicking the dark backdrop (but not the image or controls) closes the viewer
  const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).dataset.backdrop) onClose();
  };

  return (
    <Overlay
      ref={overlayRef}
      role='dialog'
      aria-modal='true'
      aria-label={`Image viewer: ${caption}`}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onClick={onBackdropClick}
    >
      <TopBar data-backdrop='true'>
        <span className='counter'>{multiple ? `${index + 1} / ${count}` : ''}</span>
        <LightboxButton type='button' ref={closeRef} $color={color} onClick={onClose} aria-label='Close image viewer'>
          <Close />
        </LightboxButton>
      </TopBar>

      <Stage data-backdrop='true' {...swipe}>
        <img src={srcFor(image, isDark)} alt={image.alt} key={image.src} />
      </Stage>

      <BottomBar data-backdrop='true'>
        {multiple ? (
          <LightboxButton type='button' $color={color} onClick={prev} aria-label='Previous image'><ChevronLeft /></LightboxButton>
        ) : <span />}
        <p className='caption' aria-live='polite'>{caption}</p>
        {multiple ? (
          <LightboxButton type='button' $color={color} onClick={next} aria-label='Next image'><ChevronRight /></LightboxButton>
        ) : <span />}
      </BottomBar>
    </Overlay>
  );
};

export default Lightbox;
