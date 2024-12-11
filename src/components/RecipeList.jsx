import Loading from "./Loading";
import SingleRecipe from "./SingleRecipe";

const RecipeList = ({recipes, loading}) => {
    if (loading) {
        return <Loading/>
      }
    if (recipes === null || recipes.meals === undefined || recipes.meals === null) {
        return (
          <h3>no meals matched your search criteria</h3>
        )
      }
  return (
    <section className="recipe-grid__wrapper">
    {recipes.meals.map((item)=>{
           return (
             <SingleRecipe key={item.idMeal} {...item} />
           )
    })}
    </section>
  )
}
export default RecipeList