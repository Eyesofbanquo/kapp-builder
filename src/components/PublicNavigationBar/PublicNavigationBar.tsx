import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { usePublicPalette } from '../../context/PublicPaletteContext';

interface Props {
  /** Title displayed in the navigation bar */
  title: string;
}

export default function PublicNavigationBar({ title }: Props) {
  const navigate = useNavigate();
  const { activePalette } = usePublicPalette();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: `${activePalette.surfaceColor}cc`,
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: activePalette.cardBorderColor,
      }}
    >
      <Toolbar disableGutters>
        <Container
          maxWidth="sm"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <IconButton
            onClick={() => navigate(-1)}
            aria-label="Go back"
            edge="start"
            sx={{ marginRight: 1, color: activePalette.accentColor }}
          >
            <ArrowBackIosNew />
          </IconButton>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ color: activePalette.headingColor }}
          >
            {title}
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
