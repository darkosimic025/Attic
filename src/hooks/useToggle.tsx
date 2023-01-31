import { useState } from 'react';

export const useToggle = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);

  return [isShown, toggle] as const;
};
