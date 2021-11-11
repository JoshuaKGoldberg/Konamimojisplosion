import { emojisplosions, EmojisplosionsHandler } from 'emojisplosion';
import KonamiCode from 'konami-code-js';

export const initializeKonamimojisplosion = (onActivate?: () => void) => {
  let explosions: EmojisplosionsHandler | undefined;

  const konamiCode = new KonamiCode(() => {
    if (explosions) {
      explosions.cancel();
      explosions = undefined;
    } else {
      explosions = emojisplosions();
      onActivate?.();
    }
  });

  return () => {
    explosions?.cancel();
    konamiCode.disable();
  };
};
