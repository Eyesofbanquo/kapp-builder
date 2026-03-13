import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { usePublicPalette } from '../../context/PublicPaletteContext';

interface Props {
  /** Single letter displayed inside the box. */
  letter: string;
}

export default function HomeLetterBox({ letter }: Props) {
  const { activePalette } = usePublicPalette();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ flex: 1 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1 / 1',
          borderRadius: { xs: '16px', sm: '20px' },
          backgroundColor: activePalette.surfaceColor,
          border: `1px solid ${activePalette.cardBorderColor}`,
          cursor: 'default',
          transition: 'box-shadow 0.2s ease',
          '&:hover': {
            boxShadow: `inset 0 0 20px ${activePalette.accentColor}66`,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: activePalette.headingColor,
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
            userSelect: 'none',
          }}
        >
          {letter}
        </Typography>
      </Box>
    </motion.div>
  );
}
