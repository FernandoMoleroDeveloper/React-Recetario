import "./NewRecipe.css"
import React from "react";

const NewRecipe = (props) => {


    const nameRef = React.useRef();
    const peopleRef = React.useRef();
    const imgRef = React.useRef();
   

    const controlSubmit = (event) =>{
        const newRecipe = {
            name:nameRef.current.value,
            numPeople:peopleRef.current.value,
            imageUrl:imgRef.current.value,
            ingredients:[]
        }
        event.preventDefault();
        props.addRecipe(newRecipe);
    }


    return(
        <div className="new-recipe">
            <form onSubmit={(event) => controlSubmit(event)}>
                <label className="new-recipe__label">
                    <p>Introduce el nombre:</p>
                    <input  className="new-recipe__input" ref={nameRef} type="text" name="name" id="name"></input>
                </label>
                    <label>
                    <p>Introduce el número de personas:</p>
                    <input className="new-recipe__input" ref={peopleRef} type="text" name="people" id="people" ></input>
                </label>
            
                <label>
                    <p>Introduce la url de la imagen:</p>
                    <input className="new-recipe__input" ref={imgRef} type="text" name="img" id="img"></input>
                </label>
                <p><button className="new-recipe__btn" type="submit">Añadir receta</button></p>
            </form>
            
        </div>
    )
}

export default NewRecipe;