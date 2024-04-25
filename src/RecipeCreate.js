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
    setRecipeData({
      ...recipeData,
      [target.name]: target.value,
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
              <input id="name" type="text" name="name" placeholder="Name" onChange={handleChange} value={initialRecipeData.name}/>
            </td>
            <td>
              <input id="cuisine" type="text" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={initialRecipeData.cuisine}/>
            </td>
            <td>
              <input id="photo" type="url" name="photo" placeholder="URL" onChange={handleChange} value={initialRecipeData.photo}/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" onChange={handleChange} value={initialRecipeData.ingredients} />
            </td>
            <td>
              <textarea id="preparation" name="preparation" placeholder="Preparation" onChange={handleChange} value={initialRecipeData.preparation} />
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
