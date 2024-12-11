import SearchResults from "../components/SearchResults"
import SearchForm from "../components/SearchForm"

const Home = ({handleSubmit, input, setInput, loading, recipes, setRecipes }) => {
  return (
    <main>
        <SearchForm handleSubmit={handleSubmit} setInput={setInput} input={input} />
        <SearchResults input={input} recipes={recipes} loading={loading} setRecipes={setRecipes}/>
    </main>
  )
}
export default Home