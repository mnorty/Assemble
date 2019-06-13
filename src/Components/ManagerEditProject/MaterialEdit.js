import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  
  function handleClickOpen() {
    setOpen(true);
    
  }
  
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Feel Free to Edit any of the fields bellow
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Due_Date"
            label=""
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Edit Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}