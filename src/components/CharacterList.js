import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [chars, setChars] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then( resp => {
          // console.log(resp.data.results);
          setChars(resp.data.results)
        })
        .catch( err => {
          console.log('tis ded jim', err)
        })
    }
    
    getChars();
  }, []);

  return (
    <section className="character-list">
      <h2>List of Characters</h2>
      {chars.map(char => {
      return (
        <CharDetails key={char.id} character={char}/>
      )
      })}
    </section>
  );
}

const CharDetails = (props) => {
  const { name, species, status } = props.character;
  console.log(props.character);

  return (
    <Link to = {`/chars/${props.character.id}`}>
      <div className='character-card'>
        <h2>{name}</h2>
        Species: <em>{species}</em>
        Status: <em>{status}</em>
      </div>
    </Link>
  )
}
