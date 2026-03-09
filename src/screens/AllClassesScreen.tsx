import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useClassRepository } from '../context/ClassRepositoryContext';
import ClassCard from '../components/AllClassesScreen/ClassCard';
import EditClassDialog from '../components/AllClassesScreen/EditClassDialog';
import type { PilatesClass } from '../types/class';

interface Props {
  // No props needed; data comes from ClassRepositoryContext
}

export default function AllClassesScreen(_props: Props) {
  const { classes } = useClassRepository();
  const [editingClass, setEditingClass] = useState<PilatesClass | null>(null);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={700} mb={4}>
          Classes
        </Typography>

        {classes.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No classes logged yet. Create an event and log a class.
          </Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {classes.map((pilatesClass) => (
              <ClassCard
                key={pilatesClass.id}
                pilatesClass={pilatesClass}
                onClick={setEditingClass}
              />
            ))}
          </Box>
        )}

        <EditClassDialog
          pilatesClass={editingClass}
          onClose={() => setEditingClass(null)}
        />
      </Container>
    </Box>
  );
}
