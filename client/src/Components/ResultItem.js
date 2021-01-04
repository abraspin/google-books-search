import { useEffect, useState } from "react";
import API from "../utils/API";

function ResultItem({ bookInfo }) {
  const bookTitle = bookInfo.title;

  const bookAuthors = bookInfo.authors;
  const bookDescription = bookInfo.description;
  const bookPreviewLink = bookInfo.previewLink;
  let bookThumbnail = "https://place-hold.it/150";
  if (bookInfo.imageLinks) {
    if (bookInfo.imageLinks.thumbnail) {
      bookThumbnail = bookInfo.imageLinks.thumbnail;
    }
  }

  // FIXME: This redirection is weird?
  const handleViewBookPreview = () => {
    // window.location.href = bookPreviewLink;
    window.open(bookPreviewLink, "_blank");
  };

  const handleSaveBook = (e) => {
    console.log(e);
    // API.saveBook("random book");
    console.log("I'M ABOUT TO TRY AND SAVE A BOOK FROM THE BUTTON!");
    API.saveBook({
      title: bookTitle,
      authors: bookAuthors,
      description: bookDescription,
      image: bookThumbnail,
      link: bookPreviewLink,
    });
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
            onClick={() => handleSaveBook()}
            type="button"
            className="btn btn-secondary m-2"
          >
            Save
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

export default ResultItem;
