import React from 'react';
import "./MyEvents.css"

const MyEvent = ({event}) => {
  return (
    <div className="event-card">
        <div className="image-container"
            style={{
                backgroundImage: 
                    'url(https://images.pexels.com/photos/6489667/pexels-photo-6489667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
            }}>
        </div>
        <div className="event-details">
            <p>Event Title</p>
            <h5>{event.title}</h5>
            <p>Event Description</p>
            <h5>{event.description}</h5>
        </div>
        <div className="event-actions">
            <button>View Details</button>
        </div>
    </div>
  )
}

export default MyEvent