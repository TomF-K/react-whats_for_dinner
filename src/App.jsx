import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from './pages/Error';
import About from "./pages/About";
import Login from "./pages/Login";
import ExpandedRecipe from "./pages/ExpandedRecipe";

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';


function App() {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input) {
      setInput(input);
      fetchData();
    } else {
      console.log('no input detected');
    }
  }

  useEffect(() => {
    fetchData();
  },[input]);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${input.toLowerCase().split(" ").join("+")}`);
      const data = await response.json();
      setRecipes(data);
     if(!recipes) {
      setRecipes([]);
     }
    } catch (error) {
      console.log(error);
    }
   setLoading(false);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/react-whats_for_dinner" element={<Home handleSubmit={handleSubmit} setInput={setInput} input={input} recipes={recipes} loading={loading} setRecipes={setRecipes}/>}/>
        <Route path="about" element={<About />}/>
        <Route path="login" element={<Login />}/>
        <Route path="recipe/:id" element={<ExpandedRecipe />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App
