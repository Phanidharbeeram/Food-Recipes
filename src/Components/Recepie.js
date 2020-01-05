import React from "react";
import {Card} from 'react-bootstrap'
export default function Recepie({
  source,
  label,
  image,
  dietLabels,
  ingredients
}) {
  return (
    <Card id="recipe">
      <img src={image} alt="recipe image" />
      <label>{label}</label>
      <p>{source}</p>
      <span>{dietLabels}</span>
      <div>
        {ingredients.map((ingredient, index) => (
<li key={index}>{index+1}.{ingredient.text}</li>
        ))}
      </div>
    </Card>
  );
}
