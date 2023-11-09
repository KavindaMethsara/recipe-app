import { React, useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/recipes")
      .then((response) => {
        setRecipes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center"></div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-spacing-2">
          <thead>
            <tr>
              <th className="border p-4">No</th>
              <th className="border p-4">Recipe Name</th>
              <th className="border p-4">Operations</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={recipe._id} className="h-8">
                <td className="border text-center p-4">{index + 1}</td>
                <td className="border text-center p-4">{recipe.name}</td>
                <td className="border text-center p-4">
                  <div className="flex justify-center space-x-4">
                    <Link to={`/recipes/details/${recipe?._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/recipes/edit/${recipe?._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-800" />
                    </Link>
                    <Link to={`/recipes/delete/${recipe?._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
