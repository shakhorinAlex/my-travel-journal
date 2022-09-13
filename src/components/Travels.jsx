import React from 'react'
import '../css/Travels.css'

export default function Travels(props) {
  return (
    <div className="card">
      <img src={`./images/${props.imageUrl}`} alt="Images" className="card-img" /> 
      <div className="card-content"> 
        <div className="location-wrapper"> 
          <p className="country">{props.location}</p>
          <a className="maps" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-dates">{props.startDate} - {props.endDate}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  )
}