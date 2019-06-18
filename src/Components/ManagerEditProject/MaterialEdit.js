import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import {connect} from 'react-redux'
import {refreshProjects} from '../../redux/projectReducer'

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title,setTitle] = React.useState('')
  const [due_date,setDue_date] = React.useState('')
  const [description,setDescription] =React.useState('')
  // const {creator_id} = props.creator_id
  
  function handleClickOpen() {
    setOpen(true);
    
  }
  
  function handleClose() {
    setOpen(false);
  }

  function handleEditProject()  {
    const creator_id = props.creator_id
    console.log('At HandleEditProject', props)
    axios.put(`/auth/editProject/${props.projectId}`,{title,due_date,description,creator_id})
    .then(res => {
      console.log('handleEditProject',props)
      props.refreshProjects(res.data)
  })
}

  function doubleFunction() {
    handleClose();
    handleEditProject();
  }
  console.log(title,due_date,description)
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} >
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
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Due_Date"
            label=""
            type="date"
            fullWidth
            onChange={(event) => setDue_date(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Description"
            label="Description"
            type="text"
            fullWidth
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={doubleFunction} color="primary">
            Edit Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default connect(null,{refreshProjects})(FormDialog)