import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import type { SelectedLocation } from '../../types/event';

interface Props {
  /** The saved location to display */
  location: SelectedLocation;
  /** Called when the card is tapped */
  onClick: (location: SelectedLocation) => void;
}

export default function LocationCard({ location, onClick }: Props) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardActionArea
        onClick={() => onClick(location)}
        sx={{ '&:hover': { backgroundColor: '#e8f5e9' } }}
      >
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            {location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
