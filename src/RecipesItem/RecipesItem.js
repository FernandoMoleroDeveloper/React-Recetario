import "./RecipesItem.css";

const RecipesItem = (props) => {
  return (
    <div onClick={() => props.handleClick(props.id)} className="recipe">
      <img
        className="recipe__img"
        alt={"imagen de " + props.name}
        src={props.imageUrl}
      />
      <div className="recipe__info">
        <p className="recipe__title"><strong>{props.name}</strong></p>
        <p className="recipe__people">Número de personas:{props.numPeople}</p>
      </div>
    </div>
  );
};

export default RecipesItem;
