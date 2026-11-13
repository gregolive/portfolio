const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const ChevronLeft = () => <svg {...iconProps}><path d='M15 18l-6-6 6-6' /></svg>;

export const ChevronRight = () => <svg {...iconProps}><path d='M9 18l6-6-6-6' /></svg>;

export const Expand = () => <svg {...iconProps}><path d='M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7' /></svg>;

export const Close = () => <svg {...iconProps}><path d='M18 6L6 18M6 6l12 12' /></svg>;
