import React from 'react';
import './EventDetails.css';
import uuidv4 from 'uuid/v4';
import { withRouter } from 'react-router';

const EventDetails = ({ event, handleAddToFavorites, handleRemoveFromFavorites, isFavorite, history }) => {
  const AddToFavoritesBtn = (
    <button
      className="event-details-button"
      onClick={() => {
        handleAddToFavorites(event);
      }}
    >
      Add to favorites
    </button>
  );

  const RemoveFromFavoritesBtn = (
    <button
      className="event-details-button"
      onClick={() => {
        handleRemoveFromFavorites(event.id);
      }}
    >
      Remove from favorites
    </button>
  );

  const BackHome = (
    <button
      className="event-details-button"
      onClick={() => {
        history.push({
          pathname: `/`
        });
      }}
    >
      Back to Home
    </button>
  );

  return (
    <div className="event-details">
      <h1>Event Details:</h1>
      <h2>Venue:</h2>
      <ul>
        <li>Name: {event.venue.name}</li>
        <li>Country: {event.venue.country}</li>
        <li>Region: {event.venue.region}</li>
        <li>City: {event.venue.city}</li>
      </ul>

      <h2>Offers:</h2>
      {event.offers.map(offer => (
        <ul key={uuidv4()}>
          <li>Type: {offer.type}</li>
          <li>Url: {offer.url}</li>
          <li>Status: {offer.status}</li>
        </ul>
      ))}

      {isFavorite ? RemoveFromFavoritesBtn : AddToFavoritesBtn}
      {BackHome}
    </div>
  );
};

export default withRouter(EventDetails);
