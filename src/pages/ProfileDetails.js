import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserDetails from '../components/profilePage/UserDetails';
import  styledComponent  from 'styled-components';

const NotLogin  = styledComponent.div `
  margin : 180px auto;
`

function ProfileDetails() {

  let token = localStorage.getItem('token');
  let user = localStorage.getItem('user');

  if (!token && !user) {
    return (
      <NotLogin>
        <h5>silahkan login terlebih dahulu</h5>
      </NotLogin>
    )
  }

  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill>
      <Tab eventKey="profile" title="Profile">
      {<UserDetails/>}
      </Tab>
      <Tab eventKey="longer-tab" title="Pemesanan">
      <p>Pemesanan</p>
      </Tab>
      <Tab eventKey="contact" title="Alamat">
      <p>ALAMAT</p>
      </Tab>
    </Tabs>
  )
}

export default ProfileDetails