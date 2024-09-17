import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

const CharList = styled.section`

  margin: 2%;
  padding: 2%;
  color: white;
  border: 2px dotted yellow;
  text-align: center;
  background: green;
`


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [chars, setChars] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then( resp => {
          console.log(resp.data.results);
          setChars(resp.data.results)
        })
        .catch( err => {
          console.log('tis ded jim', err)
        })
    }
    
    getChars();
  }, []);

  const handleSearch = (input) => {
    //helper function
    setChars(
      chars.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase())
      })
    )
  }

  return (
    <section className="character-list">
      <h2>List of Characters</h2>
      <SearchForm handleSearch={handleSearch} />
      {chars.map(char => {
      return (
        <Link to={`/chars/${chars.id}`} style={{ textDecoration: 'none' }}><CharDetails key={char.id} character={char}/></Link>
      )
      })}
    </section>
  );
}



const CharDetails = ({character}) => {
  const { name, species, status } = character;
  console.log(character);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log('name clicked');

    
  // }

  return (
    <Link to={`/chars/${character.id}`} style={{ textDecoration: 'none' }}>
      <CharList>
        <h2>{name}</h2>
        Species: <em>{species}</em>
        <br></br>
        Status: <em>{status}</em>
      </CharList>
    </Link>
  )
}
