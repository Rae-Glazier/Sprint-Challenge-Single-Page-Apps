import React from "react";


export default function CharacterCard( props ) {
  console.log(props, 'card')
  return (
    
      <div className='char-card'>
        <h2>{props.name}</h2>
        <p>Species: {props.species}</p>
        <p>Status: {props.status}</p>
      </div>
    )
}
