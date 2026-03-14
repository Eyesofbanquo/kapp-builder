/** Names for each pilates-themed logo animation in the cycle. */
export type LogoAnimationName =
  | 'beybladeSpin'
  | 'reformerStretch'
  | 'rollUpCurl'
  | 'hundredPulse'
  | 'teaserBalance'
  | 'deadBug';

/**
 * Per-path animation controls passed to CloverKLogo for dual-path animations.
 * Controls come from framer-motion's useAnimationControls().
 */
export interface LogoPathAnimationProps {
  /** Framer Motion controls applied to the outer clover border path. */
  outerPathControls: ReturnType<typeof import('framer-motion').useAnimationControls>;
  /** Framer Motion controls applied to the inner clover border path. */
  innerPathControls: ReturnType<typeof import('framer-motion').useAnimationControls>;
}
