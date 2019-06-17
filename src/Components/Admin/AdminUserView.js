import React, { Component } from 'react';
import AdminCard from './AdminCard';
import Loading from '../shared/Loading';
import { connect } from 'react-redux';
import { requestUsers } from '../../redux/adminReducer';

class AdminUserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.requestUsers()
    console.log('Request Users firing',this.state.users, this.props)
    

  }

  // handleDeleteProject = (data) => {
  //   this.setState({
  //     project:data
  //   })
  // }

  render() {
    const users = this.props.users.map((users => <AdminCard key={users.id} users={users} />)) || []
    return (
      <>
      <div className='news-container'>
        {this.props.loading ? <Loading /> : <div>{users}</div>}
      </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return state.admin;
}

export default connect(mapStateToProps, { requestUsers })(AdminUserView);

