import React from "react";
import "./RecipeDetail.css"


const RecipeDetail = (props) => {

    const nameRef= React.useRef();
    const quantityRef= React.useRef();
    
    const controlEvent = (event) =>{
        const newRecipe = {
        ...props.recipe,
        ingredients:[
            ...props.recipe.ingredients,{
                name:nameRef.current.value,
                quantity:quantityRef.current.value
            }
        ]
        }  
        
        event.preventDefault();
        props.handleClick(newRecipe);
    }
        
    


    return(
        <div className="detail">
            <img className="detail__img" alt={"imagen de " + props.recipe.name} src={props.recipe.imageUrl}/>
            <p><strong>{props.recipe.name}</strong></p>
            <p>Número de personas:{props.recipe.numPeople}</p>
            <table className="detail__table">
                <thead>
                    <tr>
                        <th>Ingredientes</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.recipe.ingredients.map((ingredient) =>
                    <tr key={ingredient.name}>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.quantity}</td>
                        <td><button onClick={() => props.deleteItem(props.recipe.ingredient)}>ELIMINAR</button></td>
                    </tr>
                        )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <input ref={nameRef}></input>
                        </td>
                        <td>
                            <input ref={quantityRef}></input>
                        </td>
                        <td>
                            <button className="detail__erase-btn" onClick={event => controlEvent(event)}>AÑADIR</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default RecipeDetail;
