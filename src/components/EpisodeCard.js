import React from "react";


export default function EpisodeCard({ name, air_date, episode }) {
  return (
    <div className='EpisodeCard'>
        <h2>{name}</h2>
        <h2>{air_date}</h2>
        <h2>{episode}</h2>
      </div>
  )
}