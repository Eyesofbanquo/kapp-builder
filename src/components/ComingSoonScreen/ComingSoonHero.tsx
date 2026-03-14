import { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import CloverKLogo from '../../assets/CloverKLogo';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import type { LogoAnimationName } from '../../types/logoAnimation';
import { pickRandomLogoAnimation, startLogoAnimation } from '../../utils/logoAnimations';

export default function ComingSoonHero() {
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
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
            width: '100%',
            maxWidth: { xs: '432px', sm: '420px' },
            minHeight: { xs: '560px', sm: '620px' },
            px: { xs: 3, sm: 4.5, md: 5 },
            py: { xs: 5, sm: 6, md: 7 },
            textAlign: 'center',
            borderRadius: '16px',
            backgroundColor: activePalette.surfaceContainerLow,
            border: `1px solid ${activePalette.outlineVariant}`,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.3,
              x: 24,
              y: 180,
              rotate: -18,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotate: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 11,
              mass: 0.82,
              velocity: 7,
              delay: 0.08,
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
                    width: 'clamp(150px, 42vw, 240px)',
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
                    size={220}
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
          <Typography
            variant="h2"
            sx={{
              maxWidth: '8ch',
              color: activePalette.onSurface,
              fontSize: 'clamp(2.6rem, 9vw, 4.6rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
            }}
          >
            Coming soon
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
