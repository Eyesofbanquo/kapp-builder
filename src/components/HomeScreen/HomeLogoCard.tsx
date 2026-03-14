import { useRef } from 'react';
import { Box } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import CloverKLogo from '../../assets/CloverKLogo';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import type { LogoAnimationName } from '../../types/logoAnimation';
import { pickRandomLogoAnimation, startLogoAnimation } from '../../utils/logoAnimations';

export default function HomeLogoCard() {
  const interactionControls = useAnimationControls();
  const outerPathControls = useAnimationControls();
  const innerPathControls = useAnimationControls();
  const previousAnimation = useRef<LogoAnimationName | null>(null);
  const { activePalette } = usePublicPalette();

  const handleLogoInteraction = () => {
    interactionControls.stop();

    const animationName = pickRandomLogoAnimation(previousAnimation.current);
    previousAnimation.current = animationName;

    void startLogoAnimation(animationName, interactionControls, outerPathControls, innerPathControls);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: { xs: '400px', sm: '420px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          px: { xs: 3, sm: 4.5 },
          py: { xs: 4, sm: 5 },
          borderRadius: '16px',
          backgroundColor: activePalette.surfaceContainerLow,
          border: `1px solid ${activePalette.outlineVariant}`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 11,
            mass: 0.82,
            velocity: 7,
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0, 1.5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.1,
            }}
          >
            <motion.button
              type="button"
              aria-label="Animate Clover K logo"
              onClick={handleLogoInteraction}
              whileTap={{ scale: 0.88 }}
              animate={interactionControls}
              style={{
                display: 'inline-flex',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  p: { xs: 2, sm: 2.5 },
                  width: 'clamp(120px, 36vw, 200px)',
                  borderRadius: '16px',
                  backgroundColor: 'transparent',
                  '& svg': {
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  },
                }}
              >
                <CloverKLogo
                  size={200}
                  color={activePalette.primary}
                  strokeWidth={10}
                  pathAnimation={{
                    outerPathControls,
                    innerPathControls,
                  }}
                />
              </Box>
            </motion.button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
