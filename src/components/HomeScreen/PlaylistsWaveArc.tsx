import { Box } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

function randomBetween(minimum: number, maximum: number): number {
  return Math.round(minimum + Math.random() * (maximum - minimum));
}

function generateRandomWavePath(): string {
  const startY = randomBetween(50, 100);
  const controlPoint1Y = randomBetween(10, 110);
  const controlPoint2Y = randomBetween(10, 110);
  const midpointY = randomBetween(30, 90);
  const controlPoint3Y = randomBetween(10, 110);
  const endY = randomBetween(40, 80);
  return `M0 ${startY} C80 ${controlPoint1Y}, 160 ${controlPoint2Y}, 240 ${midpointY} S320 ${controlPoint3Y}, 400 ${endY}`;
}

/** Fraction of the path visible as a sliding arc segment */
const VISIBLE_FRACTION = 0.4;
/** How long each sweep takes in seconds */
const SWEEP_DURATION = 2.5;
/** Pause between sweeps in milliseconds */
const PAUSE_MS = 600;

interface Props {
  /** Color of the wave stroke */
  strokeColor: string;
  /** Opacity of the wave stroke (0–1) */
  strokeOpacity: number;
}

export default function PlaylistsWaveArc({ strokeColor, strokeOpacity }: Props) {
  const [pathData, setPathData] = useState(generateRandomWavePath);
  const controls = useAnimationControls();

  useEffect(() => {
    let cancelled = false;

    async function loop() {
      controls.set({ pathLength: VISIBLE_FRACTION });
      let sweepingRight = true;

      while (!cancelled) {
        const start = sweepingRight ? -VISIBLE_FRACTION : 1;
        const end = sweepingRight ? 1 : -VISIBLE_FRACTION;

        await controls.start({
          pathOffset: [start, end],
          transition: {
            duration: SWEEP_DURATION,
            ease: [0.4, 0, 1, 1],
          },
        });
        if (cancelled) break;

        // Segment is fully off-screen — safe to swap path
        sweepingRight = !sweepingRight;
        setPathData(generateRandomWavePath());

        await new Promise(resolve => setTimeout(resolve, PAUSE_MS));
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [controls]);

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 400 120"
        width="100%"
        height="auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={pathData}
          stroke={strokeColor}
          strokeWidth={2}
          strokeLinecap="round"
          strokeOpacity={strokeOpacity}
          initial={{ pathLength: VISIBLE_FRACTION, pathOffset: -VISIBLE_FRACTION }}
          animate={controls}
        />
      </svg>
    </Box>
  );
}
