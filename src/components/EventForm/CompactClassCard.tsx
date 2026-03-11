import { Box, Paper, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SubjectIcon from '@mui/icons-material/Subject';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import dayjs from 'dayjs';
import type { PilatesClass } from '../../types/class';

interface Props {
  /** The class to display */
  pilatesClass: PilatesClass;
}

export default function CompactClassCard({ pilatesClass }: Props) {
  const formattedDate = dayjs(pilatesClass.createdAt).format('MMM D, YYYY');

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'action.hover',
      }}
    >
      <Typography variant="subtitle2" fontWeight={600}>
        {pilatesClass.name}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
        <CalendarTodayIcon fontSize="small" sx={{ color: 'text.secondary', fontSize: 14 }} />
        <Typography variant="body2" color="text.secondary">
          {formattedDate}
        </Typography>
      </Box>

      {pilatesClass.rating !== null && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          <StarIcon fontSize="small" sx={{ color: 'text.secondary', fontSize: 14 }} />
          <Typography variant="body2" color="text.secondary">
            {pilatesClass.rating} / 5
          </Typography>
        </Box>
      )}

      {pilatesClass.description && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          <SubjectIcon fontSize="small" sx={{ color: 'text.secondary', fontSize: 14 }} />
          <Typography variant="body2" color="text.secondary">
            {pilatesClass.description}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
