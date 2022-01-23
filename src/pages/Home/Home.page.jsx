import React from 'react';
import SpaceData from '../../components/SpaceData';
import { Container, Section } from '../../GlobalStyles';

const Home = () => {
  return (
    <Container>
      <Section>
        <h1>Welcome to Nasa Photo of the Day! </h1>
        <SpaceData />
      </Section>
    </Container>
  );
};

export default Home;
