import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
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
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Select a class</DialogTitle>
      <DialogContent>
        {classes.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No classes available.
          </Typography>
        ) : (
          <List disablePadding>
            {classes.map((pilatesClass) => (
              <ListItemButton key={pilatesClass.id} onClick={() => handleSelect(pilatesClass)}>
                <ListItemText
                  primary={pilatesClass.name}
                  secondary={pilatesClass.description || undefined}
                />
              </ListItemButton>
            ))}
          </List>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
