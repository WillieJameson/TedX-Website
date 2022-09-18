import React from "react";

export default function Card(props) {
  return (
    <div
      className="column"
    >
      <div class="card">
        <div class="card-image">
          <figure>{props.genne}</figure>
        </div>
        <div class="card-content bg-grey card-height">
          <div class="media">
            <div class="media-content has-text-centered">
              <h2 class="is-size-3 has-text-weight-bold">{props.name}</h2>
            </div>
          </div>
          <div class="content pb-4">
            <p className="has-text-justify">{props.gennetext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
