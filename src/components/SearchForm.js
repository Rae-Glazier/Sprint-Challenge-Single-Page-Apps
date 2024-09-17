import React, { useState, useEffect } from "react";
// import {CharDetails} from './CharacterList';

export default function SearchForm(props) {
 
      const [search, setSearch] = useState("");

      const [searchResults, setSearchResults] = useState([]);

      const [chars, setChars] = useState([]);

     

      useEffect(() => {
        
        const results = chars.filter(character =>
          
          character.name.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResults(results);
      }, [search]);
      
      const handleChange = e => {
        setSearch(e.target.value)
        props.handleSearch(e.target.value)
      };

      
      
      return (
        <div className="App">

          <form>
            <label htmlFor="name">Search:</label>
            <input
              id="name"
              type="text"
              name="textfield"
              placeholder="Search"
              onChange={handleChange}
              value={search}
            />
          </form>

          <div className="character-list">
            {searchResults.map(props => {
              return (
                <div>
                  <h2>{props.name}</h2>
                  <p>Species: {props.species}</p>
                  <p>Status: {props.status}</p>
                </div>
              )
              // <li key={character}>{character}</li>
            })}
          </div>

        </div>
      );
    
}
