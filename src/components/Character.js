import React, { useState, useEffect } from 'react';
import {useParams}from 'react-router-dom';
import axios from 'axios';


const Character = (props) => {
  const [character, setCharacter] = useState();

  console.log(props);

  const id = useParams().id;
  useEffect(() => {
   
       axios
        .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  console.log('useparams', useParams());

  if (!character) {
    return <div>Loading character information...</div>;
  }

  const { name, species, status } = character;
  console.log(character);
  
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <div>
          Species:{species}
        </div>
        <div>
          Status: {status}
        </div>

        {/* {name.map(names => (
          <div>
            {names}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Character;