import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listings, setListings ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, []);

  const listingsToDisplay = listings.filter((listing) => 
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = e => {
    fetch(`http://localhost:6001/listings/${e.target.parentNode.parentNode.id}`, {
      method: 'DELETE'})
    .then(res => res.json())
    .then(setListings(listings.filter(listing => listing.id !== e.target.parentNode.parentNode.id)))
    }

  return (
    <div className="app">
      <Header searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <ListingsContainer listings={listingsToDisplay} handleDelete={handleDelete}/>  
    </div>
  );
}

export default App;
