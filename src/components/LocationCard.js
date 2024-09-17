import React from "react";


export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div className='LocationCard'>
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{dimension}</p>
        <p>{residents}</p>
      </div>
  )
}
