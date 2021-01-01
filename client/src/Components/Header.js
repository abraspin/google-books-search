import { useEffect, useState } from "react";

function Header() {
  const [pageSelected, setPageSelected] = useState("");

  return (
    <div className="container">
      <div className="jumbotron py-1 my-2">
        <h1 className="text-center display-4">Google Books Search</h1>
        <h5 className="text-center lead">
          Search for and Save Books of Interest!
        </h5>
        <hr className="my-4"></hr>
        <div className="row">
          <p className="text-right">Built on ReactJS</p>
          {/* TODO: Add a link to react */}
        </div>
      </div>
    </div>
  );
}

export default Header;
