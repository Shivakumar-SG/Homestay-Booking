import React from 'react';
import './Home.css';
import HomeHTML from './Home.html';

function Home() {
  return (
    <div dangerouslySetInnerHTML={{__html: HomeHTML}} />
  );
}

export default Home;
