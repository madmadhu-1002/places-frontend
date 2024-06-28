import React from 'react';
import PlacesList from '../components/PlacesList';
import UsersList from '../../users/components/UsersList';

const Home = (props) => {
  return (
    <div>
      <PlacesList />
      <UsersList users={props.users}/>
    </div>
  )
}

export default Home