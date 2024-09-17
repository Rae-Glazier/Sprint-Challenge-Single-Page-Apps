import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;

export default function Header() {
  return (
    <Title>
      <Link to={`/`} style={{ textDecoration: 'none' }}>Rick & Morty Fan Page</Link>
    </Title>
  );
}
