import { Box, Card, CardActionArea, Typography } from '@mui/material';

interface Props {
  /** Card title */
  title: string;
  /** Short description shown below the title */
  description: string;
  /** Click handler; omit to make the card non-interactive */
  onClick?: () => void;
  /** When true, removes the outer border (used inside ToolSection) */
  grouped?: boolean;
  /** When true, shows a pastel-pink hover state to signal the feature is not yet available */
  comingSoon?: boolean;
}

export default function ToolCard({ title, description, onClick, grouped, comingSoon }: Props) {
  return (
    <Card elevation={0} sx={grouped ? {} : { border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <CardActionArea
        onClick={onClick}
        sx={{
          p: 2.5,
          ...(comingSoon && {
            '&:hover': {
              backgroundColor: '#fce4ec',
              '& .MuiTypography-subtitle1': { color: '#880e4f' },
              '& .MuiTypography-body2': { color: '#ad1457' },
            },
          }),
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.disabled" mt={0.5}>
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
