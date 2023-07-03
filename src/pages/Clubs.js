import React from "react";
import Nav from "../Components/Nav";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const Clubs = () => {
  const data = [
    "📕 Academic",
    "🏃🏿 Athletic",
    "💒 Charity/Good Will",
    "🪙 Crpto/Trading",
    "🎤 Entertainment",
    "👔 Entrepreneuership/Social",
    "🎟️ Events 🔥",
    "🏦 Financial",
    "🗣️ Leadership/public speaking",
    "📽️ Media",
    "🛐 Religious",
    "🧑🏿‍💻 Tech",
    "🥁 Traditional/Ethnic",
  ];
  let { hive } = useParams();
  return (
    <div>
      <Nav />
      <Box px={{ base: "24px", md: "80px" }} my="50px">
        <Box fontSize="70px">🎒</Box>
        <Box>Clubs & Orgs</Box>
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
            <GridItem
              w="100%"
              py="5"
              px="3"
              border="1px solid #e6e6e5"
              borderRadius="6px"
              alignItems="center"
              cursor="pointer"
            >
              <Link to={`clubs-orgs/${hive}`}>{item}</Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default Clubs;

// export const Item = () => {
//   return (
//     <GridItem
//       w="100%"
//       py="5"
//       px="3"
//       border="1px solid #e6e6e5"
//       borderRadius="6px"
//       alignItems="center"
//       cursor="pointer"
//     >
//       <Link to={`clubs-orgs/${hive}`}>{item}</Link>
//     </GridItem>
//   );
// };
