import React from 'react';
import './EventList.css'
import { withRouter } from 'react-router';

const Event = ({ id, name, history }) => {
  return (
    <div
    className="event"
      onClick={() =>
        history.push({
          pathname: `/event/${id}`
        })
      }
    >{`Event: ${name}`}</div>
  );
};

export default withRouter(Event);
