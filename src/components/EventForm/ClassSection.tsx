import { useState } from 'react';
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useClassRepository } from '../../context/ClassRepositoryContext';
import ChangeClassDialog from './ChangeClassDialog';

interface Props {
  /** ID of the event whose associated class is shown */
  eventId: string;
}

export default function ClassSection({ eventId }: Props) {
  const { classes, deleteClass } = useClassRepository();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showChangeDialog, setShowChangeDialog] = useState(false);

  const attachedClass = classes.find((c) => c.eventId === eventId);

  return (
    <Box>
      <Typography variant="subtitle2" color="text.secondary" mb={1}>
        Class
      </Typography>

      {attachedClass ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Chip label={attachedClass.name} />
          <Button size="small" color="error" onClick={() => setShowDeleteConfirm(true)}>
            Delete
          </Button>
          <Button size="small" onClick={() => setShowChangeDialog(true)}>
            Change
          </Button>
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No class attached
        </Typography>
      )}

      <Dialog open={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Remove class?</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Remove "{attachedClass?.name}" from this event? The class data will be deleted.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              if (attachedClass) deleteClass(attachedClass.id);
              setShowDeleteConfirm(false);
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <ChangeClassDialog
        eventId={eventId}
        currentClassId={attachedClass?.id ?? null}
        open={showChangeDialog}
        onClose={() => setShowChangeDialog(false)}
      />
    </Box>
  );
}
