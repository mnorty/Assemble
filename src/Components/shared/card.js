import React, { Component } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import refreshProjects from '../../redux/projectReducer'

export default class Card extends Component {

  handleDeleteProject = () => {
    axios.delete(`/auth/deleteproject/${this.props.project.id}`)
    .then(res => {
        console.log('handleDeleteProject',this.props)
        refreshProjects(res.data) //we imported this above, we are passing in res.data,as the input for it.

    })
}

  render() {
    const { title, link ,due_date} = this.props.project;
    return (
      <div style={styles.container} className='cardContainer'>
        <p style={styles.p}><a style={styles.a} href={link}>Name:{title} </a></p>
        <p> Due Date: {due_date}</p>
        <a style={styles.a} href={link}>
          {/* <button style={styles.button}>More Info</button>
          <button onClick={this.handleDeleteProject}>Delete</button> */}
            <div>
              <div>
                <Grid container spacing={2}>
                <Grid container spacing={1} direction="column" alignItems="center">
                  <Grid item>
                    <ButtonGroup variant='contained' size='small' >
                    <Button>Edit</Button> 
                    
                    {/* <Button>View</Button>  */}
                    </ButtonGroup>

                    </Grid>
                  </Grid>
              </Grid>
              </div>
              <div>
                <Grid container spacing={2}>
                <Grid container spacing={1} direction="column" alignItems="center">
                  <Grid item>
                    <ButtonGroup variant='contained' size='small' >
                    
                    <Button onClick={this.handleDeleteProject}>Delete</Button> 
                    {/* <Button>View</Button>  */}
                    </ButtonGroup>

                    </Grid>
                  </Grid>
              </Grid>
              </div>
            </div>
        </a>
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