import {
  Heading,
  Box,
  Grid,
  Image,
  GridItem,
  Flex,
  Button,
  Container,
  useDisclosure,
  Text,
  Skeleton,
  useToast
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import lozad from "lozad";
import Blur from "../assets/category-thumbnails/blur.jpg"
import ChakraModal from "./ChakraModal";
import { SelectedMeal } from "../data";

const SearchResults = () => {
  // Variables
  const toast = useToast();

  // Types
  type Meal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };

  // State
  const [meals, setmeals] = useState<[]>();
  const [modalContent, setModalContent] = useState<SelectedMeal | undefined>();
  const [loaded, setLoaded] = useState(false);

  // Variables
  const { type, query } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Effects
  // Searching for dishes
  useEffect(() => {
    if (type === "category") {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setmeals(data.meals);
        })
        .catch((err) => {
            toast({
                title: "Error",
                description: err.message,
                status: "error",
                isClosable: true,
            });
        });

    } else if (type === "region") {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`)
        .then((res) => res.json())
        .then((res) => setmeals(res.meals))
        .catch((err) => {
            toast({
                title: "Error",
                description: err.message,
                status: "error",
                isClosable: true,
            });
        });

    } else if (type === "userinput") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => res.json())
        .then((res) => setmeals(res.meals))
        .catch((err) => {
            toast({
                title: "Error",
                description: err.message,
                status: "error",
                isClosable: true,
            });
        });
    }
  }, []);

  useEffect(() => {
    const observer = lozad(".lozad", {
      loaded: function () {
        // Replace the blurry placeholder with the high-resolution image
        setLoaded(true);
      },
    });
    observer.observe();
  }, [meals]);

  // Functions
  async function searchDish(meal: Meal) {
    try {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`
      )
        .then((res) => res.json())
        .then((res) => {
          setModalContent(res.meals[0]);
        })
        .then(() => {
          // setShowModal(true);
          onOpen();
        });
    } catch (error) {
        if (typeof error === "string") {
            toast({
                title: "Error",
                description: error,
                status: "error",
                isClosable: true,
            });
        } else if (error instanceof Error) {
            toast({
                title: "Error",
                description: error.message,
                status: "error",
                isClosable: true,
            });
        }
    }
  }

  return (
    <>
      <ChakraModal
        selectedMeal={modalContent}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
      <Box>
        <Heading mt="1rem" textAlign="center" fontFamily="Fasthand">
          Results for {query}
        </Heading>

        {meals !== undefined ? (
          <Container maxW="90%">
            {meals !== null ? (
              <Grid
                gap="2rem"
                mt="2rem"
                templateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
              >
                {meals?.map((meal: Meal, index) => (
                  <GridItem
                    h={{ base: "300px", lg: "500px" }}
                    maxH="600px"
                    key={index}
                    w="100%"
                    borderRadius="20px 20px 0 0"
                    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  >
                    <Flex
                      h="100%"
                      flexDir="column"
                      justifyContent="space-between"
                    >
                      <Image
                        h={{ base: "200px", lg: "300px" }}
                        objectFit="cover"
                        src={loaded ? meal.strMealThumb : Blur}
                        borderRadius="20px"
                        loading="lazy"
                        className="lozad"
                      />
                      <Heading
                        fontSize={{ base: "1rem", lg: "2rem" }}
                        textAlign="center"
                        mb="1rem"
                      >
                        {meal.strMeal}
                      </Heading>

                      <Button
                        onClick={() => searchDish(meal)}
                        fontSize={{ base: "12px", lg: "16px" }}
                        h={{ base: "25px", lg: "50px" }}
                        _hover={{}}
                        bg="#AD192A"
                        color="#FCFFAF"
                        borderRadius="0px"
                        display="flex"
                        w="100%"
                        justifySelf="flex-end"
                      >
                        View
                      </Button>
                    </Flex>
                  </GridItem>
                ))}
              </Grid>
            ) : (
              <Text mt="2rem">
                No results found for {query}, try searching for a dish name or
                specific ingredient.
              </Text>
            )}
          </Container>
        ) : (
          <Container maxW="90%">
            <Flex flexDir="column" gap="1rem" mt="2rem">
              <Skeleton w="60%" h="20px" />
              <Skeleton w="60%" h="20px" />
              <Skeleton w="60%" h="20px" />
              <Skeleton w="60%" h="20px" />
              <Skeleton w="60%" h="20px" />
            </Flex>
          </Container>
        )}
      </Box>
    </>
  );
};

export default SearchResults;
