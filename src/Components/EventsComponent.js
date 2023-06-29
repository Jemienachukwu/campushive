import React from "react";
import { Card, Image, Stack, Flex, Box } from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";
import campushive from "../assets/campushive.jpeg";
import tedx from "../assets/TEDX.jpeg";
import elev8 from "../assets/elev8.jpeg";
const EventComp = () => {
  const cardData = [
    { img: tedx, title: "Tedx FUTO", paid: true, org: "TEDx Futo" },
    {
      img: campushive,
      title: "CampusHive Launch",
      paid: false,
      org: " CampusHive",
    },
    {
      img: elev8,
      title: "Elev8",
      paid: true,
      org: "Mega Student Leadership conference (MSLC)",
    },
  ];
  return (
    <Flex flexWrap="wrap" justifyContent={{ base: "center", md: "flex-start" }}>
      {cardData.map((item, i) => (
        <Card w={{ base: "90%", md: "270px" }} mx="10px" my="2">
          <Image
            src={item.img}
            alt={item.title}
            borderRadius="lg"
            w="100%"
            h="200px"
          />
          <Stack mt="6" spacing="3" p="3">
            <Box display="flex" alignItems="center">
              <FiFileText />
              {item.title}
            </Box>
            <Box
              bg={item.paid ? "rgba(255, 0, 0, 0.2)" : "rgba(45, 170, 66, 0.2)"}
              w="fit-content"
              px="4"
              borderRadius="3px"
            >
              {item.paid ? "PAID" : "FREE"}
            </Box>
            <Box display="flex" alignItems="center">
              <FiFileText />
              <Box>{item.org}</Box>
            </Box>
          </Stack>
        </Card>
      ))}
    </Flex>
  );
};

export default EventComp;
