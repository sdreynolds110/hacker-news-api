import React from "react";
import moment from "moment";

function Result(props) {
  return (
    <>
      <hr />
      <h3>{props.title || props.storyTitle}</h3>
      <p>{props.author}</p>
      <p>
        <i>{moment(props.created).format("MM-DD-YYYY")}</i>
      </p>
      <p>
        <a
          href={props.url || props.storyURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {(props.url || props.storyURL) && <span>View story</span>}
        </a>
      </p>
    </>
  );
}

export default Result;
