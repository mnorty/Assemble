import React, { Component } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import refreshProjects from '../../redux/projectReducer'
import MaterialEdit from '../ManagerEditProject/MaterialEdit'
import swal from '@sweetalert/with-react'

export default class AdminCard extends Component {

  handleDeleteProject = () => {
    axios.delete(`/auth/deleteproject/${this.props.project.id}`)
    .then(res => {
        console.log('handleDeleteProject',this.props)
        refreshProjects(res.data) //we imported this above, we are passing in res.data,as the input for it.

    })
}

  handleDeleteButton = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`/auth/deleteproject/${this.props.project.id}`)
        swal("Poof! Your Project has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Project is safe!");
      }
    });
  }

  render() {
    const { username, id} = this.props.users;
    return (
      <div style={styles.container} className='cardContainer'>
        <p >Name:{username}</p>
        <p> ID: {id}</p>
        
          {/* <button style={styles.button}>More Info</button>
          <button onClick={this.handleDeleteProject}>Delete</button> */}
            <div>
              {/* <div>
                <Grid container spacing={2}>
                <Grid container spacing={1} direction="column" alignItems="center">
                  <Grid item>
                    <ButtonGroup variant='contained' size='small' >
                    <Button onClick={this.handleEditProject}>Edit</Button> 
                    
                    <Button>View</Button> 
                    </ButtonGroup>

                    </Grid>
                  </Grid>
              </Grid>
              </div> */}
              <div>
                <Grid container spacing={2}>
                <Grid container spacing={1} direction="column" alignItems="center">
                  <Grid item>
                    <ButtonGroup variant='contained' size='small' >
                    
                    <Button onClick={this.handleDeleteButton}>Delete</Button> 
                    {/* <Button>View</Button>  */}
                    </ButtonGroup>
                    </Grid>
                  </Grid>
              </Grid>
              </div>
            </div>
        
        <MaterialEdit projectId={'1'}/>
      </div>
    )
  }
}


const styles = {
  container: {
    width: '90vw',
    height:'7vh',
    marginLeft:'5vw',
    textAlign: 'left',
    // border: 'gray 1px solid',
    borderRadius: '8px',
    paddingLeft: '10px',
    boxShadow: '0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3',
    marginBottom: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F1F1F1'
  },
  a: {
    fontSize: '14px',
    textDecoration: 'none',
    color: 'black'
  },
  p: {
    fontWeight: 'bold'
  },
  button: {
    marginRight: '10px',
    backgroundColor: '#F1F1F1',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}