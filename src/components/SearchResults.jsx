import RecipeList from "./RecipeList";

const SearchResults = ({ input, recipes, loading, setRecipes }) => {
  return (
    <section className="search-results">
        <h2>Recipes</h2>
        {input === '' ? <></> : 
        <RecipeList recipes={recipes} loading={loading} setRecipes={setRecipes}/>
      }
    </section>
  )
}
export default SearchResults