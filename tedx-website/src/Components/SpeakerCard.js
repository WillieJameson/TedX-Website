import React from "react";

export default function Card(props) {
  return (
    <div className="column">
      <div className="">
        <div className="">
          <figure className="">
            {props.genne}
          </figure>
        </div>
        <div className="card-content bg-grey card-height">
          <div className="media">
            <div className="media-content has-text-centered">
              <h2 className="is-size-3 has-text-weight-bold">{props.name}</h2>
            </div>
          </div>
          <div className="content pb-4 xl:mt-6">
            <p className="has-text-justify">{props.gennetext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
