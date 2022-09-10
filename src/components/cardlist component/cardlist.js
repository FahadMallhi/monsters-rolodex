import React from "react";
import Card from "../cards component/cards";

import '../cardlist component/cardliststyle.css'


export function Cardlist({items}) {
    return (
        <div className="card-list">
            {
                items.length>0?
                    items.map((x,key) => {
                        return (
                            <Card key={key} item={x} />
                        )
                    })
                :<h5 style={{color:"red"}}>No User Found</h5>
            }
        </div>
    )
}
export default Cardlist