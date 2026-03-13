import { Box, Typography } from '@mui/material';
import { motion, useAnimationControls } from 'framer-motion';
import CloverKLogo from '../../assets/CloverKLogo';
import { usePublicPalette } from '../../context/PublicPaletteContext';

function createRandomBounceAnimation() {
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

export default function ComingSoonHero() {
  const interactionControls = useAnimationControls();
  const { activePalette } = usePublicPalette();

  const handleLogoInteraction = () => {
    interactionControls.stop();

    void interactionControls.start({
      ...createRandomBounceAnimation(),
      transition: {
        duration: 1.2,
        times: [0, 0.18, 0.42, 0.74, 1],
        ease: [0.34, 1.56, 0.64, 1],
      },
    });
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
            borderRadius: { xs: '24px', sm: '32px' },
            background: `linear-gradient(180deg, ${activePalette.cardGradientStart} 0%, ${activePalette.cardGradientEnd} 100%)`,
            border: `1px solid ${activePalette.cardBorderColor}`,
            backdropFilter: 'blur(14px)',
            boxShadow: `0 28px 80px ${activePalette.cardShadowColor}`,
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
                aria-label="Bounce Clover K logo"
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
                    borderRadius: { xs: '24px', sm: '28px' },
                    background: `radial-gradient(circle, ${activePalette.cardGradientEnd} 0%, rgba(255, 255, 255, 0) 72%)`,
                    '& svg': {
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                    },
                  }}
                >
                  <CloverKLogo
                    size={220}
                    color={activePalette.logoColor}
                    strokeWidth={10}
                  />
                </Box>
              </motion.button>
            </motion.div>
          </motion.div>
          <Typography
            variant="h2"
            sx={{
              maxWidth: '8ch',
              color: activePalette.headingColor,
              fontSize: 'clamp(2.6rem, 9vw, 4.6rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
              textShadow: '0 1px 0 rgba(255, 255, 255, 0.35)',
            }}
          >
            Coming soon
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
