import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CloverKLogo from '../../assets/CloverKLogo';
import { publicAppPalette } from '../../theme/publicAppTheme';

const comingSoonTextColor = '#40283F';

export default function ComingSoonHero() {
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
            width: 'min(100%, 420px)',
            minHeight: { xs: '560px', sm: '620px' },
            px: { xs: 3, sm: 4.5, md: 5 },
            py: { xs: 5, sm: 6, md: 7 },
            textAlign: 'center',
            borderRadius: { xs: '24px', sm: '32px' },
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.86) 0%, rgba(255, 210, 252, 0.58) 100%)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 28px 80px rgba(35, 27, 27, 0.12)',
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                p: { xs: 2, sm: 2.5 },
                width: 'clamp(150px, 42vw, 240px)',
                borderRadius: { xs: '24px', sm: '28px' },
                background: 'radial-gradient(circle, rgba(233, 128, 252, 0.18) 0%, rgba(221, 255, 247, 0) 72%)',
                '& svg': {
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                },
              }}
            >
              <CloverKLogo size={220} color={publicAppPalette.plum} strokeWidth={10} />
            </Box>
          </motion.div>
          <Typography
            variant="h2"
            sx={{
              maxWidth: '8ch',
              color: comingSoonTextColor,
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
