import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import ClassForm from '../CreateClassScreen/ClassForm';
import { useClassRepository } from '../../context/ClassRepositoryContext';
import type { PilatesClass, ClassFormState } from '../../types/class';

interface Props {
  /** The class being edited, or null if dialog is closed */
  pilatesClass: PilatesClass | null;
  /** Called when the dialog should close */
  onClose: () => void;
}

export default function EditClassDialog({ pilatesClass, onClose }: Props) {
  const { updateClass, deleteClass } = useClassRepository();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSave = (formState: ClassFormState, selectedEventId: string) => {
    if (!pilatesClass) return;
    updateClass(pilatesClass.id, { ...formState, eventId: selectedEventId });
    onClose();
  };

  const handleDeleteConfirm = () => {
    if (!pilatesClass) return;
    deleteClass(pilatesClass.id);
    setShowDeleteConfirm(false);
    onClose();
  };

  if (!pilatesClass) return null;

  return (
    <>
      <Dialog open={!showDeleteConfirm} onClose={onClose} maxWidth="sm" fullWidth scroll="paper">
        <DialogTitle>Edit Class</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <ClassForm
            initialValues={{
              name: pilatesClass.name,
              description: pilatesClass.description,
              rating: pilatesClass.rating,
              notes: pilatesClass.notes,
            }}
            initialEventId={pilatesClass.eventId}
            initialViewMode="preview"
            currentClassId={pilatesClass.id}
            submitLabel="Save"
            onSubmit={handleSave}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setShowDeleteConfirm(true)}>
            Delete
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Delete class?</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            This will permanently delete "{pilatesClass.name}". This cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
