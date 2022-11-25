import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import profileAction from '../../redux/profile/profileAction';

const Bungkus = styled.div`
    margin:50px 300px;
`

function UserDetails() {
  let profileState = useSelector(state => state.profileReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let loggedIn = localStorage.getItem('user');

    if (loggedIn) {
      dispatch(profileAction.getProfile());
    }
    // eslint-disable-next-line
  }, [])
   
  if (profileState.user === null) {
    return <div>loading...</div> 
  }


  const handleLogOut = (e) => {
    e.preventDefault();

    localStorage.clear();
    navigate('/login');
    window.location.reload();
  }
  
  return (
    <Bungkus>
    <Table>
    <thead>
      <tr>
        <th>Nama</th>
        <td>{profileState.user.full_name}</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Email</th>
        <td>{profileState.user.email}</td>
      </tr>
    </tbody>
  </Table>

  <Button variant='danger' onClick={handleLogOut}>LOGOUT</Button>
    </Bungkus>
  )
}

export default UserDetails;