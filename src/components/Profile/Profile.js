import React from 'react'
import './Profile.css'

const Profile = ({ isProfileOpen, toggleModal }) => (
  <div className='profile-modal'>
    <button onClick={toggleModal}>Click</button>
  </div>
)

export default Profile
