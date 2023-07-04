import React from "react";
import Nav from "../Components/Nav";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Clubs = () => {
  const data = [
    "📕 Academic",
    "🏃🏿 Athletic",
    "💒 Charity,Good Will",
    "🪙 Crypto,Trading",
    "🎤 Entertainment",
    "👔 Entrepreneurship,Social",
    "🎟️ Events 🔥",
    "🏦 Financial",
    "🗣️ Leadership,public speaking",
    "📽️ Media",
    "🛐 Religious",
    "🧑🏿‍💻 Tech",
    "🥁 Traditional,Ethnic",
  ];

  const ClubsGrid = () => {
    return (
      <div>
        <Nav />
        <Box px={{ base: "24px", md: "80px" }} my="50px">
          <Box fontSize="70px">🎒</Box>
          <Text fontSize="40px" as="b">
            Clubs & Orgs
          </Text>
          <Grid
            my="5"
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(5, 1fr)",
            }}
            gap={6}
          >
            {data.map((item, i) => (
              <Link to={`/clubs-orgs/${item}/${i}`}>
                <GridItem
                  key={i}
                  w="100%"
                  py="5"
                  px="3"
                  border="1px solid #e6e6e5"
                  borderRadius="6px"
                  alignItems="center"
                  cursor="pointer"
                >
                  {item}
                </GridItem>
              </Link>
            ))}
          </Grid>
        </Box>
      </div>
    );
  };

  return <ClubsGrid />;
};

export default Clubs;
