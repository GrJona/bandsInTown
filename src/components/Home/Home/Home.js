import React from 'react';
import SearchContainer from '../Search/SearchContainer';
import EventListContainer from '../EventList/EventListContainer';
import FavoritesContainer from '../EventList/FavoritesContainer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-events">
        <h1>Who's in Town?</h1>
        <SearchContainer />
        <EventListContainer />
      </div>
      <div className="home-events">
        <h1>Favorites:</h1>
        <FavoritesContainer />
      </div>
    </div>
  );
};

export default Home;
