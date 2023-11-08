import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const EditRecipes = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/recipes/${id}`)
      .then((response) => {
        setName(response.data.name);
        setIngredients(response.data.ingredients);
        setDescription(response.data.description);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        BsAlignStart("An error happend. Please check console");
        console.log(error);
      });
  }, [])
  const handleEditRecipe = () => {
    const data = {
      name,
      ingredients,
      description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/recipes/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        BsAlignStart("An error happend. Please check console");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Recipe</h1>
      {loading ? <spinner /> : ""}
      <div className="flex flex-col border-2  border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Ingredients</label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditRecipe}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditRecipes;
