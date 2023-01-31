import React from "react";



export default function CoctailCard(props) {
    return (
        <div className="coctailCard card my-2 mx-4">
            <img
                className="card-img-top"
                src={props.coctail.imgLink}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{props.coctail.name}</h5>
                {props.coctail.ingredients.map((ingredient, index) => {
                    return (
                      <span key={index} className="card-text" style={{fontSize:"0.85em"}}>{ingredient.name}, </span>
                    );
                })}
            </div>
        </div>
    );
}
