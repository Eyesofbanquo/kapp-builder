import { Box, Card, CardActionArea, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import { motion, type Variants } from 'framer-motion';
import type { Event } from '../../types/event';
import { useSavedLocations } from '../../context/SavedLocationsContext';

interface Props {
  /** The event to display */
  event: Event;
  /** Called when the card is tapped */
  onClick: (event: Event) => void;
  /** When true, plays a rattle shake animation on mount */
  isNew?: boolean;
  /** Called after the rattle animation finishes */
  onAnimationComplete?: () => void;
  /** When true, shows a school icon indicating a class is attached */
  hasClass?: boolean;
}

const rattleVariants: Variants = {
  rattle: {
    x: [0, -8, 8, -6, 6, -4, 4, 0],
    transition: { duration: 0.5, ease: 'easeInOut' as const },
  },
};

export default function EventCard({ event, onClick, isNew, onAnimationComplete, hasClass }: Props) {
  const { savedLocations } = useSavedLocations();
  const location = event.locationId
    ? savedLocations.find((saved) => saved.id === event.locationId)
    : null;

  const formattedDate = event.date ? event.date.format('MMM D, YYYY') : '—';
  const formattedTime = event.time ? event.time.format('h:mm A') : '—';

  return (
    <motion.div
      animate={isNew ? 'rattle' : undefined}
      variants={rattleVariants}
      onAnimationComplete={isNew ? onAnimationComplete : undefined}
    >
      <Card elevation={0}>
        <CardActionArea onClick={() => onClick(event)} sx={{ '&:hover': { backgroundColor: '#e8f5e9' } }}>
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
            {(location || hasClass) && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.5 }}>
                {location ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <PlaceIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">{location.name}</Typography>
                  </Box>
                ) : <Box />}
                {hasClass && <SchoolIcon fontSize="small" color="action" />}
              </Box>
            )}
          </Box>
        </CardActionArea>
      </Card>
    </motion.div>
  );
}
