import { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Flex,
  Image,
  Heading,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import ChakraModal from "./ChakraModal";
import { SelectedMeal } from "../data";
import lozad from "lozad";
import Blur from "../assets/category-thumbnails/blur.jpg";

const Favorites = () => {
  // Variables
  const { isOpen, onClose, onOpen } = useDisclosure();

  // State
  const [favorites, setFavorites] = useState<SelectedMeal[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<SelectedMeal>();
  const [loaded, setLoaded] = useState(false);

  // Effects
  useEffect(() => {
    if (localStorage.getItem("favorites") !== null) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")!));
    } else {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    const observer = lozad(".lozad", {
      loaded: () => {
        setLoaded(true);
      },
    });
    observer.observe();
  }, [favorites]);

  // Functions
  function searchDish(meal: SelectedMeal) {
    setSelectedMeal(meal);
    onOpen();
  }

  return (
    <>
      <ChakraModal
        selectedMeal={selectedMeal}
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
      />

      <Heading mt="1rem" textAlign="center" fontFamily="Fasthand">
        Favorites
      </Heading>
      <Container maxW="90%">
        { favorites.length !== 0 ? <Grid
          gap="2rem"
          mt="2rem"
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          {favorites?.map((meal, index) => (
            <GridItem
              h={{ base: "300px", lg: "500px" }}
              maxH="600px"
              key={index}
              w="100%"
              borderRadius="20px 20px 0 0"
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            >
              <Flex h="100%" flexDir="column" justifyContent="space-between">
                <Image
                  className="lozad"
                  h={{ base: "200px", lg: "300px" }}
                  objectFit="cover"
                  src={ loaded ? meal.strMealThumb : Blur}
                  borderRadius="20px"
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
                  bg="#AD192A"
                  color="#FCFFAF"
                  borderRadius="0px"
                  display="flex"
                  w="100%"
                  justifySelf="flex-end"
                  _hover={{}}
                >
                  View
                </Button>
              </Flex>
            </GridItem>
          ))}
        </Grid> : "No favorites yet..."}
      </Container>
    </>
  );
};

export default Favorites;
