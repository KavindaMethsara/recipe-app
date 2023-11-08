import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Recipe } from "./models/recipeModel.js";
import recipesRoute from "./routes/recipesRoute.js";
import cors from "cors"

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY

//Option 01: Allow all origns with default of cors(*)
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack");
});

app.use('/recipes', recipesRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listen to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
