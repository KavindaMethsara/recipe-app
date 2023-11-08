import mongoose from "mongoose";

const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Recipe = mongoose.model('Cat', recipeSchema);