import { useState, useEffect } from 'react';
import StyledCarousel, { CarouselContainer, Slides, ImgSlide, NavDots, Dot } from './StyledImgCarousel';
import type { CarouselImage } from '../../../types';

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

const ImgCarousel = ({ images, color, wide = false }: ImgCarouselProps) => {
  const [slide, setSlide] = useState<SlideState>({ index: 0, prev: null, dir: 'next' });
  const slideIndex = slide.index;
  const multiple = images.length > 1;

  const goTo = (index: number, dir: Direction) => setSlide({ index, prev: slideIndex, dir });

  const slideLeft = () => goTo((slideIndex <= 0) ? images.length - 1 : slideIndex - 1, 'prev');

  const slideRight = () => goTo((slideIndex >= images.length - 1) ? 0 : slideIndex + 1, 'next');

  const slideClass = (i: number) => {
    const classes: string[] = [slide.dir];
    if (slide.prev !== null) classes.push('animate');
    if (i === slideIndex) classes.push('active');
    if (i === slide.prev && i !== slideIndex) classes.push('leaving');
    return classes.join(' ');
  };

  useEffect(() => {
    if (!multiple) return undefined;
    const autoscroll = window.setInterval(slideRight, 5000);
    return () => window.clearInterval(autoscroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex, multiple]);

  return (
    <CarouselContainer className='carousel'>
      <StyledCarousel $color={color}>
        <Slides>
          {images.map((img, i) =>
            <ImgSlide $wide={wide} className={slideClass(i)} aria-hidden={i !== slideIndex} key={img.src}>
              <img src={img.src} alt={img.alt} />
            </ImgSlide>
          )}
        </Slides>

        {multiple && (
          <>
            <button type='button' onClick={slideLeft} aria-label='Previous image'>
              <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 256 512' fill='currentColor'><path d='M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z' /></svg>
            </button>
            <button type='button' onClick={slideRight} aria-label='Next image'>
              <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 256 512' fill='currentColor'><path d='M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z' /></svg>
            </button>
          </>
        )}
      </StyledCarousel>

      {multiple && (
        <NavDots>
          {images.map((img, i) =>
            <Dot
              type='button'
              $color={color}
              className={(i === slideIndex) ? 'active' : ''}
              aria-label={`Show image ${i + 1}: ${img.alt}`}
              aria-current={i === slideIndex}
              onClick={() => { if (i !== slideIndex) goTo(i, (i > slideIndex) ? 'next' : 'prev'); }}
              key={img.src}
            />
          )}
        </NavDots>
      )}
    </CarouselContainer>
  );
};

export default ImgCarousel;
