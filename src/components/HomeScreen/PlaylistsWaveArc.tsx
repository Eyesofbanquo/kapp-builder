import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface Props {
  /** Color of the wave stroke */
  strokeColor: string;
  /** Opacity of the wave stroke (0–1) */
  strokeOpacity: number;
}

export default function PlaylistsWaveArc({ strokeColor, strokeOpacity }: Props) {
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
          d="M0 80 C80 20, 160 100, 240 50 S400 90, 400 60"
          stroke={strokeColor}
          strokeWidth={2}
          strokeLinecap="round"
          strokeOpacity={strokeOpacity}
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 1 }}
          transition={{
            pathLength: { duration: 2, ease: 'easeInOut' },
            pathOffset: {
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      </svg>
    </Box>
  );
}
