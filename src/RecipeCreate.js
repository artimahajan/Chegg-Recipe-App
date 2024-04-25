import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialRecipeData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [recipeData, setRecipeData] = useState({...initialRecipeData});

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;

    setRecipeData({
      ...recipeData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ ...recipeData });
    setRecipeData({ ...initialRecipeData });
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" type="text" name="name" placeholder="Name" onChange={handleChange} value={recipeData.name} required/>
            </td>
            <td>
              <input id="cuisine" type="text" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={recipeData.cuisine} required/>
            </td>
            <td>
              <input id="photo" type="url" name="photo" placeholder="URL" onChange={handleChange} value={recipeData.photo} required/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" onChange={handleChange} value={recipeData.ingredients} required/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" placeholder="Preparation" onChange={handleChange} value={recipeData.preparation} required/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
