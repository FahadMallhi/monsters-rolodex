import React from "react";

import '../cards component/Cardstyle.css';


function Card({item}) {
    return (
        <div className="card-container">
            <img alt='robat' src={`https://robohash.org/${item.id}`} />
            <h4>{item.name}</h4>
            <h6>{item.email}</h6>
        </div>
    )
}
export default Card