import { Heading, Box, Grid, Image, GridItem, Flex, Button, Container, useDisclosure, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Component Imports
import ChakraModal from "./ChakraModal";

export type SelectedMeal = {
    idMeal: string,
    strMeal: string,
    strMealThumb: string,
    strArea: string,
    strCategory: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strInstructions: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17: string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
    strSource: string,
    strTags: string,
    strYoutube: string
}

const SearchResults = () => {
    // Types
    type Meal = {
        idMeal: string,
        strMeal: string,
        strMealThumb: string,
    }

    // State
    const [meals, setmeals] = useState<[]>();
    const [modalContent, setModalContent] = useState<SelectedMeal | undefined>();

    // Variables
    const { type, query } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Context

    // Effects
    // Searching for dishes
    useEffect(() => {
        if (type === "category") {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
                .then(res => res.json())
                .then(data => {
                    setmeals(data.meals);
                })
                .catch(err => console.log(err));
        } else if (type === "region") {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`)
                .then(res => res.json())
                .then(res => setmeals(res.meals))
                .catch(err => console.log(err))
        } else if (type === "userinput"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
                .then(res => res.json())
                .then(res => setmeals(res.meals))
                .catch(err => console.log(err))
        }
    }, []);

    // Context

    // Functions
    async function searchDish(meal: Meal) {
        try {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`).then(res => res.json()).then(res => {
                setModalContent(res.meals[0]);
            }).then(() => {
                // setShowModal(true);
                onOpen();
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <ChakraModal selectedMeal={modalContent} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <Box>
            <Heading mt="1rem" textAlign="center" fontFamily="Fasthand">Results for {query}</Heading>

            <Container maxW="90%">
            { meals !== null ? <Grid gap="2rem" mt="2rem" templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}}>
                {meals?.map((meal: Meal, index) => (
                    <GridItem h={{ base: "300px", lg: "500px"}} maxH="600px" key={index} w="100%" borderRadius="20px 20px 0 0" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                    <Flex h="100%" flexDir="column" justifyContent="space-between">
                    <Image h={{base: "200px", lg: "300px"}} objectFit="cover" src={meal.strMealThumb} borderRadius="20px" />
                    <Heading fontSize={{base: "1rem", lg:"2rem"}} textAlign="center" mb="1rem">{meal.strMeal}</Heading>

                    <Button onClick={() => searchDish(meal)} fontSize={{ base: "12px", lg: "16px" }} h={{ base: "25px", lg: "50px" }} bg="#DD3766" color="white" borderRadius="0px" display="flex" w="100%" justifySelf="flex-end">View</Button>
                    </Flex>
                </GridItem>
                ))}
            </Grid> : <Text mt="2rem">No results found for {query}, try searching for a dish name or specific ingredient.</Text>}
            </Container>
        </Box>
        </>
    )
}

export default SearchResults