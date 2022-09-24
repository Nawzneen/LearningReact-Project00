import React from "react";

export default function Journal(props) {
  return (
    <div className="journalItems">
      <h1>My Daily Journal</h1>
      <div className="anything">
        <img src={props.imageUrl} width="300px" />
        <div className="details">
          <div>
            <p className="">{props.location}</p>
            <span className="locationUrl">
              <a href={props.googleMapsUrl}>View on google map</a>
            </span>
            <h2 className="title">{props.title}</h2>
            <p>
              {props.startDate}-{props.endDate}
            </p>
            <p className="description">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
