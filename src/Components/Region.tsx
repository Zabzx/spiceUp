import { Grid, GridItem, Container, Box, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CANADA from "../assets/region thumbnails/canada.png"
import CHINA from "../assets/region thumbnails/china.png"
import CROATIA from "../assets/region thumbnails/croatia.png"
import EGYPT from "../assets/region thumbnails/egypt.png"
import FRANCE from "../assets/region thumbnails/france.png"
import GREECE from "../assets/region thumbnails/greece.png"
import INDIA from "../assets/region thumbnails/india.png"
import IRELAND from "../assets/region thumbnails/ireland.png"
import ITALY from "../assets/region thumbnails/italy.png"
import JAMAICA from "../assets/region thumbnails/jamaica.png"
import JAPAN from "../assets/region thumbnails/japan.png"
import KENYA from "../assets/region thumbnails/kenya.png"
import MALAYSIA from "../assets/region thumbnails/malaysia.png"
import MEXICO from "../assets/region thumbnails/mexico.png"
import MOROCCO from "../assets/region thumbnails/morocco.png"
import NETHERLANDS from "../assets/region thumbnails/netherlands.png"
import PHILIPPINES from "../assets/region thumbnails/philippines.png"
import POLAND from "../assets/region thumbnails/poland.png"
import PORTUGAL from "../assets/region thumbnails/portugal.png"
import RUSSIA from "../assets/region thumbnails/russia.png"
import SPAIN from "../assets/region thumbnails/spain.png"
import THAILAND from "../assets/region thumbnails/thailand.png"
import TUNISIA from "../assets/region thumbnails/tunisia.png"
import TURKEY from "../assets/region thumbnails/turkey.png"
import UK from "../assets/region thumbnails/uk.png"
import UNITEDSTATES from "../assets/region thumbnails/united-states.png"
import VIETNAM from "../assets/region thumbnails/vietnam.png"

const Region = () => {
    // Types
    type Region = {
        name: string,
        image: string,
        query: string,
    }

    // Variables
    const regions: Region[] = [
        {
            name: "Canada",
            image: CANADA,
            query: "Canadian"
        },
        {
            name: "China",
            image: CHINA,
            query: "Chinese"
        },
        {
            name: "Croatia",
            image: CROATIA,
            query: "Croatian"
        },
        {
            name: "Egypt",
            image: EGYPT,
            query: "Egyptian"
        },
        {
            name: "France",
            image: FRANCE,
            query: "French"
        },
        {
            name: "Greece",
            image: GREECE,
            query: "Greek"
        },
        {
            name: "India",
            image: INDIA,
            query: "Indian"
        },
        {
            name: "Ireland",
            image: IRELAND,
            query: "Irish"
        },
        {
            name: "Italy",
            image: ITALY,
            query: "Italian"
        },
        {
            name: "Jamaica",
            image: JAMAICA,
            query: "Jamaican"
        },
        {
            name: "Japan",
            image: JAPAN,
            query: "Japanese"
        },
        {
            name: "Kenya",
            image: KENYA,
            query: "Kenyan"
        },
        {
            name: "Malaysia",
            image: MALAYSIA,
            query: "Malaysian"
        },
        {
            name: "Mexico",
            image: MEXICO,
            query: "Mexican"
        },
        {
            name: "Morocco",
            image: MOROCCO,
            query: "Moroccan"
        },
        {
            name: "Netherlands",
            image: NETHERLANDS,
            query: "Dutch"
        },
        {
            name: "Philippines",
            image: PHILIPPINES,
            query: "Filipino"
        },
        {
            name: "Poland",
            image: POLAND,
            query: "Polish"
        },
        {
            name: "Portugal",
            image: PORTUGAL,
            query: "Portuguese"
        },
        {
            name: "Russia",
            image: RUSSIA,
            query: "Russian",
        },
        {
            name: "Spain",
            image: SPAIN,
            query: "Spanish"
        },
        {
            name: "Thailand",
            image: THAILAND,
            query: "Thai"
        },
        {
            name: "Tunisia",
            image: TUNISIA,
            query: "Tunisian"
        },
        {
            name: "Turkey",
            image: TURKEY,
            query: "Turkish"
        },
        {
            name: "UK",
            image: UK,
            query: "British"
        },
        {
            name: "United States",
            image: UNITEDSTATES,
            query: "American"
        },
        {
            name: "Vietnam",
            image: VIETNAM,
            query: "Vietnamese"
        }
    ];

    let navigate = useNavigate();

    // Functions
    function searchRegion(item: Region) {
        navigate(`/search/region/${item.query}`);
    }

    return (
        <>
        <Heading mt={{ base: "2rem", lg: "1rem", }} textAlign="center" fontFamily="Fasthand">Select a Region</Heading>
        <Container maxW="90%">
            <Grid mt="1rem" mb="3rem" templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap="2rem" >
                {regions.map((item, index) => (
                    <GridItem onClick={() => searchRegion(item)} key={index} bg="#DD3766" borderRadius="20px">
                    <Box bg="black" borderRadius="20px"> { /* Overlay for dark thumbnail */}
                    <Image _hover={{ transform: "scale(.9)" }} transition="0.4s" cursor="pointer" objectFit="cover" h={["200px", "200px", "200px", "470px"]} w="100%" opacity="0.7" src={item.image} borderRadius="20px" />
                    </Box>
                    <Heading py=".5rem" color="white" textAlign="center">{item.name}</Heading>
                </GridItem>
                ))}
            </Grid>
        </Container>
        </>
    )
}

export default Region