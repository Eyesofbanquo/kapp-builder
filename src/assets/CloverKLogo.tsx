import { motion } from 'framer-motion';
import type { LogoPathAnimationProps } from '../types/logoAnimation';

interface Props {
  /** Width and height of the SVG in pixels. */
  size?: number;
  /** Stroke color for both clover paths. */
  color?: string;
  /** Base stroke width; outer path uses 2.2x this value. */
  strokeWidth?: number;
  /** Optional CSS class name. */
  className?: string;
  /** When provided, renders motion.path elements with per-path animation controls. */
  pathAnimation?: LogoPathAnimationProps;
}

const PATH_TRANSFORM_ORIGIN = '512px 498px';

const OUTER_PATH_DATA = `
  M512 120
  C610 120 690 190 720 290
  C825 305 904 385 904 488
  C904 590 825 670 720 686
  C694 795 615 876 512 876
  C409 876 330 795 304 686
  C199 670 120 590 120 488
  C120 385 199 305 304 290
  C334 190 414 120 512 120
  Z
`;

const INNER_PATH_DATA = `
  M512 170
  C598 170 668 232 692 320
  C783 332 850 401 850 488
  C850 575 783 644 692 656
  C670 745 600 812 512 812
  C424 812 354 745 332 656
  C241 644 174 575 174 488
  C174 401 241 332 332 320
  C356 232 426 170 512 170
  Z
`;

export default function CloverKLogo({
  size = 320,
  color = '#efb6c1',
  strokeWidth = 12,
  className = '',
  pathAnimation,
}: Props) {
  const sharedPathProps = {
    stroke: color,
    strokeLinejoin: 'round' as const,
    strokeLinecap: 'round' as const,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {pathAnimation ? (
        <>
          {/* Outer clover border — animated */}
          <motion.path
            d={OUTER_PATH_DATA}
            {...sharedPathProps}
            strokeWidth={strokeWidth * 2.2}
            animate={pathAnimation.outerPathControls}
            style={{ transformOrigin: PATH_TRANSFORM_ORIGIN }}
          />
          {/* Inner clover border — animated */}
          <motion.path
            d={INNER_PATH_DATA}
            {...sharedPathProps}
            strokeWidth={strokeWidth}
            animate={pathAnimation.innerPathControls}
            style={{ transformOrigin: PATH_TRANSFORM_ORIGIN }}
          />
        </>
      ) : (
        <>
          {/* Outer clover border */}
          <path
            d={OUTER_PATH_DATA}
            {...sharedPathProps}
            strokeWidth={strokeWidth * 2.2}
          />
          {/* Inner clover border */}
          <path
            d={INNER_PATH_DATA}
            {...sharedPathProps}
            strokeWidth={strokeWidth}
          />
        </>
      )}
    </svg>
  );
}
