import NavBar from "../Components/NavBar";

function Search() {
  return (
    <div>
      <div className="container border p-2">
        <form>
          <div className="form-group">
            <label>Book Search</label>
            <input
              type="string"
              className="form-control"
              placeholder="Enter book to search"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Search <i class="fa fa-search fa-sm"></i>
          </button>
        </form>
      </div>
      <br></br>
      {/* TODO: Add a ternary operator for if !results.length "No results to display" or something */}
      <div className="container border">
        <h3>Results</h3>
      </div>
    </div>
  );
}

export default Search;
