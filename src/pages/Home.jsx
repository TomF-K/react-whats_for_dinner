import SearchResults from "../components/SearchResults"
import SearchForm from "../components/SearchForm"
import IngredientFilter from "../components/IngredientFilter"

const Home = ({handleSubmit, input, setInput, loading, recipes, setRecipes }) => {
  return (
    <main>
        <SearchForm handleSubmit={handleSubmit} setInput={setInput} input={input} />
        <IngredientFilter recipes={recipes} setRecipes={setRecipes}/>
        <SearchResults input={input} recipes={recipes} loading={loading} setRecipes={setRecipes}/>
    </main>
  )
}
export default Home