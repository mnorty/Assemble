import React, { Component } from 'react';
// import Card from '../shared/card';
import Loading from '../shared/Loading';
import { connect } from 'react-redux';
import { requestProjects } from '../../redux/projectReducer';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.requestProjects()
    console.log('requested Projects')
    console.log('state of Project.js',this.state)
  }

  render() {
    // const Project = this.props.project.map((project => <Card key={project.id} project={project} />))
    return (
      <div className='news-container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPIQdUkzKSdWlBXckuUa17xaIL2eeueIF-_X6YHw024EnX7a-" alt="" style={styles.logo} />
        {this.props.loading ? <Loading /> : <div>{Project}</div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.Project;
}

export default connect(mapStateToProps, { requestProjects })(Project);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}