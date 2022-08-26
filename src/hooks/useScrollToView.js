import { useRef, useEffect } from 'react';

export const useScrollToView = (dependency) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dependency, scrollRef]);

  return scrollRef;
};
