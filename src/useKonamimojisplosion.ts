import { useEffect } from 'react';
import { initializeKonamimojisplosion } from './initializeKonamimojisplosion';

export const useKonamimojisplosion = (onActivate?: () => void) => {
  useEffect(() => {
    return initializeKonamimojisplosion(onActivate);
  }, [onActivate]);
};
