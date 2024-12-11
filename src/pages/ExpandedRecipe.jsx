import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url ='https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const youtubeEmbed = 'https://www.youtube.com/embed/';

const ExpandedRecipe = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        setLoading(true);
    const fetchMeal = async () => {
        try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if(data.meals) {
            const { strMeal, strMealThumb, strCategory, strArea, strYoutube, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6,strIngredient7, strIngredient8,strIngredient9,strIngredient10, strMeasure1, strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10 } = data.meals[0];
            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6,strIngredient7, strIngredient8,strIngredient9,strIngredient10];
            const measures = [strMeasure1, strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10];
            const recipeInfo = {strMeal, strMealThumb, strCategory, strArea, strYoutube, strInstructions, ingredients, measures};
            setMeal(recipeInfo);
        } else {
            setMeal(null);
        }
        setMeal(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
        fetchMeal();
    },[id])

    if(loading){
        return <Loading />
    }
    if(!meal || meal.meals === null || meal.meals === undefined ) {
        <h2>unable to fetch recipe info</h2>
    } else {
        const {strMeal, strMealThumb, strCategory, strArea, strYoutube, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6,strIngredient7, strIngredient8,strIngredient9,strIngredient10, strMeasure1, strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10} = meal.meals[0];
        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6,strIngredient7, strIngredient8,strIngredient9,strIngredient10];
        const measures = [strMeasure1, strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10];

        const method = strInstructions.split('\r\n');

        function createObject(keys, values) {
            const obj = Object.fromEntries(
                keys.map((key,index)=>[
                    key, values[index]
                ]),
            );
            return obj;
        }        
        const quantities = createObject(ingredients,measures)

        return (
            <section>
                <article className="expanded-recipe__card">
                    <h2>{strMeal}</h2>
                    <div className="expanded-recipe__img-container">
                    <img className="expanded-recipe__img" src={strMealThumb} alt={strMeal} />
                    </div>
                    
                    <div className="expanded-recipe__info">
                        <div className="cuisine-category__wrapper">
                            <p><span className="expanded-recipe__info-category">Category</span>{strCategory}</p>
                            <p><span className="expanded-recipe__info-cuisine">Cuisine </span>{strArea}</p>
                        </div>
                        <div className="expanded-recipe__ingredients-grid-wrapper">
                            <div className="expanded-recipe__ingredients">
                                <h4 className="ingredients__title">Ingredients</h4>
                                <ul>
                                    {ingredients.map((item, index) => {
                                        return (
                                            <li className="ingredient" key={index}>{item}</li>
                                            
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="expanded-recipe__measures">
                                <h4 className="ingredients__title">Measures</h4>
                                <ul>
                                    {measures.map((measure, index) => {
                                        return (
                                            <li className="ingredient" key={index}>{measure}</li>
                                            
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                                    <h3>Cooking Instructions:</h3>
                                    <ul className="method__wrapper">{method.map((step,index)=>{
                                        return (
                                            <li className="method" key={index}>{step}</li>
                                        )
                                    })}</ul>
                    </div>
                    <div className="expanded-recipe__video-container">
                        <iframe width="560" height="315" src={`${youtubeEmbed}${strYoutube.slice(-11)}`}></iframe>
                    </div>
                    <button><Link to="/react-whats_for_dinner">back home</Link></button>
                </article>
    </section>
  )
}
}
export default ExpandedRecipe