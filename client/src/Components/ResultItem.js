import { useEffect, useState } from "react";

//TODO: destruct the props
function ResultItem(props) {
  // Dummy Code
  const bookTitle = "Test book title";
  const bookSubTitle = "Test book subtitle";
  const bookAuthor = "Test book author ";
  // Dummy Code

  return (
    <div className="container border my-4 py-2">
      <div className="row">
        <h3 className="col-md-6 text-left">{bookTitle}</h3>
        <div className="col-md-6 text-right">
          <button type="button" className="btn btn-primary m-2">
            View
          </button>
          <button type="button" className="btn btn-secondary m-2">
            Save
          </button>
        </div>
      </div>
      <div className="row text-left">
        <small className="col-md-12">{bookSubTitle}</small>
      </div>
      <div className="row text-left">
        <small className="col-md-12">{bookAuthor}</small>
      </div>

      <div className="row py-1">
        <div className="col-md-3">
          <img
            src="https://place-hold.it/150"
            alt="..."
            className="img-thumbnail"
          ></img>
        </div>
        <div className="col-md-9">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
