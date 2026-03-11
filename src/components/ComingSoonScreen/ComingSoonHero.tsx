import { Box, Chip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CloverKLogo from '../../assets/CloverKLogo';
import { publicAppPalette } from '../../theme/publicAppTheme';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export default function ComingSoonHero(props: Props) {
  void props;

  return (
    <Box sx={{ width: '100%', maxWidth: 640 }}>
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
            gap: 3,
            px: { xs: 3, sm: 5 },
            py: { xs: 4, sm: 6 },
            textAlign: 'center',
            borderRadius: '32px',
            border: '1px solid rgba(35, 27, 27, 0.1)',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.84) 0%, rgba(255, 210, 252, 0.58) 100%)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 28px 80px rgba(35, 27, 27, 0.12)',
          }}
        >
          <Chip
            label="Frontend app"
            sx={{
              color: publicAppPalette.espresso,
              backgroundColor: 'rgba(221, 255, 247, 0.92)',
              borderRadius: '999px',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                p: 2,
                borderRadius: '28px',
                background: 'radial-gradient(circle, rgba(233, 128, 252, 0.18) 0%, rgba(221, 255, 247, 0) 72%)',
              }}
            >
              <CloverKLogo size={180} color={publicAppPalette.plum} strokeWidth={10} />
            </Box>
          </motion.div>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.75rem', sm: '4rem' },
              lineHeight: 0.95,
            }}
          >
            Coming soon
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 460,
              color: 'text.secondary',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            The public Clover K experience will live here next. The current management tools remain at /backend/ui.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
