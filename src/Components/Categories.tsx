import { Grid, GridItem, Container, Box, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Category, Categories as ctg } from "../data";
import lozad from "lozad";
import { useEffect, useState } from "react";
import Blur from "../assets/category-thumbnails/blur.jpg"

const Categories = () => {
    const navigate = useNavigate();
    
    const searchCategory = async (item: Category) => {
        navigate(`/search/category/${item.query}`);
    }

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = lozad(".lozad", {
            loaded: () => {
                setLoaded(true);
            },
        });
        observer.observe();
    }, []);

    return (
        <>
        <Heading mt={{ base: "2rem", lg: "1rem", }} textAlign="center" fontFamily="Fasthand">Select a Category</Heading>
        <Container maxW="90%">
            <Grid mt="1rem" mb="3rem" templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap="2rem" >
                {ctg.map((item, index) => (
                    <GridItem position="relative" w={["100%", "70%"]} h="auto" onClick={() => searchCategory(item)} key={index} bg="#AD192A" borderRadius="20px">
                    <Box bg="black" borderRadius="20px"> { /* Overlay for dark thumbnail */}
                    <Image className="lozad" _hover={{ transform: "scale(.9)" }} transition="0.4s" cursor="pointer" objectFit="cover" h="150px" w="100%" opacity="0.5" src={ loaded ? item.image : Blur} borderRadius="20px" />
                    </Box>
                    <Heading position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#FCFFAF" textAlign="center">{item.name}</Heading>
                </GridItem>
                ))}
            </Grid>
        </Container>
        </>
    )
}

export default Categories