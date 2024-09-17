import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LocList = styled.section`

  margin: 2%;
  padding: 2%;
  color: white;
  border: 2px dotted yellow;
  text-align: center;
  background: green;`


export default function LocationsList() {
    const [location, setLocation] = useState([]);
  useEffect(()=>{
    const getLocation = () => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(resp => {
          console.log(resp.data.results);
          setLocation(resp.data.results)
        })
        .catch(err=>{
          console.log('location card', err)
        })
    }
    getLocation();
  }, [])
  return (
    <section className='LocationCard'>
      <h2>Locations</h2>
      {location.map(loc => {
          return (
              <LocationDetails key={loc.id} location={loc} />
          )
      })}
    </section>
  );
}

const LocationDetails = ({location}) => {
    const {name, type, dimension, residents} = location;
    console.log(location);

    return(
        <Link to={`/location/`} style={{ textDecoration: 'none' }}>
            <LocList>
                <h1>Name: {name}</h1>
                <h4>Type: {type}</h4>
                <h4>Dimension: {dimension}</h4>
                {/* <h4>Residents: {residents}</h4> */}
            </LocList>
        </Link>
    )
}

