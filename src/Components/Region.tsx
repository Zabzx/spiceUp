import { Grid, GridItem, Container, Box, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import lozad from "lozad";
import Blur from "../assets/category-thumbnails/blur.jpg"
import { useNavigate } from "react-router-dom";
import { Region as RGN, Regions } from "../data";

const Region = () => {

    let navigate = useNavigate();

    const [loaded, setLoaded] = useState(false);

    // Functions
    function searchRegion(item: RGN) {
        navigate(`/search/region/${item.query}`);
    }

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
        <Heading mt={{ base: "2rem", lg: "1rem", }} textAlign="center" fontFamily="Fasthand">Select a Region</Heading>
        <Container maxW="90%">
            <Grid mt="1rem" mb="3rem" templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap="2rem" >
                {Regions.map((item, index) => (
                    <GridItem w="100%" onClick={() => searchRegion(item)} key={index} bg="#AD192A" borderRadius="20px">
                    <Box bg="black" borderRadius="20px"> { /* Overlay for dark thumbnail */}
                    <Image className="lozad" _hover={{ transform: "scale(.9)" }} transition="0.4s" cursor="pointer" objectFit="cover" h={["200px", "200px", "200px", "470px"]} w="100%" opacity="0.7" src={ loaded ? item.image : Blur} borderRadius="20px" />
                    </Box>
                    <Heading py=".5rem" color="#FCFFAF" textAlign="center">{item.name}</Heading>
                </GridItem>
                ))}
            </Grid>
        </Container>
        </>
    )
}

export default Region