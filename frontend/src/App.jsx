import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipes';
import ShowRecipe from './pages/ShowRecipe';
import EditRecipe from './pages/EditRecipes';
import DeleteRecipe from './pages/DeleteRecipes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/recipes/add' element={ <AddRecipe/> } />
      <Route path='/recipes/details/:id' element={ <ShowRecipe/> } />
      <Route path='/recipes/edit/:id' element={ <EditRecipe/> } />
      <Route path='/recipes/delete/:id' element={ <DeleteRecipe/> } />
    </Routes>
  )
}

export default App