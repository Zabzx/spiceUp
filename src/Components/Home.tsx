import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Container,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Variables
  const navigate = useNavigate();

  // State
  const [userInput, setUserInput] = useState<string>();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(`/search/userinput/${userInput}`);
  }

  return (
    <>
      <Container maxW="90%" h="300px">
        <Flex
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Box w={["90%", "70%", "50%"]}>
          <form onSubmit={(e) => submit(e)}>
          <InputGroup w={["90%", "70%", "100%"]}>
            <InputLeftElement mt="5px" pointerEvents="none">
              <BsSearch />
            </InputLeftElement>
            <Input
              size="lg"
              type="text"
              placeholder="Search for dishes or ingredients!"
              focusBorderColor="#FF2424"
              _focus={{ border: "2px solid #DD3766" }}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </InputGroup>
          </form>
          </Box>
        </Flex>

        <Flex alignItems="center" justifyContent={["center", "center", "center", "space-around"]} flexDir={["column", "column", "column", "row"]} gap={["1rem", "1rem", "1rem", "0rem"]}>
          <Box
            w={["100%", "50%", "50%", "30%"]}
            boxShadow="-2px 11px 17px -3px rgba(0,0,0,0.77)"
            borderRadius="20px"
            border="1px solid"
            borderColor="#D4D4D4"
            backgroundColor="white"
            position="relative"
            zIndex="1"
          >
            <Container maxW="90%">
              <Flex mt="1rem" w="100%" justifyContent="center">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="49.8314"
                    cy="49.8936"
                    rx="49.8314"
                    ry="49.8936"
                    fill="#DD3766"
                  />
                  <g clipPath="url(#clip0_61_6)">
                    <path
                      d="M30.5314 43.7543L31.4463 45.3525C32.2541 46.7655 33.5777 47.8082 35.1447 48.2565L40.7799 49.8644C42.454 50.3418 43.6024 51.8718 43.6024 53.6161V57.5043C43.6024 58.5762 44.2058 59.5507 45.1596 60.0282C46.1134 60.5057 46.7169 61.4802 46.7169 62.5521V66.3526C46.7169 67.8728 48.167 68.974 49.6269 68.555C51.1939 68.1067 52.4105 66.8496 52.8095 65.2612L53.0821 64.1698C53.4908 62.5229 54.5614 61.1099 56.0311 60.2718L56.8194 59.8236C58.2793 58.9953 59.1747 57.4361 59.1747 55.76V54.9512C59.1747 53.7136 58.6783 52.5247 57.8024 51.6477L57.4228 51.2676C56.5469 50.3906 55.3595 49.8936 54.1234 49.8936H49.9287C48.8483 49.8936 47.7777 49.611 46.8337 49.075L43.4759 47.1553C43.0574 46.9117 42.7362 46.5219 42.5805 46.0639C42.269 45.1284 42.6875 44.1149 43.5732 43.6764L44.1474 43.384C44.7898 43.0624 45.5392 43.004 46.2205 43.2379L48.4785 43.9882C49.2766 44.2513 50.1525 43.9492 50.6099 43.2573C51.0674 42.5752 51.0187 41.6689 50.4932 41.0355L49.1695 39.4471C48.1962 38.2777 48.206 36.5724 49.1987 35.4225L50.7267 33.6392C51.5832 32.6355 51.7195 31.203 51.0674 30.0628L50.8338 29.6535C50.4932 29.634 50.1622 29.6243 49.8216 29.6243C40.7897 29.6243 33.13 35.5589 30.5314 43.7543ZM70.0753 49.8936C70.0753 46.3075 69.141 42.9358 67.5059 40.0026L65.0143 41.0063C63.4863 41.6202 62.6979 43.3256 63.2138 44.8847L64.8586 49.8254C65.1992 50.8388 66.0265 51.6087 67.0582 51.862L69.8904 52.5734C70.0072 51.6964 70.0656 50.7999 70.0656 49.8936H70.0753ZM24.9156 49.8936C24.9156 43.2773 27.5407 36.932 32.2133 32.2535C36.8859 27.5751 43.2233 24.9468 49.8313 24.9468C56.4394 24.9468 62.7768 27.5751 67.4494 32.2535C72.122 36.932 74.747 43.2773 74.747 49.8936C74.747 56.5099 72.122 62.8552 67.4494 67.5336C62.7768 72.2121 56.4394 74.8404 49.8313 74.8404C43.2233 74.8404 36.8859 72.2121 32.2133 67.5336C27.5407 62.8552 24.9156 56.5099 24.9156 49.8936Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_6">
                      <rect
                        width="49.8314"
                        height="49.8936"
                        fill="white"
                        transform="translate(24.9156 24.9468)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Flex>

              <Text mt="1rem">
                Find amazing dishes and recipes from around the world.
              </Text>

              <Flex w="100%" justifyContent="center" mt="1rem" mb="1rem">
                <Button
                  bg="#DD3766"
                  borderRadius="20px"
                  color="white"
                  textAlign="center"
                  _hover={{ opacity: 0.7 }}
                >
                  BY REGION
                </Button>
              </Flex>
            </Container>
          </Box>

          <Box
            w={["100%", "50%", "50%", "30%"]}
            boxShadow="-2px 11px 17px -3px rgba(0,0,0,0.77)"
            borderRadius="20px"
            border="1px"
            borderColor="#D4D4D4"
            position="relative"
            zIndex="1"
            backgroundColor="white"
          >
            <Container maxW="90%">
              <Flex mt="1rem" w="100%" justifyContent="center">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#DD3766" />
                  <path
                    d="M67.984 34.5765C67.5885 34.5657 67.1984 34.6855 66.8457 34.9671C66.6951 35.0872 66.543 35.2487 66.4092 35.431C64.1728 38.4798 61.6945 41.0296 59.0668 43.3411C58.2113 44.7759 60.1112 47.6776 61.5662 47.6776C64.9006 46.4151 68.3647 45.4788 71.991 45.1079C76.1539 44.6823 73.7184 38.4542 69.4275 40.6675C72.3865 38.454 70.1203 34.6333 67.984 34.5763V34.5765ZM55.3193 35.5621C54.7171 35.5516 54.1265 35.6766 53.6011 35.9801C53.4472 36.0691 53.304 36.1703 53.1708 36.2823C53.1671 36.2769 53.162 36.2696 53.1585 36.2642C45.3546 42.7487 41.7977 43.4388 37.7073 44.745C37.0349 44.9599 36.5091 45.4462 36.096 46.2587C35.6829 47.0712 35.4229 48.1965 35.3789 49.4936C35.291 52.0876 36.0561 55.3458 37.6953 58.1879C39.3281 61.0189 41.9307 63.4561 44.3023 64.7432C45.4882 65.3867 46.615 65.736 47.464 65.7623C48.313 65.7887 48.8228 65.5719 49.2005 65.0421C52.2265 60.7989 57.9254 58.2987 64.4502 56.0333C64.4497 56.0327 64.4505 56.0311 64.4502 56.0304C64.6467 55.9656 64.8376 55.8829 65.0207 55.7771C65.8215 55.3144 66.3425 54.5176 66.6107 53.6164C66.879 52.7153 66.9252 51.6877 66.809 50.5647C66.7159 49.663 66.5128 48.6968 66.2079 47.6961C65.6302 47.8295 65.0724 48.0044 64.4591 48.2303C64.7359 49.1336 64.9171 49.9859 64.9962 50.7508C65.0945 51.702 65.0355 52.5145 64.8619 53.0978C64.6884 53.681 64.431 54.0097 64.1082 54.1964C63.7851 54.3829 63.3716 54.441 62.7806 54.2999C62.1895 54.159 61.4573 53.8048 60.6839 53.2442C59.1372 52.123 57.4286 50.1951 56.0331 47.7755C54.6376 45.3556 53.8251 42.9085 53.6284 41.0065C53.5302 40.0556 53.5891 39.2461 53.7627 38.6628C53.9365 38.0795 54.1937 37.7478 54.5166 37.5612C54.678 37.4678 54.8603 37.4069 55.0781 37.3872C55.1325 37.3823 55.1901 37.3807 55.249 37.3811C55.4258 37.3824 55.6225 37.4076 55.8441 37.4605C56.435 37.6016 57.1643 37.9527 57.9376 38.5133C58.7401 39.095 59.5864 39.8967 60.4097 40.8693C60.9048 40.4733 61.3218 40.0637 61.7188 39.5814C60.8429 38.56 59.9253 37.7006 59.0089 37.0363C58.0954 36.3742 57.1795 35.9025 56.2653 35.6844C56.0368 35.6299 55.8089 35.5931 55.5788 35.5745C55.4924 35.5677 55.4054 35.564 55.3193 35.5624V35.5621ZM56.0974 38.9008C56.0546 38.9031 56.0134 38.9069 55.9724 38.913C54.2803 39.161 54.5104 42.432 56.4636 46.1942C58.4167 49.9567 61.3972 52.7935 63.089 52.545C63.6744 52.4591 63.9935 51.9896 64.1298 51.2877C63.9667 51.5013 63.7541 51.6279 63.4735 51.6692C61.9778 51.8888 59.3411 49.4141 57.6142 46.0876C55.8874 42.761 55.7339 39.8464 57.2297 39.627C57.585 39.5752 57.9807 39.6677 58.4352 39.8986C57.5876 39.2346 56.7406 38.8651 56.0976 38.9008H56.0974ZM34.9609 56.7504C33.3442 56.9305 31.5133 57.0688 29.3884 57.1777C24.5907 57.4241 26.8928 64.1676 32.3272 62.2773C27.5064 65.1973 32.7042 70.7663 34.961 66.8428C35.9729 65.0834 37.0977 63.543 38.318 62.1734C37.4957 61.2316 36.7478 60.1984 36.1145 59.1002C35.6731 58.3351 35.2882 57.5477 34.961 56.7506L34.9609 56.7504Z"
                    fill="white"
                  />
                </svg>
              </Flex>

              <Text mt="1rem">
                Search for specific ingredients you would like to see, and get a
                wide range of results.
              </Text>

              <Flex w="100%" justifyContent="center" mt="1rem" mb="1rem">
                <Button
                  bg="#DD3766"
                  borderRadius="20px"
                  color="white"
                  textAlign="center"
                  _hover={{ opacity: 0.7 }}
                >
                  BY INGREDIENT
                </Button>
              </Flex>
            </Container>
          </Box>

          <Box
            w={["100%", "50%", "50%", "30%"]}
            boxShadow="-2px 11px 17px -3px rgba(0,0,0,0.77)"
            borderRadius="20px"
            border="1px solid"
            borderColor="#D4D4D4"
            position="relative"
            zIndex="1"
            backgroundColor="white"
          >
            <Container maxW="90%">
              <Flex mt="1rem" w="100%" justifyContent="center">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#DD3766" />
                  <path
                    d="M70.0684 38.8477C69.4139 37.3322 68.4701 35.9589 67.29 34.8047C66.109 33.647 64.7166 32.727 63.1885 32.0947C61.6039 31.4365 59.9043 31.0996 58.1885 31.1035C55.7812 31.1035 53.4326 31.7627 51.3916 33.0078C50.9033 33.3057 50.4395 33.6328 50 33.9893C49.5605 33.6328 49.0967 33.3057 48.6084 33.0078C46.5674 31.7627 44.2187 31.1035 41.8115 31.1035C40.0781 31.1035 38.3984 31.4356 36.8115 32.0947C35.2783 32.7295 33.8965 33.6426 32.71 34.8047C31.5283 35.9576 30.5844 37.3312 29.9316 38.8477C29.2529 40.4248 28.9062 42.0996 28.9062 43.8232C28.9062 45.4492 29.2383 47.1436 29.8975 48.8672C30.4492 50.3076 31.2402 51.8018 32.251 53.3106C33.8525 55.6982 36.0547 58.1885 38.7891 60.7129C43.3203 64.8975 47.8076 67.7881 47.998 67.9053L49.1553 68.6475C49.668 68.9746 50.3271 68.9746 50.8398 68.6475L51.9971 67.9053C52.1875 67.7832 56.6699 64.8975 61.2061 60.7129C63.9404 58.1885 66.1426 55.6982 67.7441 53.3106C68.7549 51.8018 69.5508 50.3076 70.0977 48.8672C70.7568 47.1436 71.0889 45.4492 71.0889 43.8232C71.0937 42.0996 70.7471 40.4248 70.0684 38.8477Z"
                    fill="white"
                  />
                </svg>
              </Flex>

              <Text mt="1rem">Save dishes to your favorites to for easy access ❣️</Text>

              <Flex w="100%" justifyContent="center" mt="1rem" mb="1rem">
                <Button
                  bg="#DD3766"
                  borderRadius="20px"
                  color="white"
                  textAlign="center"
                  _hover={{ opacity: 0.7 }}
                >
                  FAVORITES
                </Button>
              </Flex>
            </Container>
          </Box>
        </Flex>

        {/* <Box _after={{ content: `""`, position: "absolute", top: "50%", left: "0", width: "100%", height: "5px", backgroundColor: "#FF2424"}}></Box> */}
      </Container>

      <Box overflow="hidden" position={["absolute", "absolute", "absolute", "absolute"]} top={["300%", "200%", "200%", "100%"]} left="0" width="100%" lineHeight="0" zIndex="0">
        <svg
          width="1920"
          height="470"
          viewBox="0 0 1920 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8_45)">
            <path
              d="M1577.06 363.584C1450.67 282 1318.05 121.417 1190.14 55.5775C1058.53 -12.3375 921.248 -8.38166 789.424 57.105C696.88 103.048 607.024 178.796 514.224 221.057C341.781 298.702 163.945 259.3 0 107.121L0 470H1920V375.217C1811.5 465.77 1689.14 435.964 1577.06 363.584Z"
              fill="#DD3766"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_45">
              <rect width="1920" height="470" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </>
  );
};

export default Home;
