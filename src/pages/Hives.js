import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Hives = () => {
  let { hive, id } = useParams();
  const RawData = [
    ["LFX"],
    [" "],
    ["Red Cross Society", "Zero Depression"],
    ["Chainverse Group", "Crpto/Trading", "NOVA", "MARA"],
    ["Astro World Entertainment", "Sekani Mall", "Dance group"],
    [
      "Enactus FUTO",
      "HultPrize FUTO",
      "Roteract",
      "Veno Group",
      "Student Business Club (SBC)",
    ],
    ["Mega Student Leadership Conference (MSLC)"],
    ["FFC- Financial Fitness Clinic", "Cowrywise"],
    ["TEDx FUTO"],
    ["Sipisi", "Innovative Media"],
    [
      "CFI- Christian Fellowship International",
      "Believers Loveworld",
      "RCF- Reedeem Christian Fellowship",
      "NFCS- Nigeria Fellowship Of Catholic Students",
      "Living Word Campus Fellowship",
      "NIFES",
      "SU- Student Union",
      "Student Christian Movement",
      "WCF- Winners Campus Fellowship",
      "DLCF- Deeper Life Campus fellowship",
      "PSF",
      "NCF- New Covenant Family",
      "CASOR-",
      "EFAC-",
      "ASF- Anglican Student Fellowship",
    ],
    [
      "TEFEM- The Female Media",
      "CI HUB",
      "IEEE FUTO",
      "She Codes Africa",
      "MSL- Microsoft Student Learn",
      "I4G FUTO",
      "GDSC",
      "FUTO drone club,",
    ],
    ["Mbaise Group", "Orlu Alliance Group", "Kegites"],
  ];

  const data = RawData[id];
  console.log(data[id]);
  return (
    <>
      <Nav />
      <Box px={{ base: "24px", md: "80px" }} my="50px">
        <Box fontSize="70px">{hive.split(" ")[0]}</Box>
        <Text fontSize="40px" as="b">
          {hive.split(" ")[1]} {hive.split(" ")[2]}
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
            <GridItem
              key={i}
              w="100%"
              p="3"
              border="1px solid #e6e6e5"
              borderRadius="6px"
              alignItems="center"
              cursor="pointer"
            >
              {item}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Hives;
