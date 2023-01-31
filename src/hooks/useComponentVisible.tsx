import { useCallback, useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);

  const component = useRef<HTMLDivElement>(null);
  const triggerComponent = useRef<HTMLImageElement>(null);

  const handleClickOutside = useCallback(({ target }: MouseEvent) => {
    const currentComponent = component.current as HTMLDivElement;
    const currentTriggerComponent = triggerComponent.current as HTMLDivElement;

    const isClickedOutsideComponent =
      component &&
      triggerComponent &&
      !currentComponent.contains(target as Node) &&
      !currentTriggerComponent.contains(target as Node);

    isClickedOutsideComponent && setIsComponentVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { component, triggerComponent, isComponentVisible, setIsComponentVisible };
}
