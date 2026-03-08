import { Box, Card, CardActionArea, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Event } from '../../types/event';

interface Props {
  /** The event to display */
  event: Event;
  /** Called when the card is tapped */
  onClick: (event: Event) => void;
}

export default function EventCard({ event, onClick }: Props) {
  const formattedDate = event.date ? event.date.format('MMM D, YYYY') : '—';
  const formattedTime = event.time ? event.time.format('h:mm A') : '—';

  return (
    <Card elevation={0}>
      <CardActionArea onClick={() => onClick(event)}>
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.disabled">
            {event.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.5 }}>
            <CalendarTodayIcon fontSize="small" color="action" />
            <Typography variant="body2">{formattedDate}</Typography>
            <Typography variant="body2" color="text.disabled">·</Typography>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2">{formattedTime}</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
