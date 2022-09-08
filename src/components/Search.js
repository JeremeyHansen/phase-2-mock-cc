import React from "react";

function Search({searchTerm, onChangeSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleChange(e){
    onChangeSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
