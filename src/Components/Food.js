import React, { useState, useEffect } from "react";
import axios from "axios";
import Recepie from "./Recepie";
function Food() {
  const [recepies, setrecepies] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("");
  const [error, seterror] = useState("");

  useEffect(() => {
    fetchrecepies();
  }, [query]);
  const fetchrecepies = () => {
    const APP_ID = "83a724d9";
    const APP_KEY = "b145bc41f5f34760b1d106be27c8b7b7";
    const FoodURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
    axios
      .get(FoodURL)
      .then(response => {
        console.log(response.data.hits);
        return setrecepies(response.data.hits);
      })
      .catch(error => {
        return seterror(error);
      });
  };
  const ChangeHandler = e => {
    setsearch(e.target.value);
  };
  const Searchdata = e => {
    e.preventDefault();
    setquery(search);
    console.log(query);
    console.log(search);
  };
  return (
    <div id="cont">
      <form onSubmit={Searchdata}>
        <input type="text" value={search} onChange={ChangeHandler} />
        <button type="submit">Search</button>
      </form>
      <div id="recipecontiner">
        {error}
        {recepies.map(recepie => (
          <Recepie
            image={recepie.recipe.image}
            source={recepie.recipe.source}
            dietLabels={recepie.recipe.dietLabels}
            ingredients={recepie.recipe.ingredients}
            key={recepie.recipe.uri}
            label={recepie.recipe.label}
          >
            {recepie.recipe.label}
          </Recepie>
        ))}
      </div>
    </div>
  );
}

export default Food;
