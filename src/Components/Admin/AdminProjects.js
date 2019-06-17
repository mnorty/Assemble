import React from 'react'
import './AdminUserView'
import AdminUserView from './AdminUserView';
// import {Link} from 'react-router-dom'


const AdminView = () => {
    return <>
      <header className='adminheader'>
        <h1 className='adminWelcome'>Welcome Admin,  . . . We have been waiting for you.</h1>
      </header>
      <div className='adminbody'>
        <div className='adminUserContainer'>
          <div className='userHeader'>Current Projects</div>
          <div className='adminUserDisplay'>
            <AdminUserView/>
          </div>
        </div>
      </div>
    </>
}

export default AdminView