import { useEffect, useState } from "react";

//TODO: destruct the props
function ResultItem({ bookInfo }) {
  console.log(
    "🚀 ~ file: ResultItem.js ~ line 5 ~ ResultItem ~ bookInfo",
    bookInfo
  );
  // { title, authors, description, imageLinks, previewLink }
  const bookTitle = bookInfo.title;
  console.log(
    "🚀 ~ file: ResultItem.js ~ line 6 ~ ResultItem ~ bookTitle",
    bookTitle
  );
  const bookAuthors = bookInfo.authors;
  const bookDescription = bookInfo.description;
  const bookPreviewLink = bookInfo.previewLink;
  let bookThumbnail = "https://place-hold.it/150";
  if (bookInfo.imageLinks) {
    if (bookInfo.imageLinks.thumbnail) {
      bookThumbnail = bookInfo.imageLinks.thumbnail;
    }
  }
  // FIXME: This is weird
  const goToBookPreview = () => {
    // window.location.href = bookPreviewLink;
    window.open(bookPreviewLink, "_blank");
  };
  return (
    <div className="container border my-4 py-2">
      <div className="row">
        <h4 className="col-md-10 text-left pt-3 ">{bookTitle}</h4>
        <div className="col-md-2 text-right">
          <button
            onClick={() => goToBookPreview()}
            type="button"
            className="btn btn-primary m-2"
          >
            View
          </button>
          <button type="button" className="btn btn-secondary m-2">
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
