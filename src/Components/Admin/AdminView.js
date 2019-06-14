import React from 'react'
import './AdminView.css'
import AdminUserView from './AdminUserView';
// import {Link} from 'react-router-dom'


const AdminView = () => {
    return <>
      <header className='adminheader'>
        <h1 className='adminWelcome'>Welcome Admin,  . . . We have been waiting for you.</h1>
      </header>
      <body className='adminbody'>
        <div className='adminUserContainer'>
          <div className='userHeader'>Current Users</div>
          <div className='adminUserDisplay'>
            <AdminUserView/>
          </div>
        </div>
      </body>
    </>
}

export default AdminView