/**
 * Shared bounce-animation configuration used by logo interactions
 * in HomeLogoCard and ComingSoonHero.
 */

/** Transition config for the bounce interaction. */
export const BOUNCE_TRANSITION = {
  duration: 1.2,
  times: [0, 0.18, 0.42, 0.74, 1],
  ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
};

/**
 * Generates a randomised bounce animation with horizontal kick,
 * vertical lift, rotation, and scale keyframes.
 */
export function createRandomBounceAnimation() {
  const horizontalDirection = Math.random() > 0.5 ? 1 : -1;
  const primaryKick = 20 + Math.random() * 28;
  const counterKick = 18 + Math.random() * 24;
  const settleKick = 8 + Math.random() * 14;
  const verticalLift = 34 + Math.random() * 34;
  const rotationKick = 10 + Math.random() * 16;

  return {
    x: [
      0,
      horizontalDirection * primaryKick,
      horizontalDirection * -counterKick,
      horizontalDirection * settleKick,
      0,
    ],
    y: [
      0,
      -verticalLift,
      -(verticalLift * 0.38),
      -(verticalLift * 0.72),
      0,
    ],
    rotate: [
      0,
      horizontalDirection * rotationKick,
      horizontalDirection * -(rotationKick * 1.2),
      horizontalDirection * (rotationKick * 0.52),
      0,
    ],
    scale: [1, 0.9, 1.08, 0.97, 1],
  };
}
