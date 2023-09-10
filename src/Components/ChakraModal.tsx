import { useEffect, useState } from "react";
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
import { SelectedMeal } from "./SearchResults";
import { FaCircleNotch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

type Props = {
  selectedMeal: SelectedMeal | undefined;
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
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);

  // Effects
  useEffect(() => {
    let tags = props.selectedMeal?.strTags;

    let tagArray = tags?.split(",");
    setTags(tagArray);
  }, [props.selectedMeal]);
  
  // Check if dish is already favorited
  useEffect(() => {
    let existingFavorites: SelectedMeal[] = JSON.parse(localStorage.getItem("favorites")!);

    if (existingFavorites === null) return;

    const searchKey = "strMeal";
    const searchValue = props.selectedMeal?.strMeal;

    const found = existingFavorites.some(obj => obj[searchKey] === searchValue);

    if (found) {
      setAlreadyFavorite(true);
    } else {
      setAlreadyFavorite(false);
    }
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

    setAlreadyFavorite((prev: boolean) => !prev);

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
              {!alreadyFavorite ? (
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
                    <Flex mt="1rem" gap="10px" flexDir="column">
                      {tags?.map((tag, _) => (
                        <>
                          {tag !== "" ? (
                            <Tag color="#FCFFAF" bg="#AD192A">
                              {tag}
                            </Tag>
                          ) : (
                            ""
                          )}
                        </>
                      ))}
                    </Flex>
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
                    {props.selectedMeal?.strIngredient1 !== null &&
                      props.selectedMeal?.strIngredient1 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient1} (
                          {props.selectedMeal?.strMeasure1})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient2 !== null &&
                      props.selectedMeal?.strIngredient2 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient2} (
                          {props.selectedMeal?.strMeasure2})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient3 !== null &&
                      props.selectedMeal?.strIngredient1 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient3} (
                          {props.selectedMeal?.strMeasure3})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient4 !== null &&
                      props.selectedMeal?.strIngredient1 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient4} (
                          {props.selectedMeal?.strMeasure4})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient5 !== null &&
                      props.selectedMeal?.strIngredient5 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient5} (
                          {props.selectedMeal?.strMeasure5})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient6 !== null &&
                      props.selectedMeal?.strIngredient6 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient6} (
                          {props.selectedMeal?.strMeasure6})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient7 !== null &&
                      props.selectedMeal?.strIngredient7 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient7} (
                          {props.selectedMeal?.strMeasure7})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient8 !== null &&
                      props.selectedMeal?.strIngredient8 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient8} (
                          {props.selectedMeal?.strMeasure8})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient9 !== null &&
                      props.selectedMeal?.strIngredient9 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient9} (
                          {props.selectedMeal?.strMeasure9})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient10 !== null &&
                      props.selectedMeal?.strIngredient10 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient10} (
                          {props.selectedMeal?.strMeasure10})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient11 !== null &&
                      props.selectedMeal?.strIngredient11 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient11} (
                          {props.selectedMeal?.strMeasure11})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient12 !== null &&
                      props.selectedMeal?.strIngredient12 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient12} (
                          {props.selectedMeal?.strMeasure12})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient13 !== null &&
                      props.selectedMeal?.strIngredient13 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient13} (
                          {props.selectedMeal?.strMeasure13})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient14 !== null &&
                      props.selectedMeal?.strIngredient14 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient14} (
                          {props.selectedMeal?.strMeasure14})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient15 !== null &&
                      props.selectedMeal?.strIngredient15 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient15} (
                          {props.selectedMeal?.strMeasure15})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient16 !== null &&
                      props.selectedMeal?.strIngredient16 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient16} (
                          {props.selectedMeal?.strMeasure16})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient17 !== null &&
                      props.selectedMeal?.strIngredient17 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient17} (
                          {props.selectedMeal?.strMeasure17})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient18 !== null &&
                      props.selectedMeal?.strIngredient18 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient18} (
                          {props.selectedMeal?.strMeasure18})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient19 !== null &&
                      props.selectedMeal?.strIngredient19 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient19} (
                          {props.selectedMeal?.strMeasure19})
                        </ListItem>
                      )}

                    {props.selectedMeal?.strIngredient20 !== null &&
                      props.selectedMeal?.strIngredient20 !== "" && (
                        <ListItem
                          fontSize={{ base: "10px", lg: "16px" }}
                        >
                          <ListIcon as={FaCircleNotch} color="#AD192A" />
                          {props.selectedMeal?.strIngredient20} (
                          {props.selectedMeal?.strMeasure20})
                        </ListItem>
                      )}
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
