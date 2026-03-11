import { Box } from '@mui/material';
import ComingSoonHero from '../components/ComingSoonScreen/ComingSoonHero';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export default function ComingSoonScreen(props: Props) {
  void props;

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ComingSoonHero />
    </Box>
  );
}
