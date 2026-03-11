import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SubjectIcon from '@mui/icons-material/Subject';
import { useClassRepository } from '../../context/ClassRepositoryContext';
import type { PilatesClass } from '../../types/class';

interface Props {
  /** ID of the event that is receiving a new class */
  eventId: string;
  /** ID of the class currently attached (to detach it) */
  currentClassId: string | null;
  /** Whether the dialog is open */
  open: boolean;
  /** Called when the dialog should close */
  onClose: () => void;
}

export default function ChangeClassDialog({ eventId, currentClassId, open, onClose }: Props) {
  const { classes, updateClass } = useClassRepository();

  const handleSelect = (pilatesClass: PilatesClass) => {
    // Detach the old class
    if (currentClassId && currentClassId !== pilatesClass.id) {
      const oldClass = classes.find((c) => c.id === currentClassId);
      if (oldClass) {
        updateClass(oldClass.id, { ...oldClass, eventId: '' });
      }
    }
    // Attach the new class
    updateClass(pilatesClass.id, { ...pilatesClass, eventId });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} scroll="paper" maxWidth="xs" fullWidth>
      <DialogTitle>Select a class</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {classes.map((pilatesClass) => (
            <Paper
              key={pilatesClass.id}
              elevation={0}
              onClick={() => handleSelect(pilatesClass)}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'action.hover' },
              }}
            >
              <Typography variant="subtitle2" fontWeight={600}>
                {pilatesClass.name}
              </Typography>

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
          ))}

          {classes.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No classes available.
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
