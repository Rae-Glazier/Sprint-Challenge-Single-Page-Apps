import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EpList = styled.section`

  margin: 2%;
  padding: 2%;
  color: white;
  border: 2px dotted yellow;
  text-align: center;
  background: green;`


export default function EpisodeList() {
    const [episode, setEpisode] = useState([]);
  useEffect(()=>{
    const getEpisode = () => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/')
        .then(resp => {
          console.log('episodes',resp.data.results);
          setEpisode(resp.data.results)
        })
        .catch(err=>{
          console.log('Episode card', err)
        })
    }
    getEpisode();
  }, [])
  return (
    <section className='EpisodeCard'>
      <h2>Episodes</h2>
      {episode.map(ep => {
          return (
              <EpisodeDetails key={ep.id} episode={ep} />
          )
      })}
    </section>
  );
}

const EpisodeDetails = ({episode}) => {
    const {name, air_date} = episode;
    console.log(episode);

    return(
        <Link to={`/episode/`} style={{ textDecoration: 'none' }}>
            <EpList>
            <h2>Name: {name}</h2>
            <h2>Air Date: {air_date}</h2>
            </EpList>
        </Link>
    )
}