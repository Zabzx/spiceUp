import { useEffect, useState, Dispatch, SetStateAction } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Text,
  Heading,
  Image,
  Tag,
  List,
  ListItem,
  ListIcon,
  useToast
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart, AiFillYoutube } from "react-icons/ai";
import { SelectedMeal } from "../data";
import { FaCircleNotch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

type Props = {
  selectedMeal: SelectedMeal | undefined;
  alreadyFavorite: boolean;
  setAlreadyFavorite: Dispatch<SetStateAction<boolean>>
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const ChakraModal = (props: Props) => {
  // Variables
  const toast = useToast();
  const location = useLocation();

  // State
  const [tags, setTags] = useState<string[]>();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [measurements, setMeasurements] = useState<string[]>([]);

  // Effects
  useEffect(() => {
    // Clears ingredients and measurements when selecting a new dish
    setIngredients([]);
    setMeasurements([]);
  }, [props.selectedMeal]);

  // Update ingredients and measurements on new render
  useEffect(() => {
    getIngredientsAndMeasurements();
  }, [props.selectedMeal]);

  // Update tags on new render
  useEffect(() => {
    let tags = props.selectedMeal?.strTags;

    let tagArray = tags?.split(",");
    setTags(tagArray);
  }, [props.selectedMeal]);

  function setFavorite(meal: SelectedMeal) {
    // Check if favorites already exists
    if (localStorage.getItem("favorites") === null) {
      let favorites: SelectedMeal[] = [];
      favorites.push(meal);

      localStorage.setItem("favorites", JSON.stringify(favorites));
      return;
    }

    let existingFavorites: SelectedMeal[] = JSON.parse(
      localStorage.getItem("favorites")!
    );
    existingFavorites.push(meal);
    localStorage.setItem("favorites", JSON.stringify(existingFavorites));

    props.setAlreadyFavorite((prev: boolean) => !prev);

    toast({
      title: "New Dish added!",
      status: "success",
      isClosable: true,
    });
  }

  function removeFavorite() {
    const existingFavorites: SelectedMeal[] = JSON.parse(localStorage.getItem("favorites")!);

    const filteredFavorites = existingFavorites.filter(fav => fav.strMeal !== props.selectedMeal?.strMeal);

    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));

    props.onClose();
    
    if (location.pathname === "/favorites") {
      window.location.reload();
    } else {
      toast({
        title: "Dish removed.",
        status: "success",
        isClosable: true,
      });
    }
  }

  function getIngredientsAndMeasurements() {
    const validKeys = [];
    for (const property in props.selectedMeal) {
      if (props.selectedMeal[property as keyof SelectedMeal] === "" || props.selectedMeal[property as keyof SelectedMeal] === null) {

      } else {
        validKeys.push(property)
      }
    }

    const ingredientValues = validKeys.filter(key => key.startsWith("strIngredient"));
    const measurements = validKeys.filter(key => key.startsWith("strMeasure"));

    for (const i of ingredientValues) {
      setIngredients(prev => [...prev, props.selectedMeal![i as keyof SelectedMeal]])
    }

    for (const m of measurements) {
      setMeasurements(prev => [...prev, props.selectedMeal![m as keyof SelectedMeal]])
    }
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size="custom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              w="90%"
              justifyContent="space-between"
              h="50px"
              alignItems="center"
            >
              {!props.alreadyFavorite ? (
                <Flex cursor="pointer" onClick={() => setFavorite(props.selectedMeal!)} gap=".5rem" alignItems="center">
                  <Box
                    cursor="pointer"
                    fontSize={{ base: "10px", lg: "30px" }}
                  >
                    <AiOutlineHeart
                      fontSize={{ base: "10px", lg: "50px" }}
                      color="#AD192A"
                    />
                  </Box>
                  <Text
                    display={{ base: "none", lg: "block" }}
                  >
                    Add to favorites
                  </Text>
                </Flex>
              ) : (
                <Flex cursor="pointer" onClick={() => removeFavorite()} gap=".5rem" alignItems="center">
                  <Box fontSize={{ base: "10px", lg: "30px" }}>
                    <AiFillHeart
                      fontSize={{ base: "10px", lg: "50px" }}
                      color="AD192A"
                    />
                  </Box>
                  <Text
                    display={{ base: "none", lg: "block" }}
                  >
                    Remove from Favorites
                  </Text>
                </Flex>
              )}

              <Box flex="2" w="100%" justifyContent="center" display="flex">
                <Heading
                  justifySelf="center"
                  fontSize={{ base: "15px", lg: "30px" }}
                  fontFamily="Fasthand"
                  color="#AD192A"
                >
                  {props.selectedMeal?.strMeal}
                </Heading>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mt="2rem" gap="1rem" flexDir={{ base: "column", lg: "row" }}>
              <Box w={{ base: "100%", lg: "50%" }} flex="1">
                <Flex gap="1rem" flexDir={{ base: "column", lg: "row" }}>
                  <Image
                    src={props.selectedMeal?.strMealThumb}
                    h="350px"
                    w={{ base: "100%", lg: "50%" }}
                    borderRadius="20px"
                    objectFit="cover"
                  />

                  <Box>
                    {props.selectedMeal?.strYoutube !== undefined ||
                    props.selectedMeal?.strYoutube !== "" ? (
                      <Link
                        style={{ height: "50px" }}
                        target="_blank"
                        to={props.selectedMeal?.strYoutube!}
                      >
                        <AiFillYoutube
                          height="50px"
                          fontSize="50px"
                          color="FF0000"
                        />
                        YouTube Video
                      </Link>
                    ) : (
                      <Tag h="20px" color="white" bg="#AD192A">
                        No Youtube video available 😔
                      </Tag>
                    )}

                    <Heading
                      mt="1rem"
                      fontSize={{ base: "16px", lg: "25px" }}
                      color="#AD192A"
                    >
                      Tags
                    </Heading>
                    { tags !== undefined ? <Flex mt="1rem" gap="10px" flexDir="column">
                      {tags?.map((tag, index) => (
                        <Tag color="#FCFFAF" bg="#AD192A" key={index}>{tag}</Tag>
                      ))}
                    </Flex> : <Tag mt="1rem" color="#FCFFAF" bg="#AD192A">No tags available</Tag>}
                  </Box>
                </Flex>
                <Heading
                  fontSize={{ base: "16px", lg: "25px" }}
                  mt="1rem"
                  color="#AD192A"
                >
                  Method
                </Heading>
                <Text
                  mt="1rem"
                  mb="2rem"
                  fontSize={{ base: "10px", lg: "16px" }}
                  lineHeight="24px"
                >
                  {props.selectedMeal?.strInstructions}
                </Text>
              </Box>

              <Box mb={{ base: "1rem" }}>
                <Box position="sticky" top="1rem">
                  <Heading
                    fontSize={{ base: "16px", lg: "25px" }}
                    color="#AD192A"
                  >
                    Ingredients and measurements
                  </Heading>
                  <List mt="1rem" spacing={3}>
                    {ingredients.map((ingredient, index) => (
                      <ListItem key={index}
                      fontSize={{ base: "10px", lg: "16px" }}
                    >
                      <ListIcon as={FaCircleNotch} color="#AD192A" />
                      {ingredient} (
                      {measurements[index]})
                    </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChakraModal;
