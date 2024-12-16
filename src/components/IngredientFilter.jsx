import { useState, useEffect } from "react"

const IngredientFilter = ({ recipes, setRecipes }) => {
    const [ingredientFilter, setIngredientFilter] = useState(true);
    const [value, setValue] = useState('');

    const ingredientUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

    const ingredientBtns = document.querySelectorAll('.ingredient-btn');

        useEffect(()=> {
            ingredientBtns.forEach((button)=> {
                button.addEventListener('click', function () {
                    console.log(button.textContent);
                    setValue(button.textContent);
                }
            )}, [value])
            const fetchIngredientData = async () => {
                const response = await fetch(`${ingredientUrl}${value}`);
                const data = await response.json();
                setRecipes(data);
            }
            fetchIngredientData();
        })

    return (
      <section>
        <div className="ingredient-btn__wrapper">
            <button className="btn-orange" onClick={()=>setIngredientFilter(true)}>Ingredients</button>
        </div>
       {ingredientFilter? <div>
        <button className="ingredient-btn">Chicken</button>
        <button className="ingredient-btn">Lamb</button>
        <button className="ingredient-btn">Beef</button>
        <button className="ingredient-btn">Pork</button>
       </div> : null}
      </section>
    )
  }
export default IngredientFilter