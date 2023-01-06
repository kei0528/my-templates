import { RefObject, useEffect } from 'react';

type Props = {
  ref: RefObject<any>;
  callback: (elm: HTMLElement) => void;
  threshold?: number;
  rootMargin?: `${number}px`;
};

export const useElementOnVisible = ({ ref, callback, threshold = 0.4, rootMargin = '0px' }: Props) => {
  useEffect(() => {
    if (ref.current === null) return;
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio > threshold) {
          callback(ref.current);
        }
      },
      { root: null, rootMargin: rootMargin, threshold }
    );
    io.observe(ref.current);

    return () => {
      io.disconnect();
    };
  }, [ref]); /* eslint-disable-line */

  return;
};
