import React from "react";
import '../searching component/searchstyle.css';

function Search({searchData}) {

    return (

        <input type="text" placeholder="Search" className="searchstyle"  onChange={(e)=>searchData(e.target.value)} 
        />
    )
}
export default Search