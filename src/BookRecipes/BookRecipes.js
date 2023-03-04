import "./BookRecipes.css"
import { API_URL } from "../constants";
import React from "react";
import RecipesItem from "../RecipesItem/RecipesItem";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import NewRecipe from "../NewRecipe/NewRecipe";

const BookRecipes = () => {
    
    const [recipeList, setRecipeList] = React.useState([]);
    const [recipeDetail, setRecipeDetail] = React.useState();

    React.useEffect(() => {

    getAllRecipesFromApi();
    }, []);
    
    const getAllRecipesFromApi = () => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setRecipeList(data));
        
    };

    const getDetail = (recipeId) => {
        fetch(`${API_URL}/${recipeId}`)
        .then((response) => response.json())
        .then((data) => {setRecipeDetail(data)
            console.log(data)});      
    };
    
    const addRecipe = (newRecipe) => {
        fetch(API_URL, {
            method: 'POST', 
            body: JSON.stringify(newRecipe), 
            headers:{'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then((data) => getAllRecipesFromApi())
    }

    const addIngredients = (recipe) => {
        fetch(`${API_URL}/${recipe.id}`,{
            method: 'PUT', 
            body: JSON.stringify(recipe), 
            headers:{'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then((data) => getDetail(recipe.id))
    }

    const deleteIngredient = React.useCallback((recipe) => {
        fetch(`${API_URL}/${recipe.ingredients}`, {
        method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => getDetail(recipe.ingredients));
        }, []);

    return(
        <div className="container">
            <div className="container__newrecipe">
                <h2>Añadir una nueva receta:</h2>
                <NewRecipe addRecipe={addRecipe}></NewRecipe>
            </div>
            <div className="container__recipes">
                <h2>Listado de recetas:</h2>
                {recipeList.map((recipe) => (
                    <RecipesItem
                    id={recipe.id}
                    key={recipe.id}
                    recipe={recipe}
                    imageUrl={recipe.imageUrl}
                    name={recipe.name}
                    numPeople={recipe.numPeople}
                    handleClick={getDetail}
                    ></RecipesItem>
                ))}
            </div>
            <div className="container__recipes-detail">
                <h2>Receta seleccionada</h2>
                {recipeDetail && <RecipeDetail 
                recipe={recipeDetail} 
                handleClick={addIngredients}
                deleteItem={deleteIngredient}
                ></RecipeDetail>}
            </div>
            
        </div>
    )
}

export default BookRecipes;