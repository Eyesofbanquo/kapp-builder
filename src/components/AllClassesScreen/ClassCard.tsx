import { Box, Paper, Rating, Typography } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import NoteIcon from '@mui/icons-material/Note';
import type { PilatesClass } from '../../types/class';

interface Props {
  /** The Pilates class to display */
  pilatesClass: PilatesClass;
  /** Called when the card is tapped */
  onClick: (pilatesClass: PilatesClass) => void;
}

export default function ClassCard({ pilatesClass, onClick }: Props) {
  const isAttached = pilatesClass.eventId.length > 0;
  const hasNotes = pilatesClass.notes.trim().length > 0;
  const formattedDate = new Date(pilatesClass.createdAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Paper
      elevation={0}
      onClick={() => onClick(pilatesClass)}
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        cursor: 'pointer',
        '&:hover': { backgroundColor: 'action.hover' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {pilatesClass.name}
        </Typography>
        {pilatesClass.rating !== null && (
          <Rating value={pilatesClass.rating} readOnly size="small" />
        )}
      </Box>

      {pilatesClass.description && (
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          {pilatesClass.description}
        </Typography>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Typography variant="caption" color="text.disabled">
          {formattedDate}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {isAttached ? (
            <PushPinIcon fontSize="small" sx={{ color: 'text.secondary' }} />
          ) : (
            <LinkOffIcon fontSize="small" sx={{ color: 'text.disabled' }} />
          )}
          {hasNotes && (
            <NoteIcon fontSize="small" sx={{ color: 'text.secondary' }} />
          )}
        </Box>
      </Box>
    </Paper>
  );
}
