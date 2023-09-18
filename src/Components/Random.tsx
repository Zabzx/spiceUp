import { useEffect, useState } from "react";
import { Box, Flex, Image, Heading, Button, Spinner, useDisclosure, useToast } from "@chakra-ui/react"
import { SelectedMeal } from "../data";
import ChakraModal from "./ChakraModal";
import lozad from "lozad";
import Blur from "../assets/category-thumbnails/blur.jpg"

const Random = () => {
    // Variables
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    // State
    const [meal, setMeal] = useState<SelectedMeal>();
    const [loading, setLoading] = useState(true);
    const [imageLoad, setimageLoad] = useState(false);

    // Effects
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(res => {
                setMeal(res.meals[0]);
                setLoading(false);
            }).catch(err => {
                toast({
                    title: "Error",
                    description: err.message,
                    status: "error",
                    isClosable: true,
                });
                setLoading(true);
            });
    }, []);

    useEffect(() => {
        const observer = lozad(".lozad", {
            loaded: function() {
                setimageLoad(true);
            },
        });
        observer.observe();
    }, [meal]);

    // Functions
    async function nextDish() {
        setLoading(true);
        try {
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
                .then(res => res.json())
                .then(res => {
                    setMeal(res.meals[0]);
                    setLoading(false);
                })
                .catch(err => {
                    toast({
                        title: "Error",
                        description: err.message,
                        status: "error",
                        isClosable: true,
                    });
                    setLoading(true);
                });
        } catch (error) {
            if (typeof error === "string") {
                toast({
                    title: "Error",
                    description: error,
                    status: "error",
                    isClosable: true,
                });
                setLoading(true);
            } else if (error instanceof Error) {
                toast({
                    title: "Error",
                    description: error.message,
                    status: "error",
                    isClosable: true,
                });
                setLoading(true);
            }
        }
    }

    return (
        <>
        <ChakraModal selectedMeal={meal} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        
        <Box mt="5rem">
        <Flex w="100%" justifyContent={{ base: "center", lg: "space-around" }} align="center" flexDir="column" gap="2rem">
        { !loading ? <Box h={{ base: "300px", lg: "500px"}} maxH="600px" w={{ base: "90%", lg: "30%" }} borderRadius="20px 20px 0 0" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                    <Flex h="100%" flexDir="column" justifyContent="space-between">
                    <Image className="lozad" h={{base: "200px", lg: "300px"}} objectFit="cover" src={ imageLoad ? meal?.strMealThumb : Blur} borderRadius="20px" />
                    <Heading fontSize={{base: "1rem", lg:"2rem"}} textAlign="center" mb="1rem">{meal?.strMeal}</Heading>

                    <Button onClick={() => onOpen()} fontSize={{ base: "12px", lg: "16px" }} h={{ base: "25px", lg: "50px" }} bg="#AD192A" color="#FCFFAF" borderRadius="0px" display="flex" w="100%" justifySelf="flex-end">View</Button>
                    </Flex>
                </Box> : <Spinner /> }
                <Button onClick={() => nextDish()} bg="#AD192A" color="#FCFFAF">Next Dish</Button>
                </Flex>
        </Box>
        </>
    )
}

export default Random