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
}

export default function ToolCard({ title, description, onClick, grouped }: Props) {
  return (
    <Card elevation={0} sx={grouped ? {} : { border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
      <CardActionArea onClick={onClick} sx={{ p: 2.5 }}>
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
