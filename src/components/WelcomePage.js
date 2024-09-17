import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Welcome = styled.section`
  text-align:center;
`  

export default function WelcomePage() {

  return (
    
      <Welcome>
        <header>
          <h2>Welcome to the ultimate fan site!</h2>
            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick" 
            />
            <Link to={`/chars/`} style={{ textDecoration: 'none' }}>Characters</Link>
            <br></br>
            <Link to={`/location/`} style={{ textDecoration: 'none' }}>Locations</Link>
            <br></br>
            <Link to={`/episode/`} style={{ textDecoration: 'none' }}>Episodes</Link>
        </header>
      </Welcome>
    
  );
}
