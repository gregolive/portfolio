declare module 'ityped' {
  export interface ITypedOptions {
    strings?: string[];
    typeSpeed?: number;
    backSpeed?: number;
    startDelay?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    placeholder?: boolean;
    disableBackTyping?: boolean;
    cursorChar?: string;
    onFinished?: () => void;
  }

  export function init(element: HTMLElement | string, options?: ITypedOptions): void;
}
