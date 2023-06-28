import React from "react";
import { Card, Image, Text, Stack, Flex } from "@chakra-ui/react";
import { FiFileText } from "react-icons/fi";
import campushive from "../assets/campushive.jpeg";
import tedx from "../assets/TEDX.jpeg";
const Events = () => {
  const cardData = [
    { img: tedx, title: "Tedx FUTO", paid: true, org: "TEDx Futo" },
    { img: campushive, title: "Campushive", paid: false, org: "TEDx Futo" },
    {
      img: campushive,
      title: "Elev8",
      paid: true,
      org: "Mega Student Leadership conference (MSLC)",
    },
  ];
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      {cardData.map((item, i) => (
        <Card w="300px" mx="10px">
          <Image src={item.img} alt={item.title} borderRadius="lg" w="100%" />
          <Stack mt="6" spacing="3">
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
          </Stack>
        </Card>
      ))}
    </Flex>
  );
};

export default Events;
