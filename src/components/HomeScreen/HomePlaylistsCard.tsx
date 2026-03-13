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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '420px',
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
          borderRadius: '16px',
          backgroundColor: activePalette.surfaceContainerLow,
          border: `1px solid ${activePalette.outlineVariant}`,
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: activePalette.surfaceContainerHigh,
          },
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            position: 'relative',
            zIndex: 1,
            color: activePalette.onSurface,
            letterSpacing: '0.08em',
          }}
        >
          Specialties
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
                  borderColor: activePalette.outline,
                  color: activePalette.onPrimaryContainer,
                  backgroundColor: activePalette.primaryContainer,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: activePalette.surfaceContainerHigh,
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
            backgroundColor: activePalette.primary,
            color: activePalette.onPrimary,
            borderRadius: '16px',
            px: 4,
            py: 1.2,
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: activePalette.primary,
              opacity: 0.9,
            },
          }}
        >
          Playlists
        </Button>

        <PlaylistsWaveArc
          strokeColor={activePalette.secondary}
          strokeOpacity={0.25}
        />
      </Box>
    </motion.div>
  );
}
