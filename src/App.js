import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import Character from './components/Character';
import LocationList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.section`
  padding: 4em;
  margin: 5%;
  background: papayawhip;
`  

export default function App() {

  const [card, setCard] = useState( [] );

  const newCard = cards => {
    setCard( [...card, cards] );
  };

  return (
    <Main>
      {/* <Header /> */}
      {/* <WelcomePage />
      <CharacterList /> */}
      <Header/>
      
      <Route exact path='/'><WelcomePage/></Route>
      <Route exact path='/chars/'><CharacterList/></Route>
      <Route path='/chars/:id'><Character/></Route>

      {/* STRETCH */}
      <Route path='/location/'><LocationList/></Route>
      <Route path='/episode/'><EpisodeList/></Route>
      
      
      
    </Main>
  );
}
