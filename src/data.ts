import BREAKFAST_THUMB from "./assets/category-thumbnails/breakfast-thumbnail.png";
import DESSERT_THUMB from "./assets/category-thumbnails/dessert-thumbnail.png"
import BEEF_THUMB from "./assets/category-thumbnails/beef-thumbnail.png"
import PORK_THUMB from "./assets/category-thumbnails/pork-thumbnail.png"
import SEAFOOD_THUMB from "./assets/category-thumbnails/seafood-thumbnail.png"
import VEGAN_THUMB from "./assets/category-thumbnails/vegan-thumbnail.png"
import VEGETARIAN_THUMB from "./assets/category-thumbnails/vegetarian-thumbnail.png"
import STARTER_THUMB from "./assets/category-thumbnails/starterdish-thumbnail.png"
import SIDEDISH_THUMB from "./assets/category-thumbnails/sidedish-thumbnail.png"
import PASTA_THUMB from "./assets/category-thumbnails/pasta-thumbnail.png"
import LAMB_THUMB from "./assets/category-thumbnails/lamb-thumbnail.png"
import GOAT_THUMB from "./assets/category-thumbnails/goat-thumbnail.png"

export type SelectedMeal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strArea: string;
    strCategory: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    strInstructions: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strMeasure16: string;
    strMeasure17: string;
    strMeasure18: string;
    strMeasure19: string;
    strMeasure20: string;
    strSource: string;
    strTags: string;
    strYoutube: string;
  };

  export type Category = {
    name: string,
    image: string,
    query: string
}

// Variables
export const Categories: Category[] = [
    {
        name: "Breakfast",
        image: BREAKFAST_THUMB,
        query: "Breakfast"
    },
    {
        name: "Dessert",
        image: DESSERT_THUMB,
        query: "Dessert"
    },
    {
        name: "Beef",
        image: BEEF_THUMB,
        query: "Beef"
    },
    {
        name: "Pork",
        image: PORK_THUMB,
        query: "Pork"
    },
    {
        name: "Seafood",
        image: SEAFOOD_THUMB,
        query: "Seafood"
    },
    {
        name: "Vegan",
        image: VEGAN_THUMB,
        query: "Vegan"
    },
    {
        name: "Vegeratian",
        image: VEGETARIAN_THUMB,
        query: "Vegetarian"
    },
    {
        name: "Pasta",
        image: PASTA_THUMB,
        query: "Pasta"
    },
    {
        name: "Starter Dish",
        image: STARTER_THUMB,
        query: "Starter"
    },
    {
        name: "Side Dish",
        image: SIDEDISH_THUMB,
        query: "Side"
    },
    {
        name: "Goat",
        image: GOAT_THUMB,
        query: "Goat"
    },
    {
        name: "Lamb",
        image: LAMB_THUMB,
        query: "Lamb"
    },
];