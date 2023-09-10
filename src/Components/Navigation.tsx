import { PiBowlFoodFill } from "react-icons/pi";
import {
  Flex,
  Box,
  Heading,
  Text,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import NavMenu from "./NavMenu";

const Navigation = () => {
  // Variables
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  type NavLink = {
    name: string;
    url: string;
  };

  const navLinks: NavLink[] = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "CATEGORIES",
      url: "/categories",
    },
    {
      name: "BY REGION",
      url: "/region",
    },
    {
      name: "RANDOM",
      url: "/random",
    },
    {
      name: "FAVORITES",
      url: "/favorites",
    },
  ];

  return (
    <>
      <Container maxW="90%">
        <Flex justifyContent="space-between" alignItems="center" height="75px">
          <Flex gap="1rem" alignItems="center">
            <PiBowlFoodFill color="#AD192A" fontSize="32px" />
            <Link to="/">
            <Heading
              variant="fasthand"
              fontSize={{ base: "20px", lg: "40px"}}
            >
              SpiceUp!
            </Heading>
            </Link>
          </Flex>

          <Box display={["none", "none", "none", "block"]}>
            <Flex gap="2rem">
              {navLinks.map((item, index) => (
                <Link key={index} to={item.url}>
                  {location.pathname === item.url ? (
                    <Text
                      backgroundColor="#AD192A"
                      borderRadius="20px"
                      color="#FCFFAF"
                      px="15px"
                      position="relative"
                      _after={{
                        content: `""`,
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "#AD192A",
                        h: "5px",
                        w: "0%",
                        mb: "-10px",
                        transition: "0.3s",
                        borderRadius: "10px",
                      }}
                      _hover={{
                        "&::after": {
                          width: "100%",
                        },
                      }}
                      cursor="pointer"
                    >
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      borderRadius="20px"
                      color="black"
                      px="15px"
                      position="relative"
                      _after={{
                        content: `""`,
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        backgroundColor: "#AD192A",
                        h: "5px",
                        w: "0%",
                        mb: "-10px",
                        transition: "0.3s",
                        borderRadius: "10px",
                      }}
                      _hover={{
                        "&::after": {
                          width: "100%",
                        },
                      }}
                      cursor="pointer"
                    >
                      {item.name}
                    </Text>
                  )}
                </Link>
              ))}
            </Flex>
          </Box>

          <Box
            className="menu"
            display={["block", "block", "block", "none"]}
            onClick={onOpen}
          >
            <Box
              backgroundColor="#FF2424"
              h="5px"
              w="30px"
              borderRadius="10px"
            ></Box>
            <Box
              backgroundColor="#FF2424"
              h="5px"
              w="30px"
              borderRadius="10px"
              mt="3px"
            ></Box>
            <Box
              backgroundColor="#FF2424"
              h="5px"
              w="30px"
              borderRadius="10px"
              mt="3px"
            ></Box>
          </Box>
        </Flex>
      </Container>

      <NavMenu onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Navigation;
