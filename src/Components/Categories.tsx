import { Grid, GridItem, Container, Box, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BREAKFAST_THUMB from "../assets/category-thumbnails/breakfast-thumbnail.png";
import DESSERT_THUMB from "../assets/category-thumbnails/dessert-thumbnail.png"
import BEEF_THUMB from "../assets/category-thumbnails/beef-thumbnail.png"
import PORK_THUMB from "../assets/category-thumbnails/pork-thumbnail.png"
import SEAFOOD_THUMB from "../assets/category-thumbnails/seafood-thumbnail.png"
import VEGAN_THUMB from "../assets/category-thumbnails/vegan-thumbnail.png"
import VEGETARIAN_THUMB from "../assets/category-thumbnails/vegetarian-thumbnail.png"
import STARTER_THUMB from "../assets/category-thumbnails/starterdish-thumbnail.png"
import SIDEDISH_THUMB from "../assets/category-thumbnails/sidedish-thumbnail.png"
import PASTA_THUMB from "../assets/category-thumbnails/pasta-thumbnail.png"
import LAMB_THUMB from "../assets/category-thumbnails/lamb-thumbnail.png"
import GOAT_THUMB from "../assets/category-thumbnails/goat-thumbnail.png"

const Categories = () => {
    // Types
    type Category = {
        name: string,
        image: string,
        query: string
    }

    // Variables
    const categories: Category[] = [
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

    const navigate = useNavigate();

    // Context

    // Functions
    const searchCategory = async (item: Category) => {
        navigate(`/search/category/${item.query}`);
    }

    return (
        <>
        <Heading mt={{ base: "2rem", lg: "1rem", }} textAlign="center" fontFamily="Fasthand">Select a Category</Heading>
        <Container maxW="90%">
            <Grid mt="1rem" mb="3rem" templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap="2rem" >
                {categories.map((item, index) => (
                    <GridItem onClick={() => searchCategory(item)} key={index} bg="#AD192A" borderRadius="20px">
                    <Box bg="black" borderRadius="20px"> { /* Overlay for dark thumbnail */}
                    <Image _hover={{ transform: "scale(.9)" }} transition="0.4s" cursor="pointer" objectFit="cover" h={["200px", "200px", "200px", "470px"]} w="100%" opacity="0.7" src={item.image} borderRadius="20px" />
                    </Box>
                    <Heading py=".5rem" color="white" textAlign="center">{item.name}</Heading>
                </GridItem>
                ))}
            </Grid>
        </Container>
        </>
    )
}

export default Categories