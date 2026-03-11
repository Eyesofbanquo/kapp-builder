import { Box, Container, Paper } from '@mui/material';
import ClassForm from '../components/CreateClassScreen/ClassForm';
import { useClassRepository } from '../context/ClassRepositoryContext';
import { useNavigation } from '../context/NavigationContext';
import type { ClassFormState } from '../types/class';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {
  // eventId comes from currentParams
}

export default function CreateClassScreen(props: Props) {
  void props;

  const { addClass } = useClassRepository();
  const { replaceWith, currentParams } = useNavigation();

  const eventId = currentParams?.eventId ?? '';

  const handleSubmit = (formState: ClassFormState, selectedEventId: string) => {
    addClass(selectedEventId, formState);
    replaceWith('allClasses');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', pt: 2, pb: 6 }}>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
          <ClassForm
            initialEventId={eventId}
            submitLabel="Save Class"
            onSubmit={handleSubmit}
          />
        </Paper>
      </Container>
    </Box>
  );
}
