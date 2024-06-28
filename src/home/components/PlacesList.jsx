import React, {useState} from 'react';
import PlaceItem from './PlaceItem';

const PlacesList = () => {
    const [dummyPlaces, setDummyPlaces] = useState([
        {
          id: 1,
          image: 'https://via.placeholder.com/150',
          title: 'Honda',
          description: 'Description for Place 1'
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/150',
          title: 'Toyota',
          description: 'Description for Place 2'
        }
      ]);

    const onEdit = () => {
        // Handle edit action
        console.log("edit");
    }

    const onDelete = (a) => {
        // Handle delete action
        setDummyPlaces(dummyPlaces.filter((place) => place.id !== a));
        console.log("delete"+a);
    }
  return (
    <div>
        {dummyPlaces.map((place) => {
            return (
                <PlaceItem key={place.id} id={place.id} image={place.image} title={place.title} description={place.description} onEdit={onEdit} onDelete={onDelete}/>
            )
        })}
        </div>
  )
}

export default PlacesList