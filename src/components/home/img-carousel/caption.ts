import type { CarouselImage } from '../../../types';

/** Display caption for an image: its `caption`, or its alt text with a capital first letter. */
export const captionFor = ({ caption, alt }: CarouselImage): string =>
  caption ?? alt.charAt(0).toUpperCase() + alt.slice(1);
