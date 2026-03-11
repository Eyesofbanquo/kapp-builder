import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useNavigation } from '../../context/NavigationContext';

interface Props {
  /** ID of the newly created event */
  eventId: string;
  /** Whether the dialog is open */
  open: boolean;
  /** Called when the user dismisses (navigates away) */
  onDismiss: () => void;
}

export default function AddClassDialog({ eventId, open, onDismiss }: Props) {
  const { push, replaceWith } = useNavigation();

  const handleYes = () => {
    push('createClass', { eventId });
    onDismiss();
  };

  const handleNo = () => {
    replaceWith('main');
    onDismiss();
  };

  return (
    <Dialog open={open} onClose={handleNo} maxWidth="xs" fullWidth>
      <DialogTitle>Log a class?</DialogTitle>
      <DialogContent>
        <Typography variant="body2">
          Would you like to log a Pilates class for this event?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNo}>No</Button>
        <Button variant="contained" onClick={handleYes}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
