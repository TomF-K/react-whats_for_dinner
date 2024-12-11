import { Link } from "react-router-dom"
const SingleRecipe = ({ idMeal, strMeal, strArea, strCategory, strMealThumb }) => {
    
  return (
    <article className='recipe-card'>
        <div className="img-container">
        <Link to={`/recipe/${idMeal}`}>
            <img className="recipe-img" src={strMealThumb} alt={strMeal} />
          </Link>
        </div>
        <div className="recipe-info">
            <h3>{strMeal}</h3>
            <p className="recipe-info__location">{strArea}</p>
            <p className="recipe-info__category">{strCategory}</p>
        </div>
        <div className="btn-container"><button className="btn-orange"><Link to={`/recipe/${idMeal}`}>more info</Link></button></div>
    </article>
  )
}
export default SingleRecipe