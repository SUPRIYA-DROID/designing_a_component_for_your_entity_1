import React from 'react';
import '../index.css'; 

const UserCard = () => {

  return (
    <div className="user-card">
      <img src='../assets/image.jpg' alt="Profile" className="photo" />
      <div className="details">
        <h1>#Kalvian UserCard</h1>
        <h2 className="name">supriya</h2>
        <p className="email">Email: supriya2006@gmail.com</p>
        <p className="phone">Phone: +91 1234567890</p>
        <p className="address">Address:The Apollo University, Chittoor, Andhra Pradesh, India </p>
      </div>
    </div>
  );
};

export default UserCard;