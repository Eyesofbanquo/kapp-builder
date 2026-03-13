import { Box } from '@mui/material';
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

export default function HomeLogoCard() {
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
          borderRadius: { xs: '24px', sm: '32px' },
          background: `linear-gradient(180deg, ${activePalette.cardGradientStart} 0%, ${activePalette.cardGradientEnd} 100%)`,
          border: `1px solid ${activePalette.cardBorderColor}`,
          backdropFilter: 'blur(14px)',
          boxShadow: `0 28px 80px ${activePalette.cardShadowColor}`,
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
                  width: 'clamp(120px, 36vw, 200px)',
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
                  size={200}
                  color={activePalette.logoColor}
                  strokeWidth={10}
                />
              </Box>
            </motion.button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
