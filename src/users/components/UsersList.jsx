import React from 'react';
import axios from 'axios';

const UsersList = (props) => {

axios.get('https://3000-idx-places-1719545033432.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev/user')
  .then(response => {
    console.log(response.data); // This is the data from the response
    // Further process the data as needed
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });

    
  return (
    <div>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.username} - {user.email}
                </li>
                
            ))}
        </ul>
    </div>
  )
}

export default UsersList