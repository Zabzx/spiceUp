import { Grid, GridItem, Container, Box, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Category, Categories as ctg } from "../data";

const Categories = () => {
    const navigate = useNavigate();
    
    const searchCategory = async (item: Category) => {
        navigate(`/search/category/${item.query}`);
    }

    return (
        <>
        <Heading mt={{ base: "2rem", lg: "1rem", }} textAlign="center" fontFamily="Fasthand">Select a Category</Heading>
        <Container maxW="90%">
            <Grid mt="1rem" mb="3rem" templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap="2rem" >
                {ctg.map((item, index) => (
                    <GridItem onClick={() => searchCategory(item)} key={index} bg="#AD192A" borderRadius="20px">
                    <Box bg="black" borderRadius="20px"> { /* Overlay for dark thumbnail */}
                    <Image _hover={{ transform: "scale(.9)" }} transition="0.4s" cursor="pointer" objectFit="cover" h={["200px", "200px", "200px", "470px"]} w="100%" opacity="0.7" src={item.image} borderRadius="20px" />
                    </Box>
                    <Heading py=".5rem" color="#FCFFAF" textAlign="center">{item.name}</Heading>
                </GridItem>
                ))}
            </Grid>
        </Container>
        </>
    )
}

export default Categories