import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from '@mui/material';
import { useClassRepository } from '../../context/ClassRepositoryContext';
import ChangeClassDialog from './ChangeClassDialog';
import CompactClassCard from './CompactClassCard';

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
      <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
        Class
      </Typography>
      <Divider sx={{ mb: 1.5 }} />

      {attachedClass ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <CompactClassCard pilatesClass={attachedClass} />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              size="small"
              color="error"
              onClick={() => setShowDeleteConfirm(true)}
              sx={{ alignSelf: 'flex-start' }}
            >
              Delete
            </Button>
            <Button
              size="small"
              onClick={() => setShowChangeDialog(true)}
              sx={{ alignSelf: 'flex-start' }}
            >
              Change
            </Button>
          </Box>
        </Box>
      ) : (
        <Button
          variant="outlined"
          size="small"
          onClick={() => setShowChangeDialog(true)}
        >
          Add class
        </Button>
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
