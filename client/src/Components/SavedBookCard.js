import { useEffect, useState } from "react";
import API from "../utils/API";

function SavedBookCard({ savedBook }) {
  const bookID = savedBook._id;

  const bookTitle = savedBook.title;
  const bookAuthors = savedBook.authors;
  const bookDescription = savedBook.description;
  const bookPreviewLink = savedBook.link;
  let bookThumbnail = "https://place-hold.it/150";
  if (savedBook.image) {
    bookThumbnail = savedBook.image;
  }

  // FIXME: This redirection is weird?
  const handleViewBookPreview = () => {
    // window.location.href = bookPreviewLink;
    window.open(bookPreviewLink, "_blank");
  };

  //TODO: Move this up and then pass it down so it can run at the parent level and re-render the page :thumbs
  const handleDeleteSavedBook = () => {
    API.deleteBook(bookID);
  };

  return (
    <div className="container border my-4 py-2">
      <div className="row">
        <h4 className="col-md-9 text-left pt-3 ">{bookTitle}</h4>
        <div className="col-md-3 text-right">
          <button
            onClick={() => handleViewBookPreview()}
            type="button"
            className="btn btn-primary m-2"
          >
            View
          </button>
          <button
            onClick={() => handleDeleteSavedBook()}
            type="button"
            className="btn btn-secondary m-2"
          >
            Delete
          </button>
        </div>
      </div>
      {/* <div className="row text-left">
        <small className="col-md-12">{bookSubTitle}</small>
      </div> */}
      <div className="row text-left">
        <small className="col-md-12">Author(s): {bookAuthors}</small>
      </div>
      <br></br>
      <div className="row py-1">
        <div className="col-md-3">
          <img src={bookThumbnail} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-9">
          <p>{bookDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default SavedBookCard;
