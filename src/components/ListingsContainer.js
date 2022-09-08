import React from "react";
import ListingCard from "./ListingCard"
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
