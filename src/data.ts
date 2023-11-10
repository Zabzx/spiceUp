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

// Flags
import CANADA from "./assets/region thumbnails/canada.png"
import CHINA from "./assets/region thumbnails/china.png"
import CROATIA from "./assets/region thumbnails/croatia.png"
import EGYPT from "./assets/region thumbnails/egypt.png"
import FRANCE from "./assets/region thumbnails/france.png"
import GREECE from "./assets/region thumbnails/greece.png"
import INDIA from "./assets/region thumbnails/india.png"
import IRELAND from "./assets/region thumbnails/ireland.png"
import ITALY from "./assets/region thumbnails/italy.png"
import JAMAICA from "./assets/region thumbnails/jamaica.png"
import JAPAN from "./assets/region thumbnails/japan.png"
import KENYA from "./assets/region thumbnails/kenya.png"
import MALAYSIA from "./assets/region thumbnails/malaysia.png"
import MEXICO from "./assets/region thumbnails/mexico.png"
import MOROCCO from "./assets/region thumbnails/morocco.png"
import NETHERLANDS from "./assets/region thumbnails/netherlands.png"
import PHILIPPINES from "./assets/region thumbnails/philippines.png"
import POLAND from "./assets/region thumbnails/poland.png"
import PORTUGAL from "./assets/region thumbnails/portugal.png"
import RUSSIA from "./assets/region thumbnails/russia.png"
import SPAIN from "./assets/region thumbnails/spain.png"
import THAILAND from "./assets/region thumbnails/thailand.png"
import TUNISIA from "./assets/region thumbnails/tunisia.png"
import TURKEY from "./assets/region thumbnails/turkey.png"
import UK from "./assets/region thumbnails/uk.png"
import UNITEDSTATES from "./assets/region thumbnails/united-states.png"
import VIETNAM from "./assets/region thumbnails/vietnam.png"

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

export type Region = {
    name: string,
    image: string,
    query: string,
}

export const Regions: Region[] = [
    {
        name: "Canada",
        image: CANADA,
        query: "Canadian"
    },
    {
        name: "China",
        image: CHINA,
        query: "Chinese"
    },
    {
        name: "Croatia",
        image: CROATIA,
        query: "Croatian"
    },
    {
        name: "Egypt",
        image: EGYPT,
        query: "Egyptian"
    },
    {
        name: "France",
        image: FRANCE,
        query: "French"
    },
    {
        name: "Greece",
        image: GREECE,
        query: "Greek"
    },
    {
        name: "India",
        image: INDIA,
        query: "Indian"
    },
    {
        name: "Ireland",
        image: IRELAND,
        query: "Irish"
    },
    {
        name: "Italy",
        image: ITALY,
        query: "Italian"
    },
    {
        name: "Jamaica",
        image: JAMAICA,
        query: "Jamaican"
    },
    {
        name: "Japan",
        image: JAPAN,
        query: "Japanese"
    },
    {
        name: "Kenya",
        image: KENYA,
        query: "Kenyan"
    },
    {
        name: "Malaysia",
        image: MALAYSIA,
        query: "Malaysian"
    },
    {
        name: "Mexico",
        image: MEXICO,
        query: "Mexican"
    },
    {
        name: "Morocco",
        image: MOROCCO,
        query: "Moroccan"
    },
    {
        name: "Netherlands",
        image: NETHERLANDS,
        query: "Dutch"
    },
    {
        name: "Philippines",
        image: PHILIPPINES,
        query: "Filipino"
    },
    {
        name: "Poland",
        image: POLAND,
        query: "Polish"
    },
    {
        name: "Portugal",
        image: PORTUGAL,
        query: "Portuguese"
    },
    {
        name: "Russia",
        image: RUSSIA,
        query: "Russian",
    },
    {
        name: "Spain",
        image: SPAIN,
        query: "Spanish"
    },
    {
        name: "Thailand",
        image: THAILAND,
        query: "Thai"
    },
    {
        name: "Tunisia",
        image: TUNISIA,
        query: "Tunisian"
    },
    {
        name: "Turkey",
        image: TURKEY,
        query: "Turkish"
    },
    {
        name: "UK",
        image: UK,
        query: "British"
    },
    {
        name: "USA",
        image: UNITEDSTATES,
        query: "American"
    },
    {
        name: "Vietnam",
        image: VIETNAM,
        query: "Vietnamese"
    }
];