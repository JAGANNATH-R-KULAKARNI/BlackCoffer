import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import SelectUI from './select';
import CheckBoxUI from './checkBox';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Language = [
  'English',
  'Kannada',
  'Telugu',
  'Hindi',
];

const Levels = [
  'Beginner',
  'Intermediate',
  'Advanced',
];

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setSettingsStatus(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        style={{minWidth : 400}}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Language & Blocks
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <SelectUI names={Language} placeholder='English' type="Language"/>
          </DialogContentText>
          <DialogContentText>
            <SelectUI names={Levels} placeholder='Beginner' type="Level"/>
          </DialogContentText>
          <DialogContentText>
            <CheckBoxUI names={Levels} type="Blocks"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
