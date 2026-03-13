import { Box, Button, Chip, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import type { ClassTypeTag } from '../../types/classTypeTag';
import PlaylistsWaveArc from './PlaylistsWaveArc';

const CLASS_TAGS: ClassTypeTag[] = [
  { identifier: 'mat-pilates', label: 'Mat Pilates' },
  { identifier: 'sculpt', label: 'Sculpt' },
  { identifier: 'amrap', label: 'AMRAP' },
  { identifier: 'mind-body', label: 'Mind+Body' },
];

const chipContainerVariants = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 22 },
  },
};

export default function HomePlaylistsCard() {
  const { activePalette } = usePublicPalette();

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
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          px: { xs: 3, sm: 4.5 },
          py: { xs: 3, sm: 4 },
          borderRadius: { xs: '24px', sm: '32px' },
          background: `linear-gradient(180deg, ${activePalette.cardGradientStart}E6 0%, ${activePalette.cardGradientEnd}E6 100%)`,
          border: `1px solid ${activePalette.cardBorderColor}54`,
          backdropFilter: 'blur(6px)',
          boxShadow: `0 16px 48px ${activePalette.cardShadowColor}`,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            position: 'relative',
            zIndex: 1,
            color: activePalette.headingColor,
            letterSpacing: '0.08em',
          }}
        >
          Classes
        </Typography>

        <Box
          component={motion.div}
          variants={chipContainerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          {CLASS_TAGS.map((tag) => (
            <motion.div key={tag.identifier} variants={chipVariants}>
              <Chip
                label={tag.label}
                variant="outlined"
                size="small"
                sx={{
                  borderColor: `${activePalette.accentColor}66`,
                  color: activePalette.secondaryTextColor,
                  backgroundColor: `${activePalette.surfaceColor}87`,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: `${activePalette.surfaceColor}B3`,
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: activePalette.buttonColor,
            color: activePalette.buttonTextColor,
            borderRadius: '16px',
            px: 4,
            py: 1.2,
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: activePalette.buttonColor,
              opacity: 0.9,
            },
          }}
        >
          Playlists
        </Button>

        <PlaylistsWaveArc
          strokeColor={activePalette.accentColor}
          strokeOpacity={0.25}
        />
      </Box>
    </Box>
  );
}
