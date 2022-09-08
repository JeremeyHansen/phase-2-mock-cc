import React, {useState} from "react";



function ListingCard({listing, handleDelete}) {

  const [ toggle, setToggle ] = useState(true)
  const  handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <li className="card" id={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details" onClick={handleClick}>
        {toggle ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
