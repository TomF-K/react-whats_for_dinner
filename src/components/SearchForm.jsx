const SearchForm = ({handleSubmit, setInput, input}) => {
  return (
    <section className="form__wrapper">
        <h2>What do you want to eat?</h2>
    <form onSubmit={handleSubmit}>
          <label htmlFor="mealName" className="visually-hidden">Search for recipes:</label>
          <input id="mealName" name="mealName" type="text" placeholder="Search recipes" value={input} onChange={(e)=>setInput(e.target.value)} />
          <button type="submit" className="search__btn-orange">Search</button>
        </form>
    </section>
  )
}
export default SearchForm

