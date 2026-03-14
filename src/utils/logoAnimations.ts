import type { LogoAnimationName } from '../types/logoAnimation';

/**
 * Controls interface matching the shape returned by framer-motion's
 * useAnimationControls — only the methods we actually call.
 */
interface AnimationControlsLike {
  start: (definition: Record<string, unknown>) => Promise<unknown>;
  set: (definition: Record<string, unknown>) => void;
}

/** Fixed cycle order for the 6 pilates-themed animations. */
export const LOGO_ANIMATION_ORDER: LogoAnimationName[] = [
  'beybladeSpin',
  'reformerStretch',
  'rollUpCurl',
  'hundredPulse',
  'teaserBalance',
  'deadBug',
];

/* ------------------------------------------------------------------ */
/*  1. Beyblade Spin                                                   */
/* ------------------------------------------------------------------ */

async function startBeybladeSpin(
  wrapperControls: AnimationControlsLike,
  outerPathControls: AnimationControlsLike,
  innerPathControls: AnimationControlsLike,
) {
  const scaleTransition = { duration: 1.4, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] };

  await Promise.all([
    wrapperControls.start({
      scale: [1, 0.92, 1.06, 1],
      transition: { ...scaleTransition, times: [0, 0.25, 0.7, 1] },
    }),
    outerPathControls.start({
      rotate: [0, 720],
      transition: { duration: 1.4, ease: 'easeInOut' },
    }),
    innerPathControls.start({
      rotate: [0, -720],
      transition: { duration: 1.4, ease: 'easeInOut' },
    }),
  ]);
}

/* ------------------------------------------------------------------ */
/*  2. Reformer Stretch                                                */
/* ------------------------------------------------------------------ */

async function startReformerStretch(
  wrapperControls: AnimationControlsLike,
) {
  await wrapperControls.start({
    scaleY: [1, 1.25, 0.85, 1],
    x: [0, 12, -8, 0],
    transition: {
      duration: 1.3,
      times: [0, 0.3, 0.65, 1],
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  });
}

/* ------------------------------------------------------------------ */
/*  3. Roll-Up Curl                                                    */
/* ------------------------------------------------------------------ */

async function startRollUpCurl(
  wrapperControls: AnimationControlsLike,
) {
  await wrapperControls.start({
    rotate: [0, -15, 8, 0],
    scale: [1, 0.9, 1.08, 1],
    y: [0, 0, -50, 0],
    transition: {
      duration: 1.3,
      times: [0, 0.3, 0.65, 1],
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  });
}

/* ------------------------------------------------------------------ */
/*  4. Hundred Pulse                                                   */
/* ------------------------------------------------------------------ */

async function startHundredPulse(
  wrapperControls: AnimationControlsLike,
) {
  await wrapperControls.start({
    scale: [1, 0.94, 1.04, 0.96, 1.03, 0.94, 1.04, 0.97, 1.02, 0.98, 1],
    y: [0, 4, -4, 3, -3, 4, -4, 3, -2, 1, 0],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  });
}

/* ------------------------------------------------------------------ */
/*  5. Teaser Balance                                                  */
/* ------------------------------------------------------------------ */

async function startTeaserBalance(
  wrapperControls: AnimationControlsLike,
) {
  await wrapperControls.start({
    rotate: [0, 18, -6, 3, 0],
    y: [0, -45, -45, -20, 0],
    scale: [1, 0.95, 1.02, 0.98, 1],
    transition: {
      duration: 1.6,
      times: [0, 0.3, 0.55, 0.78, 1],
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  });
}

/* ------------------------------------------------------------------ */
/*  6. Dead Bug                                                        */
/* ------------------------------------------------------------------ */

async function startDeadBug(
  wrapperControls: AnimationControlsLike,
  outerPathControls: AnimationControlsLike,
  innerPathControls: AnimationControlsLike,
) {
  // Phase 1: Flip upside down
  await wrapperControls.start({
    rotate: [0, 180],
    transition: { duration: 0.5, ease: 'easeInOut' },
  });

  // Phase 2: Asymmetric path pulses (arm/leg extensions)
  await Promise.all([
    outerPathControls.start({
      scaleX: [1, 1.15, 0.9, 1.12, 0.92, 1],
      transition: { duration: 0.8, ease: 'easeInOut' },
    }),
    innerPathControls.start({
      scaleY: [1, 0.88, 1.14, 0.9, 1.1, 1],
      transition: { duration: 0.8, ease: 'easeInOut' },
    }),
  ]);

  // Phase 3: Flip back
  await wrapperControls.start({
    rotate: [180, 360],
    transition: { duration: 0.5, ease: 'easeInOut' },
  });
}

/* ------------------------------------------------------------------ */
/*  Dispatcher                                                         */
/* ------------------------------------------------------------------ */

/** Reset path controls to clear residual transforms from per-path animations. */
function resetPathControls(
  outerPathControls: AnimationControlsLike,
  innerPathControls: AnimationControlsLike,
) {
  outerPathControls.set({ rotate: 0, scaleX: 1, scaleY: 1 });
  innerPathControls.set({ rotate: 0, scaleX: 1, scaleY: 1 });
}

/**
 * Starts the logo animation at the given cycle index.
 *
 * After per-path animations (beyblade, dead bug), path controls are reset
 * so subsequent wrapper-only animations aren't affected by residual transforms.
 */
export async function startLogoAnimation(
  animationName: LogoAnimationName,
  wrapperControls: AnimationControlsLike,
  outerPathControls: AnimationControlsLike,
  innerPathControls: AnimationControlsLike,
): Promise<void> {
  // Reset wrapper to identity before each animation
  wrapperControls.set({ x: 0, y: 0, rotate: 0, scale: 1, scaleX: 1, scaleY: 1 });

  // Reset path controls before every animation to clear residual transforms
  resetPathControls(outerPathControls, innerPathControls);

  switch (animationName) {
    case 'beybladeSpin':
      await startBeybladeSpin(wrapperControls, outerPathControls, innerPathControls);
      break;
    case 'reformerStretch':
      await startReformerStretch(wrapperControls);
      break;
    case 'rollUpCurl':
      await startRollUpCurl(wrapperControls);
      break;
    case 'hundredPulse':
      await startHundredPulse(wrapperControls);
      break;
    case 'teaserBalance':
      await startTeaserBalance(wrapperControls);
      break;
    case 'deadBug':
      await startDeadBug(wrapperControls, outerPathControls, innerPathControls);
      break;
  }
}
